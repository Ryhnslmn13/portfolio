import { useEffect, useState } from "react";

const roles = [
  "SOFTWARE ENGINEER",
  "AI ENGINEER",
  "DATA ENGINEER",
];

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    // Typing
    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 70);
    }

    // Finished typing → wait 3 seconds
    else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    }

    // Deleting
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 35);
    }

    // Finished deleting → next role
    else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="typing-role">
      <span className="typing-prefix">&gt;&nbsp;</span>
      <span>{text}</span>
      <span className="typing-cursor">_</span>
    </span>
  );
}