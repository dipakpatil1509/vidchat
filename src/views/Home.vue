<template>
<v-container
 
  align-content-space-around  
  fill-height
  
  grid-list-xs
  id="id"
  justify-center
  
  tag="div"
  
>
  <v-card class="pa-0 ma-0" width="600">
    <v-card-title primary-title  class="d-flex justify-center">
      <v-card width="600" height="60" class=" d-flex justify-center align-center pa-0 ma-0 blue">Login</v-card>
    </v-card-title>
    <v-form
    class="pa-5"
    ref="form"
    v-model="valid"
    lazy-validation
    >
   <v-text-field
    v-model="name"
      :rules="nameRules"
      label="Name"
      required
   >
   </v-text-field>
  
   <v-btn 
   color="success"
   @click="Next(name)"
      >
   Next
   </v-btn>

 </v-form>
    </v-card>

</v-container>
</template>

<script>

export default {
   data: () => ({
    valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        
      ],
      loading:false,
   }),

  methods:{
    Next(id){
      this.$refs.form.validate();
      if(id != ""){
        this.$router.push({name:'password',params:{id}})
      }
          
    }
  }
}
</script>
