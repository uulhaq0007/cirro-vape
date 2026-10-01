import ShopIcon from '../ui/ShopIcon'
import Reveal from '../ui/Reveal'
import { posts } from '../../data/shop'

export default function Journal() {
  return (
    <section id="journal" className="section bg-coal">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[560px]">
            <Reveal>
              <span className="eyebrow">From The Counter</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="sec-title">
                Maintenance <span className="text-ember">Notes</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-[380px] text-[15px]">
              Servicing and safety write-ups from the bench. No product promotion — just the questions we get asked
              across the counter most weeks.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-xl border border-coal-line bg-coal-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-ember">
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="rounded bg-ember px-2.5 py-1 font-display font-semibold uppercase tracking-wide text-white">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3 className="mt-5 font-display text-[19px] font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-ember">
                  {post.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px]">{post.excerpt}</p>

                <a
                  href="#journal"
                  onClick={(e) => e.preventDefault()}
                  className="mt-6 inline-flex items-center gap-2 font-display text-[14px] font-semibold uppercase tracking-wide text-ember"
                >
                  Read
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
