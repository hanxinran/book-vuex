<template>
 <div id="list">
        <h3>图书列表页</h3>
        <div class="col-md-3" v-for="book in  books">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    书名：<span>{{book.bookname}}</span>
                </div>
                <div class="panel-body">
                    <img :src="book.bookcover" alt="">
                </div>
                <div class="panel-footer">
                    价格：<span>{{book.price}}</span>
                    <router-link :to="{name:'detail',params:{id:book.id}}">详情</router-link>
                </div>
            </div>
        </div>
</div>

</template>
<script>
    export default{
        name:'list',
        data(){
            return {books:this.$store.state.data}
        },
        beforeCreate(){

            this.$store.dispatch('last');

        }

    }


</script>

<style lang="css" scoped>
    #list img {
        width: 150px;
        height: 180px;
    }
</style>
