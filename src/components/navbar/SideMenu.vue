<template>
  <div>
    <div class="columns">
      <div class="column is-one-fifth">
        <aside class="menu is-fullheight">

          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p class="menu-label">Administration</p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <side-menu-group :items="items" group="test">
              <side-menu-group :items="items" group="test"> </side-menu-group>
            </side-menu-group>
          </ul>
        </aside>
      </div>

      <div class="column">Auto</div>
    </div>
  </div>
</template>

<script>
import SideMenuGroup from "./SideMenuGroup.vue";
export default {
  components: { SideMenuGroup },
  data() {
    return {
      collapsed: true,
      height: 0,
      items: [
        {
          name: "aaaa",
          text: "aaaa",
        },
        {
          name: "bbb",
          text: "bbb",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.menu {
  background-color: #203030;
}
.menu-list a {
  color: antiquewhite;
}
</style>