<template>
    <div>
        <h1>{{ $parent.form.name }}</h1>
    </div>
</template>

<script>
    let generator = require('../mixins/Generator');

    export default {
        mixins: [generator],
    }
</script>
