<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-footer v-bind:title="title"></app-footer>
    <ninjas v-bind:ninjas="ninjas" ></ninjas>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'


export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'ninjas':Ninjas
  },
  data () {
    return {
      title: 'Vue Ninja app',
      ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Tango', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  },
  methods:{
    updateTitle:function(updateTitle){
      this.title = updateTitle
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
  color:purple;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
