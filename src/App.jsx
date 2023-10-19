import {
  ActionList,
  AppProvider,
  Frame,
  Navigation,
  Page,
  Grid,
  TopBar,
} from "@shopify/polaris";
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
  ConversationMinor,
  ProductsMajor,
  CustomersMajor,
  ContentMinor,
  FinancesMajor,
  AnalyticsMajor,
  MarketingMajor,
  DiscountsMajor,
  OnlineStoreMinor,
  ChevronRightMinor,
  SecureMajor,
} from "@shopify/polaris-icons"
import InputForm from "./components/InputForm";
import Emoji from "./components/Emoji";
import Badge from "./components/Badge";
import Buttons from "./components/Buttons";
import { useState, useCallback, useRef } from "react";

function App() {
  const defaultState = useRef({
    emailFieldValue: "dharma@jadedpixel.com",
    nameFieldValue: "Jaded Pixel",
  });
  const skipToContentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    []
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    []
  );

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Royal Apps"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
    
      <Navigation.Section
        items={[
          {
            label: "Back to Shopify",
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        items={[
          {
            label: "Home",
            icon: HomeMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Orders",
            icon: OrdersMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Products",
            icon: ProductsMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Customers",
            icon: CustomersMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Content",
            icon: ContentMinor,
            onClick: toggleIsLoading,
          },
          {
            label: "Fianance",
            icon: FinancesMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Analytic",
            icon: AnalyticsMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Marketing",
            icon: MarketingMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Discounts",
            icon:  DiscountsMajor,
            onClick: toggleIsLoading,
          },
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: "Contact support",
          onClick: toggleModalActive,
        }}
      />
      <Navigation.Section
          title="Sales channels"
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Online Store',
              icon: OnlineStoreMinor,
            },
          ]}
          action={{
            accessibilityLabel: 'Add sales channel',
            icon: ChevronRightMinor,
            onClick: toggleIsLoading
          }}
        />
        <Navigation.Section
          title="Apps"
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Trusted Bages & Icons',
              icon:   SecureMajor,
            },
          ]}
          action={{
            accessibilityLabel: 'Add sales channel',
            icon: ChevronRightMinor,
            onClick: toggleIsLoading
          }}
        />
    </Navigation>
  );

  const logo = {
    width: 120,
    topBarSource: "https://www.cdnlogo.com/logos/s/16/shopify.svg",
    contextualSaveBarSource: "https://www.cdnlogo.com/logos/s/16/shopify.svg",
    url: "#",
    accessibilityLabel: "Jaded Pixel",
  };

  return (
    <div style={{ height: "500px" }}>
      <AppProvider
        i18n={{
          Polaris: {
            Avatar: {
              label: "Avatar",
              labelWithInitials: "Avatar with initials {initials}",
            },
            ContextualSaveBar: {
              save: "Save",
              discard: "Discard",
            },
            TextField: {
              characterCount: "{count} characters",
            },
            TopBar: {
              toggleMenuLabel: "Toggle menu",

              SearchField: {
                clearButtonLabel: "Clear",
                search: "Search",
              },
            },
            Modal: {
              iFrameTitle: "body markup",
            },
            Frame: {
              skipToContent: "Skip to content",
              navigationLabel: "Navigation",
              Navigation: {
                closeMobileNavigationLabel: "Close navigation",
              },
            },
          },
        }}
      >
        <Frame
          logo={logo}
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
          skipToContentTarget={skipToContentRef}
        >
          <Badge />
          <Page fullWidth>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Buttons />
                <InputForm />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                <Emoji />
              </Grid.Cell>
            </Grid>
          </Page>
        </Frame>
      </AppProvider>
    </div>
  );
}

export default App;
