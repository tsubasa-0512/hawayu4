<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\Room;
use App\Events\SendMessage;

class MessagesController extends Controller
{
    public function sendMessages(Request $request, Message $message) {
        $message->message = $request->message;
        $message->sender = $request->role;
        
        if($request->role === 'user') {
            $message->user_id = $request->id;
            $message->room_id = $request->room_id;
            $message->save();
            
            $messages = [
                'message' =>  $request->message,
                'room_id' =>  $request->room_id,
                'user_id' =>  $request->id,
                'sender' => $request->role   
            ];
        }else {
            $message->operator_id = $request->id;
            $message->room_id = $request->room_id;
            $message->save();
            
            $messages = [
                'message' =>  $request->message,
                'room_id' =>  $request->room_id,
                'operator_id' =>  $request->id,
                'sender' => $request->role    
            ];  
        }


        event((new SendMessage($messages))->dontBroadcastToCurrentUser());

        return response($message, 201);
    }
}
