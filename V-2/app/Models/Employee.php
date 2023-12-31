<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
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
        return $this->belongsTo(Employee::class, 'Company_Id');
    }
    public function blood()
    {
        return $this->belongsTo(Blood_Group::class, 'Blood_Group_Id');
    }
    public function religion()
    {
        return $this->belongsTo(Religion::class, 'Religion_Id');
    }

    public function academic()
    {
        return $this->hasMany(Academic_Info::class, 'EID');
    }
    public function training()
    {
        return $this->hasMany(Training_Info::class, 'EID');
    }
    public function experience()
    {
        return $this->hasMany(Work_Experience::class, 'EID');
    }
    public function nominee()
    {
        return $this->hasMany(Nominee::class, 'EID');
    }
    public function child()
    {
        return $this->hasMany(Child::class, 'EID');
    }
}
