<template lang="pug">
  .b-tree
    span.blue--text label node {{ node.value }}

    b-tree(
      v-for="(node, i) in nodes",
      :key="i",
      :node="node"
    )

</template>

<script>

import BTree from '../components/BTree.vue'
// import BSentenceRoleNode from '../components/BSentenceRoleNode'
// import BSentenceElNode from '../components/BSentenceElNode'

export default {
  name: 'BTree',

  props: ['node', 'nodes'],

  components: {
    BTree
  }
}

</script>
