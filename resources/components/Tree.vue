<template lang="pug">
  .b-tree

    .b-tree__node(
      style="padding: 3px"
      :is="nodeComponent"
      :value="nodeValue"
    )

      b-tree(
        style="border-left: 20px solid grey"
        :class="{'_inline': isInline}",
        v-for="(node, i) in nodes"
        :key="i"
        :nodeValue="node.value"
        :nodes="node.nodes",
        isInline="true"
      )

</template>

<script>

import Tree from '../components/Tree'
import ClauseNode from '../components/ClauseNode'
import SentenceRoleNode from '../components/SentenceRoleNode'
import SentenceElNode from '../components/SentenceElNode'

export default {
  name: 'BTree',

  props: ['nodeValue', 'nodes', 'isInline'],

  components: {
    BTree,
    BClauseNode,
    BSentenceRoleNode,
    BSentenceElNode
  },

  computed: {
    nodeComponent () {
      if (this.nodeValue.unitClass === 'clause' || this.nodeValue.unitClass === 'root') {
        return 'ClauseNode'
      }

      if (this.nodeValue.unitClass === 'sentence_el') {
        return 'SentenceElNode'
      }

      if (this.nodeValue.unitClass === 'sentence_role') {
        return 'SentenceRoleNode'
      }
    }
  }
}

</script>

<style lang="scss">
  .b-tree {
    &._inline {
      display: inline-block;
    }
  }
  
</style>
