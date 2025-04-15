const PORCENTAJE_RESERVA_TANQUE = 10;
const LIMITE_KM_CAMBIO_ACEITE = 15000;

const deberiaRecargarNafta = ({ nafta, capacidadTanque }) => nafta < capacidadTanque / PORCENTAJE_RESERVA_TANQUE;

const necesitaCambiarAceite = ({ km }) => km > LIMITE_KM_CAMBIO_ACEITE;

const calcularAutonomia = () => {
    /* Implementar función que calcule la autonomía del vehículo en kms.
    Sumarlo a la bateria de tests */
}

const verificarArranque = () => {
    /* Implementar función que verifique si el vehículo puede arrancar.
    Si no hay batería o nafta, debe lanzar la excepción correspondiente (crearlas).
    Sumarlo a la bateria de tests probando los diferentes escenarios */
}

module.exports = { deberiaRecargarNafta, necesitaCambiarAceite };