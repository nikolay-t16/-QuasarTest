<template>
  <q-tree
    :nodes="data"
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
        <div v-if="!showCheckbox">
          <span
            :class="
            prop.node.data.show ?
            '' :
            'admin-tree_disable'
            "
          >
            {{ prop.node.label }}
          </span>
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
        <div v-if="showCheckbox">
          <q-checkbox
            v-model="checkedRubricsClone"
            :val="+prop.node.data.rubricId"
            left-label
            :label="prop.node.label"
            @input="onChangeCheckedRubrics"
          />
        </div>
      </div>
    </template>
    <template v-slot:body-toggle="prop">
      <p class="text-caption">{{ prop.node.caption }}</p>
      <q-toggle v-model="prop.node.enabled" label="I agree to the terms and conditions"/>
    </template>
  </q-tree>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Component({
  props: ['data', 'showCheckbox', 'checkedRubrics'],
  watch: {
    checkedRubrics: {
      immediate: true,
      handler(value) {
        if (value) {
          this.checkedRubricsClone = [...this.checkedRubrics];
        }
      },
    },
  },
  computed: {
    ...mapGetters('rubric', { allRubricFields: 'allFields' }),
    ...mapGetters('product', { allProductFields: 'allFields' }),
  },
})
export default class AdminTree extends Vue {
  checkedRubricsClone: any[] = [];

  onAddRubricClick(item): void {
    this.$emit('addRubricClick', item[this.allRubricFields.FIELD_ID]);
  };

  onEditRubricClick(item): void {
    this.$emit('editRubricClick', item[this.allRubricFields.FIELD_ID]);
  };

  onRemoveRubricClick(item): void {
    this.$emit('removeRubricClick', item);
  };

  onEditProductClick(item): void {
    this.$emit('editProductClick', item[this.allProductFields.FIELD_ID]);
  };

  onRemoveProductcClick(item): void {
    this.$emit('removeProductcClick', item);
  };

  onChangeCheckedRubrics(): void {
    this.$emit('changeCheckedRubrics', this.checkedRubricsClone);
  };
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
