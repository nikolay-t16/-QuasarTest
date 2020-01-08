<template>
  <q-card class="rubric-form">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>
    <q-card-section>
      <q-form
              id="rubric-form"
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
      >
        <q-input
                class="rubric-form__input"
                filled
                v-model="rubric.name"
                label="Название"
        />
        <q-input
                class="rubric-form__input"
                filled
                type="number"
                v-model="rubric.sort"
                label="Индекс сортировки"
        />
        <q-select
                class="rubric-form__input"
                filled v-model="select"
                :options="selectOptions"
                label="Родительская рубрика"
        />
        <q-toggle v-model="rubric.show" label="Активен" />
        <div v-if="data">
          <q-btn label="Сохранить" type="submit" color="primary"/>
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
import RubricData, { rubricDataFabric } from '../../../common/data/interface/RubricData';

const createDefaultRubric = () => ({
  name: '',
  sort: 0,
  parentId: 0,
  show: false,
});

@Component({
    watch: {
        data: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.rubric = createDefaultRubric();
                    Object.assign(this.rubric, value);
                }
            },
        },
    },
    computed: {
        ...mapGetters('rubric', ['allRubrics', 'allFields']),
        ...mapGetters('catalog', ['rubricTree']),
    },
    methods: {
        ...mapActions('rubric', ['getAllRubrics']),
    },
})
export default class RubricForm extends Vue {
    @Prop(Object)
    data: RubricData = rubricDataFabric();

    select: string = '';

    rubric: RubricData = rubricDataFabric();

  created(): void {
    this.getAllRubrics();
  };

  get title(): string {
      if (this.data) return `Редактирование рубрики - ${this.rubric.name}`;
      return 'Добавить рубрику';
  };
  get selectOptions(): number[] {
      return this.getSubRubrics(this.rubricTree[0]);
  };

  onSubmit(): void {
      this.rubric.sort = +this.rubric.sort;
      this.rubric.parentId = this.select.value ? +this.select.value : 0;
      this.$emit('submit', this.rubric);
  };

  onReset(): void {
      this.rubric = rubricDataFabric();
      Object.assign(this.rubric, this.data);
  };

  getSubRubrics(root, pref = ''): number[] {
      const res = [];
      root.children.forEach((el) => {
        const selectItem = {
          label: pref + el.label,
          value: el.data[this.allFields.FIELD_ID],
        };
        if (+el.data[this.allFields.FIELD_ID] === +this.rubric[this.allFields.FIELD_PARENT_ID]) {
          this.select = selectItem;
        }
        res.push(selectItem);
        const children = this.getSubRubrics(el, `${pref}__`);
        if (children.length > 0) {
          res.push(...this.getSubRubrics(el, `${pref}__`));
        }
      });
      return res;
  };
};
</script>

<style>
  .rubric-form__input {
    max-width: 400px;
  }
</style>
