<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))

</script>

<template>
    <div v-if="isOpen" class="modal-mask col-md-6 grid-margin stretch-card" ref="target">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Brand Info</h4>
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="exampleInputUsername1">Band ID</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Brand Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                    </div>

                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-dark" @click.stop="emit('modal-close')">Cancel</button>
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
    top: 100;
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
