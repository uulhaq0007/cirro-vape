import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ShopIcon from '../ui/ShopIcon'
import { navigation, shop } from '../../data/shop'

export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 80)

      // Track whichever section currently sits in the upper viewport.
      let current = navigation[0].href
      for (const item of navigation) {
        const el = document.querySelector(item.href)
        if (el && el.getBoundingClientRect().top <= 140) current = item.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        stuck ? 'bg-coal-deep/95 py-3 shadow-card backdrop-blur' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => go(e, '#home')}
          className="font-display text-[26px] font-bold tracking-[3px] text-white"
        >
          {shop.wordmark}
          <span className="text-ember">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              aria-current={active === item.href ? 'true' : undefined}
              className={`relative font-display text-[16px] font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-ember ${
                active === item.href ? 'text-ember' : 'text-white'
              }`}
            >
              {item.label}
              {active === item.href && <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-ember" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-ember/50 px-4 py-1.5 font-display text-[13px] font-semibold uppercase tracking-wide text-ember sm:inline-flex">
            <ShopIcon name="lock" className="h-4 w-4" />
            {shop.minimumAge}+
          </span>

          <a
            href="#categories"
            onClick={(e) => go(e, '#categories')}
            aria-label="Browse the shop"
            className="grid h-11 w-11 place-items-center rounded-full bg-ember text-white transition hover:bg-ember-dark"
          >
            <ShopIcon name="cart" className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-coal-line text-white lg:hidden"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[300px] max-w-[85vw] flex-col bg-coal-card transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-coal-line px-6 py-5">
            <span className="font-display text-[22px] font-bold tracking-[3px] text-white">
              {shop.wordmark}
              <span className="text-ember">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-coal-line text-white transition hover:bg-ember"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-coal-line">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => go(e, item.href)}
                    className={`block py-3.5 font-display text-[17px] font-semibold uppercase tracking-wide ${
                      active === item.href ? 'text-ember' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-7 rounded-lg border border-ember/40 px-4 py-3 text-center font-display text-[14px] font-semibold uppercase tracking-wide text-ember">
              Strictly {shop.minimumAge}+
            </p>

            <p className="mt-5 text-[14px]">
              <a href={`mailto:${shop.email}`} className="transition hover:text-ember">
                {shop.email}
              </a>
            </p>
          </nav>
        </aside>
      </div>
    </header>
  )
}
