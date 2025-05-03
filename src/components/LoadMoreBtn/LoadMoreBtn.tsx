import React from "react";

type Props = {
  loadMore: () => void;
};

const LoadMoreBtn = ({ loadMore }: Props) => {
  return (
    <button type="button" onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
