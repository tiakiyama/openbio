
import React from 'react';
import { Label } from '@/components/ui/label';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  title: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup = ({ title, name, options, value, onChange }: RadioGroupProps) => {
  return (
    <div className="mb-6">
      <Label className="text-white text-lg font-medium mb-4 block">{title}</Label>
      <div className="flex gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center text-white">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-2 w-4 h-4 text-[#7918f9]"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};
