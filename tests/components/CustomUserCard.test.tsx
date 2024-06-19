import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import CustomUserCard from "../../src/components/CustomUserCard/CustomUserCard";
import CustomUserModal from "../../src/components/CustomUserModal/CustomUserModal";

describe("CustomUserCard", () => {
  const testUser = {
    id: "980b82bf-d1af-4e66-ab93-004da059b275",
    username: "nberwick0",
    firstname: "Norton",
    lastname: "Berwick",
    email: "nberwick0@liveinternet.ru",
    avatar: "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
    role: "Subcontractor",
    join_date: "5/4/2023",
    description: "I love to build things and play ball",
  };

  it("should render the previous and next buttons", () => {
    render(<CustomUserCard user={testUser} onClick={() => {}} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "https://robohash.org/illumvitaeea.png?size=50x50&set=set1"
    );
    const description = screen.getByText(
      "I love to build things and play ball..."
    );
    expect(description).toBeInTheDocument();
  });

  it("should open a modal with user details when view more is clicked", () => {
    const onClick = () =>
      render(<CustomUserModal user={testUser} closeModal={() => {}} />);
    render(<CustomUserCard user={testUser} onClick={() => onClick()} />);
    const viewMoreText = screen.getByText("View More");
    fireEvent.click(viewMoreText);
    const joinDate = screen.getByText("5/4/2023");
    expect(joinDate).toBeInTheDocument();
  });
});
