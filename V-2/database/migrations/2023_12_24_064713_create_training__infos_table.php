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
        Schema::create('training__infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('EID');
            $table->string('Training_Title',255);
            $table->string('Organized_By',255);
            $table->text('Topic_Covered');
            $table->date('From_Date');
            $table->date('To_Date');
            $table->unsignedBigInteger('Country_Id');
            $table->date('Remarks');
            $table->timestamps();

            $table->foreign('EID')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('Country_Id')->references('id')->on('countries')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training__infos');
    }
};
