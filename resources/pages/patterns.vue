<template lang="pug">
  <!-- v&#45;layout( -->
  <!--   column -->
  <!--   justify&#45;center -->
  <!--   align&#45;center -->
  <!-- ) -->
  <!--   v&#45;flex( -->
  <!--     xs12 sm8 md6 -->
  <!--   ) -->
  <!--     .text&#45;xs&#45;center -->
  <!--       img( -->
  <!--        src="/v.png" -->
  <!--        alt="Vuetify.js" -->
  <!--        class="mb&#45;5" -->
  <!--       ) -->
  <!--  -->
  <!--     v&#45;card -->
  <!--       v&#45;card&#45;title.headline Patterns -->
  <!--       v&#45;card&#45;text -->
  <!--         <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p> -->
  <!--         <p>For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.</p> -->
  <!--         <p>If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.</p> -->
  <!--         <p>Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p> -->
  <!--         <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p> -->
  <!--         <div class="text&#45;xs&#45;right"> -->
  <!--           <em><small>&#38;mdash; John Leider</small></em> -->
  <!--         </div> -->
  <!--         <hr class="my&#45;3"> -->
  <!--         <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a> -->
  <!--         <br> -->
  <!--         <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a> -->
  <!--  -->
  <!--       v&#45;card&#45;actions -->
  <!--         v&#45;spacer -->
  <!--         v&#45;btn( -->
  <!--           color="primary" -->
  <!--           flat -->
  <!--           nuxt -->
  <!--           to="/inspire" -->
  <!--         ) Continue -->
  <!--  -->

    main
      v-container(
        style="min-height: 0;"
        grid-list-xl
      )
        v-layout(
          row
          wrap
        )
          v-flex(
            xs12 
          )
            v-card(
             color="grey lighten-3"
            )
              v-card-title(
                primary-title
              )
                | {{ cardCollections }}
                
                article.b-patterns-container__b-pcard(
                  v-for="collection in cardCollections"
                  is="BPatternCard",
                  :collection="collection"
                )
                  <!-- section.b&#45;pcard__scheme.b&#45;pcard&#45;scheme -->
                  <!--   | 1 scheme -->
                  <!--   .b&#45;pcard&#45;scheme__sample.b&#45;pcard&#45;scheme&#45;sample -->
                  <!--     span.b&#45;pcard&#45;scheme&#45;sample__bit._clause&#45;prelude ... [=== -->
                  <!--  -->
                  <!--     div.b&#45;pcard&#45;scheme&#45;sample__sentence&#45;el._subject -->
                  <!--       span.b&#45;pcard&#45;scheme&#45;sample__bit._verb verb -->
                  <!--       span.b&#45;pcard&#45;scheme&#45;sample__bit._substantivator koto -->
                  <!--  -->
                  <!--     span.b&#45;pcard&#45;scheme&#45;sample__bit._particle が -->
                  <!--  -->
                  <!--     div.b&#45;pcard&#45;scheme&#45;sample__sentence&#45;el._predicate -->
                  <!--       span.b&#45;pcard&#45;scheme&#45;sample__bit._verb [predicate] -->
                  <!--     span.b&#45;pcard&#45;scheme&#45;sample__bit._clause&#45;coda  ===] ... -->
                  <!--  -->
                  <!--   .b&#45;pcard&#45;scheme__example -->
                  <!--     |私は日本語で話すとができる -->
                  <!--  -->
                  <!--   .scheme -->
                  <!--     | {{ pattern1 }} -->
                  <!--     hr -->
                  <!--     | {{ pattern1.tree }} -->
                  <!--     hr -->


                      <!-- div( -->
                      <!--   v&#45;for="node in pattern1.tree" -->
                      <!-- ) -->
                      <!--   div( -->
                      <!--     v&#45;if="node.leaves" -->
                      <!--     v&#45;for="leafNode in node.leaves" -->
                      <!--   ) -->
                      <!--     | {{ leafNode.value }} -->
                      <!--  -->
                      <!--   div( -->
                      <!--     v&#45;if="!node.leaves" -->
                      <!--   ) -->
                      <!--     | {{ node.value }} -->




                <!-- div.headline -->
                <!--   | Unlimited music now -->
                <!-- div -->
                <!--   | Listen to your favorite artists and albums whenenver and wherever, online and offline.</div> -->

              v-card-actions
                v-btn(
                  flat
                  dark
                ) Listen now

          v-flex(
           xs12
          )
            v-card(
              color="cyan darken-2"
            )
              v-container(
                fluid
                grid-list-lg
              )
                v-layout(
                  row
                )
                  v-flex(
                    xs7
                  )
                    div
                      div(
                         class="headline" 
                      ) Supermodel
                      div
                        | Foster the People

                  v-flex(
                    xs5
                  )
                    v-card-media(
                      src="/static/doc-images/cards/foster.jpg"
                      height="125px"
                      contain
                    )
    </main>

</template>

<script>

import BPatternCard from '../components/BPatternCard'

export default {
  components: {
    BPatternCard
  },

  computed: {
    list () {
      return this.$store.state.patterns.list
    },

    cardCollections () {
      const result = [
        [
          this.list[0].pattern,
          this.list[0].pattern
        ]
      ]

      return result
    }
  }
}
</script>
