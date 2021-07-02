<?php

use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('companies')->truncate();
        DB::table('companies')->insert([
            [
                'company' => 'A商事',
                'code' => '1111',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'company' => 'B銀行',
                'code' => '2222',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
        ]);
    }
}
