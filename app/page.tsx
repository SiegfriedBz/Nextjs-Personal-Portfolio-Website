import AboutMeGrid from '@/components/AboutMeGrid'
import Footer from '@/components/Footer'
import { Grid } from '@/components/Grid'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { EDUCATION, WORK_EXPERIENCE } from '@/constants.ts'

export default function Home() {
  return (
    <main
      className='relative
        bg-black-100
        flex flex-col 
        justify-center items-center 
        mx-auto 
        overflow-hidden
        sm:px-10
        px-5
      '
    >
      <div className='max-w-7xl w-full'>
        <Hero />

        <section id='about' className='scroll-mt-12'>
          <Grid />
        </section>

        <section id='projects' className='scroll-mt-0'>
          <Projects />
        </section>

        <section id='experience' className='scroll-mt-0 py-20'>
          <AboutMeGrid data={WORK_EXPERIENCE}>
            <h1 className='heading'>
              My
              <span className='text-purple'> work experience</span>
            </h1>
          </AboutMeGrid>
        </section>

        <section id='education' className='scroll-mt-0 py-20'>
          <AboutMeGrid data={EDUCATION}>
            <h1 className='heading'>
              <span className='text-purple'>Education</span>
            </h1>
          </AboutMeGrid>
        </section>

        <section id='contact' className='scroll-mt-0 pt-16 pb-10'>
          <Footer />
        </section>
      </div>
    </main>
  )
}
