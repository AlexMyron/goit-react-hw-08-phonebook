import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getModalState, getModalContent } from '../../redux/modal/modal-selectors';
import actions from '../../redux/modal/modal-actions';
import EditForm from '../EditForm/EditForm';
import UserData from '../UserData';
import utils from '../../utils';

const Dialog = ({ contact }) => {
  const show = useSelector(getModalState);
  const modalContent = useSelector(getModalContent);
  const dispatch = useDispatch();
  const setShow = value => {
    value ? dispatch(actions.openModal()) : dispatch(actions.closeModal());
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {utils.switchContent(modalContent) === 'data' ? (
              <span>User's Details</span>
            ) : (
              <span>Edit Contact</span>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {utils.switchContent(modalContent) === 'data' ? (
            <UserData />
          ) : (
            <EditForm contact={contact} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dialog;
