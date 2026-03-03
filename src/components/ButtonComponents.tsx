type ButtonComponentsProps = {
  label: string;
  variant?: "primary" | "secondary";
};

function ButtonComponents({
  label,
  variant = "primary",
}: ButtonComponentsProps) {
  const baseClasses =
    "font-bold py-3 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 active:scale-95 focus:outline-none flex items-center justify-center gap-2 tracking-wide";

  const variants = {
    primary:
      "bg-brand-primary text-white shadow-lg hover:bg-brand-accent",
    secondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-dark",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]}`;

  return <button className={buttonClasses}>{label}</button>;
}

export default ButtonComponents;
