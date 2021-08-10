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
}
