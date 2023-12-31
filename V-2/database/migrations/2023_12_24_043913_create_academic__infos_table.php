<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('academic__infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('EID');
            $table->unsignedBigInteger('Level_of_Education_Id');
            $table->string('Group',255);
            $table->string('Institute_Name',255);
            $table->unsignedBigInteger('Sacle_Id');
            $table->string('Result',100);
            $table->decimal('Year_of_Passing');
            $table->text('Acheivement');
            $table->timestamps();

            $table->foreign('EID')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('Level_of_Education_Id')->references('id')->on('level_of__education')->onDelete('cascade');
            $table->foreign('Sacle_Id')->references('id')->on('scales')->onDelete('cascade');
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('academic__infos');
    }
};
