<script setup>
import {
  ref,
  onMounted,
  watch,
  defineProps,
  getCurrentInstance,
} from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const { isOpen, editStore, updateinfo, EID } = defineProps([
  "isOpen",
  "editStore",
  "updateinfo",
  "EID",
]);

const target = ref(null);
const error = ref([]);
const scales = ref([]);

const form = ref({
  eid: EID,
  traningTitle: "",
  organizedBy: "",
  topicCovered: "",
  fromDate: "",
  toDate: "",
  remarks: "",
});

const instance = getCurrentInstance();

const getData = async () => {
  try {
    const responseScale = await axios.get("/api/scale");
    scales.value = responseScale.data;
    if(editStore){
        form.value = {
            traningTitle: editStore.Training_Title,
            organizedBy: editStore.Organized_By,
            topicCovered: editStore.Topic_Covered,
            fromDate: editStore.From_Date,
            toDate: editStore.To_Date,
            remarks: editStore.Remarks,
        }
    }
  } catch (err) {
    error.value = err.message || "Error fetching data";
  } finally {
  }
};

onMounted(() => {
  onClickOutside(target, () => instance.emit("modal-close")), getData();
});

const closeModal = () => {
  instance.emit("modal-close");
};

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = "";
  });
};

const create = async () => {
  try {
    const response = await axios.post("/api/training", form.value);
    if (response.data.success) {
      instance.emit("modal-close");
      alert("Successfully Inserted");
      resetForm();
    }
  } catch (error) {
    console.error("Error creating store:", error);
    // Handle the error, e.g., display an error message
  }
};

const update = async () => {
  try {
    const response = await axios.put(`/api/store/${form.id}`, form);
    if (response.data.success) {
      instance.emit("modal-close");
      alert("Successfully Updated");
      resetForm();
    }
  } catch (error) {
    console.error("Error updating store:", error);
    // Handle the error, e.g., display an error message
  }
};

const submit = () => {
  if (updateinfo === "Save") {
    create();
  } else if (updateinfo === "Update") {
    update();
  } else {
    console.error("Invalid updateinfo value:", updateinfo);
  }
};
</script>

<template>
  <div
    v-if="isOpen"
    class="modal-mask col-md-6 grid-margin stretch-card"
    ref="target"
  >
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Training Information</h4>
        <form class="forms-sample" @submit.prevent="create">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Training Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.traningTitle"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Organized By</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Organization Name"
                  v-model="form.organizedBy"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Topic Covered</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  class="form-control"
                  placeholder="Address ..."
                  v-model="form.topicCovered"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">From Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.fromDate"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">To Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.toDate"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Remarks</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  class="form-control"
                  placeholder=""
                  v-model="form.remarks"
                ></textarea>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary mr-2">
            {{ updateinfo }}
          </button>
          <button class="btn btn-dark" @click.stop="closeModal">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#BrandModal,
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 50px;
  left: auto;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #620d0d;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
