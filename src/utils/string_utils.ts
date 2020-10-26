export const classNames = (...names: (string | undefined)[]) =>
  names.filter((v) => !!v).join(" ");
