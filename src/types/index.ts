export type UserRole = 
  | 'super_admin' 
  | 'regional_manager' 
  | 'franchise_owner' 
  | 'store_manager' 
  | 'marketing' 
  | 'delivery_ops' 
  | 'support';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Metric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon?: string;
}

export interface Order {
  id: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivering' | 'completed' | 'cancelled';
  createdAt: string;
  deliveryEta?: string;
  storeId: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Store {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  revenue: number;
  healthScore: number;
  liveOrders: number;
}
