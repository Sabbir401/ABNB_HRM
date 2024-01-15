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
        return $this->hasMany(degree::class, 'Level_of_Education_Id');
    }
    public function academic()
    {
        return $this->hasMany(academic_info::class, 'Level_of_Education_Id');
    }
}
