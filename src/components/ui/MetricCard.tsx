import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MetricCardProps {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  subValue?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  trend,
  icon: Icon,
  subValue,
  className
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "glass p-6 rounded-3xl relative overflow-hidden group",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-12 h-12" />
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-xl bg-white/5 text-[#F27D26]">
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-white/40 uppercase tracking-widest">{label}</span>
        </div>
        
        <div className="flex items-baseline gap-3">
          <h3 className="text-3xl font-display font-bold text-white leading-none">
            {value}
          </h3>
          <div className={cn(
            "flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full",
            trend === 'up' ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
          )}>
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        </div>
        
        {subValue && (
          <p className="text-xs text-white/30 mt-2">{subValue}</p>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F27D26]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
