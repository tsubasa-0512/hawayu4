<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message_Operator extends Model
{
    protected $table = 'message_operator';
    
    protected $fillable = ['operator_id', 'message_id'];
}
