<?php

namespace App\Http\Controllers;

use App\Models\attendence;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AttendenceController extends Controller
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
    // public function store(Request $request)
    // {
    //     try {
    //         DB::beginTransaction();

    //         $timeIn = $request->input('Time_In');
    //         $status = ($timeIn && $timeIn > '11:00:00') ? 'Late' : 'Present';


            // $employee = attendence::create([
            //     'EID' => $request->input('Employee_Id'),
            //     'Date' => $request->input('Date'),
            //     'Time_In' => $timeIn,
            //     'Time_Out' => $request->input('Time_Out'),
            //     'Status' => $status,
            // ]);

    //         $response = [
    //             'success'   =>  true,
    //             'message'   =>  'Successfully inserted',
    //         ];

    //         DB::commit();
    //         return response()->json($response);
    //     } catch (\Exception $e) {
    //         DB::rollback();
    //         $response = [
    //             'success'   =>  false,
    //             'message'   =>  'Error while inserting',
    //         ];
    //         return response()->json($response);
    //     }
    // }

    public function store(Request $request)
{
    try {
        DB::beginTransaction();

        $startDate = $request->input('From_Date');
        $endDate = $request->input('To_Date');

        $timeIn = $request->input('Time_In');
        $status = ($timeIn && $timeIn > '11:00:00') ? 'Late' : 'Present';

        $date = $startDate;
        while ($date <= $endDate) {
            $employee = attendence::create([
                'EID' => $request->input('Employee_Id'),
                'Date' => $date,
                'Time_In' => $request->input('Time_In'),
                'Time_Out' => $request->input('Time_Out'),
                'Status' => $status,
            ]);
            $date = date('Y-m-d', strtotime($date . ' +1 day'));
        }

        DB::commit();
        $response = [
            'success'   =>  true,
            'message'   =>  'Attendance saved successfully',
        ];
        return response()->json($response);
    } catch (\Exception $e) {
        DB::rollback();
        $response = [
            'success'   =>  false,
            'message'   =>  'Error while inserting attendance: ' . $e->getMessage(),
        ];
        return response()->json($response, 500);
    }
}


    /**
     * Display the specified resource.
     */
    public function show(attendence $attendence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(attendence $attendence, Request $request)
    {
        dd($request);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, attendence $attendence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(attendence $attendence)
    {
        //
    }
}
