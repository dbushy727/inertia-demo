<?php

namespace Database\Seeders;

use App\Models\Quote;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	collect(config('simpsons'))->each(function ($simpson) {
    		$user = User::firstOrCreate([
    			'name' => $simpson['name'],
    			'image' => $simpson['image'],
    		]);

    		Quote::create([
    			'user_id' => $user->id,
    			'quote' => $simpson['quote'],
    		]);
    	});
    }
}
