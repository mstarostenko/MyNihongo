<template lang="pug">
  .b-clause.pink.lighten-3
    slot

</template>

<script>

// import BClauseNode from '../components/BClauseNode'
// import BSentenceRoleNode from '../components/BSentenceRoleNode'
// import BSentenceElNode from '../components/BSentenceElNode'

export default {
  name: 'BClauseNode',

  props: {
    value: {
      type: Object
    }
  }

  // components: {
  //   BClauseNode,
  //   BSentenceRoleNode,
  //   BSentenceElNode
  // }
}

</script>
