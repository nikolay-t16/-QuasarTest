<template>
  <div class="q-pa-md">
    <product-form
            @submit="onSubmit"
    >
    </product-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProductForm from '../../../components/admin/ProductForm';

export default {
  name: 'AddProduct',
  components: {
    ProductForm,
  },
  props: ['id'],
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
};
</script>
