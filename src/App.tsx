import { useEffect } from "react";
import {
  useWebApp,
  BackButton,
  useThemeParams,
} from "@vkruglikov/react-telegram-web-app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CustomList, Layout } from "components/common";
import { CustomButton } from "components/ui";
import "./App.css";

function App() {
  const tg = useWebApp();
  const [tgTheme, themeParams] = useThemeParams();
  console.log({ themeParams });

  const theme = extendTheme({
    initialColorMode: tgTheme || "light",
    useSystemColorMode: false,
    color: {
      current: themeParams.bg_color,
    },
  });

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <CustomList items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </Layout>
      <BackButton />
    </ChakraProvider>
  );
}

export default App;
