import type { ReactNode } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

export const LayoutErrorBoundary = ({ children }: Props) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);

const ErrorFallback = ({ error }: FallbackProps) => (
  <div>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
);
