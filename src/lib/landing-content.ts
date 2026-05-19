export type LanguageCode = "en" | "ja" | "ne";

export type HomeLandingContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    trustLine: string;
    ribbon: string[];
  };
  stats: { value: string; label: string }[];
  why: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    description: string;
    items: { step: string; title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
};

export function getLanguageCode(value: string | null | undefined): LanguageCode {
  if (value === "ja" || value === "ne") {
    return value;
  }

  return "en";
}

export const homeContent: Record<LanguageCode, HomeLandingContent> = {
  en: {
    hero: {
      eyebrow: "Student Stories",
      title: "Real Students, Real Success in Japan",
      description:
        "AKARUI POKHARA ! guides students from Pokhara with personalized counseling, visa support, language preparation, and post-arrival care.",
      primaryAction: "Free Counselling",
      secondaryAction: "Explore Gallery",
      trustLine: "Trusted guidance - visa support - global admissions",
      ribbon: ["Tokyo", "Kyoto", "Fukuoka", "Nagoya", "Sapporo", "Sendai", "Yokohama", "Osaka"],
    },
    stats: [
      { value: "98%", label: "Visa success rate" },
      // { value: "1K+", label: "Students placed" },
      { value: "8", label: "Top cities" },
      { value: "100+", label: "Partner universities" },
      { value: "∞", label: "Post-visa support" },
    ],
    why: {
      eyebrow: "Why AKARUI!",
      title: "We don't just send you - we prepare you.",
      description:
        "AKARUI POKHARA ! combines Japan-first counseling, practical coaching, and dependable support so students are ready before they leave and after they land.",
      items: [
        {
          title: "Personalized Counseling",
          description:
            "Dedicated expert guidance tailored to your unique goals and circumstances.",
        },
        {
          title: "Payment After Getting Visa",
          description:
            "No upfront fees. We succeed when your visa is approved.",
        },
        {
          title: "Post-Arrival Support",
          description:
            "Accommodation guidance, airport pickup coordination, and community connections.",
        },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Everything you need in one place.",
      description:
        "From your first consultation to landing at your destination university, AKARUI! covers it all.",
      items: [
        { title: "Career Counselling", description: "1-on-1 sessions to identify the right course, country, and university fit." },
        { title: "University Admission", description: "Application support, SOP writing, document review, and submission to top institutions." },
        { title: "Visa Processing", description: "Expert guidance on student visa applications with a 98% approval track record." },
        { title: "Test Preparation", description: "JLPT, NAT-TEST, EJU, and JFT-Basic coaching in Pokhara." },
        { title: "Scholarship Guidance", description: "We identify and apply for scholarships to help reduce your burden abroad." },
        { title: "Accommodation Support", description: "Dormitory and housing help before you even land." },
      ],
    },
    steps: {
      eyebrow: "How It Works",
      title: "4 Simple Steps to Your Overseas Education",
      description:
        "We keep the journey clear so students and parents always know the next step.",
      items: [
        { step: "01", title: "Free Consultation", description: "Meet with our counselors and discuss your goals, destination, and budget." },
        { step: "02", title: "Profile Evaluation", description: "We assess your academics, language scores, and financial documents." },
        { step: "03", title: "Apply & Get Offer", description: "We submit applications and secure your offer letter." },
        { step: "04", title: "Visa & Fly!", description: "We prepare and submit your visa application, then help you prepare for departure." },
      ],
    },
    testimonials: {
      eyebrow: "Student Stories",
      title: "Real students, real success in Japan.",
      description: "We measure success by the confidence our students carry abroad.",
    },
    gallery: {
      eyebrow: "Student Gallery",
      title: "Stories of success and dreams.",
      description: "Every journey starts with a single step. See how students turned their dreams into reality.",
      cta: "See more gallery images",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start Your Journey with AKARUI!",
      description:
        "Our expert counsellors in Pokhara are ready to guide you. Drop by, call us, or use the link below — we'll get back to you the same day.",
    },
    cta: {
      eyebrow: "Ready to Start Your International Journey?",
      title: "Book a free counselling session today — no obligations, just honest guidance.",
      description: "No pressure, just honest guidance from our Pokhara team.",
      primaryAction: "See More →",
      secondaryAction: "Contact Us",
    },
  },
  ja: {
    hero: {
      eyebrow: "学生ストーリー",
      title: "日本でのリアルな成功、リアルな学生たち",
      description:
        "AKARUI POKHARA ! Education Consultancy は、ポカラの学生に対して個別カウンセリング、ビザ支援、語学準備、渡航後サポートを提供します。",
      primaryAction: "無料カウンセリング",
      secondaryAction: "ギャラリーを見る",
      trustLine: "信頼できるサポート - ビザ支援 - 海外進学",
      ribbon: ["東京", "京都", "福岡", "名古屋", "札幌", "仙台", "横浜", "大阪"],
    },
    stats: [
      { value: "98%", label: "ビザ成功率" },
      // { value: "1K+", label: "進学実績" },
      { value: "8", label: "主要都市" },
      { value: "100+", label: "提携大学" },
      { value: "∞", label: "渡航後支援" },
    ],
    why: {
      eyebrow: "AKARUI! の強み",
      title: "送り出すだけでなく、しっかり準備します。",
      description:
        "日本向けのカウンセリング、実践的な準備、そして渡航後まで続くサポートで、学生が安心して出発できるよう支えます。",
      items: [
        { title: "個別カウンセリング", description: "目標や状況に合わせた専門的なアドバイスを提供します。" },
        { title: "ビザ取得後のお支払い", description: "前払い不要。ビザが承認されてからのお支払いです。" },
        { title: "渡航後サポート", description: "住居案内、空港送迎、現地コミュニティの紹介まで支援します。" },
      ],
    },
    services: {
      eyebrow: "サービス",
      title: "必要なことを一か所で。",
      description:
        "最初の相談から大学到着まで、AKARUI! がすべてをサポートします。",
      items: [
        { title: "キャリア相談", description: "進学先・国・大学の選定を一緒に行います。" },
        { title: "大学出願", description: "書類確認、志望理由書、出願まで丁寧に対応します。" },
        { title: "ビザ申請", description: "98% の承認実績を目指した専門サポート。" },
        { title: "試験対策", description: "JLPT、NAT-TEST、EJU、JFT-Basic の対策講座。" },
        { title: "奨学金サポート", description: "学費負担を減らすための奨学金支援。" },
        { title: "住居サポート", description: "渡航前の寮・アパート探しまで対応します。" },
      ],
    },
    steps: {
      eyebrow: "進学の流れ",
      title: "海外進学までの4つのステップ",
      description: "学生と保護者の皆さまが次の一歩を常に把握できるようにしています。",
      items: [
        { step: "01", title: "無料相談", description: "希望、予算、渡航先をカウンセラーと相談します。" },
        { step: "02", title: "プロフィール評価", description: "学業、語学、資金状況を確認します。" },
        { step: "03", title: "出願・合格", description: "大学に出願し、オファーレター取得を支援します。" },
        { step: "04", title: "ビザ・出発", description: "ビザ申請から出発準備までサポートします。" },
      ],
    },
    testimonials: {
      eyebrow: "学生の声",
      title: "日本での本当の成功体験。",
      description: "私たちは、学生が自信を持って海外へ進むことを成功と考えます。",
    },
    gallery: {
      eyebrow: "学生ギャラリー",
      title: "夢と成功のストーリー。",
      description: "一歩からすべてが始まります。学生たちの歩みをご覧ください。",
      cta: "ギャラリーをもっと見る",
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "AKARUI! であなたの旅を始めましょう。",
      description: "ご来店、電話、またはフォームからご連絡ください。",
    },
    cta: {
      eyebrow: "AKARUI POKHARA ! をスタート",
      title: "海外進学プランを一緒に作りませんか？",
      description: "ポカラのカウンセリングチームに無料相談をお申し込みください。",
      primaryAction: "相談予約",
      secondaryAction: "留学先を見る",
    },
  },
  ne: {
    hero: {
      eyebrow: "विद्यार्थी कथाहरू",
      title: "जापानमा उच्च शिक्षा र सुनौलो भविष्यको खोजीमा हुनुहुन्छ?",
      description:
        "अकारुई पोखरा एजुकेशन कन्सेल्टेन्सी सँग जोडिनुहोस् र आफ्नो सपनालाई साकार पार्नुहोस्। व्यक्तिगत परामर्श, भिसा सहयोग, भाषा तयारी, र विदेश पुगेपछि पनि अविरल समर्थन।",
      primaryAction: "निःशुल्क परामर्श",
      secondaryAction: "ग्यालेरी हेर्नुहोस्",
      trustLine: "विश्वसनीय मार्गदर्शन - भिसा सहयोग - ग्लोबल एड्मिसन",
      ribbon: ["टोकियो", "क्योटो", "फुकुओका", "नागोया", "साप्पोरो", "सेन्दाइ", "योकोहामा", "ओसाका"],
    },
    stats: [
      { value: "98%", label: "भिसा सफलता दर" },
      // { value: "1K+", label: "विद्यार्थी पठाइएका" },
      { value: "8", label: "मुख्य सहरहरू" },
      { value: "100+", label: "साझेदार विश्वविद्यालय" },
      { value: "∞", label: "पोस्ट-भिसा सहयोग" },
    ],
    why: {
      eyebrow: "हामीलाई नै किन रोज्ने?",
      title: "शतप्रतिशत पारदर्शिता र अनुभवी टोली।",
      description:
        "प्रोसेसिङको सुरुदेखि भिसा नलागुन्जेलसम्म कुनै पनि कुरा नलुकाइने। जापानको शिक्षा प्रणाली र संस्कृति राम्रोसँग बुझेका काउन्सिलरहरूद्वारा उच्च सफलता दर।",
      items: [
        { title: "शतप्रतिशत पारदर्शिता", description: "प्रोसेसिङको सुरुदेखि भिसा नलागुन्जेलसम्म कुनै पनि कुरा नलुकाइने।" },
        { title: "अनुभवी टोली", description: "जापानको शिक्षा प्रणाली र संस्कृति राम्रोसँग बुझेका काउन्सिलरहरूद्वारा परामर्श।" },
        { title: "उच्च सफलता दर", description: "उत्कृष्ट शैक्षिक वातावरण, उचित सेवा शुल्क र उच्च भिसा सफलता दर।" },
      ],
    },
    services: {
      eyebrow: "हाम्रा सेवाहरू",
      title: "सबै कुरा एउटै ठाउँमा।",
      description:
        "जापानी भाषा कक्षा, कागजात र भिसा प्रक्रिया, शैक्षिक परामर्श, र जापान पुगेपछिको सेवा सम्म पहिलो परामर्शदेखि विश्वविद्यालयमा पुग्दासम्म।",
      items: [
        { title: "जापानी भाषा कक्षा", description: "NAT, JLPT, र TOP-J परीक्षा विशेष तयारी कक्षाहरू अनुभवी शिक्षकहरूद्वारा।" },
        { title: "कागजात र भिसा प्रक्रिया", description: "त्रुटिरहित कागजात तयारी र भरपर्दो भिसा प्रोसेसिङ सेवा।" },
        { title: "शैक्षिक परामर्श", description: "तपाईंको शैक्षिक पृष्ठभूमि अनुसार जापानका उत्कृष्ट कलेज र विश्वविद्यालय छनोट।" },
        { title: "जापान पुगेपछिको सेवा", description: "एयरपोर्ट पिकअप, बस्ने व्यवस्था, र पार्ट-टाइम काम खोजमा मार्गदर्शन।" },
      ],
    },
    steps: {
      eyebrow: "कसरी काम गर्छ",
      title: "विदेशी शिक्षातर्फ 4 सरल चरण",
      description: "विद्यार्थी र अभिभावकले सधैं अर्को कदम बुझ्न सकून् भनेर हामी सबै कुरा स्पष्ट राख्छौं।",
      items: [
        { step: "01", title: "निःशुल्क परामर्श", description: "आफ्ना लक्ष्य, बजेट, र गन्तव्यबारे काउन्सिलरसँग छलफल।" },
        { step: "02", title: "प्रोफाइल मूल्यांकन", description: "शैक्षिक र भाषा नतिजा, अनि वित्तीय कागजात जाँच।" },
        { step: "03", title: "आवेदन र अफर", description: "हामी आवेदन पठाउँछौं र अफर लेटर दिलाउन सहयोग गर्छौं।" },
        { step: "04", title: "भिसा र प्रस्थान", description: "भिसा आवेदनदेखि प्रस्थान तयारीसम्म सहयोग।" },
      ],
    },
    testimonials: {
      eyebrow: "विद्यार्थीका कथा",
      title: "जापानमा वास्तविक सफलता।",
      description: "विद्यार्थीले विदेशमा आत्मविश्वासका साथ पुग्नु नै हाम्रो सफलता हो।",
    },
    gallery: {
      eyebrow: "विद्यार्थी ग्यालेरी",
      title: "सपना र सफलताको कथा।",
      description: "एउटा सानो कदमबाट यात्रा सुरु हुन्छ। विद्यार्थीको यात्रा हेर्नुहोस्।",
      cta: "थप ग्यालेरी हेर्नुहोस्",
    },
    contact: {
      eyebrow: "सम्पर्क",
      title: "अकारुई पोखरा सँग जोडिनुहोस्।",
      description: "जापान अध्ययन सम्बन्धी सम्पूर्ण जिज्ञासा समाधानका लागि आजै हाम्रो कार्यालयमा आउनुहोस् वा सिधै फोन गरेर आफ्नो काउन्सिलिङ समय सुरक्षित गर्नुहोस्।",
    },
    cta: {
      eyebrow: "AKARUI POKHARA ! बाट सुरु",
      title: "आफ्नो अन्तर्राष्ट्रिय शिक्षा योजना बनाउन तयार हुनुहुन्छ?",
      description: "पोखराको काउन्सिलिङ टिमसँग आजै निःशुल्क भेटघाट बुक गर्नुहोस्।",
      primaryAction: "परामर्श बुक गर्नुहोस्",
      secondaryAction: "गन्तव्य हेर्नुहोस्",
    },
  },
};
