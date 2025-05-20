import { ItemType } from "./reducer";
import { AddressType, PaymentMethod } from '../@types/definitions'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD'
}

export function addNewItemToCart(item: ItemType) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemFromCart(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { 
      itemId
    }
  }
}

export function updateQuantity(itemId: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY,
    payload: { 
      itemId,
      quantity
    }
  }
}

export function clearCartItems() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}

export function updateAddress(address: AddressType) {
  return {
    type: ActionTypes.UPDATE_ADDRESS,
    payload: {
      address
    }
  }
}

export function setPayment(method: PaymentMethod) {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      method
    }
  }
}