<template>
  <v-container
  
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
      <v-card  class="red">
        <vue-player src="http://techslides.com/demos/sample-videos/small.mp4" poster="https://via.placeholder.com/150" title="video Demonstration" v-model="playing"></vue-player>
      </v-card>
      
    </v-col>
    <v-col cols="12" md="4" >
      <div>
      <VueAutoVirtualScrollList
    :totalHeight="400"
    :defaultHeight="80"
    
    style="width: 100%;"
  >
    <div
      v-for="item in items"
        :style="{ height: `${item.height}px` }"
    :key=item
    >
      <v-card flat  class="my-4 blue lighten-3 d-block " >
       <div class="d-flex d-block justify-start red">
         <H2 align-start>name</H2>
          <div>
        <hr>
         <h4>
           this is text area
         </h4>
       </div>
       </div>
      
      </v-card>
    </div>
  </VueAutoVirtualScrollList>
   </div>
      
    </v-col>
  </v-row>
    
  </v-container>
</template>

<script>
import vuePlayer  from  '@algoz098/vue-player'
import VueAutoVirtualScrollList from 'vue-auto-virtual-scroll-list'


export default {
  
components:{
  vuePlayer,
  VueAutoVirtualScrollList
},

data: () => ({
  

  
})
  
}
</script>

