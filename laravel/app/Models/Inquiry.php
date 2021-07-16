<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    public function results()
    {
        return $this->hasMany('App\Models\Result');
    }
}
