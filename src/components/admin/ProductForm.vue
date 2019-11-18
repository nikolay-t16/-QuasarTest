<template>
  <q-card class="product-form">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
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
                @change="onPriceChange"
                label="Цена"
        />
        <div class="flex">
          <label class="product-form__q-tree-label">Рубрики: </label>
            <AdminTree
              v-bind:data=rubricTree
              :show-checkbox="true"
            />
        </div>
        <div class="d-flex column">
          <q-toggle v-model="product.show" label="Активен" />
          <q-toggle v-model="product.isNew" label="Новинка" />
          <q-toggle v-model="product.isHit" label="Хит продаж" />
        </div>
        <div v-if="data">
          <q-btn label="Сохранить" type="submit" color="primary"/>
          <q-btn
            class="q-ml-sm"
            label="Сохранить и выйти"
            type="submit"
            color="primary"
            @click="onClickSaveAndExit"
          />
          <q-btn label="Отменить" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        <div v-else>
          <q-btn label="Добавить" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminTree from './AdminTree';

const createDefaultProduct = () => ({
  name: '',
  code: '',
  price: 0,
  show: false,
  isHit: false,
  isNew: false,
});

export default {
  name: 'ProductForm',
  props: ['data'],
  components: { AdminTree },
  data() {
    return {
      product: createDefaultProduct(),
      saveAndExit: false,
    };
  },
  created() {
    this.getAllRubrics();
  },
  computed: {
    ...mapGetters('catalog', ['rubricTree', 'catalogTree']),
    title() {
      if (this.data) return `Редактирование товара - ${this.product.name}`;
      return 'Добавить товар';
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(value) {
        if (value) {
          this.product = createDefaultProduct();
          Object.assign(this.product, value);
        }
      },
    },
  },
  methods: {
    ...mapActions('rubric', ['getAllRubrics']),
    onSubmit() {
      this.product.price = parseFloat(this.product.price).toFixed(2);
      this.$emit('submit', this.product, this.saveAndExit);
      this.saveAndExit = false;
    },
    onReset() {
      this.product = createDefaultProduct();
      Object.assign(this.product, this.data);
    },
    onPriceChange(e) {
      this.product.price = e.target.value ? parseFloat(e.target.value).toFixed(2) : 0;
    },
    onClickSaveAndExit() {
      this.saveAndExit = true;
    },
  },

};
</script>

<style>
  .product-form__input {
    max-width: 400px;
  }

  .product-form__q-tree-label {
    padding: 6px 0 0 13px;
  }
</style>
