// assets/data/suggestions.ts
export interface Suggestion {
  title: string;
  text: string;
}

export type Topic =
  | "health"
  | "motivation"
  | "nutrition"
  | "sports"
  | "personal_development";

interface TopicData {
  name: string;
  suggestions: Suggestion[];
}

const suggestionsData: Record<Topic, TopicData> = {
  health: {
    name: "Sağlık",
    suggestions: [
      { title: "Su İçmeyi Unutmayın!", text: "Günde en az 8 bardak su için." },
      { title: "Hareket Zamanı!", text: "30 dakikalık bir yürüyüş yapın." },
      {
        title: "Yeterli Uyuyun!",
        text: "Günde en az 7 saat uyumaya özen gösterin.",
      },
      { title: "Taze Gıdalar!", text: "Her gün taze sebze ve meyve tüketin." },
    ],
  },
  motivation: {
    name: "Motivasyon",
    suggestions: [
      {
        title: "Hedef Belirleyin!",
        text: "Hedeflerinizi netleştirin ve her gün onlara küçük bir adım daha yaklaşın.",
      },
      {
        title: "Zorlukları Fırsata Çevirin!",
        text: "Zorlukları birer fırsat olarak görün, sizi güçlendirecekler.",
      },
      {
        title: "Başarılarınızı Kutlayın!",
        text: "Günlük başarılarınızı not alın ve kendinizi ödüllendirin.",
      },
      {
        title: "İlham Alın!",
        text: "İlham veren kitaplar okuyarak kendinize enerji katın.",
      },
    ],
  },
  nutrition: {
    name: "Sağlıklı Beslenme",
    suggestions: [
      {
        title: "Tam Tahılları Tercih Edin!",
        text: "Yemeklerinizde tam tahıllı gıdaları tercih edin.",
      },
      {
        title: "Şekerli İçecekleri Azaltın!",
        text: "Şekerli içecekleri azaltarak su veya bitki çayı tercih edin.",
      },
      {
        title: "Protein Alımınıza Özen Gösterin!",
        text: "Günlük protein ihtiyacınızı karşılamaya özen gösterin.",
      },
      {
        title: "Sağlıklı Yağları Seçin!",
        text: "Yağlı ve işlenmiş gıdalardan kaçının, sağlıklı yağları tercih edin.",
      },
    ],
  },
  sports: {
    name: "Spor",
    suggestions: [
      {
        title: "Düzenli Spor Yapın!",
        text: "Haftada en az 3 gün spor yapmaya özen gösterin.",
      },
      {
        title: "Esneme Hareketleri!",
        text: "Esneme hareketlerini rutininize ekleyerek esnekliği artırın.",
      },
      {
        title: "Kısa Egzersiz Molaları!",
        text: "Gün içinde kısa egzersiz molaları verin.",
      },
      {
        title: "Doğru Nefes Alın!",
        text: "Spor yaparken doğru nefes almayı öğrenin, performansınızı artıracaktır.",
      },
    ],
  },
  personal_development: {
    name: "Kişisel Gelişim",
    suggestions: [
      {
        title: "Yeni Şeyler Öğrenin!",
        text: "Her gün yeni bir şey öğrenmeye odaklanın.",
      },
      {
        title: "Okuma Alışkanlığı Edinin!",
        text: "Okuma alışkanlığı edinin, her ay bir kitap bitirmeye çalışın.",
      },
      {
        title: "Kurslara Katılın!",
        text: "Kendinizi geliştirecek kurs veya etkinliklere katılın.",
      },
      {
        title: "Hedef Belirleyin ve Değerlendirin!",
        text: "Kendinize günlük hedefler koyarak gün sonunda değerlendirin.",
      },
    ],
  },
};

export default suggestionsData;
