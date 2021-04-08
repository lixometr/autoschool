import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from '../lang/ru.json'
import en from '../lang/en.json'

Vue.use(VueI18n)

// Ready translated locale messages
console.log(ru)
const messages = {
  ru,
  en
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})


export default i18n