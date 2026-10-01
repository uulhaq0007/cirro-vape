import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { guide } from '../../data/shop'

/**
 * Buying guide. This slot deliberately carries no comparative, cessation or
 * modified-risk claims — hardware selection only.
 */
export default function Guide() {
  return (
    <section id="guide" className="section bg-coal">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">{guide.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="sec-title">
                How To Choose <span className="text-ember">A Device</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5">{guide.text}</p>
            </Reveal>
            <Reveal delay={230}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="btn-ghost mt-8"
              >
                Ask The Shop
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {guide.steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 110} className="h-full">
                  <article className="group flex h-full flex-col rounded-xl border border-coal-line bg-coal-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-ember">
                    <span className="font-display text-[38px] font-bold leading-none text-coal-line transition-colors duration-500 group-hover:text-ember">
                      {s.n}
                    </span>
                    <h3 className="mt-4 font-display text-[19px] font-semibold text-white">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[15px]">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={480}>
              <p className="mt-7 flex items-start gap-3 rounded-lg border border-ember/30 bg-ember/5 px-5 py-4 text-[14px] text-smoke">
                <ShopIcon name="lock" className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                Products on this site contain nicotine, which is addictive. They are not intended for non-smokers, for
                anyone under {21}, or for people who are pregnant or breastfeeding.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
