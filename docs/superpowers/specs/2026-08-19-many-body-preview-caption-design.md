# Many-Body Project Preview Caption Design

## Goal

Make the many-body project preview fill its 16:9 homepage frame more naturally
without stretching, cropping, or rearranging the original architecture diagram.

## Composition

- Place the original 2866 x 1100 diagram at its native aspect ratio on a pure
  white 16:9 canvas.
- Use the added space above the diagram for the title:
  `Scaling Foundation Models for Many-Body Physics`.
- Place the subtitle directly below it, aligned to the title's left edge:
  `Task-specific physics priors, shared high-level representations`.
- Use the added space below the diagram for three quiet, evenly spaced labels:
  `Family-specific ansatzes`, `Shared representation`, and
  `Cross-task composition`.

## Visual Rules

- Use Arial or Helvetica in black and neutral gray to match the source figure.
- Keep the title prominent, the subtitle secondary, and the three lower labels
  compact.
- Preserve every source-diagram pixel at the same scale and aspect ratio.
- Use a pure white background with no border, shadow, gradient, or colored
  decoration.
- Export under a new filename so GitHub Pages and browsers do not reuse the
  previous image cache.

## Verification

- Confirm the final canvas is 16:9.
- Confirm the source diagram is not distorted or clipped.
- Confirm all six edges/corners visible around the composition are pure white.
- Inspect the final image once at full resolution and once at homepage thumbnail
  scale.
