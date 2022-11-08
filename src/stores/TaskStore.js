import { defineStore } from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: []
    }),
    getters:{
        getTask(){
            return (id) => this.tasks.find(t => t.id == id)
        }
    },
    actions: {
        async fetchTasks(){
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()
            this.tasks = data
        },

        async toggleReminder(id){
            const taskToToggle = this.getTask(id)
            const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })

            const data = await res.json()
            
            this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
        },

        async addTask(task){
            const res = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(task)
            })

            const data = await res.json()
            
            this.tasks = [...this.tasks, data]
        },

        async deleteTask(id){
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'DELETE'
            })

            res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error while trying to delete task.')
        }
    }
})