import { useInView } from '../../hooks/useInView'
import DeviceArt from '../ui/DeviceArt'
import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { featured, products } from '../../data/shop'
import SmokeBackdrop from '../ui/SmokeBackdrop'

/** Spec bar that fills once the block scrolls into view. */
function SpecBar({ label, value, started, delay }) {
  return (
    <li>
      <div className="flex items-center justify-between">
        <span className="font-display text-[15px] font-semibold uppercase tracking-wide text-white">{label}</span>
        <span className="rounded bg-ember px-2 py-0.5 font-display text-[13px] font-semibold text-white">
          {value}%
        </span>
      </div>
      <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-coal-line">
        <span
          className="block h-full rounded-full bg-ember transition-[width] duration-1000 ease-out"
          style={{ width: started ? `${value}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </span>
    </li>
  )
}

export default function Featured() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section id="featured" className="section relative overflow-hidden bg-coal-deep">
      <SmokeBackdrop variant="burst" />
      <div className="container relative">
        {/* Spotlight */}
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">{featured.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="sec-title">
                {featured.name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-ember">{featured.name.split(' ').slice(-1)}</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-[15px]">{featured.text}</p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <p className="flex items-baseline gap-2">
                  <span className="font-display text-[34px] font-bold text-white">${featured.price}</span>
                  {featured.wasPrice && (
                    <span className="text-[16px] text-smoke line-through">${featured.wasPrice}</span>
                  )}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="inline-flex items-center gap-2 font-display text-[15px] font-semibold uppercase tracking-wide text-ember transition hover:text-white"
                >
                  Enquire
                  <ShopIcon name="arrowRight" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="relative grid place-items-center">
              <span aria-hidden="true" className="absolute h-[260px] w-[260px] rounded-full bg-ember/10 blur-2xl" />
              <div className="relative animate-floatY">
                <DeviceArt tone="mod" className="h-[320px] w-auto drop-shadow-[0_20px_40px_rgba(0,0,0,.6)]" />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-4">
            <Reveal delay={200}>
              <ul className="space-y-5">
                {featured.specs.map((s, i) => (
                  <SpecBar key={s.label} {...s} started={inView} delay={i * 120} />
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-[26px] font-bold uppercase text-white">
              More In <span className="text-ember">Stock</span>
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-coal-card transition-all duration-500 hover:-translate-y-2">
                  <div className="relative grid h-[190px] place-items-center rounded-t-xl border-b border-coal-line bg-black/30">
                    {p.badge && (
                      <span className="absolute left-4 top-4 rounded bg-ember px-2.5 py-1 font-display text-[12px] font-semibold uppercase tracking-wide text-white">
                        {p.badge}
                      </span>
                    )}
                    <DeviceArt tone={p.tone} className="h-[140px] w-auto transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[13px] uppercase tracking-wide text-ember">{p.category}</span>
                    <h4 className="mt-1.5 font-display text-[18px] font-semibold text-white">{p.name}</h4>

                    <div className="mt-auto flex items-end justify-between pt-5">
                      <p className="flex items-baseline gap-2">
                        <span className="font-display text-[22px] font-bold text-white">${p.price}</span>
                        {p.was && <span className="text-[14px] text-smoke line-through">${p.was}</span>}
                      </p>
                      <span
                        aria-hidden="true"
                        className="grid h-10 w-10 place-items-center rounded-full border border-coal-line text-ember transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-white"
                      >
                        <ShopIcon name="cart" className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 text-center text-[14px] text-smoke/70">
              Prices exclude delivery. Nicotine-containing products are sold to over-{21}s only, with ID checked at
              checkout and on delivery.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
