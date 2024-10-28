<script setup>
const name = 'favian composition'

const showName = () => {
  console.log(name)
}
</script>

<template>
  <h2>{{ name }}</h2>
  <button @click="showName">Tampilkan Nama</button>
</template>

<style scoped></style>
