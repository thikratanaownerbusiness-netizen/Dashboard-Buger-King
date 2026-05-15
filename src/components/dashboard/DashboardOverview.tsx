import React from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  ArrowUpRight,
  BrainCircuit,
  MessageSquare,
  Crown
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { MetricCard } from '../ui/MetricCard';
import { motion } from 'motion/react';
import { formatCurrency, formatNumber } from '../../lib/utils';

const data = [
  { name: '00:00', value: 4000 },
  { name: '04:00', value: 3000 },
  { name: '08:00', value: 8000 },
  { name: '12:00', value: 12000 },
  { name: '16:00', value: 10000 },
  { name: '20:00', value: 9000 },
  { name: '23:59', value: 5000 },
];

const categoryData = [
  { name: 'Burgers', value: 45, color: '#F27D26' },
  { name: 'Sides', value: 25, color: '#D62300' },
  { name: 'Drinks', value: 20, color: '#FFB30F' },
  { name: 'Desserts', value: 10, color: '#F5E9DA' },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Executive Overview</h1>
          <p className="text-white/40">Real-time performance metrics across global operations.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
            Download Report
          </button>
          <button className="px-4 py-2 rounded-xl flame-gradient text-sm font-bold text-white flame-glow leading-none">
            Live Monitoring
          </button>
        </div>
      </div>

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          label="Total Revenue" 
          value={formatCurrency(128450)} 
          change={12.5} 
          trend="up" 
          icon={DollarSign}
          subValue="vs. $114,200 yesterday"
        />
        <MetricCard 
          label="Daily Orders" 
          value={formatNumber(4230)} 
          change={8.2} 
          trend="up" 
          icon={ShoppingBag}
          subValue="+340 from peak hour"
        />
        <MetricCard 
          label="Conversion" 
          value="4.8%" 
          change={-1.4} 
          trend="down" 
          icon={TrendingUp}
          subValue="App checkout funnel"
        />
        <MetricCard 
          label="Satisfaction" 
          value="4.9/5" 
          change={0.2} 
          trend="up" 
          icon={Star}
          subValue="Based on 1.2k reviews"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 glass rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-display font-bold text-white">Revenue Velocity</h3>
              <p className="text-xs text-white/40">Real-time hourly revenue across all channels</p>
            </div>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs outline-none">
              <option>Today</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="rgba(255,255,255,0.3)" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.3)" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `$${value/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#151619', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '12px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#F27D26" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="glass rounded-3xl p-8 bg-gradient-to-br from-[#F27D26]/10 to-transparent">
          <div className="flex items-center gap-2 mb-6">
            <BrainCircuit className="w-5 h-5 text-[#F27D26]" />
            <h3 className="text-xl font-display font-bold text-white">AI Assistant</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-[#F27D26] bg-[#F27D26]/10 px-2 py-0.5 rounded-full uppercase tracking-widest">Opportunity</span>
                <span className="text-[10px] text-white/30">Just now</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Strong trend detected in <span className="text-white font-bold">Impossible Whopper</span> sales in the PNW region. Recommend a localized "Flame-Grilled Future" campaign.
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-[#FFB30F] bg-[#FFB30F]/10 px-2 py-0.5 rounded-full uppercase tracking-widest">Alert</span>
                <span className="text-[10px] text-white/30">12m ago</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Operational anomaly in Store #421 (Miami). Delivery delays up by <span className="text-[#D62300] font-bold">14%</span>. High probability of staffing shortage.
              </p>
            </div>

            <button className="w-full py-4 rounded-2xl glass border-white/10 text-white/60 text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-all">
              <MessageSquare className="w-4 h-4" />
              Ask AI Agent for Strategy
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sales by Category */}
        <div className="glass rounded-3xl p-8">
           <h3 className="text-lg font-display font-bold text-white mb-6">Category Distribution</h3>
           <div className="space-y-4">
             {categoryData.map((cat) => (
               <div key={cat.name} className="space-y-2">
                 <div className="flex justify-between text-xs">
                   <span className="text-white/60">{cat.name}</span>
                   <span className="text-white font-bold">{cat.value}%</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ backgroundColor: cat.color }}
                    className="h-full rounded-full" 
                   />
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Live Feed */}
        <div className="md:col-span-2 glass rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-display font-bold text-white">Live Operations Feed</h3>
            <span className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real-time
            </span>
          </div>
          <div className="space-y-4">
            {[
              { id: '1', type: 'order', store: 'New York #12', value: '$42.50', time: 'Just now' },
              { id: '2', type: 'delivery', store: 'Chicago #08', status: 'Delivered', time: '2m ago' },
              { id: '3', type: 'loyalty', user: 'BK_Fan99', action: 'Crown Reward Claimed', time: '5m ago' },
              { id: '4', type: 'order', store: 'London #22', value: '£28.00', time: '8m ago' },
            ].map((feed) => (
              <div key={feed.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                     {feed.type === 'order' && <ShoppingBag className="w-5 h-5 text-[#F27D26]" />}
                     {feed.type === 'delivery' && <Clock className="w-5 h-5 text-[#FFB30F]" />}
                     {feed.type === 'loyalty' && <Crown className="w-5 h-5 text-[#D62300]" />}
                   </div>
                   <div>
                     <p className="text-sm font-bold text-white">{feed.store || feed.user}</p>
                     <p className="text-[10px] text-white/40 uppercase tracking-widest">{feed.value || feed.status || feed.action}</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-white/30">{feed.time}</p>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#F27D26] transition-colors ml-auto mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
