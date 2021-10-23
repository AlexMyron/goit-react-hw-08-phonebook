import { createReducer } from '@reduxjs/toolkit';
import actions from './modal-actions';
import { combineReducers } from 'redux';

const modalIsShow = createReducer(false, {
  [actions.openModal]: () => true,
  [actions.closeModal]: () => false,
});

const modalContent = createReducer('', {
  [actions.setModalContent]: (state, { payload }) => payload,
});

export default combineReducers({
  modalIsShow,
  modalContent,
});
