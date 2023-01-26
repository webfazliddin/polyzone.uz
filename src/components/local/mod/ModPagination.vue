<template>
  <div class="row">
    <div class="col-12">
      <nav class="navigation pagination">
        <div class="nav-links">
          <a class="prev page-numbers mr-100" href="javascript:void(0)"><i class="fal fa-long-arrow-left"></i></a>
          <span
            v-for="item in getPages()"
            class="page-numbers"
            :class="{'current': item === page}"
            @click="$emit('setPage', item)"
          >
            {{ item }}
          </span>

          <a class="next page-numbers ml-100" href="javascript:void(0)"><i class="fal fa-long-arrow-right"></i></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModPagination",
  props: {
    totalPage: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    },
  },
  methods: {
    getPages() {
      let pages = [1];
      for (let i = 2; i <= this.totalPage ; i++) {
        pages.push(i);
      }
      return pages;
    }
  }
}
</script>

<style scoped>
.mr-100 {
  margin-right: auto;
}

.ml-100 {
  margin-left: auto;
}
</style>
