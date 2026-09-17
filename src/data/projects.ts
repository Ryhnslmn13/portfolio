export type Project = {
  slug: string
  title: string
  subtitle: string
  tag: string
  description: string
  year: number
  image: string
  imageAlt: string
  featured: boolean
  technologies: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'signora',
    title: 'Signora',
    subtitle: 'AI-Powered BISINDO Translation System',
    tag: 'Artificial Intelligence · Computer Vision · Natural Language Processing',
    description:
      'A vision-and-language pipeline for sentence-level Indonesian Sign Language (BISINDO) translation using hand and pose landmarks with a CNN-GRU encoder-decoder and Bahdanau attention.',
    year: 2026,
    image: '/images/projects/signora.png',
    imageAlt: 'BISINDO translation system',
    github: 'https://github.com/Ryhnslmn13/bisindo-slt',
    demo: '',
    featured: true,
    technologies: ['Python', 'MediaPipe', 'CNN', 'GRU', 'Bahdanau Attention'],
  },
  {
    slug: 'aequilibria',
    title: 'Aequilibria',
    subtitle: 'Journaling Application for Mental Health Awareness',
    tag: 'Machine Learning · Natural Language Processing · Data Visualization',
    description:
      'A web-based application that classifies journal text into seven mental-health-related categories using TF-IDF and XGBoost, paired with visual tracking and journaling features.',
    year: 2025,
    image: '/images/projects/aequilibria.png',
    imageAlt: 'Aequilibria web application',
    github: 'https://github.com/Nzwaaa/Aequilibria',
    demo: 'https://nzwaaa.github.io/Aequilibria/',
    featured: true,
    technologies: ['Python', 'XGBoost', 'TF-IDF', 'Machine Learning', 'Data Visualization'],
  },
  {
    slug: 'maha',
    title: 'MAHA (My Assistant Health App)',
    subtitle: 'Smart Mobile App for Health Assistance',
    tag: 'Software · Health Tech',
    description:
      'A health-assistant application designed to bring useful health-related information and assistance into a focused digital experience.',
    year: 2025,
    image: '/images/projects/maha.png',
    imageAlt: 'MAHA My Health Assistant application',
    github: 'https://github.com/Ryhnslmn13/MAHA',
    demo: '',
    featured: true,
    technologies: ['Kotlin', 'TensorFlow', 'Google Cloud', 'Firebase',],
  },
]