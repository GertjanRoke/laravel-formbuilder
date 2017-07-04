<?php

namespace GertjanRoke\Formbuilder\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use GertjanRoke\Formbuilder\Models\Form;

class FormbuilderController extends Controller
{
    /**
     * @return array
     */
    public function config()
    {
        return config('formbuilder.fields');
    }

    /**
     * @return array
     */
    public function formTypes()
    {
        return Form::types();
    }
}
