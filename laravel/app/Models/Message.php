<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    public function unread()
    {
        return $this->belongsToMany('App\Models\User')->withTimestamps();
    }

    public function unreadOpe()
    {
        return $this->belongsToMany('App\Models\Operator')->withTimestamps();
    }

    public function latestMsgStatus()
    {
        return $this->hasOne('App\Models\Message_User');
    }

    public function latestMsgStatusOpe()
    {
        return $this->hasOne('App\Models\Message_Operator');
    }
}
