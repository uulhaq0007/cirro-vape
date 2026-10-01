import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { services } from '../../data/shop'
import SectionPlate from '../ui/SectionPlate'

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-coal py-14 lg:py-20">
      <SectionPlate src="/images/Bg-2.jpg" scrim="center" />
      <div className="container relative">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const highlighted = i === services.length - 1
            return (
              <Reveal key={s.title} delay={i * 100} className="h-full">
                <article
                  className={`group flex h-full flex-col rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                    highlighted ? 'bg-ember' : 'bg-coal-card hover:bg-ember'
                  }`}
                >
                  <span className={`${highlighted ? 'text-white' : 'text-ember group-hover:text-white'}`}>
                    <ShopIcon name={s.icon} className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 font-display text-[20px] font-semibold text-white">{s.title}</h3>
                  <p className={`mt-3 flex-1 text-[15px] ${highlighted ? 'text-white/85' : 'group-hover:text-white/85'}`}>
                    {s.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
