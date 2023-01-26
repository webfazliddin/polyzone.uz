<template
  v-model="value"
>
  <div
    class="dropdown"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <a class="btn-selector">{{ getText(getSelected()) }}</a>
    <ul
      :class="{'d-block':show, 'd-none':!show}"
    >
      <li
        @click="setSelected(null)"
        :class="{'active':null === getSelected()}"
      >
        <span>{{ this.placeholder }}</span>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="setSelected(item)"
        :class="{'active':getValue(item) === getValue(getSelected())}"
      >
        <span>{{ getText(item) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropdownSelect",
  props: {
    items: {
      type: Array,
      default: ['item']
    },
    value: {
      default: null,
    },
    placeholder:{
      type: String,
      default: 'Placeholder',
    },
    textKey: {
      type: String,
      default: null
    },
    valueKey: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      show: false,
      dataSelected: null
    }
  },
  mounted() {
    if(this.valueKey){
      this.dataSelected = this.items.find((item) => {
        return item[this.valueKey] === this.value
      });
    } else {
      this.dataSelected = this.value
    }
    this.dataSelected = !this.valueKey ? this.value : this.items.find(item => item[this.valueKey] === this.value)
  },
  methods: {
    getValue(item) {
      if(!item) return null;
      return !!this.valueKey ? item[this.valueKey] : item;
    },
    getText(item) {
      if(!item) return this.placeholder;
      return !!this.textKey ? item[this.textKey] : item;
    },
    getSelected(){
      return this.dataSelected
    },
    setSelected(item) {
      this.dataSelected = item;
      this.$emit('update:value', this.getValue(this.getSelected()))
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  &:hover ul {
    display: block;
  }
}
</style>

