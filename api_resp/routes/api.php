<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/getUsers',function(){
    return DB::select('select * from users');
});

Route::post('/register', [UserController::class,'store'])->name("user.store");

Route::get('/email/verify/{id}/{hash}', 'App\Http\Controllers\Api\VerificationController@verify')
->name('verification.verify');

Route::get('/email/verify', function () {
    return response()->json(['message' => 'Please verify your email'], 403);
})->name('verification.notice');