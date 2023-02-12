<script setup lang="ts">
interface Props {
  data: any;
}

const Props = withDefaults(defineProps<Props>(), {
  data: {},
});
</script>

<template>
  <NuxtLink
    v-bind:to="`/curations/aoki/${data.id}`"
    class="link"
  >
    <div class="container">
      <img v-bind:src="data.image_url" class="thumbnail" />
      <div class="title">{{ data.title }}</div>
      <div class="evaluation-container">
        <img
          src="https://www.shutterstock.com/image-illustration/isolated-yellow-star-icon-ranking-600w-716597434.jpg"
          class="star-icon"
        />
        <div class="evaluation">{{ data.evaluation }}</div>
        <div class="evaluation-comment">({{ data.comment }})</div>
      </div>
      <div class="user-price-container">
        <img
          src="https://www.shutterstock.com/image-illustration/isolated-yellow-star-icon-ranking-600w-716597434.jpg"
          class="user-icon"
        />
        <div class="name">{{ data.name }}</div>
        <div class="price">{{ data.price }}円</div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="css" src="./index.css" scoped></style>
