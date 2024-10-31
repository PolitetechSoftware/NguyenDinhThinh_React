import "./input.scss";

export type WFInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const WFInput: React.FC<WFInputProps> = ({ ...rest }) => {
  return <input className="wf-input" {...rest} />;
};
