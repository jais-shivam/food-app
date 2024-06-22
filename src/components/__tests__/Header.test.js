const { render, screen, fireEvent } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { BrowserRouter } = require("react-router-dom");
const { default: appStore } = require("../../utils/appStore");
const { Header } = require("../Header");
import "@testing-library/jest-dom";


it('Should load Header component with login button',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button',{name:'Login'});
    // const loginBtnWithTxt = screen.getByText('Login')
    // console.log('loginBtn',loginBtn);
    expect(loginBtn).toBeInTheDocument();

});

it('Should load Header and cart is empty',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartSize = screen.getByText('Cart');
    expect(cartSize).toBeInTheDocument();

});

it('Should change login button to logout on click',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button',{name:'Login'});
    // Click event test
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole('button',{name:'Logout'});
    expect(logoutBtn).toBeInTheDocument();

});