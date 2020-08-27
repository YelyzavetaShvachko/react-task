import { useContext } from 'react';
import { ModalContext } from '../state/context';

function useModalStatus() {
  const { isOpened, setOpen } = useContext(ModalContext);
  return [isOpened, setOpen];
}

export default useModalStatus;