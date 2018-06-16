<template>
    <header>
      <h1>Page</h1>
        <nav>
            <router-link exact to="/" class="link">Home</router-link>
            <router-link to="/about" class="link">About</router-link>
        </nav>
    </header>    
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>
<style lang="scss">
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
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
</style>
