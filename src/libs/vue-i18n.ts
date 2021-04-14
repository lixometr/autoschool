import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from '../lang/ru.json'
import en from '../lang/en.json'

Vue.use(VueI18n)

const messages = {
  ru,
  en
}

const i18n = new VueI18n({
  locale: 'en',
  messages,
})


export default i18n