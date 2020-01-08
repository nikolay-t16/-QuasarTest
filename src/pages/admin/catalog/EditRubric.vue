<template>
  <div class="q-pa-md">
    <rubric-form
      :data="rubric"
      @submit="onSubmit"
    >
    </rubric-form>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { Component, Prop, Vue, } from 'vue-property-decorator';
import RubricForm from '../../../components/admin/RubricForm';

@Component({
    components: {
        RubricForm,
    },
    computed: {
        ...mapGetters('rubric', ['rubric']),
    },
    methods: {
        ...mapActions('rubric', ['getRubric', 'editRubric']),
    },
})
export default class EditRubric extends Vue{

  @Prop(Object)
  id: number = 0;

  created():void {
    this.getRubric({ id: this.id });
  };

  onSubmit(rubric): void {
      this.editRubric(rubric);
  };
};
</script>
