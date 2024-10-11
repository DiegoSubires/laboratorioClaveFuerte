import {
  commonPasswords,
  contienePalabarasComunes,
  tieneCaracterEspecial,
  tieneMinusculas,
  tieneMayusculas,
  tieneNumero,
  validarClave,
  ValidacionClave,
} from "./main";

describe("tieneMayusculas", () => {
  it("Debería ser verdadero si al menos tuviese una maýuscula", () => {
    // Arrange
    const clavesPrueba: string[] = ["123/51-5&F6", "123/51-5&f6", "123/51-5&6"];

    // Act
    const result: boolean[] = clavesPrueba.map((curr) => tieneMayusculas(curr));

    // Assert
    expect(result).toEqual([true, false, false]);
  });
});

describe("tieneMinusculas", () => {
  it("Debería ser verdadero si al menos tuviese una minúscula", () => {
    // Arrange
    const clavesPrueba: string[] = ["123/51-5&F6", "123/51-5&f6", "FDSKFJTJSN"];

    // Act
    const result: boolean[] = clavesPrueba.map((curr) => tieneMinusculas(curr));

    // Assert
    expect(result).toEqual([false, true, false]);
  });
});

describe("tieneNumeros", () => {
  it("Debería ser verdadero si al menos tuviese un número", () => {
    // Arrange
    const clavesPrueba: string[] = ["djSSFMS/7/s", "215475", "FDSKFJTJSN"];

    // Act
    const result: boolean[] = clavesPrueba.map((curr) => tieneNumero(curr));

    // Assert
    expect(result).toEqual([true, true, false]);
  });
});

describe("tieneCaracterEspecial", () => {
  it("Debería ser verdadero si al menos tuviese un carácter especial", () => {
    // Arrange
    const clavesPrueba: string[] = ["djSSFMS/7/s", "215.475", "FDSKFJTJSN"];

    // Act
    const result: boolean[] = clavesPrueba.map((curr) =>
      tieneCaracterEspecial(curr)
    );

    // Assert
    expect(result).toEqual([true, true, false]);
  });
});

describe("contienePalabrasComunes", () => {
  it("Debería ser verdadero si al menos tuviese un elemento del array commonPasswords", () => {
    // Arrange
    const clavesPrueba: string[] = [
      "djSSFqwertyuiopMS/7/s",
      "123456",
      "123.456",
    ];

    // Act
    const result: boolean[] = clavesPrueba.map((curr) =>
      contienePalabarasComunes(curr, commonPasswords)
    );

    // Assert
    expect(result).toEqual([true, true, false]);
  });
});

describe("validarClave", () => {
  it("Debería obtenerse el objeto con formato ValidacionClave correspondiente", () => {
    // Arrange
    const clavesPrueba: string[] = [
      "djSSFMS/7/s",
      "215.475",
      "FDSKFj2TJSN",
      "31Fs4fs2Diego/",
      "1.Mm",
      "31Fs4fs2HELLo/",
    ];

    // Act
    const result: ValidacionClave[] = clavesPrueba.map((curr) =>
      validarClave("Diego", curr, commonPasswords)
    );

    // Assert
    const matrizValidacionClaves: ValidacionClave[] = [
      {
        esValida: true,
      },
      {
        esValida: false,
        error: "La clave debe tener mayúsculas y minúsculas",
      },
      {
        esValida: false,
        error: "La clave debe tener caracteres especiales",
      },
      {
        esValida: false,
        error: "La clave no debe contener el nombre del usuario",
      },
      {
        esValida: false,
        error: "La clave debe tener una longitud mínima de 8 caracteres",
      },
      {
        esValida: false,
        error: "La clave no debe contener palabras comunes",
      },
    ];
    expect(result).toEqual(matrizValidacionClaves);
  });
});
