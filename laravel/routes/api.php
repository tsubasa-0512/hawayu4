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


// condition情報関連
Route::group(['middleware' => ['auth:api']], function () {
    // conditon情報を登録
    Route::post('/post-condition','ConditionsController@postCondition');
    // conditon情報を表示
    Route::get('/get-condition','ConditionsController@getConditions');
    // conditon情報を編集
    Route::post('/update-condition','ConditionsController@updateCondition');
});


// room関連
// ユーザーのroom作成
Route::group(['middleware' => ['auth:api']], function () {
    Route::post('/create-room','RoomsController@create');
});

Route::group(['middleware' => ['auth:operator_api']], function () {
    // 未対応ルーム情報取得
    Route::get('/backlog', 'RoomsController@backlog');
    // 保健師のroom参加（room ID）
    Route::post('/join-room','RoomsController@join');
    // 対応中ルーム情報取得
    Route::get('/wip', 'RoomsController@wip');
    ///保健師が対応を完了
    Route::post('/close-room', 'RoomsController@closed');
    //保健師が対応完了を戻す
    Route::post('/rollback-room', 'RoomsController@rollback');
    // 対応済ルーム情報取得
    Route::get('/done', 'RoomsController@done');
});

//hawayu関連
Route::group(['middleware' => ['auth:api']], function () {
    // ユーザーのアンケート用紙作成
    Route::post('/create-inquiry','InquiriesController@createInquiry');
    // ユーザーのアンケート回答・保存
    Route::post('/answer-inquiry','InquiriesController@answerInquiry');
    // ユーザーの過去のアンケート表示
    Route::get('/past-inquiry','InquiriesController@pastInquiry');
});

Route::group(['middleware' => ['api']], function () {
    // ユーザーのアンケート用紙作成
    Route::get('/show-question','InquiriesController@showQuestionList');
});

