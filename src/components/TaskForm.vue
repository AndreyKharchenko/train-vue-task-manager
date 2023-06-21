<template>
  <div>
    <div class="add-task-title">Список задач</div>
    <div class="add-task-container">
      <input v-model="taskTitle" placeholder="Заголовок задачи" class="task-form-input">
      <input v-model="taskText" placeholder="Описание задачи" class="task-form-input">
      <button v-on:click="addTask" class="task-form-btn">Добавить задачу</button>
      <button v-on:click="back" class="task-form-btn back">Главное меню</button>
    </div>
    <list-tasks 
        :tasks="Tasks" 
        @deleteTask="deleteTask" 
        @editTask="editTask"
    />
  </div>
</template>

<script>
import ListTasks from '@/components/ListTasks.vue'
export default {
  name: 'TaskForm',
  components: {
    ListTasks
  },
  data() {
    return {
        taskTitle: '',
        taskText: '',
    }
  },
  computed: {
    Tasks() {
      return this.$store.getters.getTasks;
    }
  },
  methods: {
    addTask() {
        if(this.taskTitle || this.taskText) {
          const newTask = {id: this.Tasks.length + 1, title: this.taskTitle, text: this.taskText, isEdit: false};
          this.$store.commit('addTask', newTask);
        }
        
        this.taskTitle = '';
        this.taskText = '';
    },
    deleteTask(id) {
        this.$store.commit('deleteTask', id);
    },
    editTask(editableTask) {
        this.$store.commit('editTask', editableTask);
    },
    back() {
      this.$router.go('-1');
    }
  },
  async mounted() {
    await this.$store.dispatch('getTasks');
  }
  
}
</script>

<style scoped>
.add-task-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.add-task-title {
  font-size:30px; 
  color:#3853D8; 
  margin-bottom:1rem;
  text-transform: uppercase;
}

.task-form-input {
  display: block;
  width: 100%;
  height: 2rem;
  padding: 5px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
      
}

.task-form-btn {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #3853D8;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFF;
  background-color: #3853D8;
  cursor: pointer;
  transition: .5s;
}

.task-form-btn:hover{
  color: blue;
  background-color: #FFF;
}

.task-form-btn.back{
  color: #FFF;
  background-color: #f44336;
  border: 1px solid #f44336;
  margin-top: 1rem;
}

.task-form-btn.back:hover {
  color: #f44336;
  background-color: #FFF;
  margin-top: 1rem;
}
</style>