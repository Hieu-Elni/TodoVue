<template>
    <div class="todo-item">
        <div class='todo-item-left'>
            <input type='checkbox' v-model='todo.completed'>
            <div  @dblclick='editTodo(todo)' class='todo-item-label'>{{todo.title}}</div>

            <input  v-model='todo.title' @keyup.enter='doneEdit(todo)' @blur="doneEdit(todo)" class='todo-item-edit' type='text'>
        </div>
        <div class="remove-item" @click="removeTodo(index)"><i class="fa fa-times"></i></div>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        props:{
            todo:{
                type:Object,
                required:true,
            },
            index:{
                type: Number,
                required:true,
            }

        },
        data() {
            return{
                'id':this.todo.id,

            }
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