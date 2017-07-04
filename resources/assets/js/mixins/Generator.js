export default {
    data() {
        return {
            newField: {
                type: 0,
                name: '',
                label: 'Nieuw veld',
                default: '',
                placeholder: '',
                classes: '',
                style_id: '',
                attributes: '',
                group_id: '',
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
        },

        generateGroup(group) {
            return `<p>need to be done</p>`;
        },

        generateField(field, key) {
            if (field.group_id !== '') {
                return this.generateGroup(this.$parent.form.groups[field.group_id]);
            }
            let html = '';

            switch (field.type) {
                case 0:
                    html = this.button(field);
                    break;
                case 1:
                    html = this.checkbox(field, key);
                    break;
                case 2:
                    html = this.color(field, key);
                    break;
                case 3:
                    html = this.date(field, key);
                    break;
                case 4:
                    html = this.datetimeLocal(field, key);
                    break;
                case 5:
                    html = this.email(field, key);
                    break;
                case 6:
                    html = this.file(field, key);
                    break;
                case 7:
                    html = this.hidden(field, key);
                    break;
                case 8:
                    html = this.image(field, key);
                    break;
                case 9:
                    html = this.month(field, key);
                    break;
                case 10:
                    html = this.number(field, key);
                    break;
                case 11:
                    html = this.password(field, key);
                    break;
                case 12:
                    html = this.radio(field, key);
                    break;
                case 13:
                    html = this.range(field, key);
                    break;
                case 14:
                    html = this.reset(field, key);
                    break;
                case 15:
                    html = this.search(field, key);
                    break;
                case 16:
                    html = this.submit(field, key);
                    break;
                default:
                    html = ' new field ';
            }

            return html;
        },
    }
}
