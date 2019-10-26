<template>
  <q-page class="flex justify-center">
    <AdminTable
      v-bind:data="allProducts"
      v-bind:columns=columns
      title="Товары"
      fieldId="id"
      @rowAction="rowAction"
      @rowEdit="rowEdit"
      @addClick="onAddClick"
    ></AdminTable>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminTable from '../../components/admin/AdminTable';

export default {
  name: 'Products',
  components: { AdminTable },
  data() {
    return {
      columns: [
        {
          name: 'id',
          label: 'Id',
          field: 'id',
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
          action: item => this.$router.push(`/admin/product/${item.id}`),
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
          action: item => this.$store.dispatch('products/removeProduct', item),
        },
      ],
    };
  },
  async created() {
    await this.getAllProducts();
  },
  computed: {
    ...mapGetters('products', ['allProducts']),
  },
  methods: {
    ...mapActions('products', ['getAllProducts']),
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
      this.$store.dispatch('products/editProductField', { id, field, value });
    },
    onAddClick() {
      this.$router.push('/admin/product/new');
    },
  },
};
</script>
