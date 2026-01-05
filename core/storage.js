// Persistence boundary for domain state.
//
// Responsible for defining how state may be stored or retrieved.
// Must not assume filesystem, database, or cloud storage.
// Concrete implementations should live in adapters.

export function save() {
  throw new Error("Not implemented: storage is adapter-specific");
}

export function load() {
  throw new Error("Not implemented: storage is adapter-specific");
}
