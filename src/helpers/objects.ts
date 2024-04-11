const isNotIndex = (file, ext) =>
  file.slice(-3) === ext && file !== `index${ext}`;

const objects = {
  isNotIndex,
};

export { objects };
