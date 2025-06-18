export type Template = "quiz" | "matching" | "cloze";

interface TemplatePickerProps {
  selected: Template;
  onSelect: (template: Template) => void;
}

export default function TemplatePicker({ selected, onSelect }: TemplatePickerProps) {
  const templates: Template[] = ["quiz", "matching", "cloze"];
  return (
    <div className="flex gap-2">
      {templates.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onSelect(t)}
          className={`px-3 py-2 rounded-md border ${
            selected === t ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}
