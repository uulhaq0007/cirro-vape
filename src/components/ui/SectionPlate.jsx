/**
 * Photographic backdrop for a section, with a scrim that keeps text readable.
 *
 * The parent section must be `relative overflow-hidden`, and its content
 * wrapper needs `relative` so it stacks above this.
 *
 * scrim:
 *   left   — dark on the left, clearing to the right (copy-left layouts)
 *   center — dark at both edges, plate visible through the middle
 *   bottom — dark at the base, plate visible toward the top
 *   even   — uniform wash (busy plates behind full-width grids)
 */
const SCRIMS = {
  left: 'bg-gradient-to-r from-coal-deep via-coal-deep/80 to-transparent',
  center: 'bg-gradient-to-r from-coal-deep via-coal-deep/45 to-coal-deep',
  bottom: 'bg-gradient-to-t from-coal-deep via-coal-deep/70 to-transparent',
  even: 'bg-coal-deep/75',
  // Plate shown exactly as authored. Safe only over already-dark artwork.
  none: null,
}

export default function SectionPlate({
  src,
  scrim = 'center',
  opacity = 1,
  position = 'object-center',
  priority = false,
}) {
  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${position}`}
        style={{ opacity }}
      />
      {SCRIMS[scrim] !== null && (
        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${SCRIMS[scrim] ?? SCRIMS.center}`} />
      )}
    </>
  )
}
