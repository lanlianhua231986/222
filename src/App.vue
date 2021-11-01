<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/pages">pages</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/biaodan">表单</router-link>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
