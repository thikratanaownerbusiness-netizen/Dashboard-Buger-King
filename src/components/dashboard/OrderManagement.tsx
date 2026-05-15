import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Clock, 
  ChefHat, 
  Truck, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';

const orders = [
  { id: 'BK-1024', customer: 'Alex Johnson', status: 'preparing', total: 24.50, items: 3, time: '12:05', type: 'delivery' },
  { id: 'BK-1025', customer: 'Sarah Miller', status: 'pending', total: 12.90, items: 1, time: '12:08', type: 'pickup' },
  { id: 'BK-1022', customer: 'David Chen', status: 'ready', total: 45.00, items: 6, time: '11:55', type: 'delivery' },
  { id: 'BK-1019', customer: 'Emma Wilson', status: 'delivering', total: 32.20, items: 4, time: '11:45', type: 'delivery' },
  { id: 'BK-1026', customer: 'Michael Ross', status: 'pending', total: 18.50, items: 2, time: '12:10', type: 'pickup' },
];

const OrderColumn = ({ title, status, icon: Icon, color }: any) => {
  const filteredOrders = orders.filter(o => o.status === status);
  
  return (
    <div className="flex flex-col gap-4 w-full min-w-[300px]">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className={cn("p-1.5 rounded-lg", color)}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-display font-bold text-white capitalize">{title}</h3>
          <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-white/40">{filteredOrders.length}</span>
        </div>
        <button className="text-white/20 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
      </div>
      
      <div className="flex-1 space-y-4 rounded-3xl p-4 bg-white/[0.02] border border-white/5 min-h-[500px]">
        {filteredOrders.map(order => (
          <motion.div
            key={order.id}
            layoutId={order.id}
            whileHover={{ scale: 1.02 }}
            className="glass p-4 rounded-2xl cursor-grab active:cursor-grabbing group"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-xs font-bold text-[#F27D26]">{order.id}</p>
                <h4 className="text-sm font-bold text-white">{order.customer}</h4>
              </div>
              <div className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full uppercase tracking-widest">{order.type}</div>
            </div>
            
            <div className="flex items-center gap-4 py-3 border-y border-white/5 mb-3">
               <div className="flex flex-col">
                 <span className="text-[10px] text-white/30 uppercase">Items</span>
                 <span className="text-sm font-bold text-white">{order.items} items</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] text-white/30 uppercase">Total</span>
                 <span className="text-sm font-bold text-white">${order.total.toFixed(2)}</span>
               </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                <Clock className="w-3 h-3" />
                <span>ordered {order.time}</span>
              </div>
              <button className="text-[10px] font-bold text-[#F27D26] hover:underline">View Details</button>
            </div>
          </motion.div>
        ))}
        {filteredOrders.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-white/10 opacity-50">
            <AlertCircle className="w-8 h-8 mb-2" />
            <p className="text-xs">No orders</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const OrderManagement = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Order Management</h1>
          <p className="text-white/40">Track and manage multi-channel orders in real-time.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none w-64"
            />
          </div>
          <button className="p-2 glass rounded-xl text-white/60 hover:text-white">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
        <OrderColumn title="Incoming" status="pending" icon={Clock} color="bg-blue-500" />
        <OrderColumn title="Preparing" status="preparing" icon={ChefHat} color="bg-amber-500" />
        <OrderColumn title="Ready" status="ready" icon={CheckCircle2} color="bg-emerald-500" />
        <OrderColumn title="Delivering" status="delivering" icon={Truck} color="bg-purple-500" />
      </div>
    </div>
  );
};
