<template>
  <div class="q-pa-md">
    <rubric-form
      :data="rubric"
      @submit="onSubmit"
    >
    </rubric-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import RubricForm from '../../../components/admin/RubricForm';

export default {
  name: 'EditRubric',
  components: {
    RubricForm,
  },
  props: ['id'],
  data() {
    return { };
  },
  created() {
    this.getRubric({ id: this.id });
  },
  computed: {
    ...mapGetters('rubric', ['rubric']),
  },
  methods: {
    ...mapActions('rubric', ['getRubric', 'editRubric']),
    onSubmit(rubric) {
      this.editRubric(rubric);
    },
  },
};
</script>
