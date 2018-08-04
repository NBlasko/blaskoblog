<template>
  <div class="home">
  <h2> Home </h2>
  <div>
    <input type="text" v-model="searchItem" placeholder="Search blogs"/>
  </div>
  <div v-for="blog in foundedBlogs " v-bind:key="blog._id" class = "singleBlog"> 
    <router-link class ="rLink" v-bind:to="'/singleblog/' + blog._id"><h3 v-colorChange> {{blog.title | toUpperCase}}</h3></router-link>
      <p>{{blog.body | minimize}}</p>
  </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from '@/components/FooterComponent.vue'
const API_URL = 'http://localhost:3000/blogs';
export default {
  name: 'home',
  components: {
    'footer-component': FooterComponent
  },
  data(){
    return {
      blogs: [],
      searchItem: '',
      
    }
  },
  computed: {
    foundedBlogs: function() {
    var item = this.searchItem;
    return this.blogs.filter(function(value){
       return value.title.toUpperCase().match(item.toUpperCase());
      });
    }
  },
  directives: {
      // directive definition
      'colorChange':  {
        bind(el/*, binding ,vnode*/){
          el.style.color = "#008CBA"; //testing out, it's more a job of a filter
        }
      }
  },
  filters: {
      'toUpperCase': function(value) {
        return value.toUpperCase();
      },
      'minimize': function(value){

        if( value.length < 100 ) return value;
        else return value.slice(0,100) + "...";
      }
  },
  created(){
    this.$http.get(API_URL).then(function(snap){
      this.blogs = snap.body.slice(0, 100);
      console.log(this.blogs);
    })
  }
}
</script>
<style scoped>

.singleBlog{
  text-decoration:none;
  margin: 10px;
  padding: 2px 16px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
}
h2 {
  text-align: center;
}
input[type="text"]{
 /* margin: 10px;*/
  width: 92%;
}
div {
  text-align:center
}
.rLink {
text-decoration:none;
}

</style>
