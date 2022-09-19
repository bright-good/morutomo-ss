import { MantineProvider } from "@mantine/core";
import { FC, ReactNode } from "react";

/**@package */
export const AppMantineProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
