// element-ui按需引入
import Vue from 'vue';
import {
    Message,
    Form,
    Button,
    FormItem,
    Input,
    Col
} from 'element-ui'
Vue.use(Form);
Vue.use(Col)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message