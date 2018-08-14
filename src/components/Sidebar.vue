<template>
  <div class="profile" v-if="about">
    <!-- <img class="profile__img" :src="avatar"/> -->
    <div class="profile__info">
      <h2 class="profile__name">{{about.firstName}} {{about.lastName}}</h2>
      <p class="text__title">{{about.title}}</p>
    </div>
    <div class="profile__contact">
      <list-item icon="email" size="md">{{about.email}}</list-item>
      <list-item icon="iphone" size="md">{{about.phone}}</list-item>
    </div>
    <transition-group name="slide" tag="div" class="profile__stats">
      <stat-bar v-for="(skill, index) in about.userSkills" v-bind:key="skill.id"
        :name="skill.id"
        :x="skill.rating"
        :delay="delay * index">
        {{skill.name}}
      </stat-bar>
    </transition-group>
    <!-- v-if="skill.featured || isShown" -->
    <!-- <button v-on:click="toggle()">{{ isShown ? 'Less Details' : 'More Details' }}</button> -->
    </div>
</template>

<script>
import ListItem from '../components/SidebarListItem.vue'
import StatBar from '../components/SidebarStatBar.vue'
import about from '@/graphql/Sidebar.graphql'

export default {
  name: 'Sidebar',
  showMore: false,
  index: '',
  data: () => ({
    isShown: false,
    firstName: '',
    delay: 50
  }),
  components: { ListItem, StatBar },
  apollo: {
    about: {
      query: about,
      variables () {
        return {
          slug: 'about'
        }
      }
    }
  },
  methods: {
    toggle: function () {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style lang="scss">
  .profile {
    top: 0;
    left: 0;
    height: 100vh;
    overflow-x: hidden;
    color: #000;
    background:#fff;
    box-shadow: 1px 0 0 rgba(0,0,0,.1);
    &__name{
      padding-bottom: 0;
    }
    &__info{
      padding: 8px 16px;
    }
    &__contact{
      padding: 0 16px ;
    }
    &__stats{
      margin-top: 16px;
    }
  }
  .slide-enter, .slide-leave-to {
    height: 0px;
    padding: 0 16px;
    border:none;
    background-color:#efefef;
  }
  .slide-enter-active, .slide-leave-active {
    transition: height .5s, opacity .32s, padding .5s;
    overflow: hidden;
  }
  .slide-leave-active{
     transition: height .5s, opacity .32s, padding .5s;
  }
  .slide-enter-to, .slide-leave {
    height: 55px;
  }
  .slide-enter, .slide-leave-to {
    height: 0;
    padding: 0 16px;
    border:none;
    background-color:#efefef;
  }
</style>
