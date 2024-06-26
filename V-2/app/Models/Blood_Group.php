<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blood_Group extends Model
{
    use HasFactory;
    protected $fillable = [
        'Name',
    ];

    public function employee()
    {
        return $this->hasOne(employee::class, 'Blood_Group_Id');
    }
}
