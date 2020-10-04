// element-ui按需引入
import Vue from 'vue';
import {
    Message,
    Form,
    Button,
    FormItem,
    Input,
    Col,
    Radio,
    Checkbox,
    Row,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Table,
    TableColumn,
    Pagination,
    Steps,
    Step,
    Tabs,
    TabPane,
    Select,
    Option
} from 'element-ui'
Vue.use(Form);
Vue.use(Select);
Vue.use(Option)
Vue.use(Col)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input) 
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Tabs)
Vue.use(TabPane)


Vue.prototype.$message = Message