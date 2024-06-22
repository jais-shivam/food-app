import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should search restaurant list for Pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(20)

  const searchBtn = screen.getByRole('button', {name:'Search'});
  const searchInput = screen.getByTestId('searchInput');
  fireEvent.change(searchInput,{target:{value:'pizza'}});
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId('resCard');
  // console.log(searchInput);
  expect(cardsAfterSearch.length).toBe(7)
});

it('Should filter Top Rated Restaurants on click of button',async()=>{
  // Top Rated Restaurant
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId('resCard');
  expect(cardsBeforeFilter.length).toBe(20)

  const topRatedResBtn = screen.getByRole('button', {name:'Top Rated Restaurant'});
  fireEvent.click(topRatedResBtn);
  const topRatedResCards = screen.getAllByTestId('resCard');
  expect(topRatedResCards.length).toBe(2)
})
