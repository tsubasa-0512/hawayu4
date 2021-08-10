<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Operator;
use App\Models\Room;
use App\Models\Message;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Http\Response;


class ChatFunctionTest extends TestCase
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

        // ルーム自動作成
        $this->room = factory(Room::class)->create();
    }

    // ユーザーがルームを作成・自分のルームを取得
    public function testMakeRoom() :void{
        // ユーザー認証
        $this->actingAs($this->user, 'api');

        // ユーザーがルームを作成
        $response = $this->postJson("/api/create-room",
            [
                'user_id' => $this->user->id,
                'company_id' => $this->user->company_id,
                'status_id' => 1
            ]
        );
        
        // 作成ルーム表示
        $response->dump();
        $response->assertStatus(200);
        
        // 作成ルームを取得
        $response = $this->post('/rooms',['role' => 'user']);
        // 作成ルーム表示
        $response->dump();
        $response->assertStatus(200);
    }

    // ユーザーがメッセージを送信
    public function testSendMessage() :void {
        // ユーザー認証
        $this->actingAs($this->user, 'api');

        // メッセージ作成
        $response = $this->postJson("/messages",
            [
                'message' => 'テスト by ユーザー',
                'id' => $this->user->id,
                'room_id' => $this->room->id,
                'role' => 'user'
            ]
        );

        // 送信メッセージ表示
        $response->dump();
        $response->assertStatus(Response::HTTP_CREATED);
    }
    
    // 保健師が未対応ルーム情報取得
    public function testGetRoom() :void {
        // 保健師認証
        $this->actingAs($this->operator, 'operator_api');
        
        // 未対応ルームを取得
        $response = $this->post('/rooms',['role' => 'operator']);
        // 未対応ルーム表示
        $response->dump();
        $response->assertStatus(200);
    }
    
    // 保健師がルームに参加
    public function testJoinRoom() :void {
        // 保健師認証
        $this->actingAs($this->operator, 'operator_api');    
        
        // 未対応ルームへの参加
        $response = $this->postJson('/api/join-room',
            [
                'room_id' =>  $this->room->id
            ]
        );

         // 参加ルーム表示
         $response->dump();
         $response->assertStatus(200);
    }

    // 保健師がメッセージ送信
    public function testOpeSendMessage() :void {
        // 保健師認証
        $this->actingAs($this->operator, 'operator_api');    

        // メッセージ作成
        $response = $this->postJson("/messages",
            [
                'message' => 'テスト by オペレーター',
                'id' => $this->operator->id,
                'room_id' => $this->room->id,
                'role' => 'operator'
            ]
        );

        // 送信メッセージ表示
        $response->dump();
        $response->assertStatus(Response::HTTP_CREATED);
    }
}