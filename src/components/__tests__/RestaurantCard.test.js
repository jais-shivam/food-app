import { render, screen } from "@testing-library/react";
import RestaurantCard, { withReviewLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMocks";
import MOCK_DATA_WITH_REVIEW from "../mocks/resCardMocksWithReview.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard data={MOCK_DATA} />);

  const resName = screen.getByText("Baking Bad - Pizza Delivery");
  expect(resName).toBeInTheDocument();
});

it("should render RestaurantCard component with promotes label", () => {
  // HW- Test HOC : withPromotedLabel
  const RestaurantCardWithReviewLabel = withReviewLabel(RestaurantCard);
  render(<RestaurantCardWithReviewLabel data={MOCK_DATA_WITH_REVIEW} />);

  const ele = screen.getByText("1k+ Review");
  // console.log('ele', ele);
  expect(ele).toBeInTheDocument();
});
