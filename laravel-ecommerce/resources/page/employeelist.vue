<template>
    <div class="q-pa-md">
        <q-table
            flat
            bordered
            title="Employees"
            :rows="rows[0]"
            :columns="columns"
            row-key="id"
            selection="single"
            v-model:selected="selected"
        />

        <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import axios from 'axios';

const columns = [
    {
        name: "Employee_Id",
        label: "Employee ID",
        align: "left",
        field: 'Employee_Id',
        sortable: true,
    },
    { 
        name: "Full_Name",
        align: "center",
        label: "Full Name",
        field: "Full_Name",
        sortable: true,
    },
    { name: "DOB", label: "Date of Birth", field: "DOB", sortable: true },
    { name: "Contact_No", label: "Contact No", field: "Contact_No" },
    { name: "Gender", label: "Gender", field: "Gender" },
    { name: "Official_Email", label: "Official Email", field: "Official_Email" },
    { name: "Blood_Group_Id", label: "Blood Group", field: "Blood_Group_Id", sortable: true },
];


const rows = [];

export default {
    setup() {
        onMounted(() => {
            axios
                .get('/api/employee')
                .then((response) => {
                    // console.log({rows});

                    rows.push(response.data);
                    console.log(rows);
                })
                .catch((error) => {
                    console.error("Error during GET request:", error);
                });
        });
        return {
            selected: ref([]),
            columns,
            rows,
        };
    },
};
</script>
