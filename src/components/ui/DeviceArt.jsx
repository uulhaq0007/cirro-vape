/**
 * Vector product artwork drawn for this project. Photography for this category
 * could not be sourced without using real manufacturers' products, so hardware
 * is illustrated generically instead — no real brand or model is depicted.
 *
 * `tone` selects the silhouette: mod | pod | tank | coil | tool | bottle | case | dock
 */
export default function DeviceArt({ tone = 'mod', className = 'h-full w-full', accent = '#fd6c03' }) {
  const body = '#2e2e2e'
  const metal = '#8a8a8a'
  const glass = 'rgba(255,255,255,0.16)'

  const shapes = {
    // Regulated box mod with a tank on top
    mod: (
      <>
        <rect x="44" y="86" width="72" height="96" rx="12" fill={body} />
        <rect x="44" y="86" width="72" height="96" rx="12" fill="none" stroke="#444" strokeWidth="2" />
        <rect x="54" y="104" width="52" height="30" rx="5" fill="#111" />
        <rect x="59" y="110" width="30" height="5" rx="2.5" fill={accent} />
        <rect x="59" y="120" width="20" height="4" rx="2" fill="#666" />
        <circle cx="80" cy="156" r="11" fill="none" stroke={accent} strokeWidth="3" />
        <rect x="66" y="60" width="28" height="28" rx="4" fill={metal} />
        <rect x="70" y="30" width="20" height="32" rx="3" fill={glass} stroke={metal} strokeWidth="2" />
        <rect x="72" y="36" width="16" height="20" rx="2" fill={accent} opacity=".45" />
        <rect x="72" y="18" width="16" height="13" rx="4" fill={body} />
      </>
    ),
    // Slim draw-activated pod
    pod: (
      <>
        <rect x="62" y="44" width="36" height="130" rx="14" fill={body} stroke="#444" strokeWidth="2" />
        <rect x="68" y="52" width="24" height="44" rx="8" fill={glass} stroke={metal} strokeWidth="1.6" />
        <rect x="71" y="58" width="18" height="32" rx="6" fill={accent} opacity=".4" />
        <rect x="70" y="112" width="20" height="4" rx="2" fill={accent} />
        <rect x="70" y="122" width="12" height="3" rx="1.5" fill="#5a5a5a" />
        <rect x="72" y="30" width="16" height="16" rx="5" fill={metal} />
        <circle cx="80" cy="158" r="5" fill="#111" stroke={accent} strokeWidth="1.6" />
      </>
    ),
    // Tank with glass window
    tank: (
      <>
        <rect x="56" y="60" width="48" height="88" rx="8" fill={glass} stroke={metal} strokeWidth="2.5" />
        <rect x="62" y="76" width="36" height="56" rx="5" fill={accent} opacity=".32" />
        <rect x="50" y="146" width="60" height="16" rx="5" fill={metal} />
        <rect x="50" y="46" width="60" height="16" rx="5" fill={metal} />
        <rect x="70" y="24" width="20" height="24" rx="7" fill={body} />
        <path d="M56 104h48" stroke={metal} strokeWidth="1.6" opacity=".7" />
      </>
    ),
    // Coil head
    coil: (
      <>
        <rect x="58" y="72" width="44" height="60" rx="7" fill={metal} />
        <rect x="64" y="80" width="32" height="44" rx="4" fill="#1c1c1c" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="66" y={86 + i * 10} width="28" height="4" rx="2" fill={accent} opacity={0.85 - i * 0.12} />
        ))}
        <rect x="70" y="56" width="20" height="18" rx="4" fill="#3a3a3a" />
        <rect x="72" y="130" width="16" height="14" rx="3" fill="#3a3a3a" />
      </>
    ),
    // Hard carry case
    case: (
      <>
        <rect x="34" y="74" width="92" height="66" rx="10" fill={body} stroke="#444" strokeWidth="2" />
        <rect x="34" y="100" width="92" height="6" fill="#111" />
        <rect x="66" y="66" width="28" height="10" rx="4" fill={metal} />
        <rect x="72" y="112" width="16" height="12" rx="3" fill={accent} />
        <path d="M46 86h20M46 124h14" stroke="#5a5a5a" strokeWidth="3" strokeLinecap="round" />
      </>
    ),
    // Charging dock
    dock: (
      <>
        <rect x="40" y="118" width="80" height="26" rx="7" fill={body} stroke="#444" strokeWidth="2" />
        <rect x="56" y="60" width="18" height="58" rx="5" fill={metal} />
        <rect x="86" y="72" width="18" height="46" rx="5" fill={metal} />
        <rect x="58" y="66" width="14" height="20" rx="3" fill={accent} opacity=".55" />
        <rect x="88" y="78" width="14" height="16" rx="3" fill={accent} opacity=".55" />
        <circle cx="62" cy="131" r="3" fill={accent} />
        <circle cx="98" cy="131" r="3" fill="#5a5a5a" />
      </>
    ),
    // Build tool / screwdriver
    tool: (
      <>
        <rect x="72" y="34" width="16" height="82" rx="5" fill={accent} />
        <rect x="74" y="40" width="4" height="70" rx="2" fill="#fff" opacity=".28" />
        <rect x="76" y="116" width="8" height="34" rx="2" fill={metal} />
        <path d="M74 150h12l-6 14z" fill={metal} />
      </>
    ),
    // Liquid bottle
    bottle: (
      <>
        <path d="M62 84h36v76a10 10 0 01-10 10H72a10 10 0 01-10-10z" fill={glass} stroke={metal} strokeWidth="2.5" />
        <path d="M66 116h28v40a8 8 0 01-8 8H74a8 8 0 01-8-8z" fill={accent} opacity=".45" />
        <rect x="66" y="96" width="28" height="16" rx="3" fill="#1c1c1c" />
        <rect x="70" y="60" width="20" height="24" rx="3" fill={glass} stroke={metal} strokeWidth="2" />
        <rect x="66" y="42" width="28" height="20" rx="5" fill={body} />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 160 200" className={className} role="img" aria-label="Illustration of vape hardware">
      {shapes[tone] ?? shapes.mod}
    </svg>
  )
}
