import DeviceArt from '../ui/DeviceArt'
import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { hero, shop } from '../../data/shop'
import SectionPlate from '../ui/SectionPlate'

export default function Hero() {
  const go = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative overflow-hidden bg-coal-deep pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* Section 1 plate. Delete this to fall back to the generated smoke alone. */}
      <SectionPlate src="/images/Bg-1.jpg" scrim="none" priority />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">{hero.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-[44px] font-bold leading-[1.05] sm:text-[58px] lg:text-[66px]">
                {hero.titleLead}
                <br />
                <span className="text-ember">{hero.titleAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[440px] text-[16px]">{hero.text}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#categories" onClick={(e) => go(e, '#categories')} className="btn-ember">
                  {hero.cta}
                </a>
                <a href="#guide" onClick={(e) => go(e, '#guide')} className="btn-ghost">
                  {hero.secondary}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-coal-line px-4 py-2 text-[13px] text-smoke">
                <ShopIcon name="lock" className="h-4 w-4 text-ember" />
                Age-restricted · {shop.minimumAge}+ · contains nicotine
              </p>
            </Reveal>
          </div>

          {/* Product on the ring */}
          <Reveal delay={140} className="relative lg:col-span-4">
            <div className="relative mx-auto grid h-[420px] w-[420px] max-w-full place-items-center">
              <span
                aria-hidden="true"
                className="absolute h-[300px] w-[300px] rounded-full border-[26px] border-ember"
                style={{ clipPath: 'inset(0 0 22% 0)' }}
              />
              {/* Vapour wisps */}
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="absolute bottom-[58%] h-10 w-10 animate-vapor rounded-full bg-white/10 blur-md"
                  style={{ left: `${42 + i * 8}%`, animationDelay: `${i * 1.3}s` }}
                />
              ))}
              <div className="relative animate-floatY">
                <DeviceArt tone="mod" className="h-[340px] w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,.6)]" />
              </div>
            </div>
          </Reveal>

          {/* Callouts */}
          <div className="lg:col-span-3">
            <Reveal delay={220}>
              <p className="mb-5 font-display text-[17px] font-semibold uppercase tracking-wide text-white">
                In Stock Now
              </p>
            </Reveal>
            <ul className="space-y-5">
              {hero.callouts.map((c, i) => (
                <Reveal key={c.name} delay={280 + i * 90}>
                  <li className="group flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-coal-line bg-coal-card p-1.5 transition-colors duration-300 group-hover:border-ember">
                      <DeviceArt tone={i === 0 ? 'mod' : 'pod'} className="h-full w-auto" />
                    </span>
                    <div>
                      <h3 className="font-display text-[18px] font-semibold text-white">{c.name}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed">{c.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
