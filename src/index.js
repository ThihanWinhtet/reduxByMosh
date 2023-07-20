import configureStore from './store/configureStore';
import { bugAdded, bugRemoved, bugResolved } from './store/bugs'

const store = configureStore();

const unsubscribe = store.subscribe(()=> {
    console.log('State Changed', store.getState());
})

store.dispatch(bugAdded({ description : 'bug1'}));
store.dispatch(bugAdded({ description : 'bug2'}));
store.dispatch(bugAdded({ description : 'bug3'}));

store.dispatch(bugResolved({id : 1}));

unsubscribe();
store.dispatch(bugRemoved({ id : 1}));

console.log(store.getState());