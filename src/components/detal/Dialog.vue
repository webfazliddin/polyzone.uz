<template>
  <div
    class="modal fade in"
    v-if="show"
    role="dialog"
    @click="outClickClose || close"
  >
    <div class="modal-dialog modal-lg" @click.stop>
      <div class="modal-content modal_card">
        <button @click="close" type="button" class="close" v-if="showClickBtn">
          <i class="fas fa-times"></i>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showClickBtn: {
      type: Boolean,
      default: false
    },
    outClickClose: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  background-color: rgba(var(--body-bg), 1);
}

.modal-dialog {
  display: block;
  margin: 0;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%) !important;
  padding: 0;
  height: auto;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
}
</style>
