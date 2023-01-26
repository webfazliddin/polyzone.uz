<template>
  <div class="mod_image"
    :style="'background-image: url(\'' + src + '\')'"
  >
<!--    <img :src="src" :alt="alt">-->
  </div>
</template>

<script>
export default {
  name: 'ModImage',
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.mod_image {
  aspect-ratio: 8 / 5;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
}
</style>
