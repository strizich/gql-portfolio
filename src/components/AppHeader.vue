<template>
    <header>
      <h1>Page</h1>
        <nav>
            <router-link exact to="/" class="link">Home</router-link>
            <a href="" class="link">Projects</a>
            <router-link to="/about" class="link">About</router-link>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
:root{
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        position: fixed;
        top:0;
        left:0;
        width:100%;
        h1{
          font-size: 18px;
          margin: 0;
        }
    }
    nav{
        display:flex;
        align-items: center;
        .link{
          padding:16px;
        }
    }
}
</style>
