const state = () => ({
  list: [
    // pattern 1
    {
      patternCollectionId: 1,

      pattern: {
        tree: [
          {
            semantic_type: 'clause',

            leaves: [
              {
                semantic_type: 'sentence_role',
                value: 'predicate',
                leaves: [
                  {
                    semantic_type: 'sentence_el',
                    value: 'verb'
                  },
                  {
                    semantic_type: 'sentence_el',
                    value: 'substantivator'
                  }
                ]
              },

              // 2
              {
                semantic_type: 'sentence_el',
                value: 'が'
              }
            ],

            value: {
              begin: 'notExact',
              end: 'notExact'
            }
          }
        ],

        meaning: {
        },

        examples: [
        ]
      }
    }
  ]
})

const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export default { state, mutations }
