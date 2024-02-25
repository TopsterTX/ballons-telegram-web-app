import { useEffect, useState } from "react";
import { useWebApp, useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { ChakraProvider, Collapse, extendTheme } from "@chakra-ui/react";
import {
  ProductList,
  Header,
  Layout,
  Filter,
  TagList,
  Cart,
  Summary,
  ConfirmModal,
} from "components/common";
import { CustomButton, SearchInput } from "components/ui";
import "@fontsource/roboto/cyrillic.css";
import "@fontsource/roboto/latin.css";
import "./App.css";
import { delay } from "utils/delay.ts";

function App() {
  const tg = useWebApp();
  const [tgTheme, themeParams] = useThemeParams();
  const [filterVisible, setFilterVisible] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOrderLoading, setIsOrderLoading] = useState(false);

  const closeConfirmModalHandler = () => {
    setIsOpenConfirmModal(false);
  };

  const openConfirmModalHandler = () => {
    setIsOpenConfirmModal(true);
  };

  const confirmOrderHandler = () => {
    setIsOrderLoading(true);
    delay(() => {
      setIsOrderLoading(false);
      openConfirmModalHandler();
    }, 2000);
  };

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
        <ProductList />
      </Layout>
      <Summary />
      <CustomButton
        width="100%"
        borderRadius={0}
        size="lg"
        shadow="md"
        isLoading={isOrderLoading}
        onClick={confirmOrderHandler}
      >
        Оформить заказ
      </CustomButton>
      <ConfirmModal
        isOpen={isOpenConfirmModal}
        onClose={closeConfirmModalHandler}
      />
    </ChakraProvider>
  );
}

export default App;
