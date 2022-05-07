import { useContext } from 'react';
import forceNonNullable from '../../../utils/assertions/forceNonNullable';
import ItemContext from './context/ItemContext';

export default function useItemContext() {
  return forceNonNullable(useContext(ItemContext));
}
