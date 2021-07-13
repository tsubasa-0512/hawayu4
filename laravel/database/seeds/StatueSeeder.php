<?php

use Illuminate\Database\Seeder;

class StatueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('statuses')->truncate();
        DB::table('statuses')->insert([
            [
                'id' => 1,
                'status' => '未対応',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 2,
                'status' => '相談中',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 3,
                'status' => '解決済',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'id' => 4,
                'status' => '凍結',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);

    }
}
