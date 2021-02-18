<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
    	$searchTerm = $request->get('searchTerm');
        $sortDirection = $request->get('sortDirection');

    	$users = User::query()
    		->when(
    			$searchTerm,
    			fn ($query) => $query->search('name', $searchTerm)
    		)
            ->when(
                $sortDirection,
                fn ($query) => $query->orderBy('name', $sortDirection)
            )
            ->paginate(10);

        if ($searchTerm) {
            $users->appends(['searchTerm' => $searchTerm]);
        }

        return inertia('Users/Index',[
            'users' => UserResource::collection($users),
        ]);
    }

    public function show(User $user)
    {
    	return inertia('Users/Show', [
    	    'user' => new UserResource($user),
    	]);
    }
}