<template>
    <div class="wrap">
        <div class="container">
            <div id="list-todo">
                <div class="head">
                    <h1 class="todo">todos</h1>
                </div>
                <div class="show">
                    <div class='what_text'>
                        <input type="checkbox"  class='toogle-all'>
                        <input type="text"  v-model='newTodo' class="input1" placeholder="What needs to be done?" v-on:keyup.enter="addTodo">
                    </div>
                    <div v-for="(todo,index) in filterTodos" :key="todo.id" class="todo-item">
                        <div class='todo-item-left'>
                        <input type='checkbox' v-model='todo.completed'>
                        <div v-if='!todo.editing' @dblclick='editTodo(todo)' class='todo-item-label'>{{todo.title}}</div>
                        
                        <input  v-else v-model='todo.title' @keyup.enter='doneEdit(todo)' @blur="doneEdit(todo)" class='todo-item-edit' type='text'>
                        </div>
                        <div class="remove-item" @click="removeTodo(index)"><i class="fa fa-times"></i></div>
                    </div>
                </div>
                <div class='container1'>
                    <div>
                        <label><input type='checkbox' @change='checkAllTodos'>CheckAll</label>
                    </div>
                    <div>{{remaining}} items left</div>
                </div>
                <div class='container1'>
                    <div class='abc'>
                        <button @click='filter="all"'>All</button>
                        <button @click="filter='active'">Active</button>
                        <button @click="filter='completed'">Completed</button>
                    </div>
                    <div class='bcd'>
                        <button @click='clearTodos'>Clear </button>
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
                idForTo:3,
                beforeEditCache:'',
                filter: 'all',
                todos:[
                    {
                        'id':1,
                        'title':'Fin Vue Screen',
                        'completed':false,
                        'editing':false,
                    },
                    {
                        'id':2,
                        'title':'Fa Moon',
                        'completed':false,
                        'editing':false,
                    }

                ]
            }
        },
        computed:{
            remaining(){
                return this.todos.filter(todo => !todo.completed).length;
            },
            filterTodos(){
                if(this.filter=='all'){
                    return this.todos;
                }
                else if(this.filter=='active'){
                    console.log('!todo');
                    return this.todos.filter(todo => !todo.completed);
                }
                else if(this.filter=='completed'){
                    return this.todos.filter(todo => todo.completed);
                }
                return this.todos;
            },
            showClearButton(){
                return this.todos.filter(todo =>todo.completed).length>0
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
                    completed:false,
                    editing:false
                });

                this.newTodo='';
                this.idForTo++;
            },

            removeTodo(index){
                this.todos.splice(index,1);
            },
            editTodo(todo){
                todo.editing = true;
                this.beforeEditCache=todo.title;
            },
            doneEdit(todo){
                 if(todo.title.trim()==0){
                    todo.title=this.beforeEditCache;
                }
                todo.editing=false
            },
            checkAllTodos(){
                this.todos.forEach((todo) => todo.completed = event.target.checked);
            },
            clearTodos(){
                this.todos=this.todos.filter(todo =>!todo.completed)
            }
        }
    }
</script>
<style>

</style>