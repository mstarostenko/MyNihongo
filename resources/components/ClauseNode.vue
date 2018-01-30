<template lang="pug">
    .b-clause.pink.lighten-3
        slot
</template>

<script>
export default {
    name: 'ClauseNode',
    props: {
        value: {
            type: Object,
        },
    },
};
</script>
