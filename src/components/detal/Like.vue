<template>
  <div class="shop_like">
    <button
      type="button"
      class="card_love"
      data-toggle="tooltip"
      title="Love"
    >
      {{ !!mod() ? mod().rating : 'z' }}
      <span class="icon" @click="liked()">
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="warning"
          :size="size"
          :width="width"
        ></v-progress-circular>
        <i
          v-else
          class="far fa-heart"
        ></i>
      </span>
    </button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Like',
  props: {
    id: {
      required: true,
      default: 0,
    },
    size: {
      default: 15,
    },
    width: {
      default: 2,
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      modById: "Mod/listById"
    })
  },
  methods: {
    ...mapActions({
      addLike: "ModLike/action_store",
      actionModShow: "Mod/action_show"
    }),
    liked() {
      this.loading = true;
      this.addLike(this.id)
        .finally(() => {
          this.loading = false;
        });
    },
    mod() {
      if (!this.modById[this.id]) {
        this.actionModShow(this.id);
        return null;
      } else {
        return this.modById[this.id];
      }
    }
  },
  watch: {
    actionModShow: {
      handler() {
        this.$forceUpdate();
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
.shop_like{
  display: inline;
}
span {
  cursor: pointer;
}
</style>

