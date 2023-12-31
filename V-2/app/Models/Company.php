<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $fillable = [
        'Name',
    ];

    public function employee()
    {
        return $this->hasOne(Employee::class, 'Company_Id');
    }

}
