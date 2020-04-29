import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import zhLang from "@/assets/zh"
import enLang from "@/assets/en"
import locale from 'element-ui/lib/locale'
Vue.use(VueI18n);
Vue.use(ElementUI);
const en = {

    ...enLang,

    ...enLocale
}
const zh = {
    ...zhLang,
    ...zhLocale
}
const i18n = new VueI18n({
    locale: 'zh',
    messages: {
        zh,
        en
    },

});
Vue.config.productionTip = false;
locale.i18n((key, value) => i18n.t(key, value))
console.log(i18n)
new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app')