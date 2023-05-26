const { test } = require('./funciones');

describe("MockFunction", () => {
    it("se prueba la funcion test", () => {
        const functiontest = jest.fn();
        test("asd", functiontest);

        expect(functiontest).toBeCalled();
    })

    it("se prueba que la funcion test se llame 1 vez", () => {
        const functiontest = jest.fn();
        test("123", functiontest);

        expect(functiontest).toBeCalledTimes(1);
    })

    it("se prueba que la funcion test se llame 2 vez", () => {
        const functiontest = jest.fn();
        test("asd", functiontest);

        expect(functiontest).toBeCalledTimes(2);
    })
})