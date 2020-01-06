<template>
  <div class="q-pa-md">
    <product-form
            @submit="onSubmit"
    >
    </product-form>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Vue from 'vue';
import ProductForm from '../../../components/admin/ProductForm';


export default Vue.extend({
  name: 'AddProduct',
  components: {
    ProductForm,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions('product', ['addProduct']),
    async onSubmit(product, saveAndExit) {
      const res = await this.addProduct(product);
      if (res.data.data.ProductAdd.id) {
        if (saveAndExit) {
          this.$router.go(-1);
        } else {
          this.$router.push(`/admin/product/${res.data.data.ProductAdd.id}`);
        }
      }
    },
  },
});
</script>
