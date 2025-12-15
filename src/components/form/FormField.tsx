
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export const FormField = ({ 
  id, 
  label, 
  type = "text", 
  value, 
  onChange, 
  required = false,
  placeholder 
}: FormFieldProps) => {
  return (
    <div>
      <Label htmlFor={id} className="text-white text-sm mb-2 block">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="bg-white border-none text-black"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
