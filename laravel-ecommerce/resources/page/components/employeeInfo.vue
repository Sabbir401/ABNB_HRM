<template>
    <div class="container q-my-xl q-mx-xl">
        <q-form @submit.prevent="Submit">
            <div class="row bg-white">
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-select
                        filled
                        v-model="emp.companyId"
                        dense
                        :options="companies"
                        option-value="id"
                        option-label="Name"
                        label="Company Name"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.employeeId"
                        label="emp ID"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.cardNo"
                        label="Card No"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.fullName"
                        label="Full Name"
                    />
                </div>
            </div>

            <div class="row bg-white q-mt-sm">
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.fatherName"
                        label="Father's Name"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.motherName"
                        label="Mother's Name"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.spouseName"
                        label="Spouse Name"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-select
                        filled
                        v-model="emp.maritalStatus"
                        dense
                        :options="status"
                        label="Marital Status"
                    />
                </div>
            </div>

            <div class="row bg-white q-mt-sm">
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        v-model="emp.pob"
                        filled
                        label="Place of Birth"
                    />
                </div>

                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <div>
                        <q-input
                            filled
                            dense
                            v-model="emp.dob"
                            mask="date"
                            :rules="['date']"
                        >
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy
                                        cover
                                        transition-show="scale"
                                        transition-hide="scale"
                                    >
                                        <q-date v-model="emp.dob">
                                            <div
                                                class="row items-center justify-end"
                                            >
                                                <q-btn
                                                    v-close-popup
                                                    label="Close"
                                                    color="primary"
                                                    flat
                                                />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                </div>

                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.officialContact"
                        label="Official Contact"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        filled
                        v-model="emp.emergencyContact"
                        label="Emergency Contact"
                    />
                </div>
            </div>

            <div class="row bg-white">
                <div class="col-lg-6 col-md-6 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        v-model="emp.permanentAddress"
                        filled
                        dense
                        type="textarea"
                        label="Permanent Address"
                    />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        v-model="emp.presentAddress"
                        filled
                        dense
                        type="textarea"
                        label="Present Address"
                    />
                </div>
            </div>

            <div class="row bg-white q-mt-sm">
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-select
                        filled
                        dense
                        :options="gender"
                        v-model="emp.gender"
                        label="Gender"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        filled
                        dense
                        v-model="emp.personalEmail"
                        type="email"
                        label="Personal Email"
                    >
                        <template v-slot:append>
                            <q-icon name="mail" />
                        </template>
                    </q-input>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        filled
                        dense
                        v-model="emp.officialEmail"
                        type="email"
                        label="Official Email"
                    >
                        <template v-slot:append>
                            <q-icon name="mail" />
                        </template>
                    </q-input>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-select
                        filled
                        dense
                        :options="religions"
                        option-value="id"
                        option-label="Name"
                        v-model="emp.religion"
                        label="Religion"
                    />
                </div>
            </div>

            <div class="row bg-white q-mt-sm">
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-select
                        filled
                        dense
                        :options="bloods"
                        option-value="id"
                        option-label="Name"
                        v-model="emp.bloodGroup"
                        label="Blood group"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input
                        dense
                        v-model="emp.nationality"
                        filled
                        label="Nationality"
                    />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-input dense v-model="emp.nid" filled label="NID" />
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm q-mt-sm">
                    <q-file
                        outlined
                        dense
                        filled
                        v-model="emp.photo"
                        label="Photo"
                    >
                        <template v-slot:append>
                            <q-icon name="attachment" />
                        </template>
                    </q-file>
                </div>
            </div>
            <div class="q-mt-lg">
                <q-btn
                    label="Submit"
                    type="submit"
                    color="info"
                    class="q-ml-xl"
                />
                <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    class="q-ml-md"
                />
            </div>
        </q-form>
    </div>
    <div class="q-pa-md" style="max-width: 400px"></div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";

const $q = useQuasar();

const emp = ref({
    companyId: "",
    employeeId: "",
    cardNo: "",
    fullName: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    maritalStatus: "",
    dob: "",
    pob: "",
    presentAddress: "",
    permanentAddress: "",
    officialContact: "",
    emergencyContact: "",
    gender: "",
    personalEmail: "",
    officialEmail: "",
    religion: "",
    bloodGroup: "",
    nationality: "",
    nid: "",
    photo: null,
});

const bloods = ref();
const religions = ref();
const companies = ref([]);
const error = ref();

const gender = ["Male", "Female"];
const status = ["Married", "Unmarried"];

const getData = async () => {
    try {
        const responseBlood = await axios.get("/api/blood");
        const responseReligion = await axios.get("/api/religion");
        const responseCompany = await axios.get("/api/company");

        bloods.value = responseBlood.data;
        religions.value = responseReligion.data;
        companies.value = responseCompany.data;
        console.log(companies.value);
    } catch (err) {
        error.value = err.message || "Error fetching data";
    } finally {
    }
};

const Submit = async () => {
    try {
        const response = await axios.post("/api/employee", emp.value);
        if (response.data.success) {
            $q.notify({
                color: "green-5",
                textColor: "white",
                icon: "warning",
                message: "Saved Successfully",
            });
        }else{
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Something Went Wrong",
        });
        }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
};

onMounted(() => getData());
</script>
