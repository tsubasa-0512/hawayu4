<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessagesController extends Controller
{
    public function sendMessages(Request $request, Message $message) {
        $message->message = $request->message;
        $message->sender = $request->role;
        if($request->role = 'user') {
            $message->user_id = $request->id;
        }else {
            $message->operator_id = $request->id;
        }
        $message->room_id = $request->room_id;
        $message->save();

        return response($message, 201);
    }
}
