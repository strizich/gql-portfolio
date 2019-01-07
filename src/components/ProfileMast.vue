<template>
  <div class="profile">
    <!-- <img class="profile__img" :src="avatar"/> -->
    <div class="profile__info">
      <h2 class="profile__name">{{firstName}} {{lastName}}</h2>
      <p class="profile__title">{{title}}</p>
      <profile-list-item icon="email" size="md">{{email}}</profile-list-item>
      <profile-list-item icon="iphone" size="md">{{phone}}</profile-list-item>
    </div>
    <div class="profile__stats container-fluid">
      <div class="row">
        <profile-stat-bar v-for="(skill, index) in userSkills" :key="skill.id"
          :name="skill.id"
          :x="skill.rating"
          :description="skill.description"
          :delay="delay * index"
          class="col-md-3 col-sm-6">
          {{skill.name}}
        </profile-stat-bar>
      </div>
    </div>
    </div>
</template>

<script>
import ProfileListItem from '../components/ProfileListItem.vue'
import ProfileStatBar from '../components/ProfileStatBar.vue'

export default {
  name: 'ProfileMast',
  showMore: false,
  index: '',
  data: () => ({
    isShown: false,
    delay: 50
  }),
  props: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    title: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    userSkills: {
      type: Array
    }
  },
  components: { ProfileListItem, ProfileStatBar },
  methods: {
    toggle: function () {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style lang="scss">
  .mobile__details{
    width:100%;
    display:none;
  }
  .mobile__show{
    display:none;
  }
  .profile {
    overflow-x: hidden;
    color: #000;
    box-shadow: 1px 0 0 rgba(0,0,0,.1);
    display:flex;
    padding:64px 0 32px;
    justify-content: space-between;
    &__name{
      padding-bottom: 0;
      font-size: 24px;
      margin-bottom:8px;
    }
    &__title{
      color: rgba(0,0,0,.75);
      margin-bottom: 0;
    }
    &__info{
      padding: 0 16px;
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
    display:block;
  }
  .mobile{
    &__details{
      display:block;
    }
    &__show{
      display:block;
    }
  }
}
</style>
