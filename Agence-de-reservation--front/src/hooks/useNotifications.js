import { useState, useCallback } from 'react';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New! Booking flights from New York ✈️',
      message: 'Find the flexible ticket on flights around the world. Start searching today',
      time: 'Wednesday',
      isRead: false
    },
    {
      id: 2,
      title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
      message: 'Limited time offer on selected hotels',
      time: '15 Nov 2022',
      isRead: true
    }
  ]);

  const markAsRead = useCallback((id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  }, []);

  const addNotification = useCallback((notification) => {
    const newNotification = {
      id: Date.now(),
      ...notification,
      isRead: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification
  };
};
