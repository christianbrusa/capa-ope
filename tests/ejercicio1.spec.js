import { describe, it, expect } from "vitest";
import { deberiaRecargarNafta, necesitaCambiarAceite } from "../ejercicios/ejercicio1.js";
import { autoConPocaNafta, autoConSuficienteNafta, autoConMuchosKms, autoConPocosKms } from "../specHelpers/mocks/auto.js";

describe("pruebas sobre el ejercicio1", () => {
  describe("recargar nafta", () => {
    it("deberia dar 'true' si estoy por debajo del límite", () => expect(deberiaRecargarNafta(autoConPocaNafta)).toBe(true));

    it("deberia dar 'false' si estoy por encima del límite", () => expect(deberiaRecargarNafta(autoConSuficienteNafta)).toBe(false));
  });

  describe("cambiar aceite", () => {
    it("deberia dar 'true' si estoy por debajo del límite", () => expect(necesitaCambiarAceite(autoConMuchosKms)).toBe(true));
    
    it("deberia dar 'false' si estoy por encima del límite", () => expect(necesitaCambiarAceite(autoConPocosKms)).toBe(false));
  });
});
