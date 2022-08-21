<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="user_id">User_id</label>
        <input
          type="text"
          class="form-control"
          id="user_id"
          required
          v-model="post.user_id"
          name="user_id"
        />
      </div>
      <div class="form-group">
        <label for="title">Titulo</label>
        <input
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="body">Descricao</label>
        <input
          class="form-control"
          id="body"
          required
          v-model="post.body"
          name="body"
        />
      </div>
      <button @click="savePost" class="btn btn-success">Enviar</button>
    </div>
    <div v-else>
      <h4>Você enviou com sucesso!</h4>
      <button class="btn btn-success" @click="newPost">Adicionar</button>
    </div>
  </div>
</template>
<script>
import PostDataService from "../services/PostDataService";
export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        user_id: "",
        title: "",
        body: ""
      },
      submitted: false
    };
  },
  methods: {
    savePost() {
      let data = {
        user_id: this.post.user_id,
        title: this.post.title,
        body: this.post.body
      };
      PostDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>