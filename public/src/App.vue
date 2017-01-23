<template>
  <div>

    <h1 class="title"> {{ message }} </h1>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Welcome to Vue'
    }
  }
}
</script>

<style>

.title {
  color: blue;
}

</style>
