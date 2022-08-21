<template>
  <div v-if="currentPost" class="edit-form">
    <h4>Post</h4>
    <form>
      <div class="form-group">
        <label for="user_id">User_id</label>
        <input type="text" class="form-control" id="user_id"
          v-model="currentPost.user_id"
        />
      </div>
      <div class="form-group">
        <label for="title">Titulo</label>
        <input type="text" class="form-control" id="title"
          v-model="currentPost.title"
        />
      </div>
      <div class="form-group">
        <label for="body">Descricao</label>
        <input type="text" class="form-control" id="body"
          v-model="currentPost.body"
        />
      </div>
    </form>
    
    <button class="badge badge-danger mr-2"
      @click="deletePost"
    >
      Deletar
    </button>
    <button type="submit" class="badge badge-success"
      @click="updatePost"
    >
      Atualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Por favor, clique em um post...</p>
  </div>
</template>
<script>
import PostDataService from "../services/PostDataService";
export default {
  name: "PostsTests",
  data() {
    return {
      currentPost: null,
      message: ''
    };
  },
  methods: {
    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      let data = {
        id: this.currentPost.id,
        user_id: this.currentPost.user_id,
        title: this.currentPost.title,
        body: this.currentPost.body
      };
      PostDataService.update(this.currentPost.id, data)
        .then(response => {
          console.log(response.data);
          this.currentPost.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePost() {
      PostDataService.update(this.currentPost.id, this.currentPost)
        .then(response => {
          console.log(response.data);
          this.message = 'O post foi atualizado com sucesso!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deletePost() {
      PostDataService.delete(this.currentPost.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPost(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}


</style>