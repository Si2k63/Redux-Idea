import BaseReducer from './BaseReducer';

class ConfirmModalReducer extends BaseReducer { 

    domain = "Modals"
    type = "ConfirmModal"

    initialState = { 
        open: false, 
        title: "Confirmation", 
        message: "Are you sure you wish to continue?",
    }
}

export default new ConfirmModalReducer();