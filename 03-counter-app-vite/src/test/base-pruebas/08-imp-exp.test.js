import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });


    test('getHeroeById debe de retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });
    
    test('getHeroesByOwner Retorna un arreglo de los dueños DC', () => {
        const owner = 'DC';
        const ownerArray = getHeroesByOwner(owner);
        expect(ownerArray.length).toEqual(3);
    });

    test('getHeroesByOwner Retorna un arreglo de los dueños MARVEL', () => {
        const owner = 'Marvel';
        const ownerArray = getHeroesByOwner(owner);
        expect(ownerArray.length).toEqual(2);
        expect(ownerArray.length).toEqual(2);
    });
});





