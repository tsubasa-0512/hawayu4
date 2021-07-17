<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConditionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('conditions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('condition')->nullable();
            $table->text('symptom')->nullable();
            $table->string('period')->nullable();
            $table->string('hospital')->nullable();
            $table->string('prescribed')->nullable();
            $table->text('comment')->nullable();
            $table->text('recovered')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('conditions');
        Schema::enableForeignKeyConstraints();
    }
}
