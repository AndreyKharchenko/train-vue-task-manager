import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import TaskView from '../views/TaskView.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: MainView
        },
        {
            path: '/task',
            component: TaskView
        }
    ]
})