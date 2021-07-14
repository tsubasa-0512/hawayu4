<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('users')->truncate();
        
        DB::table('users')->insert([
            [
                'id' => 1,
                'name' => 'test',
                'nickname' => 'テスト',
                'email' => 'test@gmail.com',
                'password' => Hash::make('password'),
                'membership_id' => '2',
                'company_id' => '1',
            ],
            [
                'id' => 2,
                'name' => 'test2',
                'nickname' => 'テスト２',
                'email' => 'test2@gmail.com',
                'password' => Hash::make('password'),
                'membership_id' => '1',
                'company_id' => '2',
            ],
        ]);
    }
}
