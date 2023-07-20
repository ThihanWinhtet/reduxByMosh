import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import { bugAdded, bugRemoved, bugResolved , getUnresolvedBug, getBugByUser ,bugAssignedToUser} from './store/bugs'
import { userAdded } from './store/user';

const store = configureStore();

const unsubscribe = store.subscribe(()=> {
    console.log('State Changed', store.getState());
})

store.dispatch(userAdded({name : 'user1'}));
store.dispatch(projectAdded({name : 'project1'}))
store.dispatch(bugAdded({ description : 'bug1'}));
store.dispatch(bugAdded({ description : 'bug2'}));
store.dispatch(bugAdded({ description : 'bug3'}));


store.dispatch(bugResolved({id : 1}));

store.dispatch(bugAssignedToUser({bugId : 1, userId : 1}));



unsubscribe();
// store.dispatch(bugRemoved({ id : 1}));

let un = getUnresolvedBug(store.getState());
let un1= getUnresolvedBug(store.getState());

let user = getBugByUser(1)(store.getState());
console.log(user);