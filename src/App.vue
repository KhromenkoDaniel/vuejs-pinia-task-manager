<script setup>
import Task from "@/components/Task.vue";
import Filter from "@/components/Filter.vue";
import ModalWindow from "@/components/modal/Window.vue";
import AddTask from "@/components/modal/AddTask.vue";

import {useTasksStore} from "@/stores/taskStore";


const store = useTasksStore();

store.$subscribe((mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})
</script>

<template>

  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          Task Manager
        </h1>
      </div>
      <div class="header-side">
        <button @click="store.openModal" class="btn secondary">
          + Add Task
        </button>
      </div>
    </div>

    <Filter/>

    <div class="tasks">
      <Task v-for="( task ) in store.filteredTasks" :key="task.id"
            :task="task"/>

    </div>

    <ModalWindow v-if="store.modalIsOpened">
      <AddTask/>
    </ModalWindow>
  </main>

</template>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 20px;
  }

  .header-side {
    display: flex;
    align-items: center;

    @media (max-width: 620px) {
      justify-content: center;
      width: 100%;
    }

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0;
      text-align: left;

      @media (max-width: 620px) {
        font-size: 32px;
      }
    }
  }

}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}


.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}


</style>
