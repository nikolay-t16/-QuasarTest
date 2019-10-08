<template>
  <q-card class="product-form">
    <q-card-section>
      <div class="text-h6">Редактирование товара - {{product.name}}</div>
    </q-card-section>
    <q-card-section>
      <q-form
              id="product-form"
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
      >
        <q-input
                class="product-form__input"
                filled
                v-model="product.name"
                label="Название"
        />
        <q-input
                class="product-form__input"
                filled
                v-model="product.code"
                label="Артикль"
        />
        <q-input
                class="product-form__input"
                filled
                v-model="product.price"
                label="Цена"
        />
        <q-toggle v-model="product.show" label="Активен" />
        <div>
          <q-btn label="Сохранить" type="submit" color="primary"/>
          <q-btn label="Отменить" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
const createDefaultProduct = () => ({
  name: '',
  code: '',
  price: '',
  show: false,
});

export default {
  name: 'ProductForm',
  props: ['data'],
  data() {
    return {
      product: createDefaultProduct(),
    };
  },
  watch: {
    data: {
      immediate: true,
      handler(value) {
        console.log('watch');
        console.log(value);
        if (value) {
          this.product = createDefaultProduct();
          Object.assign(this.product, value);
        }
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.product);
    },
    onReset() {
      this.product = createDefaultProduct();
      Object.assign(this.product, this.data);
    },
  },

};
</script>

<style type="scss">
  .product-form__input {
    max-width: 400px;
  }

</style>
