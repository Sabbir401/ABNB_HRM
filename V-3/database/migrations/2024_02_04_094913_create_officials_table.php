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
        Schema::create('officials', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('EID');
            $table->unsignedBigInteger('Department_Id');
            $table->string('Employee_Grade',20);
            $table->unsignedBigInteger('Employee_type_Id');
            $table->unsignedBigInteger('Area_Id');
            $table->unsignedBigInteger('Territory_Id');
            $table->unsignedBigInteger('Supervisor_Id');
            $table->date('DOJ');
            $table->string('Provation_period',20);
            $table->date('DOC');
            $table->string('Shift',20);

            $table->foreign('EID')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('Department_Id')->references('id')->on('departments')->onDelete('cascade');
            $table->foreign('Employee_type_Id')->references('id')->on('employee_types')->onDelete('cascade');
            $table->foreign('Area_Id')->references('id')->on('areas')->onDelete('cascade');
            $table->foreign('Territory_Id')->references('id')->on('territories')->onDelete('cascade');
            $table->foreign('Supervisor_Id')->references('id')->on('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('officials');
    }
};
