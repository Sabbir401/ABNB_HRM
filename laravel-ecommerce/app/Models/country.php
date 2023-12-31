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
        return $this->hasOne(Training_Info::class, 'Country_Id');
    }
}
