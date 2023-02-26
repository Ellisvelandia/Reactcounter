const {
  getUser,
  getUsuarioActivo,
} = require("../src/base-pruebas/05-funciones");

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un obheto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Ellis";
    const user = getUsuarioActivo(name);
    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
