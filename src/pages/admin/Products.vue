<template>
  <q-page class="flex justify-center">
    <AdminTable></AdminTable>
  </q-page>
</template>

<script>
import AdminTable from '../../components/admin/AdminTable';

export default {
  name: 'Products',
  components: { AdminTable },
};
</script>

<style scoped>

</style>
