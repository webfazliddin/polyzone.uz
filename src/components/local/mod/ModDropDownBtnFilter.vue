<template>
  <a
    class="item"
    :class="{active: selectedCategories.includes(this.id) }"
    @click="select"
  >
    <div
    >
      {{ category.title }} ({{ category.mod_count }})
    </div>
    <span
      class="dropdown"
      v-if="category.children_has"
      @click.stop="dropdown = !dropdown"
    >
      <i
        class="far fa-angle-down p-1"
        :class="{'down':dropdown}"
      ></i>
    </span>
    <ul class="collapse in w-100 mt-3" v-if="dropdown">
      <li class="cat-item" v-for="item in category.children" :key="item.id">
        <ModDropDownBtnFilter :id="item.id"/>
      </li>
    </ul>
  </a>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "ModDropDownBtnFilter",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dropdown: false,
      category: {
        title: ''
      }
    };
  },
  computed: {
    ...mapGetters({
      listForModFilter: "Category/listForModFilter",
      listByIdCategory: "Category/listById",
      selectedCategories: "ModFilter/categories"
    }),
  },
  mounted() {
    if (!this.listByIdCategory[this.id]) {
      this.actionShow(this.id).then(() => {
        this.category = this.listByIdCategory[this.id];
      });
    } else {
      this.category = this.listByIdCategory[this.id];
    }
  },
  methods: {
    ...mapActions({
      actionShow: "Category/action_show"
    }),
    ...mapMutations({
      categoriesAdd: "ModFilter/categoriesAdd",
      categoriesRemove: "ModFilter/categoriesRemove"
    }),
    select() {
      if (this.selectedCategories.includes(this.id)) {
        this.categoriesRemove(this.id);
      } else {
        this.categoriesAdd(this.id)
      }
    }
  },
  watch: {
    selectedCategories: {
      handler() {
        this.$forceUpdate()
      },
      deep: true
    },
    listByIdCategory: {
      handler() {
        this.$forceUpdate();
      },
      deep: true
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.item {
  align-items: center;
  color: rgba($light-secondary, 1);
  font-weight: 400;
  flex-wrap: wrap;
  -webkit-box-align: center;
  display: flex;
  background-color: rgb(var(--gray-bg));
  padding: 10px 15px;
  cursor: pointer;

  &:before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 10px;
    display: inline-block;
    background-color: rgb(var(--gray-alt-bg));
    margin-right: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  &:hover, &.active {
    &:before {
      background-color: $light-warning;
    }
  }
}

.borderGroup {
  border: 1px solid rgb(var(--gray-alt-bg));
  //border-radius: 7px;
  width: 100%;
}

.dropdown {
  margin-left: auto;
}
</style>
