// src/components/FillInTheBlanks.jsx
import React, { useEffect, useRef, useState } from "react";

export default function FillInTheBlanks({ verse }) {
  // Extract the words inside {} which are the answer keys to the blanks.
  const segments = verse ? verse.text.split(/\{[^{}]+\}/) : [];
  const blanks = verse ? [...verse.text.matchAll(/\{([^{}]+)\}/g)].map(match => match[1]) : [];

  const [inputs, setInputs] = useState([]);
  const firstInputRef = useRef(null);

  // Initialize inputs and automatically focus the first input field on load
  useEffect(() => {
    if (verse) {
      setInputs(Array(blanks.length).fill(""));
      
      const timer = setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [verse, blanks.length]);

  const handleInputChange = (index, value) => {
    const nextInputs = [...inputs];
    nextInputs[index] = value;
    setInputs(nextInputs);
  };

  if (!verse) {
    return <div style={styles.error}>No verse data available.</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fill in the blanks</h1>
      
      <div style={styles.verseContainer}>
        {segments.map((segment, index) => (
          <span key={index}>
            {segment}
            {/* Render an input field after every segment except the final one */}
            {index < segments.length - 1 && (
              <input
                type="text"
                ref={index === 0 ? firstInputRef : null}
                value={inputs[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                style={styles.input}
                placeholder=""
                autoComplete="off"
                spellCheck="false"
              />
            )}
          </span>
        ))}
      </div>

      <div style={styles.referenceContainer}>
        —{" "}
        <a
          href={verse.link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          {verse.reference}
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0 0 2rem 0",
    color: "#FFFFFF",
    letterSpacing: "-0.03em",
  },
  verseContainer: {
    fontSize: "1.5rem",
    lineHeight: "2.2",
    marginBottom: "1.5rem",
    maxWidth: "800px",
  },
  input: {
    background: "transparent",
    border: "none",
    borderBottom: "2px solid #FFFFFF",
    color: "#FFFFFF",
    fontSize: "1.5rem",
    textAlign: "center",
    width: "140px",
    margin: "0 8px",
    outline: "none",
    padding: "0 4px",
  },
  referenceContainer: {
    fontSize: "1.2rem",
    color: "#A0A0A0",
    marginTop: "1rem",
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    transition: "opacity 0.2s ease",
  },
  error: {
    color: "#FF3333",
    fontSize: "1.2rem",
    textAlign: "center",
    padding: "2rem",
  },
};