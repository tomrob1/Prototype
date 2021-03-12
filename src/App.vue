<template>
  <div id="app">
    <!--- This could be made to header and footer components and imported here -->
    <!-- EG <app-header></app-header> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/room">Room</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <!-- PAGES SHOWN THROUGH HERE IN ROUTER VIEW -->
    <b-container>
      <router-view/>
    </b-container>
  </div>
  <!-- EG <app-footer></app-footer> -->
</template>
<script>
export default {
  computed: {
    /* currentUser () {
      return this.$store.state.auth.user
    },
    showAdminBoard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN')
      }

      return false
    },
    showModeratorBoard () {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR')
      }

      return false
    } */
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
