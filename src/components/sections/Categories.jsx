import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { categories } from '../../data/shop'
import SmokeBackdrop from '../ui/SmokeBackdrop'
import SectionPlate from '../ui/SectionPlate'

/**
 * Masonry-style category grid. The featured tile spans two columns and carries
 * the accent fill; the rest sit on card surfaces at staggered heights.
 */
export default function Categories() {
  return (
    <section id="categories" className="section relative overflow-hidden bg-coal">
      <SectionPlate src="/images/Bg-4.jpg" scrim="even" />
      <SmokeBackdrop variant="haze" opacity={0.25} />
      <div className="container relative">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Shop By Category</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">
              What We <span className="text-ember">Stock</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="sec-lead">
              Five departments, all held on the shelf rather than drop-shipped. Counts update as stock moves, so what
              you see is what we can actually send today.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal
              key={c.key}
              delay={i * 100}
              className={`h-full ${c.featured ? 'sm:col-span-2' : ''}`}
            >
              <article
                className={`group flex h-full flex-col rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  c.featured ? 'bg-ember' : 'bg-coal-card hover:bg-coal-line'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className={c.featured ? 'text-white' : 'text-ember'}>
                    <ShopIcon name={c.icon} className="h-10 w-10" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 font-display text-[13px] font-semibold uppercase tracking-wide ${
                      c.featured ? 'bg-white/20 text-white' : 'bg-coal-deep text-smoke'
                    }`}
                  >
                    {c.count} lines
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[22px] font-semibold text-white">{c.title}</h3>
                <p className={`mt-3 flex-1 text-[15px] ${c.featured ? 'text-white/85' : ''}`}>{c.text}</p>

                <a
                  href="#featured"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`mt-6 inline-flex items-center gap-2 font-display text-[14px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    c.featured ? 'text-white' : 'text-ember group-hover:text-white'
                  }`}
                >
                  Browse
                  <ShopIcon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
