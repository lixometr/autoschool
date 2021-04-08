import { Vue, VueConstructor } from "vue/types/vue"
declare module 'vue/types/vue' {
  interface VueConstructor {
    loadScript: (path: string) => Promise<void>
  }

  interface Vue {
    $loadScript: (path: string) => Promise<void>
  }
}
