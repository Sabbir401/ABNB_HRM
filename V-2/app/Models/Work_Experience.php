<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Work_Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'EID',
        'Company_Name',
        'Company_Business',
        'Designation',
        'Department',
        'From_Date',
        'To_Date',
        'Responsibilities',
        'Company_Location',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'EID');
    }
}
