<template>
  <i
    v-if="!!listModById[this.id]?.price ?? false"
    class="far fa-shopping-cart cursor-pointer"
    :class="{'warning--text':buyed()}"
    @click="addToCart()"
  ></i>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddToCard",
  props: {
    id: Number
  },
  computed: {
    ...mapGetters({
      idList: "WebSetting/shopping_cart",
      listModById: "Mod/listById"
    })
  },
  mounted() {
    if(!this.listModById[this.id]){
      this.actionGetModById(this.id)
    }
  },
  methods: {
    ...mapActions({
      actionShoppingCartAdd: "WebSetting/action_shopping_cart_add",
      actionShoppingCartRemove: "WebSetting/action_shopping_cart_remove",
      actionGetModById:"Mod/action_show"
    }),
    addToCart() {
      if(this.idList.includes(this.id)){
        this.actionShoppingCartRemove(this.id)
      } else {
        this.actionShoppingCartAdd(this.id)
        if(!this.listModById[this.id]){
          this.actionGetModById(this.id);
        }
      }
    },
    buyed(){
      return this.idList.includes(this.id);
    }
  },
  watch:{
    idList: {
      handler(){
        this.$forceUpdate();
      },
      deep: true
    }
  }
}
</script>


<style scoped>
i {
  cursor: pointer;
}
</style>
