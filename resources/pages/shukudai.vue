{{{{raw}}}}
<template lang="pug">
  section.container
    h1.title
      | 頑張ってください!

    main.homeworks-page
      img.homeworks-page__logo(
        src="~assets/img/hiroshige-snail.jpg"
        alt="Nuxt.js Logo"
      )
      section.homeworks-list
        article.homeworks-list__item
          .homeworks-item
            header.homeworks-item__header
              time.calendar 
                span 11月 8日

            .homeworks-item__body
              .homeworks-item__monday
                .homeworks-item__monday-marker._audio
                .homeworks-item__monday-text
                  | <a href="https://youtu.be/4X_pS7YGEyY">https://youtu.be/4X_pS7YGEyY</a>
              .homeworks-item__monday
                .homeworks-item__monday-marker._write
                .homeworks-item__monday-text
                  | <b>土曜日</b>の野力試験の宿題
              .homeworks-item__monday._vocabulary
                .homeworks-item__monday-marker._vocabulary
                .homeworks-item__monday-text
                  details
                    summary
                    li 出かける - покидать, уходить
                    li 飾る - украшать, декорировать

        article.homeworks-list__item
          .homeworks-item
            header.homeworks-item__header
              time.calendar 
                span 11月 15日

            .homeworks-item__body
              .homeworks-item__monday
                .homeworks-item__monday-marker._audio
                .homeworks-item__monday-text

              .homeworks-item__monday
                .homeworks-item__monday-marker._write
                .homeworks-item__monday-text

</template>
{{{{/raw}}}}

<style lang="scss" scoped>

.homeworks-page {
  width: 600px;
  margin: 0 auto;
  text-align: left;

  &__logo {
    position: fixed;
    left: 0;
    top: 0;
    opacity: .5;
  }
}

.homeworks-list {
  list-style: none;
  margin-top: 24px;
}

.homeworks-item {
  border-top: 1px solid #f58973;
  margin-bottom: 80px;

  time {
    margin-top: -10px;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    background: #f58973;
  }

  &__body {
    margin-left: 140px;
  }

  &__monday {
    height: 40px;

    &._vocabulary {
      details li {
          padding-left: 20px;
      }
    }
  }

  &__monday-marker {
    display: inline-block;
    margin-right: 10px;
    height: 32px;
    width: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: bottom;

    &._audio {
      background-image: url("~assets/img/hear-no-evil.png");
    }

    &._write {
      background-image: url("~assets/img/paper-and-pencil.png");
    }

    &._vocabulary {
      background-image: url("~assets/img/decorative-book.png");
      vertical-align: top;
    }
  }

  &__monday-text {
    display: inline-block;
  }
}






.title
{
  margin-top: 50px;
}

.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}

.button
{
  margin-top: 50px;
}

</style>
