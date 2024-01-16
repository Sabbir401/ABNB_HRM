<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'Company_Id',
        'Card_No',
        'Full_Name',
        'Father_Name',
        'Mother_Name',
        'Spouse_Name',
        'Marital_Status',
        'DOB',
        'Place_of_Birth',
        'Present_Address',
        'Permanent_Address',
        'Contact_No',
        'Emergency_Contact',
        'Gender',
        'Personal_Email',
        'Official_Email',
        'Blood_Group_Id',
        'Religion_Id',
        'Nationality',
        'NID',
    ];

    public function company()
    {
        return $this->belongsTo(employee::class, 'Company_Id');
    }
    public function blood()
    {
        return $this->belongsTo(blood_group::class, 'Blood_Group_Id');
    }
    public function religion()
    {
        return $this->belongsTo(religion::class, 'Religion_Id');
    }

    public function academic()
    {
        return $this->hasMany(academic_info::class, 'EID');
    }
    public function training()
    {
        return $this->hasMany(training_info::class, 'EID');
    }
    public function experience()
    {
        return $this->hasMany(work_experience::class, 'EID');
    }
    public function nominee()
    {
        return $this->hasMany(nominee::class, 'EID');
    }
    public function child()
    {
        return $this->hasMany(child::class, 'EID');
    }
}