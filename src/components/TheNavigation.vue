<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/brazil">Home</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </nav>
</template>
<style scoped>
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: green;
}
</style>
