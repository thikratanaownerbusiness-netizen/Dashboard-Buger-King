import { create } from 'zustand';
import { User, UserRole } from '../types';

interface DashboardState {
  user: User | null;
  activeTab: string;
  isSidebarOpen: boolean;
  setUser: (user: User | null) => void;
  setActiveTab: (tab: string) => void;
  toggleSidebar: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  user: null,
  activeTab: 'dashboard',
  isSidebarOpen: true,
  setUser: (user) => set({ user }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
