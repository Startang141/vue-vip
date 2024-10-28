<script>
export default {
  data() {
    return {
      name: 'favian Options',
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    },
  },
}
</script>
<template>
  <h2>{{ name }}</h2>
  <button @click="showName">Tampilkan Nama</button>
</template>

<style scoped></style>
