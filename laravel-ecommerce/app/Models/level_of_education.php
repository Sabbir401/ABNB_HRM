<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class level_of_education extends Model
{
    use HasFactory;

    protected $fillable = [
        'Name',
    ];

    public function degree()
    {
        return $this->hasMany(Degree::class, 'Level_of_Education_Id');
    }
    public function academic()
    {
        return $this->hasMany(Academic_Info::class, 'Level_of_Education_Id');
    }
}
