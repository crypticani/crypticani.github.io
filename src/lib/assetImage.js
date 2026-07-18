// Resolves portfolio.js logo_path values (e.g. "lpu.jpeg") to bundled URLs.
// Replaces the CRA-era dynamic `require("../../assets/images/...")` pattern.
const images = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
});

export function assetImage(fileName) {
  return images[`../assets/images/${fileName}`];
}
