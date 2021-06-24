<?php

use Illuminate\Database\Seeder;

class OperatorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('operators')->insert([
            'name'              => 'admin',
            'email'             => 'admin@example.com',
            'password'          => Hash::make('12345678'),
        ]);
    }
}
