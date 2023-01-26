<template>
  <div class="notification">
    <v-alert
      v-for="(item, index) in list"
      :key="index"
      :type="item.type"
    >
      {{item.message}}
    </v-alert>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Notification",
  computed:{
    ...mapGetters({
      list: "Notification/list"
    })
  },
}
</script>

<style lang="scss" scoped>
.notification{
  z-index: 1;
  position: fixed;
  top: 120px;
  right: 20px;
}
</style>
