export function formatPath(inputPath: string) {
  const segments = inputPath.split("/").filter(Boolean);

  if (segments.length > 1) {
    segments.pop(); // Remove the last segment
  }

  return "/" + segments.join("/");
}
