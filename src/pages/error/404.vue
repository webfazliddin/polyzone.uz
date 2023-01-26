<template>
  <main class="full-wrapper second_page_wrapper" id="home-section">
    <HeaderSecond
      :title="'404'"
      :sub_title="'Page not found'"
      :btn_title="'Home page'"
      :btn_src="'/'"
    />
    <HeaderSlideAreaSection />
  </main>
</template>
<script>
import HeaderSecond from '@/components/global/HeaderSecond.vue';
import HeaderSlideAreaSection from '@/components/section/HeaderSlideAreaSection.vue';
export default {
  name: 'Error404',
  components: { HeaderSecond, HeaderSlideAreaSection }
}
</script>
<style>
</style>
