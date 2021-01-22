<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello from Home</h1>
    <NavBarMain />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarMain from '@/components/NavBarMain.vue'

export default {
  name: 'Home',
  components: {
    NavBarMain
  }
}
</script>
