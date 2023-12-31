<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $orderStatus = [
            "Pending",
            "Awaiting Payment",
            "Awaiting Fullfillment",
            "Awaiting Shipment",
            "Partially Shipped",
            "Completed",
            "Shipped",
            "Cancelled",
            "Declined",
            "Refunded",
            "Disputed",
            "Manual Verification Required",
            "Partially Refunded"
        ];

        
        foreach ($orderStatus as $status) {
            DB::table('order_statuses')->insert([
                'status'          => $status
            ]);
        }

    }
}
