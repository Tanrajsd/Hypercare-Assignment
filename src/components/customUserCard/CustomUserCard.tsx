import {User} from "../../api/user";
import styles from "./CustomUserCard.module.scss";

interface CustomUserCardProps {
  user: User;
  onClick: (user: User) => void;
}

function CustomUserCard({user, onClick}: CustomUserCardProps) {
  const {avatar: img, firstname, lastname, description} = user;

  const sanitizedDescription = description.slice(0, 200);

  const CardHeader = () => (
    <div className={styles.cardHeader}>
      <img
        className={styles.image}
        src={img}
        alt={`${firstname} ${lastname}`}
      />
      <p className={styles.name}>
        {firstname} {lastname}
      </p>
    </div>
  );

  const CardBody = () => (
    <div className={styles.cardBody}>
      <p className={styles.text}>
        {sanitizedDescription}
        {"..."}
      </p>
      <p className={styles.moreText} onClick={() => onClick(user)}>
        View More
      </p>
    </div>
  );

  return (
    <div className={styles.card}>
      <CardHeader />
      <CardBody />
    </div>
  );
}

export default CustomUserCard;
