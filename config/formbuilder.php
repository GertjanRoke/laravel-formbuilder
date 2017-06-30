<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Prefix
    |--------------------------------------------------------------------------
    |
    | This option controls the prefix for the routes
    |
    | Examples: "cms.", "auth."
    |
    */

    'prefix' => [
        'api' => 'api/formbuilder',
        'web' => '',
    ],

    /*
    |--------------------------------------------------------------------------
    | Middleware
    |--------------------------------------------------------------------------
    |
    | This option controls the middleware for the routes
    | where you can manage the forms for your system
    |
    | Supported: "auth" or ["web", "auth"]
    |
    */

    'middleware' => [
        'api' => 'api',
        'web' => 'web'
    ],

    /*
    |--------------------------------------------------------------------------
    | Available fields
    |--------------------------------------------------------------------------
    |
    | This is a list of all available fields
    |
    */

    'fields' => [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
        'textarea',
        'select',
        'option',
        'optgroup'
    ],
];
