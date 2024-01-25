<?php

namespace App\Http\Controllers;

use App\Models\child;
use App\Models\nominee;
use Illuminate\Http\Request;

class NomineeController extends Controller
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
        $store = nominee::create([
            'EID' => $request->input('employeeId'),
            'Nominee_Name' => $request->input('nomineeName'),
            'DOB' => $request->input('dob'),
            'Contact_No' => $request->input('contactNo'),
            'Email' => $request->input('email'),
            'NID' => $request->input('nid'),
            'Share' => $request->input('share'),
            'Personal_Address' => $request->input('presentAddress'),
        ]);

        $store = child::create([
            'EID' => $request->input('employeeId'),
            'Child_Name' => $request->input('childName'),
            'NID' => $request->input('nid'),
            'Email' => $request->input('email'),
            'Contact_No' => $request->input('contactNo'),
            'DOB' => $request->input('dob'),
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
    public function show(nominee $nominee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(nominee $nominee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, nominee $nominee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(nominee $nominee)
    {
        //
    }
}
