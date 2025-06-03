export  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

export const trainers = [
    {
      id: 1,
      name: "Lalit kumar",
      expertise: "Computer & Tally Expert",
      experience: "5+ years",
      courses: ["Basic Computer", "Tally Prime"],
      img:"/images/trainers/Lalit.jpg",
      bio: "Industry-certified trainer with expertise in accounting software and computer fundamentals."
    },
    {
      id: 2,
      name: "Gladys N. Baite",
      expertise: "English Language Specialist",
      experience: "4+ years",
      courses: ["Spoken English", "Business Communication"],
      img:"https://avatar.iran.liara.run/public/75",
      bio: "Cambridge-certified English trainer with focus on accent reduction and fluency development."
    },
    {
      id: 3,
      name: "Kiara Foujdar",
      expertise: "Beauty & Wellness Expert",
      experience: "2+ years",
      courses: ["Makeup Artist", "Wellness Practices"],
      img:"https://avatar.iran.liara.run/public/69",
      bio: "Internationally VLCC certified beauty therapist with extensive salon and training experience."
    }
  ];

export const courses = [
    {
      id: 'basic-computer-tally',
      title: 'Basic Computer & Tally Prime',
      description: 'Master computer fundamentals and professional accounting with Tally Prime',
      fees: 1200,
      image: 'computer',
      benefits: [
        'Industry-recognized certification',
        'Hands-on practical training',
        'Placement assistance',
        'Financial accounting expertise',
        'GST filing knowledge'
      ],
      duration: '6 months',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'spoken-english',
      title: 'Spoken English',
      description: 'Build confidence in English communication for all situations',
      fees:1200,
      image: 'english',
      benefits: [
        'Daily conversation practice',
        'Accent reduction techniques',
        'Interview preparation',
        'Public speaking skills',
        'Vocabulary building'
      ],
      duration: '6 months',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'beauty-wellness',
      title: 'Beauty & Wellness',
      description: 'Master beauty techniques and wellness practices for a rewarding career',
      fees: 1800,
      image: 'beauty',
      benefits: [
        'Internationally recognized certification',
        'Practical salon training',
        'Entrepreneurship guidance',
        'Skin and hair care expertise',
        'Wellness therapy techniques'
      ],
      duration: '4 months',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  export const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Programs', path: '/courses' },
        { name: 'Admissions', path: '/admissions' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Student Portal', path: '/portal' },
        { name: 'Library', path: '/library' },
        { name: 'Research', path: '/research' },
        { name: 'Alumni', path: '/alumni' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ],
    },
  ];