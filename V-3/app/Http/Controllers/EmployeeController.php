<?php

namespace App\Http\Controllers;

use App\Models\company;
use App\Models\employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employee = employee::with('company', 'blood', 'religion')->paginate(2);
        $company = company::all();

        return response()->json($employee);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $store = employee::create([
            'Company_Id' => $request->input('companyId'),
            'Card_No' => $request->input('cardNo'),
            'Full_Name' => $request->input('fullName'),
            'Father_Name' => $request->input('fatherName'),
            'Mother_Name' => $request->input('motherName'),
            'Spouse_Name' => $request->input('spouseName'),
            'Marital_Status' => $request->input('maritalStatus'),
            'DOB' => $request->input('dob'),
            'Place_of_Birth' => $request->input('pob'),
            'Present_Address' => $request->input('presentAddress'),
            'Permanent_Address' => $request->input('permanentAddress'),
            'Contact_No' => $request->input('officialContact'),
            'Emergency_Contact' => $request->input('emergencyContact'),
            'Gender' => $request->input('gender'),
            'Personal_Email' => $request->input('personalEmail'),
            'Official_Email' => $request->input('officialEmail'),
            'Blood_Group_Id' => $request->input('bloodGroup'),
            'Religion_Id' => $request->input('religion'),
            'Nationality' => $request->input('nationality'),
            'NID' => $request->input('nid'),
        ]);

        $response = [
            'success' => true,
            'message'  => 'Successfully inserted'
        ];

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     */
    public function show(employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(employee $employee)
    {
        //
    }
}
