import CloseIcon from "@mui/icons-material/Close";
import {User} from "../../api/user";

import styles from "./CustomUserModal.module.scss";

interface CustomModalProps {
  user: User;
  closeModal: () => void;
}

export default function CustomModal({user, closeModal}: CustomModalProps) {
  const {
    avatar: img,
    firstname,
    lastname,
    description,
    join_date: joinDate,
    role,
  } = user;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalNavbar}>
        <p className={styles.modalHeader}>User Details</p>
        <CloseIcon className={styles.closeIcon} onClick={() => closeModal()} />
      </div>
      <div className={styles.modalBody}>
        <img
          className={styles.image}
          src={img}
          alt={`${firstname} ${lastname}`}
        />
        <p className={styles.name}>
          {firstname} {lastname}
        </p>
      </div>
      <div className={styles.modalDetails}>
        <div className={styles.detailsField}>
          <p className={styles.fieldHeader}>Joined:</p>
          <p className={styles.text}>{joinDate}</p>
        </div>
        <div className={styles.detailsField}>
          <p className={styles.fieldHeader}>Role:</p>
          <p className={styles.text}>{role}</p>
        </div>
        <p className={styles.fieldHeader}>Description:</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
