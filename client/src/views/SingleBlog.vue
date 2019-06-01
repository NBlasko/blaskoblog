<template>
  <div class="just-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.body}}</article>

    <div v-if="errorGet !== ''">
      <h1>{{errorGet}}</h1>
    </div>
    <div v-else>
      <button v-on:click="deleteBlog">Delete</button>
    </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:3000/blogs";
export default {
  name: "singleblog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      errorGet: ""
    };
  },
  created() {
    this.$http
      .get(API_URL + "/singleBlog/" + this.id)
      .then(function(snap) {
        this.blog = snap.body;
        console.log(snap);
      })
      .catch(function(err) {
        this.errorGet = err.status + " " + err.statusText;
        console.log("err", err);
      });
  },
  methods: {
    deleteBlog() {
      this.$http
        .delete(API_URL + "/singleBlog/" + this.id)
        .then(function() {
          this.$router.replace("/");
        })
        .catch(function(error) {
          console.log("error", error);
        });
    }
  }
};
</script>
<style scoped>
.just-blog {
  padding: 20px;
  min-height: 100%;
  max-width: 90%;
  text-align: justify;
}

h2 {
  text-align: center;
}

.dole {
  position: absolute;
}

button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid red;
}

button:hover {
  background-color: red;
  color: white;
}
</style>
