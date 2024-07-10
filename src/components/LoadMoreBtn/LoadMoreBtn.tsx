interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => (
  <button className="load-more-btn" onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;