<template>
  <div id="app">
    <nav-bar />
    <Search />
  </div>
</template>
<script>
import Search from './components/Search.vue'
// import MainHeader from './components/MainHeader.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    // MainHeader,
    Search,
    NavBar
  }
}
</script>