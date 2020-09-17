<template>
  <form action="">
        <v-text-field label="Adress Name" type="string" ></v-text-field>
        <v-text-field label="City"  type="string"></v-text-field>
        <v-text-field label="Street" type="string" ></v-text-field>
        <v-text-field label="Number" type='number' ></v-text-field> 
        <v-text-field label="Apartment" type="string" ></v-text-field>
        <v-text-field label="Floor" type="string" ></v-text-field> 
        <v-text-field label="Phone" type="string" ></v-text-field>
        <v-text-field label="Phone2" type="string" ></v-text-field> 
        <v-text-field label="Shopping Price" type='number' ></v-text-field>
        
        <button @click.prevent="">Save</button>
  </form>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
  border-radius:5px ;
  background: cornsilk;
  padding: 10px 20px;
}
</style>