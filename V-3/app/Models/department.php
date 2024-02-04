<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class department extends Model
{
    use HasFactory;

    protected $fillable = [
        'Name',
        'parent_id',
    ];

    public function department()
    {
        return $this->hasOne(official::class, 'Department_Id');
    }

    public function parentDesignation()
    {
        return $this->belongsTo(department::class, 'parent_id');
    }
}
