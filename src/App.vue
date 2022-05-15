<template>
  <NavBar />
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(77,93,251);
  background: linear-gradient(45deg, rgba(77,93,251,1) 0%, rgba(8,200,246,1) 49%, rgba(77,93,251,1) 100%);
  box-sizing: border-box;
  transition: all 0.3s;
}


::-webkit-scrollbar{
  width: 11px;
  background: #fff;
}

::-webkit-scrollbar-thumb{
  width: 100%;
  background: #4D5DFB;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb:hover{
  background: #313fb9;
}

::selection{
  background-color: #4D5DFB;
  color: #fff;
}



html{
  scroll-behavior: smooth;
}


body{
  margin: 0;
  padding: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #fff;
}

</style>

<script>
  import NavBar from './components/NavBar.vue'

  export default{
  name: "app",
  components: {
    NavBar,
  },
};
</script>
