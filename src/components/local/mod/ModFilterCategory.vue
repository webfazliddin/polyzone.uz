<template>
  <div class="widget widget_categories">
    <h5 class="widget-title" @click="openDropDown = !openDropDown">
      <span>Categories</span>
      <span class="toggle_arrow open_drop_down">
        <i class="far fa-angle-down" :class="{'down':openDropDown}"></i>
      </span>
    </h5>
    <ul class="collapse in" v-if="openDropDown">
      <li class="cat-item" v-for="category in listForModFilter">
        <ModDropDownBtnFilter :id="category.id"/>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ModDropDownBtnFilter from "@/components/local/mod/ModDropDownBtnFilter";

export default {
  name: "ModFilterCategory",
  components: {
    ModDropDownBtnFilter
  },
  data() {
    return {
      openDropDown: true,
    }
  },
  mounted() {
    this.getListForModFilter()
  },
  computed: {
    ...mapGetters({
      listForModFilter: "Category/listForModFilter"
    })
  },
  methods: {
    ...mapActions({
      getListForModFilter: "Category/action_index_for_mod_filter"
    }),
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.open_drop_down {
  i {
    transition-duration: 0.4s;

    &.down {
      transform: rotate(180deg)
    }
  }
}


</style>
