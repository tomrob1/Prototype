<template>
        <div class="main">
          <br>
          <!------------------------------------------------------------------------------------------------------->
          <form name="form1" id="form" action="/action_page.php">
            Floor:
            <select name="subject" v-model="floorSelect" @change="onChangeFloor($event)">
              <option  v-for="(floor) in floors" :key="floor.index" :value="floor.index" >{{floor.number}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
            <br /><br/>
          </form>
          <!--  ----------------USER FILTERED RESULT------------------------------------------------------------------------------------->
          <form name="form2" id="form" action="/action_page.php">
            Room:
            <select name="subject" v-model="roomSelect"  @change="onChangeRoom($event)">
              <!--Do we need :value here -->
              <option  v-for="(room,index) in filterResult" :key="index" :value="room" >{{room}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
            <br /><br/>
          </form>
          <form name="form3" id="form" action="/action_page.php">
            Metric:
            <select name="subject" v-model="metricSelect"  @change="onChangeMetric($event)">
              <!--Do we need :value here -->
              <option  v-for="(metric,index) in metrics" :key="index" :value="metric.name" >{{metric.name}}</option>
              <!-- For loop loops through all the available room numbers and inputs these into the dropdown - these should be limited for each person, general public should only have access to first floor, students to all available rooms up to 3rd floor, staff/phd rooms to 4th floor, manager/building supervisor has access to all rooms including receptions  -->
            </select>
          </form>
        </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */ 
export default {
  name: 'Room',
  data () {
    return {
      floorSelect:null,
      roomSelect:null,
      metricSelect:null,
      rooms: null,
      metrics: null,
      filterResult: null, // Used for floor change
      //store these better?
      floors: [{number:'G', index: 0}, // Options for floor picks
              {number:1, index: 1},
              {number:2, index: 2},
              {number:3, index: 3},
              {number:4, index: 4},
              {number:5, index: 5},
              {number:6, index: 6},
              {number:'Roof', index: 7}]
    }
  },
  async mounted() {
    await this.createInput();
  },
  methods: {
    //Load room names from CSV file, stored in rooms.data
    createInput() {
      var url = "https://raw.githubusercontent.com/tomrob1/Prototype/main/src/assets/allTheRooms.json"
      axios.get(url)
      .then(response => {
        this.rooms = response.data
      })
    },
    //When select option changes, cut array ro return rooms
    onChangeFloor(event){
      //console.log(event.target.value)
      this.filterResult = this.rooms[event.target.value].rooms
    },
    //tidy up
    onChangeRoom(event){
      console.log(event.target.value)
      var res = event.target.value.replaceAll(" ","-")
      var url = "http://18.132.43.65:8090/get_data/"+res
      console.log(url)
      axios.get(url)
      .then(response => {
        //this.metrics = response.data.metrics
        this.metrics = response.data.metircs
        })
    },
    // Need to change room value to fit USB uni api
    // room-6.025
    onChangeMetric(event){
      console.log(event.target.value)
      var res = event.target.value.replaceAll(" ","-").toLowerCase() // Hyphenate and lowercase metric value
      console.log(res)
      // Edit room select to add to url - take out Floor : / Floor part
      var foo = this.roomSelect
      console.log(foo)
      var url = "https://api.usb.urbanobservatory.ac.uk/api/v2/sensors/timeseries/room-6.025/"+ res+"/raw/historic?startTime=2019-05-27T00:00:00Z&endTime=2019-05-29T23:59:59"
      console.log(url)
    }
  }

}
</script>