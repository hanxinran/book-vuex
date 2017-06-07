/**
 * Created by Administrator on 2017/6/7 0007.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Lockr from 'lockr'
Vue.use(Vuex)
let src='https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/TB1Q.xyNXXXXXaGXXXXXXXXXXXX_!!0-item_pic.jpg_360x360Q90.jpg_.webp';

export default new Vuex.Store({
        state:{
            data:[
                {id:1,bookname:'vue1',bookcover:src,price:200},
                {id:2,bookname:'vue2',bookcover:src,price:201},
                {id:3,bookname:'vue3',bookcover:src,price:202},
                {id:4,bookname:'vue4',bookcover:src,price:203},
                {id:5,bookname:'vue5',bookcover:src,price:204},
            ]
},
    mutations: {
        remove (state,n){
            state.data=  state.data.filter(item => {
                return item.id != n;
            });
            Lockr.prefix = 'lockr';
            Lockr.set('books', state.data);
        },
        add(state,option){
            option.id=state.data[state.data.length-1].id+1;
            state.data.push(option);
            Lockr.prefix = 'lockr';
            Lockr.set('books', state.data);
        },
        update(state,option){
            state.data=option;
            Lockr.prefix = 'lockr';
            Lockr.set('books', state.data);
        },
        last(state){
            Lockr.prefix = 'lockr';
            let laststate = Lockr.get('books');
            if (laststate) {
                console.log(22);
                state.data = laststate;
            }
        },
    },
    actions:{
            last(context){
                context.commit('last')
            }
    }



})





