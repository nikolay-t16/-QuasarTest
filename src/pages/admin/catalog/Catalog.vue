<template>
  <q-page class="flex">
    <AdminTree
      v-bind:simple=rubricTree
      @addRubricClick="onAddRubricClick"
      @editRubricClick="onEditRubricClick"
      @removeRubricClick="onRemoveRubricClick"
      @editProductClick="onEditProductClick"
      @removeProductcClick="onRemoveProductcClick"
    >
    </AdminTree>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminTree from '../../../components/admin/AdminTree';
import { TYPE_ROOT, createTree } from '../../../helpers/Catalog';

console.log(TYPE_ROOT);
export default {
  name: 'Catalog',
  components: { AdminTree },
  data() {
    return {
      simple: [],
    };
  },
  computed: {
    ...mapGetters('rubric', ['allRubrics']),
    ...mapGetters('product', ['allProducts']),
    rubricTree() {
      return createTree(this.allRubrics, this.allProducts);
    },
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
};
</script>
