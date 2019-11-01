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
    async onSubmit(product) {
      const res = await this.addProduct(product);
      if (res.data.data.ProductAdd.id) {
        this.$router.push(`/admin/product/${res.data.data.ProductAdd.id}`);
      }
    },
  },
};
</script>
