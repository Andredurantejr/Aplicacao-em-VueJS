<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Procurar por user_id"
          v-model="user_id"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchUser_id"
          >
            Procurar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de Posts</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(post, index) in posts"
          :key="index"
          @click="setActivePost(post, index)"
        >
          {{ post.user_id }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPosts">
        Remover Todos
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPost">
        <h4>Postar</h4>
        <div>
          <label><strong>User_id:</strong></label> {{ currentPost.user_id }}
        </div>
        <div>
          <label><strong>Titulo:</strong></label> {{ currentPost.title }}
        </div>
        <div>
          <label><strong>Descricao:</strong></label> {{ currentPost.body }}
        </div>
        <router-link :to="'/posts/' + currentPost.id" class="badge badge-warning">Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p>Por favor, clique em um post...</p>
      </div>
    </div>
  </div>
</template>
<script>
import PostDataService from "../services/PostDataService";
export default {
  name: "posts-list",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      user_id: "",
      title: "",
      body: ""
    };
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievePosts();
      this.currentPost = null;
      this.currentIndex = -1;
    },
    setActivePost(post, index) {
      this.currentPost = post;
      this.currentIndex = post ? index : -1;
    },
    removeAllPosts() {
      PostDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchUser_id() {
      PostDataService.findByNome(this.user_id)
        .then(response => {
          this.posts = response.data;
          this.setActivePost(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePosts();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

.form-control{
  color: rgb(0, 0, 0);
}
</style>