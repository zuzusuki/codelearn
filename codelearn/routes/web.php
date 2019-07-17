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

<<<<<<< HEAD
Route::get('/', function () {
    return view('lading/index');
});
Route::Get('/landing',function(){
    return view('landing');
});
=======
Route::get(
    '/',
    [
        'as' => 'trang-chu',
        'uses' => 'masterController@mainPage',
    ]
);
Route::get(
    '/hoc-tap',
    [
        'as' => 'hoc-tap',
        'uses' => 'masterController@learnPage',
    ]
);
>>>>>>> 3565674a354e2d70624473b2e3ae4512c4bd4771
