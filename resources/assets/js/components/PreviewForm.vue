<template>
    <div>
        <h1>{{ $parent.form.name }}</h1>
        <div v-html="previewHtml"></div>
    </div>
</template>

<script>
    import Generator from '../mixins/Generator';
    import HtmlGenerator from '../mixins/HtmlGenerator';

    export default {
        mixins: [Generator, HtmlGenerator],

        computed: {
            previewHtml() {
                return this.generateForm();
            }
        },

        methods: {
            generateForm() {
                let html = '';
                let fields = this.$parent.form.fields;

                _.each(fields, (field, key) => {
                    html += this.generateField(field, key);
                })

                return html;
            },
        }
    }
</script>
