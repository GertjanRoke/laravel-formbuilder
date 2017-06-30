export default {
    data() {
        return {
            newField: {
                type: 0,
                name: '',
                label: '',
                placeholder: '',
                classes: '',
                style_id: '',
                attributes: '',
            },
        }
    },

    methods: {
        addGroup() {

        },

        addField(groupIndex) {
            if (typeof groupIndex == "undefined") {
                this.$parent.form.fields.push(_.cloneDeep(this.newField));
            } else {
                console.log(groupIndex);
                console.log('Need to look for a nice way to fix this');
            }

            this.$nextTick(() => {
                $('select').material_select();
            });
        },

        generateGroup(group) {

        },

        generateField(field) {

        }
    }
}
