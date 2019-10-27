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
import AdminTree from '../../components/admin/AdminTree';

const TYPE_ROOT = 'root';
const TYPE_RUBRIC = 'rubric';
const TYPE_PRODUCT = 'product';

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
      const node = this.createTreeNode({
        name: 'Каталог',
        id: 0,
      },
      TYPE_ROOT);
      return [
        node,
      ];
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
    createTreeNode(data, type) {
      let icon = '';
      if (type === TYPE_PRODUCT) { icon = 'local_atm'; }
      if (type === TYPE_RUBRIC) { icon = 'list'; }
      return {
        data,
        icon,
        label: data.name,
        header: type,
        children: type !== TYPE_PRODUCT ? this.getNodeChildren(data) : [],
      };
    },
    getNodeChildren(data) {
      const res = [];
      this.allRubrics.forEach((el) => {
        if (+el.parent_id === +data.id) {
          res.push(this.createTreeNode(el, TYPE_RUBRIC));
        }
      });

      if (data.products) {
        const productsId = [];
        data.products.forEach((el) => {
          productsId.push(+el.id);
        });
        this.allProducts.forEach((el) => {
          if (productsId.indexOf(+el.id) >= 0) {
            res.push(this.createTreeNode(el, TYPE_PRODUCT));
          }
        });
      }
      return res;
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
