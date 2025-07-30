import { useState, createContext, useContext, useMemo } from 'react';

interface SearchContextType {
  search: string
  setSearch: (search :string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);
SearchContext.displayName = 'Search Context';

export function SearchContextProvider({ children, value }: { children: React.ReactNode, value?: Partial<SearchContextType> | undefined }) {
  const [search, setSearch] = useState('');

  const contextValue = useMemo(
    () => ({ search, setSearch, ...value })
    , [search, value]
  );

  return (<SearchContext value={contextValue}>
    { children }
  </SearchContext>);
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error('useSearchContext deve ser usado dentro de <SearchContextProvider>');
  return context;
}