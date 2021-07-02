<?php

use Illuminate\Database\Seeder;

class MembershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('memberships')->truncate();
        DB::table('memberships')->insert([
            [
                'membership' => '無料会員',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'membership' => '有料会員',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'membership' => '退会済み',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);
    }
}
