<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Operator;
use App\Models\Status;
use App\Models\Room;
use Illuminate\Support\Facades\Auth;


class RoomsController extends Controller
{
    //ユーザーがroomを作成
    public function create(Request $request, Room $room) {
        $user = $request->user();

        $room->user_id = $user->id;
        $room->company_id = $user->company_id;
        $room->status_id = 1;
        $room->save();

        return $room;
    }

    //未対応ルーム情報取得
    public function backlog() {
        return Room::where('status_id', 1)->get();
    }
    
    // 保健師がルームに参加
    public function join(Request $request, Room $room) {
        $operator = $request->user();
        
        $room = Room::find($request->room_id);
        $room->operator_id = $operator->id;
        $room->status_id = 2;
        $room->update();
        
        return $room;
    }
    
    //対応中ルーム情報取得
    public function wip(Request $request, Room $room) {
        $operator = $request->user();
        return $room->where('status_id', 2)
        ->where('operator_id', $operator->id)
        ->get();
    }
    
    //保健師が対応を完了
    public function closed(Request $request, Room $room) {
        $operator = $request->user();
        $room = Room::find($request->room_id);
        $room->status_id = 3;
        $room->update();

        $room->completions()->attach($operator->id);

        return $room;
    }
    
    // 保健師が対応完了を戻す
    public function rollback(Request $request, Room $room) {        
        $operator = $request->user();
        $room = Room::find($request->room_id);
        $room->status_id = 2;
        $room->update();
    
        $room->completions()->detach($operator->id);
    
        return $room;        
    }
}
