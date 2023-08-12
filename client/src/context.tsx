import { ComponentChildren, createContext } from "preact";
import { useSignal } from "@preact/signals";
import { getCurrentUser } from "./auth";
import { useContext } from "preact/hooks";
import { User } from "./auth/types";

export const AppContext = createContext<Globals | null>(null);

const createGlobal = () => {
  const user = useSignal<User | null>(null);
  const isLoading = useSignal(true);

  const reloadUser = () => {
    getCurrentUser()
      .then((res) => {
        console.log(res);
        isLoading.value = false;

        if (!res.message) user.value = res;
      })
      .catch(() => {
        isLoading.value = false;
      });
  };

  reloadUser();

  return {
    user,
    isLoading,
    reloadUser,
  };
};

type Globals = ReturnType<typeof createGlobal>;

export const AppContextProvider = ({
  children,
}: {
  children: ComponentChildren;
}) => {
  const globals = createGlobal();

  return <AppContext.Provider value={globals}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("Cannot access AppContext outside of Provider");

  return ctx;
};
