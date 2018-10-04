<template>
<transition name="fade">
<div class="post__status" v-if="!hideMe && status=='DRAFT'" v-on:click="hideMe = !hideMe">
    <div class="post__status--trigger">
        <span class="btn__close">&times;</span>
    </div>
    <div class="post__status--content">
        <p>{{status}}</p>
    </div>
</div>
</transition>
</template>

<script>
export default {
  name: 'articleStatus',
  data: () => ({
    hideMe: false
  }),
  props: {
    status: String
  }
}
</script>

<style lang="scss" scoped>
.btn__close{
  margin:0;
  padding:8px 16px;
  background-color:transparent;
  color:#fff;
  cursor: pointer;
}
.post{
&__status{
    margin: auto;
    position: sticky;
    z-index: 100;
    background: #3023AE;
    color: #fff;
    margin-top:8px;
    top: 65px;
    width: 200px;
    display:flex;
    align-items:center;
    border-radius: 20px;
    padding:0;
    &--trigger{
      justify-content: center;
      align-items: center;
      line-height: 1;
    }
    &--content{
      width:100%;
      p{
        text-align:center;
      }
    }
    p{
      margin: 4px 8px;
      font-weight: 300;
      letter-spacing: .75px;
      font-size: 11px;
      margin-left: -32px;
    }
  }
}
</style>
