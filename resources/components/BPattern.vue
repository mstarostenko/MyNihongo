<template lang="pug">
  article.b-pattern
    | test
    | --------     Pattern
    | {{ pattern }}

</template>

<script>

// import Pattern from '../components/Pattern'

export default {
  name: 'BPattern',

  props: {
    pattern: {
      type: Object
    }
  }
}

</script>
