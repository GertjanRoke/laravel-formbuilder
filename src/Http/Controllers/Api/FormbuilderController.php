<?php

namespace GertjanRoke\Formbuilder\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class FormbuilderController extends Controller
{
    public function config()
    {
        return config('formbuilder.fields');
    }
}
