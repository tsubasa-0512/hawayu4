<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message_User extends Model
{
    protected $table = 'message_user';
    
    protected $fillable = ['user_id', 'message_id'];
}
