class BaseReducer {

    getActionType = () => `[${this.domain}] ${this.type}`

    map = () => {
        return { [this.type]: this.getReducer() }
    }

    getReducer = () => {
        return (state = this.initialState, action) => {
            switch (action.type) {
                case this.getActionType():
                    return action.payload;
                default:
                    return state;
            }
        }
    }
}

export default BaseReducer;