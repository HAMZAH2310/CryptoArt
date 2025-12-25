type CircleNumberProps = {
  value: number | string;
  size?: number;
  borderWidth?: number;
  className?: string;
};

export default function CircleNumber({
  value,
  size = 48,
  borderWidth = 2,
  className = "",
}: CircleNumberProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-white text-white font-medium ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: borderWidth,
      }}
    >
      {value}
    </div>
  );
}
