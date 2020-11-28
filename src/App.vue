<template>
  <div id="app">
    <Header />
    <Projects />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Projects from '@/components/Projects_list'
export default {
  name: 'App',
  components: {
    Header, 
    Projects
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
  }
</style>
