<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find((destination) => {
        return destination.slug === this.slug;
      });
    },
    experience() {
      return this.destination.experiences.find((experience) => {
        return experience.slug === this.experienceSlug;
      });
    },
  },
};
</script>
<style scoped>
.experience-details {
    display: flex;
    justify-content: space-between;
}
.experience-details img {
    height: auto;
    width: 100%;
    max-height: 400px;
}
p {
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
}
</style>
