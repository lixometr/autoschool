import { getModule, Module,  VuexModule } from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store, name: 'config' })
class Config extends VuexModule {
    baseApiUrl = process.env.NODE_ENV === 'development' ? 'https://autoapi.rthn.ru/' : 'https://autoapi.rthn.ru/'
    titleTemplate = '%s - Autoschool'
}
export const ConfigModule = getModule(Config)