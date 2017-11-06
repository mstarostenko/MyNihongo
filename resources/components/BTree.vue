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

import BTree from '../components/BTree.vue'
import BClauseNode from '../components/BClauseNode'
import BSentenceRoleNode from '../components/BSentenceRoleNode'
import BSentenceElNode from '../components/BSentenceElNode'

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
        return 'BClauseNode'
      }

      if (this.nodeValue.unitClass === 'sentence_el') {
        return 'BSentenceElNode'
      }

      if (this.nodeValue.unitClass === 'sentence_role') {
        return 'BSentenceRoleNode'
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
