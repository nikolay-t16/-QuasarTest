
<template>
  <div class="admin-table">
    <div class="q-pa-md">
      <q-table
        table-class="test"
        table-header-style="
        background-color: var(--q-color-primary);
        color: white!important;
        font-size: 21px;"
        title="Товары"
        :data="items"
        :columns="columns"
        row-key="productId"
        :filter="filter"
        :filter-method="filterMethod"
      >
        <template v-slot:top="props">
          <div class="col-2 q-table__title">{{ title }}</div>
          <q-btn label="Добавить" type="button" @click="onAddClick" color="primary"/>
          <q-input class="q-table__search" v-model="filter.search" placeholder="Search">
            <template v-slot:append>
              <q-avatar>
                <i class="material-icons"> search</i>
              </q-avatar>
            </template>
          </q-input>
          <q-toggle v-model="filter.show" label="Активен" />
          <q-toggle v-model="filter.isNew" label="Новинка" />
          <q-toggle v-model="filter.isHit" label="Хит продаж" />
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td  v-for="item in columns" v-bind:key="item.name" :props="props">
              <div v-if="item.isAction">
                <q-icon
                  :name=item.icon
                  class="admin-table__icon"
                  clicable
                  v-on:click="
                    item.isAction && (
                    item.confirm &&
                    confirmAction(item.confirmText(props.row), props.row, item.action) ||
                    !item.confirm && rowAction(item.action, props.row)
                    )"
                />
              </div>
              <div v-if="item.isBool && item.edit">
                <q-toggle :value="props.row[item.name]"
                          @input="onToggle(props.row[fieldId], item.name, !props.row[item.name])"
                />
              </div>
              <div v-else-if="item.isBool && !item.edit">
                {{props.row[item.name] ? 'да':'Нет'}}
              </div>
              <div v-else>
                {{ props.row[item.field] }}
                <q-popup-edit v-if="item.edit" v-model="props.row[item.name]">
                  <q-input
                    :value="props.row[item.name]"
                    v-on:change="rowEdit"
                    :data-field-name="item.name"
                    :data-row-id="props.row[fieldId]"
                    dense autofocus/>
                </q-popup-edit>
              </div>
            </q-td>
          </q-tr>
          <q-dialog v-model="confirm" persistent v-close-popup>
            <q-card>
              <q-card-section class="row items-center">
                <span class="q-ml-sm">{{confirmText}}</span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Нет" color="primary" v-close-popup />
                <q-btn
                  flat
                  label="Да"
                  color="primary"
                  v-close-popup
                  v-on:click="rowAction()"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: ['data', 'columns', 'fieldId', 'title', 'filterMethod'],

})
export default class AdminTable extends Vue {
  filter = {
    search: '',
    show: false,
    isHit: false,
    isNew: false,
  };
  confirm: boolean = false;
  confirmText: string = 'Вы уверены что хотите удалить?';
  onConfirm: Function | null = null;
  selected: Function | null = null;

  get items() {
    return this.data;
  };


  confirmAction(text, item, action) {
    this.action = action;
    this.selected = item;
    this.confirm = true;
    this.confirmText = text;
  };

  rowAction(action?, item?): void {
    if (action) {
      this.action = action;
    }
    if (item) {
      this.selected = item;
    }
    this.confirm = false;
    this.$emit('rowAction', this.action, this.selected);
  };

  rowEdit(e) {
    this.$emit('rowEdit', e.target.dataset.rowId, e.target.dataset.fieldName, e.target.value);
  };

  onToggle(id, field, value) {
    this.$emit('rowEdit', id, field, value);
  };

  deleteProduct(item): void {
    const index = this.data.indexOf(item);
    if (index > -1) {
      this.data = this.data.splice(index, 1);
    }
  };

  onAddClick() {
    this.$emit('addClick');
  };

  action() {};

};
</script>

<style>
  .admin-table thead{
    background-color: var(--q-color-primary);
  }

  .admin-table thead th {
    color: white;
    font-size: 16px;
    opacity: 1;
  }
  .admin-table__icon {
    font-size: 21px;
    cursor: pointer;
  }
  .q-table__search{
    margin-left: 10px;
  }
</style>
