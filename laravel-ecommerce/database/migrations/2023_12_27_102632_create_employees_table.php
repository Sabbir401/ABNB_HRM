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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Company_Id');
            $table->string('Card_No', 50);
            $table->string('Full_Name', 100);
            $table->string('Father_Name', 100);
            $table->string('Mother_Name', 100);
            $table->string('Spouse_Name', 100);
            $table->string('Marital_Status', 20);
            $table->date('DOB', 100);
            $table->string('Place_of_Birth', 100);
            $table->text('Present_Address');
            $table->text('Permanent_Address');
            $table->string('Contact_No', 30);
            $table->string('Emergency_Contact', 30);
            $table->string('Gender', 30);
            $table->string('Personal_Email', 30);
            $table->string('Official_Email', 30);
            $table->unsignedBigInteger('Blood_Group_Id');
            $table->unsignedBigInteger('Religion_Id');
            $table->string('Nationality', 50);
            $table->string('NID', 30);
            $table->timestamps();

            $table->foreign('Company_Id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('Blood_Group_Id')->references('id')->on('blood_groups')->onDelete('cascade');
            $table->foreign('Religion_Id')->references('id')->on('religions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
