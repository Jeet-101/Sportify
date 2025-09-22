import React from 'react';
import { BarChart3, Users, Trophy, Target, FileText, Settings, Home, Filter } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'athletes', label: 'Athletes', icon: Users },
  { id: 'rankings', label: 'Rankings', icon: Trophy },
  { id: 'assessments', label: 'Assessments', icon: Target },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeSection, setActiveSection, isMobileMenuOpen }: SidebarProps) {
  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
      lg:relative lg:translate-x-0 lg:z-auto
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Talent Hub</h2>
            <p className="text-xs text-gray-400">Assessment Portal</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                ${activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">Quick Stats</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Active Athletes:</span>
              <span className="text-white font-semibold">2,847</span>
            </div>
            <div className="flex justify-between">
              <span>New This Week:</span>
              <span className="text-green-400 font-semibold">+127</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}