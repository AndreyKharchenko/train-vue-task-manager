<template>
  <div class="task-item">
    <!--<div v-if="!task.isEdit" @click="$emit('deleteTaskItem', task.id)">
      {{task.title}}
      {{task.text}}
    </div>

    <div v-else>
      <input v-model="title">
      <input v-model="text">
    </div>

    <button @click="onEdit(task.id)">
      {{ (!task.isEdit) ? 'Редактировать' : 'Сохранить' }}
    </button>-->

    <div class="task-card">
      <div class="task-card-title">
        <div>
          <span v-if="!task.isEdit">{{task.title}}</span>
          <input v-else v-model="title" class="task-card-input title">
        </div>
      </div>

      <hr />

      <div class="task-card-content">
        <div>
          <span v-if="!task.isEdit">{{task.text}}</span>
          <input v-else v-model="text" class="task-card-input text">
        </div>
      </div>

    

      <div class="task-card-actions">
        <button @click="onEdit(task.id)" class="task-card-btn">
          {{ (!task.isEdit) ? 'Редактировать' : 'Сохранить' }}
        </button>

        <button @click="$emit('deleteTaskItem', task.id)" class="task-card-btn delete">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: [Object]
  },
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    onEdit(id) {
      if(!this.task.isEdit) {
        this.$emit('editTaskItem', {id});
        return;
      }
      const changedTask = {id, title: this.title, text: this.text};
      this.$emit('editTaskItem', changedTask);
    }
  },
  mounted() {
    this.title = this.task.title;
    this.text = this.task.text;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-item {
  display: flex;
  justify-content: center;
}

.task-card {
  width: 50%;
  height: 150px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px;
}

.task-card-title {
  display: flex;
  justify-content: start;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
}

.task-card-content {
  display: flex;
  justify-content: start;
  margin-bottom: 3rem;
}

.task-card-actions {
  display: flex;
  justify-content: end;
}

.task-card-btn {
  width: 20%;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFF;
  background-color: #3853D8;
  cursor: pointer;
  transition: .5s;
}

.task-card-btn:first-child {
  margin-right: 1rem;
}

.task-card-btn.delete {
  background-color: #f44336;
}

.task-card-btn:hover {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.task-card-input {
  width: 100%;
  height: 15px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  outline: none;
}

.task-card-input.title {
  font-weight: 600;
  font-size: 32px;
  padding-bottom: 0.6rem;
}

.task-card-input.text {
  width: 200%;
}

</style>