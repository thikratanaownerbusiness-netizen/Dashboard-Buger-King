import React from 'react';
import { Bell, Search, Globe, LogIn, LogOut } from 'lucide-react';
import { useDashboardStore } from '../../store/useDashboardStore';
import { format } from 'date-fns';
import { auth } from '../../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export const Header = () => {
  const { user, setUser } = useDashboardStore();
  const now = new Date();

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser({
        id: result.user.uid,
        name: result.user.displayName || 'BK Exec',
        email: result.user.email || '',
        role: 'super_admin', // Default for now
        avatar: result.user.photoURL || undefined
      });
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search queries, stores, orders..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#F27D26]/50 transition-colors"
          />
        </div>
        <div className="h-6 w-[1px] bg-white/10" />
        <div className="flex items-center gap-2 text-xs text-white/40">
           <Globe className="w-3 h-3" />
           <span>Global Operations</span>
           <span className="mx-2">•</span>
           <span>{format(now, 'EEE, MMM d, yyyy')}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors group">
              <Bell className="w-5 h-5 text-white/60 group-hover:text-white" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#F27D26] rounded-full border-2 border-[#050505]" />
            </button>
            
            <div className="h-8 w-[1px] bg-white/10" />

            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-sm font-bold text-white">{user.name}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">{user.role.replace('_', ' ')}</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#F27D26]/30 p-0.5 relative group">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-full h-full rounded-full object-cover"
                />
                <button 
                  onClick={handleSignOut}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <LogOut className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <button 
            onClick={handleSignIn}
            className="flex items-center gap-2 px-4 py-2 rounded-xl flame-gradient text-white font-bold text-sm"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};
