import { ActionTypes } from '../ActionType';
import { ProductData } from '../../pages';
import { Dispatch } from 'redux';
import { AddProductsAction, CartActions } from '../Actions';
import { ProductDataWithAmount } from '../reducers/cartReducer';

export const addProducts = (products: ProductData[]) => {
  return (dispatch: Dispatch<AddProductsAction>) => {
    dispatch({
      type: ActionTypes.ADD_PRODUCTS,
      payload: products,
    });
  };
};
export const addProductToCart = (product: ProductDataWithAmount) => {
  return (dispatch: Dispatch<CartActions>) => {
    dispatch({
      type: ActionTypes.SEND_PRODUCT_TO_CART,
      payload: product,
    });
  };
};
