import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useDashboardStore } from '../../store/useDashboardStore';
import { motion } from 'motion/react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useDashboardStore();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5E9DA]">
      <Sidebar />
      <motion.div
        animate={{ paddingLeft: isSidebarOpen ? 280 : 80 }}
        className="flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
};
