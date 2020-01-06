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
import Vue from 'vue';
import AdminTree from '../../../components/admin/AdminTree';


export default Vue.extend({
  name: 'Catalog',
  components: { AdminTree },
  data() {
    return {
      simple: [],
    };
  },
  computed: {
    ...mapGetters('catalog', ['catalogTree']),
  },
  async created() {
    await this.getCatalog();
  },
  methods: {
    ...mapActions('rubric', ['removeRubric']),
    ...mapActions('product', ['removeProduct']),
    ...mapActions('catalog', ['getCatalog']),
    deleteRubric(item) {
      const index = this.data.indexOf(item);
      if (index > -1) {
        this.data = this.data.splice(index, 1);
      }
    },
    onAddRubricClick() {
      this.$router.push('/admin/rubric/new');
    },
    onEditRubricClick(id) {
      this.$router.push(`/admin/rubric/${id}`);
    },
    onRemoveRubricClick(rubric) {
      this.removeRubric(rubric);
    },
    onEditProductClick(id) {
      this.$router.push(`/admin/product/${id}`);
    },
    onRemoveProductcClick(rubric) {
      this.removeProduct(rubric);
    },
  },
});
</script>
