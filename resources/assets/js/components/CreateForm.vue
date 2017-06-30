<template>
    <div>
        <form @submit.prevent="submit">
            <div class="input-field">
                <label for="name">Naam</label>
                <input type="text" id="name" name="name" v-model="$parent.form.name">
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
                        <i class="material-icons">title</i>{{ field.name }}
                    </div>
                    <div class="collapsible-body">
                        <div class="input-field">
                            <select v-model="field.type" class="select-dropdown">
                                <option value="" disabled selected>Selecteer het gewenste type</option>
                                <option v-for="type, key in $parent.fieldTypes" :value="key" v-text="type"></option>
                            </select>
                            <label>Type</label>
                        </div>
                        <div class="input-field">
                            <label>Naam</label>
                            <input type="text" v-model="field.name">
                        </div>
                    </div>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
    import generator from '../mixins/Generator';

    export default {
        props: ['apiPrefix'],

        mixins: [generator],

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
