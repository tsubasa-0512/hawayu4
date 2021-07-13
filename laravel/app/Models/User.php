<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','nickname', 'gender','birthday','email', 'password','api_token','membership_id','company_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function membership(): BelongsTo
    {
        return $this->belongsTo('App\Models\Membership');
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo('App\Models\Company');
    }

    public function rooms(): BelongsToMany
    {
        return $this->belongsToMany('App\Models\Operator', 'rooms','user_id', 'operator_id')->withTimestamps();
    }
}
