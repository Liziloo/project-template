// Configuration handling for the core.
//
// Responsible only for interpreting configuration data.
// Must not read from environment variables directly.
// Must not know about adapters or runtime context.

export function loadConfig(rawConfig = {}) {
  return rawConfig;
}
