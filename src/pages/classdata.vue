<template>
  <div>
    <template>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>{{cateLists[index]}}</van-grid-item>
      </van-grid>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Classdata",
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  // props: ["index"],
  data() {
    return {};
  },
  watch: {
    index: {
      handler: function(val) {
        console.log(val);
        // this.index = val
      },
      immediate:true
    }
  },
  computed: {
    ...mapState({
      cateLists: state => state.home.cateLists
    })
  },
  methods: {
    
  },
  mounted() {},
  created() {}
};
</script>

<style>
.box {
  float: right;
}
.van-grid .van-hairline--top {
  width: 70% !important;
}
</style>