export type Metric = {
  label: string
  value: string
}

export type CaseStudySection = {
  eyebrow: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type CaseStudy = {
  slug: string
  role: string
  duration: string
  context: string
  summary: string
  metrics: Metric[]
  pipeline: string[]
  sections: CaseStudySection[]
}

export const caseStudies: Record<string, CaseStudy> = {
  signora: {
    slug: 'signora',
    role: 'Machine Learning Engineer · Researcher',
    duration: '3 Months',
    context: 'Undergraduate Final Project at Informatics Engineering, Universitas Islam Negeri Sunan Gunung Djati Bandung',
    summary:
      'Signora explores sentence-level Indonesian Sign Language translation through a vision-and-language pipeline that converts video movement into structured landmark sequences and decodes them into Indonesian sentences.',
    metrics: [
      { label: 'BLEU-1 Score', value: '0.7220' },
      { label: 'BLEU-2 Score', value: '0.6942' },
      { label: 'BLEU-4 Score', value: '0.5205' },
      { label: 'Word Error Rate', value: '0.3302' },
    ],
    pipeline: [
      'Video input',
      'Frame extraction',
      'MediaPipe hands + pose',
      'CNN + GRU encoder',
      'Bahdanau attention + GRU decoder',
      'Natural text output',
    ],
    sections: [
      {
        eyebrow: '01 — Problem',
        title: 'Moving beyond isolated sign recognition',
        paragraphs: [
          'Much of sign-language recognition research focuses on recognizing isolated gestures. Signora was designed around a more difficult question: can a sequence of BISINDO movements be translated into a complete Indonesian sentence?',
          'The project therefore treats the task as a sequence-to-sequence problem rather than a simple gesture classifier.',
        ],
      },
      {
        eyebrow: '02 — Dataset',
        title: 'A controlled sentence-level BISINDO dataset',
        paragraphs: [
          'The dataset was collected from two signers using 30 sentence classes, with each sentence repeated 15 times per signer. The training pipeline also incorporated augmented samples to improve variation during learning.',
        ],
        bullets: [
          '900 total video samples',
          '2 signers',
          '30 BISINDO sentences',
          'Train / val / test split based on the prepared dataset',
        ],
      },
      {
        eyebrow: '03 — Representation',
        title: 'Turning motion into model-ready sequences',
        paragraphs: [
          'Instead of training directly on RGB frames, the preprocessing pipeline extracts hand and body pose landmarks. The landmarks are normalized, temporally resampled to a fixed sequence length, enriched with velocity information, and converted into a 450-dimensional feature vector per frame.',
          'This representation reduces dependence on raw pixels while preserving the temporal motion needed to distinguish signs.',
        ],
      },
      {
        eyebrow: '04 — Architecture',
        title: 'CNN-GRU encoder with attention-based decoding',
        paragraphs: [
          'The encoder uses a one-dimensional convolution to learn local temporal patterns before a GRU models longer sequential dependencies. The decoder uses another GRU together with Bahdanau attention so the output sequence can focus on different encoder states while producing each token.',
        ],
        bullets: [
          'Input feature size: 450 dimensions per frame',
          'Conv1D: 450 → 256 channels, kernel size 3',
          'Encoder GRU hidden size: 256',
          'Embedding size: 256',
          'Decoder GRU hidden size: 256',
          'Bahdanau attention',
          'Cross-entropy training objective',
        ],
      },
      {
        eyebrow: '05 — Training',
        title: 'Tracking convergence instead of just the final score',
        paragraphs: [
          'Training was monitored with validation loss and early stopping. The strongest checkpoint appeared at epoch 88 with the lowest validation loss of 0.1878, while training stopped at epoch 98 after the validation score no longer improved.',
        ],
      },
      {
        eyebrow: '06 — Evaluation',
        title: 'Measuring both exact translation and sequence quality',
        paragraphs: [
          'The final evaluation used sentence accuracy alongside BLEU and word error rate. Sentence accuracy captures exact matches, while BLEU and WER give a more useful view when a generated sentence is partially correct rather than perfectly identical to the reference.',
        ],
      },
      {
        eyebrow: '07 — Deployment',
        title: 'From notebook pipeline to an interactive application',
        paragraphs: [
          'The trained pipeline was integrated into a Streamlit application at the early stage of deployment. The application allows users to upload a video and receive a predicted Indonesian sentence, while receiving feedback for future deployment improvements.',
        ],
      },
    ],
  },

  aequilibria: {
    slug: 'aequilibria',
    role: 'Machine Learning Engineer · Web Developer',
    duration: '3 Months',
    context:
      '2025 Silver Medal Winner at International Invention Competition For Young Moslem Scientists',
    summary:
      'Aequilibria is a machine learning-powered journaling web-application that analyzes written journal entries using natural language processing and presents patterns through an interactive visual experience.',

    metrics: [
      { label: 'Macro F1-Score', value: '0.84' },
      { label: 'Classification Classes', value: '7' },
    ],

    pipeline: [
      'Journal entry',
      'Text preprocessing',
      'TF-IDF feature extraction',
      'XGBoost classifier',
      'Mental health classification',
      'Visual insights',
    ],

    sections: [
      {
        eyebrow: '01 — Problem',
        title: 'Finding patterns hidden across journal entries',
        paragraphs: [
          'Individual journal entries can capture thoughts and emotions at a particular moment, but patterns across multiple entries can be difficult to recognize over time. Aequilibria explores how natural language processing and machine learning can help organize written journal entries into meaningful patterns for personal reflection.',
          'Rather than functioning as a diagnostic tool, the project focuses on combining text classification with a journaling experience that allows users to observe changes and recurring patterns in their entries.',
        ],
      },

      {
        eyebrow: '02 — Classification',
        title: 'Framing journal analysis as a multi-class NLP problem',
        paragraphs: [
          'The machine learning task was formulated as a multi-class text classification problem. Each text sample is analyzed and assigned to one of seven mental-health-related categories based on patterns learned from the training data.',
        ],
        bullets: [
          'Normal',
          'Depression',
          'Suicidal',
          'Anxiety',
          'Bipolar',
          'Stress',
          'Personality Disorder',
        ],
      },

      {
        eyebrow: '03 — Representation',
        title: 'Transforming language into machine-readable features',
        paragraphs: [
          'Raw text cannot be processed directly by the classifier, so journal entries are transformed into numerical representations using Term Frequency-Inverse Document Frequency (TF-IDF).',
          'TF-IDF captures the relative importance of terms within each text sample and produces feature vectors that can be used by the machine learning model. This provides a lightweight approach to representing language without requiring a large neural network architecture.',
        ],
      },

      {
        eyebrow: '04 — Model',
        title: 'Classifying journal text with XGBoost',
        paragraphs: [
          'XGBoost was used as the primary classifier on top of the TF-IDF feature representation. The model learns relationships between textual features and the seven target categories, then uses those patterns to classify unseen text.',
          'The dataset was divided using an 80:20 train-test split, while 5-fold cross-validation was used during development to evaluate how consistently the model performed across different subsets of the training data.',
        ],
        bullets: [
          'TF-IDF text representation',
          'XGBoost multi-class classifier',
          '5-fold cross-validation',
        ],
      },

      {
        eyebrow: '05 — Evaluation',
        title: 'Evaluating performance across all seven classes',
        paragraphs: [
          'The classification pipeline achieved a Macro F1-score of approximately 0.84. Macro F1 was used to evaluate performance across all seven classes by calculating performance for each class independently before treating them equally in the final score.',
          'This provides a more balanced view of the classifier than relying only on overall accuracy, particularly when performance across multiple categories is important.',
        ],
      },

      {
        eyebrow: '06 — Application',
        title: 'Turning model predictions into a journaling experience',
        paragraphs: [
          'Aequilibria was designed as more than a standalone machine learning experiment. The classification pipeline was connected to a user-facing journaling application where users can write entries and view the resulting analysis.',
          'Instead of presenting predictions only as individual labels, the application uses visual elements to help users observe their journal activity and classification patterns across time.',
        ],
      },


      {
        eyebrow: '07 — Limitations',
        title: 'Understanding the boundaries of text classification',
        paragraphs: [
          'Aequilibria is an experimental machine learning application and is not intended to provide medical diagnoses. A text classification model cannot capture the complete context of a person’s mental state, and its predictions depend on the characteristics and limitations of the data used during training.',
          'The predicted categories should therefore be treated as outputs of the machine learning system for exploration and reflection rather than as clinical assessments.',
        ],
      },
    ],
  },

  maha: {
    slug: 'maha',
    role: 'Cloud Computing Engineer',
    duration: '2 Months',
    context:
      'Product Capstone Project at Bangkit Academy 2024',
    summary:
      'MAHA (My Assistant Health App) is a personalized digital health platform that combines machine learning, mobile development, and cloud infrastructure to deliver adaptive dietary and exercise recommendations based on user profiles and health conditions.',

    metrics: [
      { label: 'Exercise Model Accuracy', value: '99%+' },
      { label: 'Diet Model Accuracy', value: '90%+' },
    ],

    pipeline: [
      'User health profile',
      'Android application',
      'Cloud API',
      'ML recommendation models',
      'Firebase services',
      'Personalized recommendations',
    ],

    sections: [
      {
        eyebrow: '01 — Problem',
        title: 'Bridging the gap between healthy intentions and daily habits',
        paragraphs: [
          'MAHA was developed around a gap between people who want to live healthier and those who consistently practice healthy behaviors. The project focused on challenges such as low health literacy, sedentary lifestyles, and difficulty maintaining appropriate dietary habits.',
          'Instead of providing the same recommendations to every user, MAHA was designed to personalize diet and exercise guidance using individual characteristics such as age, height, weight, gender, BMI, and selected health conditions.',
        ],
      },

      {
        eyebrow: '02 — Solution',
        title: 'Personalized health guidance in one mobile platform',
        paragraphs: [
          'MAHA combines a mobile application, machine learning recommendation models, and cloud infrastructure into a single digital health platform. Users provide profile and health information through the Android application, which is then used to generate personalized diet and exercise recommendations.',
          'The application was designed to adapt its recommendations to individual profiles and support users with specific conditions such as diabetes and hypertension, while also providing access to relevant health information.',
        ],
        bullets: [
          'Personalized dietary recommendations',
          'Personalized exercise recommendations',
          'Support for diabetes and hypertension',
          'Local health news and information',
        ],
      },

      {
        eyebrow: '03 — Architecture',
        title: 'Connecting mobile, machine learning, and cloud services',
        paragraphs: [
          'The system was developed across three technical disciplines: Mobile Development, Machine Learning, and Cloud Computing. The Android application acts as the user-facing layer, while cloud services connect user data, authentication, application storage, and the machine learning recommendation services.',
          'This architecture allowed each part of the system to be developed independently while communicating through a shared cloud-based infrastructure.',
        ],
        bullets: [
          'Android Studio and Kotlin for the mobile application',
          'TensorFlow for machine learning models',
          'Google Cloud Run for application services',
          'Firebase Authentication for user identity',
          'Cloud Firestore for application data',
          'Firebase Realtime Database for real-time data',
        ],
      },

      {
        eyebrow: '04 — Machine Learning',
        title: 'Generating adaptive diet and exercise recommendations',
        paragraphs: [
          'MAHA uses separate machine learning models for exercise and dietary recommendations. User characteristics and health information are used as inputs to generate recommendations that are more relevant to the individual than general fitness guidance.',
          'The exercise recommendation model achieved more than 99% test accuracy with a test loss of 0.024, while the diet recommendation model achieved more than 90% test accuracy with a test loss of 0.280.',
          'The machine learning component was developed by the project’s Machine Learning team and integrated with the rest of the MAHA platform through the shared application architecture.',
        ],
      },

      {
        eyebrow: '05 — Cloud Infrastructure',
        title: 'Building the infrastructure connecting the system',
        paragraphs: [
          'My primary responsibility in MAHA was on the Cloud Computing side of the project. The cloud layer was responsible for connecting the mobile application with authentication, persistent user data, real-time services, and the recommendation system.',
          'Application services were deployed using Google Cloud Run in the asia-southeast2 region in Jakarta. Firebase services were used alongside the cloud deployment to handle authentication and application data.',
        ],
        bullets: [
          'Google Cloud Run — asia-southeast2 (Jakarta)',
          'Firebase Authentication',
          'Cloud Firestore',
        ],
      },

      {
        eyebrow: '06 — Data Flow',
        title: 'From user profile to personalized recommendation',
        paragraphs: [
          'The recommendation process begins when users provide their personal and health information through the Android application. This information becomes the context used by the platform to determine appropriate diet and exercise recommendations.',
          'The cloud infrastructure acts as the connection layer between the application, stored user information, and recommendation services before the resulting guidance is returned to the mobile interface.',
        ],
      },

      {
        eyebrow: '07 — Cloud Design',
        title: 'Designing for managed deployment and scalability',
        paragraphs: [
          'The cloud architecture used managed Google Cloud and Firebase services to reduce the infrastructure required to operate the platform. Cloud Run provides a managed environment for deploying application services, while Firebase handles common application requirements such as authentication and data storage.',
          'Keeping the application services within Southeast Asian Google Cloud regions also aligned the infrastructure geographically with MAHA’s intended Indonesian user base.',
        ],
      },

      {
        eyebrow: '08 — Collaboration',
        title: 'Building one product across three technical disciplines',
        paragraphs: [
          'MAHA was developed by a seven-person team divided into Machine Learning, Cloud Computing, and Mobile Development roles. This required each technical group to build its own components while agreeing on how information would move across the complete system.',
          'Working on the Cloud Computing team gave me experience at the integration point between these components, where mobile requests, user data, cloud services, and machine learning outputs needed to work together as one product.',
        ],
        bullets: [
          '3 Machine Learning engineers',
          '2 Cloud Computing engineers',
          '2 Mobile Development engineers',
          '7 team members in total',
        ],
      },

      {
        eyebrow: '09 — Challenges',
        title: 'Personalization depends on both data and trust',
        paragraphs: [
          'Personalized recommendations depend heavily on the quality of information provided by users. Incorrect or incomplete profile information can affect the relevance of the recommendations generated by the system.',
          'MAHA also operates in a domain where user trust and data privacy are particularly important. Handling health-related information introduces additional considerations around authentication, data access, security, and how recommendations are communicated to users.',
        ],
      },
    ],
  },
}