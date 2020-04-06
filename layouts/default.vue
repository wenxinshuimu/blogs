<template>
  <div>
    <header>
      <my-header />
    </header>
    <main class="main_container">
      <nuxt />
    </main>
    <footer>
      <my-footer />
    </footer>
  </div>
</template>
<script>
import MyHeader from '../components/header/Index'
import MyFooter from '../components/footer/Index'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
<style lang="scss">
  .main_container {
    margin-top: 80px;
    min-height: calc(100vh - 163px);
    min-width: 1000px;
  }
</style>
