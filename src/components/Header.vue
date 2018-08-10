<template>
    <header>
      <div class="logo">Jason Strizich</div>
        <nav>
            <router-link exact to="/">
                <vs-button tag="vs-button" vs-type="flat" vs-color="primary" vs-size="sm">Home</vs-button>
            </router-link>
            <router-link to="/about">
              <vs-button tag="vs-button" vs-type="flat" vs-color="primary" vs-size="sm">About</vs-button>
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>

.logo{
    background: url("/img/logo.svg") no-repeat center center;
    width:70px;
    height:25px;
    text-indent: -10000px;
    margin-top:8px;
}

header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    position: sticky;
    position:-webkit-sticky;
    top:0;
    left:0;
    width:100%;
    z-index: 100;
    background:#fff;
}

nav{
    display:flex;
    align-items: center;
}
</style>
