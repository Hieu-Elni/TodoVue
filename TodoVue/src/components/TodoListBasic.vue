<template>
    <div class="wrap">
        <div class="container">
            <div id="list-todo">
                <div class="head">
                    <h1 class="todo">todos</h1>
                </div>
                <div class="show">
                    <div class='what_text'>
                        <input type="checkbox" v-model='checkAll' v-on:change='allSelect' class='toogle-all'>
                        <input type="text"  v-model='newTodo' class="input1" placeholder="What needs to be done?" v-on:keyup.enter="addTodo">
                    </div>
                    <div v-for="(todo,index) in todos" :key="todo.id" class="todo-item">
                        <div> {{todo.title}}</div>
                        <div class="remove-item" @click="removeTodo(index)"><i class="fa fa-times"></i></div>
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        data() {
            return{
                newTodo:'',
                idForTo:2,
                todos:[
                    {
                        id:1,
                        'title':'Fin Vue Screen',
                        'completed':false
                    }

                ]
            }
        },
        methods:{
            addTodo(){
                if(this.newTodo.trim().length==0){
                    return;
                }
                this.todos.push({
                    id:this.idForTo,
                    title:this.newTodo,
                    completed:false
                });

                this.newTodo='';
                this.idForTo++;
            },

            removeTodo(index){
                this.todos.splice(index,1);
            }
        }
    }
</script>
<style>
#list-todo{
    width: 600px;
    margin: 0 auto;
}
.todo-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}
</style>