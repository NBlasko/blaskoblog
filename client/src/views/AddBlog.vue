<template>
  <div>
    <h2>Add a blog</h2>
    <div class="add-blog">
      <form>
        <label>Blog title</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label>Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <button v-on:click.prevent="post">Post</button>
      </form>

      <div id="preview">
        <h3>Preview</h3>
        <p>Blog title: {{blog.title}}</p>
        <p>Blog Content: {{blog.content}}</p>
      </div>
      <div
        v-if="submitedPost"
        class="submited-post"
      >Thank you! Your message has been successfully sent.</div>
    </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:3000/blogs";

export default {
  name: "addblog",
  data() {
    return {
      blog: {
        title: "",
        content: ""
      },
      submitedPost: false
    };
  },
  watch: {
    blog: {
      handler() {
        this.submitedPost = false;
      },
      deep: true
    }
  },
  methods: {
    post() {
      this.$http
        .post(API_URL + "/addblog/", {
          title: this.blog.title,
          body: this.blog.content
        })
        .then(function(snap) {
          console.log("snap", snap);
          this.submitedPost = true;
        });
    }
  }
};
</script>


<style scoped>
.add-blog {
  margin: 20px auto;
  max-width: 500px;
  box-sizing: border-box;
  padding: 2px 16px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

label {
  display: block;
  margin: 10px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 90%;
  padding: 10px;
}

#previw {
  padding: 10px 20px;
  border: 1px dotted #f2f2f2;
  margin: 30px 0;
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
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}

button:hover {
  background-color: #008cba;
  color: white;
}

h3 {
  margin-top: 10px;
}

.check {
  margin: 30px 0;
  border: 1px solid black;
}

.check label {
  display: inline-block;
  padding: 30px;
}

.select {
  width: 50%;
  margin: 20px;
}

h2 {
  text-align: center;
}

.submited-post {
  color: #008cba;
  font-size: 18px;
}
</style>
