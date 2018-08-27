<template>
  <div class="profile" v-if="about">
    <!-- <img class="profile__img" :src="avatar"/> -->
    <div class="profile__info">
      <h2 class="profile__name">{{about.firstName}} {{about.lastName}}</h2>
      <p class="profile__title">{{about.title}}</p>
      <list-item icon="email" size="md">{{about.email}}</list-item>
      <list-item icon="iphone" size="md">{{about.phone}}</list-item>
    </div>
    <div class="profile__stats container-fluid">
      <div class="row">
        <stat-bar v-for="(skill, index) in about.userSkills" v-bind:key="skill.id"
          :name="skill.id"
          :x="skill.rating"
          :description="skill.description"
          :delay="delay * index"
          class="col-md-3 col-sm-6">
          {{skill.name}}
        </stat-bar>
      </div>
    </div>

    <!-- v-if="skill.featured || isShown" -->
    <!-- <button v-on:click="toggle()">{{ isShown ? 'Less Details' : 'More Details' }}</button> -->
    </div>
</template>

<script>
import ListItem from '@/components/SidebarListItem.vue'
import StatBar from '@/components/SidebarStatBar.vue'
import about from '@/graphql/Profile.graphql'

export default {
  name: 'Profile',
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
    overflow-x: hidden;
    color: #000;
    background:#fff;
    box-shadow: 1px 0 0 rgba(0,0,0,.1);
    display:flex;
    padding:64px 0 32px;
    justify-content: space-between;
    &__name{
      padding-bottom: 0;
      font-size: 24px;
      margin-bottom:0;
    }
    &__title{
      color: rgba(0,0,0,.75);
      margin-bottom: 0;
    }
    &__info{
      padding: 16px;
      flex-shrink: 0;
    }
    &__stat{
      width:100%;
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

@media (max-width: 576px) {
  .profile{
    height:auto;
    overflow: auto;
  }
}
</style>
