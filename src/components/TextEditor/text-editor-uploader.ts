import { useApiUploadFile } from '@/api/upload'
import { errorHandler } from '@/helpers/error-handler'
import { watch } from '@vue/composition-api'

export class UploadAdapter {
  loader: any
  xhr: any
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._initRequest()
          this._initListeners(resolve, reject, file)
          this._sendRequest(file)
        }),
    )
  }

  // Aborts the upload process.
  abort() {
    // if (this.xhr) {
    // //   this.xhr.abort()
    // }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest() {
    this.xhr = useApiUploadFile({ toast: { error: errorHandler() } })
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr
    const loader = this.loader
    const genericErrorText = `Couldn't upload file: ${file.name}.`
    watch(xhr.error, () => reject(genericErrorText))

    watch(xhr.result, () => {
      const response = xhr.result.value
      console.log('done', response)
      resolve({
        default: response.url,
      })
    })
  }

  // Prepares the data and sends the request.
  _sendRequest(file: File) {
    this.xhr.exec({ file, name: file.name, type: file.type })
  }
}
export function uploader(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new UploadAdapter(loader)
  }
}
