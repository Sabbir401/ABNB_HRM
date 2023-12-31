<template>
  <div class="container q-my-xl q-mx-xl">
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="Company" label="Company Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="name" label="Employee ID" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="name" label="Card No" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="name" label="Full Name" />
        </div>
      </div>

      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="Company" label="Father's Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="name" label="Mother's Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="name" label="Spouse Name" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-select
            filled
            dense
            v-model="model"
            :options="options"
            label="Marital Status"
          />
        </div>
      </div>

      <div class="row bg-white q-mt-sm">
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="Company" label="Place of Birth" />
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
          <q-input dense filled v-model="name" label="Official Contact" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input dense filled v-model="name" label="Emergency Contact" />
        </div>
      </div>

      <div class="row bg-white">
        <div class="col-lg-6 col-md-6 col-sm-12 q-px-sm">
          <q-input
            v-model="text"
            filled
            dense
            type="textarea"
            label="Permanent Address"
          />
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 q-px-sm">
          <q-input
            v-model="text"
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
            v-model="model"
            :options="gender"
            label="Gender"
          />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
          <q-input filled dense v-model="email" type="email" label="Personal Email">
            <template v-slot:append>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
            <q-input filled dense v-model="email" type="email" label="Official Email">
            <template v-slot:append>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 q-px-sm">
            <q-select
            filled
            dense
            v-model="model"
            :options="religion"
            label="Religion"
          />
        </div>
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

    const name = ref(null);
    const age = ref(null);
    const comapny = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      comapny,
      accept,

      date: ref("2019/02/01"),
      model: ref(null),
      options: ["Married", "Unmarried"],
      text: ref(""),
      gender: ["Male", "Female"],
      religion: ["Muslim", "Hindu", "Buddhist"],

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
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
