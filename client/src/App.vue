<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/addblog">Add Blog</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    "footer-component": FooterComponent
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #f2f2f2;
  min-height: 100%;
  background: #333;
  min-height: 100vh;
}
#app {
  background: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

.router-link-exact-active {
  background-color: #008cba;
}

.router-link-exact-active:hover {
  background-color: #008cba;
}
</style>
