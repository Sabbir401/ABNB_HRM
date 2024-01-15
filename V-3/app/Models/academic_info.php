<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class academic_info extends Model
{
    use HasFactory;
    protected $fillable = [
        'EID',
        'Level_of_Education_Id',
        'Group',
        'Institute_Name',
        'Sacle_Id',
        'Result',
        'Year_of_Passing',
        'Acheivement'
    ];

    public function employee()
    {
        return $this->belongsTo(employee::class, 'EID');
    }

    public function education()
    {
        return $this->belongsTo(level_of_education::class, 'Level_of_Education_Id');
    }

    public function scale()
    {
        return $this->belongsTo(scale::class, 'Sacle_Id');
    }
}
