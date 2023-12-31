<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nominee extends Model
{
    use HasFactory;

    protected $fillable = [
        'EID',
        'Nominee_Name',
        'DOB',
        'Contact_No',
        'Email',
        'NID',
        'Share',
        'Personal_Address',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'EID');
    }
}
