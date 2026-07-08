export default function Button({
  handleClick,
  children,
  className = "",
}: {
  handleClick: () => void;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
