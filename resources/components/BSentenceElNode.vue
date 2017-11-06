<template lang="pug">
  .b-sentence-el.red
    | {{ value.unitName }}

</template>

<script>

export default {
  name: 'BSentenceElNode',

  props: {
    value: {
      type: Object
    }
  }
}

</script>
