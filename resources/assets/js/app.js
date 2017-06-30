require('./bootstrap');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('formbuilder', require('./components/Formbuilder.vue'));
Vue.component('create-form', require('./components/CreateForm.vue'));
Vue.component('preview-form', require('./components/PreviewForm.vue'));

const app = new Vue({
    el: '#app'
});
