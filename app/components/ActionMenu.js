'use client'
import { useState, useRef, useEffect } from 'react';
import { EllipsisVertical } from 'lucide-react';

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    {
      action: 'Create appointment'
    },
    {
      action: 'Create invoice'
    },
    {
      action: 'View patient profile'
    },
    {
      action: 'View next of kin'
    },
    {
      action: 'Add demographic info'
    },
    {
      action: 'Update insurance details'
    },
    {
      action: 'Scan paper records'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleActionClick = (action) => {
    console.log('Action clicked:', action);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div 
        className="flex items-center justify-center w-8 h-8 
        rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <EllipsisVertical size={16} color="black" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 
        bg-white rounded-lg shadow-xl z-50 min-w-[220px] 
        pb-8 max-h-80 overflow-y-hidden">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleActionClick(item.action)}
                  className="flex items-center px-4 py-3 cursor-pointer 
                  hover:bg-[#E7E7FC] transition-colors"
                >  
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {item.action}
                    </div>
                  </div>
                </div>
                {index < menuItems.length - 1 && (
                  <div className="h-px bg-gray-100 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;