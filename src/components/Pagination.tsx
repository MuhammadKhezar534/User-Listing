import React from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onNext,
  onPrevious,
  isNextDisabled,
  isPreviousDisabled,
}) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-10">
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        style={{ opacity: isPreviousDisabled ? 0.6 : 1 }}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Previous
      </button>
      <span className="self-center">{`Page ${currentPage}`}</span>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        style={{ opacity: isNextDisabled ? 0.6 : 1 }}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
