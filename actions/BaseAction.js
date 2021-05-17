import { store } from '../store'

class BaseAction {

    constructor(reducer) {
       this.reducer = reducer; 
    }

    reset = () => this.dispatch(this.reducer.initialState);

    getStatePath = (state) => state[this.reducer.type]; 

    dispatch = (payload) => {
    	store.dispatch(async dispatch => dispatch({ type: this.reducer.getActionType(), payload }))
    }
}

export default BaseAction;