import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Reveal from '../ui/Reveal'
import { team } from '../../data/shop'

const socials = [FaFacebookF, FaInstagram, FaLinkedinIn]

export default function Team() {
  return (
    <section className="section bg-coal-deep">
      <div className="container">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">Behind The Counter</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="sec-title">
              Meet The <span className="text-ember">Shop</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="sec-lead">
              Three people answer the phone, pack the orders and handle the repairs. You will speak to one of them.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-[900px] gap-8 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <article className="group text-center">
                <div className="relative mx-auto h-[190px] w-[190px]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border-[3px] border-dashed border-coal-line transition-colors duration-500 group-hover:border-ember"
                  />
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-6 font-display text-[20px] font-semibold text-white transition-colors duration-300 group-hover:text-ember">
                  {m.name}
                </h3>
                <p className="mt-1 text-[14px] text-ember">{m.role}</p>

                <div className="mt-4 flex justify-center gap-2">
                  {socials.map((Icon, s) => (
                    <a
                      key={s}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`${m.name} profile`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-coal-line text-smoke transition-colors duration-300 hover:border-ember hover:bg-ember hover:text-white"
                    >
                      <Icon className="text-[13px]" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
