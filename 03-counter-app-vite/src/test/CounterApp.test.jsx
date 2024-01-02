import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";



describe("CounterApp.test.js test", () => {

    const iniitialValue = 10;

    test("debe de hacer match con el snapshot", () => {
        const { container } = render(
            <CounterApp
                value={iniitialValue}
            />
        )
        expect(container).toMatchSnapshot();
    });


    test("debe de mostrar el valor inicial de 100 en el <Counter value={100}/>", () => {
        render(
            <CounterApp
                value={100}
            />
        );


        expect(screen.getByText(100)).toBeTruthy();
    });


    test('Debe de incrementar el valor', () => {
        render(
            <CounterApp
                value={iniitialValue}
            />
        );

        // Evento que da click
        // screen.getByText('+1') -> Obtenemos el botón deseado
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(11)).toBeTruthy();
    });

    test('Debe funcionar el botón de reset', () => {
        render(
            <CounterApp
                value={iniitialValue}
            />
        );

        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));


        /* 
        FORMAS DE OBTENER UN ELEMENTO DE HTML
        podemos agregar la etiqueta aria-label, id etc como
        identificador de nusetro objeto
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
        
        </>
        
        por ejemplo si queremos acceder al button reset lo haríamos
        de la siguiente maenera
        */

        //Obtenemos el botón
        const resetButton = screen.getByRole('button', { name: 'btn-reset' });

        // Aplicamos el evento click en el botón
        fireEvent.click(resetButton);
        expect(screen.getByText(iniitialValue)).toBeTruthy();
    });
});
