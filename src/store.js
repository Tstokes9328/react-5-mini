//Import createStore function from redux
import {createStore} from 'redux';

//Import the reducers
import counter from './ducks/counter';

//Export createStore invoked with reducer passed in
export default createStore(counter);