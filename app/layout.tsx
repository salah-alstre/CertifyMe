import './globals.css'
import { Inter } from 'next/font/google'
import { FaLinkedin, FaGithub, FaGlobe, FaFileAlt } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CertifyMe',
  description: 'A showcase of my professional and educational certificates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark"> 
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="bg-black-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">CertifyMe</h1>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/salah-alstre-8aba5a322/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/salah-alstre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500"
              >
                <FaGithub size={24} />
              </a>
              {/* Website */}
              <a
                href="https://devr-profile.vercel.app/" // ضع رابط موقعك هنا
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-500"
              >
                <FaGlobe size={24} />
              </a>
              {/* CV */}
              <a
                href="/SalahCv_Updated3.pdf" // ضع رابط السيرة الذاتية هنا
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500"
              >
                <FaFileAlt size={24} />
              </a>
            </div>
          </div>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="w-full">
            {children}
          </div>
        </main>

        {/* الفوتر */}
        <footer className="bg-black-800 text-white py-6 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; 2025 CertifyMe Portfolio. All rights reserved.
            </p>
            <div className="mt-2">
              <a href="https://github.com/salah-alstre" className="text-blue-400 hover:text-blue-600">GitHub</a>
              <span className="mx-2">|</span>
              <a href="https://www.linkedin.com/in/salah-alstre-8aba5a322/" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
