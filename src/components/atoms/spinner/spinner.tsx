import { PropsWithChildren } from "react";
import "./spinner.scss";

interface SpinnerProps {
  spinner: boolean;
}

export const Spinner: React.FC<PropsWithChildren<SpinnerProps>> = ({
  spinner,
  children,
}) => {
  return (
    <div className="wf-wrap">
      {spinner && <div className="wf-spinner"></div>}
      {children}
    </div>
  );
};
