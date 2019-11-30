export function allProducts(state) {
  return state.allProducts;
}

export function allMapProducts(state) {
  const res = new Map();
  state.allProducts.forEach(item => res.set(item.productId, item));
  return res;
}

const getEmptyRubricProducts = () => ({
  items: [],
  maxPrice: null,
});

const concatRubricProducts = (item1, item2) => {
  const res = Object.assign({}, item1);
  res.items = res.items.concat(item2.items);
  if (res.maxPrice === null || res.maxPrice < item2.maxPrice) {
    res.maxPrice = item2.maxPrice;
  }
  return res;
};

function isProdValidForFilter(prod, filter) {
  if (filter.minPrice !== null && +filter.minPrice > +prod.price) {
    return false;
  }
  if (filter.maxPrice !== null && +filter.maxPrice < +prod.price) {
    return false;
  }
  return true;
}

function getRubricProducts(rubric, products, filter) {
  const res = getEmptyRubricProducts();
  if (rubric && rubric.products) {
    rubric.products.forEach(
      (item) => {
        if (products.has(+item.productId)) {
          const prod = products.get(+item.productId);
          if (isProdValidForFilter(prod, filter)) {
            res.items.push(prod);
          }
          if (res.maxPrice === null || res.maxPrice < prod.price) {
            res.maxPrice = prod.price;
          }
        }
      },
    );
  }
  return res;
}

function getAllRubricProducts(
  rubricId,
  rubrics,
  products,
  rubricTree,
  filter,
  delteDuplicate = true,
) {
  let res = getEmptyRubricProducts();
  const rubric = rubrics && rubrics.has(+rubricId) ? rubrics.get(+rubricId) : null;

  if (rubric) {
    const rubricProducts = getRubricProducts(rubric, products, filter);
    res = concatRubricProducts(res, rubricProducts);
  }

  if (rubricTree.has(rubricId)) {
    rubricTree.get(rubricId).forEach(
      (subRub) => {
        const subRubricProducts = getAllRubricProducts(
          subRub.rubricId,
          rubrics,
          products,
          rubricTree,
          filter,
          false,
        );
        res = concatRubricProducts(res, subRubricProducts);
      },
    );
  }
  if (delteDuplicate) {
    // Удаление дублей
    res.items = Array.of(...new Set(Array.of(...res.items)));
  }
  return res;
}

/**
 *
 * @param state
 * @param getters
 * @param rootState
 * @param rootGetters
 * @returns {Array|Null}
 */
export const productsByRubric = (state, getters, rootState, rootGetters) => (id) => {
  const rubrics = rootGetters['rubric/allMapRubrics'];
  const rubricTree = rootGetters['rubric/rubricTree'];
  const res = getAllRubricProducts(
    +id, rubrics,
    getters.allMapProducts,
    rubricTree,
    state.filter,
  );
  return res;
};


export function product(state) {
  return state.product;
}

export function newProducts(state) {
  return state.allProducts.filter(item => item.isNew);
}

export function hitProducts(state) {
  return state.allProducts.filter(item => item.isHit);
}

export function listFields(state) {
  return state.listFields;
}

export function allFields(state) {
  return state.allFields;
}
