const app = () => {
  return `${names.map((name) => tagComponent(`h1`, name)).join("")}`;
};
