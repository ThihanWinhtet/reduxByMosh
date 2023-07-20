import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import { bugAdded, bugRemoved, bugResolved , getUnresolvedBug} from './store/bugs'

const store = configureStore();

const unsubscribe = store.subscribe(()=> {
    console.log('State Changed', store.getState());
})

store.dispatch(projectAdded({name : 'project1'}))
store.dispatch(bugAdded({ description : 'bug1'}));
store.dispatch(bugAdded({ description : 'bug2'}));
store.dispatch(bugAdded({ description : 'bug3'}));

store.dispatch(bugResolved({id : 1}));

unsubscribe();
store.dispatch(bugRemoved({ id : 1}));

let un = getUnresolvedBug(store.getState());
let un1= getUnresolvedBug(store.getState());
console.log(un === un1);