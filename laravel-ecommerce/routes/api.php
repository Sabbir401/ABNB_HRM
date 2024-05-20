<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\BloodGroupController;

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

Route::post('/api/test', [BloodGroupController::class, 'submitForm']);

Route::controller(AuthController::class)->group(function(){
    Route::post('login', 'login');
    Route::post('register', 'register');
});


Route::resource('/blood', BloodGroupController::class);
Route::resource('/religion', ReligionController::class);
Route::resource('/company', CompanyController::class);
Route::resource('/employee', EmployeeController::class);

