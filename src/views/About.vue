<template>
  <div class="about">
    <Navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is an About Us Page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
  }
}
</script>