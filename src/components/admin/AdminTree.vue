<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="simple"
      node-key="label"
    />
  </div>
</template>

<script>
export default {
  name: 'AdminTree',
  props: ['simple'],
  data() {
    return {};
  },
};
</script>
