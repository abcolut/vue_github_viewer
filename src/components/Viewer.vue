<template>
  <div>
    <h1>Смотрелка GitHub</h1>      
      Строка поиска: <input type="text" placeholder="Строка поиска" v-model.trim="search">
      <div v-for="g,i of git.items" class="git"> 
        <span class="gitName">
          <a :href="g.html_url" target="_blank"> 
            {{g.name}}
          </a>
        </span> 
        Звёзд: {{g.stargazers_count}}
        Подписчиков: {{g.watchers_count}}
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import debounce from '../helper/debounce.js'  

export default {
  name: 'Viewer',
  data(){
    return{
      search: "vue test",
    }
  },        
  computed:{
    ...mapGetters('git', {git: 'getGit'}),      
  },
  watch: {
    search: debounce(function (newVal) {
      var debouncedInput = newVal
      if (debouncedInput.length > 4){
        this.$store.dispatch("git/getGit", {searchString: debouncedInput} )
      }
    }, 1000)
  },
  mounted(){
    this.$store.dispatch("git/getGit", {searchString: "vue test"})
  }
}
</script>

<style scoped>
input{
  margin: auto;
}
.git{
  #margin: 10px;
  padding-top: 10px;
  #border: 1px solid grey;
}
.gitName{
  font-weight: bold;
}

</style>
