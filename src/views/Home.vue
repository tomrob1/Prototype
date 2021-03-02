<template>
  <div class="home">
    <div class="logo">
      <img alt="logo" src="../assets/uni_logo.png">
      <br>
      <br>
    </div>
  <b-container class="bv-example-row">
    <b-row>
      <!--Evenly spaced columns -->
      <b-col>2 of 4</b-col>
      <b-col>3 of 4</b-col>
      <b-col>
        <div id="login">
            <h1>Login</h1>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <br>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <br>
            <br>
            <button type="button" v-on:click="login()">Login</button>

        </div>
      </b-col>
    </b-row>
  </b-container>
  </div>

</template>

<script>
/* eslint-disable */ 
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('attempt')
    }
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
