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
      {{select}}
      {{rubric}}
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const createDefaultRubric = () => ({
  name: '',
  sort: 0,
  parentId: 0,
  show: false,
});

export default {
  name: 'RubricForm',
  props: ['data'],
  data() {
    return {
      select: {},
      rubric: createDefaultRubric(),
    };
  },
  async created() {
    await this.getAllRubrics();
  },
  computed: {
    ...mapGetters('rubric', ['allRubrics', '[allFields']),
    ...mapGetters('catalog', ['rubricTree']),
    title() {
      if (this.data) return `Редактирование рубрики - ${this.rubric.name}`;
      return 'Добавить рубрику';
    },
    selectOptions() {
      return this.getSubRubrics(this.rubricTree[0]);
    },
  },
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
  methods: {
    ...mapActions('rubric', ['getAllRubrics']),
    onSubmit() {
      this.rubric.sort = +this.rubric.sort;
      this.rubric.parentId = this.select.value ? +this.select.value : 0;
      this.$emit('submit', this.rubric);
    },
    onReset() {
      this.rubric = createDefaultRubric();
      Object.assign(this.rubric, this.data);
    },
    getSubRubrics(root, pref = '') {
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
    },
  },
};
</script>

<style>
  .rubric-form__input {
    max-width: 400px;
  }
</style>
