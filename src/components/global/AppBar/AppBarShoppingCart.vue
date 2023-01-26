<template>
  <div class="relative user_cirlce">
    <button class="circle-button">
      <i class="fas fa-shopping-cart"></i>
    </button>
    <div class="user_mini_cart">
      <div class="models" v-for="(id, index) in shopping_cart" :key="index">
        <div v-if="!!getListById(id)" class="w-100">
          <div class="w-100">
            <img :src="listById[id].img_path" alt=""/>
            <span>{{ listById[id].title }}</span>
            <span class="ml-2 float-right">{{ listById[id].price ? listById[id].price.default_value + '$' : 'FREE' }}</span>
          </div>
        </div>
      </div>
      <div class="total">
        <span class="subtotal">Subtotal:</span>
        <span class="total_number">{{ subtotal.toFixed(2) }} $</span>
      </div>
      <div class="actions">
        <router-link tag="button" to="/shopping_cart" class="w-100">View cart</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AppBarShoppingCart",
  data(){
    return {
      subtotal: 0,
    }
  },
  computed: {
    ...mapGetters({
      shopping_cart: "WebSetting/shopping_cart",
      listById: "Mod/listById"
    }),
  },
  methods: {
    ...mapActions({
      action_show: "Mod/action_show",
    }),
    getListById(id) {
      if (!this.listById[id]) {
        this.action_show(id).then(() => {
          this.$forceUpdate();
          return this.listById[id];
        })
      } else {
        return this.listById[id]
      }
    }
  },
  watch:{
    shopping_cart:{
      handler(newData){
        this.subtotal = 0;
        newData.forEach(id=>{
          this.subtotal += this.getListById(id)?.price?.default_value ?? 0;
        })
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.user_cirlce {
  z-index: 999;

  .models {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;

    img {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }

  .total {
    border-top: 1px solid rgb(185, 185, 185);
    padding-top: 10px;

    .subtotal {
      font-weight: 500;
      font-size: 16px;
    }

    .total_number {
      margin-left: 7px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 7px;

    button {
      padding: 5px 18px;
      background-color: #feda03;
      border-radius: 5px;
    }
  }
}
</style>
