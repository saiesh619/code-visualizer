import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ setOutput }: { setOutput: (output: string) => void }) {
  const [code, setCode] = useState("// Start coding!");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");

  function handleRun() {
    try {
      const result = eval(code);
      setOutput(String(result));
    } catch (err) {
      setOutput(String(err));
    }
  }

  function handleSubmit() {
    alert("Code submitted!");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: theme === "vs-dark" ? "#0f111a" : "#f5f5f5",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          backgroundColor: theme === "vs-dark" ? "#1c1e29" : "#e5e7eb",
          borderBottom: "1px solid #2d2f3a",
        }}
      >
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            padding: "6px 12px",
            backgroundColor: theme === "vs-dark" ? "#2d2f3a" : "#fff",
            color: theme === "vs-dark" ? "#fff" : "#000",
            border: "1px solid #3c3f4a",
            borderRadius: "4px",
            outline: "none",
          }}
        >
          <option value="typescript">Delphi</option>
          <option value="typescript">Pascal</option>
        </select>

        <button
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
          style={{
            backgroundColor: theme === "vs-dark" ? "#4b5563" : "#d1d5db",
            color: theme === "vs-dark" ? "#fff" : "#000",
            padding: "6px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {theme === "vs-dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Resizable Editor */}
      <div
        style={{
          resize: "horizontal",
          overflow: "auto",
          minHeight: "1200px",
          maxHeight: "80vh",
          borderBottom: `1px solid ${theme === "vs-dark" ? "#2d2f3a" : "#ccc"}`,
        }}
      >
        <Editor
          width="100%"
          height="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme={theme}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            fontFamily: "'Fira Code', monospace",
            lineNumbers: "on",
            padding: { top: 12 },
            scrollbar: { verticalScrollbarSize: 6 },
          }}
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          backgroundColor: theme === "vs-dark" ? "#1c1e29" : "#e5e7eb",
          padding: "12px",
          borderTop: "1px solid #2d2f3a",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <button
          onClick={handleRun}
          style={{
            backgroundColor: "#3c82f6",
            color: "#fff",
            padding: "6px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Run
        </button>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#10b981",
            color: "#fff",
            padding: "6px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
