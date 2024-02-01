<?php

use App\Http\Controllers\AcademicInfoController;
use App\Http\Controllers\API\azizAuthController;
use App\Http\Controllers\BloodGroupController;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\DegreeController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\LevelOfEducationController;
use App\Http\Controllers\NomineeController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\ScaleController;
use App\Http\Controllers\StoreController;
use App\Models\level_of_education;
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
Route::resource('/blood', BloodGroupController::class);
Route::resource('/religion', ReligionController::class);
Route::resource('/company', CompanyController::class);
Route::resource('/phone', CountryController::class);
Route::resource('/employee', EmployeeController::class);
Route::resource('/nominee', NomineeController::class);
Route::resource('/education', LevelOfEducationController::class);
Route::resource('/board', BoardController::class);
Route::resource('/degree', DegreeController::class);
Route::resource('/scale', ScaleController::class);
Route::resource('/academic', AcademicInfoController::class);


