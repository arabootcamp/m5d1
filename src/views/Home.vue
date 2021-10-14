<template>
  <div class="home">
    <Navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="This is an Home Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HelloWorld
  }
}
</script>
