<template>
        <div class="main">
          <br>
          <!--  ----------------------------------------------------------------------------------------------------->
          <form name="form1" id="form" action="/action_page.php">
            Floor:
            <!--Add value here? -->
            <select name="subject" v-model="floorChoice" >
              <option  v-for="(floor) in floors" :key="floor.number" >{{floor.number}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
            <br /><br/>
            <input type="submit" value="Submit" />
          </form>
          <!--  ----------------------------------------------------------------------------------------------------->
          <form name="form2" id="form" action="/action_page.php">
            Room:
            <!--Add value here? -->
            <select name="subject" v-model="roomChoice" >
              <!--Do we need :value here -->
              <option  v-for="(room) in rooms.data" :key="room" :value="room[0]" >{{room[[0]]}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
            <br /><br/>
            <input type="submit" value="Submit" />
          </form>
            <ul>
                <button class="buildingchoice" v-on:click="createInput()">Load</button>
            </ul>
            <p>{{rooms.data[3]}}</p>
            <p>{{floorChoice}}</p>
            <p>{{roomChoice}}</p>
        </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */ 
//Load in CSV FILE
//FLoor dropwdown upates room dropdown
export default {
  name: 'About',
  data () {
    return {
      floorChoice:null,
      roomChoice:null,
      rooms: null,
      roomsCSV:{data:[]},
      floors: [{number:1},
              {number:2},
              {number:3},
              {number:4},
              {number:5},
              {number:6},
              {number:7}]
    }
  },
  methods: {
    createInput() {
      var url = "https://raw.githubusercontent.com/tomrob1/Prototype/main/src/assets/rooms.csv"
      axios.get(url)
      .then(response => {
        console.log(response.data.data)
        this.rooms= this.$papa.parse(response.data,{
        })
        //this.rooms = response.data
        //console.log(this.rooms)
      })
    }
  },
  mounted:function(){
    this.createInput()
  },
}
</script>