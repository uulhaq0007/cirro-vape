import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'
import DeviceArt from '../ui/DeviceArt'
import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { about, stats } from '../../data/shop'
import SmokeBackdrop from '../ui/SmokeBackdrop'
import SectionPlate from '../ui/SectionPlate'

function Stat({ value, suffix, label, started, delay }) {
  const n = useCountUp(value, started, 1800)
  return (
    <div style={{ transitionDelay: `${delay}ms` }}>
      <span className="block font-display text-[32px] font-bold text-ember">
        {n.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-1 block text-[14px]">{label}</span>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className="section relative overflow-hidden bg-coal-deep">
      <SectionPlate src="/images/Bg-3.jpg" scrim="center" />
      <SmokeBackdrop variant="wisp" opacity={0.25} />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Illustration cluster */}
          <Reveal className="relative">
            <div className="relative grid grid-cols-2 gap-5">
              {['pod', 'tank', 'bottle', 'coil'].map((tone, i) => (
                <span
                  key={tone}
                  className={`grid place-items-center rounded-xl border border-coal-line bg-coal-card p-6 transition-colors duration-500 hover:border-ember ${
                    i % 2 === 1 ? 'translate-y-7' : ''
                  }`}
                >
                  <DeviceArt tone={tone} className="h-[150px] w-auto" />
                </span>
              ))}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 animate-spinSlow rounded-full border-[8px] border-dashed border-ember/25"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div ref={ref}>
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="sec-title">{about.title}</h2>
            </Reveal>

            {about.paras.map((p, i) => (
              <Reveal key={i} delay={140 + i * 80}>
                <p className="mt-5">{p}</p>
              </Reveal>
            ))}

            <ul className="mt-8 space-y-3">
              {about.points.map((pt, i) => (
                <Reveal key={pt} delay={280 + i * 80}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember text-white">
                      <ShopIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] text-white">{pt}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={480}>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-coal-line pt-8 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <Stat key={s.label} {...s} started={inView} delay={i * 120} />
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
