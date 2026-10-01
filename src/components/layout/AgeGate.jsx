import { useEffect, useState } from 'react'
import { shop } from '../../data/shop'

const KEY = 'cirro-age-verified'

/**
 * Age verification interstitial. Age-restricted retail requires this in most
 * jurisdictions, so it blocks the page until the visitor confirms or declines.
 * The choice is remembered in sessionStorage only — no cookie, no tracking.
 */
export default function AgeGate() {
  const [state, setState] = useState('checking') // checking | asking | declined | passed

  useEffect(() => {
    let stored = null
    try {
      stored = sessionStorage.getItem(KEY)
    } catch {
      // Private mode or blocked storage — fall through and ask again.
    }
    setState(stored === 'yes' ? 'passed' : 'asking')
  }, [])

  useEffect(() => {
    const blocking = state === 'asking' || state === 'declined'
    document.body.style.overflow = blocking ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [state])

  const confirm = () => {
    try {
      sessionStorage.setItem(KEY, 'yes')
    } catch {
      // Non-fatal: the gate simply reappears next visit.
    }
    setState('passed')
  }

  if (state === 'checking' || state === 'passed') return null

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-coal-deep/95 px-6 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="w-full max-w-[520px] rounded-2xl border border-coal-line bg-coal-card p-8 text-center sm:p-11">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-ember font-display text-[20px] font-bold text-ember">
          {shop.minimumAge}+
        </span>

        {state === 'asking' ? (
          <>
            <h2 id="age-gate-title" className="mt-6 font-display text-[26px] font-bold text-white sm:text-[30px]">
              Confirm Your Age
            </h2>
            <p className="mt-4 text-[15px] text-smoke">
              This shop sells age-restricted products containing nicotine and is intended for adults aged{' '}
              {shop.minimumAge} or over. Please confirm your age to continue.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button type="button" onClick={confirm} className="btn-ember">
                I am {shop.minimumAge} or over
              </button>
              <button type="button" onClick={() => setState('declined')} className="btn-light">
                I am under {shop.minimumAge}
              </button>
            </div>

            <p className="mt-6 text-[13px] leading-relaxed text-smoke/70">
              Nicotine is an addictive substance. Not for use by minors, or by people who are pregnant or
              breastfeeding. Keep all products out of reach of children and pets.
            </p>
          </>
        ) : (
          <>
            <h2 id="age-gate-title" className="mt-6 font-display text-[26px] font-bold text-white sm:text-[30px]">
              Sorry — You Cannot Enter
            </h2>
            <p className="mt-4 text-[15px] text-smoke">
              You must be {shop.minimumAge} or over to browse this shop. Thanks for being honest.
            </p>
            <button type="button" onClick={() => setState('asking')} className="btn-light mt-8">
              Go Back
            </button>
          </>
        )}
      </div>
    </div>
  )
}
