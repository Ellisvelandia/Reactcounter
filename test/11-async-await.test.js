const getImagen = require("../src/base-pruebas/11-async-await");

describe("Prueba 11-async-await", () => {
  test("getImage debe de retornar una url de la imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
