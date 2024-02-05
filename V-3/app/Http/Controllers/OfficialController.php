<?php

namespace App\Http\Controllers;

use App\Models\official;
use Illuminate\Http\Request;

class OfficialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $store = official::create([
            'EID' => $request->input('eid'),
            'Department_Id' => $request->input('departmentId'),
            'Employee_Grade' => $request->input('employeeGrade'),
            'Area_Id' => $request->input('areaId'),
            'Territory_Id' => $request->input('territoryId'),
            'Employee_type_Id' => $request->input('employeeType'),
            'Supervisor_Id' => $request->input('supervisorId'),
            'DOJ' => $request->input('doj'),
            'Provation_period' => $request->input('provationPeriod'),
            'DOC' => $request->input('doc'),
            'Job_Location_Id' => $request->input('jobLocation'),
            'Shift' => $request->input('shift'),
        ]);

        $response = [
            'success'   =>  true,
            'message'   =>  'Successfully inserted',
        ];

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     */
    public function show(official $official)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(official $official)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, official $official)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(official $official)
    {
        //
    }
}
