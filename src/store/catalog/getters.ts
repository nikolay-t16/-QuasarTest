import { TYPE_ROOT, TYPE_RUBRIC, TYPE_PRODUCT } from './state';

export function createTree(rubrics = [], products = []) {
  // eslint-disable-next-line no-use-before-define
  const node = createTreeNode({
    name: 'Каталог',
    id: 0,
  },
  TYPE_ROOT,
  rubrics,
  products);
  return [
    node,
  ];
}
// eslint-disable-next-line no-use-before-define
export function createTreeNode(data, type, rubrics, products, _getNodeChildren = getNodeChildren) {
  let icon = '';
  if (type === TYPE_PRODUCT) { icon = 'local_atm'; }
  if (type === TYPE_RUBRIC) { icon = 'list'; }
  return {
    data,
    icon,
    label: data.name,
    header: type,
    children: type !== TYPE_PRODUCT ? _getNodeChildren(data, rubrics, products) : [],
  };
}
function getNodeId(node) {
  if (node.id) return node.id;
  if (node.productId) return node.productId;
  if (node.rubricId) return node.rubricId;
  return 0;
}
export function getNodeChildren(node, rubrics, products, _createTreeNode = createTreeNode) {
  const res = [];
  rubrics.forEach((el) => {
    if (+el.parentId === +getNodeId(node)) {
      res.push(_createTreeNode(el, TYPE_RUBRIC, rubrics, products));
    }
  });

  if (node.products) {
    const productsId = [];
    node.products.forEach((el) => {
      productsId.push(+el.productId);
    });
    products.forEach((el) => {
      if (productsId.indexOf(+el.productId) >= 0) {
        res.push(createTreeNode(el, TYPE_PRODUCT));
      }
    });
  }
  return res;
}

export const rubricTree = (state, getters, rootState, rootGetters) => createTree(rootGetters['rubric/allRubrics']);

export const catalogTree = (state, getters, rootState, rootGetters) => createTree(rootGetters['rubric/allRubrics'], rootGetters['product/allProducts']);

export function rootRubrics(state, getters) {
  return getters.rubricTree[0].children;
}
