<template>
  <div>
    <button v-on:click="on_tasks" class="main-menu-btn">К списку задач</button>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {

    }
  },
  methods: {
    on_tasks() {
        this.$router.push(`/task`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-menu-btn {
  width: 250px;
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

.main-menu-btn:hover{
  color: #3853D8;
  background-color: #FFF;
}

</style>