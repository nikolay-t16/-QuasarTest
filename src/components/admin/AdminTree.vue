<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="simple"
      node-key="label"
      default-expand-all
    >
      <template v-slot:header-root="prop">
        <div class="row items-center">
            {{ prop.node.label }}
        </div>
      </template>

      <template v-slot:header-product="prop">
        <div class="row items-center">
          <q-icon name="local_atm" size="28px"/>
          {{ prop.node }}
          <q-icon name="edit" size="20px"/>
          <q-icon name="close" size="20px"/>
        </div>
      </template>

      <template v-slot:header-rubric="prop">
        <div class="row items-center">
          <q-icon name="list" size="28px"/>
          {{ prop.node.label }}
          <q-icon name="add" @click="onAddRubricClick(prop.node.data)" size="20px"/>
          <q-icon name="edit" @click="onEditRubricClick(prop.node.data)" size="20px"/>
          <q-icon name="close" @click="onRemoveRubricClick(prop.node.data)" size="20px"/>
        </div>
      </template>

      <template v-slot:body-toggle="prop">
        <p class="text-caption">{{ prop.node.caption }}</p>
        <q-toggle v-model="prop.node.enabled" label="I agree to the terms and conditions" />
      </template>
    </q-tree>
  </div>
</template>

<script>
export default {
  name: 'AdminTree',
  props: ['simple'],
  data() {
    return {};
  },
  methods: {
    onAddRubricClick(item) {
      this.$emit('addRubricClick', item.rubric_id);
    },
    onEditRubricClick(item) {
      this.$emit('editRubricClick', item.rubric_id);
    },
    onRemoveRubricClick(item) {
      this.$emit('removeRubricClick', item);
    },
  },
};
</script>
