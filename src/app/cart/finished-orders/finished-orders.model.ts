export interface FinishedOrders {
    id: number;
    destination:string;
    distance:string;
    price: string;
    time: string;
    date?: Date;
    userId: number;
    status: 'cancelled' | 'done' | null;
    products: number[] | null;
  }