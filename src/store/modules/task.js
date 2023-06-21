export default {
    actions: {
        async getTasks(ctx) {
            const data = await localStorage.getItem('tasks');
            ctx.commit('setTasks', JSON.parse(data));
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(it => it.id != taskId);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        editTask(state, task) {
            console.log('changeTask', task);
            const index = state.tasks.findIndex(it => it.id == task.id);
            state.tasks[index].isEdit = !state.tasks[index].isEdit;
            if(task.title && task.text) {
                state.tasks[index].title = task.title;
                state.tasks[index].text = task.text;
            }
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    state: () =>  ({ 
        tasks: []
    }),
    getters: {
        getTasks(state) {
            return state.tasks;
        },
    }
}