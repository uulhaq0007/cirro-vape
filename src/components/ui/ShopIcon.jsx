/**
 * Hand-authored line icon set — keeps the build free of third-party icon fonts.
 * All paths drawn on a 24×24 grid with a 1.6 stroke.
 */
const paths = {
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 10h4l3 3.2v3.3h-7z" />
      <circle cx="7" cy="18" r="1.9" />
      <circle cx="17" cy="18" r="1.9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2l7 2.6v5.2c0 4.2-2.8 7.8-7 9.2-4.2-1.4-7-5-7-9.2V5.8z" />
      <path d="M9.3 12l1.9 1.9L15 10.2" />
    </>
  ),
  returns: (
    <>
      <path d="M4 11.5a8 8 0 0113.6-5.2L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12.5a8 8 0 01-13.6 5.2L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
      <path d="M8 10.5V7.8a4 4 0 018 0v2.7" />
      <circle cx="12" cy="15.2" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  kit: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V5.8A1.3 1.3 0 0110.3 4.5h3.4A1.3 1.3 0 0115 5.8v1.7" />
      <path d="M3.5 12.5h17M12 10.5v4" />
    </>
  ),
  mod: (
    <>
      <rect x="7" y="8.5" width="10" height="12" rx="2.2" />
      <path d="M10.5 8.5V6a1.5 1.5 0 011.5-1.5h0A1.5 1.5 0 0113.5 6v2.5" />
      <circle cx="12" cy="13" r="1.6" />
      <path d="M10 17h4" />
    </>
  ),
  tank: (
    <>
      <path d="M8.5 9h7v8.5a2 2 0 01-2 2h-3a2 2 0 01-2-2z" />
      <path d="M9.5 9V6.2h5V9" />
      <path d="M11 4.5h2" />
      <path d="M8.5 13h7" />
    </>
  ),
  tool: (
    <>
      <path d="M14.8 5.4a4.2 4.2 0 00-5.6 5.2L4.5 15.3a1.6 1.6 0 000 2.3l1.9 1.9a1.6 1.6 0 002.3 0l4.7-4.7a4.2 4.2 0 005.2-5.6l-2.6 2.6-2.4-.6-.6-2.4z" />
    </>
  ),
  bottle: (
    <>
      <path d="M9.5 8.5h5V19a1.5 1.5 0 01-1.5 1.5h-2A1.5 1.5 0 019.5 19z" />
      <path d="M10.5 8.5V6h3v2.5" />
      <path d="M10.2 4.5h3.6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4.5h2.2l2.3 10.6h9.6l2-7.1H6.4" />
      <circle cx="9.5" cy="19" r="1.5" />
      <circle cx="16.5" cy="19" r="1.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="M15.4 15.4l4.6 4.6" />
    </>
  ),
  star: <path d="M12 3.8l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  arrowRight: <path d="M4.5 12h15M13 5.5l6.5 6.5-6.5 6.5" />,
  arrowLeft: <path d="M19.5 12h-15M11 5.5L4.5 12l6.5 6.5" />,
  play: <path d="M8 5.5l11 6.5L8 18.5z" fill="currentColor" stroke="none" />,
  phone: <path d="M7 3.9l2.4 4-1.7 1.9a12 12 0 006.5 6.5l1.9-1.7 4 2.4-.6 3a1.6 1.6 0 01-1.8 1.3C10.9 20.3 3.7 13.1 2.8 5.2A1.6 1.6 0 014.1 3.4z" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.6 6.8L12 12.8l8.4-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c0-.1 6.5-5.6 6.5-10.4a6.5 6.5 0 10-13 0C5.5 15.4 12 20.9 12 21z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7v5.3l3.3 2" />
    </>
  ),
}

export default function ShopIcon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.check}
    </svg>
  )
}
