import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import CustomPageNav from "../../src/components/customPageNav/CustomPageNav";

describe("CustomPageNav", () => {
  it("should render the previous and next buttons", () => {
    render(
      <CustomPageNav totalPages={3} currentPage={2} onPageChange={() => {}} />
    );
    const previousButton = screen.getByRole("button", {name: /prev/i});
    const nextButton = screen.getByRole("button", {name: /next/i});
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("should call onPageChange with the correct page number when buttons are clicked", () => {
    const onPageChange = vi.fn();
    render(
      <CustomPageNav
        totalPages={5}
        currentPage={3}
        onPageChange={onPageChange}
      />
    );
    const previousButton = screen.getByRole("button", {name: /prev/i});
    const nextButton = screen.getByRole("button", {name: /next/i});
    fireEvent.click(previousButton);
    expect(onPageChange).toHaveBeenCalledWith(2);
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(4);
  });
});
