<template>
  <li>
    <a class="" :class="style()" @click="toggle">{{ group }}</a>
    <ul class="entries" ref="box">
      <li v-for="item in items" :key="item.name">
        <a>{{ item.text }}</a>
      </li>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["items", "group"],
  data() {
    return {
      height: 0,
      collapsed: true,
    };
  },
  methods: {
    style() {
      return {
        "active": !this.collapsed,
      };
    },
    toggle() {
      // this.collapsed = !this.collapsed;
      // this.matchHeight()
      if (!this.collapsed) {
        this.height = this.$refs.box.clientHeight + "px";
        this.matchHeight();
      }

      this.collapsed = !this.collapsed;

      let that = this;

      setTimeout(function () {
        that.matchHeight();
      }, 0);

      if (!this.collapsed) {
        let b = this.$refs.box;
        setTimeout(function () {
          b.style.height = "";
        }, 500);
      }
    },
    matchHeight() {
      this.$refs.box.style.height = this.collapsed ? 0 : this.height;
    },
  },
  mounted() {
    this.height = this.$refs.box.clientHeight + "px";
    this.matchHeight();
  },
};
</script>

<style scoped>
.entries {
  transition: height 0.3s ease-out;
  overflow: hidden;
  background-color: #002020;
}
.menu-list a {
  color: rgb(158, 169, 179);
}
.menu-list li ul {
  border-left: 2px solid #00fbf0;
  margin: 0;
}
.menu-list a:hover {
  background-color: #025a5a;
  color: white;
}
.active {
  background-color: #001a1a;
  color: white;
}
</style>