import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { Header } from "../Header";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended(20)");
  fireEvent.click(accordianHeader);
  //   console.log('foodItems', foodItems);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText('Cart(1)')).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(21);
  fireEvent.click(screen.getByRole('button',{name:'Clear cart'}));
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText('Cart is empty.')).toBeInTheDocument();

});
