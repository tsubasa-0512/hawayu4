<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Room;
use App\Models\User;
use App\Models\Operator;
use Faker\Generator as Faker;

$factory->define(Room::class, function (Faker $faker) {
    return [
        'user_id' => function() {
            return factory(User::class);
        },
        'company_id' => 1,
        'status_id' => 1
    ];
});
