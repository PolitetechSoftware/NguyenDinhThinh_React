import "./button.scss";

interface WFButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: "blank" | "primary" | "outline";
}

export const WFButton: React.FC<WFButtonProps> = ({
  buttonType = "primary",
  className="wf-btn-button",
  children,
  ...rest
}) => {
  return (
    <button className={`${className} ${buttonType}`} {...rest}>
      {children}
    </button>
  );
};
