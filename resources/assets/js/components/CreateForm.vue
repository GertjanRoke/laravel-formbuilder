<template>
    <div>
        <form @submit.prevent="submit">
            <div class="input-field">
                <label for="name">Naam</label>
                <input type="text" id="name" v-model="$parent.form.name">
            </div>
            <div class="input-field">
                <select v-model="$parent.form.type" class="browser-default">
                    <option value="" disabled selected>Selecteer het gewenste type</option>
                    <option v-for="type, key in $parent.formTypes" :value="key" v-text="type"></option>
                </select>
                <label class="active">Formulier type</label>
            </div>
            <div class="input-field">
                <a class="waves-effect waves-light btn-floating material-icons" @click.prevent="add('group')">
                    <i class="material-icons">add_box</i>
                </a>
                <a class="waves-effect waves-light btn-floating" @click.prevent="add('field')">
                    <i class="material-icons">add_circle</i>
                </a>
            </div>
            <ul class="collapsible" data-collapsible="accordion">
                <li v-for="field, index in $parent.form.fields" :key="index">
                    <div class="collapsible-header">
                        <i class="material-icons">title</i>{{ field.label }}
                    </div>
                    <div class="collapsible-body">
                        <div class="input-field">
                            <select v-model="field.type" :id="'makingType-' + index" class="browser-default">
                                <option value="" disabled selected>Selecteer het gewenste type</option>
                                <option v-for="type, key in $parent.fieldTypes" :value="key" v-text="type"></option>
                            </select>
                            <label :for="'makingType-' + index" class="active">Type</label>
                        </div>
                        <div class="input-field">
                            <label :for="'makingLabel-' + index" class="active">Label</label>
                            <input type="text" :id="'makingLabel-' + index" v-model="field.label">
                        </div>
                    </div>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    import Generator from '../mixins/Generator';

    export default {
        props: ['apiPrefix'],

        mixins: [Generator],

        methods: {
            submit() {
                console.log('submitting to the server');
            },

            add(option, groupIndex) {
                if (option == 'group') {
                    this.addGroup();
                } else {
                    this.addField(groupIndex);
                }
            }
        }
    }
</script>
