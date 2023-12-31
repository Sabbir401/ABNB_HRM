<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    use HasFactory;
    protected $fillable = [
        'EID',
        'Child_Name',
        'National_Id',
        'Email', 
        'Contact_No',
        'DOB',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'EID');
    }
}
