<template lang="pug">
  article.b-pattern-pcard
    header.b-pattern-pcard
      .b-pattern-pcard__title.headline.red--text PCARD

    article.b-pattern-card__pattern(
      v-for="pattern in collection"
      :pattern="pattern"
      is='BPattern'
    )
</template>

<script>

import BPattern from '../components/BPattern'

export default {
  name: 'BPatternCard',
  components: {
    BPattern
  },

  props: {
    collection: {
      type: Array,
      required: true
    }
  }
}

</script>
