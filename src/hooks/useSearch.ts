import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/slices/searchSlice';

export default function useSearch() {
  const dispatch = useDispatch();
  const search = useSelector<{search: string}, string>(estado => estado.search);

  return {
    search,
    setSearch: (search: string) => dispatch(setSearch(search))
  };
}