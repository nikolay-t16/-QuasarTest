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
import { Component, Prop, Vue, } from 'vue-property-decorator';
import ProductForm from '../../../components/admin/ProductForm';

@Component({
    components: {
        ProductForm,
    },
    computed: {
        ...mapGetters('product', ['product']),
    },
    methods: {
        ...mapActions('product', ['getProduct', 'editProduct']),
    },
})
export default class EditProduct extends Vue{

  @Prop(Object)
  id: number = 0;

  created(): void{
    this.getProduct({ id: this.id });
  };

  onSubmit(product, saveAndExit): void {
      product.price = +product.price;
      if (this.editProduct(product) && saveAndExit) {
        this.$router.go(-1);
      }
  };
};
</script>

<style>

</style>
