'use client'

import { useState } from 'react'
import CertificateCard from './CertificateCard'
import CertificateModal from './CertificateModal'

const certificates = [
  { 
    id: 1, 
    name: 'Effective Business Communication', 
    issuer: 'HP', 
    date: '2024-12-31', 
    description: 'A course focused on improving business communication skills by analyzing audience, selecting appropriate mediums, and delivering effective messages.', 
    imageUrl: '/Certificates1.png?height=300&width=300' 
  },
  { 
    id: 2, 
    name: 'Developing a Success Mindset', 
    issuer: 'HP', 
    date: '2024-12-28', 
    description: 'A course on building a success-oriented mindset by aligning values, setting goals, and developing effective habits for personal and professional growth.', 
    imageUrl: '/Certificates2.png?height=300&width=300' 
  },
  { 
    id: 3, 
    name: 'Job Search Preparation', 
    issuer: 'HP', 
    date: '2024-12-28', 
    description: 'Master crafting tailored resumes and cover letters, acing interviews, and conducting self-assessments for career insights.', 
    imageUrl: '/Certificates3.png?height=300&width=300' 
  },
  { 
    id: 4, 
    name: 'SEO Essentials', 
    issuer: 'Coursat', 
    date: '2024-12-31', 
    description: 'Comprehensive guide to understanding and applying search engine optimization techniques effectively.', 
    imageUrl: '/Certificates4.jpeg?height=300&width=300' 
  },
  { 
    id: 5, 
    name: 'GitHub Essentials', 
    issuer: 'Coursat', 
    date: '2024-12-29', 
    description: 'Step-by-step guide to mastering version control and collaboration using GitHub.', 
    imageUrl: '/Certificates5.jpeg?height=300&width=300' 
  },
  { id: 6,
     name: 'CSS Modules  React Styling',
     issuer: 'Maaref',
     date: '2024-12-31',
     description: 'A comprehensive course in Arabic focused on using CSS Modules to style large-scale React applications.', 
     imageUrl: '/Certificates6.jpg?height=300&width=300'
  },
  { 
    id: 7, 
    name: 'DHCP Essentials', 
    issuer: 'M3aarf', 
    date: '2024-12-31', 
    description: 'Comprehensive overview of Dynamic Host Configuration Protocol (DHCP) for network management.', 
    imageUrl: '/Certificates7.jpg?height=300&width=300' 
  },
  { 
    id: 8, 
    name: 'AI for Game Development with Unity', 
    issuer: 'M3aarf', 
    date: '2024-12-28', 
    description: 'Introduction to leveraging artificial intelligence for game development using Unity, tailored for beginners.', 
    imageUrl: '/Certificates8.jpg?height=300&width=300' 
  },
  { 
    id: 9, 
    name: 'Laravel from Scratch', 
    issuer: 'M3aarf', 
    date: '2024-12-26', 
    description: 'Comprehensive course covering the fundamentals of Laravel framework, designed for beginners.', 
    imageUrl: '/Certificates9.jpg?height=300&width=300' 
  },
  { 
    id: 10, 
    name: 'Basics of Trading', 
    issuer: 'M3aarf', 
    date: '2024-12-26', 
    description: 'Introductory course on trading, covering the essential concepts and strategies for beginners.', 
    imageUrl: '/Certificates10.jpg?height=300&width=300' 
  },
  { 
    id: 11, 
    name: 'First Aid', 
    issuer: 'M3aarf', 
    date: '2024-12-26', 
    description: 'Course covering the essential techniques for providing first aid in emergency situations.', 
    imageUrl: '/Certificates11.jpg?height=300&width=300' 
  },
  { 
    id: 12, 
    name: 'Deal With Hosting', 
    issuer: 'M3aarf', 
    date: '2024-12-26', 
    description: 'Course focusing on managing hosting services and understanding server configurations for efficient website hosting.', 
    imageUrl: '/Certificates12.jpg?height=300&width=300' 
  },
  { 
    id: 13, 
    name: 'Chat CPT For Beginners ', 
    issuer: 'M3aarf', 
    date: '2024-12-25', 
    description: 'Course covering how to use ChatGPT effectively for various applications, including automating tasks and enhancing user interactions.', 
    imageUrl: '/Certificates13.jpg?height=300&width=300' 
  },
  { 
    id: 14, 
    name: 'Mobile Security', 
    issuer: 'M3aarf', 
    date: '2024-12-25', 
    description: 'Course focusing on mobile security practices, including securing mobile devices and preventing cyber threats.', 
    imageUrl: '/Certificates14.jpg?height=300&width=300' 
  },
  { 
    id: 15, 
    name: 'Designing an order delivery system with Figma', 
    issuer: 'M3aarf', 
    date: '2025-01-04', 
    description: 'A course on designing a user-friendly order delivery system interface using Figma, focusing on UX/UI principles and best practices.', 
    imageUrl: '/Certificates15.jpg?height=300&width=300' 
  },
  { 
    id: 16, 
    name: 'Protecting Files with Passwords', 
    issuer: 'M3aarf', 
    date: '2025-01-04', 
    description: 'A beginner-friendly course on securing your files with passwords, covering encryption methods and tools for file protection.', 
    imageUrl: '/Certificates16.jpg?height=300&width=300' 
  },
  { 
    id: 17, 
    name: 'Microsoft SQL Server Basics', 
    issuer: 'M3aarf', 
    date: '2025-01-04', 
    description: 'A comprehensive course to learn the fundamentals of Microsoft SQL Server, covering installation, database management, and querying.', 
    imageUrl: '/Certificates17.jpg?height=300&width=300' 
  },
  { 
    id: 18, 
    name: 'Windows Service Overview', 
    issuer: 'M3aarf', 
    date: '2025-01-04', 
    description: 'Learn about the benefits and usage of Windows Services, including installation, configuration, and management of background services on Windows operating systems.', 
    imageUrl: '/Certificates18.jpg?height=300&width=300' 
  },
  { 
    id: 19, 
    name: 'Introduction to Volunteering Work', 
    issuer: 'Labeeb', 
    date: '2024-12-06', 
    description: 'Completed the training course on the Labeeb platform titled "Introduction to Volunteering Work," focusing on essential skills and requirements for volunteering.', 
    imageUrl: '/Certificates19.png?height=300&width=300' 
  }
  
  
  // add +
]

export default function CertificateGrid() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onClick={() => setSelectedCertificate(cert)}
          />
        ))}
      </div>
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}



