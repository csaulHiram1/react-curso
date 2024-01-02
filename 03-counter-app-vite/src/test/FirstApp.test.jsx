
import { render } from "@testing-library/react";
import { FirstApp } from "../../src/FirstApp";



describe("Pruebas en FirstApp.jsx", () => {

    /*  test("Debe hacer match con el snapshot", () => {
 
         const title = 'Hola soy goku';
         const { container } = render(<FirstApp title={title} subtitle="sub" />)
         // console.log(container);
 
         // Esta prueba  evalúa que el componente no cambie
         // evalua el producto del componente y lo guarda en el directorio de 
         //__snapshots__
         expect(container).toMatchSnapshot();
     }); */

    test('debe de mostrar el título en un h1', () => {
        const title = 'Hola soy goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} subtitle="sub" />)

        // verificar que el título exista
        expect(getByText(title)).toBeTruthy();


        /*
         verificar que exista un título dentro de una etiqueta h1  
         const h1 = container.querySelector('h1');
         console.log(h1.innerHTML);
         expect(h1.innerHTML).toContain(title); 
         */


        /* Para usar el método getByText tenemos que asignarle 
            el atributo  data-testid ="test-title" al atributo
            que estamos testeando seguido de un id (en este caso
            el id es test-title) */
        expect(getByTestId('test-title').innerHTML).toBe(title);



    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy goku';
        const subtitle = 'Soy un subtitulo'
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle= {subtitle}
            />
        )

        // verificar que el título exista en un número 
        // determinado de veces
        expect(getAllByText(subtitle).length).toBe(2);
    });

});