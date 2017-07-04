export default {
    methods: {
        button(field) {
            return `<div class="input-field">
                        <button type="button" class="btn btn-default waves-effect waves-light">
                            ${field.label}
                        </button>
                    </div>`;
        },

        checkbox(field, key) {
            return `<input type="checkbox" name="checkbox-${field.group_id}" id="fieldId-${key}" />
                    <label for="fieldId-${key}">${field.label}</label>`;
        },

        color(field, key) {
            return `<div class="input-field">
                        <input type="color" id="fieldId-${key}" value="${field.label}">
                        <label for="fieldId-${key}" class="active">${field.label}</label>
                    </div>`;
        },

        date(field, key) {
            return `<div class="input-field">
                        <input type="date" id="fieldId-${key}" value="${field.label}">
                        <label for="fieldId-${key}" class="active">${field.label}</label>
                    </div>`;
        },

        datetimeLocal(field, key) {
            return `<div class="input-field">
                        <input type="datetime-local" id="fieldId-${key}" value="${field.label}">
                        <label for="fieldId-${key}" class="active">${field.label}</label>
                    </div>`;
        },

        email(field, key) {
            return `<div class="input-field">
                        <input type="email" id="fieldId-${key}" value="${field.label}">
                        <label for="fieldId-${key}" >${field.label}</label>
                    </div>`;
        },

        file(field, key) {
            return `<div class="file-field input-field">
                        <div class="btn">
                            <span>${field.label}</span>
                            <input type="file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path" type="text">
                        </div>
                    </div>`;
        },

        hidden(field, key) {
            return `<div class="input-field">
                        <input type="hidden" value="${field.default}">
                    </div>`;
        },

        image(field, key) {
            return `<div class="input-field">
                        <input type="image" src="${field.default}" value="${field.label}">
                    </div>`;
        },

        month(field, key) {
            return `<div class="input-field">
                        <input type="month" :id="fieldId-${key}" value="${field.default}">
                        <label for="fieldId-${key}" class="active">${field.label}</label>
                    </div>`;
        },

        number(field, key) {
            return `<div class="input-field">
                        <input type="number" :id="fieldId-${key}" value="${field.default}">
                        <label for="fieldId-${key}">${field.label}</label>
                    </div>`;
        },

        password(field, key) {
            return `<div class="input-field">
                        <input type="password" :id="fieldId-${key}" value="${field.default}">
                        <label for="fieldId-${key}">${field.label}</label>
                    </div>`;
        },

        radio(field, key) {
            return `<input type="radio" class="with-gap" name="radioGroup-${field.group_id}" id="fieldId-${key}" />
                    <label for="fieldId-${key}">${field.label}</label>`;
        },

        range(field, key) {
            return `<p class="range-field">
                        <input type="range" id="fieldId-${key}" ${field.attributes}>
                        <label for="fieldId-${key}" class="active">${field.label}</label>
                    </p>`;
        },

        reset(field, key) {
            return `<div class="input-field">
                        <button type="reset" class="btn btn-default waves-effect waves-light">
                            ${field.label}
                        </button>
                    </div>`;
        },

        search(field, key) {
            return `<div class="input-field">
                        <input type="search" :id="fieldId-${key}" value="${field.default}">
                        <label for="fieldId-${key}">${field.label}</label>
                    </div>`;
        },

        submit(field, key) {
            return `<div class="input-field">
                        <button type="submit" class="btn btn-default waves-effect waves-light">
                            ${field.label}
                        </button>
                    </div>`;
        },
    }
}
