<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class training_info extends Model
{
    use HasFactory;

    protected $fillable = [
        'EID',
        'Training_Title',
        'Organized_By',
        'Topic_Covered',
        'From_Date',
        'To_Date',
        'Country_Id',
        'Remarks',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'EID');
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'Country_Id');
    }
}
