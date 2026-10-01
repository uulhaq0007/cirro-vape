import { useState } from 'react'
import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { shop } from '../../data/shop'

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (f) => (e) => {
    setForm((p) => ({ ...p, [f]: e.target.value }))
    setErrors((p) => ({ ...p, [f]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us answer properly.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Front-end only — nothing is transmitted.
    setSent(true)
    setForm(empty)
  }

  const details = [
    { icon: 'pin', title: 'Shop Address', lines: [shop.address] },
    { icon: 'phone', title: 'Call Us', lines: [shop.phone] },
    { icon: 'mail', title: 'Mail Us', lines: [shop.email] },
    { icon: 'clock', title: 'Opening Hours', lines: [shop.hours] },
  ]

  return (
    <section id="contact" className="section bg-coal">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div>
            <Reveal>
              <span className="eyebrow">Get In Touch</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="sec-title">
                Talk To <span className="text-ember">The Shop</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 max-w-[480px]">
                Questions about compatibility, spares or a warranty claim? Call during opening hours or send a note and
                we will reply the next working day.
              </p>
            </Reveal>

            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {details.map((d, i) => (
                <Reveal key={d.title} delay={200 + i * 90}>
                  <li className="flex gap-4 rounded-xl border border-coal-line bg-coal-card p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ember text-white">
                      <ShopIcon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[16px] font-semibold text-white">{d.title}</h3>
                      {d.lines.map((l) => (
                        <p key={l} className="mt-1 break-words text-[14px]">
                          {l}
                        </p>
                      ))}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Reveal delay={140}>
            <form onSubmit={submit} noValidate className="rounded-2xl border border-coal-line bg-coal-card p-8 sm:p-10">
              <h3 className="font-display text-[24px] font-bold text-white">Send A Message</h3>

              {sent && (
                <div className="mt-6 flex items-center gap-3 rounded-lg border border-ember/40 bg-ember/10 px-5 py-4 text-[15px] text-white">
                  <ShopIcon name="check" className="h-5 w-5 shrink-0 text-ember" />
                  Thanks — your message has been captured. This demo has no backend, so nothing was sent.
                </div>
              )}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="sr-only">Name</label>
                  <input id="c-name" placeholder="Your name" value={form.name} onChange={update('name')}
                    aria-invalid={Boolean(errors.name)} className={`field ${errors.name ? 'field-error' : ''}`} />
                  {errors.name && <p className="mt-1 text-[13px] text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="sr-only">Email</label>
                  <input id="c-email" type="email" placeholder="Email address" value={form.email} onChange={update('email')}
                    aria-invalid={Boolean(errors.email)} className={`field ${errors.email ? 'field-error' : ''}`} />
                  {errors.email && <p className="mt-1 text-[13px] text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="c-subject" className="sr-only">Subject</label>
                <input id="c-subject" placeholder="Subject (optional)" value={form.subject} onChange={update('subject')} className="field" />
              </div>

              <div className="mt-4">
                <label htmlFor="c-message" className="sr-only">Message</label>
                <textarea id="c-message" rows={5} placeholder="How can we help?" value={form.message} onChange={update('message')}
                  aria-invalid={Boolean(errors.message)} className={`field resize-none ${errors.message ? 'field-error' : ''}`} />
                {errors.message && <p className="mt-1 text-[13px] text-red-400">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-ember mt-6 w-full">
                Send Message
              </button>

              <p className="mt-4 text-center text-[13px] text-smoke/70">
                We only use your details to answer this enquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
