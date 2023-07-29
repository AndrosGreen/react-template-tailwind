const DHeader = ({ onClose }) => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className="text-2xl font-bold">Title</h2>
      <button
        className="text-slate-400 hover:text-slate-600 p-3 hover:bg-gray-100 rounded-lg"
        onClick={onClose}
      >
        <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gray-500/30 h-full flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-full bg-white p-2 px-4 py-4 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <DHeader onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Dialog;
