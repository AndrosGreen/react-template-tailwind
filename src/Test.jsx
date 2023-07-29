import { useState } from "react";
import Dialog from "./Dialog";

const Test = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(false);
  };
  const onOpen = () => {
    setModalOpen(true);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col">
        <button className="btn" onClick={onOpen}>
          Toggle modal
        </button>
        <input type="text" className="input" />
      </div>
      <Dialog open={modalOpen} onClose={onClose} />
    </div>
  );
};

export default Test;
