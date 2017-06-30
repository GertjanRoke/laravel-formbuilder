<?php

namespace GertjanRoke\Formbuilder;

use Illuminate\Support\ServiceProvider;
use Route;

class FormbuilderServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/formbuilder.php' => config_path('formbuilder.php'),
            ], 'config');

            $this->publishes([
                __DIR__ . '/../resources/assets/dir' => public_path('vendor/formbuilder'),
            ], 'assets');

            $this->publishes([
                __DIR__ . '/../database' => base_path('database'),
            ], 'database');
        }

        $this->loadRoutes();

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'Formbuilder');
    }

    /**
     * Load the application routes.
     */
    protected function loadRoutes()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/formbuilder.php', 'formbuilder');
    }

    /**
     * Register the api routes
     */
    public function mapApiRoutes()
    {
        Route::middleware(config('formbuilder.middleware.api'))
             ->prefix(config('formbuilder.prefix.api'))
             ->namespace('GertjanRoke\Formbuilder\Http\Controllers\Api')
             ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Register the web routes
     */
    public function mapWebRoutes()
    {
        Route::middleware(config('formbuilder.middleware.web'))
             ->prefix(config('formbuilder.prefix.prefix'))
             ->namespace('GertjanRoke\Formbuilder\Http\Controllers')
             ->group(__DIR__ . '/../routes/web.php');
    }
}
