import React from 'react';
import { motion } from 'motion/react';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  FileText, 
  Download,
  PieChart,
  BarChart3,
  Calendar
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../../lib/utils';

const financialData = [
  { month: 'Jan', revenue: 12.4, profit: 4.2 },
  { month: 'Feb', revenue: 11.8, profit: 3.8 },
  { month: 'Mar', revenue: 14.2, profit: 5.1 },
  { month: 'Apr', revenue: 13.5, profit: 4.7 },
  { month: 'May', revenue: 16.8, profit: 6.2 },
  { month: 'Jun', revenue: 15.4, profit: 5.8 },
];

const expenseData = [
  { name: 'Labor', value: 35, color: '#F27D26' },
  { name: 'Ingredients', value: 42, color: '#D62300' },
  { name: 'Marketing', value: 12, color: '#FFB30F' },
  { name: 'Other', value: 11, color: '#F5E9DA' },
];

export const FinanceExecutive = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Financial Intelligence</h1>
          <p className="text-white/40">Revenue forecasting, expense breakdown, and profit analysis.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 text-white font-bold transition-all hover:bg-white/5">
             <Calendar className="w-4 h-4" />
             Fiscal Settings
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl flame-gradient text-white font-bold transition-all hover:scale-105">
             <Download className="w-4 h-4" />
             Export Q3 Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          { label: 'Q3 Forecast', value: '$4.2B', change: 8.4, trend: 'up', icon: TrendingUp },
          { label: 'Gross Margin', value: '62.4%', change: 1.2, trend: 'up', icon: PieChart },
          { label: 'Op. Expense', value: '$1.1B', change: -2.1, trend: 'down', icon: BarChart3 },
          { label: 'Franchise Roy.', value: '$840M', change: 4.5, trend: 'up', icon: DollarSign },
        ].map((stat, i) => (
          <div key={i} className="glass p-8 rounded-3xl">
             <div className="flex items-center justify-between mb-4">
               <div className="p-3 rounded-2xl bg-white/5 text-[#F27D26]">
                 <stat.icon className="w-5 h-5" />
               </div>
               <div className={cn(
                 "flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full",
                 stat.trend === 'up' ? "bg-emerald-400/10 text-emerald-400" : "bg-rose-400/10 text-rose-400"
               )}>
                 {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                 {stat.change}%
               </div>
             </div>
             <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">{stat.label}</p>
             <h3 className="text-3xl font-display font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[2rem] p-8">
           <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-xl font-display font-bold text-white">Consolidated Performance</h3>
                <p className="text-xs text-white/40 mt-1">Revenue vs Net Profit trend (Million USD)</p>
              </div>
           </div>
           <div className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={financialData}>
                 <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                 <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} />
                 <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}M`} />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#151619', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                 />
                 <Line type="monotone" dataKey="revenue" stroke="#F27D26" strokeWidth={4} dot={{ fill: '#F27D26', strokeWidth: 2, r: 4 }} activeDot={{ r: 8 }} />
                 <Line type="monotone" dataKey="profit" stroke="#FFB30F" strokeWidth={4} dot={{ fill: '#FFB30F', strokeWidth: 2, r: 4 }} activeDot={{ r: 8 }} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="glass rounded-[2rem] p-8 flex flex-col justify-between">
           <div>
              <h3 className="text-xl font-display font-bold text-white mb-8">Expense Attribution</h3>
              <div className="h-[240px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={expenseData}
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                   <p className="text-2xl font-display font-bold text-white tracking-widest leading-none">42%</p>
                   <p className="text-[10px] text-white/30 uppercase mt-1">Ingredients</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                 {expenseData.map((exp) => (
                   <div key={exp.name} className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }} />
                     <span className="text-[10px] font-bold text-white/60 uppercase">{exp.name}</span>
                     <span className="text-[10px] font-bold text-white ml-auto">{exp.value}%</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40">Total Operational Cost</span>
                <span className="text-white font-bold">$1.24B</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase">Efficiency Bonus</span>
                 </div>
                 <span className="text-[10px] font-bold text-emerald-400">+$210M Saved</span>
              </div>
           </div>
        </div>
      </div>

      <div className="glass rounded-[2rem] p-8">
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-display font-bold text-white">Recent Statements</h3>
            <button className="text-xs font-bold text-[#F27D26] hover:underline">View All Documents</button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Q2 Global Revenue Report', date: 'Oct 12, 2025', size: '12.4 MB' },
              { title: 'Tax Consolidation Summary', date: 'Oct 08, 2025', size: '2.1 MB' },
              { title: 'Franchise Performance Q3', date: 'Oct 01, 2025', size: '8.7 MB' },
            ].map((doc, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex items-center gap-4 group cursor-pointer">
                 <div className="p-2.5 rounded-xl bg-white/5 text-white/40 group-hover:text-[#F27D26] transition-colors">
                   <FileText className="w-5 h-5" />
                 </div>
                 <div className="flex-1">
                   <p className="text-sm font-bold text-white group-hover:text-[#F27D26] transition-colors">{doc.title}</p>
                   <p className="text-[10px] text-white/30">{doc.date} • {doc.size}</p>
                 </div>
                 <Download className="w-4 h-4 text-white/10 group-hover:text-white" />
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};
