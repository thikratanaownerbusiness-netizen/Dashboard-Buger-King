import React from 'react';
import { motion } from 'motion/react';
import { 
  Megaphone, 
  Target, 
  MousePointer2, 
  Share2, 
  TrendingUp, 
  Split, 
  Plus,
  BarChart2
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const campaignData = [
  { name: 'Flame Grilled Summer', conversion: 4.2, spent: 125000, reach: '2.4M' },
  { name: 'Whopper Wednesday', conversion: 7.8, spent: 45000, reach: '1.1M' },
  { name: 'App Exclusive Deal', conversion: 9.1, spent: 22000, reach: '450k' },
  { name: 'Royal Perks Launch', conversion: 5.6, spent: 85000, reach: '1.8M' },
];

export const MarketingCenter = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Marketing Performance</h1>
          <p className="text-white/40">Campaign reach, conversion funnels, and ROI tracking.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl flame-gradient text-white font-bold transition-all hover:scale-105 active:scale-95">
          <Plus className="w-5 h-5" />
          Create Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: 'Avg. CTR', value: '3.8%', icon: MousePointer2, change: 0.4 },
          { label: 'Conversion', value: '5.2%', icon: Target, change: 1.2 },
          { label: 'Social Reach', value: '8.4M', icon: Share2, change: -2.1 },
          { label: 'ROI Index', value: '4.2x', icon: TrendingUp, change: 0.8 },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
               <div className="p-2 rounded-xl bg-white/5 text-[#F27D26]">
                 <stat.icon className="w-5 h-5" />
               </div>
               <span className={cn(
                 "text-[10px] font-bold px-2 py-0.5 rounded-full",
                 stat.change > 0 ? "bg-emerald-400/10 text-emerald-400" : "bg-rose-400/10 text-rose-400"
               )}>
                 {stat.change > 0 ? '+' : ''}{stat.change}%
               </span>
            </div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-xl font-display font-bold text-white">Campaign Efficiency</h3>
             <div className="flex gap-2">
                <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-white/40">
                  <div className="w-2 h-2 rounded-full bg-[#F27D26]" />
                  Conversion Rate
                </span>
             </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip 
                   cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                   contentStyle={{ backgroundColor: '#151619', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Bar dataKey="conversion" radius={[4, 4, 0, 0]}>
                  {campaignData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#F27D26' : '#D62300'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 bg-gradient-to-br from-[#D62300]/10 to-transparent">
          <div className="flex items-center gap-2 mb-6 text-white">
            <Split className="w-5 h-5 text-[#F27D26]" />
            <h3 className="text-xl font-display font-bold">A/B Experiments</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Checkout Button Color', status: 'Running', winner: 'Variant B (+12%)' },
              { name: 'Upsell Placement', status: 'Ready', winner: '-' },
              { name: 'Hero Banner Video', status: 'Analysis', winner: 'Variant A (+4%)' },
            ].map((exp, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-[#F27D26]/30 transition-all cursor-pointer">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-white">{exp.name}</span>
                    <span className="text-[8px] px-2 py-0.5 rounded-full bg-white/10 text-white/40 uppercase font-bold">{exp.status}</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <p className="text-[10px] text-white/40">Winner Target</p>
                   <p className="text-[10px] font-bold text-[#F27D26]">{exp.winner}</p>
                 </div>
                 <div className="mt-3 flex gap-1 h-1">
                    <div className="flex-1 bg-[#F27D26] rounded-full" />
                    <div className="flex-1 bg-white/10 rounded-full" />
                 </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 rounded-xl glass border-white/10 text-white/60 text-xs font-bold hover:text-white hover:bg-white/10 transition-all">
            View All Experiments
          </button>
        </div>
      </div>

      <div className="glass rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
           <h3 className="text-lg font-display font-bold text-white">Active Campaigns</h3>
           <div className="flex gap-2">
              <button className="p-2 glass rounded-lg text-white/40 hover:text-white"><BarChart2 className="w-4 h-4" /></button>
           </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-bold text-white/30 uppercase tracking-widest border-b border-white/5">
              <th className="p-6">Campaign Name</th>
              <th className="p-6">Performance</th>
              <th className="p-6">Reach</th>
              <th className="p-6">Conversion</th>
              <th className="p-6">Spent</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody>
            {campaignData.map((camp, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                  <p className="text-sm font-bold text-white">{camp.name}</p>
                  <p className="text-[10px] text-white/40 uppercase">Global Digital</p>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Excellent</span>
                  </div>
                </td>
                <td className="p-6 text-sm text-white/60 font-mono">{camp.reach}</td>
                <td className="p-6">
                  <span className="text-sm font-bold text-white">{camp.conversion}%</span>
                </td>
                <td className="p-6 text-sm text-white/60 font-mono">${camp.spent.toLocaleString()}</td>
                <td className="p-6 text-right">
                   <button className="text-[10px] font-bold text-[#F27D26] opacity-0 group-hover:opacity-100 transition-opacity">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
