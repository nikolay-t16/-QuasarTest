export function setAllRubrics(state, payload) {
  state.allRubrics = payload;
}

export function setRubric(state, payload) {
  state.rubric = payload;
}

export function removeRubric(state, payload) {
  const index = state.allRubrics.indexOf(payload);
  if (index > -1) {
    state.allRubrics.splice(index, 1);
  }
}

export function editRubric(state, payload) {
  for (let i = 0; i < state.allRubrics.length; i += 1) {
    if (state.allRubrics[i].rubric_id === payload.id) {
      state.allRubrics[i][payload.field] = payload.value;
      return;
    }
  }
}
