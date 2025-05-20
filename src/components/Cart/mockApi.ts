import { OrderData } from "../../@types/definitions";

interface OrderApiResponse {
  success: boolean;
  orderData: OrderData & {
    orderId: number;
    estimatedDelivery: Date;
  };
}

// Simulate API calling
export const mockApiCall = async (orderData: OrderData): Promise<OrderApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderData: {
          ...orderData,
          orderId: Math.floor(Math.random() * 1000000),
          estimatedDelivery: new Date(Date.now() + 15 * 60 * 1000) // 15 min
        }
      });
    }, 1500); // Simulate delay
  });
};
