import React from "react";

export type Template = "quiz" | "matching" | "cloze";

interface TemplatePickerProps {
  selected: Template;
  onSelect: (template: Template) => void;
}

export default function TemplatePicker({ selected, onSelect }: TemplatePickerProps) {
  const options: { id: Template; label: string }[] = [
    { id: "quiz", label: "Quiz" },
    { id: "matching", label: "Matching" },
    { id: "cloze", label: "Cloze" },
  ];

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`px-3 py-1 rounded-lg border ${selected === option.id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
