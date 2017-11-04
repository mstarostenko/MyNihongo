<template lang="pug">
  section.container
    img.logo(
      src="~assets/img/logo.png"
      alt="Nuxt.js Logo"
    )
    h1.title
      | 私たちの日本語
    nuxt-link.button(
      to="/shukudai"
    )
      | 宿題

</template>

<style lang="scss" scoped>
.title
{
  margin: 50px 0;
}
</style>
