import Image from 'next/image'
import CertificateGrid from './components/CertificateGrid'

export default function Home() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="flex flex-col md:flex-row items-center gap-8 justify-center">
        <Image
          src="/Me.png?height=300&width=300"
          alt="Your Name"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
          I am a passionate Full Stack Developer with a diverse set of skills and certifications. Throughout 
          my journey in continuous learning, I have earned credentials in various fields,
           which I apply to build innovative solutions and solve complex problems. These 
           certifications, acquired from leading platforms, reflect my commitment
            to mastering both technical and creative aspects of development.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">My Certificates</h2>
        <CertificateGrid />
      </section>
    </div>
  )
}

