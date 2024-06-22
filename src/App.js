import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import { About } from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";

// Lazy loading(Chunking or code spliting or dynamic bundling or on demand loading or dynamic import)
const Grocery = lazy(() => import("./components/Grocery"));
// const heading = React.createElement("h1", { id: "title" }, "Namste React!");
// const jsxHeading = <h1>JSX Heading</h1>;
// console.log(jsxHeading);
// root.render(heading);
// we can have multiple root in our project

const AppLayout = () => {
  console.log("RestaurantCard", <Body />);
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Shivam J",
    };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* loggedInUser-Shivam J */}
        <div className="app">
          {/* Header */}
          {/* <UserContext.Provider value={{ loggedInUser: 'Elon' }}> */}
          {/* loggedInUser-Elon */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path:'/cart',
        element: <Cart/>
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
