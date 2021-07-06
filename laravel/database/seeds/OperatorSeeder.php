<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class OperatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('operators')->truncate();
        DB::table('operators')->insert([
            [
                'name' => 'test',
                'email' => 'test@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'test2',
                'email' => 'test2@gmail.com',
                'password' => Hash::make('password'),
            ],
        ]);  
    }
}
