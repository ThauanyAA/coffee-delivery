import { createContext, ReactNode, useEffect, useMemo, useReducer } from "react";
import { AddressType, cartReducer, ItemType } from '../reducers/reducer'
import { 
  addNewItemToCart,
  clearCartItems,
  updateQuantity,
  removeItemFromCart,
  setPayment,
  updateAddress,
} from '../reducers/actions'
import { PaymentMethod } from "../@types/definitions";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  items: ItemType[]
  address: AddressType
  paymentMethod: PaymentMethod | undefined
  addItemToCart: (item: ItemType) => void
  updateItemQuantity: (itemId: string, quantity: number) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
  total: number
  setPaymentMethod: (method: PaymentMethod) => void
  setAddress: (address: AddressType) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    address: {
      zipCode: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      state: '',
      city: ''
    },
    paymentMethod: undefined
  }, (initialState) => {
    const storedStateAsJson = localStorage.getItem(
      '@coffee-delivery:cart-1.0.0'
    )

    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    }

    return initialState
  })

  const total = useMemo(() => {
    return cartState.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartState.items]);

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON);
  }, [cartState]);

  function addItemToCart(item: ItemType) {
    dispatch(addNewItemToCart(item))
  }

  function removeItem(itemId: string) {
    dispatch(removeItemFromCart(itemId))
  }

  function updateItemQuantity(itemId: string, quantity: number) {
    dispatch(updateQuantity(itemId, quantity))
  }

  function clearCart() {
    dispatch(clearCartItems())
  }

  function setPaymentMethod(method: PaymentMethod) {
    dispatch(setPayment(method))
  }

  function setAddress(address: AddressType) {
    dispatch(updateAddress(address))
  }

  return (
    <CartContext.Provider
      value={{ 
        items: cartState.items,
        address: cartState.address,
        paymentMethod: cartState.paymentMethod,
        addItemToCart,
        removeItem,
        updateItemQuantity,
        clearCart,
        total,
        setPaymentMethod,
        setAddress
      }}
    >
      {children}
    </CartContext.Provider>
  )
}