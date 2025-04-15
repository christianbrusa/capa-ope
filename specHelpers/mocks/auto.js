import _ from "lodash";

const autoBase = {
  nafta: 0,
  capacidadTanque: 100,
  km: 0,
  marca: "Fiat",
};

export const autoConPocaNafta = _.assign({}, autoBase, { nafta: 9 });
export const autoConSuficienteNafta = _.assign({}, autoBase, { nafta: 11 });
export const autoConMuchosKms = _.assign({}, autoBase, { km: 15001 });
export const autoConPocosKms = _.assign({}, autoBase, { km: 14999 });
