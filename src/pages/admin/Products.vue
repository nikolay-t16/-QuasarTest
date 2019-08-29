<template>
  <q-page class="flex justify-center">
    <AdminTable v-bind:data=data v-bind:columns=columns></AdminTable>
  </q-page>
</template>

<script>
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
          sortable: true,
          align: 'left',
        },
        {
          // unique id (used by row-key, pagination.sortBy, ...)
          name: 'name',
          // label for header
          label: 'Dessert (100g serving)',
          // row Object property to determine value for this column
          field: 'name',
          // OR field: row => row.some.nested.prop
          // (optional) if we use visible-columns, this col will always be visible
          required: true,
          // (optional) alignment
          align: 'left',
          // (optional) tell QTable you want this column sortable
          sortable: true,
          // (optional) compare function if you have
          // some custom data or want a specific way to compare two rows
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
          format: val => `${val}%`,
          // v0.17.9+; if using scoped slots, apply this yourself instead
          style: 'width: 500px',
          classes: 'my-special-class',
        },
        {
          name: 'price',
          label: 'Цена',
          field: 'price',
          sortable: true,
          align: 'left',
        },
      ],
      data: [
        { name: 'test1', id: 1, price: 0.1 },
        { name: 'test2', id: 2, price: 0.1 },
      ],
    };
  },
};
</script>

<style scoped>

</style>
