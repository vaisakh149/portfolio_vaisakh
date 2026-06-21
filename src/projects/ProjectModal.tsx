import React from "react";

interface ProjectModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ProjectModal = ({
  children,
  onClose,
}: ProjectModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <button onClick={onClose}>
          ✕
        </button>

        {children}

      </div>
    </div>
  );
};

export default ProjectModal;