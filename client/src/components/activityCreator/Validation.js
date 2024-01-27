export const Validation = ({
  activity,
  duration,
  difficulty,
  country,
  season,
}) => {
  const errors = {};

  if (activity.length === 0) {
    errors.activity = "Este campo no puede estar vacío";
  }
  // ? --------------------------------------------------------------------
  if (duration.length === 0) {
    errors.duration = "Este campo no puede estar vacío";
  }
  if (duration.length !== 0 && !duration.includes("horas")) {
    errors.duration = "Ingrese una duración en horas";
  }
  // ? --------------------------------------------------------------------
  if (difficulty.length === 0) {
    errors.difficulty = "Este campo no puede estar vacío";
  }
  if ((difficulty > 5 || difficulty < 1) && difficulty.length !== 0) {
    errors.difficulty = "Ingrese una dificultad entre 1 y 5";
  }
  // ? --------------------------------------------------------------------
  if (country.length === 0) {
    errors.country = "Este campo no puede estar vacío";
  }
  const equal = async () => {
    const api = await fetch("http://localhost:3002/countries");
    const data = await api.json();
    const common = data.nameCommon;
    const official = data.nameOfficial;
    if (country !== common || country !== official) {
      errors.country = "Ingrese un país válido";
    }
  };
  if (country.length !== 0) {
    equal();
  }

  // ? --------------------------------------------------------------------
  if (season.length === 0) {
    errors.season = "Este campo no puede estar vacío";
  }
  if (
    season.length !== 0 &&
    season !== "Summer" &&
    season !== "Winter" &&
    season !== "Spring" &&
    season !== "Fall"
  ) {
    errors.season = "Ingrese una estación del año válida";
  }

  return errors;
};
