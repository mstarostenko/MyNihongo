<template lang="pug">
    article.pattern-pcard
        header.pattern-pcard
            .pattern-pcard__title.headline.red--text PCARD

    article.pattern-card__pattern(
        v-for="pattern in collection"
        :pattern="pattern"
        is="Pattern"
    )
</template>

<script>
import Pattern from '~/components/Pattern';

export default {
    name: 'PatternCard',
    components: {
        Pattern,
    },

    props: {
        collection: {
            type: Array,
            required: true,
        },
    },
};
</script>
