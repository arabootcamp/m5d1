<template>
  <div>
    <ConfigurableForm :dataProps="{call:'Ingresar',iconSrc:'assets/login-icon.png', routerLink:{to:'/signup',text:'¿Registrarse?'}}"/>
  </div>
</template>

<script>
import ConfigurableForm from '@/components/ConfigurableForm.vue'

export default {
  name:'Login',
  components:{
    ConfigurableForm
  }
  
}
</script>


 