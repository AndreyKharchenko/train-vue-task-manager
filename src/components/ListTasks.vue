<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <task-item 
          :task="task"
          @deleteTaskItem="deleteTaskItem" 
          @editTaskItem="editTaskItem"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
  name: 'ListTasks',
  components: {
    TaskItem
  },
  props: {
    tasks: [Array]
  },
  data() {
    return {
    }
  },
  methods: {
    deleteTaskItem(id) {
      this.$emit('deleteTask', id);
    },
    editTaskItem(editableTask) {
      this.$emit('editTask', editableTask);
    },
  }
  
}
</script>


<style scoped>
ul {
  list-style-type:  none;
}
</style>
