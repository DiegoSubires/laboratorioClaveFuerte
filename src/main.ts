import "./style.css";

export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const commonPasswords: string[] = [
  "passWord",
  "123456",
  "qwerty",
  "admin",
  "letmein",
  "welcome",
  "monkey",
  "sunshine",
  "password1",
  "123456789",
  "football",
  "iloveyou",
  "1234567",
  "123123",
  "12345678",
  "abc123",
  "qwerty123",
  "1q2w3e4r",
  "baseball",
  "password123",
  "superman",
  "987654321",
  "mypass",
  "trustno1",
  "hello123",
  "dragon",
  "1234",
  "555555",
  "loveme",
  "hello",
  "hockey",
  "letmein123",
  "welcome123",
  "mustang",
  "shadow",
  "12345",
  "passw0rd",
  "abcdef",
  "123abc",
  "football123",
  "master",
  "jordan23",
  "access",
  "flower",
  "qwertyuiop",
  "admin123",
  "iloveyou123",
  "welcome1",
  "monkey123",
  "sunshine1",
  "password12",
  "1234567890",
];

export const mensajesError: string[] = [
  "La clave debe tener mayúsculas y minúsculas",
  "La clave debe tener números",
  "La clave debe tener caracteres especiales",
  "La clave debe tener una longitud mínima de 8 caracteres",
  "La clave no debe contener el nombre del usuario",
  "La clave no debe contener palabras comunes",
];

export const numeros: string = "0123456789";
export const caracteresEspeciales: string = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

export function esMayuscula(letra: string) {
  return letra === letra.toUpperCase();
}
export function esMinuscula(letra: string) {
  return letra === letra.toLowerCase();
}
export function esNumero(letra: string) {
  return [...numeros].includes(letra);
}
export function esCaracterEspecial(letra: string) {
  return [...caracteresEspeciales].includes(letra);
}

export const tieneMayusculas = (str: string) => str !== str.toLowerCase();
export const tieneMinusculas = (str: string) => str !== str.toUpperCase();
export const tieneNumero = (str: string) =>
  [...str].some((curr) => esNumero(curr));
export const tieneCaracterEspecial = (str: string) =>
  [...str].some((curr) => esCaracterEspecial(curr));
export const contienePalabarasComunes = (
  str: string,
  commonPasswords: string[]
) =>
  commonPasswords.some((curr: string) =>
    str.toLowerCase().includes(curr.toLowerCase())
  );

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let resultado: ValidacionClave = {
    esValida: false,
  };
  !tieneMayusculas(clave) || !tieneMinusculas(clave)
    ? (resultado.error = mensajesError[0])
    : !tieneNumero(clave)
    ? (resultado.error = mensajesError[1])
    : !tieneCaracterEspecial(clave)
    ? (resultado.error = mensajesError[2])
    : clave.length <= 8
    ? (resultado.error = mensajesError[3])
    : clave.toLowerCase().includes(nombreUsuario.toLowerCase())
    ? (resultado.error = mensajesError[4])
    : contienePalabarasComunes(clave, commonPasswords)
    ? (resultado.error = mensajesError[5])
    : (resultado = { esValida: true });

  return resultado;
};

// console.log(validarClave("Diego", "31Fs4fs2Diego/", commonPasswords));
// console.log("31Fs4fs2HELLo/".toLowerCase());
// console.log(contienePalabarasComunes("31Fs4fs2Hel2lodkjf/"));
