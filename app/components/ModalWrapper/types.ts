import { JSXElementConstructor, ReactElement } from "react";

export interface ModalWrapperProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  openModal: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}
