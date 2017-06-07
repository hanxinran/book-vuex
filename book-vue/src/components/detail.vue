<template>
<div id="detail">
    <h3>欢迎来到详情页</h3>
    <div class="panel panel-default">
        <div class="panel-heading">
            书名：<span v-show="!flag">{{book.bookname}}</span>
            <input type="text" v-show="flag" v-model="book.bookname">
        </div>
        <div class="panel-body">
            <img :src="book.bookcover" alt="">
        </div>
        <div class="panel-footer">
            价格：<span v-show="!flag">{{book.price}}</span>
            <input type="text" v-show="flag" v-model="book.price">
            <button type="button" class="btn btn-danger" v-show="!flag" @click="remove">删除</button>
            <button type="button" class="btn btn-warning" v-show="!flag" @click="flag=true">修改</button>
            <button type="button" class="btn btn-primary" v-show="flag" @click="update">确认修改</button>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        data() {
            return {books:this.$store.state.data,id: null, book: {id: '',bookname:'',bookcover: '', price:''}, flag: false}
        },
        beforeMount(){
            this.id=this.$route.params.id;
            let books=this.books;
            this.book=books.find((item)=>item.id==this.id)
        },
        methods: {
            update() {

                let books= this.books;
                books.map(item => {
                    if(item.id == this.id){
                        return this.book;
                    }
                    return item;
                });
                this.$store.commit('update',books)
                this.$router.push('/list');

            },
            remove() {
                this.$store.commit('remove',this.id)
                this.$router.push('/list');
            }
        },


    }

</script>




