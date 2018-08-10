<template>
  <div class="sidebar" v-if="!collapsed">
    <img class="profile__img" :src="avatar"/>
    <div class="profile__info">
      <h1>{{firstName}} {{lastName}}</h1>
      <p class="text__title">{{role}}</p>
    </div>
    <div class="profile__contact">
      <list-item icon="email" size="md">strizich@me.com</list-item>
      <list-item icon="iphone" size="md">(214) 517-2450</list-item>
    </div>
    <div class="profile__stats">
      <stat-bar/>
      <stat-bar/>
      <stat-bar/>
    </div>
  </div>
</template>

<script>
import ListItem from '../components/SidebarListItem.vue'
import StatBar from '../components/SidebarStatBar.vue'
export default {
  name: 'Card',
  props: {
    avatar: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    collapsed: String
  },
  components: { ListItem, StatBar }
}
</script>

<style lang="scss" scoped>
  .sidebar{
    width:420px;
    padding:16px;
  }
</style>
