const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Recap Redux", completed: false },
  ],
};

// !constant variables
const ADD = "ADD";
const CLR = "CLR";
const DEL = "DEL";
const CMP = "CMP";

// !action creator functions

export const todoAdd = (payload) => ({ type: ADD, payload });
export const clear = () => ({ type: CLR });
export const todoDelete = (payload) => ({
  type: DEL,
  payload,
});
export const todoComp = (payload) => ({
  type: CMP,
  payload,
});

// !reducer
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLR:
      return { todoList: [] };
    case DEL:
      return {
        todoList: state.todoList.filter((item)=>item.id !== payload)

      };
    case CMP:
      return {
        todoList: state.todoList.map((item)=>item.id === payload ? {...item,completed: !item.completed} :item)
      }

    default:
      return state;
  }
};
