<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = [
        'inquiry_id','question_id','answer_id'
    ];

    public function answer() {
        return $this->belongsTo('App\Models\Answer');
    }
}
