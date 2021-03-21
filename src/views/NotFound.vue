<template>
<div class="notFound">
    <h1>Not Found</h1>
    <p>
        Oops we couldn't find that page. Try going
        <router-link :to="{name: 'home'}">Home</router-link>
    </p>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.notFound {
    background-image: url("/assets/404.png");
    height: 100vh;
}
a {
    text-decoration: none;
    color: green;
    font-weight: bolder;
}
</style>