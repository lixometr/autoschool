export default function buildFormData(values: any) {
    const formData = new FormData()
    Object.keys(values).map(key => {
        if (values[key]) {
            formData.append(key, values[key])
        }
    })
    return formData
}