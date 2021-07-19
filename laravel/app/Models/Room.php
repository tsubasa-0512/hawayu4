<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Room extends Model
{
    public function status(): BelongsTo
    {
        return $this->belongsTo('App\Models\Status');
    }
    
    public function completions() {
        return $this->belongsToMany('App\Models\Operator', 'completions')->withTimestamps();
    }

    public function messages()
    {
        return $this->hasMany('App\Models\Message');
    }

    public function latestMessage() {
        return $this->hasOne('App\Models\Message')
        ->orderBy('created_at', 'desc');
    }
}
