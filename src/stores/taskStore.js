import {computed, reactive, ref} from "vue";

import {defineStore} from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
    const tasks = reactive(JSON.parse(localStorage.getItem('tasks')) || []);

    let filterBy = ref("");

    let modalIsOpened = ref(false);

    function setFilter(filter) {
        filterBy.value = filter;
    }

    const filteredTasks = computed(() => {
        switch (filterBy.value) {
            case 'todo':
                return tasks.filter(task => !task.completed)
            case 'done':
                return tasks.filter(task => task.completed)
            default:
                return tasks
        }
    })

    function addTask(newTask) {
        if (newTask.name && newTask.description) {
            newTask.id = tasks.length + 1;
            tasks.push(newTask);
            closeModal();
        } else {
            alert("Please fill the form");
        }
    }

    function toggleCompleted(id) {
        const task = tasks.find(task => task.id === id);
        task.completed = !task.completed;
    }

    function openModal() {
        modalIsOpened.value = true
    }

    function closeModal() {
        modalIsOpened.value = false
    }

    return {
        tasks,
        filterBy,
        modalIsOpened,
        filteredTasks,
        setFilter,
        toggleCompleted,
        addTask,
        openModal,
        closeModal
    }
})
