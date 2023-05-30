import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
} from "react";

interface AppContextProps {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<SetStateAction<string[]>>;
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        selectedFilters,
        setSelectedFilters,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
