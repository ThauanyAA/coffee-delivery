import { createContext, ReactNode, useEffect, useMemo, useReducer, useState } from "react";
import { cartReducer, ItemType } from '../reducers/reducer'
import { 
  addNewItemToCart,
  clearCartItems,
  updateQuantity,
  removeItemFromCart,
  setPayment,
  updateAddress,
} from '../reducers/actions'
import { AddressType, PaymentMethod } from "../@types/definitions";

interface CartContextProviderProps {
  children: ReactNode
}

interface ErrorType {
  address: string | null;
  payment: string | null;
  items: string | null;
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
  deliveryTax: number
  setPaymentMethod: (method: PaymentMethod) => void
  setAddress: (address: AddressType) => void
  validateOrder: () => boolean
  errors: ErrorType
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

  const deliveryTax = 3.5
  
  const [errors, setErrors] = useState<ErrorType>({
    address: null,
    payment: null,
    items: null,
  });
  
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

  const isAddressValid = (
    cartState.address.zipCode &&
    cartState.address.city &&
    cartState.address.state &&
    cartState.address.address &&
    cartState.address.number &&
    cartState.address.district
  );

  function validateOrder() {
    let isValid = true;

    if (!isAddressValid) {
      setErrors((prevState: ErrorType) => ({ ...prevState, address: "Endereço incompleto" }))
      isValid = false;
    }
  
    if (!cartState.paymentMethod) {
      setErrors((prevState: ErrorType) => ({ ...prevState, payment: "Selecione uma forma de pagamento" }))
      isValid = false;
    }

    if (cartState.items.length === 0) {
      setErrors((prevState: ErrorType) => ({ ...prevState, items: "Adicione pelo menos 1 item" }))
      isValid = false;
    }
  
    return isValid;
  };

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
        deliveryTax: deliveryTax,
        addItemToCart,
        removeItem,
        updateItemQuantity,
        clearCart,
        total,
        setPaymentMethod,
        setAddress,
        validateOrder,
        errors
      }}
    >
      {children}
    </CartContext.Provider>
  )
}