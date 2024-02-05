export function listToString(tags: string[]): string {
  return tags.join(';');
}

export function stringToList(tags: string): string[] {
  return tags.split(';').map(tag => tag.trim()).filter(tag => tag !== '');
}
