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
import { Component, Vue, } from 'vue-property-decorator';
import ProductForm from '../../../components/admin/ProductForm';

@Component({
    components: {
        ProductForm,
    },
    methods: {
        ...mapActions('product', ['addProduct']),
    },
})
export default class AddProduct extends Vue{

    async onSubmit(product, saveAndExit){
      const res = await this.addProduct(product);
      if (res.data.data.ProductAdd.id) {
        if (saveAndExit) {
          this.$router.go(-1);
        } else {
          this.$router.push(`/admin/product/${res.data.data.ProductAdd.id}`);
        }
      }
    };
};
</script>
