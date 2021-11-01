<template>
  <div class="list">
    <ul>
      <li v-for="item in products" :key="item._id" @click="godetail">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onload() {
      axios.get("http://localhost:3009/api/v1/products").then((res) => {
        console.log(res);
        this.products = res.data.products;
      });
    },
    godetail() {
      this.$router.push("/detail");
    },
  },
  // keep-alive里面有activated和deactivated可以被使用
  activated() {
    if (!this.$route.meta.isshowcache) {
      //不需要缓存的话
      this.products = [];
      this.onload(); // 再执行一下请求接口
    }
  },
  deactivated() {
    console.log("离开了");
  },
  beforeRouteLeave(to, from, next) {
    if (to.name == "Detail") {
      // 路由跳转到detail页面的时候
      from.meta.isshowcache = true;
    } else {
      from.meta.isshowcache = false;
    }
    next();
  },
  created() {
    this.onload();
  },
  mounted() {},
  components: {},
};
</script>
<style scoped></style>
