<template>
<v-container align-content-space-around  
  fill-height
  grid-list-xs>
<v-container v-if="bolp"
 
  align-content-space-around  
  fill-height
  grid-list-xs
  id="id"
  justify-center
  tag="div"
  
>
  <v-card class="pa-0 ma-0" width="600">
    <v-card-title primary-title  class="d-flex justify-center">
      <v-card width="600" height="60" class=" d-flex justify-center align-center pa-0 ma-0 blue">Password</v-card>
    </v-card-title>
    <v-form
    class="pa-5"
    ref="form"
    v-model="valid"
    lazy-validation
    >
  
    <v-text-field
      v-model="password"
      :rules="passRules"
      label="Password"
      required
      type="password"
   ></v-text-field>
   <v-btn 
   color="success"
   :loading ="loading"
   @click="login"
      >
   login
   </v-btn>

 </v-form>
    </v-card>
</v-container>

 <v-container v-if="!bolp"
  
    align-content-space-around
    
    d-flex
    fill-height
    fluid
    grid-list-xs
    id="id"
    justify-center
    justify-end
    justify-space-around
    justify-space-between
    justify-start
    reverse
    tag="div"
    wrap
  >
  <v-row>
    <v-col cols="12" md="8" >
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/506221198" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>
      
    </v-col>
    <v-col cols="12" md="4" >
      <div>
      <iframe src="https://vimeo.com/live-chat/506221198/d6b673a365" width="100%" height="100%" frameborder="0"></iframe>
   </div>
      
    </v-col>
  </v-row>
    
  </v-container>

</v-container>
</template>

<script>

import {db} from '../firebaseInit'

export default {
  
components:{

},
   data: () => ({
    valid: true,
      
      password:'',
      passRules:[
        v => !!v || 'Password is required',
        //v => (v && v.length >= 8) || 'Password must be greater than 8 characters',
      ],
      loading:false,
      name:"",
      bolp:true
   }),

  methods:{
    login(){
        this.$refs.form.validate();
        if(this.password != ""){
            console.log("next page",this.password);
             db.collection('password').doc('password').docRef.get()
             .then(function(doc) {
                  if (doc.exists) {
                      console.log("Document data:", doc.data());
                  } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                  }
              }).catch(function(error) {
                  console.log("Error getting document:", error);
              });
 
            
        }
    }
  },
  created(){
  this.name=this.$route.params.id;
  this.bolp="true"
  console.log('name',this.name);
    },
}
</script>