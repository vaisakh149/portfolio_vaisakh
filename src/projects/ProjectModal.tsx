import React, { useEffect } from "react";

interface ProjectModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ProjectModal = ({
  children,
  onClose,
}: ProjectModalProps) => {
  useEffect(() => {
    document.body.classList.add("modal-open");

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.classList.remove(
        "modal-open"
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default ProjectModal;