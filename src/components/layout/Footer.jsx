import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { navigation, shop } from '../../data/shop'

const socials = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn]

const columns = [
  { title: 'Shop', links: ['Starter Kits', 'Mods & Devices', 'Tanks & Coils', 'Accessories', 'E-Liquids'] },
  { title: 'Help', links: ['Delivery & Returns', 'Warranty Claims', 'Battery Safety', 'Track An Order', 'Contact Us'] },
]

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-coal-line bg-coal-deep">
      <div className="container">
        <div className="grid gap-12 py-16 lg:grid-cols-4">
          {/* Brand */}
          <Reveal>
            <span className="font-display text-[28px] font-bold tracking-[3px] text-white">
              {shop.wordmark}
              <span className="text-ember">.</span>
            </span>
            <p className="mt-4 max-w-[300px] text-[15px]">
              Vape hardware, tanks, coils and accessories, stocked and serviced from a single counter in Bellhaven.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-ember/50 px-4 py-1.5 font-display text-[13px] font-semibold uppercase tracking-wide text-ember">
              <ShopIcon name="lock" className="h-4 w-4" />
              Strictly {shop.minimumAge}+
            </span>

            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Shop social profile"
                  className="grid h-10 w-10 place-items-center rounded-full border border-coal-line text-smoke transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:bg-ember hover:text-white"
                >
                  <Icon className="text-[14px]" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Link columns */}
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={100 * (i + 1)}>
              <h3 className="font-display text-[19px] font-semibold uppercase tracking-wide text-white">{col.title}</h3>
              <span className="mt-3 block h-[3px] w-10 bg-ember" />
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#categories"
                      onClick={(e) => go(e, '#categories')}
                      className="inline-block text-[15px] transition-all duration-300 hover:translate-x-1 hover:text-ember"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Contact */}
          <Reveal delay={300}>
            <h3 className="font-display text-[19px] font-semibold uppercase tracking-wide text-white">Visit Us</h3>
            <span className="mt-3 block h-[3px] w-10 bg-ember" />
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <ShopIcon name="pin" className="mt-1 h-4 w-4 shrink-0 text-ember" />
                {shop.address}
              </li>
              <li className="flex gap-3">
                <ShopIcon name="phone" className="mt-1 h-4 w-4 shrink-0 text-ember" />
                <a href={`tel:${shop.phone.replace(/[^+\d]/g, '')}`} className="transition hover:text-ember">
                  {shop.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <ShopIcon name="mail" className="mt-1 h-4 w-4 shrink-0 text-ember" />
                <a href={`mailto:${shop.email}`} className="break-all transition hover:text-ember">
                  {shop.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ShopIcon name="clock" className="mt-1 h-4 w-4 shrink-0 text-ember" />
                {shop.hours}
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Compliance strip */}
        <div className="border-t border-coal-line py-7">
          <p className="text-[13px] leading-relaxed text-smoke/70">
            <strong className="text-smoke">Warning:</strong> products sold here contain nicotine, which is an addictive
            substance. Sales are restricted to adults aged {shop.minimumAge} and over, and ID is checked at checkout and
            on delivery. Not for use by non-smokers, by anyone under {shop.minimumAge}, or by people who are pregnant or
            breastfeeding. Keep out of reach of children and pets.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-coal-line py-6 text-[14px] md:flex-row">
          <p>
            © {new Date().getFullYear()} {shop.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {navigation.slice(0, 4).map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => go(e, n.href)} className="transition hover:text-ember">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
