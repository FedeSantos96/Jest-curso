const { test, test3, test4 } = require('./funciones');
const { nuevaFuncion2, clientRest } = require('./funciones2');

jest.mock('./funciones2');

describe("MockFunction", () => {
    const functiontest = jest.fn();
    clientRest.mockImplementation(() => {
        return {
            post: jest.fn()
                .mockImplementationOnce(() => Promise.resolve({ status: 200, data: "ok" }))
                .mockImplementationOnce(() => Promise.reject({ status: 200, data: "ok" }))
        }
    });
    // beforeEach(() => {

    // })
    afterEach(() => {
        functiontest.mockClear();
    })
    
    it("se prueba la funcion test", () => {
        test("123", functiontest);

        expect(functiontest).toBeCalledTimes(1);
    })

    it("caso2", () => {
        test("123", functiontest);

        expect(functiontest).toBeCalledTimes(1);
    })

    it("caso3", () => {
        test("123", functiontest);

        expect(functiontest).toBeCalledTimes(1);
    })

    it("test3", () => {
        // nuevaFuncion2.mockImplementation(() => {
        //     console.log("console mockeadp") //opcion1
        //     return true;
        // })
        nuevaFuncion2.mockReturnValue(true) //opcion2
        expect(test3()).toBeTruthy();
    })


    it("test4 caso then", () => {
        expect(test4()).resolves.toBe({"data": "ok", "status": 200});
    })

    it("test4 caso catch", () => {
        expect(test4()).rejects.toBe({"data": "error", "status": 500});
    })
})


//Test3
    // nuevaFuncion2
        //funcitonExterna -> esta de problema
/*

---------
nuevaFuncion2 -> igual a lo que le mockeas

opcion1

const nuevaFuncion2 = () => {
    console.log("console mockeadp") //opcion1
    return true;
}

opcion2 
const nuevaFuncion2 = () => {
    return true;
}

spyon sin mockear implementacion
const nuevaFuncion2 = jest.fn();

nuevaFuncion2.mockImplementation(() => {
    codigo fuente
})

*/