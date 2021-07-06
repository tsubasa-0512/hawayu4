<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\SendMessage;
use App\Models\Message;

class MessagesController extends Controller
{
    public function sendMessages(Request $request, Message $message) {
        $message->message = $request->message;
        $message->operator_id = $request->operator_id;
        $message->room_id = $request->room_id;
        $message->save();

        $messages = [
            'message' =>  $request->message,
            'room_id' =>  $request->room_id,
            'operator_id' =>  $request->operator_id     
        ];

    broadcast(new SendMessage($messages));

        return response($message, 201);
    }
}
