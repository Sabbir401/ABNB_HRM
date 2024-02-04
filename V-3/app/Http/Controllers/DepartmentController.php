<?php

namespace App\Http\Controllers;

use App\Models\department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $department = DB::table('departments')
            ->select('id', 'Name')
            ->whereNull('parent_id')
            ->orWhere('parent_id', '')
            ->orderBy('Name', 'asc')
            ->get();

        $designation = DB::table('departments')
            ->select('id', 'Name')
            ->whereNotNull('parent_id')
            ->orderBy('Name', 'asc')
            ->get();

        return response()->json([
            'department' => $department,
            'designation' => $designation,
        ]);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, department $department)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(department $department)
    {
        //
    }
}
