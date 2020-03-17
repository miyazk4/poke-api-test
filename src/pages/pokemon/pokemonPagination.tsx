import React from "react";

interface PagiProps {
  goToPreviousPage: (() => void) | null; // Ou null pq é o q tamos a dizer no index
  goToNextPage: (() => void) | null;
}

export default function Pagination({
  goToPreviousPage,
  goToNextPage
}: PagiProps) {
  return (
    // Se tiver previous page render
    <div>
      {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
}
