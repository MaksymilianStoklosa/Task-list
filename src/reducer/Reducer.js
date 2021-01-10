export const ACTION = {
  ADD_TASK: 'add-task',
  REMOVE_TASK: 'remove-task',
  CHANGE_STATUS: 'change-status',
};

export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case ACTION.ADD_TASK:
      return [
        ...tasks,
        {
          id: Math.floor(Math.random() * 10000),
          active: true,
          text: action.payload.text,
          date: action.payload.date.split('-').reverse().join('.'),
          priority: action.payload.priority,
        },
      ];
    case ACTION.REMOVE_TASK:
      return tasks.filter((task) => {
        if (task.id !== action.payload.id) {
          return tasks;
        }
        return null;
      });
    case ACTION.CHANGE_STATUS:
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            active: !task.active,
          };
        }
        return task;
      });
    default:
      return tasks;
  }
};
