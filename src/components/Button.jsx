export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

  const variantClasses = {
    primary:
      'bg-brand-primary text-white hover:bg-orange-700 focus-visible:outline-brand-primary',
    secondary:
      'bg-brand-secondary text-brand-dark hover:bg-amber-400 focus-visible:outline-brand-secondary',
    ghost:
      'bg-transparent text-brand-dark ring-1 ring-slate-300 hover:bg-slate-100 focus-visible:outline-slate-400',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
