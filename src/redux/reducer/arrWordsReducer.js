

const defaultArrWords =
[
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

];

const arrWordsReducer = (state = defaultArrWords, action) => {
    if (action.type === 'TOGGLEMEMORIZED') return state.map( e => { 
        if (e.id !== action.id) return e;
        return {...e, memorized: !e.memorized}

    });

    if (action.type === 'TOGGLE_SHOW') return state.map( e => { 
      if (e.id !== action.id) return e;
      return {...e, isShow: !e.isShow}

    });

    if (action.type === 'ADD_WORD') {
        return [
        {
          id: state.length + 1,
          en: action.en,
          vn: action.vn,
          memorized: false, 
          isShow: false
        }

        ].concat(state);
    };

    return state;
};

export default arrWordsReducer;