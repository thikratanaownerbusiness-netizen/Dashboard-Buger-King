import React from 'react';
import { motion } from 'motion/react';
import { 
  Package, 
  AlertTriangle, 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  Search,
  Filter,
  BarChart3,
  CalendarClock,
  TrendingUp
} from 'lucide-react';
import { cn } from '../../lib/utils';

const inventoryItems = [
  { id: 'SKU-001', name: 'Fresh Beef Patties', category: 'Proteins', stock: 840, unit: 'kg', threshold: 200, status: 'stable', nextRestock: '12h' },
  { id: 'SKU-002', name: 'Whopper Buns', category: 'Bakery', stock: 120, unit: 'units', threshold: 150, status: 'low', nextRestock: '4h' },
  { id: 'SKU-003', name: 'Original Mayo', category: 'Condiments', stock: 45, unit: 'gallons', threshold: 20, status: 'stable', nextRestock: '24h' },
  { id: 'SKU-004', name: 'Potatoes (Large)', category: 'Produce', stock: 12, unit: 'kg', threshold: 50, status: 'critical', nextRestock: '2h' },
  { id: 'SKU-005', name: 'BK Crown Nuggets', category: 'Proteins', stock: 1200, unit: 'units', threshold: 400, status: 'stable', nextRestock: '48h' },
];

export const InventoryManagement = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Inventory Intelligence</h1>
          <p className="text-white/40">Predictive restocking, waste reduction, and supplier performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 text-white font-bold transition-all hover:bg-white/5">
             Batch Reorder
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl flame-gradient text-white font-bold transition-all hover:scale-105">
             <Zap className="w-5 h-5" />
             Execute Smart Restock
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-8 rounded-3xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">Inventory Health</h3>
            <BarChart3 className="w-5 h-5 text-[#F27D26]" />
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24">
               <svg className="w-full h-full" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="10" fill="none" />
                 <motion.circle 
                   cx="50" cy="50" r="45" 
                   stroke="#F27D26" strokeWidth="10" 
                   fill="none" 
                   strokeDasharray="283"
                   initial={{ strokeDashoffset: 283 }}
                   animate={{ strokeDashoffset: 283 - (283 * 0.92) }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   strokeLinecap="round"
                 />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-xl font-display font-bold text-white">92%</span>
               </div>
            </div>
            <div>
               <p className="text-2xl font-display font-bold text-white">Optimal</p>
               <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">+4.2% stability</p>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl bg-[#D62300]/5 border-[#D62300]/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">Supply Alerts</h3>
            <AlertTriangle className="w-5 h-5 text-[#D62300]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
             <h4 className="text-4xl font-display font-bold text-white">12</h4>
             <span className="text-xs text-white/40 font-bold">Items below threshold</span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Critical shortage in <span className="text-white font-bold">PNW Produce</span> and <span className="text-white font-bold">East Coast Bakery</span> groups.
          </p>
        </div>

        <div className="glass p-8 rounded-3xl bg-[#FFB30F]/5 border-[#FFB30F]/20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest">Est. Waste Savings</h3>
            <TrendingUp className="w-5 h-5 text-[#FFB30F]" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
             <h4 className="text-4xl font-display font-bold text-white">$4.2k</h4>
             <span className="text-xs text-emerald-400 font-bold">Monthly optimization</span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed font-bold italic">
            "FlameAI reduced prep-waste by 14% since implementation."
          </p>
        </div>
      </div>

      <div className="glass rounded-[2rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div>
             <h3 className="text-xl font-display font-bold text-white">Ingredient Intelligence Feed</h3>
             <p className="text-xs text-white/40 mt-1">Real-time stock monitoring with AI restock predictions.</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Query SKU or keyword..." 
                  className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-[#F27D26]/40 transition-all min-w-[280px]"
                />
              </div>
              <div className="h-6 w-[1px] bg-white/10 mx-2" />
              <button className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors">
                 Category <ChevronDown className="w-3 h-3" />
              </button>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
             <thead>
               <tr className="text-[10px] font-bold text-white/30 uppercase tracking-widest border-b border-white/5">
                 <th className="px-8 py-4">Ingredient / Resource</th>
                 <th className="px-8 py-4">Stock Level</th>
                 <th className="px-8 py-4">Status</th>
                 <th className="px-8 py-4">Next Restock</th>
                 <th className="px-8 py-4">Target Efficiency</th>
                 <th className="px-8 py-4"></th>
               </tr>
             </thead>
             <tbody>
               {inventoryItems.map((item, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-xl bg-white/5 text-[#F27D26]">
                            <Package className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{item.name}</p>
                            <p className="text-[10px] text-white/30 font-mono">{item.id} • {item.category}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <p className="text-sm font-bold text-white">{item.stock.toLocaleString()} {item.unit}</p>
                       <div className="mt-2 h-1.5 w-32 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, (item.stock / (item.threshold * 2)) * 100)}%` }}
                            className={cn(
                              "h-full rounded-full",
                              item.status === 'stable' ? "bg-[#F27D26]" : item.status === 'low' ? "bg-[#FFB30F]" : "bg-[#D62300]"
                            )}
                          />
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className={cn(
                         "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                         item.status === 'stable' ? "bg-emerald-400/10 text-emerald-400" :
                         item.status === 'low' ? "bg-[#FFB30F]/10 text-[#FFB30F]" : "bg-[#D62300]/10 text-[#D62300]"
                       )}>
                         {item.status === 'critical' && <AlertTriangle className="w-3 h-3" />}
                         {item.status}
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-2 text-white/60">
                          <CalendarClock className="w-4 h-4" />
                          <span className="text-xs font-mono">{item.nextRestock}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className="text-sm font-bold text-white">
                         {item.status === 'stable' ? 'Optimal' : item.status === 'low' ? 'Urgent' : 'Halted'}
                       </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <button className="p-3 glass rounded-xl text-[#F27D26] opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-90">
                          <ArrowRight className="w-5 h-5" />
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
