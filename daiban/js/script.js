const app = new Vue({
    el:"#app",
    data:{
        message:"",
        lists:[
            "学习 Javascript",
            "学习 Vue.js",
            "学习知识"]
    },
    created:function(){
        //页面刷新的时候会执行的内容
       if(localStorage.getItem(1) != null){
           this.lists = localStorage.getItem(1).split(","); //让当前的 data 里面的 lists 数组等于浏览器缓存的字符串转成数组的值
       }
    },
    methods:{
        btn:function(){
            this.lists.push(this.message);
            this.message='';
            localStorage.setItem(1,this.lists);//设置浏览器缓存
        },
        del:function(index){
            this.lists.splice(index,1);
            localStorage.setItem(1,this.lists);
        }
    }
})














