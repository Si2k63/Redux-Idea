import BaseAction from './BaseAction';
import ConfirmModalReducer from '../reducers/ConfirmModalReducer';

class ConfirmModalAction extends BaseAction {
    open = (message, title) => this.dispatch({ open: true, message, title })
}

export default new ConfirmModalAction(ConfirmModalReducer);