export default {
    state: {
        username:'',
        token:'',
        isLogin:false
    },
    mutations: {
        login(state,{username,token}){
            state.username = username
            state.token = token
            state.isLogin = true
        },
        loginOut(state){
            state.username = '',
            state.token = '',
            state.isLogin = false
        }
    },
    getter :{

    },
    actions: {
    },
}