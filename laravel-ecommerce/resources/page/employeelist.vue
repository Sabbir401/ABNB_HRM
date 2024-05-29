<template>
    <div class="q-pa-md">
        <q-table
            flat
            bordered
            title="Employees"
            :rows="rows"
            :columns="columns"
            row-key="Employee_Id"
            selection="single"
            v-model:selected="selected"
            :pagination="initialPagination"
        />
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
    setup() {
        const rows = ref([]);
        const selected = ref([]);

        const columns = [
            {
                name: "Employee_Id",
                label: "Employee ID",
                align: "left",
                field: "Employee_Id",
                sortable: true,
            },
            {
                name: "Full_Name",
                align: "center",
                label: "Full Name",
                field: "Full_Name",
                sortable: true,
            },
            {
                name: "DOB",
                label: "Date of Birth",
                field: "DOB",
                sortable: true,
            },
            { name: "Contact_No", label: "Contact No", field: "Contact_No" },
            { name: "Gender", label: "Gender", field: "Gender" },
            {
                name: "Official_Email",
                label: "Official Email",
                field: "Official_Email",
            },
            {
                name: "Blood_Group",
                label: "Blood Group",
                field: "Blood_Group",
                sortable: true,
            },
        ];

        onMounted(() => {
            axios
                .get("/api/employee")
                .then((response) => {
                    rows.value = response.data.map((employee) => {
                        return {
                            ...employee,
                            Blood_Group: employee.blood?.Name || "",
                        };
                    });
                })
                .catch((error) => {
                    console.error("Error during GET request:", error);
                });
        });

        return {
            selected,
            columns,
            rows,
            initialPagination: {
                sortBy: "desc",
                descending: false,
                rowsPerPage: 3,
                // rowsNumber: xx if getting data from a server
            },
        };
    },
};
</script>
