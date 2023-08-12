import { ThemeProvider } from "./components/theme-provider";
import { Router } from "preact-router";
import Index from "./routes/Index";
import Sidebar from "./components/Sidebar";
import { AppContextProvider } from "./context";
import Match from "preact-router/match";
import AsyncRoute from "preact-async-route";
import { Toaster } from "react-hot-toast";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API } from "./env";

const client = new ApolloClient({
  uri: `${API}/graphql`,
  cache: new InMemoryCache(),
});

const hiddenIn = ["/auth"];

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="twixt-ui-theme">
      <Toaster
        position="bottom-left"
        toastOptions={{
          className:
            "bg-background text-muted-foreground text-sm rounded-lg border border-border",
          success: {
            icon: null,
          },
          error: {
            icon: null,
            className: "bg-red-800 text-accent-foreground",
          },
        }}
      />
      <ApolloProvider client={client}>
        <AppContextProvider>
          <Match path="/">
            {({ url }: { matches: boolean; path: string; url: string }) => {
              return hiddenIn.includes(url) ? null : <Sidebar />;
            }}
          </Match>
          <Router>
            <Index path="/" />
            <AsyncRoute
              path="/auth"
              getComponent={() =>
                import("./routes/Auth").then((m) => m.default)
              }
            />
            <AsyncRoute
              path="/me"
              getComponent={() => import("./routes/Me").then((m) => m.default)}
            />
            <AsyncRoute
              path="/create"
              default
              getComponent={() =>
                import("./routes/Create").then((m) => m.default)
              }
            />
            <AsyncRoute
              path=""
              default
              getComponent={() =>
                import("./routes/NotFound").then((m) => m.default)
              }
            />
          </Router>
        </AppContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}
{
  /* <div className='bg-background text-foreground'></div> */
}
