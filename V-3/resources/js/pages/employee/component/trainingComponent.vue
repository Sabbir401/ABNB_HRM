<script>
import { ref, onMounted, reactive, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

export default {
  props: {
    isOpen: Boolean,
    editStore: Object,
    updateinfo: String,
  },
  setup(props, { emit }) {
    const target = ref(null);
    const form = reactive({
      id: "",
      name: "",
      address: "",
      date: "",
      status: "",
    });

    watch(
      () => props.editStore,
      (newVal) => {
        form.id = props.editStore.id;
        form.name = props.editStore.Name;
        form.address = props.editStore.Address;
        form.date = props.editStore.Date;
        form.status = props.editStore.Status;
      }
    );

    onMounted(() => {
      onClickOutside(target, () => emit("modal-close"));
    });

    const closeModal = () => {
      emit("modal-close");
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
          emit("modal-close");
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
          emit("modal-close");
          alert("Successfully Updated");
          resetForm();
        }
      } catch (error) {
        console.error("Error updating store:", error);
        // Handle the error, e.g., display an error message
      }
    };

    const submit = () => {
      if (props.updateinfo === "Insert") {
        create();
      } else if (props.updateinfo === "Update") {
        update();
      } else {
        console.error("Invalid updateinfo value:", props.updateinfo);
      }
    };

    return {
      target,
      closeModal,
      submit,
      form,
    };
  },
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
        <form class="forms-sample" @submit.prevent="submit">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Training Title</label>
                <select
                  class="form-control"
                  name="status"
                  id=""
                  v-model="form.status"
                >
                  <option class="form-control" value="Active">--</option>
                  <option class="form-control" value="Inactive">--</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Organized By</label>
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
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Topic Covered</label>
                <textarea name="" id="" cols="30" rows="3"
                  class="form-control"
                  placeholder="Address ..."
                  v-model="form.address" ></textarea>
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
                  v-model="form.address"
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
                  v-model="form.address"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Remarks</label>
                <textarea name="" id="" cols="30" rows="3"
                  class="form-control"
                  placeholder="Address ..."
                  v-model="form.address" ></textarea>
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
