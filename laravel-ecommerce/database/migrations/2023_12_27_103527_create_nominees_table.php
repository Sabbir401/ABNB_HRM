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
        Schema::create('nominees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('EID');
            $table->string('Nominee_Name',50);
            $table->date('DOB');
            $table->string('Contact_No',20);
            $table->string('Email',50);
            $table->string('NID',25);
            $table->string('Share',25);
            $table->text('Personal_Address');
            $table->timestamps();

            $table->foreign('EID')->references('id')->on('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nominees');
    }
};
