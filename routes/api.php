<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/productos','App\Http\Controllers\ProductoController@index');
Route::post('/productos','App\Http\Controllers\ProductoController@store');
Route::put('/productos/{id}','App\Http\Controllers\ProductoController@update');
Route::get('/conteo','App\Http\Controllers\ProductoController@conteo');
Route::get('/bodegas','App\Http\Controllers\ProductoController@bodegas');
Route::get('/filter/{buscador}','App\Http\Controllers\ProductoController@filter');

