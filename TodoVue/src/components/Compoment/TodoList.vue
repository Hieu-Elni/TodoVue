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
                    <TodoItem v-for="(todo,index) in filterTodos" :key="todo.id" :index='index' :todo='todo' class="todo-item">

                    </TodoItem>
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
    import TodoItem from './TodoItem'
    export default {
        name: 'TodoList',
        components:{
          TodoItem
        },
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

        methods:{
            checkAllTodos(){
                this.todos.forEach((todo) => todo.completed = event.target.checked);
            },
            clearTodos(){
                this.todos=this.todos.filter(todo =>!todo.completed)
            }
        },
        computed:{
            remaining(){
              return this.todos.filter(todo => todo.completed).length;
            },
            filterTodos() {
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
            },

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
