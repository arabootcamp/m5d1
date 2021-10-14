<template>
  <div>
    <ConfigurableForm :dataProps="{call:'Registrarse',iconSrc:'assets/register-icon.png', routerLink:{to:'/',text:'¿Regresar al Login?'}}"/>
  </div>
</template>

<script>
import ConfigurableForm from '@/components/ConfigurableForm.vue'

export default {
  name:'SignUp',
  components:{
    ConfigurableForm
  }
  
}
</script>