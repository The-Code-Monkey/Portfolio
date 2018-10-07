export const CHANGE_ACTIVE = 'overview/CHANGE_ACTIVE';

const initialState = {
  active: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_ACTIVE: {
      return {
        ...state,
        active: action.payload
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export const changeActive = index => (dispatch, getState) => {
  if (getState().overview.active === index) {
    dispatch({
      type: CHANGE_ACTIVE,
      payload: 0
    })
  } else {
    dispatch({
      type: CHANGE_ACTIVE,
      payload: index
    })
  }
  return Promise.resolve();
};