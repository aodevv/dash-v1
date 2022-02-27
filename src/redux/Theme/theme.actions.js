export const setThemeMode = (mode) => ({
  type: "SET_MODE",
  payload: mode,
});

export const setThemeColor = (color) => ({
  type: "SET_COLOR",
  payload: color,
});

export const getMode = () => ({
  type: "GET_MODE",
});

export const getColor = () => ({
  type: "GET_COLOR",
});
