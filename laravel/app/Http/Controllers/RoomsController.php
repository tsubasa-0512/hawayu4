<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Operator;
use App\Models\Status;
use App\Models\Room;
use App\Models\Message;
use App\Models\Message_User;
use App\Models\Message_Operator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class RoomsController extends Controller
{
    //ユーザーがroomを作成
    public function create(Request $request, Room $room) {
        $user = $request->user();

        $room->user_id = $user->id;
        $room->company_id = $user->company_id;
        $room->status_id = 1;
        $room->save();

        return json_encode($room);
    }

    // room情報取得
    public function loadRoom(Request $request) {
        // ユーザーの場合は自身の立てたroomを表示し、保健師の場合は未対応のroomを全て表示
        if($request->role === 'user') {
            $user_id = Auth::user()->id;
            return Room::with('latestMessage')
            ->where('user_id', $user_id)
            ->orderBy('updated_at', 'desc')
            ->get();    
        }else {
            return Room::with('latestMessage')
            ->where('status_id', 1)
            ->orderBy('updated_at', 'desc')
            ->get();
            }
        }    
        // roomに紐づくmessage情報の入手
    public function loadMessage(Request $request) {
        $room_id = $request->room_id;

        $room = Room::where('id', $room_id)->first();
               
        if($request->role === 'operator') {
            $msg_list = DB::table('messages')
            ->where('room_id', $room_id)
            ->leftJoin('message_operator', 'message_operator.message_id', '=', 'messages.id')
            ->leftJoin('users', 'users.id', '=', 'messages.user_id')
            ->select('messages.*','users.nickname', 'message_operator.is_read')
            ->get(); 
            
            foreach($msg_list as $msg) {
                $read_records = Message_User::where('message_id', $msg->id)->where('is_read', false)->get();
                foreach($read_records as $record) {
                    $record->is_read = true;
                    $record->save();
                }
            }
        }else {
            $msg_list = DB::table('messages')
            ->where('room_id', $room_id)
            ->leftJoin('message_user', 'message_user.message_id', '=', 'messages.id')
            ->leftJoin('users', 'users.id', '=', 'messages.user_id')
            ->select('messages.*','users.nickname', 'message_user.is_read')
            ->get(); 
            
            foreach($msg_list as $msg) {
                $read_records = Message_Operator::where('message_id', $msg->id)->where('is_read', false)->get();
                foreach($read_records as $record) {
                    $record->is_read = true;
                    $record->save();
                }
            }
       }
        return [$room, $msg_list];
    }

    //未対応ルーム情報取得
    public function backlog() {
        return Room::with('latestMessage')->where('status_id', 1)->get();
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
        return $room->with('latestMessage')
        ->where('status_id', 2)
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

    //対応済ルーム情報取得
    public function done(Request $request, Room $room) {
        $operator = $request->user();
        return $room->with('latestMessage')
        ->where('status_id', 3)
        ->where('operator_id', $operator->id)
        ->get();
    }
}
