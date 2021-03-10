<template>
    <div class="dashboard">
        <b-container>
            <b-row>
                <b-col>
                <vue-frappe
                  id="test"
                  type="line"
                  :height="500"
                  :labels="labels[0].values"
                  :lineOptions="{regionFill: 1}"
                  :colors="['red']"
                  :dataSets="co2.datasets"
                ></vue-frappe>
                </b-col>
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
      x_axis: [],
      y_axis: [],
      graph_data : null,
      labels:[],
      reverse:[],
      co2 :{
        datasets: []
      }
    }
  },
  async mounted() {
    await this.createInput();
    this.setGraphData();
  },
  methods: {
    async createInput() {
      //var foo = "https://api.usb.urbanobservatory.ac.uk/api/v2/sensors/timeseries/"+ room + "/" + metric + "/raw/historic?startTime=2019-05-27T00:00:00Z&endTime=2019-05-29T23:59:59"

      var url = "https://api.usb.urbanobservatory.ac.uk/api/v2/sensors/timeseries/room-6.025/co2/raw/historic?startTime=2019-05-27T00:00:00Z&endTime=2019-05-29T23:59:59"
      //var url = "https://api.usb.urbanobservatory.ac.uk/api/v2/sensors/timeseries/room-6.025/humidity/raw/historic?startTime=2019-05-27T00:00:00Z&endTime=2019-05-27T23:59:59"
      //var url = "http://18.132.43.65:8090/get_timeseries/room-6.025/co2/2019-05-27/2019-06-27"
      axios.get(url)
      .then(response => {
        console.log(response.data.historic)
        this.graph_data = response.data.historic.values
        let i=0;
        for (i; i<this.graph_data.length; i++){
          this.y_axis.push(this.graph_data[i].value)
          this.x_axis.push(this.graph_data[i].time)
        }
        this.x_axis.reverse()
      })
    },
    setGraphData(){
      this.co2.datasets.push({values:this.y_axis})
      this.labels.push({values:this.x_axis})
    },
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
