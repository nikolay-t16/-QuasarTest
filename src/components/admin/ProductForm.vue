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
            <admin-tree
              v-bind:data=rubricTree
              :show-checkbox="true"
              v-bind:checked-rubrics="checkedRubrics"
              @changeCheckedRubrics="onChangeCheckedRubrics"
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

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductData, { productDataFabric } from '../../../common/data/interface/ProductData';
import AdminTree from './AdminTree';

interface ProductFormData extends ProductData {
    rubricsId?: number[];
}

@Component({
    components: {
        AdminTree
    },
    watch: {
        data: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.product = productDataFabric();
                    Object.assign(this.product, value);
                }
            },
        },
    },
    computed: {
        ...mapGetters('catalog', ['rubricTree', 'catalogTree']),
    },
    methods: {
        ...mapActions('rubric', ['getAllRubrics']),
    },
})
export default class ProductForm extends Vue {
  @Prop(Object)
  data: ProductData = productDataFabric();

   product : ProductFormData = productDataFabric();

   saveAndExit: boolean = false;

  created(): void {
    this.getAllRubrics();
  };


  get title(): string {
      if (this.data) return `Редактирование товара - ${this.product.name}`;
      return 'Добавить товар';
  };

  get checkedRubrics(): number[] {
      if (this.product.rubrics) {
        return [];
      }
      return this.product.rubrics.map(item => +item.rubricId);
  };


  onSubmit(): void {
    this.product.price = +this.product.price.toFixed(2);
    this.$emit('submit', this.product, this.saveAndExit);
    this.saveAndExit = false;
  };
  onReset(): void {
    this.product = productDataFabric();
    Object.assign(this.product, this.data);
  };
  onPriceChange(e): void {
    this.product.price = e.target.value ? +parseFloat(e.target.value).toFixed(2) : 0;
  };
  onClickSaveAndExit() : void {
    this.saveAndExit = true;
  };
  onChangeCheckedRubrics(checkedRubrics): void {
    this.product.rubrics = checkedRubrics.map(item => ({ rubricId: item }));
  };
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
