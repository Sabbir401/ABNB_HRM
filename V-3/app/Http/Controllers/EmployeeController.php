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
        $employee = employee::with('company', 'blood', 'religion')->paginate(10);
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
            'Employee_Id' => $request->input('employeeId'),
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

        $lastId = employee::latest('id')->value('id');
        $response = [
            'success'   =>  true,
            'message'   =>  'Successfully inserted',
            'empid' => $lastId,
        ];

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     */
    public function show(employee $id)
    {
        $emp = employee::find($id);

        if (!$emp) {
            return response()->json(['message' => 'Store not found'], 404);
        }

        return response()->json($emp);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $employee = employee::with([
            'company',
            'blood',
            'religion',
            'academic',
            'training',
            'experience',
            'official',
            'nominee',
            'child',
            'academic.scale',
            'academic.board',
            'academic.education',
            'academic.education.degree',
            'official.designation',
            'official.department',
            'official.area',
            'official.employeeType',
            'official.territory',
            'official.supervisor',
            'official.country',
        ])->find($id);

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        return response()->json($employee);
    }

    public function find($id)
    {
        $employee = employee::with([
            'company',
            'blood',
            'religion',
            'academic',
            'training',
            'experience',
            'official',
            'nominee',
            'child',
            'academic.scale',
            'academic.board',
            'academic.education',
            'academic.education.degree',
            'official.designation',
            'official.department',
            'official.area',
            'official.employeeType',
            'official.territory',
            'official.supervisor',
            'official.country',
        ])->where('Department_Id',$id)
        ->get();;

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $employee = employee::find($id);
        $employee->update([
            'Company_Id' => $request->input('companyId'),
            'Employee_Id' => $request->input('employeeId'),
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
            'message'  => 'Updated Successfully'
        ];

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(employee $employee)
    {
        //
    }
}
