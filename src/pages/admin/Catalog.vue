<template>
  <q-page class="flex">
    <AdminTree
      v-bind:simple=rubricTree
      @addRubricClick="onAddRubricClick"
      @editRubricClick="onEditRubricClick"
      @removeRubricClick="onRemoveRubricClick"
    >
    </AdminTree>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminTree from '../../components/admin/AdminTree';

export default {
  name: 'Catalog',
  components: { AdminTree },
  data() {
    return {
      simple: [],
    };
  },
  computed: {
    ...mapGetters('rubric', ['allRubrics']),
    rubricTree() {
      if (this.allRubrics.length !== 0) {
        const node = this.createTreeNode({
          name: 'Каталог',
        });
        return [
          node,
        ];
      }
      return [
        {
          label: 'Каталог',
          header: 'root',
        },
      ];
    },
  },
  async created() {
    await this.getAllRubrics();
  },
  methods: {
    ...mapActions('rubric', ['getAllRubrics', 'removeRubric']),
    deleteRubric(item) {
      const index = this.data.indexOf(item);
      if (index > -1) {
        this.data = this.data.splice(index, 1);
      }
    },
    createTreeNode(data) {
      const nodeId = this.getNodeId(data);
      return {
        data,
        label: data.name,
        header: this.getNodeType(data),
        children: this.getNodeChildren(nodeId),
      };
    },
    getNodeType(data) {
      if (data.id) {
        return 'rubric';
      }
      if (data.id) {
        return 'rubric';
      }
      return 'root';
    },
    getNodeId(data) {
      if (data.id) {
        return data.id;
      }
      if (data.id) {
        return data.id;
      }
      return 0;
    },
    getNodeChildren(id) {
      const res = [];
      this.allRubrics.forEach((el) => {
        if (+el.parent_id === +id) {
          res.push(this.createTreeNode(el));
        }
      });
      return res;
    },
    onAddRubricClick() {
      this.$router.push('/admin/rubric/new');
    },
    onEditRubricClick(id) {
      this.$router.push(`/admin/rubric/${id}`);
    },
    onRemoveRubricClick(rubric) {
      this.removeRubric(rubric);
    },
  },
};
</script>
