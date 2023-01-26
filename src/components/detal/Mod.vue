<template>
  <iframe :src="src" ></iframe>
</template>

<script>
export default {
  name:"Mod",
  props:{
    src: {
      type: String,
    }
  }
}
</script>

<style type="scss" scoped>
iframe{
  width: 100%;
  height: 100%;
}
</style>
