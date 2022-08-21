<template>
  <button @click="getUsers">Visualizar Users</button>
  <hr>
  <div v-for="p in user" :key="p.id">
    <h2>{{ p.id }} - {{ p.name }}</h2>
    <p>{{ p.email}}</p>
    <p>{{ p.gender}}</p>
    <p>{{ p.status}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: []
    }
  },
  methods: {
    getUsers() {
      fetch('https://gorest.co.in/public/v2/users')
        .then(response => response.json())
        .then(data => this.user = data)
    }
  }
}
</script>