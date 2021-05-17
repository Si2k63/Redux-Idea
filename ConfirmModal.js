import { connect } from 'react-redux';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { ConfirmModalAction } from '../../../app/actions';

const ConfirmModal = (props) => {

  const closeModal = () => ConfirmModalAction.reset()

  return (
    <Modal
      open={props.ConfirmModal.open}
      onClose={closeModal}
      size="tiny"
    >
      <Modal.Header>
        {props.ConfirmModal.title}
      </Modal.Header>
      <Modal.Content content={props.ConfirmModal.message} />
      <Modal.Actions>
        <Button negative onClick={closeModal}>
          <Icon name="delete" /> Cancel
          </Button>
        <Button onClick={() => { }} color="green">
          <Icon name="check" /> Continue
          </Button>
      </Modal.Actions>
    </Modal>
  )
}

const mapStateToProps = state => {
  return {
    ConfirmModal: ConfirmModalAction.getStatePath(state)
  };
};

export default connect(mapStateToProps)(ConfirmModal)