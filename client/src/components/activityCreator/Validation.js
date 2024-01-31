export const Validation = ({ name, duration }) => {
  const errors = {};

  if (!name) {
    errors.name = "Este campo no puede estar vacío";
  }
  // ? --------------------------------------------------------------------
  if (!duration) {
    errors.duration = "Este campo no puede estar vacío";
  }
  if (!duration && !duration.includes("horas")) {
    errors.duration = "Ingrese una duración en horas";
  }

  // ? --------------------------------------------------------------------

  return errors;
};
