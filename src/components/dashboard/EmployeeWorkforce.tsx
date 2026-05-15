import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Clock, 
  Star, 
  Activity, 
  Search,
  Filter,
  BarChart3,
  Calendar,
  MoreVertical,
  Plus
} from 'lucide-react';
import { cn } from '../../lib/utils';

const employees = [
  { id: 'BK-E1', name: 'Jordan Hayes', role: 'Store Manager', store: 'Miami #401', performance: 98, status: 'on-shift', hours: 42 },
  { id: 'BK-E2', name: 'Mia Thompson', role: 'Kitchen Lead', store: 'Miami #401', performance: 94, status: 'on-shift', hours: 38 },
  { id: 'BK-E3', name: 'Chris Evans', role: 'Crew Member', store: 'Miami #401', performance: 88, status: 'off-shift', hours: 24 },
  { id: 'BK-E4', name: 'Elena Rodriguez', role: 'Delivery Lead', store: 'Miami #401', performance: 91, status: 'on-shift', hours: 40 },
  { id: 'BK-E5', name: 'Sam Whitman', role: 'Crew Member', store: 'Miami #401', performance: 72, status: 'training', hours: 12 },
];

export const EmployeeWorkforce = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Workforce Intelligence</h1>
          <p className="text-white/40">Staffing optimization, productivity scoring, and labor cost analysis.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 text-white font-bold transition-all hover:bg-white/5">
             <Calendar className="w-5 h-5 text-[#FFB30F]" />
             Optimize Schedules
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl flame-gradient text-white font-bold transition-all hover:scale-105">
             <Plus className="w-5 h-5" />
             Onboard Staff
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Staff', value: '4,120', icon: Users, color: 'text-blue-400' },
          { label: 'Labor Efficiency', value: '94%', icon: Activity, color: 'text-emerald-400' },
          { label: 'Avg. Rating', value: '4.8/5', icon: Star, color: 'text-[#FFB30F]' },
          { label: 'Total Hours', value: '164k', icon: Clock, color: 'text-[#F27D26]' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl">
             <div className="p-2 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                <stat.icon className={cn("w-5 h-5", stat.color)} />
             </div>
             <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">{stat.label}</p>
             <h3 className="text-2xl font-display font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[2rem] overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
             <h3 className="text-xl font-display font-bold text-white">Staff Performance Feed</h3>
             <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="Search staff..." 
                    className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs outline-none focus:border-[#F27D26]/40 transition-all"
                  />
                </div>
                <button className="p-2 glass rounded-xl text-white/40 hover:text-white"><Filter className="w-4 h-4" /></button>
             </div>
          </div>
          
          <table className="w-full text-left">
             <thead>
               <tr className="text-[10px] font-bold text-white/30 uppercase tracking-widest border-b border-white/5">
                 <th className="p-6">Employee</th>
                 <th className="p-6">Performance</th>
                 <th className="p-6">Weekly Hours</th>
                 <th className="p-6">Status</th>
                 <th className="p-6"></th>
               </tr>
             </thead>
             <tbody>
               {employees.map((emp, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="p-6">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40">
                             {emp.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{emp.name}</p>
                            <p className="text-[10px] text-white/30">{emp.role} • {emp.store}</p>
                          </div>
                       </div>
                    </td>
                    <td className="p-6">
                       <div className="flex items-center gap-3">
                          <div className="flex-1 w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                             <div 
                              className={cn("h-full", emp.performance > 90 ? "bg-emerald-400" : "bg-[#FFB30F]")} 
                              style={{ width: `${emp.performance}%` }}
                             />
                          </div>
                          <span className="text-xs font-bold text-white">{emp.performance}%</span>
                       </div>
                    </td>
                    <td className="p-6 text-sm text-white/60 font-mono">{emp.hours}h</td>
                    <td className="p-6">
                       <span className={cn(
                         "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest leading-none",
                         emp.status === 'on-shift' ? "bg-emerald-400/10 text-emerald-400" :
                         emp.status === 'training' ? "bg-blue-400/10 text-blue-400" : "bg-white/10 text-white/40"
                       )}>
                         {emp.status}
                       </span>
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

        <div className="space-y-6">
           <div className="glass rounded-[2rem] p-8 bg-gradient-to-br from-[#FFB30F]/10 to-transparent">
              <h3 className="text-xl font-display font-bold text-white mb-6">Staffing Optimization</h3>
              <div className="space-y-6">
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Clock className="w-8 h-8" /></div>
                    <p className="text-[10px] font-bold text-[#FFB30F] uppercase tracking-widest mb-1">Peak Prediction</p>
                    <p className="text-sm font-bold text-white">Friday 18:00 - 20:00</p>
                    <p className="text-xs text-white/40 mt-2">Recommended: <span className="text-emerald-400 font-bold">+3 Staff</span> in Kitchen</p>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-white/40 font-bold">Labor Cost Gap</span>
                       <span className="text-xs font-bold text-emerald-400">-$2,400 /mo</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full w-3/4 bg-emerald-400 rounded-full" />
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass rounded-[2rem] p-8">
              <h3 className="text-xl font-display font-bold text-white mb-6">Training Analytics</h3>
              <div className="space-y-4">
                 {[
                   { label: 'Food Safety', completetion: 98 },
                   { label: 'Flame Grill Master', completetion: 74 },
                   { label: 'Guest Service v2', completetion: 42 },
                 ].map((t, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                         <span className="text-white/40">{t.label}</span>
                         <span className="text-white">{t.completetion}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-[#F27D26]" style={{ width: `${t.completetion}%` }} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
