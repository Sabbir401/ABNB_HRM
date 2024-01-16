<?php

namespace App\Http\Controllers;

use App\Models\store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $store = store::paginate(2);

        return response()->json($store);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $store = store::create([
            'Name' => $request->input('name'),
            'Address' => $request->input('address'),
            'Date' => $request->input('date'),
            'Status' => $request->input('status'),
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
    public function show(store $store)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $store = store::find($id);

        if (!$store) {
            return response()->json(['message' => 'Store not found'], 404);
        }

        return response()->json($store);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $store = store::find($id);
        $store->update([
            'Name' => $request->input('name'),
            'Address' => $request->input('address'),
            'Date' => $request->input('date'),
            'Status' => $request->input('status'),
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
    public function destroy(store $store)
    {
        //
    }
}
