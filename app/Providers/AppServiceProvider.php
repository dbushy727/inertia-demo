<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        JsonResource::withoutWrapping();

        Builder::macro('search', function ($column, string $searchTerm) {
            if (is_array($column)) {
                return array_reduce($column, function ($carry, $col) use ($searchTerm) {
                    return $carry
                        ? $carry->orWhere($col, 'LIKE', "%{$searchTerm}%")
                        : $this->where($col, 'LIKE', "%{$searchTerm}%");
                }, null);
            }

            return $this->where($column, 'LIKE', "%{$searchTerm}%");
        });
    }
}
