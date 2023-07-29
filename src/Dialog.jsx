const Dialog = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gray-500/30 h-full flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white p-2 rounded-md">Hi</div>
    </div>
  );
};

export default Dialog;
