export function slugAdjuster(slugtitle: string) {
  return slugtitle.replaceAll(" ", "-");
}

export function slugReverser(slugtitle: string) {
  return slugtitle.replaceAll("-", " ");
}
