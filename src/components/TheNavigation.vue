<template>
  <!-- <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Home</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </nav> -->
  <!-- all of that above is static, but in reality, when we want to develop travel app, we have to deal with mutltile pages, so this way is not effective -->

  <!-- instead we can use dynamic way like this  -->
  <nav class="nav">
    <p class="logo">The travel app</p>
    <ul class="list-places">
      <li class="link">
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="link"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
p {
  font-size: 200%;
  color: black;
  font-weight: bolder;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-places {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.link {
  padding: 10px;
}
a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 10px;
}
.nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
