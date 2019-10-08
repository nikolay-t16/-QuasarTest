<template>
  <div class="q-pa-md">
    <product-form
      :data="product"
      @submit="onSubmit"
    >
    </product-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductForm from '../../components/admin/ProductForm';

export default {
  name: 'Product',
  components: {
    ProductForm,
  },
  props: ['id'],
  data() {
    this.getProduct({ product_id: this.id });
    return { };
  },
  computed: {
    ...mapGetters('products', ['product']),
  },
  methods: {
    ...mapActions('products', ['getProduct', 'editProduct']),
    onSubmit(product) {
      this.editProduct(product);
    },
  },
};
</script>

<style>

</style>
