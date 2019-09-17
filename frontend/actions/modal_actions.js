export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (content, params) => ({
  type: OPEN_MODAL,
  content,
  params
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});