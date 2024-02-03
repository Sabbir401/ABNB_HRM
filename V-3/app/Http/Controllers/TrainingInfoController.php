<?php

namespace App\Http\Controllers;

use App\Models\training_info;
use Illuminate\Http\Request;

class TrainingInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $training = training_info::all();

        return response()->json($training);
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
        $traning = training_info::create([
            'EID' => $request->input('eid'),
            'Training_Title' => $request->input('traningTitle'),
            'Organized_By' => $request->input('organizedBy'),
            'Topic_Covered' => $request->input('topicCovered'),
            'From_Date' => $request->input('fromDate'),
            'To_Date' => $request->input('toDate'),
            'Remarks' => $request->input('remarks'),

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
    public function show(training_info $training_info)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(training_info $training_info)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, training_info $training_info)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(training_info $training_info)
    {
        //
    }
}
