import { useEffect, useState } from "react";
import { useWebApp, useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ChakraProvider, Collapse, extendTheme } from "@chakra-ui/react";
import {
  CustomList,
  Header,
  Layout,
  Filter,
  TagList,
  Cart,
} from "components/common";
import { CustomButton, SearchInput } from "components/ui";
import "@fontsource/roboto/cyrillic.css";
import "@fontsource/roboto/latin.css";
import "./App.css";

function App() {
  const tg = useWebApp();
  const [tgTheme, themeParams] = useThemeParams();
  const [filterVisible, setFilterVisible] = useState(false);

  const theme = extendTheme({
    initialColorMode: tgTheme || "light",
    useSystemColorMode: false,
    font: {
      mono: `Roboto, sans-serif`,
      body: `Roboto, sans-serif`,
      heading: `Roboto, sans-serif`,
    },
    color: {
      current: themeParams.bg_color,
    },
  });

  const toggleVisibleFilter = () => setFilterVisible((value) => !value);

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Header />
        <Cart />
        <SearchInput onSettingsClick={toggleVisibleFilter} setTags={() => {}} />
        <Collapse in={filterVisible} animateOpacity>
          <Filter />
        </Collapse>
        <TagList tags={[]} setTags={() => {}} />
        <CustomList items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      </Layout>
      <CustomButton width="100%" borderRadius={0} size="lg" shadow="md">
        Оформить заказ
      </CustomButton>
    </ChakraProvider>
  );
}

export default App;
