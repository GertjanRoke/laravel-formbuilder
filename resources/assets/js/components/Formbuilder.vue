<template>
    <div>
        <h1>Formulier maken</h1>
        <div class="row">
            <div class="col m6">
                <ul class="collection">
                    <li class="collection-item valign-wrapper">
                        <i class="material-icons">add_box</i> voegt een nieuwe groep toe
                    </li>
                    <li class="collection-item valign-wrapper">
                        <i class="material-icons">add_circle</i> voegt een nieuw veld toe
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col m6">
                <div class="card">
                    <div class="card-content">
                        <create-form :api-prefix="apiPrefix"></create-form>
                    </div>
                </div>
            </div>
            <div class="col m6">
                <div class="card">
                    <div class="card-content">
                        <preview-form></preview-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['apiPrefix'],

        data() {
            return {
                form: {
                    name: '',
                    groups: [],
                    fields: []
                },
                fieldTypes: this.getConfig()
            }
        },

        methods: {
            getConfig() {
                const pathArray = location.href.split('/');
                let protocol = pathArray[0];
                let host = pathArray[2];
                let url = protocol + '//' + host + '/' + this.apiPrefix + '/config';

                axios.get(url).then(({data}) => {
                    this.fieldTypes = data;
                }).catch((error) => {
                    console.error(error);
                    this.fieldTypes = [];
                });
            },
        }
    }
</script>
