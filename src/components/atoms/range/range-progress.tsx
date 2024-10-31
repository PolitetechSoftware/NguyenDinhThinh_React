import "./range-progress.scss";

export type RangeProgressProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export const RangeProgress: React.FC<RangeProgressProps> = ({ ...rest }) => {
  return <input type="range" {...rest} className="range-progress" />;
};
