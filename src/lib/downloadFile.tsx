export function downloadFile(path: string, fileName?: string) {
  const link = document.createElement("a");
  link.href = path;
  if (fileName) link.download = fileName;
  link.click();
}
