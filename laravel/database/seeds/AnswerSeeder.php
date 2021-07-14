<?php

use Illuminate\Database\Seeder;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('answers')->truncate();
        DB::table('answers')->insert([
            [
                'id' => 1,
                'answer' => 'いつもと変わらず食べている',
                'question_id' => 1,
                'allocation' => 2,
            ],
            [
                'id' => 2,
                'answer' => 'いつもより食欲がない、又はある',
                'question_id' => 1,
                'allocation' => 0,
            ],
            [
                'id' => 3,
                'answer' => '特に痛みはない',
                'question_id' => 2,
                'allocation' => 2,
            ],
            [
                'id' => 4,
                'answer' => 'お腹が痛む',
                'question_id' => 2,
                'allocation' => 0,
            ],
            [
                'id' => 5,
                'answer' => '頭が痛む',
                'question_id' => 2,
                'allocation' => 0,
            ],
            [
                'id' => 6,
                'answer' => '両方が痛む',
                'question_id' => 2,
                'allocation' => 0,
            ],
            [
                'id' => 7,
                'answer' => '問題なく眠れている',
                'question_id' => 3,
                'allocation' => 5,
            ],
            [
                'id' => 8,
                'answer' => '寝つきが悪い・途中で目が覚める',
                'question_id' => 3,
                'allocation' => 0,
            ],
            [
                'id' => 9,
                'answer' => '変わらない・又は普段よりある',
                'question_id' => 4,
                'allocation' => 1,
            ],
            [
                'id' => 10,
                'answer' => '普段よりもないと感じる',
                'question_id' => 4,
                'allocation' => 0,
            ],
        ]);
    }
}
