<template>
  <div class="q-pa-md">
    <product-form
      :data="product"
      @submit="onSubmit"
    >
    </product-form>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import Vue from 'vue';
import ProductForm from '../../../components/admin/ProductForm';


export default Vue.extend({
  name: 'EditProduct',
  components: {
    ProductForm,
  },
  props: ['id'],
  data() {
    this.getProduct({ id: this.id });
    return { };
  },
  computed: {
    ...mapGetters('product', ['product']),
  },
  methods: {
    ...mapActions('product', ['getProduct', 'editProduct']),
    onSubmit(product, saveAndExit) {
      product.price = +product.price;
      if (this.editProduct(product) && saveAndExit) {
        this.$router.go(-1);
      }
    },
  },
});
</script>

<style>

</style>
