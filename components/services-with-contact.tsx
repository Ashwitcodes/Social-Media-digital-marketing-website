'use client';

import { useState } from 'react';
import { ContactForm } from './contact-form';
import { Services } from './services';

export function ServicesWithContact() {
  const [selectedService, setSelectedService] = useState('');

  const handleChooseService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Services onChooseService={handleChooseService} />
      <ContactForm selectedService={selectedService} />
    </>
  );
}
