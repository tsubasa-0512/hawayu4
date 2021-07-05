<?php

use Illuminate\Http\Request;
use App\Models\User;

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
// ログインユーザの情報取得
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ログイン保健師の情報取得
Route::middleware('auth:operator_api')->get('/operator', function (Request $request) {
    return $request->user();
});


// room関連
// ユーザーのroom作成
Route::group(['middleware' => ['auth:api']], function () {
    Route::post('/create-room','RoomsController@create');
});

Route::group(['middleware' => ['auth:operator_api']], function () {
    // 未対応ルーム情報取得
    Route::get('/backlog', 'RoomsController@backlog');
    // 保健師のroom参加
    Route::post('/join-room','RoomsController@join');
    // 対応中ルーム情報取得
    Route::get('/wip', 'RoomsController@wip');
    ///保健師が対応を完了
    Route::post('/close-room', 'RoomsController@closed');
    //保健師が対応完了を戻す
    Route::post('/rollback-room', 'RoomsController@rollback');
});