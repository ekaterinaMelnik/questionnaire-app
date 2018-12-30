import { createMemoryHistory, createBrowserHistory } from 'src/client/core/history';

export const history = typeof document !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
