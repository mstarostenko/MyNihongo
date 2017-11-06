<template lang="pug">
  v-app.b-app(
    light
  )
    v-navigation-drawer.b-nav(
      dark
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    )

      v-list.b-nav-list(
        dark
      )
        v-list-group.b-nav-list__group(
          v-for="item in items"
          :value="item.active"
          v-bind:key="item.title"
        )
          v-list-tile.b-nav-list__item(
            slot="item"
            @click=""
          )
            v-list-tile-action
              v-icon 
                | {{ item.action }}

            v-list-tile-content
              v-list-tile-title.title
                | {{ item.title }}

            v-list-tile-action
              v-icon
                | keyboard_arrow_down

          v-list-tile.b-nav-list__subitem(
            router
            v-for="subItem in item.items"
            :key="subItem.title"
            active-class="b__active"
            :to="subItem.to"
            exact
          )
            v-list-tile-content.b-nav-list__subitem-content
              v-list-tile-title.b-nav-list__subitem-title
                | {{ subItem.title }}

            v-list-tile-action
              v-icon.white--text
                | {{ subItem.action }}

    v-toolbar(
      dark
      fixed
      app
      :clipped-left="clipped"
    )

      v-toolbar-side-icon(
        dark
        @click="drawer = !drawer"
      )

      v-btn(
        dark
        icon
        @click.stop="miniVariant = !miniVariant"
      )
        v-icon(
          dark
          v-html="miniVariant ? 'chevron_right' : 'chevron_left'"
        )

      v-btn(
        dark
        icon
        @click.stop="clipped = !clipped"
      )
        v-icon
          | web

      v-btn(
        dark
        icon
        @click.stop="fixed = !fixed"
      )
        v-icon(
          dark
        )
          | remove

      v-toolbar-title(
        dark
        v-text="title"
      )


    main
      v-content
        v-container
          nuxt

    <!-- v&#45;navigation&#45;drawer( -->
    <!--   temporary -->
    <!--   :right="right" -->
    <!--   v&#45;model="rightDrawer" -->
    <!--   app -->
    <!-- ) -->
    <!--  -->
    <!--   v&#45;list -->
    <!--     v&#45;list&#45;tile( -->
    <!--       @click.native="right = !right" -->
    <!--     ) -->
    <!--       v&#45;list&#45;tile&#45;action -->
    <!--         v&#45;icon( -->
    <!--           light -->
    <!--         ) compare_arrows -->
    <!--  -->
    <!--       v&#45;list&#45;tile&#45;title -->
    <!--         | Switch drawer (click me) -->

    v-footer(
      :fixed="fixed"
      app
    )
      span &copy; 2017

</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      // items2: [
      //   {
      //     icon: 'apps',
      //     title: '宿題',
      //     to: '/'
      //   },
      //   { icon:
      //     'bubble_chart',
      //     title: 'Inspire',
      //     to: '/inspire'
      //   }
      // ],
      items: [
        {
          action: 'store_mall_directory',
          title: '宿題',
          items: [
            {
              title: '11月 5日',
              to: '/patterns'
            },
            {
              title: '11月 5日',
              to: '/'
            }
          ]
        },

        {
          action: 'school',
          title: 'Education',
          active: false,
          items: [
            {
              title: 'Patterns',
              action: 'aspect_ratio',
              to: 'patterns'
            }
          ]
        }
        // {
        //   action: 'directions_run',
        //   title: 'Family',
        //   items: [
        //     { title: 'List Item' }
        //   ]
        // },
        // {
        //   action: 'healing',
        //   title: 'Health',
        //   items: [
        //     { title: 'List Item' }
        //   ]
        // },
        // {
        //   action: 'content_cut',
        //   title: 'Office',
        //   items: [
        //     { title: 'List Item' }
        //   ]
        // },
        // {
        //   action: 'local_offer',
        //   title: 'Promotions',
        //   items: [
        //     { title: 'List Item' }
        //   ]
        // }
      ],
      miniVariant: false,
      right: true,
      // rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>


<style lang="scss">

.b-nav-list__subitem {

  .list__tile--link.b__active {
    .b-nav-list__subitem-title {
      background-color: green !important;
    }
  }
}

</style>
