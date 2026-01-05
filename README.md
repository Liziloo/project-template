# Project Template: Core + Adapters Foundry

This repository is a **personal project template** designed to minimize re-entry cost when building small to medium tools.

It is not a starter app.
It is not opinionated about UI, frameworks, or deployment.
It exists to prevent re-deciding structure every time a new idea appears.

The emphasis is **continuity**, not speed.

---

## Design Intent

This template supports projects such as:

- Desktop apps (Electron)
- VS Code or Obsidian plugins
- CLI tools
- Small data-fetching or API-driven utilities
- Exploratory prototypes that may or may not grow

The same template is reused across all of them.

---

## Core Architectural Invariants

These rules are non-negotiable.

1. **One core, many shells**  
   All domain logic lives in a single core. Everything else adapts it.

2. **Node is the runtime**  
   All code runs under Node. No browser-only assumptions.

3. **Nothing is mandatory**  
   UI, adapters, scripts, and tooling are optional and removable.

Corollaries:
- No required frameworks
- No forced build steps
- No premature abstraction
- No UI-driven architecture

---

## Core

The `core/` folder is the only required part of any project created from this template.

### What belongs in the core
- Domain logic
- State transitions
- Data interpretation
- API orchestration (as logic, not environment wiring)

### What does NOT belong in the core
- UI concerns
- Framework imports
- Electron / VS Code / Obsidian APIs
- Environment-specific assumptions

The core should remain understandable and valid even if all adapters are deleted.

---

## Adapters

Adapters connect the core to a specific runtime environment.

Examples include:
- CLI
- Electron desktop shell
- VS Code extension
- Obsidian plugin

### Adapter rules
- No domain logic
- No persistence decisions
- No business rules
- Only glue code

Adapters translate **environment input → core → environment output**.

The core must never know adapters exist.

---

## UI

UI is an optional adapter layer.

- Use it when human interaction is required
- Omit it entirely for CLI or background tools
- Treat it as disposable

UI must never:
- call APIs directly
- own domain state
- bypass the core

---

## Scripts

Scripts exist for **developer survival**, not architecture.

Typical uses:
- reset local state
- seed test data
- inspect outputs
- run one-off diagnostics

Scripts may be messy. They are allowed to be practical.

---

## Notes

Notes exist to preserve intent across interruptions.

They should capture:
- why decisions were made
- what exists vs. what does not
- what the next obvious step was

Notes prevent reentry from becoming reverse-engineering.

---

## How to Use This Template

1. Create a new repository using this as a **GitHub template**
2. Rename the project
3. Delete any adapters or folders you don’t need
4. Start work in `core/`
5. Add adapters only when necessary

You are not expected to use every part of the template.

---

## Definition of Success

A project built from this template is successful when:

- The core can be understood in isolation
- Adapters can be removed without loss of meaning
- Reentry does not require reconstructing architecture
- Decisions are externalized instead of remembered

---

## Non-Goals

This template does not attempt to:
- enforce best practices
- optimize performance
- prescribe tooling
- scale teams
- impress anyone

It exists to support **individual, intermittent, long-lived work**.


