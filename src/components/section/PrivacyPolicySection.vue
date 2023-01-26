<template>
  <section class="section_padding">
    <div class="container">
      <div class="row g-5">
        <div class="col-md-5">
          <ul class="dots_list">
            <li v-for="(item, index) in list" :class="{'active':index===indexData}" :key="index">
              <a @click="selectTab(index)">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-7">
          <div class="tab-content">
            <div class="tab-pane fade in active">
              <h3 class="mb-4">{{ list[indexData].title }}</h3>
              <div class="page_desc">{{ list[indexData].description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PrivacyPolicySection",
  data() {
    return {
      indexData: 0,
    }
  },
  computed: {
    ...mapGetters({
      list: "PrivacyPolicy/list"
    })
  },
  methods: {
    selectTab(index) {
      this.indexData = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.dots_list a{
  display: block;
}
</style>
