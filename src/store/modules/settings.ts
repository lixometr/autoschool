import { getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule {
  
}
export const SettingsModule = getModule(Settings)