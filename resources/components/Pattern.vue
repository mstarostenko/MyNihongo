<template lang="pug">
  article.b-pattern
    header.b-pattern__header
      .b-pattern__title.title.orange--text PATTERN
      | {{ pattern.tree.value }}
      hr
      hr

      b-tree(
       :nodes="pattern.tree.nodes",
       :nodeValue="pattern.tree.value"
      )

      <!-- .b&#45;pattern__sample( -->
      <!--     v&#45;for="node in pattern.tree", -->
      <!--   ) -->

          <!-- .b&#45;pattern__node( -->
          <!--   v&#45;if="node.semantic_type === 'clause'" -->
          <!--   is="BClauseNode" -->
          <!-- ) -->
          <!--  -->
          <!-- .b&#45;pattern__node( -->
          <!--   v&#45;if="node.semantic_type === 'sentence_role'" -->
          <!--   is="BSentenceRoleNode" -->
          <!-- ) -->
          <!--  -->
          <!-- .b&#45;pattern__node( -->
          <!--   v&#45;if="node.semantic_type === 'sentence_el'" -->
          <!--   is="BSentenceElNode" -->
          <!-- ) -->


</template>

<script>
    import BClauseNode from '../components/BClauseNode'
    import BSentenceRoleNode from '../components/BSentenceRoleNode'
    import BSentenceElNode from '../components/BSentenceElNode'
    import BTree from '../components/BTree'
    
    export default {
      name: 'BPattern',
      components: {
        BClauseNode,
        BSentenceRoleNode,
        BSentenceElNode,
        BTree
      },
    
      props: {
        pattern: {
          type: Object
        }
      }
    }
</script>
