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

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400',
  secondary:
    'bg-transparent text-gray-800 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] hover:bg-gray-50 dark:text-gray-100 dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] dark:hover:bg-gray-800'
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-4 py-2.5 text-xs',
  medium: 'px-5 py-2.75 text-sm',
  large: 'px-6 py-3 text-base'
};

export const Button = ({ variant = 'primary', size = 'medium', label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'inline-block cursor-pointer rounded-full border-0 font-bold leading-none font-sans transition-colors',
        variantClasses[variant],
        sizeClasses[size]
      ].join(' ')}
    >
      {label}
    </button>
  );
};
