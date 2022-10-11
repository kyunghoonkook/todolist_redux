// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// initial state
const initialState = {
  // 숫자면 오류..
  todos: [
    {
      id: 1,
      title: "초기",
      body: "초기",
      isDone: false,
    },
  ],
  todo: {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  },
};
// Action Creator Todo추가
// 액션 생성 함수는 액션에 필요한 추가 데이터를 모두 payload
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

// Todo삭제
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// isDone 변경
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// **리듀서란, 변화를 일으키는 `함수`입니다.**
// 자 무슨말인지 모르시겠죠 ? 괜찮습니다...........

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.todo,
            id: state.todos[state.todos.length - 1]?.id + 1 || 0,
            isDone: false,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,

        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: {
          // parseInt로 덮어줘서 타입 같게 해줘야 id숫자로 쓸 수 있음.
          ...state.todos.find((todo) => todo.id === parseInt(action.payload)),
        },
      };
    default:
      return state;
  }
};

export default todoList;
