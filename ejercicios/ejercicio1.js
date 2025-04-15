const PORCENTAJE_RESERVA_TANQUE = 10;
const LIMITE_KM_CAMBIO_ACEITE = 15000;

const deberiaRecargarNafta = ({ nafta, capacidadTanque }) => nafta < capacidadTanque / PORCENTAJE_RESERVA_TANQUE;

const necesitaCambiarAceite = ({ km }) => km > LIMITE_KM_CAMBIO_ACEITE;

module.exports = { deberiaRecargarNafta, necesitaCambiarAceite };