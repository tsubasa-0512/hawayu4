<?php declare(strict_types=1);

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        // $this->call(TruncateAllTables::class);
        $this->call(CompanySeeder::class);
        $this->call(MembershipSeeder::class);
        $this->call(StatueSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(OperatorSeeder::class);
        $this->call(QuestionSeeder::class);
        $this->call(AnswerSeeder::class);

        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
