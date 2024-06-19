import styles from "./CustomPageNav.module.scss";

interface CustomPageNavProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function CustomPageNav({
  totalPages,
  currentPage,
  onPageChange,
}: CustomPageNavProps) {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${styles.leftButton}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"prev"}
      </button>
      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {"next"}
      </button>
    </div>
  );
}

export default CustomPageNav;
