<template>
<div id= "geral">
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="desafiocss">Desafio VueJS</router-link>
      <div class="navbar-nav mr-auto">
        <ul class="nav-item">
          <router-link to="/posts" class="postscss">Posts</router-link>
        </ul>
        <ul class="nav-item">
          <router-link to="/add" class="postadd">Adicionar</router-link>
        </ul>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</div>


</template>

<script>



export default {
  name: "app",
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #545d67;
}

#app{
  background-color: rgb(182, 182, 182);
  padding-bottom: 5rem;
}

.postscss{
  color: white;
  font-size: 20px;
}
.postscss:hover{
  color: grey;
}

.postadd{
  color: white;
  font-size: 20px;
}
.postadd:hover{
  color: grey;
}

.desafiocss{
  color: rgb(255, 255, 255);
  font-size: 25px;
}
.desafiocss:hover{
  color: black;
  background-color: grey;
}

</style>
