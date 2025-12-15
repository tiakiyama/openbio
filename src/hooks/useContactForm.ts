
import { useState } from 'react';

interface ContactFormData {
  companyType: 'private' | 'public';
  nome: string;
  sobrenome: string;
  empresa: string;
  email: string;
  telefone: string;
  estado: string;
  mensagem: string;
  contactPreference: 'email' | 'whatsapp' | 'phone';
}

const initialFormData: ContactFormData = {
  companyType: 'private',
  nome: '',
  sobrenome: '',
  empresa: '',
  email: '',
  telefone: '',
  estado: '',
  mensagem: '',
  contactPreference: 'email'
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};
