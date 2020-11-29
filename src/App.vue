<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
  }
</style>
