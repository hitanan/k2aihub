import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Target, User, Play, ChevronLeft, ChevronRight, Shield, Bug, AlertTriangle, Eye, Server, Book, ExternalLink, CheckCircle, Lightbulb, Users } from 'lucide-react'
import { cyberSecurityLessons } from '@/data/cybersecurity'
import { createTitle, createDescription } from '@/utils/seo'
import { PageProps } from '@/types'

export async function generateStaticParams() {
  return cyberSecurityLessons.map((lesson) => ({
    lessonId: lesson.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = cyberSecurityLessons.find(l => l.id === lessonId)

  if (!lesson) {
    return {
      title: 'Lesson Not Found | K2AiHub',
      description: 'The requested cybersecurity lesson could not be found.',
    }
  }

  return {
    title: createTitle(lesson.title),
    description: createDescription(lesson.description),
    openGraph: {
      title: lesson.title,
      description: lesson.description,
      images: lesson.imageUrl ? [{ url: lesson.imageUrl }] : [],
    },
  }
}

export default async function CyberSecurityLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = cyberSecurityLessons.find(l => l.id === lessonId)

  if (!lesson) {
    notFound()
  }

  const currentIndex = cyberSecurityLessons.findIndex(l => l.id === lessonId)
  const previousLesson = currentIndex > 0 ? cyberSecurityLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < cyberSecurityLessons.length - 1 ? cyberSecurityLessons[currentIndex + 1] : null

  const getDomainIcon = (domain: string) => {
    switch (domain.toLowerCase()) {
      case 'penetration testing':
        return <Bug className="w-5 h-5" />
      case 'defense & incident response':
        return <Shield className="w-5 h-5" />
      case 'threat intelligence':
        return <Eye className="w-5 h-5" />
      case 'forensics':
        return <Server className="w-5 h-5" />
      default:
        return <AlertTriangle className="w-5 h-5" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'cơ bản':
        return 'from-green-500 to-emerald-500'
      case 'trung bình':
        return 'from-yellow-500 to-orange-500'
      case 'nâng cao':
        return 'from-red-500 to-pink-500'
      case 'chuyên gia':
        return 'from-purple-500 to-violet-500'
      default:
        return 'from-blue-500 to-cyan-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Navigation Header */}
      <div className="bg-black/20 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/learning/cybersecurity"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Cybersecurity
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className={`flex items-center px-3 py-1 bg-gradient-to-r ${getDomainIcon(lesson.securityDomain)} rounded-full text-white text-sm`}>
                {getDomainIcon(lesson.securityDomain)}
                <span className="ml-2">{lesson.securityDomain}</span>
              </div>
              <div className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(lesson.difficulty)} rounded-full text-white text-sm font-medium`}>
                {lesson.difficulty}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Lesson Header */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {lesson.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {lesson.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-2 text-red-400" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Target className="w-5 h-5 mr-2 text-red-400" />
                  <span>{lesson.difficulty}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <User className="w-5 h-5 mr-2 text-red-400" />
                  <span>{lesson.securityDomain}</span>
                </div>
              </div>

              {/* Video */}
              {lesson.videoUrl && (
                <div className="relative rounded-xl overflow-hidden mb-6 bg-black/20">
                  <iframe
                    src={lesson.videoUrl.replace('watch?v=', 'embed/')}
                    title={lesson.title}
                    className="w-full h-64 md:h-96"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Learning Objectives */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-red-400" />
                Learning Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Book className="w-6 h-6 mr-3 text-red-400" />
                Prerequisites
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{prereq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-on Exercises */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Play className="w-6 h-6 mr-3 text-red-400" />
                Hands-on Exercises
              </h2>
              <div className="space-y-6">
                {lesson.exercises.map((exercise, index) => (
                  <div key={index} className="border border-white/10 rounded-xl p-6 bg-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(exercise.difficulty)} rounded-full text-white text-sm`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exercise.description}</p>
                    
                    {/* Requirements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {exercise.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hints */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Hints:</h4>
                      <ul className="space-y-1">
                        {exercise.hints.map((hint, hintIndex) => (
                          <li key={hintIndex} className="text-gray-300 text-sm flex items-start">
                            <Lightbulb className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                            {hint}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution Toggle */}
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-red-400 hover:text-red-300 transition-colors">
                        View Complete Solution & Implementation
                      </summary>
                      <div className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10">
                        <pre className="text-gray-300 text-sm whitespace-pre-wrap overflow-x-auto">
                          {exercise.solution}
                        </pre>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-world Applications */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-red-400" />
                Real-world Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lesson.realWorldApplications.map((application, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            {lesson.caseStudies && lesson.caseStudies.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Book className="w-6 h-6 mr-3 text-red-400" />
                  Case Studies
                </h2>
                <div className="space-y-6">
                  {lesson.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="border border-white/10 rounded-xl p-6 bg-white/5">
                      <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                      <p className="text-red-400 font-medium mb-4">{caseStudy.organization}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                          <p className="text-gray-300">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Solution:</h4>
                          <p className="text-gray-300">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Results:</h4>
                          <p className="text-gray-300">{caseStudy.results}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Key Insights:</h4>
                          <ul className="space-y-1">
                            {caseStudy.insights.map((insight, insightIndex) => (
                              <li key={insightIndex} className="text-gray-300 flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {previousLesson ? (
                <Link
                  href={`/learning/cybersecurity/${previousLesson.id}`}
                  className="flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous Lesson
                </Link>
              ) : (
                <div></div>
              )}

              {nextLesson && (
                <Link
                  href={`/learning/cybersecurity/${nextLesson.id}`}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300"
                >
                  Next Lesson
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Tools Used */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-red-400" />
                Security Tools
              </h3>
              <div className="space-y-2">
                {lesson.tools.map((tool, index) => (
                  <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
              
              {/* Resources */}
              {lesson.resources && lesson.resources.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-white mb-3">Additional Resources</h4>
                  <div className="space-y-2">
                    {lesson.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-white/5 rounded-lg border border-white/10 hover:border-red-500/30 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {resource.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{resource.type}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Course Progress */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Course Progress</h3>
              <div className="space-y-3">
                {cyberSecurityLessons.map((lessonItem, index) => (
                  <Link
                    key={lessonItem.id}
                    href={`/learning/cybersecurity/${lessonItem.id}`}
                    className={`block p-3 rounded-lg border transition-all duration-300 ${
                      lessonItem.id === lesson.id
                        ? 'bg-red-500/20 border-red-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:border-red-500/30 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${
                        lessonItem.id === lesson.id
                          ? 'bg-red-500 text-white'
                          : 'bg-white/10 text-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">
                          {lessonItem.title.replace(/^Bài \d+: /, '')}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {lessonItem.duration} • {lessonItem.difficulty}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
