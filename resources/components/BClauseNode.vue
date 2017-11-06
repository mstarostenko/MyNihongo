<template lang="pug">
  .b-clause-node ClauseNode TEXT

</template>

<script>

import BClauseNode from '../components/BClauseNode'
import BSentenceRoleNode from '../components/BSentenceRoleNode'
import BSentenceElNode from '../components/BSentenceElNode'

export default {
  name: 'BClauseNode',

  components: {
    BClauseNode,
    BSentenceRoleNode,
    BSentenceElNode
  }
}

</script>
