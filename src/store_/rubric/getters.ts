export function allRubrics(state) {
  return state.allRubrics;
}

export function allMapRubrics(state) {
  const res = new Map();
  state.allRubrics.forEach(item => res.set(item.rubricId, item));
  return res;
}

export function rubric(state) {
  return state.rubric;
}

export function listFields(state) {
  return state.listFields;
}

export function allFields(state) {
  return state.allFields;
}

export function rubricTree(state) {
  const tree = new Map();
  state.allRubrics.forEach((rub, rubricId) => {
    if (!tree.has(+rub.parentId)) {
      tree.set(rub.parentId, new Map());
    }
    tree.get(rub.parentId).set(rubricId, rub);
  });
  return tree;
}
