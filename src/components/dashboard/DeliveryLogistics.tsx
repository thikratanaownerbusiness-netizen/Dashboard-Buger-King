import React from 'react';
import { motion } from 'motion/react';
import { Network, MapPin, Truck, Navigation, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

export const DeliveryLogistics = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Logistics Control</h1>
          <p className="text-white/40">Fleet monitoring, route optimization, and carrier efficiency.</p>
        </div>
        <div className="flex gap-3">
          <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-bold text-white">1,240 Drivers Online</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Animated Map Simulation */}
        <div className="lg:col-span-2 glass rounded-[2rem] p-4 h-[600px] relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             {/* Simple grid lines to simulate map coordinates */}
             <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(rgba(242, 125, 38, 0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
          
          {/* Simulated Hubs */}
          <div className="absolute top-1/4 left-1/4">
            <div className="w-4 h-4 rounded-full bg-[#F27D26] flame-glow animate-ping absolute" />
            <div className="w-4 h-4 rounded-full bg-[#F27D26] relative flex items-center justify-center">
               <Store className="w-2 h-2 text-white" />
            </div>
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white/40 uppercase whitespace-nowrap">Hub #12 - Chicago</span>
          </div>

          <div className="absolute top-2/3 right-1/4">
            <div className="w-4 h-4 rounded-full bg-[#F27D26] flame-glow animate-ping absolute" />
            <div className="w-4 h-4 rounded-full bg-[#F27D26] relative flex items-center justify-center">
               <Store className="w-2 h-2 text-white" />
            </div>
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white/40 uppercase whitespace-nowrap">Hub #45 - Miami</span>
          </div>

          {/* Animated Drivers */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 600, 
                y: Math.random() * 400 
              }}
              animate={{ 
                x: [null, Math.random() * 800, Math.random() * 800],
                y: [null, Math.random() * 500, Math.random() * 500] 
              }}
              transition={{ 
                duration: 20 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute group"
            >
              <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-[#FFB30F] group-hover:scale-150 transition-all cursor-pointer" />
              <div className="hidden group-hover:block absolute bottom-4 left-1/2 -translate-x-1/2 glass px-2 py-1 rounded-lg whitespace-nowrap">
                <p className="text-[8px] font-bold text-white">Driver ID: BK-TX-{i}</p>
                <p className="text-[6px] text-white/40 text-center uppercase">In-Transit</p>
              </div>
            </motion.div>
          ))}

          {/* Map Controls */}
          <div className="absolute bottom-6 left-6 space-y-2">
            <button className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-[10px] font-bold text-white/60 hover:text-white transition-all">
              <Network className="w-3 h-3" />
              Network View
            </button>
            <button className="flex items-center gap-2 glass px-3 py-2 rounded-xl text-[10px] font-bold text-[#F27D26] transition-all">
              <Navigation className="w-3 h-3" />
              Live Traffic
            </button>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-display font-bold text-white mb-4">Carrier Health</h3>
            <div className="space-y-4">
              {[
                { name: 'DoorDash', status: 'Optimal', score: 98 },
                { name: 'Uber Eats', status: 'Congested', score: 84 },
                { name: 'Internal Fleet', status: 'Critical', score: 62 },
              ].map((carrier) => (
                <div key={carrier.name} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{carrier.name}</span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase",
                      carrier.score > 90 ? "text-emerald-400" : carrier.score > 80 ? "text-[#FFB30F]" : "text-[#D62300]"
                    )}>{carrier.status}</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${carrier.score}%` }}
                      className={cn(
                        "h-full",
                        carrier.score > 90 ? "bg-emerald-400" : carrier.score > 80 ? "bg-[#FFB30F]" : "bg-[#D62300]"
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 bg-[#D62300]/5 border-[#D62300]/20">
            <div className="flex items-center gap-2 mb-4 text-[#D62300]">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-lg font-display font-bold">Delivery Delays</h3>
            </div>
            <div className="space-y-3">
               {[
                 { store: 'Brooklyn #24', delay: '+12m', reason: 'High Traffic' },
                 { store: 'Austin #09', delay: '+18m', reason: 'Storm Warning' },
               ].map((alert, i) => (
                 <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/40">
                    <div>
                      <p className="text-xs font-bold text-white">{alert.store}</p>
                      <p className="text-[10px] text-white/40">{alert.reason}</p>
                    </div>
                    <span className="text-sm font-bold text-[#D62300]">{alert.delay}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-lg font-display font-bold text-white">Efficiency Trends</h3>
               <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex gap-4 items-end h-24">
              {[40, 60, 30, 80, 50, 70, 90].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="flex-1 bg-[#F27D26]/20 group relative overflow-hidden"
                >
                   <div className="absolute inset-x-0 bottom-0 bg-[#F27D26] h-full transition-transform translate-y-full group-hover:translate-y-0" />
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[10px] text-white/20 uppercase tracking-widest font-bold">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Store = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
