<template>
  <div>
    <span class="text">{{ mod(id) ? mod(id).viewed : 'z' }}</span>
    <span class="icon"><i class="far fa-eye"></i></span>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name:"Viewed",
  props:{
    id:{
      type: Number,
    }
  },
  computed:{
    ...mapGetters({
      modById:"Mod/listById"
    })
  },
  methods:{
    ...mapActions({
      modShow: "Mod/action_show"
    }),
    mod(){
      if(!this.modById[this.id]){
        this.modShow(this.id);
        return null;
      } else {
        return this.modById[this.id];
      }
    }
  },
  watch:{
    modById:{
      handler(){
        this.$forceUpdate();
      },
      deep:true
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  display: inline;
}
</style>
