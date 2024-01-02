
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";



describe("Pruebas en FirstApp.jsx", () => {

    const title = "Hola, soy Goku";
    const subtitle = "Soy un subtitulo";

    test("debe hacer match con el snapshot", () => {
        const { container } = render(
            <FirstApp
                title={title}
            />
        )
        expect(container).toMatchSnapshot();
    });


    test('debe hacer match con el mensaje "Hola, soy Goku"', () => {
        render(
            <FirstApp
                title={title}
            />
        )

        // screen muestra el estado del árbol de html actualizado
        expect(screen.getByText).toBeTruthy();
    });

    test('Mostrar el título en un h1', () => {
        render(
            <FirstApp
                title={title}
            />
        )

        // Evaluar que exista un h1 y que dentro del h1 exista determinado texto
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('debe de enviar el subtítulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        )

        // Evaluar que exista un h1 y que dentro del h1 exista determinado texto
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});