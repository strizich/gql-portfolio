<template>
    <div class="loading">
        <p>Loading</p>
    </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>
<style lang="scss" scoped>
    .loading{
        position:fixed;
        top:50%;
        left:50%;
        transform: translate3d(-50%, -50%, 0);
    }
</style>
