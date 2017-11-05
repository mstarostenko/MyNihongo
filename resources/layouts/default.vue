<template lang="pug">
  v-app(
    dark
  )
    v-navigation-drawer(
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    )

      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        )
          v-list-tile-action
            v-icon(
               v-html="item.icon"
            )

          v-list-tile-content
            v-list-tile-title(
              v-text="item.title"
            )

  <!--   <v&#45;toolbar fixed app :clipped&#45;left="clipped"> -->
  <!--     <v&#45;toolbar&#45;side&#45;icon @click="drawer = !drawer"></v&#45;toolbar&#45;side&#45;icon> -->
  <!--     <v&#45;btn  -->
  <!--       icon -->
  <!--       @click.stop="miniVariant = !miniVariant" -->
  <!--     > -->
  <!--       <v&#45;icon v&#45;html="miniVariant ? 'chevron_right' : 'chevron_left'"></v&#45;icon> -->
  <!--     </v&#45;btn> -->
  <!--     <v&#45;btn -->
  <!--       icon -->
  <!--       @click.stop="clipped = !clipped" -->
  <!--     > -->
  <!--       <v&#45;icon>web</v&#45;icon> -->
  <!--     </v&#45;btn> -->
  <!--     <v&#45;btn -->
  <!--       icon -->
  <!--       @click.stop="fixed = !fixed" -->
  <!--     > -->
  <!--       <v&#45;icon>remove</v&#45;icon> -->
  <!--     </v&#45;btn> -->
  <!--     <v&#45;toolbar&#45;title v&#45;text="title"></v&#45;toolbar&#45;title> -->
  <!--     <v&#45;spacer></v&#45;spacer> -->
  <!--     <v&#45;btn -->
  <!--       icon -->
  <!--       @click.stop="rightDrawer = !rightDrawer" -->
  <!--     > -->
  <!--       <v&#45;icon>menu</v&#45;icon> -->
  <!--     </v&#45;btn> -->
  <!--   </v&#45;toolbar> -->
  <!--   <main> -->
  <!--     <v&#45;content> -->
  <!--       <v&#45;container> -->
  <!--         <nuxt /> -->
  <!--       </v&#45;container> -->
  <!--     </v&#45;content> -->
  <!--   </main> -->
  <!--   <v&#45;navigation&#45;drawer -->
  <!--     temporary -->
  <!--     :right="right" -->
  <!--     v&#45;model="rightDrawer" -->
  <!--     app -->
  <!--   > -->
  <!--     <v&#45;list> -->
  <!--       <v&#45;list&#45;tile @click.native="right = !right"> -->
  <!--         <v&#45;list&#45;tile&#45;action> -->
  <!--           <v&#45;icon light>compare_arrows</v&#45;icon> -->
  <!--         </v&#45;list&#45;tile&#45;action> -->
  <!--         <v&#45;list&#45;tile&#45;title>Switch drawer (click me)</v&#45;list&#45;tile&#45;title> -->
  <!--       </v&#45;list&#45;tile> -->
  <!--     </v&#45;list> -->
  <!--   </v&#45;navigation&#45;drawer> -->
  <!--   <v&#45;footer :fixed="fixed" app> -->
  <!--     <span>&#38;copy; 2017</span> -->
  <!--   </v&#45;footer> -->
  <!-- </v&#45;app> -->
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
