import { WFInput, WFInputProps } from "./input";
import "./search-input.scss";

interface WFSearchInputProps extends WFInputProps {
  icons: React.ReactNode;
}

export const WFSearchInput: React.FC<WFSearchInputProps> = ({
  icons,
  ...rest
}) => {
  return (
    <div className="wf-search-field">
      {icons}
      <WFInput {...rest} />
    </div>
  );
};
