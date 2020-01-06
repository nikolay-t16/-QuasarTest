<template>
  <div class="q-pa-md">
    <rubric-form
            @submit="onSubmit"
    >
    </rubric-form>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Vue from 'vue';
import RubricForm from '../../../components/admin/RubricForm';


export default Vue.extend({
  name: 'AddRubric',
  components: {
    RubricForm,
  },
  props: ['id'],
  data() {
    return {};
  },
  methods: {
    ...mapActions('rubric', ['addRubric']),
    async onSubmit(rubric) {
      const res = await this.addRubric(rubric);
      if (res.data.data.RubricAdd.id) {
        this.$router.push(`/admin/rubric/${res.data.data.RubricAdd.id}`);
      }
    },
  },
});
</script>
