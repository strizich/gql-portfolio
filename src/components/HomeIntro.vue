<template>
  <div class="intro">
    <div class="intro__group">
       <p class="intro__lead"><span>I'm Jason Strizich</span></p>
       <p class="intro__text">a <span class="tooltip__note" title="What is a fullstack designer?" v-b-popover.bottom="'A full stack designer is a description of a cross-disciplinary designer who is skill in wireframe/prototype design (UX), visual design (UI), and the front coding, HTML / CSS / JS.'">full-stack designer</span> based in Dallas, Tx</p>
       <p class="intro__text intro__text--sm"><i>I design useable products for the people that use them.</i></p>
    </div>
  </div>
</template>

<script>
// import anime from 'animejs'
import bPopoverDirective from 'bootstrap-vue/es/directives/popover/popover'
export default {
  name: 'HomeIntro',
  directives: { 'b-popover': bPopoverDirective }
}
</script>

<style lang="scss">
.tooltip__note{
  text-decoration: underline;
  text-decoration-color: rgba(255,255,255,.25);
  &:hover{
    color: rgba(255,255,255,.75);
  }
}

#anim__lead{
  opacity: 0;
  width: auto;
  position:relative;
  i{
    color:#9013FE;
  }
}

.intro {
  background: url('/img/intro-mast-bg.svg') no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 64px 72px;
  font-size: 27px;
  height: calc(100vh - 85px);
  width: 100%;
  display: flex;
  align-items: center;
  &__group{
    line-height:1.3;
  }
  &__lead{
    font-size: 34px;
    font-weight:500;
    margin-bottom:0;
  }
  &__text{
    font-size:24px;
    font-weight:300;
    margin-bottom:16px;
    &--sm{
      font-size: 14px;
    }
  }
}

@media (max-width: 576px) {
  #anim {
      top:37px;
  }
  .intro{
    padding:62px 16px;
  }
}
</style>
