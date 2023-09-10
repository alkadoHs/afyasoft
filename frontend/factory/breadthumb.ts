export function breadthumb(inputPath: string) {
  return inputPath.split("/").filter(Boolean).map(capitalize).join(" . ");
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
