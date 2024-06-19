import {useState} from "react";
import {User, useGetUsers} from "../api/user";
import CustomUserCard from "../components/customUserCard/CustomUserCard";
import CustomPageNav from "../components/customPageNav/CustomPageNav";
import styles from "./User.module.scss";
import CustomUserModal from "../components/customUserModal/CustomUserModal";

export default function Users() {
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {data: users, isLoading, isError} = useGetUsers();

  // NOTE: Can move this logic to a separate file too
  const usersPerPage = 3;
  const totalPages = Math.ceil((users?.length || 0) / usersPerPage);
  const usersVisited = (page - 1) * usersPerPage;
  const usersToDisplay = users?.slice(
    usersVisited,
    usersVisited + usersPerPage
  );

  const onViewMore = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // NOTE: Loading and Error states could be separate components
  if (isLoading) {
    return <p className={styles.emptySateText}>Loading All Users...</p>;
  }
  if (isError) {
    return (
      <p className={styles.emptySateText}>There was an error loading users..</p>
    );
  }

  const CurrentPageContent = () => (
    <div className={styles.usersContainer}>
      {usersToDisplay?.map((user) => (
        <div key={user.id} className={styles.cardContainer}>
          <CustomUserCard user={user} onClick={(user) => onViewMore(user)} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.screen}>
      {usersToDisplay?.length ? (
        <CurrentPageContent />
      ) : (
        <p className={styles.emptySateText}>There are no users</p>
      )}
      <CustomPageNav
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
      {isModalOpen && (
        <CustomUserModal
          user={selectedUser!}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
