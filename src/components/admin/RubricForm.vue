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

<script>
import { mapGetters, mapActions } from 'vuex';

const createDefaultRubric = () => ({
  rubric_id: 0,
  name: '',
  sort: 0,
  parent_id: 0,
  show: false,
});

export default {
  name: 'RubricForm',
  props: ['data'],
  data() {
    return {
      select: null,
      rubric: createDefaultRubric(),
    };
  },
  async created() {
    await this.getAllRubrics();
  },
  computed: {
    ...mapGetters('rubric', ['allRubrics']),
    title() {
      if (this.data) return `Редактирование рубрики - ${this.rubric.name}`;
      return 'Добавить рубрику';
    },
    selectOptions() {
      return this.getSubRubrics(0);
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
      this.rubric.parent_id = +this.select.value;
      this.$emit('submit', this.rubric);
    },
    onReset() {
      this.rubric = createDefaultRubric();
      Object.assign(this.rubric, this.data);
    },
    getSubRubrics(id, pref = '') {
      let res = [];
      this.allRubrics.forEach((el) => {
        if (+el.parent_id === +id) {
          const item = { label: pref + el.name, value: el.rubric_id };
          if (+el.rubric_id === +this.rubric.rubric_id) {
            this.select = item;
          }
          res.push(item);
          res = res.concat(this.getSubRubrics(el.rubric_id, `${pref}--`));
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
