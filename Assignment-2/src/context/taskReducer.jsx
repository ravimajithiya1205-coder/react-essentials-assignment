export const initialState = {
  tasks: []
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
      };

    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case "EDIT_TASK":
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        )
      };

    case "CLEAR_TASKS":
      return {
        tasks: []
      };

    default:
      return state;
  }
};