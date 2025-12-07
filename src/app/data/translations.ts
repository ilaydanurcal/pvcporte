import { Language } from '../models/language.model';

export const translations: Record<Language, any> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      whyUs: "Hakkımızda",
      products: "Ürünler",
      delivery: "Teslimat",
      process: "Süreç",
      references: "Referanslar",
      faq: "SSS",
      quote: "Teklif Iste",
    },
    hero: {
      title: "OBSAN SUARL",
      subtitle: "Türkiye'den Afrika'ya Kapı İhracatı",
      cta: "Teklif Al",
      description: "Çelik, PVC, Lake ve Melamin kapı üretimi ve ihracatı. Afrika'ya toptan kapı tedariki için profesyonel çözümler.",
      whatsappCta: "WhatsApp ile İletişim",
      whatsappLink: "https://wa.me/905321307143",
      stats: [
        { value: "5+", label: "Yıl Deneyim" },
        { value: "10+", label: "Ülkeye İhracat" },
        { value: "100+", label: "Tamamlanan Proje" }
      ]
    },
    home: {
      africaExport: {
        title: "Afrika'ya Kapı İhracatı",
        description: "OBSAN SUARL olarak, Türkiye'de ürettiğimiz yüksek kaliteli kapıları Afrika ülkelerine ve yurt dışına ihraç ediyoruz. Müteahhitler, inşaat firmaları ve toptancılar için çözümler sunuyoruz.",
        features: [
          "Afrika'ya özel lojistik çözümleri",
          "Toptan kapı tedariki için rekabetçi fiyatlar",
          "Hızlı üretim ve teslimat",
          "Proje bazlı özel çözümler"
        ],
        cta: "Ürünlerimizi İnceleyin",
        statsTitle: "Rakamlarla OBSAN SUARL",
        stats: [
          { value: "5+", label: "Yıl Deneyim" },
          { value: "10+", label: "Ülkeye İhracat" },
          { value: "100+", label: "Tamamlanan Proje" }
        ]
      },
      productsPreview: {
        title: "Ürünlerimiz",
        subtitle: "Geniş Ürün Yelpazesi ile Her Projeye Uygun Çözüm",
        learnMore: "Daha Fazla Bilgi",
        viewAll: "Tüm Ürünleri Görüntüle",
        items: [
          { name: "Lake Kapılar", description: "Modern tasarım ve parlak görünüm" },
          { name: "PVC Kapılar", description: "Dayanıklı ve ekonomik çözümler" },
          { name: "Melamin Kapılar", description: "Ahşap dokulu, çizilmeye dayanıklı" },
          { name: "Panel Kapılar", description: "Klasik ve modern çizgiler" }
        ]
      }
    },
    whyUs: {
      title: "Neden Biz?",
      subtitle: "Kalite ve Güvenilirliğin Sembolü",
      items: [
        { 
          title: "Yüksek Kalite", 
          description: "CE sertifikalı üretim. Her kapı, en yüksek kalite standartlarında üretilir ve titizlikle test edilir. Afrika'ya kapı ihracatında güvenilir kalite garantisi sunuyoruz." 
        },
        { 
          title: "Hızlı Teslimat", 
          description: "Zamanında ve güvenli teslim garantisi. Standart üretim için 3-6 hafta, özel projeler için 6-8 hafta teslimat süresi. Afrika'ya özel lojistik ağımız ile kapılarınız güvenle hedef noktaya ulaşır." 
        },
        { 
          title: "Profesyonel Ekip", 
          description: "Uzman danışmanlarımız her zaman hazır. Teknik destek, proje yönetimi ve özel çözümler için deneyimli ekibimiz 7/24 hizmetinizdedir. Afrika kapı ihracatında uzmanlaşmış kadromuz ile yanınızdayız." 
        },
        { 
          title: "Uygun Fiyatlar", 
          description: "En rekabetçi piyasa fiyatları. Toptan kapı tedariki için özel fiyatlandırma. Büyük projeler için ek indirimler. Türkiye'den kapı satışı için en uygun fiyat garantisi sunuyoruz." 
        },
      ],
    },
    about: {
      title: "Hakkımızda",
      subtitle: "OBSAN SUARL - Afrika Kapı İhracatında Güvenilir Partner",
      story: {
        title: "Hikayemiz",
        paragraphs: [
          "OBSAN SUARL olarak, Türkiye'de kapı üretimi ve ihracatı yapıyoruz. Özellikle Afrika pazarına odaklanarak, yüksek kaliteli çelik, PVC, lake, melamin ve panel kapıları müşterilerimize sunuyoruz. İstanbul'daki modern üretim tesislerimizde, son teknoloji makineler ve deneyimli ustalarımızla her gün yüzlerce kapı üretiyoruz.",
          "Müteahhitler, inşaat firmaları ve toptancılar için çözümler üretiyoruz. Rezidans, otel, ofis ve ticari projeler için kapı tedariki sağlıyoruz. Afrika'nın farklı ülkelerindeki büyük inşaat projelerinde yer alıyor, toplu konut projelerinden lüks otellere kadar geniş bir yelpazede hizmet veriyoruz.",
          "Afrika'ya kapı ihracatında uzmanlaşmış ekibimiz, her projenin gereksinimlerine göre özel çözümler sunmaktadır. Güvenilir lojistik ağımız ve kaliteli üretim altyapımızla, müşterilerimize en iyi hizmeti vermeyi hedefliyoruz. Gümrük işlemlerinden paketlemeye, nakliyeden teslimata kadar tüm süreçleri profesyonelce yönetiyoruz.",
          "Kalite kontrol laboratuvarlarımızda her kapı, dayanıklılık, güvenlik ve estetik açısından test edilir. ISO 9001 kalite yönetim sistemi ve CE sertifikasyonu ile uluslararası standartlara uygun üretim yapıyoruz. Müşteri memnuniyeti bizim için en önemli önceliktir."
        ]
      },
      values: {
        title: "Değerlerimiz",
        items: [
          { title: "Kalite", description: "ISO 9001 ve CE sertifikalı üretim" },
          { title: "Güvenilirlik", description: "Zamanında teslimat ve söz verdiğimiz kalite" },
          { title: "Müşteri Odaklılık", description: "Her projeye özel çözümler" },
          { title: "İnovasyon", description: "Sürekli gelişen üretim teknolojileri" }
        ]
      },
      whyChoose: {
        title: "Neden OBSAN SUARL?",
        items: [
          { 
            title: "Kaliteli Üretim", 
            description: "Afrika kapı ihracatında uzun yılların tecrübesi. 50'den fazla ülkeye başarılı ihracat geçmişi. Binlerce projede güvenilir partner olarak yer aldık." 
          },
          { 
            title: "Geniş Ürün Yelpazesi", 
            description: "Lake, PVC, Melamin, Panel kapılar ve daha fazlası. 45 farklı PVC kapı modeli ile her projeye uygun çözüm. Özel ölçü ve tasarım seçenekleri." 
          },
          { 
            title: "Rekabetçi Fiyatlar", 
            description: "Toptan kapı tedariki için en iyi fiyatlar. Büyük siparişlerde özel indirimler. Şeffaf fiyatlandırma politikası ile güvenilir teklifler." 
          },
          { 
            title: "Hızlı Üretim", 
            description: "3-6 hafta içinde teslimat. Modern üretim hatlarımız ile yüksek kapasiteli üretim. Acil siparişler için hızlandırılmış üretim seçenekleri." 
          },
          { 
            title: "Güvenli Lojistik", 
            description: "Afrika'ya özel lojistik çözümleri. Deneyimli nakliye partnerlerimiz ile güvenli taşıma. Sigortalı kargo ve takip sistemi." 
          },
          { 
            title: "Proje Desteği", 
            description: "Teknik danışmanlık ve proje yönetimi. Özel projeler için tasarım desteği. Montaj rehberliği ve teknik dokümantasyon." 
          }
        ]
      },
      cta: {
        title: "Projeniz İçin Teklif Alın",
        description: "Afrika'ya kapı ihracatı için profesyonel ekibimizle iletişime geçin",
        button: "İletişime Geçin"
      }
    },
    products: {
      title: "Ürünlerimiz",
      subtitle: "Geniş Ürün Yelpazesi",
      learnMore: "Daha Fazla Bilgi",
      items: [
        { name: "Çelik Kapılar", description: "Dayanıklı ve güvenli" },
        { name: "Alüminyum Kapılar", description: "Modern ve şık" },
        { name: "Cam Kapılar", description: "Zarif ve profesyonel" },
        { name: "Sistem Bileşenleri", description: "Tüm parçalar stokta" },
      ],
      detail: {
        keyFeatures: "Temel Özellikler",
        applications: "Uygulama Alanları",
        qualityFeatures: [
          { title: "Sertifikalı Kalite", description: "ISO 9001 & CE sertifikalı üretim" },
          { title: "Kaliteli Üretim", description: "Profesyonel uzmanlık" },
          { title: "Hızlı Teslimat", description: "2-4 hafta teslimat süresi" },
          { title: "Tam Garanti", description: "2 yıl kapsamlı garanti" },
        ],
        products: [
          {
            features: [
              "Yüksek güvenlikli çelik yapı",
              "120 dakikaya kadar yangına dayanıklı",
              "Özel ölçüler mevcut",
              "Çoklu kilit sistemleri",
              "CE sertifikalı",
            ],
            applications: ["Endüstriyel tesisler", "Depolar", "Ticari binalar", "Güvenlik alanları"],
          },
          {
            features: [
              "Hafif ve dayanıklı",
              "Korozyona dayanıklı",
              "Isı yalıtımı",
              "Modern estetik",
              "Düşük bakım",
            ],
            applications: ["Ofis binaları", "Alışveriş merkezleri", "Oteller", "Konut kompleksleri"],
          },
          {
            features: [
              "Temperli güvenlik camı",
              "Enerji verimli",
              "Ses yalıtımı",
              "UV koruması",
              "Premium bitiş",
            ],
            applications: ["Kurumsal ofisler", "Perakende mağazalar", "Restoranlar", "Sağlık tesisleri"],
          },
          {
            features: [
              "Tam sistem entegrasyonu",
              "Yüksek kaliteli malzemeler",
              "Tüm kapı tipleriyle uyumlu",
              "Kolay kurulum",
              "Genişletilmiş garanti",
            ],
            applications: ["Kapı çerçeveleri", "Menteşe ve kilitler", "Otomasyon sistemleri", "Erişim kontrolü"],
          },
        ],
        cta: {
          title: "Özel Çözümler mi Gerekiyor?",
          description: "Uzman ekibimiz, özel gereksinimlerinize göre ürünleri tasarlayıp üretebilir",
          button: "Ekibimizle İletişime Geçin",
        },
      },
      categories: {
        title: "PVC Kapılar",
        subtitle: "Yüksek Kaliteli PVC Kapı Modelleri",
        description: "Dayanıklı, temizliği kolay ve ekonomik PVC kapılar; daire içi oda kapıları, toplu konut ve projelerde yaygın olarak kullanılır. Afrika'ya kapı ihracatı için geniş model yelpazesi.",
        footerNote:
          "Tüm PVC kapı modellerimiz, projelerinize göre farklı ölçü, renk ve aksesuar seçenekleriyle üretilebilmektedir. Detaylı katalog ve fiyat teklifi için bizimle iletişime geçebilirsiniz.",
        modelsTitle: "Kapı Modelleri",
        models: [
          { code: "OS001", name: "OS001", nameEn: "OS001", nameFr: "OS001", nameAr: "OS001", description: "Modern ve şık tasarıma sahip PVC kapı modeli. Daire içi oda kapıları için ideal çözüm. Yüksek kaliteli PVC malzeme kullanımı ile uzun ömürlü ve dayanıklı yapı sunar. Suya, neme ve çizilmelere karşı dayanıklı özel kaplama teknolojisi ile üretilmiştir. Kolay temizlenebilir yüzeyi sayesinde bakım gerektirmez. Standart ölçülerde üretilebildiği gibi, projenize özel ölçülerde de üretilebilir. CE sertifikalı ve ISO 9001 kalite standartlarına uygun üretilmiştir.", descriptionEn: "PVC door model with modern and elegant design. Ideal solution for interior room doors. Offers long-lasting and durable structure with high-quality PVC material usage. Manufactured with special coating technology resistant to water, moisture and scratches. Requires no maintenance thanks to its easy-to-clean surface. Can be produced in standard sizes as well as custom sizes for your project. CE certified and manufactured in accordance with ISO 9001 quality standards.", descriptionFr: "Modèle de porte PVC au design moderne et élégant. Solution idéale pour les portes intérieures. Offre une structure durable et résistante avec l'utilisation de matériaux PVC de haute qualité. Fabriqué avec une technologie de revêtement spéciale résistante à l'eau, à l'humidité et aux rayures. Ne nécessite aucun entretien grâce à sa surface facile à nettoyer. Peut être produit en tailles standard ainsi qu'en tailles personnalisées pour votre projet. Certifié CE et fabriqué conformément aux normes de qualité ISO 9001.", descriptionAr: "موديل باب PVC بتصميم حديث وأنيق. حل مثالي للأبواب الداخلية. يوفر هيكلاً متيناً وطويل الأمد باستخدام مواد PVC عالية الجودة. مصنوع بتقنية طلاء خاصة مقاومة للماء والرطوبة والخدوش. لا يتطلب صيانة بفضل سطحه سهل التنظيف. يمكن إنتاجه بأحجام قياسية وكذلك بأحجام مخصصة لمشروعك. معتمد CE ومصنوع وفقاً لمعايير الجودة ISO 9001.", features: ["Yüksek kalite", "Dayanıklı", "Kolay montaj", "Modern tasarım", "CE Sertifikalı", "Özel ölçü"] },
          { code: "OS002", name: "OS002", nameEn: "OS002", nameFr: "OS002", nameAr: "OS002", description: "Otel ve ofis projeleri için özel tasarlanmış PVC kapı modeli. Gelişmiş ses yalıtımı özelliği ile konforlu kullanım sağlar. Premium kalite standartlarında üretilmiştir. Özel dolgu malzemesi sayesinde 35 dB'ye kadar ses yalıtımı sağlar. Otel odaları, ofis bölmeleri ve toplantı salonları için idealdir. Yangına dayanıklı özellikleri ile güvenlik standartlarına uygundur. Profesyonel montaj ekibi ile hızlı kurulum imkanı sunar. Tüm renk seçenekleri mevcuttur.", descriptionEn: "PVC door model specially designed for hotel and office projects. Provides comfortable use with advanced sound insulation feature. Manufactured to premium quality standards. Provides sound insulation up to 35 dB thanks to special filling material. Ideal for hotel rooms, office partitions and meeting rooms. Suitable for safety standards with fire-resistant features. Offers fast installation with professional installation team. All color options available.", descriptionFr: "Modèle de porte PVC spécialement conçu pour les projets hôteliers et de bureaux. Offre un confort d'utilisation avec la fonction d'isolation phonique avancée. Fabriqué selon des normes de qualité premium. Offre une isolation phonique jusqu'à 35 dB grâce au matériau de remplissage spécial. Idéal pour les chambres d'hôtel, les cloisons de bureau et les salles de réunion. Adapté aux normes de sécurité avec caractéristiques résistantes au feu. Offre une installation rapide avec équipe d'installation professionnelle. Toutes les options de couleur disponibles.", descriptionAr: "موديل باب PVC مصمم خصيصاً لمشاريع الفنادق والمكاتب. يوفر استخداماً مريحاً مع ميزة العزل الصوتي المتقدمة. مصنوع بمعايير الجودة المميزة. يوفر عزل صوتي يصل إلى 35 ديسيبل بفضل مادة الحشو الخاصة. مثالي لغرف الفنادق وأقسام المكاتب وقاعات الاجتماعات. مناسب لمعايير السلامة مع ميزات مقاومة للحريق. يوفر تركيباً سريعاً مع فريق تركيب محترف. جميع خيارات الألوان متاحة.", features: ["Modern tasarım", "Şık görünüm", "Ses yalıtımı", "Premium kalite", "Yangına dayanıklı", "35 dB izolasyon"] },
          { code: "OS003", name: "OS003", nameEn: "OS003", nameFr: "OS003", nameAr: "OS003", description: "Ekonomik ve dayanıklı PVC kapı modeli. Toplu konut projeleri için ideal çözüm. Hızlı üretim süresi ve geniş kullanım alanı sunar. Büyük projeler için özel fiyatlandırma imkanı. Standart ölçülerde stoktan teslim seçeneği mevcuttur. Toplu konut, sosyal konut ve öğrenci yurtları için uygun çözüm. Minimum 50 adet siparişlerde ek indirim avantajı. Hızlı üretim hattı sayesinde 2-3 hafta içinde teslim edilebilir. Tüm standart renklerde üretim yapılabilir.", descriptionEn: "Economical and durable PVC door model. Ideal solution for mass housing projects. Offers fast production time and wide range of applications. Special pricing opportunity for large projects. Standard size stock delivery option available. Suitable solution for mass housing, social housing and student dormitories. Additional discount advantage on minimum 50 unit orders. Can be delivered within 2-3 weeks thanks to fast production line. Can be produced in all standard colors.", descriptionFr: "Modèle de porte PVC économique et durable. Solution idéale pour les projets de logements collectifs. Offre un temps de production rapide et une large gamme d'applications. Possibilité de tarification spéciale pour les grands projets. Option de livraison en stock en tailles standard disponible. Solution adaptée pour logements collectifs, logements sociaux et résidences étudiantes. Avantage de remise supplémentaire sur commandes minimum de 50 unités. Peut être livré dans 2-3 semaines grâce à la ligne de production rapide. Peut être produit dans toutes les couleurs standard.", descriptionAr: "موديل باب PVC اقتصادي ومتين. حل مثالي لمشاريع الإسكان الجماعي. يوفر وقت إنتاج سريع ونطاقاً واسعاً من التطبيقات. إمكانية تسعير خاص للمشاريع الكبيرة. خيار التسليم من المخزون بأحجام قياسية متاح. حل مناسب للإسكان الجماعي والإسكان الاجتماعي ومساكن الطلاب. ميزة خصم إضافي على طلبات بحد أدنى 50 وحدة. يمكن تسليمه خلال 2-3 أسابيع بفضل خط الإنتاج السريع. يمكن إنتاجه بجميع الألوان القياسية.", features: ["Ekonomik", "Dayanıklı", "Hızlı üretim", "Geniş kullanım", "Toplu sipariş indirimi", "Stoktan teslim"] },
          { code: "OS004", name: "OS004", nameEn: "OS004", nameFr: "OS004", nameAr: "OS004", description: "Premium kaliteli PVC kapı. Rezidans ve üst segment projeler için özel tasarım. Gelişmiş ısı ve ses yalıtımı özellikleri ile uzun ömürlü kullanım garantisi. Özel lüks kaplama ve dekoratif detaylar ile estetik görünüm. Yüksek kaliteli PVC profiller ve çoklu cam sistemi ile enerji verimliliği sağlar. Özel ölçü ve renk seçenekleri ile projenize tam uyum. 10 yıl garanti kapsamında üretilmiştir. Profesyonel montaj ve teknik destek hizmeti dahildir.", descriptionEn: "Premium quality PVC door. Special design for residential and high-end projects. Long-lasting use guarantee with advanced heat and sound insulation features. Aesthetic appearance with special luxury coating and decorative details. Provides energy efficiency with high-quality PVC profiles and multi-glass system. Full compatibility with your project with custom size and color options. Manufactured with 10-year warranty coverage. Professional installation and technical support service included.", descriptionFr: "Porte PVC de qualité premium. Design spécial pour projets résidentiels et haut de gamme. Garantie d'utilisation durable avec caractéristiques d'isolation thermique et phonique avancées. Apparence esthétique avec revêtement de luxe spécial et détails décoratifs. Offre efficacité énergétique avec profils PVC de haute qualité et système multi-vitres. Compatibilité totale avec votre projet avec options de taille et couleur personnalisées. Fabriquée avec couverture de garantie de 10 ans. Service d'installation professionnelle et support technique inclus.", descriptionAr: "باب PVC بجودة مميزة. تصميم خاص للمشاريع السكنية والراقية. ضمان استخدام طويل الأمد مع ميزات عزل حراري وصوتي متقدمة. مظهر جمالي مع طلاء فاخر خاص وتفاصيل زخرفية. يوفر كفاءة الطاقة مع مقاطع PVC عالية الجودة ونظام زجاج متعدد. توافق كامل مع مشروعك مع خيارات حجم ولون مخصصة. مصنوع مع تغطية ضمان لمدة 10 سنوات. خدمة التركيب الاحترافية والدعم الفني مشمولة.", features: ["Premium kalite", "Lüks görünüm", "Gelişmiş yalıtım", "Uzun ömür", "10 yıl garanti", "Enerji verimli"] },
          { code: "OS005", name: "OS005", nameEn: "OS005", nameFr: "OS005", nameAr: "OS005", description: "Klasik tasarımlı PVC kapı. Geleneksel ve modern projeler için uygundur. Çok yönlü kullanım imkanı ve uygun fiyat avantajı sunar. Klasik çizgilerle modern teknolojinin birleşimi. Ahşap görünümlü özel kaplama seçeneği mevcuttur. Tüm standart ölçülerde üretilebilir. Bütçe dostu fiyatlandırma ile geniş kullanım alanı. Kolay montaj özelliği sayesinde hızlı kurulum. Bakım gerektirmez, uzun yıllar kullanılabilir.", descriptionEn: "Classic design PVC door. Suitable for traditional and modern projects. Offers versatile usage and affordable price advantage. Combination of classic lines with modern technology. Wood-look special coating option available. Can be produced in all standard sizes. Wide range of applications with budget-friendly pricing. Fast installation thanks to easy installation feature. Requires no maintenance, can be used for many years.", descriptionFr: "Porte PVC au design classique. Adapté aux projets traditionnels et modernes. Offre une utilisation polyvalente et un avantage de prix abordable. Combinaison de lignes classiques avec technologie moderne. Option de revêtement spécial aspect bois disponible. Peut être produite dans toutes les tailles standard. Large gamme d'applications avec tarification adaptée au budget. Installation rapide grâce à la fonction d'installation facile. Ne nécessite aucun entretien, peut être utilisée pendant de nombreuses années.", descriptionAr: "باب PVC بتصميم كلاسيكي. مناسب للمشاريع التقليدية والحديثة. يوفر استخداماً متعدد الجوانب وميزة سعر معقولة. مزيج من الخطوط الكلاسيكية مع التكنولوجيا الحديثة. خيار طلاء خاص بمظهر خشبي متاح. يمكن إنتاجه بجميع الأحجام القياسية. نطاق واسع من التطبيقات مع تسعير مناسب للميزانية. تركيب سريع بفضل ميزة التركيب السهل. لا يتطلب صيانة، يمكن استخدامه لسنوات عديدة.", features: ["Klasik tasarım", "Çok yönlü", "Dayanıklı", "Uygun fiyat", "Ahşap görünüm", "Bakım gerektirmez"] },
          { code: "OS006", name: "OS006", nameEn: "OS006", nameFr: "OS006", nameAr: "OS006", description: "Dekoratif özellikli PVC kapı. Özel projeler için özelleştirilebilir tasarım. Estetik görünüm ve özel tasarım seçenekleri ile dikkat çeker.", descriptionEn: "Decorative PVC door. Customizable design for special projects. Draws attention with aesthetic appearance and special design options.", descriptionFr: "Porte PVC décorative. Design personnalisable pour projets spéciaux. Attire l'attention avec apparence esthétique et options de design spéciales.", descriptionAr: "باب PVC زخرفي. تصميم قابل للتخصيص للمشاريع الخاصة. يجذب الانتباه بمظهر جمالي وخيارات تصميم خاصة.", features: ["Dekoratif", "Özel tasarım", "Özelleştirilebilir", "Estetik"] },
          { code: "OS007", name: "OS007", nameEn: "OS007", nameFr: "OS007", nameAr: "OS007", description: "Yüksek dayanıklılık sunan PVC kapı. Ağır kullanıma uygun güçlü yapı. Uzun ömürlü ve sağlam malzeme kullanımı ile güvenilir çözüm.", descriptionEn: "High durability PVC door. Strong structure suitable for heavy-duty use. Reliable solution with long-lasting and robust material usage.", descriptionFr: "Porte PVC à haute durabilité. Structure solide adaptée à un usage intensif. Solution fiable avec utilisation de matériaux durables et robustes.", descriptionAr: "باب PVC عالي المتانة. هيكل قوي مناسب للاستخدام المكثف. حل موثوق باستخدام مواد متينة وقوية.", features: ["Yüksek dayanıklılık", "Ağır kullanım", "Güçlü yapı", "Uzun ömür"] },
          { code: "OS008", name: "OS008", nameEn: "OS008", nameFr: "OS008", nameAr: "OS008", description: "Modern ve şık PVC kapı modeli. Çağdaş projeler için ideal seçim. Premium kalite standartlarında üretilmiş, estetik görünüm sunar.", descriptionEn: "Modern and elegant PVC door model. Ideal choice for contemporary projects. Manufactured to premium quality standards, offers aesthetic appearance.", descriptionFr: "Modèle de porte PVC moderne et élégant. Choix idéal pour projets contemporains. Fabriqué selon des normes de qualité premium, offre une apparence esthétique.", descriptionAr: "موديل باب PVC حديث وأنيق. اختيار مثالي للمشاريع المعاصرة. مصنوع بمعايير الجودة المميزة، يوفر مظهراً جمالياً.", features: ["Modern", "Şık", "Çağdaş", "Premium"] },
          { code: "OS009", name: "OS009", nameEn: "OS009", nameFr: "OS009", nameAr: "OS009", description: "Ekonomik çözüm sunan PVC kapı. Bütçe dostu projeler için pratik seçenek. Kaliteli üretim ve geniş kullanım alanı avantajları.", descriptionEn: "Economical PVC door solution. Practical option for budget-friendly projects. Quality production and wide range of application advantages.", descriptionFr: "Solution de porte PVC économique. Option pratique pour projets à petit budget. Production de qualité et avantages de large gamme d'applications.", descriptionAr: "حل باب PVC اقتصادي. خيار عملي للمشاريع المقتصدة. إنتاج عالي الجودة ومزايا نطاق واسع من التطبيقات.", features: ["Ekonomik", "Bütçe dostu", "Kaliteli", "Pratik"] },
          { code: "OS010", name: "OS010", nameEn: "OS010", nameFr: "OS010", nameAr: "OS010", description: "Premium standartlarda PVC kapı. Lüks projeler için özel tasarım. Yüksek kalite malzeme ve özel üretim süreçleri ile üretilmiştir.", descriptionEn: "Premium standard PVC door. Special design for luxury projects. Manufactured with high-quality materials and special production processes.", descriptionFr: "Porte PVC aux standards premium. Design spécial pour projets de luxe. Fabriquée avec matériaux de haute qualité et processus de production spéciaux.", descriptionAr: "باب PVC بمعايير مميزة. تصميم خاص للمشاريع الفاخرة. مصنوع بمواد عالية الجودة وعمليات إنتاج خاصة.", features: ["Premium", "Lüks", "Özel tasarım", "Yüksek kalite"] },
          { code: "OS011", name: "OS011", nameEn: "OS011", nameFr: "OS011", nameAr: "OS011", description: "Klasik çizgilerle modern dokunuş. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı sunar.", descriptionEn: "Classic lines with modern touch. Versatile design that adapts to every project. Offers compatible and flexible usage.", descriptionFr: "Lignes classiques avec touche moderne. Design polyvalent qui s'adapte à chaque projet. Offre une utilisation compatible et flexible.", descriptionAr: "خطوط كلاسيكية بلمسة عصرية. تصميم متعدد الجوانب يتكيف مع كل مشروع. يوفر استخداماً متوافقاً ومرناً.", features: ["Klasik", "Modern", "Çok yönlü", "Uyumlu"] },
          { code: "OS012", name: "OS012", nameEn: "OS012", nameFr: "OS012", nameAr: "OS012", description: "Dekoratif detaylara sahip PVC kapı. Estetik görünüm ve şık tasarım. Detaylı işçilik ve özenli üretim ile öne çıkar.", descriptionEn: "PVC door with decorative details. Aesthetic appearance and elegant design. Stands out with detailed craftsmanship and careful production.", descriptionFr: "Porte PVC avec détails décoratifs. Apparence esthétique et design élégant. Se démarque par artisanat détaillé et production soignée.", descriptionAr: "باب PVC بتفاصيل زخرفية. مظهر جمالي وتصميم أنيق. يتميز بحرفية مفصلة وإنتاج دقيق.", features: ["Dekoratif", "Estetik", "Detaylı", "Şık"] },
          { code: "OS013", name: "OS013", nameEn: "OS013", nameFr: "OS013", nameAr: "OS013", description: "Yüksek performanslı PVC kapı. Zorlu koşullara dayanıklı yapı. Güvenilir ve sağlam malzeme kullanımı ile uzun ömür garantisi.", descriptionEn: "High-performance PVC door. Durable structure resistant to harsh conditions. Long life guarantee with reliable and robust material usage.", descriptionFr: "Porte PVC haute performance. Structure durable résistante aux conditions difficiles. Garantie de longue durée avec utilisation de matériaux fiables et robustes.", descriptionAr: "باب PVC عالي الأداء. هيكل متين مقاوم للظروف القاسية. ضمان عمر طويل باستخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güvenilir", "Sağlam"] },
          { code: "OS014", name: "OS014", nameEn: "OS014", nameFr: "OS014", nameAr: "OS014", description: "Minimalist tasarımlı PVC kapı. Sade ve şık görünüm. Modern mimari projeler için ideal seçim, estetik değer yüksek.", descriptionEn: "Minimalist design PVC door. Simple and elegant appearance. Ideal choice for modern architectural projects, high aesthetic value.", descriptionFr: "Porte PVC au design minimaliste. Apparence simple et élégante. Choix idéal pour projets architecturaux modernes, haute valeur esthétique.", descriptionAr: "باب PVC بتصميم بسيط. مظهر بسيط وأنيق. اختيار مثالي للمشاريع المعمارية الحديثة، قيمة جمالية عالية.", features: ["Minimalist", "Sade", "Şık", "Modern"] },
          { code: "OS015", name: "OS015", nameEn: "OS015", nameFr: "OS015", nameAr: "OS015", description: "Ekonomik ve kaliteli PVC kapı. Geniş kullanım alanı ve pratik çözüm. Toplu konut ve ticari projeler için uygun seçenek.", descriptionEn: "Economical and quality PVC door. Wide range of applications and practical solution. Suitable option for mass housing and commercial projects.", descriptionFr: "Porte PVC économique et de qualité. Large gamme d'applications et solution pratique. Option adaptée pour projets de logements collectifs et commerciaux.", descriptionAr: "باب PVC اقتصادي وعالي الجودة. نطاق واسع من التطبيقات وحل عملي. خيار مناسب لمشاريع الإسكان الجماعي والتجارية.", features: ["Ekonomik", "Kaliteli", "Geniş kullanım", "Pratik"] },
          { code: "OS016", name: "OS016", nameEn: "OS016", nameFr: "OS016", nameAr: "OS016", description: "Premium kalite standartlarında PVC kapı. Üst segment projeler için özel üretim. Lüks görünüm ve yüksek kalite garantisi.", descriptionEn: "Premium quality standard PVC door. Special production for high-end segment projects. Luxury appearance and high quality guarantee.", descriptionFr: "Porte PVC aux normes de qualité premium. Production spéciale pour projets de segment haut de gamme. Apparence de luxe et garantie de haute qualité.", descriptionAr: "باب PVC بمعايير الجودة المميزة. إنتاج خاص لمشاريع القطاع الراقي. مظهر فاخر وضمان جودة عالية.", features: ["Premium", "Yüksek kalite", "Lüks", "Özel"] },
          { code: "OS017", name: "OS017", nameEn: "OS017", nameFr: "OS017", nameAr: "OS017", description: "Klasik ve modern karışımı PVC kapı. Her tarza uyumlu tasarım. Çok yönlü kullanım imkanı ve esnek proje uyumluluğu.", descriptionEn: "Classic and modern blend PVC door. Design compatible with every style. Versatile usage and flexible project compatibility.", descriptionFr: "Porte PVC mélange classique et moderne. Design compatible avec tous les styles. Utilisation polyvalente et compatibilité de projet flexible.", descriptionAr: "باب PVC مزيج كلاسيكي وحديث. تصميم متوافق مع كل نمط. استخدام متعدد الجوانب وتوافق مشروع مرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS018", name: "OS018", nameEn: "OS018", nameFr: "OS018", nameAr: "OS018", description: "Dekoratif özellikleri öne çıkan PVC kapı. Özel projeler için estetik çözüm. Öne çıkan tasarım ve değerli görünüm.", descriptionEn: "PVC door with prominent decorative features. Aesthetic solution for special projects. Outstanding design and valuable appearance.", descriptionFr: "Porte PVC aux caractéristiques décoratives proéminentes. Solution esthétique pour projets spéciaux. Design remarquable et apparence précieuse.", descriptionAr: "باب PVC بميزات زخرفية بارزة. حل جمالي للمشاريع الخاصة. تصميم بارز ومظهر قيم.", features: ["Dekoratif", "Özel", "Estetik", "Öne çıkan"] },
          { code: "OS019", name: "OS019", nameEn: "OS019", nameFr: "OS019", nameAr: "OS019", description: "Yüksek dayanıklılık ve performans. Endüstriyel kullanım için uygun güçlü yapı. Dayanıklı malzeme ve güvenilir üretim.", descriptionEn: "High durability and performance. Strong structure suitable for industrial use. Durable material and reliable production.", descriptionFr: "Haute durabilité et performance. Structure solide adaptée à un usage industriel. Matériau durable et production fiable.", descriptionAr: "متانة وأداء عاليان. هيكل قوي مناسب للاستخدام الصناعي. مادة متينة وإنتاج موثوق.", features: ["Dayanıklı", "Yüksek performans", "Endüstriyel", "Güçlü"] },
          { code: "OS020", name: "OS020", nameEn: "OS020", nameFr: "OS020", nameAr: "OS020", description: "Modern mimariye uygun PVC kapı. Çağdaş tasarım ve mimari uyum. Tasarım odaklı projeler için ideal seçim.", descriptionEn: "PVC door suitable for modern architecture. Contemporary design and architectural harmony. Ideal choice for design-focused projects.", descriptionFr: "Porte PVC adaptée à l'architecture moderne. Design contemporain et harmonie architecturale. Choix idéal pour projets axés sur le design.", descriptionAr: "باب PVC مناسب للهندسة المعمارية الحديثة. تصميم معاصر وتناغم معماري. اختيار مثالي للمشاريع المرتكزة على التصميم.", features: ["Modern", "Çağdaş", "Mimari", "Tasarım"] },
          { code: "OS021", name: "OS021", nameEn: "OS021", nameFr: "OS021", nameAr: "OS021", description: "Ekonomik çözüm, kaliteli üretim. Bütçe dostu projeler için ideal seçenek. Geniş kullanım alanı ve pratik avantajlar.", descriptionEn: "Economical solution, quality production. Ideal option for budget-friendly projects. Wide range of applications and practical advantages.", descriptionFr: "Solution économique, production de qualité. Option idéale pour projets à petit budget. Large gamme d'applications et avantages pratiques.", descriptionAr: "حل اقتصادي، إنتاج عالي الجودة. خيار مثالي للمشاريع المقتصدة. نطاق واسع من التطبيقات ومزايا عملية.", features: ["Ekonomik", "Kaliteli", "Bütçe dostu", "İdeal"] },
          { code: "OS022", name: "OS022", nameEn: "OS022", nameFr: "OS022", nameAr: "OS022", description: "Premium standartlarda üretilmiş PVC kapı. Lüks projeler için özel üretim. Yüksek standart ve özel işçilik ile üretilmiştir.", descriptionEn: "PVC door manufactured to premium standards. Special production for luxury projects. Manufactured with high standards and special craftsmanship.", descriptionFr: "Porte PVC fabriquée selon des normes premium. Production spéciale pour projets de luxe. Fabriquée avec normes élevées et artisanat spécial.", descriptionAr: "باب PVC مصنوع بمعايير مميزة. إنتاج خاص للمشاريع الفاخرة. مصنوع بمعايير عالية وحرفية خاصة.", features: ["Premium", "Lüks", "Yüksek standart", "Özel"] },
          { code: "OS023", name: "OS023", nameEn: "OS023", nameFr: "OS023", nameAr: "OS023", description: "Klasik dokunuşlu modern PVC kapı. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı.", descriptionEn: "Modern PVC door with classic touch. Versatile design that adapts to every project. Compatible and flexible usage.", descriptionFr: "Porte PVC moderne avec touche classique. Design polyvalent qui s'adapte à chaque projet. Utilisation compatible et flexible.", descriptionAr: "باب PVC حديث بلمسة كلاسيكية. تصميم متعدد الجوانب يتكيف مع كل مشروع. استخدام متوافق ومرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS024", name: "OS024", nameEn: "OS024", nameFr: "OS024", nameAr: "OS024", description: "Dekoratif detaylarıyla öne çıkan PVC kapı. Estetik değer yüksek tasarım. Öne çıkan görünüm ve değerli işçilik.", descriptionEn: "PVC door standing out with decorative details. High aesthetic value design. Outstanding appearance and valuable craftsmanship.", descriptionFr: "Porte PVC se démarquant par détails décoratifs. Design à haute valeur esthétique. Apparence remarquable et artisanat précieux.", descriptionAr: "باب PVC يتميز بتفاصيله الزخرفية. تصميم بقيمة جمالية عالية. مظهر بارز وحرفية قيّمة.", features: ["Dekoratif", "Estetik", "Öne çıkan", "Değerli"] },
          { code: "OS025", name: "OS025", nameEn: "OS025", nameFr: "OS025", nameAr: "OS025", description: "Yüksek performans ve dayanıklılık. Zorlu koşullara uygun güçlü yapı. Güvenilir ve sağlam malzeme kullanımı.", descriptionEn: "High performance and durability. Strong structure suitable for harsh conditions. Reliable and robust material usage.", descriptionFr: "Haute performance et durabilité. Structure solide adaptée aux conditions difficiles. Utilisation de matériaux fiables et robustes.", descriptionAr: "أداء ومتانة عاليان. هيكل قوي مناسب للظروف القاسية. استخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güçlü", "Güvenilir"] },
          { code: "OS026", name: "OS026", nameEn: "OS026", nameFr: "OS026", nameAr: "OS026", description: "Minimalist ve şık tasarım. Sade görünüm, yüksek kalite standartları. Modern projeler için ideal seçim.", descriptionEn: "Minimalist and elegant design. Simple appearance, high quality standards. Ideal choice for modern projects.", descriptionFr: "Design minimaliste et élégant. Apparence simple, normes de qualité élevées. Choix idéal pour projets modernes.", descriptionAr: "تصميم بسيط وأنيق. مظهر بسيط، معايير جودة عالية. اختيار مثالي للمشاريع الحديثة.", features: ["Minimalist", "Şık", "Sade", "Kaliteli"] }
        ]
      },
    },
    delivery: {
      title: "Teslimat Hizmetleri",
      subtitle: "Bölge Çapında Güvenilir Teslimat",
      description: "Tüm Avrupa ve Ortadoğu bölgelerine hızlı teslimat",
    },
    process: {
      title: "Sipariş ve Üretim Süreci",
      subtitle: "Afrika'ya Kapı İhracatı İçin Profesyonel Çözümler",
      steps: [
        { 
          number: "1", 
          title: "İhtiyaç Analizi", 
          description: "Projenizin gereksinimlerini detaylı olarak analiz ediyoruz. Kapı türü, adet, ölçüler ve teslimat lokasyonu gibi tüm bilgileri topluyoruz. Afrika'ya kapı ihracatı için özel lojistik çözümlerimizi değerlendiriyoruz. Teknik ekibimiz projenizin özelliklerine göre en uygun kapı modellerini önerir. Özel ölçü gereksinimlerinizi belirler ve tasarım önerileri sunarız." 
        },
        { 
          number: "2", 
          title: "Teklif Hazırlama", 
          description: "Türkiye'den kapı satışı için size özel, detaylı fiyat teklifi hazırlıyoruz. Toptan kapı tedariki için rekabetçi fiyatlar sunuyoruz. Teklifimizde üretim süresi, ödeme koşulları ve lojistik detayları yer alır. Şeffaf fiyatlandırma ile tüm maliyetleri önceden belirtiyoruz. Büyük siparişler için özel indirimler ve ödeme planları sunuyoruz." 
        },
        { 
          number: "3", 
          title: "Üretim", 
          description: "Sipariş onayından sonra, çelik kapı, PVC kapı, lake kapı veya melamin kapı üretimine başlıyoruz. Kalite kontrol süreçlerimizle her aşamada standartları koruyoruz. Afrika kapı ihracatı için uygun paketleme yapıyoruz. Modern üretim hatlarımızda ISO 9001 standartlarına uygun üretim gerçekleştiriyoruz. Her kapı kalite kontrol testlerinden geçer ve sertifikalandırılır." 
        },
        { 
          number: "4", 
          title: "Lojistik & Teslimat", 
          description: "Üretim tamamlandıktan sonra, güvenli lojistik ağımızla kapılarınızı Afrika'ya veya hedef ülkeye teslim ediyoruz. Tüm gümrük işlemleri ve dokümantasyonu takip ediyoruz. Sigortalı kargo ile güvenli taşıma sağlıyoruz. Teslimat sürecini online takip sistemi ile izleyebilirsiniz. Hedef ülkeye ulaştığında detaylı teslimat raporu sunuyoruz." 
        },
      ],
      cta: {
        title: "Projeniz İçin Teklif Alın",
        description: "Afrika'ya kapı ihracatı için profesyonel ekibimizle iletişime geçin. Türkiye'den toptan kapı tedariki için size özel çözümler sunuyoruz.",
        button: "İletişime Geçin"
      }
    },
    references: {
      title: "Referanslarımız",
      subtitle: "Başarıyla Tamamlanan Projeler",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Afrika Kapı İhracatı Hakkında Merak Ettikleriniz",
      items: [
        { 
          question: "Minimum sipariş miktarı nedir?", 
          answer: "Afrika'ya kapı ihracatı için minimum sipariş miktarı kapı türüne göre değişmektedir. Genellikle toptan kapı tedariki için 50 adet ve üzeri siparişler kabul edilmektedir. Daha küçük miktarlar için lütfen bizimle iletişime geçin." 
        },
        { 
          question: "Teslim süresi ne kadar?", 
          answer: "Standart üretim için teslim süresi 3-6 hafta arasındadır. Özel ölçü ve tasarımlar için bu süre 6-8 haftaya çıkabilir. Acil siparişler için hızlı üretim seçeneklerimiz mevcuttur. Afrika'ya lojistik süresi ek olarak 1-2 hafta sürmektedir." 
        },
        { 
          question: "Ödeme yöntemleri nelerdir?", 
          answer: "Türkiye'den kapı satışı için T/T (telegraphic transfer), L/C (letter of credit) ve akreditif gibi güvenli ödeme yöntemleri kabul ediyoruz. Ödeme koşulları sipariş büyüklüğüne göre değişmektedir. Detaylı bilgi için teklif formunu doldurun." 
        },
        { 
          question: "Numune gönderebilir misiniz?", 
          answer: "Evet, ciddi alıcılar için numune gönderebiliriz. Numune maliyeti ve kargo ücreti alıcıya aittir. Numune siparişi sonrasında büyük sipariş verilmesi durumunda numune maliyeti ana siparişten düşülmektedir." 
        },
        { 
          question: "Hangi ülkelere teslimat yapıyorsunuz?", 
          answer: "OBSAN SUARL olarak Afrika'nın birçok ülkesine kapı ihracatı yapıyoruz. Özellikle Fransızca ve Arapça konuşulan Afrika ülkelerine yoğun olarak hizmet veriyoruz. Diğer yurt dışı pazarlara da teslimat yapmaktayız. Detaylı bilgi için iletişime geçin." 
        },
        { 
          question: "Özel ölçü ve tasarım yapılabiliyor mu?", 
          answer: "Evet, projelerinize özel ölçü ve tasarım yapabiliriz. Lake, PVC, Melamin ve Panel kapılar için özel ölçülerde üretim yapılmaktadır. Teknik ekibimiz projenizin gereksinimlerine göre en uygun çözümü sunacaktır." 
        },
      ],
      moreInfo: "Daha fazla bilgi mi gerekiyor?",
      moreInfoDesc: "Detaylı danışmanlık için uzman ekibimizle iletişime geçin",
      getInTouch: "İletişime Geçin",
    },
    footer: {
      company: "OBSAN SUARL",
      rights: "Tüm hakları saklıdır",
      contact: "İletişim",
      followUs: "Bizi Takip Edin",
      about: "Hakkımızda",
      aboutDesc: "Türkiye'den Afrika'ya kapı ihracatı. Yüksek kaliteli çelik, PVC, lake, melamin ve panel kapı üretimi.",
      quickLinks: "Hızlı Linkler",
      products: "Ürünler",
      services: "Hizmetlerimiz",
      address: "Adres",
      addressValue: "Hacı Halil Mah. İsmetpaşa Cad. Yılmaz İş Hanı, Kat:1 Daire:2, 41420 Gebze/Kocaeli, Türkiye",
      phone: "Telefon",
      email: "E-posta",
      workingHours: "Çalışma Saatleri",
      workingHoursValue: "Pazartesi - Cuma: 09:00 - 18:00",
      certificates: "Sertifikalar",
      iso: "ISO 9001",
      ce: "CE Sertifikalı",
      socialMedia: "Sosyal Medya",
    },
    quote: {
      title: "Özel Teklifinizi Alın",
      description: "Uzman ekibimizle iletişime geçerek özel gereksinimlerinizi tartışın ve projeniz için özel bir teklif alın.",
      email: "E-posta",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      whatsappDesc: "Hızlı destek mevcut",
      form: {
        fullName: "Ad Soyad *",
        email: "E-posta *",
        phone: "Telefon Numarası *",
        company: "Şirket",
        productType: "Ürün Tipi *",
        selectProduct: "Bir ürün tipi seçin",
        quantity: "Tahmini Miktar",
        quantityPlaceholder: "örn: 100 adet",
        message: "Ek Detaylar",
        messagePlaceholder: "Projeniz hakkında daha fazla bilgi verin...",
        sending: "Gönderiliyor...",
        send: "Teklif Talebi Gönder",
        chatWhatsApp: "WhatsApp'ta Sohbet Et",
        success: "Teşekkürler! Teklif talebiniz gönderildi. En kısa sürede size dönüş yapacağız.",
        whatsappMessage: "Merhaba OBSAN, ${productType} için teklif almak istiyorum. Adım ${name}.",
        whatsappMessageFallback: "Merhaba OBSAN, ürünleriniz için teklif almak istiyorum. Adım ${name}.",
        country: "Ülke",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      whyUs: "About Us",
      products: "Products",
      delivery: "Delivery",
      process: "Process",
      references: "References",
      faq: "FAQ",
      quote: "Get Quote",
    },
    hero: {
      title: "OBSAN SUARL",
      subtitle: "Door Export from Turkey to Africa",
      cta: "Get Quote",
      description: "Steel, PVC, Lacquered and Melamine door manufacturing and export. Professional solutions for wholesale door supply to Africa.",
      whatsappCta: "Contact via WhatsApp",
      whatsappLink: "https://wa.me/905321307143",
      stats: [
        { value: "5+", label: "Years Experience" },
        { value: "10+", label: "Export Countries" },
        { value: "100+", label: "Completed Projects" }
      ]
    },
    home: {
      africaExport: {
        title: "Door Export to Africa",
        description: "As OBSAN SUARL, we export high-quality doors manufactured in Turkey to African countries and abroad. We offer solutions for contractors, construction companies and wholesalers.",
        features: [
          "Specialized logistics solutions for Africa",
          "Competitive prices for wholesale door supply",
          "Fast production and delivery",
          "Project-based custom solutions"
        ],
        cta: "View Our Products",
        statsTitle: "OBSAN SUARL in Numbers",
        stats: [
          { value: "5+", label: "Years Experience" },
          { value: "10+", label: "Export Countries" },
          { value: "100+", label: "Completed Projects" }
        ]
      },
      productsPreview: {
        title: "Our Products",
        subtitle: "Wide Product Range for Every Project",
        learnMore: "Learn More",
        viewAll: "View All Products",
        items: [
          { name: "Lacquered Doors", description: "Modern design and glossy appearance" },
          { name: "PVC Doors", description: "Durable and economical solutions" },
          { name: "Melamine Doors", description: "Wood-textured, scratch-resistant" },
          { name: "Panel Doors", description: "Classic and modern lines" }
        ]
      }
    },
    whyUs: {
      title: "Why Choose Us?",
      subtitle: "Synonymous with Quality and Reliability",
      items: [
        { title: "Superior Quality", description: "Industry expertise" },
        { title: "Fast Delivery", description: "Timely and secure shipping" },
        { title: "Expert Team", description: "Professional consultants ready to help" },
        { title: "Competitive Pricing", description: "Best market prices guaranteed" },
      ],
    },
    about: {
      title: "About Us",
      subtitle: "OBSAN SUARL - Trusted Partner in Door Export to Africa",
      story: {
        title: "Our Story",
        paragraphs: [
          "As OBSAN SUARL, we manufacture and export doors in Turkey. Focusing especially on the African market, we offer high-quality steel, PVC, lacquered, melamine and panel doors to our customers.",
          "We provide solutions for contractors, construction companies and wholesalers. We supply doors for residential, hotel, office and commercial projects.",
          "Our team specialized in door export to Africa offers custom solutions according to each project's requirements. With our reliable logistics network and quality production infrastructure, we aim to provide the best service to our customers."
        ]
      },
      values: {
        title: "Our Values",
        items: [
          { title: "Quality", description: "ISO 9001 and CE certified production" },
          { title: "Reliability", description: "On-time delivery and promised quality" },
          { title: "Customer Focus", description: "Custom solutions for every project" },
          { title: "Innovation", description: "Continuously evolving production technologies" }
        ]
      },
      whyChoose: {
        title: "Why Choose OBSAN SUARL?",
        items: [
          { title: "Quality Production", description: "Experience in door export to Africa" },
          { title: "Wide Product Range", description: "Lacquered, PVC, Melamine, Panel doors and more" },
          { title: "Competitive Prices", description: "Best prices for wholesale door supply" },
          { title: "Fast Production", description: "Delivery within 3-6 weeks" },
          { title: "Secure Logistics", description: "Specialized logistics solutions for Africa" },
          { title: "Project Support", description: "Technical consulting and project management" }
        ]
      },
      cta: {
        title: "Get a Quote for Your Project",
        description: "Contact our professional team for door export to Africa",
        button: "Get in Touch"
      }
    },
    products: {
      title: "Our Products",
      subtitle: "Wide Range of Solutions",
      learnMore: "Learn More",
      items: [
        { name: "Steel Doors", description: "Durable and secure" },
        { name: "Aluminum Doors", description: "Modern and elegant" },
        { name: "Glass Doors", description: "Sophisticated and professional" },
        { name: "System Components", description: "All parts in stock" },
      ],
      detail: {
        keyFeatures: "Key Features",
        applications: "Applications",
        qualityFeatures: [
          { title: "Certified Quality", description: "ISO 9001 & CE certified production" },
          { title: "Quality Production", description: "Professional expertise" },
          { title: "Fast Turnaround", description: "2-4 weeks delivery time" },
          { title: "Full Warranty", description: "2-year comprehensive warranty" },
        ],
        products: [
          {
            features: [
              "High security steel construction",
              "Fire-resistant up to 120 minutes",
              "Custom dimensions available",
              "Multiple locking systems",
              "CE certified",
            ],
            applications: ["Industrial facilities", "Warehouses", "Commercial buildings", "Security areas"],
          },
          {
            features: [
              "Lightweight and durable",
              "Corrosion resistant",
              "Thermal insulation",
              "Modern aesthetics",
              "Low maintenance",
            ],
            applications: ["Office buildings", "Shopping centers", "Hotels", "Residential complexes"],
          },
          {
            features: ["Tempered safety glass", "Energy efficient", "Sound insulation", "UV protection", "Premium finish"],
            applications: ["Corporate offices", "Retail stores", "Restaurants", "Medical facilities"],
          },
          {
            features: [
              "Complete system integration",
              "High-quality materials",
              "Compatible with all door types",
              "Easy installation",
              "Extended warranty",
            ],
            applications: ["Door frames", "Hinges & locks", "Automation systems", "Access control"],
          },
        ],
        cta: {
          title: "Need Custom Solutions?",
          description: "Our expert team can design and manufacture products tailored to your specific requirements",
          button: "Contact Our Team",
        },
      },
      categories: {
        title: "PVC Doors",
        subtitle: "High-Quality PVC Door Models",
        description: "Durable, easy-to-clean and cost-effective PVC doors, commonly used for interior rooms, mass housing and large projects. Wide model range for door export to Africa.",
        footerNote:
          "All our PVC door models can be produced in different sizes, colors and hardware options according to your project requirements. Contact us for a detailed catalogue and price quote.",
        modelsTitle: "Door Models",
        models: [
          { code: "Karvin PVC 025", name: "Karvin PVC 025", nameEn: "Karvin PVC 025", nameFr: "Karvin PVC 025", nameAr: "Karvin PVC 025", description: "Yüksek kaliteli PVC kapı modeli. Daire içi oda kapıları için ideal çözüm.", descriptionEn: "High-quality PVC door model. Ideal solution for interior room doors.", descriptionFr: "Modèle de porte PVC de haute qualité. Solution idéale pour les portes intérieures.", descriptionAr: "موديل باب PVC عالي الجودة. حل مثالي للأبواب الداخلية.", features: ["Yüksek kalite", "Dayanıklı", "Kolay montaj", "Ekonomik"] },
          { code: "OS002", name: "OS002", nameEn: "OS002", nameFr: "OS002", nameAr: "OS002", description: "Otel ve ofis projeleri için özel tasarlanmış PVC kapı modeli. Gelişmiş ses yalıtımı özelliği ile konforlu kullanım sağlar. Premium kalite standartlarında üretilmiştir. Özel dolgu malzemesi sayesinde 35 dB'ye kadar ses yalıtımı sağlar. Otel odaları, ofis bölmeleri ve toplantı salonları için idealdir. Yangına dayanıklı özellikleri ile güvenlik standartlarına uygundur. Profesyonel montaj ekibi ile hızlı kurulum imkanı sunar. Tüm renk seçenekleri mevcuttur.", descriptionEn: "PVC door model specially designed for hotel and office projects. Provides comfortable use with advanced sound insulation feature. Manufactured to premium quality standards. Provides sound insulation up to 35 dB thanks to special filling material. Ideal for hotel rooms, office partitions and meeting rooms. Suitable for safety standards with fire-resistant features. Offers fast installation with professional installation team. All color options available.", descriptionFr: "Modèle de porte PVC spécialement conçu pour les projets hôteliers et de bureaux. Offre un confort d'utilisation avec la fonction d'isolation phonique avancée. Fabriqué selon des normes de qualité premium. Offre une isolation phonique jusqu'à 35 dB grâce au matériau de remplissage spécial. Idéal pour les chambres d'hôtel, les cloisons de bureau et les salles de réunion. Adapté aux normes de sécurité avec caractéristiques résistantes au feu. Offre une installation rapide avec équipe d'installation professionnelle. Toutes les options de couleur disponibles.", descriptionAr: "موديل باب PVC مصمم خصيصاً لمشاريع الفنادق والمكاتب. يوفر استخداماً مريحاً مع ميزة العزل الصوتي المتقدمة. مصنوع بمعايير الجودة المميزة. يوفر عزل صوتي يصل إلى 35 ديسيبل بفضل مادة الحشو الخاصة. مثالي لغرف الفنادق وأقسام المكاتب وقاعات الاجتماعات. مناسب لمعايير السلامة مع ميزات مقاومة للحريق. يوفر تركيباً سريعاً مع فريق تركيب محترف. جميع خيارات الألوان متاحة.", features: ["Modern tasarım", "Şık görünüm", "Ses yalıtımı", "Premium kalite", "Yangına dayanıklı", "35 dB izolasyon"] },
          { code: "OS003", name: "OS003", nameEn: "OS003", nameFr: "OS003", nameAr: "OS003", description: "Ekonomik ve dayanıklı PVC kapı modeli. Toplu konut projeleri için ideal çözüm. Hızlı üretim süresi ve geniş kullanım alanı sunar. Büyük projeler için özel fiyatlandırma imkanı. Standart ölçülerde stoktan teslim seçeneği mevcuttur. Toplu konut, sosyal konut ve öğrenci yurtları için uygun çözüm. Minimum 50 adet siparişlerde ek indirim avantajı. Hızlı üretim hattı sayesinde 2-3 hafta içinde teslim edilebilir. Tüm standart renklerde üretim yapılabilir.", descriptionEn: "Economical and durable PVC door model. Ideal solution for mass housing projects. Offers fast production time and wide range of applications. Special pricing opportunity for large projects. Standard size stock delivery option available. Suitable solution for mass housing, social housing and student dormitories. Additional discount advantage on minimum 50 unit orders. Can be delivered within 2-3 weeks thanks to fast production line. Can be produced in all standard colors.", descriptionFr: "Modèle de porte PVC économique et durable. Solution idéale pour les projets de logements collectifs. Offre un temps de production rapide et une large gamme d'applications. Possibilité de tarification spéciale pour les grands projets. Option de livraison en stock en tailles standard disponible. Solution adaptée pour logements collectifs, logements sociaux et résidences étudiantes. Avantage de remise supplémentaire sur commandes minimum de 50 unités. Peut être livré dans 2-3 semaines grâce à la ligne de production rapide. Peut être produit dans toutes les couleurs standard.", descriptionAr: "موديل باب PVC اقتصادي ومتين. حل مثالي لمشاريع الإسكان الجماعي. يوفر وقت إنتاج سريع ونطاقاً واسعاً من التطبيقات. إمكانية تسعير خاص للمشاريع الكبيرة. خيار التسليم من المخزون بأحجام قياسية متاح. حل مناسب للإسكان الجماعي والإسكان الاجتماعي ومساكن الطلاب. ميزة خصم إضافي على طلبات بحد أدنى 50 وحدة. يمكن تسليمه خلال 2-3 أسابيع بفضل خط الإنتاج السريع. يمكن إنتاجه بجميع الألوان القياسية.", features: ["Ekonomik", "Dayanıklı", "Hızlı üretim", "Geniş kullanım", "Toplu sipariş indirimi", "Stoktan teslim"] },
          { code: "OS004", name: "OS004", nameEn: "OS004", nameFr: "OS004", nameAr: "OS004", description: "Premium kaliteli PVC kapı. Rezidans ve üst segment projeler için özel tasarım. Gelişmiş ısı ve ses yalıtımı özellikleri ile uzun ömürlü kullanım garantisi. Özel lüks kaplama ve dekoratif detaylar ile estetik görünüm. Yüksek kaliteli PVC profiller ve çoklu cam sistemi ile enerji verimliliği sağlar. Özel ölçü ve renk seçenekleri ile projenize tam uyum. 10 yıl garanti kapsamında üretilmiştir. Profesyonel montaj ve teknik destek hizmeti dahildir.", descriptionEn: "Premium quality PVC door. Special design for residential and high-end projects. Long-lasting use guarantee with advanced heat and sound insulation features. Aesthetic appearance with special luxury coating and decorative details. Provides energy efficiency with high-quality PVC profiles and multi-glass system. Full compatibility with your project with custom size and color options. Manufactured with 10-year warranty coverage. Professional installation and technical support service included.", descriptionFr: "Porte PVC de qualité premium. Design spécial pour projets résidentiels et haut de gamme. Garantie d'utilisation durable avec caractéristiques d'isolation thermique et phonique avancées. Apparence esthétique avec revêtement de luxe spécial et détails décoratifs. Offre efficacité énergétique avec profils PVC de haute qualité et système multi-vitres. Compatibilité totale avec votre projet avec options de taille et couleur personnalisées. Fabriquée avec couverture de garantie de 10 ans. Service d'installation professionnelle et support technique inclus.", descriptionAr: "باب PVC بجودة مميزة. تصميم خاص للمشاريع السكنية والراقية. ضمان استخدام طويل الأمد مع ميزات عزل حراري وصوتي متقدمة. مظهر جمالي مع طلاء فاخر خاص وتفاصيل زخرفية. يوفر كفاءة الطاقة مع مقاطع PVC عالية الجودة ونظام زجاج متعدد. توافق كامل مع مشروعك مع خيارات حجم ولون مخصصة. مصنوع مع تغطية ضمان لمدة 10 سنوات. خدمة التركيب الاحترافية والدعم الفني مشمولة.", features: ["Premium kalite", "Lüks görünüm", "Gelişmiş yalıtım", "Uzun ömür", "10 yıl garanti", "Enerji verimli"] },
          { code: "OS005", name: "OS005", nameEn: "OS005", nameFr: "OS005", nameAr: "OS005", description: "Klasik tasarımlı PVC kapı. Geleneksel ve modern projeler için uygundur. Çok yönlü kullanım imkanı ve uygun fiyat avantajı sunar. Klasik çizgilerle modern teknolojinin birleşimi. Ahşap görünümlü özel kaplama seçeneği mevcuttur. Tüm standart ölçülerde üretilebilir. Bütçe dostu fiyatlandırma ile geniş kullanım alanı. Kolay montaj özelliği sayesinde hızlı kurulum. Bakım gerektirmez, uzun yıllar kullanılabilir.", descriptionEn: "Classic design PVC door. Suitable for traditional and modern projects. Offers versatile usage and affordable price advantage. Combination of classic lines with modern technology. Wood-look special coating option available. Can be produced in all standard sizes. Wide range of applications with budget-friendly pricing. Fast installation thanks to easy installation feature. Requires no maintenance, can be used for many years.", descriptionFr: "Porte PVC au design classique. Adapté aux projets traditionnels et modernes. Offre une utilisation polyvalente et un avantage de prix abordable. Combinaison de lignes classiques avec technologie moderne. Option de revêtement spécial aspect bois disponible. Peut être produite dans toutes les tailles standard. Large gamme d'applications avec tarification adaptée au budget. Installation rapide grâce à la fonction d'installation facile. Ne nécessite aucun entretien, peut être utilisée pendant de nombreuses années.", descriptionAr: "باب PVC بتصميم كلاسيكي. مناسب للمشاريع التقليدية والحديثة. يوفر استخداماً متعدد الجوانب وميزة سعر معقولة. مزيج من الخطوط الكلاسيكية مع التكنولوجيا الحديثة. خيار طلاء خاص بمظهر خشبي متاح. يمكن إنتاجه بجميع الأحجام القياسية. نطاق واسع من التطبيقات مع تسعير مناسب للميزانية. تركيب سريع بفضل ميزة التركيب السهل. لا يتطلب صيانة، يمكن استخدامه لسنوات عديدة.", features: ["Klasik tasarım", "Çok yönlü", "Dayanıklı", "Uygun fiyat", "Ahşap görünüm", "Bakım gerektirmez"] },
          { code: "OS006", name: "OS006", nameEn: "OS006", nameFr: "OS006", nameAr: "OS006", description: "Dekoratif özellikli PVC kapı. Özel projeler için özelleştirilebilir tasarım. Estetik görünüm ve özel tasarım seçenekleri ile dikkat çeker.", descriptionEn: "Decorative PVC door. Customizable design for special projects. Draws attention with aesthetic appearance and special design options.", descriptionFr: "Porte PVC décorative. Design personnalisable pour projets spéciaux. Attire l'attention avec apparence esthétique et options de design spéciales.", descriptionAr: "باب PVC زخرفي. تصميم قابل للتخصيص للمشاريع الخاصة. يجذب الانتباه بمظهر جمالي وخيارات تصميم خاصة.", features: ["Dekoratif", "Özel tasarım", "Özelleştirilebilir", "Estetik"] },
          { code: "OS007", name: "OS007", nameEn: "OS007", nameFr: "OS007", nameAr: "OS007", description: "Yüksek dayanıklılık sunan PVC kapı. Ağır kullanıma uygun güçlü yapı. Uzun ömürlü ve sağlam malzeme kullanımı ile güvenilir çözüm.", descriptionEn: "High durability PVC door. Strong structure suitable for heavy-duty use. Reliable solution with long-lasting and robust material usage.", descriptionFr: "Porte PVC à haute durabilité. Structure solide adaptée à un usage intensif. Solution fiable avec utilisation de matériaux durables et robustes.", descriptionAr: "باب PVC عالي المتانة. هيكل قوي مناسب للاستخدام المكثف. حل موثوق باستخدام مواد متينة وقوية.", features: ["Yüksek dayanıklılık", "Ağır kullanım", "Güçlü yapı", "Uzun ömür"] },
          { code: "OS008", name: "OS008", nameEn: "OS008", nameFr: "OS008", nameAr: "OS008", description: "Modern ve şık PVC kapı modeli. Çağdaş projeler için ideal seçim. Premium kalite standartlarında üretilmiş, estetik görünüm sunar.", descriptionEn: "Modern and elegant PVC door model. Ideal choice for contemporary projects. Manufactured to premium quality standards, offers aesthetic appearance.", descriptionFr: "Modèle de porte PVC moderne et élégant. Choix idéal pour projets contemporains. Fabriqué selon des normes de qualité premium, offre une apparence esthétique.", descriptionAr: "موديل باب PVC حديث وأنيق. اختيار مثالي للمشاريع المعاصرة. مصنوع بمعايير الجودة المميزة، يوفر مظهراً جمالياً.", features: ["Modern", "Şık", "Çağdaş", "Premium"] },
          { code: "OS009", name: "OS009", nameEn: "OS009", nameFr: "OS009", nameAr: "OS009", description: "Ekonomik çözüm sunan PVC kapı. Bütçe dostu projeler için pratik seçenek. Kaliteli üretim ve geniş kullanım alanı avantajları.", descriptionEn: "Economical PVC door solution. Practical option for budget-friendly projects. Quality production and wide range of application advantages.", descriptionFr: "Solution de porte PVC économique. Option pratique pour projets à petit budget. Production de qualité et avantages de large gamme d'applications.", descriptionAr: "حل باب PVC اقتصادي. خيار عملي للمشاريع المقتصدة. إنتاج عالي الجودة ومزايا نطاق واسع من التطبيقات.", features: ["Ekonomik", "Bütçe dostu", "Kaliteli", "Pratik"] },
          { code: "OS010", name: "OS010", nameEn: "OS010", nameFr: "OS010", nameAr: "OS010", description: "Premium standartlarda PVC kapı. Lüks projeler için özel tasarım. Yüksek kalite malzeme ve özel üretim süreçleri ile üretilmiştir.", descriptionEn: "Premium standard PVC door. Special design for luxury projects. Manufactured with high-quality materials and special production processes.", descriptionFr: "Porte PVC aux standards premium. Design spécial pour projets de luxe. Fabriquée avec matériaux de haute qualité et processus de production spéciaux.", descriptionAr: "باب PVC بمعايير مميزة. تصميم خاص للمشاريع الفاخرة. مصنوع بمواد عالية الجودة وعمليات إنتاج خاصة.", features: ["Premium", "Lüks", "Özel tasarım", "Yüksek kalite"] },
          { code: "OS011", name: "OS011", nameEn: "OS011", nameFr: "OS011", nameAr: "OS011", description: "Klasik çizgilerle modern dokunuş. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı sunar.", descriptionEn: "Classic lines with modern touch. Versatile design that adapts to every project. Offers compatible and flexible usage.", descriptionFr: "Lignes classiques avec touche moderne. Design polyvalent qui s'adapte à chaque projet. Offre une utilisation compatible et flexible.", descriptionAr: "خطوط كلاسيكية بلمسة عصرية. تصميم متعدد الجوانب يتكيف مع كل مشروع. يوفر استخداماً متوافقاً ومرناً.", features: ["Klasik", "Modern", "Çok yönlü", "Uyumlu"] },
          { code: "OS012", name: "OS012", nameEn: "OS012", nameFr: "OS012", nameAr: "OS012", description: "Dekoratif detaylara sahip PVC kapı. Estetik görünüm ve şık tasarım. Detaylı işçilik ve özenli üretim ile öne çıkar.", descriptionEn: "PVC door with decorative details. Aesthetic appearance and elegant design. Stands out with detailed craftsmanship and careful production.", descriptionFr: "Porte PVC avec détails décoratifs. Apparence esthétique et design élégant. Se démarque par artisanat détaillé et production soignée.", descriptionAr: "باب PVC بتفاصيل زخرفية. مظهر جمالي وتصميم أنيق. يتميز بحرفية مفصلة وإنتاج دقيق.", features: ["Dekoratif", "Estetik", "Detaylı", "Şık"] },
          { code: "OS013", name: "OS013", nameEn: "OS013", nameFr: "OS013", nameAr: "OS013", description: "Yüksek performanslı PVC kapı. Zorlu koşullara dayanıklı yapı. Güvenilir ve sağlam malzeme kullanımı ile uzun ömür garantisi.", descriptionEn: "High-performance PVC door. Durable structure resistant to harsh conditions. Long life guarantee with reliable and robust material usage.", descriptionFr: "Porte PVC haute performance. Structure durable résistante aux conditions difficiles. Garantie de longue durée avec utilisation de matériaux fiables et robustes.", descriptionAr: "باب PVC عالي الأداء. هيكل متين مقاوم للظروف القاسية. ضمان عمر طويل باستخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güvenilir", "Sağlam"] },
          { code: "OS014", name: "OS014", nameEn: "OS014", nameFr: "OS014", nameAr: "OS014", description: "Minimalist tasarımlı PVC kapı. Sade ve şık görünüm. Modern mimari projeler için ideal seçim, estetik değer yüksek.", descriptionEn: "Minimalist design PVC door. Simple and elegant appearance. Ideal choice for modern architectural projects, high aesthetic value.", descriptionFr: "Porte PVC au design minimaliste. Apparence simple et élégante. Choix idéal pour projets architecturaux modernes, haute valeur esthétique.", descriptionAr: "باب PVC بتصميم بسيط. مظهر بسيط وأنيق. اختيار مثالي للمشاريع المعمارية الحديثة، قيمة جمالية عالية.", features: ["Minimalist", "Sade", "Şık", "Modern"] },
          { code: "OS015", name: "OS015", nameEn: "OS015", nameFr: "OS015", nameAr: "OS015", description: "Ekonomik ve kaliteli PVC kapı. Geniş kullanım alanı ve pratik çözüm. Toplu konut ve ticari projeler için uygun seçenek.", descriptionEn: "Economical and quality PVC door. Wide range of applications and practical solution. Suitable option for mass housing and commercial projects.", descriptionFr: "Porte PVC économique et de qualité. Large gamme d'applications et solution pratique. Option adaptée pour projets de logements collectifs et commerciaux.", descriptionAr: "باب PVC اقتصادي وعالي الجودة. نطاق واسع من التطبيقات وحل عملي. خيار مناسب لمشاريع الإسكان الجماعي والتجارية.", features: ["Ekonomik", "Kaliteli", "Geniş kullanım", "Pratik"] },
          { code: "OS016", name: "OS016", nameEn: "OS016", nameFr: "OS016", nameAr: "OS016", description: "Premium kalite standartlarında PVC kapı. Üst segment projeler için özel üretim. Lüks görünüm ve yüksek kalite garantisi.", descriptionEn: "Premium quality standard PVC door. Special production for high-end segment projects. Luxury appearance and high quality guarantee.", descriptionFr: "Porte PVC aux normes de qualité premium. Production spéciale pour projets de segment haut de gamme. Apparence de luxe et garantie de haute qualité.", descriptionAr: "باب PVC بمعايير الجودة المميزة. إنتاج خاص لمشاريع القطاع الراقي. مظهر فاخر وضمان جودة عالية.", features: ["Premium", "Yüksek kalite", "Lüks", "Özel"] },
          { code: "OS017", name: "OS017", nameEn: "OS017", nameFr: "OS017", nameAr: "OS017", description: "Klasik ve modern karışımı PVC kapı. Her tarza uyumlu tasarım. Çok yönlü kullanım imkanı ve esnek proje uyumluluğu.", descriptionEn: "Classic and modern blend PVC door. Design compatible with every style. Versatile usage and flexible project compatibility.", descriptionFr: "Porte PVC mélange classique et moderne. Design compatible avec tous les styles. Utilisation polyvalente et compatibilité de projet flexible.", descriptionAr: "باب PVC مزيج كلاسيكي وحديث. تصميم متوافق مع كل نمط. استخدام متعدد الجوانب وتوافق مشروع مرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS018", name: "OS018", nameEn: "OS018", nameFr: "OS018", nameAr: "OS018", description: "Dekoratif özellikleri öne çıkan PVC kapı. Özel projeler için estetik çözüm. Öne çıkan tasarım ve değerli görünüm.", descriptionEn: "PVC door with prominent decorative features. Aesthetic solution for special projects. Outstanding design and valuable appearance.", descriptionFr: "Porte PVC aux caractéristiques décoratives proéminentes. Solution esthétique pour projets spéciaux. Design remarquable et apparence précieuse.", descriptionAr: "باب PVC بميزات زخرفية بارزة. حل جمالي للمشاريع الخاصة. تصميم بارز ومظهر قيم.", features: ["Dekoratif", "Özel", "Estetik", "Öne çıkan"] },
          { code: "OS019", name: "OS019", nameEn: "OS019", nameFr: "OS019", nameAr: "OS019", description: "Yüksek dayanıklılık ve performans. Endüstriyel kullanım için uygun güçlü yapı. Dayanıklı malzeme ve güvenilir üretim.", descriptionEn: "High durability and performance. Strong structure suitable for industrial use. Durable material and reliable production.", descriptionFr: "Haute durabilité et performance. Structure solide adaptée à un usage industriel. Matériau durable et production fiable.", descriptionAr: "متانة وأداء عاليان. هيكل قوي مناسب للاستخدام الصناعي. مادة متينة وإنتاج موثوق.", features: ["Dayanıklı", "Yüksek performans", "Endüstriyel", "Güçlü"] },
          { code: "OS020", name: "OS020", nameEn: "OS020", nameFr: "OS020", nameAr: "OS020", description: "Modern mimariye uygun PVC kapı. Çağdaş tasarım ve mimari uyum. Tasarım odaklı projeler için ideal seçim.", descriptionEn: "PVC door suitable for modern architecture. Contemporary design and architectural harmony. Ideal choice for design-focused projects.", descriptionFr: "Porte PVC adaptée à l'architecture moderne. Design contemporain et harmonie architecturale. Choix idéal pour projets axés sur le design.", descriptionAr: "باب PVC مناسب للهندسة المعمارية الحديثة. تصميم معاصر وتناغم معماري. اختيار مثالي للمشاريع المرتكزة على التصميم.", features: ["Modern", "Çağdaş", "Mimari", "Tasarım"] },
          { code: "OS021", name: "OS021", nameEn: "OS021", nameFr: "OS021", nameAr: "OS021", description: "Ekonomik çözüm, kaliteli üretim. Bütçe dostu projeler için ideal seçenek. Geniş kullanım alanı ve pratik avantajlar.", descriptionEn: "Economical solution, quality production. Ideal option for budget-friendly projects. Wide range of applications and practical advantages.", descriptionFr: "Solution économique, production de qualité. Option idéale pour projets à petit budget. Large gamme d'applications et avantages pratiques.", descriptionAr: "حل اقتصادي، إنتاج عالي الجودة. خيار مثالي للمشاريع المقتصدة. نطاق واسع من التطبيقات ومزايا عملية.", features: ["Ekonomik", "Kaliteli", "Bütçe dostu", "İdeal"] },
          { code: "OS022", name: "OS022", nameEn: "OS022", nameFr: "OS022", nameAr: "OS022", description: "Premium standartlarda üretilmiş PVC kapı. Lüks projeler için özel üretim. Yüksek standart ve özel işçilik ile üretilmiştir.", descriptionEn: "PVC door manufactured to premium standards. Special production for luxury projects. Manufactured with high standards and special craftsmanship.", descriptionFr: "Porte PVC fabriquée selon des normes premium. Production spéciale pour projets de luxe. Fabriquée avec normes élevées et artisanat spécial.", descriptionAr: "باب PVC مصنوع بمعايير مميزة. إنتاج خاص للمشاريع الفاخرة. مصنوع بمعايير عالية وحرفية خاصة.", features: ["Premium", "Lüks", "Yüksek standart", "Özel"] },
          { code: "OS023", name: "OS023", nameEn: "OS023", nameFr: "OS023", nameAr: "OS023", description: "Klasik dokunuşlu modern PVC kapı. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı.", descriptionEn: "Modern PVC door with classic touch. Versatile design that adapts to every project. Compatible and flexible usage.", descriptionFr: "Porte PVC moderne avec touche classique. Design polyvalent qui s'adapte à chaque projet. Utilisation compatible et flexible.", descriptionAr: "باب PVC حديث بلمسة كلاسيكية. تصميم متعدد الجوانب يتكيف مع كل مشروع. استخدام متوافق ومرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS024", name: "OS024", nameEn: "OS024", nameFr: "OS024", nameAr: "OS024", description: "Dekoratif detaylarıyla öne çıkan PVC kapı. Estetik değer yüksek tasarım. Öne çıkan görünüm ve değerli işçilik.", descriptionEn: "PVC door standing out with decorative details. High aesthetic value design. Outstanding appearance and valuable craftsmanship.", descriptionFr: "Porte PVC se démarquant par détails décoratifs. Design à haute valeur esthétique. Apparence remarquable et artisanat précieux.", descriptionAr: "باب PVC يتميز بتفاصيله الزخرفية. تصميم بقيمة جمالية عالية. مظهر بارز وحرفية قيّمة.", features: ["Dekoratif", "Estetik", "Öne çıkan", "Değerli"] },
          { code: "OS025", name: "OS025", nameEn: "OS025", nameFr: "OS025", nameAr: "OS025", description: "Yüksek performans ve dayanıklılık. Zorlu koşullara uygun güçlü yapı. Güvenilir ve sağlam malzeme kullanımı.", descriptionEn: "High performance and durability. Strong structure suitable for harsh conditions. Reliable and robust material usage.", descriptionFr: "Haute performance et durabilité. Structure solide adaptée aux conditions difficiles. Utilisation de matériaux fiables et robustes.", descriptionAr: "أداء ومتانة عاليان. هيكل قوي مناسب للظروف القاسية. استخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güçlü", "Güvenilir"] },
          { code: "OS026", name: "OS026", nameEn: "OS026", nameFr: "OS026", nameAr: "OS026", description: "Minimalist ve şık tasarım. Sade görünüm, yüksek kalite standartları. Modern projeler için ideal seçim.", descriptionEn: "Minimalist and elegant design. Simple appearance, high quality standards. Ideal choice for modern projects.", descriptionFr: "Design minimaliste et élégant. Apparence simple, normes de qualité élevées. Choix idéal pour projets modernes.", descriptionAr: "تصميم بسيط وأنيق. مظهر بسيط، معايير جودة عالية. اختيار مثالي للمشاريع الحديثة.", features: ["Minimalist", "Şık", "Sade", "Kaliteli"] }
        ]
      },
    },
    delivery: {
      title: "Delivery Services",
      subtitle: "Reliable Shipping Across Regions",
      description: "Fast delivery throughout Europe and Middle East",
    },
    process: {
      title: "Order & Production Process",
      subtitle: "Professional Solutions for Door Export to Africa",
      steps: [
        { 
          number: "1", 
          title: "Needs Analysis", 
          description: "We thoroughly analyze your project requirements. We gather all information including door type, quantity, dimensions, and delivery location. We evaluate our specialized logistics solutions for door export to Africa." 
        },
        { 
          number: "2", 
          title: "Quote Preparation", 
          description: "We prepare a detailed, customized price quote for door sales from Turkey. We offer competitive prices for wholesale door supply. Our quote includes production time, payment terms, and logistics details." 
        },
        { 
          number: "3", 
          title: "Manufacturing", 
          description: "After order confirmation, we begin production of steel doors, PVC doors, lacquered doors, or melamine doors. We maintain standards at every stage with our quality control processes. We package appropriately for door export to Africa." 
        },
        { 
          number: "4", 
          title: "Logistics & Delivery", 
          description: "After production is completed, we deliver your doors to Africa or the target country through our secure logistics network. We handle all customs procedures and documentation." 
        },
      ],
      cta: {
        title: "Get a Quote for Your Project",
        description: "Contact our professional team for door export to Africa. We offer customized solutions for wholesale door supply from Turkey.",
        button: "Get in Touch"
      }
    },
    references: {
      title: "Our References",
      subtitle: "Successfully Completed Projects",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "What You Want to Know About Door Export to Africa",
      items: [
        { 
          question: "What is the minimum order quantity?", 
          answer: "The minimum order quantity for door export to Africa varies depending on the door type. Generally, orders of 50 units and above are accepted for wholesale door supply. For smaller quantities, please contact us." 
        },
        { 
          question: "What is the delivery time?", 
          answer: "Delivery time for standard production is 3-6 weeks. For custom sizes and designs, this period can extend to 6-8 weeks. We have fast production options for urgent orders. Logistics time to Africa is an additional 1-2 weeks." 
        },
        { 
          question: "What payment methods do you accept?", 
          answer: "We accept secure payment methods such as T/T (telegraphic transfer), L/C (letter of credit) and letters of credit for door sales from Turkey. Payment terms vary according to order size. Please fill out the quote form for detailed information." 
        },
        { 
          question: "Can you send samples?", 
          answer: "Yes, we can send samples to serious buyers. Sample cost and shipping fee are borne by the buyer. If a large order is placed after the sample order, the sample cost is deducted from the main order." 
        },
        { 
          question: "Which countries do you deliver to?", 
          answer: "As OBSAN SUARL, we export doors to many countries in Africa. We particularly serve French and Arabic speaking African countries intensively. We also deliver to other international markets. Please contact us for detailed information." 
        },
        { 
          question: "Can you make custom sizes and designs?", 
          answer: "Yes, we can make custom sizes and designs for your projects. Custom-sized production is available for lacquered, PVC, melamine and panel doors. Our technical team will offer the most suitable solution according to your project requirements." 
        },
      ],
      moreInfo: "Need more information?",
      moreInfoDesc: "Contact our expert team for detailed consultation",
      getInTouch: "Get in Touch",
    },
    footer: {
      company: "OBSAN SUARL",
      rights: "All rights reserved",
      contact: "Contact",
      followUs: "Follow Us",
      about: "About Us",
      aboutDesc: "Door export from Turkey to Africa. High-quality steel, PVC, lacquered, melamine and panel door manufacturing.",
      quickLinks: "Quick Links",
      products: "Products",
      services: "Our Services",
      address: "Address",
      addressValue: "Haci Halil Mah. Ismetpasa Cad. Yilmaz Is Hani, Floor:1 Office:2, 41420 Gebze/Kocaeli, Turkey",
      phone: "Phone",
      email: "Email",
      workingHours: "Working Hours",
      workingHoursValue: "Monday - Friday: 09:00 - 18:00",
      certificates: "Certificates",
      iso: "ISO 9001",
      ce: "CE Certified",
      socialMedia: "Social Media",
    },
    quote: {
      title: "Get Your Custom Quote",
      description: "Contact our expert team to discuss your specific requirements and get a tailored quote for your project.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappDesc: "Quick support available",
      form: {
        fullName: "Full Name *",
        email: "Email *",
        phone: "Phone Number *",
        company: "Company",
        productType: "Product Type *",
        selectProduct: "Select a product type",
        quantity: "Estimated Quantity",
        quantityPlaceholder: "e.g., 100 units",
        message: "Additional Details",
        messagePlaceholder: "Tell us more about your project...",
        sending: "Sending...",
        send: "Send Quote Request",
        chatWhatsApp: "Chat on WhatsApp",
        success: "Thank you! Your quote request has been sent. We'll get back to you soon.",
        whatsappMessage: "Hi OBSAN, I'm interested in getting a quote for ${productType}. My name is ${name}.",
        whatsappMessageFallback: "Hi OBSAN, I'm interested in getting a quote for your products. My name is ${name}.",
        country: "Country",
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      whyUs: "À Propos",
      products: "Produits",
      delivery: "Livraison",
      process: "Processus",
      references: "Références",
      faq: "FAQ",
      quote: "Demander un Devis",
    },
    hero: {
      title: "OBSAN SUARL",
      subtitle: "Export de Portes de la Turquie vers l'Afrique",
      cta: "Demander un Devis",
      description: "Fabrication et export de portes en acier, PVC, laquées et mélaminées. Solutions professionnelles pour l'approvisionnement en portes en gros vers l'Afrique.",
      whatsappCta: "Contacter via WhatsApp",
      whatsappLink: "https://wa.me/905321307143",
      stats: [
        { value: "5+", label: "Années d'Expérience" },
        { value: "10+", label: "Pays d'Export" },
        { value: "100+", label: "Projets Réalisés" }
      ]
    },
    home: {
      africaExport: {
        title: "Export de Portes vers l'Afrique",
        description: "En tant qu'OBSAN SUARL, nous exportons des portes de haute qualité fabriquées en Turquie vers les pays africains et à l'étranger. Nous offrons des solutions pour les entrepreneurs, les entreprises de construction et les grossistes.",
        features: [
          "Solutions logistiques spécialisées pour l'Afrique",
          "Prix compétitifs pour l'approvisionnement en portes en gros",
          "Production et livraison rapides",
          "Solutions personnalisées par projet"
        ],
        cta: "Voir Nos Produits",
        statsTitle: "OBSAN SUARL en Chiffres",
        stats: [
          { value: "5+", label: "Années d'Expérience" },
          { value: "10+", label: "Pays d'Export" },
          { value: "100+", label: "Projets Réalisés" }
        ]
      },
      productsPreview: {
        title: "Nos Produits",
        subtitle: "Large Gamme de Produits pour Chaque Projet",
        learnMore: "En Savoir Plus",
        viewAll: "Voir Tous les Produits",
        items: [
          { name: "Portes Laquées", description: "Design moderne et finition brillante" },
          { name: "Portes PVC", description: "Solutions durables et économiques" },
          { name: "Portes Mélaminées", description: "Texture bois, résistantes aux rayures" },
          { name: "Portes Panneau", description: "Lignes classiques et modernes" }
        ]
      }
    },
    whyUs: {
      title: "Pourquoi Nous Choisir?",
      subtitle: "Synonyme de Qualité et Fiabilité",
      items: [
        { title: "Qualité Supérieure", description: "Expertise industrie" },
        { title: "Livraison Rapide", description: "Expédition rapide et sécurisée" },
        { title: "Équipe Experte", description: "Consultants professionnels à votre service" },
        { title: "Prix Compétitifs", description: "Les meilleurs prix du marché" },
      ],
    },
    about: {
      title: "À Propos",
      subtitle: "OBSAN SUARL - Partenaire de Confiance pour l'Export de Portes vers l'Afrique",
      story: {
        title: "Notre Histoire",
        paragraphs: [
          "En tant qu'OBSAN SUARL, nous fabriquons et exportons des portes en Turquie. En nous concentrant particulièrement sur le marché africain, nous offrons des portes en acier, PVC, laquées, mélaminées et panneau de haute qualité à nos clients.",
          "Nous fournissons des solutions pour les entrepreneurs, les entreprises de construction et les grossistes. Nous approvisionnons en portes pour les projets résidentiels, hôteliers, de bureaux et commerciaux.",
          "Notre équipe spécialisée dans l'export de portes vers l'Afrique propose des solutions personnalisées selon les besoins de chaque projet. Avec notre réseau logistique fiable et notre infrastructure de production de qualité, nous visons à fournir le meilleur service à nos clients."
        ]
      },
      values: {
        title: "Nos Valeurs",
        items: [
          { title: "Qualité", description: "Production certifiée ISO 9001 et CE" },
          { title: "Fiabilité", description: "Livraison à temps et qualité promise" },
          { title: "Orientation Client", description: "Solutions personnalisées pour chaque projet" },
          { title: "Innovation", description: "Technologies de production en évolution continue" }
        ]
      },
      whyChoose: {
        title: "Pourquoi Choisir OBSAN SUARL?",
        items: [
          { title: "Production de Qualité", description: "Expérience dans l'export de portes vers l'Afrique" },
          { title: "Large Gamme de Produits", description: "Portes laquées, PVC, Mélaminées, Panneau et plus" },
          { title: "Prix Compétitifs", description: "Meilleurs prix pour l'approvisionnement en portes en gros" },
          { title: "Production Rapide", description: "Livraison en 3-6 semaines" },
          { title: "Logistique Sécurisée", description: "Solutions logistiques spécialisées pour l'Afrique" },
          { title: "Soutien Projet", description: "Consultation technique et gestion de projet" }
        ]
      },
      cta: {
        title: "Obtenez un Devis pour Votre Projet",
        description: "Contactez notre équipe professionnelle pour l'export de portes vers l'Afrique",
        button: "Nous Contacter"
      }
    },
    products: {
      title: "Nos Produits",
      subtitle: "Large Gamme de Solutions",
      learnMore: "En Savoir Plus",
      items: [
        { name: "Portes en Acier", description: "Durables et sécurisées" },
        { name: "Portes Aluminium", description: "Modernes et élégantes" },
        { name: "Portes Vitrées", description: "Sophistiquées et professionnelles" },
        { name: "Composants Système", description: "Toutes pièces en stock" },
      ],
      detail: {
        keyFeatures: "Caractéristiques Clés",
        applications: "Applications",
        qualityFeatures: [
          { title: "Qualité Certifiée", description: "Production certifiée ISO 9001 & CE" },
          { title: "Production de Qualité", description: "Expertise professionnelle" },
          { title: "Délai Rapide", description: "Délai de livraison de 2-4 semaines" },
          { title: "Garantie Complète", description: "Garantie complète de 2 ans" },
        ],
        products: [
          {
            features: [
              "Construction en acier haute sécurité",
              "Résistant au feu jusqu'à 120 minutes",
              "Dimensions personnalisées disponibles",
              "Systèmes de verrouillage multiples",
              "Certifié CE",
            ],
            applications: ["Installations industrielles", "Entrepôts", "Bâtiments commerciaux", "Zones de sécurité"],
          },
          {
            features: [
              "Léger et durable",
              "Résistant à la corrosion",
              "Isolation thermique",
              "Esthétique moderne",
              "Faible entretien",
            ],
            applications: ["Bâtiments de bureaux", "Centres commerciaux", "Hôtels", "Complexes résidentiels"],
          },
          {
            features: [
              "Verre de sécurité trempé",
              "Économe en énergie",
              "Isolation phonique",
              "Protection UV",
              "Finition premium",
            ],
            applications: ["Bureaux d'entreprise", "Magasins de détail", "Restaurants", "Établissements médicaux"],
          },
          {
            features: [
              "Intégration système complète",
              "Matériaux de haute qualité",
              "Compatible avec tous les types de portes",
              "Installation facile",
              "Garantie étendue",
            ],
            applications: ["Cadres de porte", "Gonds et serrures", "Systèmes d'automatisation", "Contrôle d'accès"],
          },
        ],
        cta: {
          title: "Besoin de Solutions Personnalisées?",
          description: "Notre équipe d'experts peut concevoir et fabriquer des produits adaptés à vos besoins spécifiques",
          button: "Contactez Notre Équipe",
        },
      },
      categories: {
        title: "Portes PVC",
        subtitle: "Modèles de Portes PVC de Haute Qualité",
        description: "Des portes PVC durables, faciles à nettoyer et économiques, largement utilisées pour les portes intérieures, les logements collectifs et les grands projets. Large gamme de modèles pour l'export de portes vers l'Afrique.",
        footerNote:
          "Tous nos modèles de portes PVC peuvent être fabriqués avec différentes dimensions, couleurs et quincailleries selon les besoins de votre projet. Contactez-nous pour un catalogue détaillé et un devis.",
        modelsTitle: "Modèles de Portes",
        models: [
          { code: "Karvin PVC 025", name: "Karvin PVC 025", nameEn: "Karvin PVC 025", nameFr: "Karvin PVC 025", nameAr: "Karvin PVC 025", description: "Yüksek kaliteli PVC kapı modeli. Daire içi oda kapıları için ideal çözüm.", descriptionEn: "High-quality PVC door model. Ideal solution for interior room doors.", descriptionFr: "Modèle de porte PVC de haute qualité. Solution idéale pour les portes intérieures.", descriptionAr: "موديل باب PVC عالي الجودة. حل مثالي للأبواب الداخلية.", features: ["Yüksek kalite", "Dayanıklı", "Kolay montaj", "Ekonomik"] },
          { code: "OS002", name: "OS002", nameEn: "OS002", nameFr: "OS002", nameAr: "OS002", description: "Otel ve ofis projeleri için özel tasarlanmış PVC kapı modeli. Gelişmiş ses yalıtımı özelliği ile konforlu kullanım sağlar. Premium kalite standartlarında üretilmiştir. Özel dolgu malzemesi sayesinde 35 dB'ye kadar ses yalıtımı sağlar. Otel odaları, ofis bölmeleri ve toplantı salonları için idealdir. Yangına dayanıklı özellikleri ile güvenlik standartlarına uygundur. Profesyonel montaj ekibi ile hızlı kurulum imkanı sunar. Tüm renk seçenekleri mevcuttur.", descriptionEn: "PVC door model specially designed for hotel and office projects. Provides comfortable use with advanced sound insulation feature. Manufactured to premium quality standards. Provides sound insulation up to 35 dB thanks to special filling material. Ideal for hotel rooms, office partitions and meeting rooms. Suitable for safety standards with fire-resistant features. Offers fast installation with professional installation team. All color options available.", descriptionFr: "Modèle de porte PVC spécialement conçu pour les projets hôteliers et de bureaux. Offre un confort d'utilisation avec la fonction d'isolation phonique avancée. Fabriqué selon des normes de qualité premium. Offre une isolation phonique jusqu'à 35 dB grâce au matériau de remplissage spécial. Idéal pour les chambres d'hôtel, les cloisons de bureau et les salles de réunion. Adapté aux normes de sécurité avec caractéristiques résistantes au feu. Offre une installation rapide avec équipe d'installation professionnelle. Toutes les options de couleur disponibles.", descriptionAr: "موديل باب PVC مصمم خصيصاً لمشاريع الفنادق والمكاتب. يوفر استخداماً مريحاً مع ميزة العزل الصوتي المتقدمة. مصنوع بمعايير الجودة المميزة. يوفر عزل صوتي يصل إلى 35 ديسيبل بفضل مادة الحشو الخاصة. مثالي لغرف الفنادق وأقسام المكاتب وقاعات الاجتماعات. مناسب لمعايير السلامة مع ميزات مقاومة للحريق. يوفر تركيباً سريعاً مع فريق تركيب محترف. جميع خيارات الألوان متاحة.", features: ["Modern tasarım", "Şık görünüm", "Ses yalıtımı", "Premium kalite", "Yangına dayanıklı", "35 dB izolasyon"] },
          { code: "OS003", name: "OS003", nameEn: "OS003", nameFr: "OS003", nameAr: "OS003", description: "Ekonomik ve dayanıklı PVC kapı modeli. Toplu konut projeleri için ideal çözüm. Hızlı üretim süresi ve geniş kullanım alanı sunar. Büyük projeler için özel fiyatlandırma imkanı. Standart ölçülerde stoktan teslim seçeneği mevcuttur. Toplu konut, sosyal konut ve öğrenci yurtları için uygun çözüm. Minimum 50 adet siparişlerde ek indirim avantajı. Hızlı üretim hattı sayesinde 2-3 hafta içinde teslim edilebilir. Tüm standart renklerde üretim yapılabilir.", descriptionEn: "Economical and durable PVC door model. Ideal solution for mass housing projects. Offers fast production time and wide range of applications. Special pricing opportunity for large projects. Standard size stock delivery option available. Suitable solution for mass housing, social housing and student dormitories. Additional discount advantage on minimum 50 unit orders. Can be delivered within 2-3 weeks thanks to fast production line. Can be produced in all standard colors.", descriptionFr: "Modèle de porte PVC économique et durable. Solution idéale pour les projets de logements collectifs. Offre un temps de production rapide et une large gamme d'applications. Possibilité de tarification spéciale pour les grands projets. Option de livraison en stock en tailles standard disponible. Solution adaptée pour logements collectifs, logements sociaux et résidences étudiantes. Avantage de remise supplémentaire sur commandes minimum de 50 unités. Peut être livré dans 2-3 semaines grâce à la ligne de production rapide. Peut être produit dans toutes les couleurs standard.", descriptionAr: "موديل باب PVC اقتصادي ومتين. حل مثالي لمشاريع الإسكان الجماعي. يوفر وقت إنتاج سريع ونطاقاً واسعاً من التطبيقات. إمكانية تسعير خاص للمشاريع الكبيرة. خيار التسليم من المخزون بأحجام قياسية متاح. حل مناسب للإسكان الجماعي والإسكان الاجتماعي ومساكن الطلاب. ميزة خصم إضافي على طلبات بحد أدنى 50 وحدة. يمكن تسليمه خلال 2-3 أسابيع بفضل خط الإنتاج السريع. يمكن إنتاجه بجميع الألوان القياسية.", features: ["Ekonomik", "Dayanıklı", "Hızlı üretim", "Geniş kullanım", "Toplu sipariş indirimi", "Stoktan teslim"] },
          { code: "OS004", name: "OS004", nameEn: "OS004", nameFr: "OS004", nameAr: "OS004", description: "Premium kaliteli PVC kapı. Rezidans ve üst segment projeler için özel tasarım. Gelişmiş ısı ve ses yalıtımı özellikleri ile uzun ömürlü kullanım garantisi. Özel lüks kaplama ve dekoratif detaylar ile estetik görünüm. Yüksek kaliteli PVC profiller ve çoklu cam sistemi ile enerji verimliliği sağlar. Özel ölçü ve renk seçenekleri ile projenize tam uyum. 10 yıl garanti kapsamında üretilmiştir. Profesyonel montaj ve teknik destek hizmeti dahildir.", descriptionEn: "Premium quality PVC door. Special design for residential and high-end projects. Long-lasting use guarantee with advanced heat and sound insulation features. Aesthetic appearance with special luxury coating and decorative details. Provides energy efficiency with high-quality PVC profiles and multi-glass system. Full compatibility with your project with custom size and color options. Manufactured with 10-year warranty coverage. Professional installation and technical support service included.", descriptionFr: "Porte PVC de qualité premium. Design spécial pour projets résidentiels et haut de gamme. Garantie d'utilisation durable avec caractéristiques d'isolation thermique et phonique avancées. Apparence esthétique avec revêtement de luxe spécial et détails décoratifs. Offre efficacité énergétique avec profils PVC de haute qualité et système multi-vitres. Compatibilité totale avec votre projet avec options de taille et couleur personnalisées. Fabriquée avec couverture de garantie de 10 ans. Service d'installation professionnelle et support technique inclus.", descriptionAr: "باب PVC بجودة مميزة. تصميم خاص للمشاريع السكنية والراقية. ضمان استخدام طويل الأمد مع ميزات عزل حراري وصوتي متقدمة. مظهر جمالي مع طلاء فاخر خاص وتفاصيل زخرفية. يوفر كفاءة الطاقة مع مقاطع PVC عالية الجودة ونظام زجاج متعدد. توافق كامل مع مشروعك مع خيارات حجم ولون مخصصة. مصنوع مع تغطية ضمان لمدة 10 سنوات. خدمة التركيب الاحترافية والدعم الفني مشمولة.", features: ["Premium kalite", "Lüks görünüm", "Gelişmiş yalıtım", "Uzun ömür", "10 yıl garanti", "Enerji verimli"] },
          { code: "OS005", name: "OS005", nameEn: "OS005", nameFr: "OS005", nameAr: "OS005", description: "Klasik tasarımlı PVC kapı. Geleneksel ve modern projeler için uygundur. Çok yönlü kullanım imkanı ve uygun fiyat avantajı sunar. Klasik çizgilerle modern teknolojinin birleşimi. Ahşap görünümlü özel kaplama seçeneği mevcuttur. Tüm standart ölçülerde üretilebilir. Bütçe dostu fiyatlandırma ile geniş kullanım alanı. Kolay montaj özelliği sayesinde hızlı kurulum. Bakım gerektirmez, uzun yıllar kullanılabilir.", descriptionEn: "Classic design PVC door. Suitable for traditional and modern projects. Offers versatile usage and affordable price advantage. Combination of classic lines with modern technology. Wood-look special coating option available. Can be produced in all standard sizes. Wide range of applications with budget-friendly pricing. Fast installation thanks to easy installation feature. Requires no maintenance, can be used for many years.", descriptionFr: "Porte PVC au design classique. Adapté aux projets traditionnels et modernes. Offre une utilisation polyvalente et un avantage de prix abordable. Combinaison de lignes classiques avec technologie moderne. Option de revêtement spécial aspect bois disponible. Peut être produite dans toutes les tailles standard. Large gamme d'applications avec tarification adaptée au budget. Installation rapide grâce à la fonction d'installation facile. Ne nécessite aucun entretien, peut être utilisée pendant de nombreuses années.", descriptionAr: "باب PVC بتصميم كلاسيكي. مناسب للمشاريع التقليدية والحديثة. يوفر استخداماً متعدد الجوانب وميزة سعر معقولة. مزيج من الخطوط الكلاسيكية مع التكنولوجيا الحديثة. خيار طلاء خاص بمظهر خشبي متاح. يمكن إنتاجه بجميع الأحجام القياسية. نطاق واسع من التطبيقات مع تسعير مناسب للميزانية. تركيب سريع بفضل ميزة التركيب السهل. لا يتطلب صيانة، يمكن استخدامه لسنوات عديدة.", features: ["Klasik tasarım", "Çok yönlü", "Dayanıklı", "Uygun fiyat", "Ahşap görünüm", "Bakım gerektirmez"] },
          { code: "OS006", name: "OS006", nameEn: "OS006", nameFr: "OS006", nameAr: "OS006", description: "Dekoratif özellikli PVC kapı. Özel projeler için özelleştirilebilir tasarım. Estetik görünüm ve özel tasarım seçenekleri ile dikkat çeker.", descriptionEn: "Decorative PVC door. Customizable design for special projects. Draws attention with aesthetic appearance and special design options.", descriptionFr: "Porte PVC décorative. Design personnalisable pour projets spéciaux. Attire l'attention avec apparence esthétique et options de design spéciales.", descriptionAr: "باب PVC زخرفي. تصميم قابل للتخصيص للمشاريع الخاصة. يجذب الانتباه بمظهر جمالي وخيارات تصميم خاصة.", features: ["Dekoratif", "Özel tasarım", "Özelleştirilebilir", "Estetik"] },
          { code: "OS007", name: "OS007", nameEn: "OS007", nameFr: "OS007", nameAr: "OS007", description: "Yüksek dayanıklılık sunan PVC kapı. Ağır kullanıma uygun güçlü yapı. Uzun ömürlü ve sağlam malzeme kullanımı ile güvenilir çözüm.", descriptionEn: "High durability PVC door. Strong structure suitable for heavy-duty use. Reliable solution with long-lasting and robust material usage.", descriptionFr: "Porte PVC à haute durabilité. Structure solide adaptée à un usage intensif. Solution fiable avec utilisation de matériaux durables et robustes.", descriptionAr: "باب PVC عالي المتانة. هيكل قوي مناسب للاستخدام المكثف. حل موثوق باستخدام مواد متينة وقوية.", features: ["Yüksek dayanıklılık", "Ağır kullanım", "Güçlü yapı", "Uzun ömür"] },
          { code: "OS008", name: "OS008", nameEn: "OS008", nameFr: "OS008", nameAr: "OS008", description: "Modern ve şık PVC kapı modeli. Çağdaş projeler için ideal seçim. Premium kalite standartlarında üretilmiş, estetik görünüm sunar.", descriptionEn: "Modern and elegant PVC door model. Ideal choice for contemporary projects. Manufactured to premium quality standards, offers aesthetic appearance.", descriptionFr: "Modèle de porte PVC moderne et élégant. Choix idéal pour projets contemporains. Fabriqué selon des normes de qualité premium, offre une apparence esthétique.", descriptionAr: "موديل باب PVC حديث وأنيق. اختيار مثالي للمشاريع المعاصرة. مصنوع بمعايير الجودة المميزة، يوفر مظهراً جمالياً.", features: ["Modern", "Şık", "Çağdaş", "Premium"] },
          { code: "OS009", name: "OS009", nameEn: "OS009", nameFr: "OS009", nameAr: "OS009", description: "Ekonomik çözüm sunan PVC kapı. Bütçe dostu projeler için pratik seçenek. Kaliteli üretim ve geniş kullanım alanı avantajları.", descriptionEn: "Economical PVC door solution. Practical option for budget-friendly projects. Quality production and wide range of application advantages.", descriptionFr: "Solution de porte PVC économique. Option pratique pour projets à petit budget. Production de qualité et avantages de large gamme d'applications.", descriptionAr: "حل باب PVC اقتصادي. خيار عملي للمشاريع المقتصدة. إنتاج عالي الجودة ومزايا نطاق واسع من التطبيقات.", features: ["Ekonomik", "Bütçe dostu", "Kaliteli", "Pratik"] },
          { code: "OS010", name: "OS010", nameEn: "OS010", nameFr: "OS010", nameAr: "OS010", description: "Premium standartlarda PVC kapı. Lüks projeler için özel tasarım. Yüksek kalite malzeme ve özel üretim süreçleri ile üretilmiştir.", descriptionEn: "Premium standard PVC door. Special design for luxury projects. Manufactured with high-quality materials and special production processes.", descriptionFr: "Porte PVC aux standards premium. Design spécial pour projets de luxe. Fabriquée avec matériaux de haute qualité et processus de production spéciaux.", descriptionAr: "باب PVC بمعايير مميزة. تصميم خاص للمشاريع الفاخرة. مصنوع بمواد عالية الجودة وعمليات إنتاج خاصة.", features: ["Premium", "Lüks", "Özel tasarım", "Yüksek kalite"] },
          { code: "OS011", name: "OS011", nameEn: "OS011", nameFr: "OS011", nameAr: "OS011", description: "Klasik çizgilerle modern dokunuş. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı sunar.", descriptionEn: "Classic lines with modern touch. Versatile design that adapts to every project. Offers compatible and flexible usage.", descriptionFr: "Lignes classiques avec touche moderne. Design polyvalent qui s'adapte à chaque projet. Offre une utilisation compatible et flexible.", descriptionAr: "خطوط كلاسيكية بلمسة عصرية. تصميم متعدد الجوانب يتكيف مع كل مشروع. يوفر استخداماً متوافقاً ومرناً.", features: ["Klasik", "Modern", "Çok yönlü", "Uyumlu"] },
          { code: "OS012", name: "OS012", nameEn: "OS012", nameFr: "OS012", nameAr: "OS012", description: "Dekoratif detaylara sahip PVC kapı. Estetik görünüm ve şık tasarım. Detaylı işçilik ve özenli üretim ile öne çıkar.", descriptionEn: "PVC door with decorative details. Aesthetic appearance and elegant design. Stands out with detailed craftsmanship and careful production.", descriptionFr: "Porte PVC avec détails décoratifs. Apparence esthétique et design élégant. Se démarque par artisanat détaillé et production soignée.", descriptionAr: "باب PVC بتفاصيل زخرفية. مظهر جمالي وتصميم أنيق. يتميز بحرفية مفصلة وإنتاج دقيق.", features: ["Dekoratif", "Estetik", "Detaylı", "Şık"] },
          { code: "OS013", name: "OS013", nameEn: "OS013", nameFr: "OS013", nameAr: "OS013", description: "Yüksek performanslı PVC kapı. Zorlu koşullara dayanıklı yapı. Güvenilir ve sağlam malzeme kullanımı ile uzun ömür garantisi.", descriptionEn: "High-performance PVC door. Durable structure resistant to harsh conditions. Long life guarantee with reliable and robust material usage.", descriptionFr: "Porte PVC haute performance. Structure durable résistante aux conditions difficiles. Garantie de longue durée avec utilisation de matériaux fiables et robustes.", descriptionAr: "باب PVC عالي الأداء. هيكل متين مقاوم للظروف القاسية. ضمان عمر طويل باستخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güvenilir", "Sağlam"] },
          { code: "OS014", name: "OS014", nameEn: "OS014", nameFr: "OS014", nameAr: "OS014", description: "Minimalist tasarımlı PVC kapı. Sade ve şık görünüm. Modern mimari projeler için ideal seçim, estetik değer yüksek.", descriptionEn: "Minimalist design PVC door. Simple and elegant appearance. Ideal choice for modern architectural projects, high aesthetic value.", descriptionFr: "Porte PVC au design minimaliste. Apparence simple et élégante. Choix idéal pour projets architecturaux modernes, haute valeur esthétique.", descriptionAr: "باب PVC بتصميم بسيط. مظهر بسيط وأنيق. اختيار مثالي للمشاريع المعمارية الحديثة، قيمة جمالية عالية.", features: ["Minimalist", "Sade", "Şık", "Modern"] },
          { code: "OS015", name: "OS015", nameEn: "OS015", nameFr: "OS015", nameAr: "OS015", description: "Ekonomik ve kaliteli PVC kapı. Geniş kullanım alanı ve pratik çözüm. Toplu konut ve ticari projeler için uygun seçenek.", descriptionEn: "Economical and quality PVC door. Wide range of applications and practical solution. Suitable option for mass housing and commercial projects.", descriptionFr: "Porte PVC économique et de qualité. Large gamme d'applications et solution pratique. Option adaptée pour projets de logements collectifs et commerciaux.", descriptionAr: "باب PVC اقتصادي وعالي الجودة. نطاق واسع من التطبيقات وحل عملي. خيار مناسب لمشاريع الإسكان الجماعي والتجارية.", features: ["Ekonomik", "Kaliteli", "Geniş kullanım", "Pratik"] },
          { code: "OS016", name: "OS016", nameEn: "OS016", nameFr: "OS016", nameAr: "OS016", description: "Premium kalite standartlarında PVC kapı. Üst segment projeler için özel üretim. Lüks görünüm ve yüksek kalite garantisi.", descriptionEn: "Premium quality standard PVC door. Special production for high-end segment projects. Luxury appearance and high quality guarantee.", descriptionFr: "Porte PVC aux normes de qualité premium. Production spéciale pour projets de segment haut de gamme. Apparence de luxe et garantie de haute qualité.", descriptionAr: "باب PVC بمعايير الجودة المميزة. إنتاج خاص لمشاريع القطاع الراقي. مظهر فاخر وضمان جودة عالية.", features: ["Premium", "Yüksek kalite", "Lüks", "Özel"] },
          { code: "OS017", name: "OS017", nameEn: "OS017", nameFr: "OS017", nameAr: "OS017", description: "Klasik ve modern karışımı PVC kapı. Her tarza uyumlu tasarım. Çok yönlü kullanım imkanı ve esnek proje uyumluluğu.", descriptionEn: "Classic and modern blend PVC door. Design compatible with every style. Versatile usage and flexible project compatibility.", descriptionFr: "Porte PVC mélange classique et moderne. Design compatible avec tous les styles. Utilisation polyvalente et compatibilité de projet flexible.", descriptionAr: "باب PVC مزيج كلاسيكي وحديث. تصميم متوافق مع كل نمط. استخدام متعدد الجوانب وتوافق مشروع مرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS018", name: "OS018", nameEn: "OS018", nameFr: "OS018", nameAr: "OS018", description: "Dekoratif özellikleri öne çıkan PVC kapı. Özel projeler için estetik çözüm. Öne çıkan tasarım ve değerli görünüm.", descriptionEn: "PVC door with prominent decorative features. Aesthetic solution for special projects. Outstanding design and valuable appearance.", descriptionFr: "Porte PVC aux caractéristiques décoratives proéminentes. Solution esthétique pour projets spéciaux. Design remarquable et apparence précieuse.", descriptionAr: "باب PVC بميزات زخرفية بارزة. حل جمالي للمشاريع الخاصة. تصميم بارز ومظهر قيم.", features: ["Dekoratif", "Özel", "Estetik", "Öne çıkan"] },
          { code: "OS019", name: "OS019", nameEn: "OS019", nameFr: "OS019", nameAr: "OS019", description: "Yüksek dayanıklılık ve performans. Endüstriyel kullanım için uygun güçlü yapı. Dayanıklı malzeme ve güvenilir üretim.", descriptionEn: "High durability and performance. Strong structure suitable for industrial use. Durable material and reliable production.", descriptionFr: "Haute durabilité et performance. Structure solide adaptée à un usage industriel. Matériau durable et production fiable.", descriptionAr: "متانة وأداء عاليان. هيكل قوي مناسب للاستخدام الصناعي. مادة متينة وإنتاج موثوق.", features: ["Dayanıklı", "Yüksek performans", "Endüstriyel", "Güçlü"] },
          { code: "OS020", name: "OS020", nameEn: "OS020", nameFr: "OS020", nameAr: "OS020", description: "Modern mimariye uygun PVC kapı. Çağdaş tasarım ve mimari uyum. Tasarım odaklı projeler için ideal seçim.", descriptionEn: "PVC door suitable for modern architecture. Contemporary design and architectural harmony. Ideal choice for design-focused projects.", descriptionFr: "Porte PVC adaptée à l'architecture moderne. Design contemporain et harmonie architecturale. Choix idéal pour projets axés sur le design.", descriptionAr: "باب PVC مناسب للهندسة المعمارية الحديثة. تصميم معاصر وتناغم معماري. اختيار مثالي للمشاريع المرتكزة على التصميم.", features: ["Modern", "Çağdaş", "Mimari", "Tasarım"] },
          { code: "OS021", name: "OS021", nameEn: "OS021", nameFr: "OS021", nameAr: "OS021", description: "Ekonomik çözüm, kaliteli üretim. Bütçe dostu projeler için ideal seçenek. Geniş kullanım alanı ve pratik avantajlar.", descriptionEn: "Economical solution, quality production. Ideal option for budget-friendly projects. Wide range of applications and practical advantages.", descriptionFr: "Solution économique, production de qualité. Option idéale pour projets à petit budget. Large gamme d'applications et avantages pratiques.", descriptionAr: "حل اقتصادي، إنتاج عالي الجودة. خيار مثالي للمشاريع المقتصدة. نطاق واسع من التطبيقات ومزايا عملية.", features: ["Ekonomik", "Kaliteli", "Bütçe dostu", "İdeal"] },
          { code: "OS022", name: "OS022", nameEn: "OS022", nameFr: "OS022", nameAr: "OS022", description: "Premium standartlarda üretilmiş PVC kapı. Lüks projeler için özel üretim. Yüksek standart ve özel işçilik ile üretilmiştir.", descriptionEn: "PVC door manufactured to premium standards. Special production for luxury projects. Manufactured with high standards and special craftsmanship.", descriptionFr: "Porte PVC fabriquée selon des normes premium. Production spéciale pour projets de luxe. Fabriquée avec normes élevées et artisanat spécial.", descriptionAr: "باب PVC مصنوع بمعايير مميزة. إنتاج خاص للمشاريع الفاخرة. مصنوع بمعايير عالية وحرفية خاصة.", features: ["Premium", "Lüks", "Yüksek standart", "Özel"] },
          { code: "OS023", name: "OS023", nameEn: "OS023", nameFr: "OS023", nameAr: "OS023", description: "Klasik dokunuşlu modern PVC kapı. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı.", descriptionEn: "Modern PVC door with classic touch. Versatile design that adapts to every project. Compatible and flexible usage.", descriptionFr: "Porte PVC moderne avec touche classique. Design polyvalent qui s'adapte à chaque projet. Utilisation compatible et flexible.", descriptionAr: "باب PVC حديث بلمسة كلاسيكية. تصميم متعدد الجوانب يتكيف مع كل مشروع. استخدام متوافق ومرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS024", name: "OS024", nameEn: "OS024", nameFr: "OS024", nameAr: "OS024", description: "Dekoratif detaylarıyla öne çıkan PVC kapı. Estetik değer yüksek tasarım. Öne çıkan görünüm ve değerli işçilik.", descriptionEn: "PVC door standing out with decorative details. High aesthetic value design. Outstanding appearance and valuable craftsmanship.", descriptionFr: "Porte PVC se démarquant par détails décoratifs. Design à haute valeur esthétique. Apparence remarquable et artisanat précieux.", descriptionAr: "باب PVC يتميز بتفاصيله الزخرفية. تصميم بقيمة جمالية عالية. مظهر بارز وحرفية قيّمة.", features: ["Dekoratif", "Estetik", "Öne çıkan", "Değerli"] },
          { code: "OS025", name: "OS025", nameEn: "OS025", nameFr: "OS025", nameAr: "OS025", description: "Yüksek performans ve dayanıklılık. Zorlu koşullara uygun güçlü yapı. Güvenilir ve sağlam malzeme kullanımı.", descriptionEn: "High performance and durability. Strong structure suitable for harsh conditions. Reliable and robust material usage.", descriptionFr: "Haute performance et durabilité. Structure solide adaptée aux conditions difficiles. Utilisation de matériaux fiables et robustes.", descriptionAr: "أداء ومتانة عاليان. هيكل قوي مناسب للظروف القاسية. استخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güçlü", "Güvenilir"] },
          { code: "OS026", name: "OS026", nameEn: "OS026", nameFr: "OS026", nameAr: "OS026", description: "Minimalist ve şık tasarım. Sade görünüm, yüksek kalite standartları. Modern projeler için ideal seçim.", descriptionEn: "Minimalist and elegant design. Simple appearance, high quality standards. Ideal choice for modern projects.", descriptionFr: "Design minimaliste et élégant. Apparence simple, normes de qualité élevées. Choix idéal pour projets modernes.", descriptionAr: "تصميم بسيط وأنيق. مظهر بسيط، معايير جودة عالية. اختيار مثالي للمشاريع الحديثة.", features: ["Minimalist", "Şık", "Sade", "Kaliteli"] }
        ]
      },
    },
    delivery: {
      title: "Services de Livraison",
      subtitle: "Livraison Fiable à Travers les Régions",
      description: "Livraison rapide à travers l'Europe et le Moyen-Orient",
    },
    process: {
      title: "Processus de Commande et Production",
      subtitle: "Solutions Professionnelles pour l'Export de Portes vers l'Afrique",
      steps: [
        { 
          number: "1", 
          title: "Analyse des Besoins", 
          description: "Nous analysons en détail les besoins de votre projet. Nous collectons toutes les informations incluant le type de porte, la quantité, les dimensions et le lieu de livraison. Nous évaluons nos solutions logistiques spécialisées pour l'export de portes vers l'Afrique." 
        },
        { 
          number: "2", 
          title: "Préparation du Devis", 
          description: "Nous préparons un devis détaillé et personnalisé pour la vente de portes depuis la Turquie. Nous offrons des prix compétitifs pour l'approvisionnement en portes en gros. Notre devis inclut le délai de production, les conditions de paiement et les détails logistiques." 
        },
        { 
          number: "3", 
          title: "Fabrication", 
          description: "Après confirmation de la commande, nous commençons la production de portes en acier, portes PVC, portes laquées ou portes mélaminées. Nous maintenons les standards à chaque étape avec nos processus de contrôle qualité. Nous emballons de manière appropriée pour l'export de portes vers l'Afrique." 
        },
        { 
          number: "4", 
          title: "Logistique & Livraison", 
          description: "Après l'achèvement de la production, nous livrons vos portes en Afrique ou dans le pays cible via notre réseau logistique sécurisé. Nous gérons toutes les procédures douanières et la documentation." 
        },
      ],
      cta: {
        title: "Obtenez un Devis pour Votre Projet",
        description: "Contactez notre équipe professionnelle pour l'export de portes vers l'Afrique. Nous offrons des solutions personnalisées pour l'approvisionnement en portes en gros depuis la Turquie.",
        button: "Nous Contacter"
      }
    },
    references: {
      title: "Nos Références",
      subtitle: "Projets Réalisés avec Succès",
    },
    faq: {
      title: "Questions Fréquemment Posées",
      subtitle: "Ce Que Vous Voulez Savoir sur l'Export de Portes vers l'Afrique",
      items: [
        { 
          question: "Quelle est la quantité minimale de commande?", 
          answer: "La quantité minimale de commande pour l'export de portes vers l'Afrique varie selon le type de porte. Généralement, les commandes de 50 unités et plus sont acceptées pour l'approvisionnement en portes en gros. Pour des quantités plus petites, veuillez nous contacter." 
        },
        { 
          question: "Quel est le délai de livraison?", 
          answer: "Le délai de livraison pour la production standard est de 3 à 6 semaines. Pour les tailles et designs personnalisés, cette période peut s'étendre à 6-8 semaines. Nous avons des options de production rapide pour les commandes urgentes. Le temps de logistique vers l'Afrique est de 1-2 semaines supplémentaires." 
        },
        { 
          question: "Quels modes de paiement acceptez-vous?", 
          answer: "Nous acceptons des modes de paiement sécurisés tels que T/T (virement télégraphique), L/C (lettre de crédit) et lettres de crédit pour la vente de portes depuis la Turquie. Les conditions de paiement varient selon la taille de la commande. Veuillez remplir le formulaire de devis pour des informations détaillées." 
        },
        { 
          question: "Pouvez-vous envoyer des échantillons?", 
          answer: "Oui, nous pouvons envoyer des échantillons aux acheteurs sérieux. Le coût de l'échantillon et les frais d'expédition sont à la charge de l'acheteur. Si une grande commande est passée après la commande d'échantillon, le coût de l'échantillon est déduit de la commande principale." 
        },
        { 
          question: "Dans quels pays livrez-vous?", 
          answer: "En tant qu'OBSAN SUARL, nous exportons des portes vers de nombreux pays d'Afrique. Nous servons particulièrement intensivement les pays africains francophones et arabophones. Nous livrons également à d'autres marchés internationaux. Veuillez nous contacter pour des informations détaillées." 
        },
        { 
          question: "Pouvez-vous faire des tailles et designs personnalisés?", 
          answer: "Oui, nous pouvons faire des tailles et designs personnalisés pour vos projets. La production en tailles personnalisées est disponible pour les portes laquées, PVC, mélaminées et panneau. Notre équipe technique proposera la solution la plus adaptée selon les besoins de votre projet." 
        },
      ],
      moreInfo: "Besoin de plus d'informations?",
      moreInfoDesc: "Contactez notre équipe d'experts pour une consultation détaillée",
      getInTouch: "Nous Contacter",
    },
    footer: {
      company: "OBSAN SUARL",
      rights: "Tous droits réservés",
      contact: "Contact",
      followUs: "Nous Suivre",
      about: "À Propos",
      aboutDesc: "Export de portes de la Turquie vers l'Afrique. Fabrication de portes en acier, PVC, laquées, mélaminées et panneau de haute qualité.",
      quickLinks: "Liens Rapides",
      products: "Produits",
      services: "Nos Services",
      address: "Adresse",
      addressValue: "Haci Halil Mah. Ismetpasa Cad. Yilmaz Is Hani, Étage:1 Bureau:2, 41420 Gebze/Kocaeli, Turquie",
      phone: "Téléphone",
      email: "E-mail",
      workingHours: "Heures de Travail",
      workingHoursValue: "Lundi - Vendredi: 09:00 - 18:00",
      certificates: "Certificats",
      iso: "ISO 9001",
      ce: "Certifié CE",
      socialMedia: "Réseaux Sociaux",
    },
    quote: {
      title: "Obtenez Votre Devis Personnalisé",
      description: "Contactez notre équipe d'experts pour discuter de vos besoins spécifiques et obtenir un devis adapté à votre projet.",
      email: "E-mail",
      phone: "Téléphone",
      whatsapp: "WhatsApp",
      whatsappDesc: "Support rapide disponible",
      form: {
        fullName: "Nom Complet *",
        email: "E-mail *",
        phone: "Numéro de Téléphone *",
        company: "Entreprise",
        productType: "Type de Produit *",
        selectProduct: "Sélectionnez un type de produit",
        quantity: "Quantité Estimée",
        quantityPlaceholder: "ex: 100 unités",
        message: "Détails Supplémentaires",
        messagePlaceholder: "Parlez-nous plus de votre projet...",
        sending: "Envoi en cours...",
        send: "Envoyer la Demande de Devis",
        chatWhatsApp: "Discuter sur WhatsApp",
        success: "Merci ! Votre demande de devis a été envoyée. Nous vous répondrons bientôt.",
        whatsappMessage: "Bonjour OBSAN, je suis intéressé par un devis pour ${productType}. Mon nom est ${name}.",
        whatsappMessageFallback: "Bonjour OBSAN, je suis intéressé par un devis pour vos produits. Mon nom est ${name}.",
        country: "Pays",
      },
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      whyUs: "عنا",
      products: "المنتجات",
      delivery: "التوصيل",
      process: "العملية",
      references: "المراجع",
      faq: "الأسئلة الشائعة",
      quote: "احصل على عرض أسعار",
    },
    hero: {
      title: "OBSAN SUARL",
      subtitle: "تصدير الأبواب من تركيا إلى أفريقيا",
      cta: "احصل على عرض أسعار",
      description: "تصنيع وتصدير الأبواب الفولاذية وPVC واللاكيه والميلامين. حلول احترافية لتوريد الأبواب بالجملة إلى أفريقيا.",
      whatsappCta: "التواصل عبر واتساب",
      whatsappLink: "https://wa.me/905321307143",
      stats: [
        { value: "5+", label: "سنة خبرة" },
        { value: "10+", label: "دولة تصدير" },
        { value: "100+", label: "مشروع مكتمل" }
      ]
    },
    home: {
      africaExport: {
        title: "تصدير الأبواب إلى أفريقيا",
        description: "كـ OBSAN SUARL، نصدر أبواباً عالية الجودة المصنعة في تركيا إلى البلدان الأفريقية والخارج. نقدم حلولاً للمقاولين وشركات البناء والموزعين بالجملة.",
        features: [
          "حلول لوجستية متخصصة لأفريقيا",
          "أسعار تنافسية لتوريد الأبواب بالجملة",
          "إنتاج وتسليم سريع",
          "حلول مخصصة حسب المشروع"
        ],
        cta: "عرض منتجاتنا",
        statsTitle: "OBSAN SUARL بالأرقام",
        stats: [
          { value: "5+", label: "سنة خبرة" },
          { value: "10+", label: "دولة تصدير" },
          { value: "100+", label: "مشروع مكتمل" }
        ]
      },
      productsPreview: {
        title: "منتجاتنا",
        subtitle: "مجموعة واسعة من المنتجات لكل مشروع",
        learnMore: "معرفة المزيد",
        viewAll: "عرض جميع المنتجات",
        items: [
          { name: "أبواب لاكيه", description: "تصميم حديث ومظهر لامع" },
          { name: "أبواب PVC", description: "حلول متينة واقتصادية" },
          { name: "أبواب ميلامين", description: "ملمس خشبي، مقاومة للخدوش" },
          { name: "أبواب بانل", description: "خطوط كلاسيكية وحديثة" }
        ]
      }
    },
    whyUs: {
      title: "لماذا تختارنا؟",
      subtitle: "مرادف للجودة والموثوقية",
      items: [
        { title: "جودة عالية", description: "+20 سنة من خبرة الصناعة" },
        { title: "توصيل سريع", description: "شحن سريع وآمن" },
        { title: "فريق خبير", description: "استشاريون محترفون جاهزون للمساعدة" },
        { title: "أسعار تنافسية", description: "أفضل أسعار السوق مضمونة" },
      ],
    },
    about: {
      title: "عنا",
      subtitle: "OBSAN SUARL - شريك موثوق في تصدير الأبواب إلى أفريقيا",
      story: {
        title: "قصتنا",
        paragraphs: [
          "كـ OBSAN SUARL، نقوم بتصنيع وتصدير الأبواب في تركيا لأكثر من 20 عاماً. مع التركيز بشكل خاص على السوق الأفريقي، نقدم أبواباً عالية الجودة من الفولاذ وPVC واللاكيه والميلامين والبانل لعملائنا.",
          "نقدم حلولاً للمقاولين وشركات البناء والموزعين بالجملة. نوفر الأبواب للمشاريع السكنية والفندقية والمكتبية والتجارية.",
          "يقدم فريقنا المتخصص في تصدير الأبواب إلى أفريقيا حلولاً مخصصة حسب متطلبات كل مشروع. مع شبكة اللوجستيات الموثوقة لدينا والبنية التحتية للإنتاج عالي الجودة، نهدف إلى تقديم أفضل خدمة لعملائنا."
        ]
      },
      values: {
        title: "قيمنا",
        items: [
          { title: "الجودة", description: "إنتاج معتمد ISO 9001 و CE" },
          { title: "الموثوقية", description: "تسليم في الوقت المحدد وجودة مضمونة" },
          { title: "التركيز على العملاء", description: "حلول مخصصة لكل مشروع" },
          { title: "الابتكار", description: "تقنيات إنتاج تتطور باستمرار" }
        ]
      },
      whyChoose: {
        title: "لماذا تختار OBSAN SUARL?",
        items: [
          { title: "أكثر من 20 عاماً من الخبرة", description: "سنوات طويلة من الخبرة في تصدير الأبواب إلى أفريقيا" },
          { title: "مجموعة واسعة من المنتجات", description: "أبواب لاكيه وPVC وميلامين وبانل والمزيد" },
          { title: "أسعار تنافسية", description: "أفضل الأسعار لتوريد الأبواب بالجملة" },
          { title: "إنتاج سريع", description: "تسليم خلال 3-6 أسابيع" },
          { title: "لوجستيات آمنة", description: "حلول لوجستية متخصصة لأفريقيا" },
          { title: "دعم المشاريع", description: "استشارة تقنية وإدارة المشاريع" }
        ]
      },
      cta: {
        title: "احصل على عرض أسعار لمشروعك",
        description: "تواصل مع فريقنا المحترف لتصدير الأبواب إلى أفريقيا",
        button: "تواصل معنا"
      }
    },
    products: {
      title: "منتجاتنا",
      subtitle: "نطاق واسع من الحلول",
      learnMore: "معرفة المزيد",
      items: [
        { name: "أبواب فولاذية", description: "متينة وآمنة" },
        { name: "أبواب الألومنيوم", description: "حديثة وأنيقة" },
        { name: "أبواب زجاجية", description: "متطورة واحترافية" },
        { name: "مكونات النظام", description: "جميع الأجزاء في المخزون" },
      ],
      detail: {
        keyFeatures: "الميزات الرئيسية",
        applications: "مجالات التطبيق",
        qualityFeatures: [
          { title: "جودة معتمدة", description: "إنتاج معتمد ISO 9001 & CE" },
          { title: "أكثر من 20 عاماً من الخبرة", description: "خبرة رائدة في الصناعة" },
          { title: "تسليم سريع", description: "وقت التسليم 2-4 أسابيع" },
          { title: "ضمان كامل", description: "ضمان شامل لمدة سنتين" },
        ],
        products: [
          {
            features: [
              "بناء فولاذي عالي الأمان",
              "مقاوم للحريق حتى 120 دقيقة",
              "أبعاد مخصصة متاحة",
              "أنظمة قفل متعددة",
              "معتمد CE",
            ],
            applications: ["المنشآت الصناعية", "المستودعات", "المباني التجارية", "المناطق الأمنية"],
          },
          {
            features: [
              "خفيف الوزن ومتين",
              "مقاوم للتآكل",
              "عزل حراري",
              "جماليات حديثة",
              "صيانة منخفضة",
            ],
            applications: ["مباني المكاتب", "مراكز التسوق", "الفنادق", "المجمعات السكنية"],
          },
          {
            features: [
              "زجاج أمان مقسى",
              "موفر للطاقة",
              "عزل صوتي",
              "حماية من الأشعة فوق البنفسجية",
              "تشطيب فاخر",
            ],
            applications: ["المكاتب المؤسسية", "متاجر التجزئة", "المطاعم", "المنشآت الطبية"],
          },
          {
            features: [
              "تكامل نظام كامل",
              "مواد عالية الجودة",
              "متوافق مع جميع أنواع الأبواب",
              "تركيب سهل",
              "ضمان ممتد",
            ],
            applications: ["إطارات الأبواب", "المفصلات والأقفال", "أنظمة الأتمتة", "التحكم في الوصول"],
          },
        ],
        cta: {
          title: "هل تحتاج إلى حلول مخصصة؟",
          description: "يمكن لفريقنا الخبير تصميم وتصنيع منتجات مصممة خصيصاً لمتطلباتك",
          button: "اتصل بفريقنا",
        },
      },
      categories: {
        title: "أبواب PVC",
        subtitle: "موديلات أبواب PVC عالية الجودة",
        description: "أبواب PVC متينة وسهلة التنظيف واقتصادية، تُستخدم على نطاق واسع للأبواب الداخلية ومشاريع الإسكان والمشاريع الكبيرة. مجموعة واسعة من الموديلات لتصدير الأبواب إلى أفريقيا.",
        footerNote:
          "يمكن تصنيع جميع موديلات الأبواب PVC لدينا بمقاسات وألوان وإكسسوارات مختلفة حسب احتياجات مشروعكم. تواصلوا معنا للحصول على كتالوج مفصل وعرض سعر.",
        modelsTitle: "موديلات الأبواب",
        models: [
          { code: "Karvin PVC 025", name: "Karvin PVC 025", nameEn: "Karvin PVC 025", nameFr: "Karvin PVC 025", nameAr: "Karvin PVC 025", description: "Yüksek kaliteli PVC kapı modeli. Daire içi oda kapıları için ideal çözüm.", descriptionEn: "High-quality PVC door model. Ideal solution for interior room doors.", descriptionFr: "Modèle de porte PVC de haute qualité. Solution idéale pour les portes intérieures.", descriptionAr: "موديل باب PVC عالي الجودة. حل مثالي للأبواب الداخلية.", features: ["Yüksek kalite", "Dayanıklı", "Kolay montaj", "Ekonomik"] },
          { code: "OS002", name: "OS002", nameEn: "OS002", nameFr: "OS002", nameAr: "OS002", description: "Otel ve ofis projeleri için özel tasarlanmış PVC kapı modeli. Gelişmiş ses yalıtımı özelliği ile konforlu kullanım sağlar. Premium kalite standartlarında üretilmiştir. Özel dolgu malzemesi sayesinde 35 dB'ye kadar ses yalıtımı sağlar. Otel odaları, ofis bölmeleri ve toplantı salonları için idealdir. Yangına dayanıklı özellikleri ile güvenlik standartlarına uygundur. Profesyonel montaj ekibi ile hızlı kurulum imkanı sunar. Tüm renk seçenekleri mevcuttur.", descriptionEn: "PVC door model specially designed for hotel and office projects. Provides comfortable use with advanced sound insulation feature. Manufactured to premium quality standards. Provides sound insulation up to 35 dB thanks to special filling material. Ideal for hotel rooms, office partitions and meeting rooms. Suitable for safety standards with fire-resistant features. Offers fast installation with professional installation team. All color options available.", descriptionFr: "Modèle de porte PVC spécialement conçu pour les projets hôteliers et de bureaux. Offre un confort d'utilisation avec la fonction d'isolation phonique avancée. Fabriqué selon des normes de qualité premium. Offre une isolation phonique jusqu'à 35 dB grâce au matériau de remplissage spécial. Idéal pour les chambres d'hôtel, les cloisons de bureau et les salles de réunion. Adapté aux normes de sécurité avec caractéristiques résistantes au feu. Offre une installation rapide avec équipe d'installation professionnelle. Toutes les options de couleur disponibles.", descriptionAr: "موديل باب PVC مصمم خصيصاً لمشاريع الفنادق والمكاتب. يوفر استخداماً مريحاً مع ميزة العزل الصوتي المتقدمة. مصنوع بمعايير الجودة المميزة. يوفر عزل صوتي يصل إلى 35 ديسيبل بفضل مادة الحشو الخاصة. مثالي لغرف الفنادق وأقسام المكاتب وقاعات الاجتماعات. مناسب لمعايير السلامة مع ميزات مقاومة للحريق. يوفر تركيباً سريعاً مع فريق تركيب محترف. جميع خيارات الألوان متاحة.", features: ["Modern tasarım", "Şık görünüm", "Ses yalıtımı", "Premium kalite", "Yangına dayanıklı", "35 dB izolasyon"] },
          { code: "OS003", name: "OS003", nameEn: "OS003", nameFr: "OS003", nameAr: "OS003", description: "Ekonomik ve dayanıklı PVC kapı modeli. Toplu konut projeleri için ideal çözüm. Hızlı üretim süresi ve geniş kullanım alanı sunar. Büyük projeler için özel fiyatlandırma imkanı. Standart ölçülerde stoktan teslim seçeneği mevcuttur. Toplu konut, sosyal konut ve öğrenci yurtları için uygun çözüm. Minimum 50 adet siparişlerde ek indirim avantajı. Hızlı üretim hattı sayesinde 2-3 hafta içinde teslim edilebilir. Tüm standart renklerde üretim yapılabilir.", descriptionEn: "Economical and durable PVC door model. Ideal solution for mass housing projects. Offers fast production time and wide range of applications. Special pricing opportunity for large projects. Standard size stock delivery option available. Suitable solution for mass housing, social housing and student dormitories. Additional discount advantage on minimum 50 unit orders. Can be delivered within 2-3 weeks thanks to fast production line. Can be produced in all standard colors.", descriptionFr: "Modèle de porte PVC économique et durable. Solution idéale pour les projets de logements collectifs. Offre un temps de production rapide et une large gamme d'applications. Possibilité de tarification spéciale pour les grands projets. Option de livraison en stock en tailles standard disponible. Solution adaptée pour logements collectifs, logements sociaux et résidences étudiantes. Avantage de remise supplémentaire sur commandes minimum de 50 unités. Peut être livré dans 2-3 semaines grâce à la ligne de production rapide. Peut être produit dans toutes les couleurs standard.", descriptionAr: "موديل باب PVC اقتصادي ومتين. حل مثالي لمشاريع الإسكان الجماعي. يوفر وقت إنتاج سريع ونطاقاً واسعاً من التطبيقات. إمكانية تسعير خاص للمشاريع الكبيرة. خيار التسليم من المخزون بأحجام قياسية متاح. حل مناسب للإسكان الجماعي والإسكان الاجتماعي ومساكن الطلاب. ميزة خصم إضافي على طلبات بحد أدنى 50 وحدة. يمكن تسليمه خلال 2-3 أسابيع بفضل خط الإنتاج السريع. يمكن إنتاجه بجميع الألوان القياسية.", features: ["Ekonomik", "Dayanıklı", "Hızlı üretim", "Geniş kullanım", "Toplu sipariş indirimi", "Stoktan teslim"] },
          { code: "OS004", name: "OS004", nameEn: "OS004", nameFr: "OS004", nameAr: "OS004", description: "Premium kaliteli PVC kapı. Rezidans ve üst segment projeler için özel tasarım. Gelişmiş ısı ve ses yalıtımı özellikleri ile uzun ömürlü kullanım garantisi. Özel lüks kaplama ve dekoratif detaylar ile estetik görünüm. Yüksek kaliteli PVC profiller ve çoklu cam sistemi ile enerji verimliliği sağlar. Özel ölçü ve renk seçenekleri ile projenize tam uyum. 10 yıl garanti kapsamında üretilmiştir. Profesyonel montaj ve teknik destek hizmeti dahildir.", descriptionEn: "Premium quality PVC door. Special design for residential and high-end projects. Long-lasting use guarantee with advanced heat and sound insulation features. Aesthetic appearance with special luxury coating and decorative details. Provides energy efficiency with high-quality PVC profiles and multi-glass system. Full compatibility with your project with custom size and color options. Manufactured with 10-year warranty coverage. Professional installation and technical support service included.", descriptionFr: "Porte PVC de qualité premium. Design spécial pour projets résidentiels et haut de gamme. Garantie d'utilisation durable avec caractéristiques d'isolation thermique et phonique avancées. Apparence esthétique avec revêtement de luxe spécial et détails décoratifs. Offre efficacité énergétique avec profils PVC de haute qualité et système multi-vitres. Compatibilité totale avec votre projet avec options de taille et couleur personnalisées. Fabriquée avec couverture de garantie de 10 ans. Service d'installation professionnelle et support technique inclus.", descriptionAr: "باب PVC بجودة مميزة. تصميم خاص للمشاريع السكنية والراقية. ضمان استخدام طويل الأمد مع ميزات عزل حراري وصوتي متقدمة. مظهر جمالي مع طلاء فاخر خاص وتفاصيل زخرفية. يوفر كفاءة الطاقة مع مقاطع PVC عالية الجودة ونظام زجاج متعدد. توافق كامل مع مشروعك مع خيارات حجم ولون مخصصة. مصنوع مع تغطية ضمان لمدة 10 سنوات. خدمة التركيب الاحترافية والدعم الفني مشمولة.", features: ["Premium kalite", "Lüks görünüm", "Gelişmiş yalıtım", "Uzun ömür", "10 yıl garanti", "Enerji verimli"] },
          { code: "OS005", name: "OS005", nameEn: "OS005", nameFr: "OS005", nameAr: "OS005", description: "Klasik tasarımlı PVC kapı. Geleneksel ve modern projeler için uygundur. Çok yönlü kullanım imkanı ve uygun fiyat avantajı sunar. Klasik çizgilerle modern teknolojinin birleşimi. Ahşap görünümlü özel kaplama seçeneği mevcuttur. Tüm standart ölçülerde üretilebilir. Bütçe dostu fiyatlandırma ile geniş kullanım alanı. Kolay montaj özelliği sayesinde hızlı kurulum. Bakım gerektirmez, uzun yıllar kullanılabilir.", descriptionEn: "Classic design PVC door. Suitable for traditional and modern projects. Offers versatile usage and affordable price advantage. Combination of classic lines with modern technology. Wood-look special coating option available. Can be produced in all standard sizes. Wide range of applications with budget-friendly pricing. Fast installation thanks to easy installation feature. Requires no maintenance, can be used for many years.", descriptionFr: "Porte PVC au design classique. Adapté aux projets traditionnels et modernes. Offre une utilisation polyvalente et un avantage de prix abordable. Combinaison de lignes classiques avec technologie moderne. Option de revêtement spécial aspect bois disponible. Peut être produite dans toutes les tailles standard. Large gamme d'applications avec tarification adaptée au budget. Installation rapide grâce à la fonction d'installation facile. Ne nécessite aucun entretien, peut être utilisée pendant de nombreuses années.", descriptionAr: "باب PVC بتصميم كلاسيكي. مناسب للمشاريع التقليدية والحديثة. يوفر استخداماً متعدد الجوانب وميزة سعر معقولة. مزيج من الخطوط الكلاسيكية مع التكنولوجيا الحديثة. خيار طلاء خاص بمظهر خشبي متاح. يمكن إنتاجه بجميع الأحجام القياسية. نطاق واسع من التطبيقات مع تسعير مناسب للميزانية. تركيب سريع بفضل ميزة التركيب السهل. لا يتطلب صيانة، يمكن استخدامه لسنوات عديدة.", features: ["Klasik tasarım", "Çok yönlü", "Dayanıklı", "Uygun fiyat", "Ahşap görünüm", "Bakım gerektirmez"] },
          { code: "OS006", name: "OS006", nameEn: "OS006", nameFr: "OS006", nameAr: "OS006", description: "Dekoratif özellikli PVC kapı. Özel projeler için özelleştirilebilir tasarım. Estetik görünüm ve özel tasarım seçenekleri ile dikkat çeker.", descriptionEn: "Decorative PVC door. Customizable design for special projects. Draws attention with aesthetic appearance and special design options.", descriptionFr: "Porte PVC décorative. Design personnalisable pour projets spéciaux. Attire l'attention avec apparence esthétique et options de design spéciales.", descriptionAr: "باب PVC زخرفي. تصميم قابل للتخصيص للمشاريع الخاصة. يجذب الانتباه بمظهر جمالي وخيارات تصميم خاصة.", features: ["Dekoratif", "Özel tasarım", "Özelleştirilebilir", "Estetik"] },
          { code: "OS007", name: "OS007", nameEn: "OS007", nameFr: "OS007", nameAr: "OS007", description: "Yüksek dayanıklılık sunan PVC kapı. Ağır kullanıma uygun güçlü yapı. Uzun ömürlü ve sağlam malzeme kullanımı ile güvenilir çözüm.", descriptionEn: "High durability PVC door. Strong structure suitable for heavy-duty use. Reliable solution with long-lasting and robust material usage.", descriptionFr: "Porte PVC à haute durabilité. Structure solide adaptée à un usage intensif. Solution fiable avec utilisation de matériaux durables et robustes.", descriptionAr: "باب PVC عالي المتانة. هيكل قوي مناسب للاستخدام المكثف. حل موثوق باستخدام مواد متينة وقوية.", features: ["Yüksek dayanıklılık", "Ağır kullanım", "Güçlü yapı", "Uzun ömür"] },
          { code: "OS008", name: "OS008", nameEn: "OS008", nameFr: "OS008", nameAr: "OS008", description: "Modern ve şık PVC kapı modeli. Çağdaş projeler için ideal seçim. Premium kalite standartlarında üretilmiş, estetik görünüm sunar.", descriptionEn: "Modern and elegant PVC door model. Ideal choice for contemporary projects. Manufactured to premium quality standards, offers aesthetic appearance.", descriptionFr: "Modèle de porte PVC moderne et élégant. Choix idéal pour projets contemporains. Fabriqué selon des normes de qualité premium, offre une apparence esthétique.", descriptionAr: "موديل باب PVC حديث وأنيق. اختيار مثالي للمشاريع المعاصرة. مصنوع بمعايير الجودة المميزة، يوفر مظهراً جمالياً.", features: ["Modern", "Şık", "Çağdaş", "Premium"] },
          { code: "OS009", name: "OS009", nameEn: "OS009", nameFr: "OS009", nameAr: "OS009", description: "Ekonomik çözüm sunan PVC kapı. Bütçe dostu projeler için pratik seçenek. Kaliteli üretim ve geniş kullanım alanı avantajları.", descriptionEn: "Economical PVC door solution. Practical option for budget-friendly projects. Quality production and wide range of application advantages.", descriptionFr: "Solution de porte PVC économique. Option pratique pour projets à petit budget. Production de qualité et avantages de large gamme d'applications.", descriptionAr: "حل باب PVC اقتصادي. خيار عملي للمشاريع المقتصدة. إنتاج عالي الجودة ومزايا نطاق واسع من التطبيقات.", features: ["Ekonomik", "Bütçe dostu", "Kaliteli", "Pratik"] },
          { code: "OS010", name: "OS010", nameEn: "OS010", nameFr: "OS010", nameAr: "OS010", description: "Premium standartlarda PVC kapı. Lüks projeler için özel tasarım. Yüksek kalite malzeme ve özel üretim süreçleri ile üretilmiştir.", descriptionEn: "Premium standard PVC door. Special design for luxury projects. Manufactured with high-quality materials and special production processes.", descriptionFr: "Porte PVC aux standards premium. Design spécial pour projets de luxe. Fabriquée avec matériaux de haute qualité et processus de production spéciaux.", descriptionAr: "باب PVC بمعايير مميزة. تصميم خاص للمشاريع الفاخرة. مصنوع بمواد عالية الجودة وعمليات إنتاج خاصة.", features: ["Premium", "Lüks", "Özel tasarım", "Yüksek kalite"] },
          { code: "OS011", name: "OS011", nameEn: "OS011", nameFr: "OS011", nameAr: "OS011", description: "Klasik çizgilerle modern dokunuş. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı sunar.", descriptionEn: "Classic lines with modern touch. Versatile design that adapts to every project. Offers compatible and flexible usage.", descriptionFr: "Lignes classiques avec touche moderne. Design polyvalent qui s'adapte à chaque projet. Offre une utilisation compatible et flexible.", descriptionAr: "خطوط كلاسيكية بلمسة عصرية. تصميم متعدد الجوانب يتكيف مع كل مشروع. يوفر استخداماً متوافقاً ومرناً.", features: ["Klasik", "Modern", "Çok yönlü", "Uyumlu"] },
          { code: "OS012", name: "OS012", nameEn: "OS012", nameFr: "OS012", nameAr: "OS012", description: "Dekoratif detaylara sahip PVC kapı. Estetik görünüm ve şık tasarım. Detaylı işçilik ve özenli üretim ile öne çıkar.", descriptionEn: "PVC door with decorative details. Aesthetic appearance and elegant design. Stands out with detailed craftsmanship and careful production.", descriptionFr: "Porte PVC avec détails décoratifs. Apparence esthétique et design élégant. Se démarque par artisanat détaillé et production soignée.", descriptionAr: "باب PVC بتفاصيل زخرفية. مظهر جمالي وتصميم أنيق. يتميز بحرفية مفصلة وإنتاج دقيق.", features: ["Dekoratif", "Estetik", "Detaylı", "Şık"] },
          { code: "OS013", name: "OS013", nameEn: "OS013", nameFr: "OS013", nameAr: "OS013", description: "Yüksek performanslı PVC kapı. Zorlu koşullara dayanıklı yapı. Güvenilir ve sağlam malzeme kullanımı ile uzun ömür garantisi.", descriptionEn: "High-performance PVC door. Durable structure resistant to harsh conditions. Long life guarantee with reliable and robust material usage.", descriptionFr: "Porte PVC haute performance. Structure durable résistante aux conditions difficiles. Garantie de longue durée avec utilisation de matériaux fiables et robustes.", descriptionAr: "باب PVC عالي الأداء. هيكل متين مقاوم للظروف القاسية. ضمان عمر طويل باستخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güvenilir", "Sağlam"] },
          { code: "OS014", name: "OS014", nameEn: "OS014", nameFr: "OS014", nameAr: "OS014", description: "Minimalist tasarımlı PVC kapı. Sade ve şık görünüm. Modern mimari projeler için ideal seçim, estetik değer yüksek.", descriptionEn: "Minimalist design PVC door. Simple and elegant appearance. Ideal choice for modern architectural projects, high aesthetic value.", descriptionFr: "Porte PVC au design minimaliste. Apparence simple et élégante. Choix idéal pour projets architecturaux modernes, haute valeur esthétique.", descriptionAr: "باب PVC بتصميم بسيط. مظهر بسيط وأنيق. اختيار مثالي للمشاريع المعمارية الحديثة، قيمة جمالية عالية.", features: ["Minimalist", "Sade", "Şık", "Modern"] },
          { code: "OS015", name: "OS015", nameEn: "OS015", nameFr: "OS015", nameAr: "OS015", description: "Ekonomik ve kaliteli PVC kapı. Geniş kullanım alanı ve pratik çözüm. Toplu konut ve ticari projeler için uygun seçenek.", descriptionEn: "Economical and quality PVC door. Wide range of applications and practical solution. Suitable option for mass housing and commercial projects.", descriptionFr: "Porte PVC économique et de qualité. Large gamme d'applications et solution pratique. Option adaptée pour projets de logements collectifs et commerciaux.", descriptionAr: "باب PVC اقتصادي وعالي الجودة. نطاق واسع من التطبيقات وحل عملي. خيار مناسب لمشاريع الإسكان الجماعي والتجارية.", features: ["Ekonomik", "Kaliteli", "Geniş kullanım", "Pratik"] },
          { code: "OS016", name: "OS016", nameEn: "OS016", nameFr: "OS016", nameAr: "OS016", description: "Premium kalite standartlarında PVC kapı. Üst segment projeler için özel üretim. Lüks görünüm ve yüksek kalite garantisi.", descriptionEn: "Premium quality standard PVC door. Special production for high-end segment projects. Luxury appearance and high quality guarantee.", descriptionFr: "Porte PVC aux normes de qualité premium. Production spéciale pour projets de segment haut de gamme. Apparence de luxe et garantie de haute qualité.", descriptionAr: "باب PVC بمعايير الجودة المميزة. إنتاج خاص لمشاريع القطاع الراقي. مظهر فاخر وضمان جودة عالية.", features: ["Premium", "Yüksek kalite", "Lüks", "Özel"] },
          { code: "OS017", name: "OS017", nameEn: "OS017", nameFr: "OS017", nameAr: "OS017", description: "Klasik ve modern karışımı PVC kapı. Her tarza uyumlu tasarım. Çok yönlü kullanım imkanı ve esnek proje uyumluluğu.", descriptionEn: "Classic and modern blend PVC door. Design compatible with every style. Versatile usage and flexible project compatibility.", descriptionFr: "Porte PVC mélange classique et moderne. Design compatible avec tous les styles. Utilisation polyvalente et compatibilité de projet flexible.", descriptionAr: "باب PVC مزيج كلاسيكي وحديث. تصميم متوافق مع كل نمط. استخدام متعدد الجوانب وتوافق مشروع مرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS018", name: "OS018", nameEn: "OS018", nameFr: "OS018", nameAr: "OS018", description: "Dekoratif özellikleri öne çıkan PVC kapı. Özel projeler için estetik çözüm. Öne çıkan tasarım ve değerli görünüm.", descriptionEn: "PVC door with prominent decorative features. Aesthetic solution for special projects. Outstanding design and valuable appearance.", descriptionFr: "Porte PVC aux caractéristiques décoratives proéminentes. Solution esthétique pour projets spéciaux. Design remarquable et apparence précieuse.", descriptionAr: "باب PVC بميزات زخرفية بارزة. حل جمالي للمشاريع الخاصة. تصميم بارز ومظهر قيم.", features: ["Dekoratif", "Özel", "Estetik", "Öne çıkan"] },
          { code: "OS019", name: "OS019", nameEn: "OS019", nameFr: "OS019", nameAr: "OS019", description: "Yüksek dayanıklılık ve performans. Endüstriyel kullanım için uygun güçlü yapı. Dayanıklı malzeme ve güvenilir üretim.", descriptionEn: "High durability and performance. Strong structure suitable for industrial use. Durable material and reliable production.", descriptionFr: "Haute durabilité et performance. Structure solide adaptée à un usage industriel. Matériau durable et production fiable.", descriptionAr: "متانة وأداء عاليان. هيكل قوي مناسب للاستخدام الصناعي. مادة متينة وإنتاج موثوق.", features: ["Dayanıklı", "Yüksek performans", "Endüstriyel", "Güçlü"] },
          { code: "OS020", name: "OS020", nameEn: "OS020", nameFr: "OS020", nameAr: "OS020", description: "Modern mimariye uygun PVC kapı. Çağdaş tasarım ve mimari uyum. Tasarım odaklı projeler için ideal seçim.", descriptionEn: "PVC door suitable for modern architecture. Contemporary design and architectural harmony. Ideal choice for design-focused projects.", descriptionFr: "Porte PVC adaptée à l'architecture moderne. Design contemporain et harmonie architecturale. Choix idéal pour projets axés sur le design.", descriptionAr: "باب PVC مناسب للهندسة المعمارية الحديثة. تصميم معاصر وتناغم معماري. اختيار مثالي للمشاريع المرتكزة على التصميم.", features: ["Modern", "Çağdaş", "Mimari", "Tasarım"] },
          { code: "OS021", name: "OS021", nameEn: "OS021", nameFr: "OS021", nameAr: "OS021", description: "Ekonomik çözüm, kaliteli üretim. Bütçe dostu projeler için ideal seçenek. Geniş kullanım alanı ve pratik avantajlar.", descriptionEn: "Economical solution, quality production. Ideal option for budget-friendly projects. Wide range of applications and practical advantages.", descriptionFr: "Solution économique, production de qualité. Option idéale pour projets à petit budget. Large gamme d'applications et avantages pratiques.", descriptionAr: "حل اقتصادي، إنتاج عالي الجودة. خيار مثالي للمشاريع المقتصدة. نطاق واسع من التطبيقات ومزايا عملية.", features: ["Ekonomik", "Kaliteli", "Bütçe dostu", "İdeal"] },
          { code: "OS022", name: "OS022", nameEn: "OS022", nameFr: "OS022", nameAr: "OS022", description: "Premium standartlarda üretilmiş PVC kapı. Lüks projeler için özel üretim. Yüksek standart ve özel işçilik ile üretilmiştir.", descriptionEn: "PVC door manufactured to premium standards. Special production for luxury projects. Manufactured with high standards and special craftsmanship.", descriptionFr: "Porte PVC fabriquée selon des normes premium. Production spéciale pour projets de luxe. Fabriquée avec normes élevées et artisanat spécial.", descriptionAr: "باب PVC مصنوع بمعايير مميزة. إنتاج خاص للمشاريع الفاخرة. مصنوع بمعايير عالية وحرفية خاصة.", features: ["Premium", "Lüks", "Yüksek standart", "Özel"] },
          { code: "OS023", name: "OS023", nameEn: "OS023", nameFr: "OS023", nameAr: "OS023", description: "Klasik dokunuşlu modern PVC kapı. Her projeye uyum sağlayan çok yönlü tasarım. Uyumlu ve esnek kullanım imkanı.", descriptionEn: "Modern PVC door with classic touch. Versatile design that adapts to every project. Compatible and flexible usage.", descriptionFr: "Porte PVC moderne avec touche classique. Design polyvalent qui s'adapte à chaque projet. Utilisation compatible et flexible.", descriptionAr: "باب PVC حديث بلمسة كلاسيكية. تصميم متعدد الجوانب يتكيف مع كل مشروع. استخدام متوافق ومرن.", features: ["Klasik", "Modern", "Uyumlu", "Çok yönlü"] },
          { code: "OS024", name: "OS024", nameEn: "OS024", nameFr: "OS024", nameAr: "OS024", description: "Dekoratif detaylarıyla öne çıkan PVC kapı. Estetik değer yüksek tasarım. Öne çıkan görünüm ve değerli işçilik.", descriptionEn: "PVC door standing out with decorative details. High aesthetic value design. Outstanding appearance and valuable craftsmanship.", descriptionFr: "Porte PVC se démarquant par détails décoratifs. Design à haute valeur esthétique. Apparence remarquable et artisanat précieux.", descriptionAr: "باب PVC يتميز بتفاصيله الزخرفية. تصميم بقيمة جمالية عالية. مظهر بارز وحرفية قيّمة.", features: ["Dekoratif", "Estetik", "Öne çıkan", "Değerli"] },
          { code: "OS025", name: "OS025", nameEn: "OS025", nameFr: "OS025", nameAr: "OS025", description: "Yüksek performans ve dayanıklılık. Zorlu koşullara uygun güçlü yapı. Güvenilir ve sağlam malzeme kullanımı.", descriptionEn: "High performance and durability. Strong structure suitable for harsh conditions. Reliable and robust material usage.", descriptionFr: "Haute performance et durabilité. Structure solide adaptée aux conditions difficiles. Utilisation de matériaux fiables et robustes.", descriptionAr: "أداء ومتانة عاليان. هيكل قوي مناسب للظروف القاسية. استخدام مواد موثوقة وقوية.", features: ["Yüksek performans", "Dayanıklı", "Güçlü", "Güvenilir"] },
          { code: "OS026", name: "OS026", nameEn: "OS026", nameFr: "OS026", nameAr: "OS026", description: "Minimalist ve şık tasarım. Sade görünüm, yüksek kalite standartları. Modern projeler için ideal seçim.", descriptionEn: "Minimalist and elegant design. Simple appearance, high quality standards. Ideal choice for modern projects.", descriptionFr: "Design minimaliste et élégant. Apparence simple, normes de qualité élevées. Choix idéal pour projets modernes.", descriptionAr: "تصميم بسيط وأنيق. مظهر بسيط، معايير جودة عالية. اختيار مثالي للمشاريع الحديثة.", features: ["Minimalist", "Şık", "Sade", "Kaliteli"] }
        ]
      },
    },
    delivery: {
      title: "خدمات التوصيل",
      subtitle: "شحن موثوق عبر المناطق",
      description: "توصيل سريع في جميع أنحاء أوروبا والشرق الأوسط",
    },
    process: {
      title: "عملية الطلب والإنتاج",
      subtitle: "حلول احترافية لتصدير الأبواب إلى أفريقيا",
      steps: [
        { 
          number: "1", 
          title: "تحليل الاحتياجات", 
          description: "نحلل احتياجات مشروعك بالتفصيل. نجمع جميع المعلومات بما في ذلك نوع الباب والكمية والأبعاد وموقع التسليم. نقيم حلولنا اللوجستية المتخصصة لتصدير الأبواب إلى أفريقيا." 
        },
        { 
          number: "2", 
          title: "إعداد العرض", 
          description: "نعد عرض أسعار مفصل ومخصص لبيع الأبواب من تركيا. نقدم أسعاراً تنافسية لتوريد الأبواب بالجملة. يتضمن عرضنا وقت الإنتاج وشروط الدفع وتفاصيل اللوجستيات." 
        },
        { 
          number: "3", 
          title: "الإنتاج", 
          description: "بعد تأكيد الطلب، نبدأ إنتاج الأبواب الفولاذية وأبواب PVC والأبواب اللاكيه أو الأبواب الميلامين. نحافظ على المعايير في كل مرحلة من خلال عمليات مراقبة الجودة لدينا. نقوم بالتعبئة بشكل مناسب لتصدير الأبواب إلى أفريقيا." 
        },
        { 
          number: "4", 
          title: "اللوجستيات والتسليم", 
          description: "بعد اكتمال الإنتاج، نسلم أبوابك إلى أفريقيا أو البلد المستهدف من خلال شبكة اللوجستيات الآمنة لدينا. نتعامل مع جميع إجراءات الجمارك والوثائق." 
        },
      ],
      cta: {
        title: "احصل على عرض أسعار لمشروعك",
        description: "تواصل مع فريقنا المحترف لتصدير الأبواب إلى أفريقيا. نقدم حلولاً مخصصة لتوريد الأبواب بالجملة من تركيا.",
        button: "تواصل معنا"
      }
    },
    references: {
      title: "مراجعنا",
      subtitle: "المشاريع المكتملة بنجاح",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "ما تريد معرفته عن تصدير الأبواب إلى أفريقيا",
      items: [
        { 
          question: "ما هي الحد الأدنى لكمية الطلب?", 
          answer: "يختلف الحد الأدنى لكمية الطلب لتصدير الأبواب إلى أفريقيا حسب نوع الباب. عادةً ما يتم قبول طلبات 50 وحدة وأكثر لتوريد الأبواب بالجملة. للكميات الأصغر، يرجى التواصل معنا." 
        },
        { 
          question: "ما هو وقت التسليم?", 
          answer: "وقت التسليم للإنتاج القياسي هو 3-6 أسابيع. للأحجام والتصاميم المخصصة، قد تمتد هذه الفترة إلى 6-8 أسابيع. لدينا خيارات إنتاج سريع للطلبات العاجلة. وقت اللوجستيات إلى أفريقيا هو 1-2 أسبوع إضافي." 
        },
        { 
          question: "ما هي طرق الدفع التي تقبلونها?", 
          answer: "نقبل طرق دفع آمنة مثل التحويل البرقي (T/T) وخطاب الاعتماد (L/C) وخطابات الاعتماد لبيع الأبواب من تركيا. تختلف شروط الدفع حسب حجم الطلب. يرجى ملء نموذج العرض للحصول على معلومات مفصلة." 
        },
        { 
          question: "هل يمكنكم إرسال عينات?", 
          answer: "نعم، يمكننا إرسال عينات للمشترين الجادين. تكلفة العينة ورسوم الشحن على عاتق المشتري. في حالة تقديم طلب كبير بعد طلب العينة، يتم خصم تكلفة العينة من الطلب الرئيسي." 
        },
        { 
          question: "إلى أي بلدان تقدمون التوصيل?", 
          answer: "كـ OBSAN SUARL، نصدر الأبواب إلى العديد من البلدان في أفريقيا. نخدم بشكل مكثف خاصة البلدان الأفريقية الناطقة بالفرنسية والعربية. نقدم التوصيل أيضاً إلى أسواق دولية أخرى. يرجى التواصل معنا للحصول على معلومات مفصلة." 
        },
        { 
          question: "هل يمكنكم صنع أحجام وتصاميم مخصصة?", 
          answer: "نعم، يمكننا صنع أحجام وتصاميم مخصصة لمشاريعكم. الإنتاج بأحجام مخصصة متاح للأبواب اللاكيه وPVC والميلامين والبانل. سيقدم فريقنا الفني الحل الأنسب حسب متطلبات مشروعكم." 
        },
      ],
      moreInfo: "هل تحتاج إلى مزيد من المعلومات؟",
      moreInfoDesc: "تواصل مع فريقنا الخبير للحصول على استشارة مفصلة",
      getInTouch: "تواصل معنا",
    },
    footer: {
      company: "OBSAN SUARL",
      rights: "جميع الحقوق محفوظة",
      contact: "اتصل",
      followUs: "تابعنا",
      about: "عنا",
      aboutDesc: "أكثر من 20 عاماً من الخبرة في تصدير الأبواب من تركيا إلى أفريقيا. تصنيع أبواب فولاذية وPVC ولاكيه وميلامين وبانل عالية الجودة.",
      quickLinks: "روابط سريعة",
      products: "المنتجات",
      services: "خدماتنا",
      address: "العنوان",
      addressValue: "حي حاجي خليل، شارع عصمت باشا، مبنى يلماز التجاري، الطابق الأول، المكتب 2، 41420 جبزة/كوجالي، تركيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      workingHours: "ساعات العمل",
      workingHoursValue: "الاثنين - الجمعة: 09:00 - 18:00",
      certificates: "الشهادات",
      iso: "ISO 9001",
      ce: "معتمد CE",
      socialMedia: "وسائل التواصل الاجتماعي",
    },
    quote: {
      title: "احصل على عرض أسعار مخصص",
      description: "تواصل مع فريقنا الخبير لمناقشة متطلباتك الخاصة والحصول على عرض أسعار مخصص لمشروعك.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      whatsapp: "واتساب",
      whatsappDesc: "دعم سريع متاح",
      form: {
        fullName: "الاسم الكامل *",
        email: "البريد الإلكتروني *",
        phone: "رقم الهاتف *",
        company: "الشركة",
        productType: "نوع المنتج *",
        selectProduct: "اختر نوع المنتج",
        quantity: "الكمية المقدرة",
        quantityPlaceholder: "مثال: 100 وحدة",
        message: "تفاصيل إضافية",
        messagePlaceholder: "أخبرنا المزيد عن مشروعك...",
        sending: "جاري الإرسال...",
        send: "إرسال طلب عرض الأسعار",
        chatWhatsApp: "الدردشة على واتساب",
        success: "شكراً لك! تم إرسال طلب عرض الأسعار. سنعود إليك قريباً.",
        whatsappMessage: "مرحباً OBSAN، أنا مهتم بالحصول على عرض أسعار لـ ${productType}. اسمي ${name}.",
        whatsappMessageFallback: "مرحباً OBSAN، أنا مهتم بالحصول على عرض أسعار لمنتجاتك. اسمي ${name}.",
        country: "البلد",
      },
    },
  },
};


