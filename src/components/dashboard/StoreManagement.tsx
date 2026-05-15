import React from 'react';
import { motion } from 'motion/react';
import { 
  Store, 
  MapPin, 
  Heart, 
  TrendingUp, 
  Zap, 
  Search,
  Filter,
  MoreVertical,
  Plus
} from 'lucide-react';
import { cn } from '../../lib/utils';

const storeData = [
  { id: 'S-401', name: 'Miami Downtown', revenue: 145000, health: 98, status: 'online', regionalRank: 1 },
  { id: 'S-102', name: 'Chicago North', revenue: 98000, health: 85, status: 'online', regionalRank: 12 },
  { id: 'S-221', name: 'NY Times Square', revenue: 210000, health: 92, status: 'online', regionalRank: 2 },
  { id: 'S-88', name: 'LA Venice', revenue: 76000, health: 74, status: 'busy', regionalRank: 45 },
  { id: 'S-312', name: 'Dallas Plaza', revenue: 112000, health: 88, status: 'offline', regionalRank: 24 },
];

export const StoreManagement = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Store Management</h1>
          <p className="text-white/40">Operational health, revenue benchmarking, and compliance scores.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 text-white font-bold transition-all hover:bg-white/5 active:scale-95">
          <Plus className="w-5 h-5 text-[#F27D26]" />
          Register New Store
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-3xl bg-gradient-to-br from-[#F27D26]/5 to-transparent">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 rounded-xl bg-[#F27D26]/10 text-[#F27D26]">
               <Zap className="w-5 h-5" />
             </div>
             <h3 className="text-sm font-bold text-white">Peak Efficiency Stores</h3>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between items-center text-xs">
                <span className="text-white/40">Total Active</span>
                <span className="text-white font-bold">12,450</span>
             </div>
             <div className="flex justify-between items-center text-xs">
                <span className="text-white/40">High Health (90+)</span>
                <span className="text-emerald-400 font-bold">84%</span>
             </div>
          </div>
        </div>

        <div className="glass p-6 rounded-3xl bg-gradient-to-br from-[#FFB30F]/5 to-transparent">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 rounded-xl bg-[#FFB30F]/10 text-[#FFB30F]">
               <Heart className="w-5 h-5" />
             </div>
             <h3 className="text-sm font-bold text-white">Global Health Score</h3>
          </div>
          <div className="flex items-end gap-2">
             <h4 className="text-3xl font-display font-bold text-white">88.4</h4>
             <span className="text-xs text-white/40 mb-1">/ 100</span>
             <div className="flex-1 ml-4 mb-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[88.4%] bg-[#FFB30F] rounded-full" />
             </div>
          </div>
        </div>

        <div className="glass p-6 rounded-3xl bg-gradient-to-br from-[#D62300]/5 to-transparent">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 rounded-xl bg-[#D62300]/10 text-[#D62300]">
               <TrendingUp className="w-5 h-5" />
             </div>
             <h3 className="text-sm font-bold text-white">Revenue Growth Store-Avg</h3>
          </div>
          <div className="flex items-baseline gap-2">
             <h4 className="text-3xl font-display font-bold text-white">+14.2%</h4>
             <span className="text-xs text-emerald-400 font-bold">↑ 2.1% v.ly</span>
          </div>
        </div>
      </div>

      <div className="glass rounded-[2rem] overflow-hidden">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <h3 className="text-xl font-display font-bold text-white">Global Store Directory</h3>
           <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Filter location..." 
                  className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs outline-none focus:border-[#F27D26]/40 transition-all"
                />
              </div>
              <button className="p-2 glass rounded-xl text-white/40 hover:text-white transition-colors">
                 <Filter className="w-4 h-4" />
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-white/30 uppercase tracking-widest border-b border-white/5">
                <th className="p-6">Store Instance</th>
                <th className="p-6">Efficiency Health</th>
                <th className="p-6">Revenue Performance</th>
                <th className="p-6">Regional Rank</th>
                <th className="p-6">Operational Status</th>
                <th className="p-6"></th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((store, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                       <div className="p-2.5 rounded-xl bg-white/5 text-[#F27D26]">
                         <Store className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-white">{store.name}</p>
                         <div className="flex items-center gap-1 text-[10px] text-white/30">
                            <MapPin className="w-2 h-2" />
                            <span>ID: {store.id}</span>
                         </div>
                       </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                       <div className="flex-1 w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${store.health}%` }}
                            className={cn(
                              "h-full rounded-full",
                              store.health > 90 ? "bg-emerald-400" : store.health > 80 ? "bg-[#FFB30F]" : "bg-[#D62300]"
                            )}
                          />
                       </div>
                       <span className="text-xs font-bold text-white">{store.health}%</span>
                    </div>
                  </td>
                  <td className="p-6">
                     <p className="text-sm font-bold text-white">${store.revenue.toLocaleString()}</p>
                     <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Target Met</p>
                  </td>
                  <td className="p-6">
                     <span className={cn(
                       "text-[10px] font-bold px-2 py-0.5 rounded-full",
                       store.regionalRank <= 5 ? "bg-[#FFB30F]/10 text-[#FFB30F]" : "bg-white/5 text-white/40"
                     )}>
                       #{store.regionalRank}
                     </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                       <div className={cn(
                         "w-2 h-2 rounded-full",
                         store.status === 'online' ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" :
                         store.status === 'busy' ? "bg-[#FFB30F]" : "bg-white/20"
                       )} />
                       <span className="text-xs font-bold text-white capitalize">{store.status}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-white/20 hover:text-white transition-all">
                       <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
