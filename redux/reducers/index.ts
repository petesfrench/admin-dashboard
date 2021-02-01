import { Reducer } from 'react';
import { Theme } from '../types';

interface Action {
    type:string
}

let originalState: Theme = { theme: 'light' };

const themeReducer: Reducer<Theme, Action> = (state = originalState, action: Action) => {
  switch (action.type) {
    case 'DARK': originalState = { theme: 'dark' };
      return originalState;
    case 'LIGHT': originalState = { theme: 'light' };
      return originalState;
    default: return state;
  }
};
export default themeReducer;
