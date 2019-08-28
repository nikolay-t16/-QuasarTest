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
            <q-td  v-for="item in columns" v-bind:key="item.name" :props="props">
              {{ props.row[item.name] }}
              <q-popup-edit v-model="props.row[item.name]">
                <q-input v-model="props.row[item.name]" dense autofocus counter/>
              </q-popup-edit>
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
  props: ['data', 'columns'],
  data() {
    return {};
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
