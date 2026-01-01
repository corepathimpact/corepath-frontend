export function adaptUser(api) {
  if (!api) return null;

  return {
    id: api.id ?? null,
    fullName: api.full_name ?? "",
    title: api.title ?? "",
    country: api.country ?? "",
    language: api.language ?? "",
  };
}


