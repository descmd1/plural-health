'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Bell, 
    User2, 
    Menu, X, 
    Calendar, Upload, 
    FileText, Settings, 
    LogOut, MessageSquare, 
    Users } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);

  const menuItems = [
    { icon: User2, label: 'User Profile' },
    { icon: Users, label: 'Switch Role' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Upload, label: 'Upload Paper Record' },
    { icon: FileText, label: 'View Paper Record' },
    { icon: FileText, label: 'Rejected Paper Records' },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout', isDestructive: true }
  ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (userMenuRef.current && 
        !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mobile menu animations
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsMobileVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isMobileMenuOpen]);

  const handleMenuItemClick = (label) => {
    console.log('Menu item clicked:', label);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center 
      w-full bg-[#EDF0F8] py-3 px-4 sm:px-6 border-b border-slate-300">
        {/* Logo */}
        <div className="flex items-center">
          <Image src='./plural logo.svg' alt="logo" width={80} height={80} />
        </div>

        {/* Desktop - Date & Time */}
        <div className="hidden md:flex gap-4">
          <p className="text-normal font-semibold text-sm text-slate-900 m-0">
            22 September
          </p>
          <p className="text-normal text-sm text-slate-600 m-0">
            09:34 AM
          </p>
        </div>

        {/* Desktop - User Info & Notifications */}
        <div className="hidden md:flex items-center gap-4">
          <p className="text-normal font-semibold text-sm text-slate-900 m-0">
            Hi Chris
          </p>
          
          {/* Notifications */}
          <div className="relative">
            <Bell 
              size={24} 
              color="#0B0C7D" 
              fill="#0B0C7D" 
              strokeWidth={1.5}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 
            bg-red-500 rounded-full border-2 border-white"></div>
          </div>

          {/* User Menu Trigger */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex bg-[#A6AFC2] rounded-full p-1 
              hover:bg-[#8B95AB] transition-colors cursor-pointer"
              aria-label="User menu"
            >
              <User2 size={16} color="#fff" fill="#fff" strokeWidth={1.5} />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 
              bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="flex items-center gap-3 p-4 border-b 
                border-gray-200 bg-[#EDF0F8] rounded-t-lg">
                  <div className="flex bg-[#A6AFC2] rounded-full p-2">
                    <User2 size={20} color="#fff" fill="#fff" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Hi Chris</p>
                    <p className="text-sm text-slate-600">22 September • 09:34 AM</p>
                  </div>
                </div>

                {/* Notifications in Dropdown */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div 
                    className="flex items-center justify-between p-2 
                    rounded-lg hover:bg-[#DCE7FF] cursor-pointer transition-colors"
                    onClick={() => handleMenuItemClick('Notifications')}
                  >
                    <div className="flex items-center gap-3">
                      <Bell size={20} color="#0B0C7D" />
                      <span className="font-medium text-slate-900">Notifications</span>
                    </div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="p-2 max-h-80 overflow-y-auto scrollbar-hide">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        onClick={() => handleMenuItemClick(item.label)}
                        className={`flex items-center gap-3 px-3 py-3 
                            rounded-lg cursor-pointer transition-colors ${
                          item.isDestructive 
                            ? 'hover:bg-red-50 text-red-600' 
                            : 'hover:bg-[#DCE7FF] text-slate-900'
                        }`}
                      >
                        <IconComponent size={20} 
                        color={item.isDestructive ? '#DC2626' : '#0B0C7D'} />
                        <span 
                        className={`font-medium ${item.isDestructive ? 'text-red-600' : 'text-slate-900'}`}>
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile - Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-md hover:bg-[#DCE7FF] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} color="#0B0C7D" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileVisible && (
        <div className="fixed inset-0 z-50 md:hidden" ref={mobileMenuRef}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className={`absolute right-0 top-0 h-full w-80 
                bg-white shadow-xl transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between 
            p-4 border-b border-gray-200 bg-[#EDF0F8]">
              <div className="flex items-center gap-3">
                <div className="flex bg-[#A6AFC2] rounded-full p-2">
                  <User2 size={20} color="#fff" fill="#fff" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Hi Chris</p>
                  <p className="text-sm text-slate-600">22 September • 09:34 AM</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} color="#64748B" />
              </button>
            </div>

            {/* Notification Bell */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div 
                className="flex items-center justify-between 
                p-2 rounded-lg hover:bg-[#DCE7FF] cursor-pointer transition-colors"
                onClick={() => handleMenuItemClick('Notifications')}
              >
                <div className="flex items-center gap-3">
                  <Bell size={20} color="#0B0C7D" />
                  <span className="font-medium text-slate-900">Notifications</span>
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2 overflow-y-auto scrollbar-hide 
            h-[calc(100vh-140px)]">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    onClick={() => handleMenuItemClick(item.label)}
                    className={`flex items-center gap-3 px-3 py-3 
                        rounded-lg cursor-pointer transition-colors ${
                      item.isDestructive 
                        ? 'hover:bg-red-50 text-red-600' 
                        : 'hover:bg-[#DCE7FF] text-slate-900'
                    }`}
                  >
                    <IconComponent 
                    size={20} 
                    color={item.isDestructive ? '#DC2626' : '#0B0C7D'} />
                    <span 
                    className={`font-medium ${item.isDestructive ? 'text-red-600' : 'text-slate-900'}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;