import { useState, useCallback } from 'react';

export const useGuestSelector = (initialGuests = { adults: 2, children: 0, rooms: 1 }) => {
  const [guests, setGuests] = useState(initialGuests);
  const [isOpen, setIsOpen] = useState(false);

  const updateGuests = useCallback((type, operation) => {
    setGuests(prev => {
      const newGuests = { ...prev };
      
      if (operation === 'add') {
        if (type === 'adults' && newGuests.adults < 8) newGuests.adults++;
        if (type === 'children' && newGuests.children < 8) newGuests.children++;
        if (type === 'rooms' && newGuests.rooms < 8) newGuests.rooms++;
      } else if (operation === 'remove') {
        if (type === 'adults' && newGuests.adults > 1) newGuests.adults--;
        if (type === 'children' && newGuests.children > 0) newGuests.children--;
        if (type === 'rooms' && newGuests.rooms > 1) newGuests.rooms--;
      }
      
      return newGuests;
    });
  }, []);

  const getGuestText = useCallback(() => {
    const totalGuests = guests.adults + guests.children;
    return `${totalGuests} Guest${totalGuests !== 1 ? 's' : ''} ${guests.rooms} Room${guests.rooms !== 1 ? 's' : ''}`;
  }, [guests]);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    guests,
    isOpen,
    updateGuests,
    getGuestText,
    toggleOpen,
    close
  };
};
