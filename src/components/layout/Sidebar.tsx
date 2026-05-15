import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Truck, 
  Users, 
  Megaphone, 
  Crown, 
  Store, 
  Package, 
  UserCircle, 
  BarChart3, 
  BrainCircuit, 
  DollarSign, 
  FileText, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Flame
} from 'lucide-react';
import { useDashboardStore } from '../../store/useDashboardStore';
import { cn } from '../../lib/utils';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'delivery', label: 'Delivery', icon: Truck },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'loyalty', label: 'Loyalty', icon: Crown },
  { id: 'stores', label: 'Stores', icon: Store },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'employees', label: 'Employees', icon: UserCircle },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'ai-insights', label: 'AI Insights', icon: BrainCircuit },
  { id: 'finance', label: 'Finance', icon: DollarSign },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar = () => {
  const { isSidebarOpen, activeTab, setActiveTab, toggleSidebar } = useDashboardStore();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isSidebarOpen ? 280 : 80 }}
      className="fixed left-0 top-0 h-screen bg-[#050505] border-r border-white/10 z-50 flex flex-col"
    >
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flame-gradient flex items-center justify-center flame-glow">
            <Flame className="text-white w-6 h-6" />
          </div>
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-display font-bold text-xl tracking-tight"
              >
                FlameOS
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative",
                isActive ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive && "text-[#F27D26]")} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute left-0 w-1 h-6 bg-[#F27D26] rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className={cn(
          "flex items-center gap-3 p-3 rounded-xl",
          isSidebarOpen ? "bg-white/5" : "justify-center"
        )}>
          <div className="w-8 h-8 rounded-lg bg-[#F27D26]/20 flex items-center justify-center text-[#F27D26] font-bold">
            BK
          </div>
          {isSidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">Burger King Corp.</p>
              <p className="text-[10px] text-white/40 truncate">Global Headquarters</p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};
