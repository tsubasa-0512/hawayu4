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

// ユーザー
Route::namespace('User')->prefix('user')->name('user.')->group(function () {

    // ログイン認証関連
    Auth::routes([
        'register' => true,
        'reset'    => false,
        'verify'   => false
    ]);
});
// ユーザーログアウト
Route::post('/user/logout', 'User\Auth\LoginController@logout');

// 保健師
Route::namespace('Operator')->prefix('operator')->name('operator.')->group(function () {
    
    // ログイン認証関連
    Auth::routes([
        'register' => true,
        'reset'    => false,
        'verify'   => false
    ]);
});

// 保健師ログアウト
Route::post('/operator/logout', 'Operator\Auth\LoginController@logout');

Route::get('{any}', function () {
    return view('app');
})->where('any','.*');