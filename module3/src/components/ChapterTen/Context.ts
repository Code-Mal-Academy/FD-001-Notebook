import { createContext } from 'react';

// Define the type for the state
interface State {
    count: number;
}

// Define the types for the actions
type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };


// Define the reducer function
export const reducerFunction = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Unexpected action');
    }
};

// Create the context
interface ContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const CountContext = createContext<ContextProps | null>(null);