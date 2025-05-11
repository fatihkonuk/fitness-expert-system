export default [
  {
    name: "Başlangıç Vücut Geliştirme Programı",
    slug: "baslangic_vucut_gelistirme",
    description: "Yeni başlayanlar için temel vücut geliştirme programı",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "bench_press", // Bench Press Slug
            sets: 4,
            reps: 10,
            rest: 90,
            notes: "Ağırlığı kontrollü kaldır",
          },
          {
            exerciseSlug: "dumbbell_curl", // Dumbbell Curl ID
            sets: 3,
            reps: 12,
            rest: 60,
          },
        ],
      },
      {
        day: "Çarşamba",
        exercises: [
          {
            exerciseSlug: "squat", // Squat ID
            sets: 4,
            reps: 8,
            rest: 120,
            notes: "Dizlerin ayak parmaklarını geçmesin",
          },
        ],
      },
    ],
  },
  {
    name: "Kardiyo Ağırlıklı Fitness",
    slug: "kardiyo_agirlikli_fitness",
    description: "Kardiyovasküler sağlık için haftalık program",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "running", // Running ID
            duration: 30,
            notes: "Orta tempo koşu",
          },
        ],
      },
      {
        day: "Perşembe",
        exercises: [
          {
            exerciseSlug: "cycling", // Cycling ID
            duration: 45,
            notes: "Interval antrenman",
          },
        ],
      },
    ],
  },
  {
    name: "Tam Vücut Fonksiyonel Antrenman",
    slug: "tam_vucut_fonksiyonel_antrenman",
    description: "Tüm vücut kaslarını çalıştıran fonksiyonel hareketler",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "kettlebell", // Kettlebell Swing ID
            sets: 3,
            reps: 15,
            rest: 60,
          },
          {
            exerciseSlug: "deadlift", // Deadlift ID
            sets: 4,
            reps: 6,
            rest: 120,
          },
        ],
      },
      {
        day: "Cuma",
        exercises: [
          {
            exerciseSlug: "plank", // Plank ID
            duration: 60,
            notes: "3 set 60 saniye",
          },
        ],
      },
    ],
  },
  {
    name: "Üst Vücut Geliştirme",
    slug: "ust_vucut_gelistirme",
    description: "Göğüs, sırt ve kol kaslarını hedefleyen program",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "bench_press", // Bench Press ID
            sets: 5,
            reps: 5,
            rest: 180,
          },
          {
            exerciseSlug: "lat_pulldown", // Lat Pulldown ID
            sets: 4,
            reps: 8,
            rest: 90,
          },
        ],
      },
      {
        day: "Cuma",
        exercises: [
          {
            exerciseSlug: "dumbbell_curl", // Dumbbell Curl ID
            sets: 3,
            reps: 12,
            rest: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Esneklik ve Denge Programı",
    slug: "esneklik_ve_denge",
    description: "Yoga ve denge hareketleri içeren program",
    weeklySchedule: [
      {
        day: "Pazar",
        exercises: [
          {
            exerciseSlug: "yoga_downward_dog", // Yoga Downward Dog ID
            duration: 15,
            notes: "5 derin nefes tut",
          },
          {
            exerciseSlug: "single_leg_balance", // Single_leg Balance ID
            duration: 10,
          },
        ],
      },
    ],
  },
  {
    name: "HIIT Antrenman Programı",
    slug: "hiit_antrenman",
    description: "Yüksek yoğunluklu interval antrenman",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "jump_rope", // Jump Rope ID
            duration: 20,
            notes: "30 saniye yüksek tempo, 30 saniye dinlenme",
          },
        ],
      },
      {
        day: "Perşembe",
        exercises: [
          {
            exerciseSlug: "running", // Running ID
            duration: 25,
            notes: "Sprint interval",
          },
        ],
      },
    ],
  },
  {
    name: "Bacak Geliştirme Programı",
    slug: "bacak_gelistirme",
    description: "Alt vücut kaslarını hedefleyen program",
    weeklySchedule: [
      {
        day: "Çarşamba",
        exercises: [
          {
            exerciseSlug: "squat", // Squat ID
            sets: 5,
            reps: 5,
            rest: 180,
          },
          {
            exerciseSlug: "leg_press", // Leg Press ID
            sets: 4,
            reps: 10,
            rest: 90,
          },
        ],
      },
    ],
  },
  {
    name: "Core Antrenmanı",
    slug: "core_antrenmani",
    description: "Karın ve bel kaslarını güçlendiren program",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "plank", // Plank ID
            duration: 120,
            notes: "3 set 120 saniye",
          },
          {
            exerciseSlug: "side_plank", // Side Plank ID
            duration: 60,
          },
        ],
      },
      {
        day: "Cuma",
        exercises: [
          {
            exerciseSlug: "turkish_getup", // Turkish Get_up ID
            sets: 3,
            reps: 5,
            rest: 90,
          },
        ],
      },
    ],
  },
  {
    name: "Fonksiyonel Kuvvet",
    slug: "fonksiyonel_kuvvet",
    description: "Günlük hareketler için fonksiyonel kuvvet antrenmanı",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "deadlift", // Deadlift ID
            sets: 4,
            reps: 6,
            rest: 150,
          },
        ],
      },
      {
        day: "Perşembe",
        exercises: [
          {
            exerciseSlug: "turkish_getup", // Turkish Get_up ID
            sets: 3,
            reps: 5,
            rest: 90,
          },
        ],
      },
    ],
  },
  {
    name: "Sabah Yoga Rutini",
    slug: "sabah_yoga_rutini",
    description: "Güne enerjik başlamak için kısa yoga programı",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "yoga_downward_dog", // Yoga Downward Dog ID
            duration: 5,
          },
        ],
      },
      {
        day: "Çarşamba",
        exercises: [
          {
            exerciseSlug: "cobra_stretch", // Cobra Stretch ID
            duration: 5,
          },
        ],
      },
      {
        day: "Cuma",
        exercises: [
          {
            exerciseSlug: "yoga_downward_dog", // Yoga Downward Dog ID
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Sporcu Performans Programı",
    slug: "sporcu_performans",
    description: "Atletik performansı artırmaya yönelik antrenman",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "squat", // Squat ID
            sets: 5,
            reps: 3,
            rest: 180,
          },
          {
            exerciseSlug: "running", // Running ID
            duration: 20,
            notes: "Sprint çalışması",
          },
        ],
      },
      {
        day: "Cumartesi",
        exercises: [
          {
            exerciseSlug: "jump_rope", // Jump Rope ID
            duration: 15,
          },
        ],
      },
    ],
  },
  {
    name: "Yaşlılar İçin Denge Programı",
    slug: "yaslilar_icin_denge",
    description: "Denge ve esnekliği geliştirmeye yönelik",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "single_leg_balance", // Single_leg Balance ID
            duration: 5,
          },
        ],
      },
      {
        day: "Perşembe",
        exercises: [
          {
            exerciseSlug: "single_leg_balance", // Single_leg Balance ID
            duration: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Göğüs ve Omuz Geliştirme",
    slug: "gogus_ve_omuz_gelistirme",
    description: "Üst vücut ağırlıklı antrenman",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "bench_press", // Bench Press ID
            sets: 4,
            reps: 8,
            rest: 120,
          },
          {
            exerciseSlug: "shoulder_press", // Shoulder Press ID
            sets: 3,
            reps: 10,
            rest: 90,
          },
        ],
      },
    ],
  },
  {
    name: "Hamstring Esnekliği",
    slug: "hamstring_esnekligi",
    description: "Hamstring kaslarını esnetmeye yönelik program",
    weeklySchedule: [
      {
        day: "Cuma",
        exercises: [
          {
            exerciseSlug: "hamstring_stretch", // Hamstring Stretch ID
            duration: 10,
          },
        ],
      },
    ],
  },
  {
    name: "Kettlebell Antrenmanı",
    slug: "kettlebell_antrenmani",
    description: "Tüm vücut kettlebell hareketleri",
    weeklySchedule: [
      {
        day: "Çarşamba",
        exercises: [
          {
            exerciseSlug: "kettlebell", // Kettlebell Swing ID
            sets: 3,
            reps: 20,
            rest: 60,
          },
          {
            exerciseSlug: "turkish_getup", // Turkish Get_up ID
            sets: 3,
            reps: 5,
            rest: 90,
          },
        ],
      },
    ],
  },
  {
    name: "Haftalık Tam Vücut",
    slug: "haftalik_tam_vucut",
    description: "Tüm kas gruplarını çalıştıran denge programı",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "bench_press", // Bench Press ID
            sets: 3,
            reps: 10,
            rest: 90,
          },
          {
            exerciseSlug: "squat", // Squat ID
            sets: 3,
            reps: 10,
            rest: 120,
          },
        ],
      },
      {
        day: "Perşembe",
        exercises: [
          {
            exerciseSlug: "lat_pulldown", // Lat Pulldown ID
            sets: 3,
            reps: 12,
            rest: 90,
          },
          {
            exerciseSlug: "plank", // Plank ID
            duration: 60,
          },
        ],
      },
    ],
  },
  {
    name: "Kol Geliştirme Programı",
    slug: "kol_gelistirme",
    description: "Biceps ve triceps odaklı antrenman",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "dumbbell_curl", // Dumbbell Curl ID
            sets: 4,
            reps: 12,
            rest: 60,
          },
          {
            exerciseSlug: "chest_fly", // Chest Fly ID
            sets: 3,
            reps: 12,
            rest: 75,
          },
        ],
      },
    ],
  },
  {
    name: "Postür Düzeltici",
    slug: "postur_duzeltici",
    description: "Duruş bozuklukları için egzersiz programı",
    weeklySchedule: [
      {
        day: "Pazartesi",
        exercises: [
          {
            exerciseSlug: "yoga_downward_dog", // Yoga Downward Dog ID
            duration: 10,
          },
        ],
      },
      {
        day: "Çarşamba",
        exercises: [
          {
            exerciseSlug: "cobra_stretch", // Cobra Stretch ID
            duration: 10,
          },
        ],
      },
    ],
  },
  {
    name: "Hafta Sonu Aktif Dinlenme",
    slug: "hafta_sonu_aktif_dinlenme",
    description: "Yoğun hafta sonrası hafif aktivite",
    weeklySchedule: [
      {
        day: "Cumartesi",
        exercises: [
          {
            exerciseSlug: "running", // Running ID
            duration: 30,
            notes: "Hafif tempo",
          },
        ],
      },
    ],
  },
  {
    name: "Evde Vücut Ağırlığı Antrenmanı",
    slug: "evde_vucut_agirligi_antrenmani",
    description: "Ekipman gerektirmeyen ev antrenmanı",
    weeklySchedule: [
      {
        day: "Salı",
        exercises: [
          {
            exerciseSlug: "plank", // Plank ID
            duration: 60,
          },
        ],
      },
      {
        day: "Perşembe",
        exercises: [
          {
            exerciseSlug: "side_plank", // Side Plank ID
            duration: 30,
          },
        ],
      },
    ],
  },
  {
    name: "Spor Öncesi Isınma",
    slug: "spor_oncesi_isinma",
    description: "Antrenman öncesi ısınma rutini",
    weeklySchedule: [
      {
        day: "Pazar",
        exercises: [
          {
            exerciseSlug: "hamstring_stretch", // Hamstring Stretch ID
            duration: 5,
          },
          {
            exerciseSlug: "single_leg_balance", // Single_leg Balance ID
            duration: 5,
          },
        ],
      },
    ],
  },
];
