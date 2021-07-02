<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Room extends Model
{
    public function status(): BelongsTo
    {
        return $this->belongsTo('App\Models\Status');
    }
}
