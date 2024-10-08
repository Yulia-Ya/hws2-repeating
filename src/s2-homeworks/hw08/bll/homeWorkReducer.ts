import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
    //   if (action.payload === "up") {
    //     return [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
    //   } else {
    //     return [...state].sort((a, b) => (a.name < b.name ? 1 : -1));
    //   }
    const newState = [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
    return action.payload === 'up' ? newState : newState.reverse()
    }
    case "check": {
      return state.filter(el=> el.age > action.payload)
    }
    default:
      return state;
  }
};
