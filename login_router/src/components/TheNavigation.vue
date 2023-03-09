<template>
  <nav id="nav">
    <router-link to="/" id="logo">Travel App</router-link>
    <router-link
   v-for="destination in destinations"
   :key="destination.id"
   :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}">
   {{ destination.name }}
  </router-link>
</nav>
</template>
<script>
import sourceData from '@/data.json'
export default {
  data(){
    return{
      destinations:sourceData.destinations
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* #nav .noita-active-link{
  color: red;
  border-bottom: 2px solid red;
} */
  
</style>
