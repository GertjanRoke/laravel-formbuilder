<?php

namespace GertjanRoke\Formbuilder\Models;

use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    /**
     * @return array
     */
    public static function types()
    {
        return [
            1 => 'Normaal formulier',
            2 => 'Widget formulier',
        ];
    }
}
