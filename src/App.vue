<template>
  <div id="app">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <polygon
        points="100,10 40,198 190,78 10,78 160,198"
        fill="gold"
        stroke="orange"
        stroke-width="3"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
