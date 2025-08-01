import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { aboutConfig } from '../data/aboutConfig'
import Image from 'next/image'
import { 
  TitleSkeleton, 
  MissionSkeleton, 
  BoardSkeleton, 
  FutureSkeleton 
} from '@/components/AboutPageSkeleton'


export default function AboutPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-light via-secondary/10 to-purple-light/5 dark:from-background-dark dark:via-purple-dark/5 dark:to-accent-dark/3">
      <Navbar />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" tabIndex={-1}>
        {aboutConfig?.pageTitle ? (
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-8 text-center">
            {aboutConfig.pageTitle}
          </h1>
        ) : (
          <TitleSkeleton />
        )}
        
        {aboutConfig?.mission?.title && aboutConfig?.mission?.text ? (
          <section className="mb-12 bg-white/90 dark:bg-background-dark/70 backdrop-blur-md rounded-xl p-8 shadow-xl border border-secondary/30 dark:border-purple-dark/30">
            <h2 className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4">{aboutConfig.mission.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {aboutConfig.mission.text}
            </p>
          </section>
        ) : (
          <MissionSkeleton />
        )}

        {aboutConfig?.board?.title && aboutConfig.board.members?.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-8 text-center">{aboutConfig.board.title}</h2>
            <div className="grid gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              {aboutConfig.board.members.map((member) => (
                <div
                  key={member.name}
                  className="bg-white/90 dark:bg-background-dark/70 backdrop-blur-md rounded-xl p-6 shadow-xl border border-secondary/30 dark:border-purple-dark/30 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Image 
                    className="rounded-xl mb-4 flex-shrink-0 border-2 border-accent-light/20 dark:border-accent-dark/20" 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} at Expression Neuroscience Institute`}
                    width={160}
                    height={160}
                  />
                  <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-accent-light dark:text-accent-dark mb-3 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <BoardSkeleton />
        )}

        {aboutConfig?.future?.title && aboutConfig?.future?.text ? (
          <section className="text-center py-12 bg-gradient-to-r from-accent-light/10 to-purple-light/10 dark:from-accent-dark/10 dark:to-purple-dark/10 rounded-xl backdrop-blur-md border border-secondary/30 dark:border-purple-dark/30">
            <h2 className="text-2xl font-semibold text-accent-light dark:text-accent-dark mb-4">{aboutConfig.future.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
             {aboutConfig.future.text}
            </p>
          </section>
        ) : (
          <FutureSkeleton />
        )}
      </main>
      <Footer />
    </div>
  )
} 