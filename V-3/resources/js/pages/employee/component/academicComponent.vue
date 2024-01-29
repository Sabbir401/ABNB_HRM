<script setup>
import { ref, onMounted, reactive, watch, defineProps, getCurrentInstance } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();
const { isOpen, editStore, updateinfo } = defineProps(["isOpen", "editStore", "updateinfo"]);

const target = ref(null);

const form = reactive({
  eid: store.state.employeeId,
  levelofEdu: "",
  degree: "",
  education: "",
  group: "",
  instituteName: "",
  scale: "",
  result: "",
  yop: "",
  achievement: "",
});

const instance = getCurrentInstance();

watch(
  () => editStore,
  (newVal) => {
    form.id = newVal.id;
  }
);

onMounted(() => {
  onClickOutside(target, () => instance.emit("modal-close"));
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
    const response = await axios.post("/api/store", form);
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
    const response = await axios.put(`api/store/${form.id}`, form);
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
  if (updateinfo === "Insert") {
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
        <h4 class="card-title">Academic Information</h4>
        <form class="forms-sample" @submit.prevent="submit">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Level of Education</label>
                <select
                  class="form-control"
                  name="status"
                  id=""
                  v-model="form.de"
                >
                  <option class="form-control" value="Active">SSC</option>
                  <option class="form-control" value="Inactive">HSC</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Exam/Degree Title</label>
                <select
                  class="form-control"
                  name="status"
                  id=""
                  v-model="form.status"
                >
                  <option class="form-control" value="Active">Dhaka</option>
                  <option class="form-control" value="Inactive">Cumilla</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Institute</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.address"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Board</label>
                <select
                  class="form-control"
                  name="status"
                  id=""
                  v-model="form.status"
                >
                  <option class="form-control" value="Active">Dhaka</option>
                  <option class="form-control" value="Inactive">Cumilla</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Major Group</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.address"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Scale</label>
                <select
                  class="form-control"
                  name="status"
                  id=""
                  v-model="form.status"
                >
                  <option class="form-control" value="Active">
                    Out of 4.00
                  </option>
                  <option class="form-control" value="Active">
                    Out of 5.00
                  </option>
                  <option class="form-control" value="Inactive">
                    Division
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Result</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.address"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Years of Passing</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Address"
                  v-model="form.address"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Acheivement</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  class="form-control"
                  placeholder="Address ..."
                  v-model="form.address"
                ></textarea>
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
                  placeholder="Address ..."
                  v-model="form.address"
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
