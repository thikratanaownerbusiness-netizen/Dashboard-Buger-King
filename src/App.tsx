/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { OrderManagement } from './components/dashboard/OrderManagement';
import { AIInsightsCenter } from './components/dashboard/AIInsightsCenter';
import { DeliveryLogistics } from './components/dashboard/DeliveryLogistics';
import { MarketingCenter } from './components/dashboard/MarketingCenter';
import { StoreManagement } from './components/dashboard/StoreManagement';
import { InventoryManagement } from './components/dashboard/InventoryManagement';
import { EmployeeWorkforce } from './components/dashboard/EmployeeWorkforce';
import { FinanceExecutive } from './components/dashboard/FinanceExecutive';
import { useDashboardStore } from './store/useDashboardStore';
import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function App() {
  const { activeTab, setUser } = useDashboardStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || 'BK Exec',
          email: firebaseUser.email || '',
          role: 'super_admin',
          avatar: firebaseUser.photoURL || undefined
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'orders':
        return <OrderManagement />;
      case 'delivery':
        return <DeliveryLogistics />;
      case 'marketing':
        return <MarketingCenter />;
      case 'stores':
        return <StoreManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'employees':
        return <EmployeeWorkforce />;
      case 'finance':
        return <FinanceExecutive />;
      case 'ai-insights':
        return <AIInsightsCenter />;
      default:
        return (
          <div className="h-[60vh] flex flex-col items-center justify-center text-white/20">
            <h2 className="text-2xl font-display font-bold">Module Under Construction</h2>
            <p className="mt-2 text-sm italic">The {activeTab} operation center is being optimized for FlameOS v2.0</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      {renderContent()}
    </DashboardLayout>
  );
}
