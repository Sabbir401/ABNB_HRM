<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class degree extends Model
{
    use HasFactory;

    protected $fillable = [
        'Level_of_Education_Id',
        'Name',
    ];

    public function education()
    {
        return $this->belongsTo(Level_of_Education::class, 'Level_of_Education_Id');
    }
}
