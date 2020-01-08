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
import { Component, Prop, Vue, } from 'vue-property-decorator';
import RubricForm from '../../../components/admin/RubricForm';

@Component({
    components: {
        RubricForm,
    },
    methods: {
        ...mapActions('rubric', ['addRubric']),
    },
})
export default class AddRubric extends Vue {

  @Prop(Object)
    id: number = 0;

/*  data() {
    return {};
  },*/

  onSubmit(rubric): void {
      const res = this.addRubric(rubric);
      if (res.data.data.RubricAdd.id) {
        this.$router.push(`/admin/rubric/${res.data.data.RubricAdd.id}`);
      }
  };
};
</script>
