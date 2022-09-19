import "src/lib/mantine/mantineBase.css";
import "src/lib/tailwind.css";
import "../lib/globals.css";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { AppMantineProvider } from "src/lib/mantine/AppMantineProvider";
import { defaultSeo } from "src/lib/next";

const App = (props: AppProps) => {
  return (
    <AppMantineProvider>
      <DefaultSeo {...defaultSeo} />
      <props.Component {...props.pageProps} />
    </AppMantineProvider>
  );
};

export default App;
