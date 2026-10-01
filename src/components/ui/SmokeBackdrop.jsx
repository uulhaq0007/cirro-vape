/**
 * Volumetric smoke rendered with SVG filters — no image files.
 *
 * fractalNoise gives the billowing cloud structure; feDisplacementMap warps it
 * so it stops reading as flat noise; feColorMatrix tints it and crushes the
 * alpha so only the dense parts show. A radial mask fades the edges out.
 *
 * Each `variant` uses a different seed, scale and placement, so no two sections
 * share a backdrop.
 */

const VARIANTS = {
  // Dense billow filling the right of the hero
  hero: { seed: 7, freq: 0.011, octaves: 4, scale: 68, blur: 9, alpha: 1.5, shift: -0.42, opacity: 0.85,
          box: 'absolute -right-[10%] -top-[15%] h-[130%] w-[85%]', mask: 'ellipse at 62% 45%' },
  // Sparse wisps drifting up the left
  wisp: { seed: 23, freq: 0.008, octaves: 3, scale: 92, blur: 12, alpha: 1.15, shift: -0.55, opacity: 0.55,
          box: 'absolute -left-[15%] top-[5%] h-[95%] w-[65%]', mask: 'ellipse at 42% 55%' },
  // Low haze across the base of a section
  haze: { seed: 41, freq: 0.006, octaves: 3, scale: 78, blur: 16, alpha: 1.0, shift: -0.58, opacity: 0.45,
          box: 'absolute inset-x-0 bottom-0 h-[70%]', mask: 'ellipse at 50% 85%' },
  // Burst radiating from the centre, for the product spotlight
  burst: { seed: 59, freq: 0.013, octaves: 4, scale: 60, blur: 8, alpha: 1.6, shift: -0.4, opacity: 0.7,
           box: 'absolute left-1/2 top-1/2 h-[120%] w-[80%] -translate-x-1/2 -translate-y-1/2', mask: 'circle at 50% 50%' },
  // Wide, faint band behind full-width sections
  band: { seed: 83, freq: 0.007, octaves: 3, scale: 85, blur: 14, alpha: 0.95, shift: -0.6, opacity: 0.4,
          box: 'absolute inset-0', mask: 'ellipse at 70% 40%' },
}

export default function SmokeBackdrop({
  variant = 'hero',
  color = '#fd6c03',
  drift = true,
  /** Overrides the variant's default opacity. Must be applied inline, since the
   *  wrapper sets opacity via style — a utility class would lose to it. */
  opacity,
  className = '',
}) {
  const v = VARIANTS[variant] ?? VARIANTS.hero
  const id = `smoke-${variant}`

  // Tint matrix: drive RGB from the chosen colour, and build alpha from the
  // noise luminance offset by `shift` so only dense regions remain visible.
  const r = parseInt(color.slice(1, 3), 16) / 255
  const g = parseInt(color.slice(3, 5), 16) / 255
  const b = parseInt(color.slice(5, 7), 16) / 255

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${v.box} ${className}`}
      style={{
        opacity: opacity ?? v.opacity,
        WebkitMaskImage: `radial-gradient(${v.mask}, #000 15%, transparent 72%)`,
        maskImage: `radial-gradient(${v.mask}, #000 15%, transparent 72%)`,
      }}
    >
      <svg
        className={`h-full w-full ${drift ? 'animate-smokeDrift' : ''}`}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 600 600"
      >
        <filter id={id} x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={v.freq}
            numOctaves={v.octaves}
            seed={v.seed}
            result="noise"
          />
          <feDisplacementMap in="noise" in2="noise" scale={v.scale} xChannelSelector="R" yChannelSelector="G" result="warped" />
          <feGaussianBlur in="warped" stdDeviation={v.blur} result="soft" />
          <feColorMatrix
            in="soft"
            type="matrix"
            values={`
              0 0 0 0 ${r}
              0 0 0 0 ${g}
              0 0 0 0 ${b}
              ${v.alpha} 0 0 0 ${v.shift}
            `}
          />
        </filter>
        <rect width="600" height="600" filter={`url(#${id})`} />
      </svg>
    </div>
  )
}
