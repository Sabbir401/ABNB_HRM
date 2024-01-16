<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class country extends Model
{
    use HasFactory;
    protected $fillable = [
        'Name',
        'Phone_Code',
    ];

    public function training()
    {
        return $this->hasOne(training_info::class, 'Country_Id');
    }
}