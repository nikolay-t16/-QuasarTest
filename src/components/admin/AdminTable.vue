<template>
  <div class="admin-table">
    <div class="q-pa-md">
      <q-table
              title="Товары"
              :data="data"
              :columns="columns"
              row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}123
              <q-popup-edit v-model="props.row.name">
                <q-input v-model="props.row.name" dense autofocus counter/>
              </q-popup-edit>
            </q-td>
            <q-td key="id" :props="props">
              {{ props.row.id }}
              <q-icon name='home' />
            </q-td>
            <q-td key="edit" :props="props">
              <q-icon name='home' />
              {{ props.row.id }}
            </q-td>
            <q-td>
              <q-icon name='edit' class="admin-table__icon"/>
            </q-td>
            <q-td>
              <q-icon name='close' class="admin-table__icon"/>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminTable',
  data() {
    return {
      columns: [
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
          name: 'id',
          label: 'Id',
          field: 'id',
          sortable: true,
        },
      ],
      data: [
        { name: 'test1', id: 1 },
        { name: 'test2', id: 2 },
      ],
    };
  },
};
</script>

<style scoped>
  .admin-table thead {
    background-color: var(--q-color-primary);
    color: white;
    font-size: 21px;
  }

  .admin-table__thead-tr {
    padding: 16px 8px;
  }
  .admin-table__thead-th {
    padding: 0px 8px;
  }
  .admin-table__icon {
    font-size: 21px;
  }
</style>
