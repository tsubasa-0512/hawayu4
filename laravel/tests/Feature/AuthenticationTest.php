<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Operator;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        
        $this->seed();
        // テストユーザ作成
        $this->user = factory(User::class)->create();
        // テストオペレーター作成
        $this->operator = factory(Operator::class)->create();
    }

    // ユーザーログイン認証＋ログインユーザー情報取得
    public function testUserLogin() :void {
        // ユーザー認証
        $this->actingAs($this->user, 'api');

        //ログインユーザの情報取得→正しいレスポンスが返り、ユーザ名が取得できることを確認
        $response = $this->getJson("/api/user")
        ->assertStatus(200)
        ->assertJson(['name' => $this->user->name]);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->user);
    }

    // ユーザーログアウト
    public function testUserLogout() :void {
        // 認証済ユーザー指定
        $response = $this->actingAs($this->user);
        
        // ログアウトページへリクエストを送信し、レスポンスで、HTTPステータスコードが正常であることを確認
        $response = $this->post('user/logout');

        $response = $this->get('user/login');
        $response->assertStatus(200);

        // ユーザーが認証されていないことを確認
        $this->assertGuest();
    }

    // 保健師ログイン認証＋ログイン保健師情報取得
    public function testOperatorLogin() :void {
        // 保健師認証
        $this->actingAs($this->operator, 'operator_api');

        //ログインユーザの情報取得→正しいレスポンスが返り、ユーザ名が取得できることを確認
        $response = $this->getJson("/api/operator")
        ->assertStatus(200)
        ->assertJson(['name' => $this->operator->name]);

        // 指定したユーザーが認証されていることを確認
        $this->assertAuthenticatedAs($this->operator);
    }

    // 保健師ログアウト
    public function testOperatorLogout() :void {
        // 認証済ユーザー指定
        $response = $this->actingAs($this->operator);
        
        // ログアウトページへリクエストを送信し、レスポンスで、HTTPステータスコードが正常であることを確認
        $response = $this->post('operator/logout');

        $response = $this->get('operator/login');
        $response->assertStatus(200);
    }
}
