export default [
  {
    name: "Kilo Kaybı için Dengeli Beslenme",
    slug: "weight_loss_balanced",
    description: "Kilo kaybı hedefi için dengeli bir beslenme planı.",
    calories: 1800,
    macros: {
      protein: 120,
      carbs: 180,
      fat: 60,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        name: "Proteinli Kahvaltı",
        items: [
          "2 yumurta (haşlanmış veya omlet)",
          "1 dilim tam buğday ekmeği",
          "1 avuç ıspanak",
          "1 bardak yeşil çay",
        ],
        notes: "Zeytinyağı kullanılabilir",
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 avuç badem", "1 küçük yeşil elma"],
        notes: "Öğle yemeğinden 2 saat önce",
      },
      {
        timeOfDay: "Öğle Yemeği",
        name: "Sebzeli Tavuk",
        items: [
          "150g ızgara tavuk göğüs",
          "1 kase karışık yeşil salata",
          "2 yemek kaşığı bulgur pilavı",
        ],
      },
      {
        timeOfDay: "Akşam Yemeği",
        name: "Balık ve Sebzeler",
        items: [
          "150g ızgara somon",
          "Buğdaylanmış brokoli ve havuç",
          "1 kase yoğurt",
        ],
      },
    ],
    supplements: [
      {
        name: "Omega-3",
        usageTime: "with_meal",
        reason: "Kalp sağlığını desteklemek",
      },
    ],
  },
  {
    name: "Kas Geliştirme Yüksek Protein",
    slug: "muscle_gain_high_protein",
    description: "Kas kazanımı için yüksek proteinli bir beslenme planı.",
    calories: 2800,
    macros: {
      protein: 220,
      carbs: 250,
      fat: 80,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "4 yumurta beyazı + 1 tam yumurta",
          "1 su bardağı yulaf",
          "1 muz",
          "1 yemek kaşığı fıstık ezmesi",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: [
          "1 ölçek whey protein",
          "1 avuç ceviz",
          "1 dilim tam buğday ekmeği",
        ],
        notes: "Antrenman öncesi",
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["200g ızgara dana eti", "1 kase esmer pirinç", "Karışık sebze"],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["Süzme peynir", "1 avuç yaban mersini"],
        notes: "Antrenman sonrası",
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: [
          "200g ızgara tavuk göğüs",
          "1 orta boy tatlı patates",
          "Zeytinyağlı yeşil salata",
        ],
      },
    ],
    supplements: [
      {
        name: "Whey Protein",
        usageTime: "post_workout",
        reason: "Kas onarımını hızlandırmak",
      },
      {
        name: "Creatine",
        usageTime: "post_workout",
        reason: "Güç artışı ve kas hacmi",
      },
    ],
  },
  {
    name: "Vegan Kilo Kontrolü",
    slug: "vegan_weight_control",
    description: "Vegan beslenme ile kilo kontrolü sağlamak için dengeli bir plan.",
    calories: 2000,
    macros: {
      protein: 70,
      carbs: 250,
      fat: 65,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "1 kase vegan yulaf",
          "1 yemek kaşığı chia tohumu",
          "1 avuç böğürtlen",
          "Badem sütü",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 avuç karışık çiğ kuruyemiş", "1 küçük armut"],
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: [
          "Mercimek köftesi",
          "Bol yeşillikli salata",
          "1 dilim tam buğday ekmeği",
        ],
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: ["Tofu sebze sote", "Kinoa pilavı", "Avokado dilimleri"],
      },
    ],
    supplements: [
      {
        name: "B12 Vitamini",
        usageTime: "morning",
        reason: "Vegan beslenmede eksik olabilir",
      },
    ],
  },
  {
    name: "Düşük Karbonhidrat Diyeti",
    slug: "low_carb_diet",
    description: "Düşük karbonhidrat alımı ile kilo kaybı hedefi.",
    calories: 1600,
    macros: {
      protein: 130,
      carbs: 50,
      fat: 100,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: ["Pastırmalı yumurta", "1 avokado", "1 dilim tam yağlı peynir"],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 avuç macadamia fındığı", "2 dilim salam"],
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["Izgara somon", "Zeytinyağlı roka salatası", "1 kase yoğurt"],
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: ["Biftek", "Mantar sote", "Haşlanmış brokoli"],
      },
    ],
    supplements: [
      {
        name: "Elektrolit Takviyesi",
        usageTime: "morning",
        reason: "Düşük karbonhidrat diyetinde elektrolit dengesi",
      },
    ],
  },
  {
    name: "Ketojenik Beslenme Planı",
    slug: "keto_diet",
    description: "Ketojenik diyet ile kilo kaybı ve enerji artışı.",
    goal: "weight_loss",
    dietType: "keto",
    calories: 1900,
    macros: {
      protein: 110,
      carbs: 25,
      fat: 150,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "Pastırmalı ve peynirli omlet",
          "1 yemek kaşığı hindistancevizi yağı",
          "1 fincan şekersiz kahve",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["Pecan cevizleri", "1 dilim tam yağlı peynir"],
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["Tavuk but (derili)", "Zeytinyağlı ıspanak", "1 avokado"],
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: ["Kuzu pirzola", "Tereyağlı kuşkonmaz", "Rokfor soslu salata"],
      },
    ],
    supplements: [
      {
        name: "MCT Yağı",
        usageTime: "morning",
        reason: "Enerji ve ketozis desteği",
      },
    ],
  },
  {
    name: "Sporcu Beslenme Programı",
    slug: "athlete_nutrition",
    description: "Yüksek enerji ve protein içeren sporcu beslenme planı.",
    calories: 3200,
    macros: {
      protein: 250,
      carbs: 300,
      fat: 90,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "6 yumurta beyazı + 2 tam yumurta",
          "1 su bardağı yulaf",
          "1 yemek kaşığı bal",
          "1 su bardağı süt",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 ölçek whey protein", "1 muz", "2 dilim tam buğday ekmeği"],
        notes: "Antrenman öncesi",
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: [
          "250g ızgara biftek",
          "2 kase esmer pirinç",
          "Karışık sebze sote",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 kase süzme peynir", "1 avuç böğürtlen"],
        notes: "Antrenman sonrası",
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: ["250g ızgara somon", "1 büyük tatlı patates", "Yeşil salata"],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 ölçek kazein protein", "1 yemek kaşığı fıstık ezmesi"],
        notes: "Yatmadan önce",
      },
    ],
    supplements: [
      {
        name: "Whey Protein",
        usageTime: "post_workout",
        reason: "Hızlı protein alımı",
      },
      {
        name: "BCAA",
        usageTime: "pre_workout",
        reason: "Antrenmanda kas yıkımını önleme",
      },
      {
        name: "Kazein Protein",
        usageTime: "night",
        reason: "Gece boyu yavaş protein salınımı",
      },
    ],
  },
  {
    name: "Akdeniz Diyeti",
    slug: "mediterranean_diet",
    description: "Akdeniz mutfağına dayalı sağlıklı bir beslenme planı.",
    calories: 2200,
    macros: {
      protein: 100,
      carbs: 250,
      fat: 90,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "Zeytin ve peynir çeşitleri",
          "Domates, salatalık",
          "1-2 dilim tam buğday ekmeği",
          "1 fincan şekersiz çay",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 avuç çiğ badem", "1 incir"],
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["Izgara levrek", "Zeytinyağlı enginar", "1 kase yoğurt"],
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: ["Kırmızı etli sebze yemeği", "Bulgar pilavı", "Yeşil salata"],
      },
    ],
    supplements: [
      {
        name: "Zeytinyağı",
        usageTime: "with_meal",
        reason: "Sağlıklı yağ alımı",
      },
    ],
  },
  {
    name: "Vejetaryen Kas Geliştirme",
    slug: "vegetarian_muscle_gain",
    description: "Vejetaryen beslenme ile kas kazanımı hedefi.",
    calories: 2600,
    macros: {
      protein: 140,
      carbs: 300,
      fat: 80,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "1 kase vegan proteinli yulaf",
          "1 yemek kaşığı keten tohumu",
          "1 muz",
          "Badem sütü",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: [
          "1 ölçek vegan protein",
          "1 avuç ceviz",
          "1 dilim tam buğday ekmeği",
        ],
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["Nohut yemeği", "Kinoa salatası", "Avokado dilimleri"],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["Humus", "Çiğ sebzeler"],
        notes: "Antrenman öncesi",
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: ["Tofu sebze sote", "Esmer pirinç", "Zeytinyağlı salata"],
      },
    ],
    supplements: [
      {
        name: "Vegan Protein",
        usageTime: "post_workout",
        reason: "Bitkisel protein alımı",
      },
      {
        name: "Creatine",
        usageTime: "post_workout",
        reason: "Kas performansı",
      },
    ],
  },
  {
    name: "Hızlı Metabolizma Diyeti",
    slug: "fast_metabolism_diet",
    description: "Hızlı metabolizma için dengeli bir beslenme planı.",
    calories: 1700,
    macros: {
      protein: 120,
      carbs: 160,
      fat: 60,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "1 dilim tam buğday ekmeği",
          "2 yumurta",
          "1 avuç roka",
          "1 fincan yeşil çay",
        ],
        notes: "Kahvaltıyı uyandıktan 30 dakika içinde yapın",
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 elma", "10 adet çiğ badem"],
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["150g ızgara tavuk", "Karışık yeşil salata", "1 kase çorba"],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 kase yoğurt", "1 yemek kaşığı yulaf kepeği"],
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: [
          "200g ızgara balık",
          "Haşlanmış sebzeler",
          "1 dilim tam buğday ekmeği",
        ],
      },
    ],
    supplements: [
      {
        name: "Yeşil Çay Ekstresi",
        usageTime: "morning",
        reason: "Metabolizma hızlandırıcı",
      },
    ],
  },
  {
    name: "Yüksek Enerjili Atlet Diyeti",
    slug: "high_energy_athlete_diet",
    description: "Yüksek enerji ihtiyacı olan atletler için beslenme planı.",
    calories: 3500,
    macros: {
      protein: 200,
      carbs: 400,
      fat: 100,
    },
    meals: [
      {
        timeOfDay: "Kahvaltı",
        items: [
          "4 yumurta (omlet veya haşlanmış)",
          "2 dilim tam buğday ekmeği",
          "1 avokado",
          "1 su bardağı taze sıkılmış portakal suyu",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: [
          "1 ölçek whey protein",
          "1 muz",
          "2 yemek kaşığı fıstık ezmesi",
        ],
        notes: "Antrenman öncesi",
      },
      {
        timeOfDay: "Öğle Yemeği",
        items: ["250g ızgara biftek", "2 kase makarna", "Zeytinyağlı salata"],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 kase süzme peynir", "1 avuç yaban mersini"],
        notes: "Antrenman sonrası",
      },
      {
        timeOfDay: "Akşam Yemeği",
        items: [
          "250g ızgara somon",
          "1 büyük tatlı patates",
          "Haşlanmış brokoli",
        ],
      },
      {
        timeOfDay: "Ara Öğün",
        items: ["1 kase yoğurt", "1 yemek kaşığı bal", "1 avuç ceviz"],
        notes: "Yatmadan önce",
      },
    ],
    supplements: [
      {
        name: "Whey Protein",
        usageTime: "post_workout",
        reason: "Kas onarımı",
      },
      {
        name: "Creatine",
        usageTime: "with_meal",
        reason: "Güç ve performans",
      },
      {
        name: "Multivitamin",
        usageTime: "morning",
        reason: "Genel sağlık desteği",
      },
    ],
  },
];
