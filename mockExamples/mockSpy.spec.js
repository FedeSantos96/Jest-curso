const { test2 } = require('./funciones');

describe("MockSpy", () => {
    beforeAll(() => {
        jest.spyOn(console, 'info') 
        jest.spyOn(console, 'error')
    })
    it("prueba de exito", () => {
        test2(true);
        expect(console.info).toBeCalled();
        expect(console.info).toBeCalledWith("la info fue correcta");
        expect(test2).toMatchSnapshot();
    })

    it("prueba de falla", () => {
        test2(false);
        expect(console.error).toBeCalled();
    })
})