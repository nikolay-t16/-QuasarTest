<template>
  <q-page class="flex">
    <div class="q-pa-md q-gutter-sm">
      <admin-tree
        v-bind:data=catalogTree
        @addRubricClick="onAddRubricClick"
        @editRubricClick="onEditRubricClick"
        @removeRubricClick="onRemoveRubricClick"
        @editProductClick="onEditProductClick"
        @removeProductcClick="onRemoveProductcClick"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { Component, Vue, } from 'vue-property-decorator';
import AdminTree from '../../../components/admin/AdminTree';

@Component({
    components: {
        AdminTree
    },
    computed: {
        ...mapGetters('catalog', ['catalogTree']),
    },
    methods: {
        ...mapActions('rubric', ['removeRubric']),
        ...mapActions('product', ['removeProduct']),
        ...mapActions('catalog', ['getCatalog']),
    },
})
export default class Catalog extends Vue{

  simple: [] = [];

  created(): void {
    this.getCatalog();
  };

  deleteRubric(item): void {
      const index = this.data.indexOf(item);
      if (index > -1) {
        this.data = this.data.splice(index, 1);
      }
  };

  onAddRubricClick(): void {
      this.$router.push('/admin/rubric/new');
  };

  onEditRubricClick(id: number): void {
      this.$router.push(`/admin/rubric/${id}`);
  };

  onRemoveRubricClick(rubric: object): void {
      this.removeRubric(rubric);
  };

  onEditProductClick(id: number): void {
      this.$router.push(`/admin/product/${id}`);
  };

  onRemoveProductcClick(rubric: object): void {
      this.removeProduct(rubric);
  };
};
</script>
