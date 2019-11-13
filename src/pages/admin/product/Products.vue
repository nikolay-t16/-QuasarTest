<template>
  <q-page class="flex justify-center">
    <admin-table
      v-bind:data="allProducts"
      v-bind:columns=columns
      title="Товары"
      fieldId="productId"
      @rowAction="rowAction"
      @rowEdit="rowEdit"
      @addClick="onAddClick"
    ></admin-table>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminTable from '../../../components/admin/AdminTable';

export default {
  name: 'Products',
  components: { AdminTable },
  data() {
    return {
      columns: [
        {
          name: 'id',
          label: 'Id',
          field: 'productId',
          align: 'left',
          sortable: true,
          style: 'width: 40px',
        },
        {
          name: 'code',
          label: 'Код',
          field: 'code',
          align: 'left',
          sortable: true,
          edit: true,
          style: 'width: 40px',
        },
        {
          name: 'show',
          label: 'Активность',
          field: 'show',
          align: 'left',
          sortable: true,
          edit: true,
          isBool: true,
        },
        {
          name: 'isHit',
          label: 'Хит',
          field: 'isHit',
          align: 'left',
          sortable: true,
          edit: true,
          isBool: true,
        },
        {
          name: 'isNew',
          label: 'Новика',
          field: 'isNew',
          align: 'left',
          sortable: true,
          edit: true,
          isBool: true,
        },
        {
          name: 'name',
          label: 'Название',
          field: 'name',
          align: 'left',
          sortable: true,
          edit: true,
          style: 'width: 500px',
        },
        {
          name: 'price',
          label: 'Цена',
          field: 'price',
          sortable: true,
          edit: true,
          align: 'left',
        },
        {
          name: 'edit',
          label: '',
          field: 'edit',
          isAction: true,
          icon: 'edit',
          confirm: false,
          action: item => this.$router.push(`/admin/product/${item.productId}`),
        },
        {
          name: 'delete',
          label: '',
          field: 'delete',
          isAction: true,
          icon: 'close',
          confirm: true,
          confirmText(item) {
            return `Вы уверены что хотите удалить "${item.name}"?`;
          },
          action: item => this.$store.dispatch('product/removeProduct', item),
        },
      ],
    };
  },
  async created() {
    await this.getAllProducts();
  },
  computed: {
    ...mapGetters('product', ['allProducts']),
  },
  methods: {
    ...mapActions('product', ['getAllProducts', 'removeProduct', 'editProductField']),
    deleteProduct(item) {
      const index = this.data.indexOf(item);
      if (index > -1) {
        this.data = this.data.splice(index, 1);
      }
    },
    rowAction(action, item) {
      action(item);
    },
    rowEdit(id, field, value) {
      this.editProductField({ id, field, value });
    },
    onAddClick() {
      this.$router.push('/admin/product/new');
    },
  },
};
</script>
