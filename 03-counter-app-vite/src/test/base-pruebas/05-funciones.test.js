import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Prueb as en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
       
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'El_Papi1502';
        const testUser = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }

        const user = getUsuarioActivo(name);
       
        expect(testUser).toEqual(user);
    });
});