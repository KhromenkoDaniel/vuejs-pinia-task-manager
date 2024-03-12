<script setup>
import {useTasksStore} from "@/stores/taskStore";

const store = useTasksStore();

let newTask = {
  completed: false
};

</script>

<template>
  <div class="form">
    <h3>Add a new task</h3>
    <label for="title">Title *</label>
    <input type="text"
           name="title"
           placeholder="Enter a title..."
           v-model="newTask.name"
    ><br/>
    <label for="description">Description *</label>
    <textarea
        name="description"
        rows="4"
        placeholder="Enter a description..."
        v-model="newTask.description"
    /><br/>
    <button @click="store.addTask(newTask)" class="btn gray">Add Task</button>
  </div>
</template>

<style scoped lang="scss">

</style>
