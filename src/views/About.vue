<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello from About</h1>
    <NavBarMain />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarMain from '@/components/NavBarMain.vue'

export default {
  name: 'About',
  components: {
    NavBarMain
  }
}
</script>
