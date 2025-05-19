import { ActionTypes } from "./actions"
import { PaymentMethod } from '../@types/definitions'


export interface AddressType  {
  zipCode: string,
  adress: string,
  number: string,
  complement: number,
  district: string,
  state: string
  city: string
}

export interface ItemType {
  id: number
  name: string
  price: number
  quantity: number
}

export interface CartType {
  items: ItemType[]
  address: AddressType
  paymentMethod: PaymentMethod
}

export function cartReducer(state: CartType, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const existingItem = state.items.find(item => item.id === action.payload.item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.item.id
              ? { ...item, quantity: item.quantity + action.payload.item.quantity }
              : item
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload.item] };
    }
    
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return { ...state, items: state.items.filter(item => item.id !== action.payload.itemId) };

    case ActionTypes.UPDATE_ITEM_QUANTITY:
      return { ...state, items: state.items.map(item => 
        item.id === action.payload.itemId 
          ? { ...item, quantity: action.payload.quantity } 
          : item
      )};

    case ActionTypes.UPDATE_ADDRESS:
      return { ...state, address: action.payload.address }

    case ActionTypes.SET_PAYMENT_METHOD:
      console.log('action.payload.method ', action.payload.method)
      return { ...state, paymentMethod: action.payload.method }

    case ActionTypes.CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}