<?php

use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('questions')->truncate();
        DB::table('questions')->insert([
            [
                'id' => 1,
                'question' => 'お食事は問題なく食べられていますか？',
                'order' => 1,
            ],
            [
                'id' => 2,
                'question' => 'お腹や頭の痛みはありますか？',
                'order' => 2,
            ],
            [
                'id' => 3,
                'question' => 'ここ1週間の睡眠はいかがでしょうか？',
                'order' => 3,
            ],
            [
                'id' => 4,
                'question' => 'やる気や意欲は普段と変わりませんか？',
                'order' => 4,
            ],
        ]); 
    }
}
