import { ButtonHTMLAttributes } from 'react';

enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

type Props = {
  text: string;
  color?: string;
  type?: ButtonHTMLAttributes<ButtonHTMLAttributes<HTMLButtonElement>>['type'];
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button = ({
  color = 'bg-indigo-600',
  text,
  type = ButtonType.SUBMIT,
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      className={`${color} disable hover:bg-opacity-75 disabled:bg-opacity-25 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
