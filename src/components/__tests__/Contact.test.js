// import { screen } from "@testing-library/dom";
import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Contact Us page test case', () => {
    
    // **Note - we can write 'it' in place of 'test' there is no diffrence it is just a alias.

    it('Should load contact us component and find heading',()=>{
        render(<Contact/>);
        
        const heading = screen.getByRole('heading');
        // console.log('heading',heading);
        expect(heading).toBeInTheDocument();    
    });
    
    test('Should load contact us component and find button',()=>{
        render(<Contact/>);
        
        const button = screen.getByText('Submit');
        // console.log('heading',button);
        expect(button).toBeInTheDocument();    
    });
    
    test('Should load input name inside contact component',()=>{
        render(<Contact/>);
        
        const inputName = screen.getByPlaceholderText('name');
        // console.log('heading',button);
        expect(inputName).toBeInTheDocument();    
    });
    
    test('Should load 2 input box inside contact component',()=>{
        render(<Contact/>);
        
        const allInput = screen.getAllByRole('textbox');
        // console.log('heading',allInput);
        expect(allInput.length).toBe(2);    
    });

});

