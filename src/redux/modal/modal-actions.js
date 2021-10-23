import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('modal/open');
const closeModal = createAction('modal/close');
const setModalContent = createAction('modal/setContent');

const actions = {
  openModal,
  closeModal,
  setModalContent,
};

export default actions;
