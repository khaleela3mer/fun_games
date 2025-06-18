import { useState } from "react";
import TemplatePicker, { Template } from "../../components/builder/TemplatePicker";
import QuizForm from "../../components/builder/QuizForm";
import MatchingForm from "../../components/builder/MatchingForm";
import ClozeForm from "../../components/builder/ClozeForm";

export default function CreateActivity() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>("quiz");

  return (
    <div className="min-h-screen p-6 bg-white">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Build an Activity</h1>
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </header>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Pane */}
        <div>
          <TemplatePicker
            selected={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
          <div className="mt-4">
            {selectedTemplate === "quiz" && <QuizForm />}
            {selectedTemplate === "matching" && <MatchingForm />}
            {selectedTemplate === "cloze" && <ClozeForm />}
          </div>
        </div>

        {/* Right Pane */}
        <div className="border rounded-2xl p-4 bg-gray-50">
          <h2 className="mb-2 text-lg font-medium">Live Preview</h2>
          <div className="text-sm text-gray-600">
            Preview will render here as you fill out the form.
          </div>
        </div>
      </div>
    </div>
  );
}
