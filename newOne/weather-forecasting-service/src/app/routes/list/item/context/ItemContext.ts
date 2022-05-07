import { createContext } from 'react';

export interface ItemContextModel{
    name: string
}

const ItemContext = createContext<ItemContextModel | null>(null);

export default ItemContext;
