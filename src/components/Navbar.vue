<template>
  <div id="nav" class="flex-custom">
    <div>
      <router-link to='/home'>Home</router-link> |
      <router-link to='/about'>About</router-link>
    </div>
    <div>
      <a class="click-logout" @click="logout()">Logout</a>
    </div>

    <!--Modal-->
    <b-modal id="my-modal" hideHeaderClose ok-only>No se pudo cerrar sesión, intente nuevamente</b-modal>

  </div>
</template>

<script>
  import {
    getAuth,
    signOut
  } from "firebase/auth";

  export default {
    name: 'Navbar',
    methods: {
      logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          this.$router.push('/')
        }).catch((error) => {
          // An error happened.
          console.log(error);
          this.$bvModal.show('my-modal')
        });
      }
    }
  }
</script>

<style scoped>
  .flex-custom {
    display: flex;
    justify-content: space-around;
  }

  .click-logout {
    text-decoration: none;
    padding: 5px;
    border: 2px solid orange;
    border-radius: 15%;
  }

  .click-logout:hover {
    border-color: #2c3e50;
    color: orange !important;
    cursor: pointer;
  }
</style>