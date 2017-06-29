<?php

namespace GertjanRoke\Formbuilder;

use Illuminate\Support\ServiceProvider;

class FormbuilderServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                $this->packagePath(__DIR__ . '/../config/laravel-formbuilder.php') => config_path('laravel-formbuilder.php'),
            ], 'lf-config');

            /*
            $this->loadViewsFrom(__DIR__.'/../resources/views', 'skeleton');

            $this->publishes([
                __DIR__.'/../resources/views' => base_path('resources/views/vendor/skeleton'),
            ], 'views');
            */
        }
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/laravel-formbuilder.php', 'lf-config');
    }
}
