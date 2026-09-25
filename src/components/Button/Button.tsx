import './Button.css';

export interface ButtonProps {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary';
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Button label */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({ variant = 'primary', size = 'medium', label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${variant}`, `storybook-button--${size}`].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
