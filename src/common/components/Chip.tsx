import "./styles/Chip.css";

interface ChipProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Chip({ text, onClick }: ChipProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(e);
  };

  const style = {
    cursor: onClick ? "pointer" : "default",
  };

  return (
    <div className={`chip`} onClick={handleClick} style={style}>
      {text}
    </div>
  );
}
