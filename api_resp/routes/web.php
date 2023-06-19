<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/email/verify/{id}/{hash}', 'App\Http\Controllers\Api\VerificationController@verify')
->name('verification.verify');

Route::get('/email/verify', function () {
    return response()->json(['message' => 'Please verify your email'], 403);
})->name('verification.notice');