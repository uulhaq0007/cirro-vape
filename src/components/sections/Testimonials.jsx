import { useCallback, useEffect, useState } from 'react'
import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/shop'
import SmokeBackdrop from '../ui/SmokeBackdrop'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length

  const go = useCallback((next) => setIndex((c) => (next + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1), 6500)
    return () => clearTimeout(t)
  }, [index, paused, go])

  return (
    <section
      className="section relative overflow-hidden bg-coal-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <SmokeBackdrop variant="band" />
      <div className="container relative">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Customer Feedback</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">
              What Buyers <span className="text-ember">Say</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-12 max-w-[780px]">
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                aria-hidden={i !== index}
                className={`absolute inset-x-0 top-0 rounded-2xl border border-coal-line bg-coal-card p-8 text-center transition-all duration-700 sm:p-10 ${
                  i === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
              >
                <div className="flex justify-center gap-1 text-ember">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <ShopIcon key={s} name="star" className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mt-6 text-[17px] leading-[1.85] text-white">{t.quote}</p>

                <footer className="mt-7 flex items-center justify-center gap-4">
                  <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-ember" loading="lazy" />
                  <div className="text-left">
                    <cite className="block font-display text-[17px] font-semibold not-italic text-white">{t.name}</cite>
                    <span className="text-[13px] text-ember">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-full border border-coal-line text-ember transition hover:border-ember hover:bg-ember hover:text-white"
            >
              <ShopIcon name="arrowLeft" className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-ember' : 'w-2 bg-coal-line hover:bg-smoke/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-full border border-coal-line text-ember transition hover:border-ember hover:bg-ember hover:text-white"
            >
              <ShopIcon name="arrowRight" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
