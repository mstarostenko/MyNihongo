const state = () => ({
  list: [
    // pattern 1
    {
      patternCollectionId: 1,

      pattern: {
        tree: {
          value: {
            unitName: 'root',
            unitClass: 'root'
          },

          // CLAUSE
          nodes: [
            {
              value: {
                unitName: 'clause',
                unitClass: 'clause',
                unitProps: {
                  begin: 'notExact',
                  end: 'notExact'
                }
              },

              // CLAUSE NODES
              nodes: [
                // подлежащее 話すこと
                {
                  value: {
                    unitName: 'subject',
                    unitClass: 'sentence_role',
                    unitProps: {}
                  },
                  nodes: [
                    {
                    // глагол 話す
                      value: {
                        unitName: 'verb',
                        unitClass: 'sentence_el',
                        unitProps: {
                          isRuleAccent: false
                        }
                      }
                    },
                    // субстантиватор こと
                    {
                      value: {
                        unitName: 'substantivator',
                        unitClass: 'sentence_el',
                        unitProps: {
                          isRuleAccent: false
                        }
                      }
                    }
                  ]
                },

                // частица ga
                {
                  value: {
                    unitName: 'particle',
                    unitClass: 'sentence_el',
                    unitProps: {
                      isRuleAccent: true
                    }
                  }
                },

                // сказуемое
                {
                  value: {
                    unitName: 'predicate',
                    unitClass: 'sentence_role',
                    unitProps: {}
                  },
                  nodes: [
                    // глагол
                    {
                      value: {
                        unitName: 'verb',
                        unitClass: 'sentence_el',
                        unitProps: {
                          isRuleAccent: true
                        }
                      }
                    }
                  ]
                }
              ]
            },

            {
              value: {
                unitName: 'clause',
                unitClass: 'clause',
                unitProps: {
                  begin: 'notExact',
                  end: 'notExact'
                }
              },

              // CLAUSE NODES
              nodes: [
                // подлежащее 話すこと
                {
                  value: {
                    unitName: 'subject',
                    unitClass: 'sentence_role',
                    unitProps: {}
                  },
                  nodes: [
                    {
                    // глагол 話す
                      value: {
                        unitName: 'verb',
                        unitClass: 'sentence_el',
                        unitProps: {
                          isRuleAccent: false
                        }
                      }
                    },
                    // субстантиватор こと
                    {
                      value: {
                        unitName: 'substantivator',
                        unitClass: 'sentence_el',
                        unitProps: {
                          isRuleAccent: false
                        }
                      }
                    }
                  ]
                },

                // частица ga
                {
                  value: {
                    unitName: 'particle',
                    unitClass: 'sentence_el',
                    unitProps: {
                      isRuleAccent: true
                    }
                  }
                },

                // сказуемое
                {
                  value: {
                    unitName: 'predicate',
                    unitClass: 'sentence_role',
                    unitProps: {}
                  },
                  nodes: [
                    // глагол
                    {
                      value: {
                        unitName: 'verb',
                        unitClass: 'sentence_el',
                        unitProps: {
                          isRuleAccent: true
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },

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
