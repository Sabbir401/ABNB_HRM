<template>
  <div class="container q-my-xl q-mx-xl">
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="cmpname" label="Company Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="id" label="Employee ID" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="card" label="Card No" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="fullname" label="Full Name" />
        </div>
      </div>

      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="fathername" label="Father's Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="mothername" label="Mother's Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="spousename" label="Spouse Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-select
            filled
            v-model="mary"
            dense
            :options="options"
            label="Marital Status"
          />
        </div>
      </div>

      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense v-model="pob" filled label="Place of Birth" />
        </div>

        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <div>
            <q-input
              filled
              dense
              v-model="date"
              mask="date"
              label="Date of Birth"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date dense v-model="date">
                      <div class="row items-center justify-end">
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

        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="offcontact" label="Official Contact" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input
            dense
            filled
            v-model="emercontact"
            label="Emergency Contact"
          />
        </div>
      </div>

      <div class="row bg-white">
        <div class="col-lg-6 col-md-6 col-sm-12 q-px-sm">
          <q-input
            v-model="permanent"
            filled
            dense
            type="textarea"
            label="Permanent Address"
          />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 q-px-sm">
          <q-input
            v-model="present"
            filled
            dense
            type="textarea"
            label="Present Address"
          />
        </div>
      </div>

      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-select
            filled
            dense
            v-model="gender"
            :options="gen"
            label="Gender"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input
            filled
            dense
            v-model="peremail"
            type="email"
            label="Personal Email"
          >
            <template v-slot:append>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input
            filled
            dense
            v-model="offemail"
            type="email"
            label="Official Email"
          >
            <template v-slot:append>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-select
            filled
            dense
            v-model="religion"
            :options="reli"
            label="Religion"
          />
        </div>
      </div>

      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-select
            filled
            dense
            v-model="blood"
            :options="bld"
            label="Blood group"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense v-model="nation" filled label="Nationality" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense v-model="nid" filled label="NID" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm"></div>
      </div>
    </q-form>
  </div>

  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-toggle
        class="q-ml-xl"
        v-model="accept"
        label="I accept the license and terms"
      />

      <div>
        <q-btn label="Submit" type="submit" color="info" class="q-ml-xl" />
        <q-btn label="Reset" type="reset" color="primary" class="q-ml-md" />
      </div>
    </q-form>
  </div>
</template>



<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const fullname = ref(null);
    const cmpname = ref(null);
    const fathername = ref(null);
    const mothername = ref(null);
    const sopusename = ref(null);
    const mary = ref(null);
    const pob = ref(null);
    const offcontact = ref(null);
    const emercontact = ref(null);
    const permanent = ref(null);
    const present = ref(null);
    const gender = ref(null);
    const peremail = ref(null);
    const offemail = ref(null);
    const religion = ref(null);
    const blood = ref(null);
    const nation = ref(null);
    const nid = ref(null);

    const accept = ref(false);

    return {
      fullname,
      cmpname,
      fathername,
      mothername,
      sopusename,
      mary,
      accept,
      pob,
      offcontact,
      emercontact,
      permanent,
      present,
      gender,
      peremail,
      offemail,
      religion,
      blood,
      nation,
      nid,

      date: ref("2019/02/01"),
      model: ref(null),
      options: ["Married", "Unmarried"],
      text: ref(""),
      gen: ["Male", "Female"],
      reli: ["Muslim", "Hindu", "Buddhist"],
      bld: [
        "A+(ve)",
        "A-(ve)",
        "B+(ve)",
        "B-(ve)",
        "O+(ve)",
        "O-(ve)",
        "AB+(ve)",
        "AB-(ve)",
      ],

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-5",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        fullname.value = null;
        cmpname.value = null;
        fathername.value = null;
        mothername.value = null;
        sopusename.value = null;
        mary.value = null;
        pob.value = null,
        offcontact.value = null;
        emercontact.value = null;
        permanent.value = null;
        present.value = null;
        gender.value = null;
        peremail.value = null;
        offemail.value = null;
        religion.value = null;
        blood.value = null;
        nation.value = null;
        nid.value = null;

        accept.value = false;
      },
    };
  },
};
</script>
