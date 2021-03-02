<template>
        <div class="main">
          <br>
          <!------------------------------------------------------------------------------------------------------->
          <form name="form1" id="form" action="/action_page.php">
            Floor:
            <select name="subject" v-model="floorChoice" @change="onChange($event)" >
              <option  v-for="(floor) in floors" :key="floor.number" >{{floor.number}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
            <br /><br/>
          </form>
          <!--  ----------------USER FILTERED RESULT------------------------------------------------------------------------------------->
          <form name="form3" id="form" action="/action_page.php">
            Room:
            <select name="subject">
              <!--Do we need :value here -->
              <option  v-for="(room,index) in filterResult" :key="index" :value="room[0]" >{{room[0]}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
            <br /><br/>
          </form>
        </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */ 
//Load in CSV FILE
//FLoor dropwdown upates room dropdown
export default {
  name: 'Room',
  data () {
    return {
      floorChoice:null,
      rooms: null, //Array to store data
      filterResult: null,
      roomsCSV:{data:[]},
      floors: [{number:'G'}, //Options for floor picks
              {number:1},
              {number:2},
              {number:3},
              {number:4},
              {number:5},
              {number:6},
              {number:'Roof'}]
    }
  },
  methods: {
    //Load room names from CSV file, stored in rooms.data
    createInput() {
      var url = "https://raw.githubusercontent.com/tomrob1/Prototype/main/src/assets/rooms.csv"
      axios.get(url)
      .then(response => {
        console.log(response.data.data)
        this.rooms= this.$papa.parse(response.data,{})
        //this.rooms = response.data
        //console.log(this.rooms)
      })
    },
    //When select option changes, cut array ro return rooms
    onChange(event){
      //Could also filter by something with .charAt()?
      //Can make this better when we work out API?
      if(this.floorChoice == 'G'){
        this.filterResult = this.rooms.data.slice(0,108)
      }
      if(this.floorChoice == '1'){
        this.filterResult = this.rooms.data.slice(109,205)
      }
      if(this.floorChoice == '2'){
        this.filterResult = this.rooms.data.slice(205,283)
      }
      if(this.floorChoice == '3'){
        this.filterResult = this.rooms.data.slice(283,400)
      }
      if(this.floorChoice == '4'){
        this.filterResult = this.rooms.data.slice(400,482)
      }
      if(this.floorChoice == '5'){
        this.filterResult = this.rooms.data.slice(482,541)
      }
      if(this.floorChoice == '6'){
        this.filterResult = this.rooms.data.slice(541,603)
      }
      if(this.floorChoice == 'Roof'){
        this.filterResult = this.rooms.data.slice(603,606)
      }
      //console.log(this.rooms.data.splice(0,108)) // Floor G
      //console.log(this.rooms.data.splice(109,96)) //Floor 1
      console.log(this.filterResult)
    }
    //Pass result to filter method, returning floors in dataset
  },
  created:function(){
    this.createInput()
  },
}
</script>