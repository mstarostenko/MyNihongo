<template lang="pug">
  .b-sentence-role.blue
    | {{ value.unitName }}
    slot

</template>

<script>

export default {
  name: 'BSentenceRoleNode',

  props: {
    value: {
      type: Object
    }
  }
}

</script>
