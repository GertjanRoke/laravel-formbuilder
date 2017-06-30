<?php

namespace GertjanRoke\Formbuilder;
use Illuminate\Support\Facades\Facade;
/**
 * @see \GertjanRoke\Formbuilder\SkeletonClass
 */
class FormbuilderFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'skeleton';
    }
}
