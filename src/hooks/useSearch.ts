import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/slices/searchSlice';
import { StoreState } from '../store';

export default function useSearch() {
  const dispatch = useDispatch();
  const search = useSelector<StoreState, string>(estado => estado.search);

  return {
    search,
    setSearch: (search: string) => dispatch(setSearch(search))
  };
}