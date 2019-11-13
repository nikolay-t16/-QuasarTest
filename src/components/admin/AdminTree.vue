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
          <q-icon
            class="q-tree__icon q-mr-sm"
            name="local_atm"
            title="Товар"
          />
          <div
            :class="
            prop.node.data.show ?
            '' :
            'admin-tree_disable'
            "
          >
            {{ prop.node.label }}
          </div>
          <q-icon
            class="admin-tree_clicble"
            name="edit"
            size="md"
            @click="onEditProductClick(prop.node.data)"
            title="Редактировать"
          />
          <q-icon
            class="admin-tree_clicble"
            name="close"
            size="md"
            @click="onRemoveProductcClick(prop.node.data)"
            title="Удалить"
          />
        </div>
      </template>

      <template v-slot:header-rubric="prop">
        <div class="row items-center">
          <q-icon class="q-tree__icon q-mr-sm" name="list" size="lg" title="Рубрика"/>
          <div
            :class="
            prop.node.data.show ?
            '' :
            'admin-tree_disable'
            "
          >
            {{ prop.node.label }}
          </div>
          <q-icon
            class="admin-tree_clicble"
            name="add"
            @click="onAddRubricClick(prop.node.data)"
            size="md"
            title="Добавить рубрику"/>
          <q-icon
            class="admin-tree_clicble"
            name="edit"
            @click="onEditRubricClick(prop.node.data)"
            size="md"
            title="Редактировать"
          />
          <q-icon
            class="admin-tree__clicble"
            name="close"
            @click="onRemoveRubricClick(prop.node.data)"
            size="md"
            title="Удалить"
            cli
          />
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
import { mapGetters } from 'vuex';

export default {
  name: 'AdminTree',
  props: ['simple'],
  data() {
    return {};
  },
  methods: {
    onAddRubricClick(item) {
      this.$emit('addRubricClick', item[this.allRubricFields.FIELD_ID]);
    },
    onEditRubricClick(item) {
      this.$emit('editRubricClick', item[this.allRubricFields.FIELD_ID]);
    },
    onRemoveRubricClick(item) {
      this.$emit('removeRubricClick', item);
    },
    onEditProductClick(item) {
      this.$emit('editProductClick', item[this.allProductFields.FIELD_ID]);
    },
    onRemoveProductcClick(item) {
      this.$emit('removeProductcClick', item);
    },
  },
  computed: {
    ...mapGetters('rubric', { allRubricFields: 'allFields' }),
    ...mapGetters('product', { allProductFields: 'allFields' }),
  },
};
</script>

<style>
  .admin-tree_clicble {
    cursor: pointer;
  }
  .admin-tree_disable {
    opacity: 0.5;
  }
</style>
