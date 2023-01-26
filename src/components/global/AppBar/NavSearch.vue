<template>
  <div class="nav_search">
    <button class="nav_search-toggle circle-button">
      <i class="far fa-search"></i>
    </button>
    <form class="nav_search-form" @click.prevent>
      <input
        type="text"
        placeholder="Search keyword"
        v-model="search"
      />
      <button type="submit" @click="submit" ><i class="far fa-search"></i></button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "NavSearch",
  data() {
    return {
      search: '',
    }
  },
  methods: {
    ...mapMutations({
      searchSync: "ModFilter/searchSync"
    }),
    submit() {
      this.searchSync(this.search);
      this.$router.push({name:'ModPage'}).catch(()=>{});

    }
  }
}
</script>
