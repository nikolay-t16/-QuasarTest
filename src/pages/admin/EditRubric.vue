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
import RubricForm from '../../components/admin/RubricForm';

export default {
  name: 'EditRubric',
  components: {
    RubricForm,
  },
  props: ['id'],
  data() {
    this.getRubric({ id: this.id });
    return { };
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
