<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get(
    '/back',
    [
        'as' => 'trang-chu-back',
        'uses' => 'masterController@mainPageBack',
    ]
);
Route::get(
    '/hoc-tap',
    [
        'as' => 'hoc-tap',
        'uses' => 'masterController@learnPage',
    ]
);

Route::get(
    '/',
    [
        'as' => 'trang-chu-out',
        'uses' => 'masterController@mainPageFront',
    ]
);
