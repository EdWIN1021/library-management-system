export interface InputProps {
  lable?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
