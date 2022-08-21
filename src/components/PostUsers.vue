<template>
  <section>
    <form @submit.prevent="setUser">
      <div>
        <label for="name">Nome :</label>
        <input type="text" id="name" v-model="userData.name">
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="text" id="email" v-model="userData.email">
      </div>
      <div>
        <label for="gender">Genero: </label>
        <input type="text" id="gender" v-model="userData.gender">
      </div>
      <div>
        <label for="status">Status: </label>
        <input type="text" id="status" v-model="userData.status">
      </div>
      <button>Criar Userr</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: '',
        email:  '',
        gender:   '',
        status:  ''
      }
    }
  },
  methods: {
    setUser() {
      fetch('https://gorest.co.in/public/v2/users?access-token=ecf9afa1116e7afb6bc18045aea73a86211c11fc06305d9216a8b4f6c3e75523',{
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email:  this.email,
          gender:   this.gender,
          status: this.status
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }
}
</script>

<style>
html,body{margin:0;padding:0}
section{height:100vh;display:grid;justify-items:center;padding-top:40px}
div{margin:24px auto}
label{font-weight:bolder;display:block;margin-bottom:4px}
</style>