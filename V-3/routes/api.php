<?php

use App\Http\Controllers\API\azizAuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\StoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::controller(azizAuthController::class)->group(function(){
    Route::post('login','login');
    Route::post('register','register');
});

Route::resource('/brand', BrandController::class);

// Route::post('/store', [StoreController::class, 'create']);

// Route::get('/store', [StoreController::class, 'show'])->name('store.index');

// Route::get('/store/{id}/edit', [StoreController::class, 'edit'])->name('store.edit');

// Route::post('/store/{id}/update', [StoreController::class, 'update'])->name('store.update');

Route::resource('/store', StoreController::class);
