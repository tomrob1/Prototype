<template>
    <div class="dashboard">
        <b-container>
            <b-row cols="4">
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
                <b-col>Column</b-col>
            </b-row>
        </b-container>
  </div>

</template>

<script>
import axios from 'axios'
/* eslint-disable */ 
export default {
  name: 'Dashboard',
  data () {
    return {
      data:null
    }
  },
  methods: {
    createInput() {
      var url = "https://api.usb.urbanobservatory.ac.uk/api/v2.0a/sensors/entity?meta:buildingFloor=G"
      axios.get(url)
      .then(response => {
        console.log(response)
        console.log(response.data.data)
        //this.data= this.$papa.parse(response.data,{})
        //this.rooms = response.data
        //console.log(this.rooms)
      })
    },
  },
  created:function(){
    this.createInput()
  }
}
</script>

<style scoped>
#login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    padding: 20px;
}

.logo img{
    width: 20%;
}
</style>
