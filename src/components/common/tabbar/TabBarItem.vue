<template>
  <div @click="itemClick" class="tab-bar-item">
    <div v-if="!isActive">
      <slot name="item-icon"/></div>
    <div v-else>
      <slot name="item-icon-active"/></div>
    <div :style="activeStyle">
      <slot name="item-text"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor:{
        type: String,
        default: 'cornflowerblue'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 23px;
    width: 23px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
