import {createStore, combineReducers} from 'redux';

/*
const defaultState = {
    arrWords : [
      {id:1, en:'action', vn: 'thái', memorized: true, isShow: false},
      {id:2, en:'actor', vn: 'gia khiêm', memorized: false, isShow: true},
      {id:3, en:'house', vn: 'diễn viên', memorized: false, isShow: true},
      {id:4, en:'love', vn: 'diễn viên', memorized: false, isShow: true},
      {id:5, en:'table', vn: 'diễn viên', memorized: true, isShow: true},
      {id:6, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:7, en:'hello', vn: 'diễn viên', memorized: false, isShow: true},
      {id:8, en:'nghia', vn: 'diễn viên', memorized: true, isShow: true},
      {id:9, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:10, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:11, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:12, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:13, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:14, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},
      {id:15, en:'actor', vn: 'diễn viên', memorized: false, isShow: true},

    ],
    filterStatus: 'SHOW_ALL',
    isAdding: false,


}

//default state
/*
const reducer = (state = defaultState, action) => {
  switch (action.type){
    case 'FILTER_SHOW_ALL':
        return {...state, filterStatus: 'SHOW_ALL'}
    break;
    case 'FILTER_MEMORIZED':
        return {...state, filterStatus: 'MEMORIZED'};
    break;
    case 'FILTER_NEED_PRACTICE':
        return {...state, filterStatus: 'NEED_PRACTICE'};
    break;
    case 'TOGGLEMEMORIZED':
        return {
          ...state,
          arrWords: state.arrWords.map( e => {
            if (e.id !== action.id )  return e;
            return { ...e, memorized: !e.memorized };  
          })

        };
    break;

    case 'TOGGLE_SHOW':
        return {
          ...state,
          arrWords: state.arrWords.map( e => {
            if (e.id !== action.id )  return e;
            return { ...e, isShow: !e.isShow };  
          })

        };
    break;

    case 'TOGGLE_IS_ADDING':
        return {
          ...state,
          isAdding: !state.isAdding,

        };
    break;
    case 'ADD_WORD':
        return {
          ...state,
          arrWords: state.arrWords.concat( { id: state.arrWords.length + 1 , en: action.en, vn: action.vn, memorized: false, isShow: false}
        ) };
    break;
    default:
    break;
  }

  return state;
};
const store = createStore(reducer);
//reducer -> tien don action

//tao ra store

//tich hop
*/

import reducer from './reducer/reducer';

const store = createStore(reducer);
export default store;