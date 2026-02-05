
export interface GameItem {
  id: string;
  name: string;
  year: number;
  price: number;
  currency: string;
  category: 'food' | 'tech' | 'automotive' | 'housing' | 'other';
  imageUrl: string;
  description: string;
  funFact: string;
}

export const gameItems: GameItem[] = [
  // --- SPOŻYWCZE (FOOD) ---
  {
    id: 'cola-1990',
    name: 'Puszka Coca-Coli (0.33l)',
    year: 1990,
    price: 3500,
    currency: 'PLZ (Stare Zł)',
    category: 'food',
    imageUrl: '/images/cola-1990.jpg',
    description: 'Oryginalny napój gazowany w puszce. Symbol zachodniego luksusu dostępny w każdym kiosku.',
    funFact: 'W 1990 roku Polska przechodziła transformację. Puszka Coli była towarem luksusowym, kosztującym tyle co bochenek chleba. 3500 PLZ to po denominacji 0,35 PLN.'
  },
  {
    id: 'cola-2005',
    name: 'Butelka Coca-Coli (2l)',
    year: 2005,
    price: 3.99,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/cola-2005.jpg',
    description: 'Rodzinna butelka najpopularniejszego napoju na świecie. Obowiązkowy element niedzielnego obiadu.',
    funFact: 'W 2005 roku Polska była już w UE. Duża butelka Coli była standardem na stołach.'
  },
  {
    id: 'chleb-1995',
    name: 'Bochenek Chleba (zwykły)',
    year: 1995,
    price: 0.60,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/chleb-1995.jpg',
    description: 'Tradycyjny chleb pszenno-żytni z lokalnej piekarni. Podstawa polskiego śniadania.',
    funFact: 'Rok 1995 to rok denominacji (skreślenia 4 zer). Chleb kosztował grosze w porównaniu do dzisiejszych cen.'
  },
  {
    id: 'chleb-2023',
    name: 'Bochenek Chleba (zwykły)',
    year: 2023,
    price: 4.50,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/chleb-2023.jpg',
    description: 'Świeży bochenek chleba z chrupiącą skórką. Cena obejmuje rosnące koszty energii i zboża.',
    funFact: 'Inflacja w 2023 roku sprawiła, że ceny pieczywa drastycznie wzrosły.'
  },
  {
    id: 'maslo-2000',
    name: 'Kostka Masła (200g)',
    year: 2000,
    price: 2.50,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/maslo-2000.jpg',
    description: 'Prawdziwe masło ekstra, 82% tłuszczu. Alternatywa dla popularnych wtedy margaryn.',
    funFact: 'W 2000 roku masło było stosunkowo tanie, a rynek zalewały margaryny.'
  },
  {
    id: 'maslo-2022',
    name: 'Kostka Masła (200g)',
    year: 2022,
    price: 7.99,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/maslo-2022.jpg',
    description: 'Kostka masła, która stała się symbolem drożyzny w sklepach spożywczych.',
    funFact: 'Słynne "paragony grozy" często dotyczyły właśnie masła, którego cena zbliżała się do 10 zł.'
  },
  {
    id: 'snickers-1998',
    name: 'Baton Snickers',
    year: 1998,
    price: 1.20,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/snickers-1998.jpg',
    description: 'Baton czekoladowy z karmelem i orzeszkami. Reklamowany jako sposób na "wielkiego głoda".',
    funFact: 'Słodycze z zachodu w latach 90. były symbolem nowoczesności.'
  },
  {
    id: 'mleko-1995',
    name: 'Mleko 2% (1 litr)',
    year: 1995,
    price: 1.20,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/mleko-1995.jpg',
    description: 'Mleko pasteryzowane, często sprzedawane w charakterystycznych foliowych workach.',
    funFact: 'W latach 90. mleko często sprzedawano jeszcze w foliowych workach.'
  },
  {
    id: 'mleko-2023',
    name: 'Mleko 2% (1 litr)',
    year: 2023,
    price: 3.99,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/mleko-2023.jpg',
    description: 'Mleko UHT w kartonie lub butelce. Podstawowy produkt w każdym domu.',
    funFact: 'Ceny nabiału w 2023 roku były pod silną presją inflacyjną.'
  },
  {
    id: 'cukier-2011',
    name: 'Cukier Biały (1kg)',
    year: 2011,
    price: 5.50,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/cukier-2011.jpg',
    description: 'Standardowe opakowanie cukru kryształu. Niezbędny do herbaty i przetworów.',
    funFact: 'W 2011 roku wybuchła panika cukrowa, a ceny cukru drastycznie wzrosły w krótkim czasie.'
  },
  {
    id: 'wodka-1990',
    name: 'Wódka Czysta (0.5l)',
    year: 1990,
    price: 25000,
    currency: 'PLZ (Stare Zł)',
    category: 'food',
    imageUrl: '/images/wodka-1990.jpg',
    description: 'Pół litra czystej wódki, popularna "połówka". Często używana jako środek płatniczy.',
    funFact: 'W czasach PRL i transformacji wódka była nieoficjalną walutą wymienną za usługi.'
  },
  {
    id: 'wodka-2023',
    name: 'Wódka Czysta (0.5l)',
    year: 2023,
    price: 32.00,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/wodka-2023.jpg',
    description: 'Standardowa butelka wódki ze średniej półki cenowej.',
    funFact: 'Wzrost akcyzy regularnie podnosi ceny alkoholu w Polsce.'
  },
  {
    id: 'jajka-2023',
    name: 'Jajka (10 sztuk)',
    year: 2023,
    price: 9.99,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/jajka-2023.jpg',
    description: 'Opakowanie 10 jaj kurzych, klasa L. Cena zależna od chowu, tu standardowy.',
    funFact: 'Inflacja w 2023 roku mocno dotknęła produkty podstawowe, w tym jajka.'
  },
  {
    id: 'jajka-2000',
    name: 'Jajka (10 sztuk)',
    year: 2000,
    price: 3.50,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/jajka-2000.jpg',
    description: 'Dziesięć świeżych jajek. Podstawa jajecznicy na śniadanie.',
    funFact: 'Przed wejściem do UE ceny jaj były znacznie niższe, podobnie jak wymogi hodowlane.'
  },
  {
    id: 'bigmac-2010',
    name: 'Kanapka Big Mac',
    year: 2010,
    price: 9.00,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/bigmac-2010.jpg',
    description: 'Słynna kanapka z dwoma kotletami wołowymi, sosem, sałatą, serem, ogórkiem i cebulą.',
    funFact: 'Indeks Big Maca to popularny wskaźnik ekonomiczny. W 2010 płaciliśmy za niego niecałą "dychę".'
  },

  // --- PALIWO (FUEL) ---
  {
    id: 'paliwo-1995',
    name: 'Litr Benzyny Pb95',
    year: 1995,
    price: 1.60,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/paliwo-1995.jpg',
    description: 'Jeden litr benzyny bezołowiowej 95 oktanów. Niezbędna do napędzania Poloneza czy Malucha.',
    funFact: 'Zaraz po denominacji paliwo wydawało się tanie, ale średnia pensja wynosiła wtedy ok. 700 zł.'
  },
  {
    id: 'paliwo-2005',
    name: 'Litr Benzyny Pb95',
    year: 2005,
    price: 3.85,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/paliwo-2005.jpg',
    description: 'Paliwo na stacji benzynowej. Cena zaczyna być odczuwalna dla kierowców.',
    funFact: 'Ceny paliw zaczęły rosnąć wraz z sytuacją na Bliskim Wschodzie.'
  },
  {
    id: 'paliwo-2012',
    name: 'Litr Benzyny Pb95',
    year: 2012,
    price: 5.70,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/paliwo-2012.jpg',
    description: 'Benzyna "Eurosuper 95". Magiczna granica 6 złotych jest blisko.',
    funFact: 'W 2012 roku ceny paliw osiągnęły ówczesny rekord, zbliżając się do 6 zł.'
  },
  {
    id: 'paliwo-2022',
    name: 'Litr Benzyny Pb95',
    year: 2022,
    price: 7.95,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/paliwo-2022.jpg',
    description: 'Drogie tankowanie w cieniu kryzysu energetycznego.',
    funFact: 'Wybuch wojny na Ukrainie spowodował skok cen paliw, momentami przekraczając 8 zł.'
  },

  // --- TECHNOLOGIA (TECH) ---
  {
    id: 'iphone-2008',
    name: 'iPhone 3G (8GB)',
    year: 2008,
    price: 1200,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/iphone-2008.jpg',
    description: 'Rewolucyjny smartfon od Apple z dostępem do szybkiego internetu 3G.',
    funFact: 'iPhone 3G wchodził do Polski w ofertach operatorów (Era, Orange). Cena bez umowy była zaporowa.'
  },
  {
    id: 'iphone-2023',
    name: 'iPhone 15 (128GB)',
    year: 2023,
    price: 4699,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/iphone-2023.jpg',
    description: 'Najnowszy smartfon Apple ze złączem USB-C i Dynamic Island.',
    funFact: 'Ceny flagowców Apple w Polsce poszybowały w górę ze względu na kurs dolara.'
  },
  {
    id: 'ps2-2000',
    name: 'Konsola PlayStation 2',
    year: 2000,
    price: 2699,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/ps2-2000.jpg',
    description: 'Konsola nowej generacji od Sony. Odtwarzacz DVD i niesamowita grafika 3D.',
    funFact: 'Na premierę PS2 kosztowało fortunę – ponad 3 średnie krajowe pensje!'
  },
  {
    id: 'tv-1995',
    name: 'Telewizor Kolorowy 21"',
    year: 1995,
    price: 1200,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/tv-1995.jpg',
    description: 'Solidny telewizor kineskopowy (CRT) z pilotem. Okno na świat w każdym salonie.',
    funFact: 'Telewizor kineskopowy (CRT) był centrum domowej rozrywki. 1200 zł to były prawie dwie pensje.'
  },
  {
    id: 'nokia-2000',
    name: 'Nokia 3310',
    year: 2000,
    price: 800,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/nokia-2000.jpg',
    description: 'Niezniszczalny telefon komórkowy z grą Snake i wymiennymi obudowami.',
    funFact: 'Legendarna Nokia 3310 była marzeniem każdego, choć początkowo wcale nie była tania bez abonamentu.'
  },

  // --- MOTORYZACJA (AUTOMOTIVE) ---
  {
    id: 'maluch-1990',
    name: 'Fiat 126p (Nowy)',
    year: 1990,
    price: 35000000,
    currency: 'PLZ (Stare Zł)',
    category: 'automotive',
    imageUrl: '/images/maluch-1990.jpg',
    description: 'Mały Fiat z polskiej fabryki. Ciasny, głośny, ale własny.',
    funFact: 'W 1990 r. FSM wyprodukowała 150 tys. sztuk, ale popyt spadał na rzecz aut z zachodu. Cena 35 mln zł to równowartość dzisiejszych ~3500 zł, choć wtedy była to fortuna.'
  },
  {
    id: 'polonez-1995',
    name: 'Polonez Caro (Nowy)',
    year: 1995,
    price: 18500,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/polonez-1995.jpg',
    description: 'Nowoczesna wersja Poloneza z szerszym torem kół i nowym wnętrzem.',
    funFact: 'W połowie lat 90. był to hit sprzedaży (ok. 80 tys. sztuk rocznie). Wersja Caro uchodziła za "luksusową" limuzynę dla przeciętnego Polaka.'
  },
  {
    id: 'golf-2023',
    name: 'VW Golf VIII (Nowy)',
    year: 2023,
    price: 115000,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/golf-2023.jpg',
    description: 'Kompaktowy hatchback w wersji podstawowej. Ikona niemieckiej motoryzacji.',
    funFact: 'Koszt produkcji kompaktu to ok. 60-70% ceny netto. Golf stracił pozycję lidera w Europie na rzecz tańszych aut jak Dacia Sandero.'
  },

  // --- NOWE SAMOCHODY (NEW CARS) ---
  {
    id: 'tico-1996',
    name: 'Daewoo Tico (Nowe)',
    year: 1996,
    price: 20500,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/tico-1996.jpg',
    description: 'Małe, zwrotne auto miejskie. Marzenie wielu rodzin przesiadających się z Malucha.',
    funFact: 'Tico było hitem sprzedaży dzięki niskiej cenie i 5-drzwiowemu nadwoziu. Silnik 0.8 l był zaskakująco dynamiczny.'
  },
  {
    id: 'lanos-1998',
    name: 'Daewoo Lanos (Nowy)',
    year: 1998,
    price: 33500,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/lanos-1998.jpg',
    description: 'Nowoczesny kompakt z Korei produkowany na Żeraniu. Następca Poloneza.',
    funFact: 'Lanos zmotoryzował polską klasę średnią w latach 90. Hasło reklamowe "Lanos - Tego nam było trzeba" znał każdy.'
  },
  {
    id: 'skoda-2000',
    name: 'Skoda Octavia I (Nowa)',
    year: 2000,
    price: 48500,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/skoda-2000.jpg',
    description: 'Solidny liftback zbudowany na technologii Volkswagena. Olbrzymi bagażnik.',
    funFact: 'Octavia stała się ulubionym autem flotowym w Polsce, budując prestiż marki Skoda jako "tańszego Passata".'
  },
  {
    id: 'fiat-125p-1990',
    name: 'Fiat 125p (Nowy)',
    year: 1990,
    price: 50000000,
    currency: 'PLZ (Stare Zł)',
    category: 'automotive',
    imageUrl: '/images/fiat-125p-1990.jpg',
    description: 'Legendarny "Duży Fiat" u schyłku produkcji. Przestarzały, ale dostępny.',
    funFact: 'W 1990 roku produkcja dobiegała końca (zakończono w 1991). Jakość wykonania była fatalna, ale auto wciąż miało wiernych fanów.'
  },
  {
    id: 'duster-2010',
    name: 'Dacia Duster (Nowa)',
    year: 2010,
    price: 39900,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/duster-2010.jpg',
    description: 'Pierwszy tani SUV na rynku. Szokująco niska cena wersji podstawowej.',
    funFact: 'Cena 39 900 zł dotyczyła wersji "gołej" (czarne zderzaki, brak klimy), ale przyciągnęła do salonów tłumy klientów.'
  },
  {
    id: 'mercedes-1990',
    name: 'Mercedes W124 (Używany)',
    year: 1990,
    price: 15000,
    currency: 'USD',
    category: 'automotive',
    imageUrl: '/images/mercedes-1990.jpg',
    description: 'Symbol statusu i luksusu. Niezniszczalna limuzyna marzeń.',
    funFact: 'W 1990 roku ceny aut zachodnich podawano w dolarach. 15 tys. USD to była fortuna, za którą można było kupić kilka mieszkań.'
  },
  {
    id: 'focus-1999',
    name: 'Ford Focus I (Nowy)',
    year: 1999,
    price: 49900,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/focus-1999.jpg',
    description: 'Rewolucyjny design "New Edge" i świetne prowadzenie. Samochód Roku.',
    funFact: 'Focus zszokował rynek swoim wyglądem, zrywając z nudą modelu Escort. Tylne zawieszenie wielowahaczowe było wzorem w klasie.'
  },
  {
    id: 'ursus-1990',
    name: 'Ciągnik Ursus C-330',
    year: 1990,
    price: 65000000,
    currency: 'PLZ (Stare Zł)',
    category: 'automotive',
    imageUrl: '/images/ursus-1990.jpg',
    description: 'Kultowy polski ciągnik rolniczy, "ciiapek". Koń roboczy polskiej wsi.',
    funFact: 'Ursus C-330 produkowano do 1993 roku. Był prosty, trwały i każdy mechanik potrafił go naprawić młotkiem.'
  },
  {
    id: 'wigry-1995',
    name: 'Rower Wigry 3',
    year: 1995,
    price: 280,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/wigry-1995.jpg',
    description: 'Składany rower miejski. Obiekt pożądania każdego dziecka na komunię.',
    funFact: 'Rower składak był idealny do małych mieszkań w blokach. Można go było "złożyć w pół" i schować na balkonie.'
  },
  {
    id: 'motorynka-1990',
    name: 'Motorynka Romet Pony',
    year: 1990,
    price: 3500000,
    currency: 'PLZ (Stare Zł)',
    category: 'automotive',
    imageUrl: '/images/motorynka-1990.jpg',
    description: 'Miniaturowy motorower dla młodzieży. Marzenie każdego nastolatka.',
    funFact: 'Motorynka miała silnik 50cm3 i 2 biegi. Dźwięk jej silnika rozpoznawał każdy na osiedlu.'
  },


  // --- NIERUCHOMOŚCI (HOUSING) ---
  {
    id: 'mieszkanie-waw-2005',
    name: 'Mieszkanie Warszawa (m²)',
    year: 2005,
    price: 4500,
    currency: 'PLN',
    category: 'housing',
    imageUrl: '/images/mieszkanie-waw-2005.jpg',
    description: 'Cena za metr kwadratowy mieszkania w stolicy. Przed wielkim boomem kredytowym.',
    funFact: 'W 2005 roku ceny mieszkań w Warszawie zaczynały rosnąć, ale 4500 zł/m² wydaje się dziś okazją.'
  },
  {
    id: 'mieszkanie-waw-2023',
    name: 'Mieszkanie Warszawa (m²)',
    year: 2023,
    price: 14500,
    currency: 'PLN',
    category: 'housing',
    imageUrl: '/images/mieszkanie-waw-2023.jpg',
    description: 'Średnia cena transakcyjna za metr kwadratowy w Warszawie.',
    funFact: 'Ceny nieruchomości w stolicy wystrzeliły, czyniąc zakup mieszkania trudnym dla młodych.'
  },
  {
    id: 'garaz-2000',
    name: 'Garaż murowany',
    year: 2000,
    price: 15000,
    currency: 'PLN',
    category: 'housing',
    imageUrl: '/images/garaz-2000.jpg',
    description: 'Własny garaż w bloku lub wolnostojący w średniej wielkości mieście.',
    funFact: 'Garaż był dobrem luksusowym dla posiadaczy aut, często służył też za warsztat.'
  },
  
  // --- INNE (OTHER) ---
  {
    id: 'gazeta-1995',
    name: 'Gazeta Wyborcza',
    year: 1995,
    price: 1.00,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/gazeta-1995.jpg',
    description: 'Jeden egzemplarz najpopularniejszego dziennika w Polsce.',
    funFact: 'Prasa papierowa była głównym źródłem informacji. Złotówka za gazetę to była standardowa cena.'
  },
  {
    id: 'bilet-kino-2000',
    name: 'Bilet do Kina',
    year: 2000,
    price: 12.00,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/bilet-kino-2000.jpg',
    description: 'Bilet normalny na seans wieczorny w kinie miejskim.',
    funFact: 'Wyjście do kina w 2000 roku było tańsze, ale sieć multipleksów dopiero się rozwijała.'
  },
  {
    id: 'papierosy-2005',
    name: 'Paczka Papierosów',
    year: 2005,
    price: 6.50,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/papierosy-2005.jpg',
    description: 'Paczka 20 papierosów popularnej marki zachodniej.',
    funFact: 'Akcyza na wyroby tytoniowe była znacznie niższa przed pełną integracją z wymogami UE.'
  },
  {
    id: 'dolar-2000',
    name: 'Kurs Dolara (USD)',
    year: 2000,
    price: 4.35,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/dolar-2000.jpg',
    description: 'Cena jednego dolara amerykańskiego w kantorze.',
    funFact: 'Na przełomie tysiącleci dolar był bardzo drogi, kosztując ponad 4 złote.'
  },
  {
    id: 'dolar-2008',
    name: 'Kurs Dolara (USD)',
    year: 2008,
    price: 2.10,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/dolar-2008.jpg',
    description: 'Cena jednego dolara amerykańskiego w czasach silnej złotówki.',
    funFact: 'W 2008 roku złoty był rekordowo silny, a dolar kosztował niewiele ponad 2 złote.'
  },
  {
    id: 'srednia-1995',
    name: 'Średnia Krajowa',
    year: 1995,
    price: 702,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/srednia-1995.jpg',
    description: 'Przeciętne miesięczne wynagrodzenie brutto w gospodarce narodowej.',
    funFact: 'W 1995 roku 700 zł brutto to była średnia pensja. Dziś wydaje się to kieszonkowym.'
  },
  {
    id: 'srednia-2023',
    name: 'Średnia Krajowa',
    year: 2023,
    price: 7379,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/srednia-2023.jpg',
    description: 'Przeciętne miesięczne wynagrodzenie brutto w Polsce.',
    funFact: 'Średnia krajowa nominalnie wzrosła 10-krotnie od połowy lat 90.'
  },

  // --- RETRO TECH & NOSTALGIA ---
  {
    id: 'walkman-1995',
    name: 'Walkman Sony (Kasety)',
    year: 1995,
    price: 250,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/walkman-1995.jpg',
    description: 'Przenośny odtwarzacz kasetowy. Symbol wolności muzycznej lat 90.',
    funFact: 'W 1995 roku za markowego Walkmana trzeba było zapłacić około 1/3 średniej pensji. Funkcja "Mega Bass" była absolutnym hitem.'
  },
  {
    id: 'pegasus-1993',
    name: 'Konsola Pegasus',
    year: 1993,
    price: 450000,
    currency: 'PLZ (Stare Zł)',
    category: 'tech',
    imageUrl: '/images/pegasus-1993.jpg',
    description: 'Polska legenda bazarów. Klon japońskiego Famicoma (NES).',
    funFact: 'Pegasus był najpopularniejszą konsolą w Polsce lat 90. Gry kupowało się na żółtych kartridżach na bazarze.'
  },
  {
    id: 'tamagotchi-1997',
    name: 'Tamagotchi',
    year: 1997,
    price: 55,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/tamagotchi-1997.jpg',
    description: 'Jajowate urządzenie z cyfrowym zwierzątkiem, które trzeba karmić.',
    funFact: 'Szał na Tamagotchi był tak wielki, że w niektórych szkołach zakazywano przynoszenia ich na lekcje, bo uczniowie "karmili" je w czasie zajęć.'
  },
  {
    id: 'gameboy-1998',
    name: 'Game Boy Color',
    year: 1998,
    price: 349,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/gameboy-1998.jpg',
    description: 'Przenośna konsola Nintendo z kolorowym ekranem.',
    funFact: 'Game Boy Color zrewolucjonizował rynek dzięki grom takim jak Pokémon Gold i Silver. Działał na dwie baterie AA.'
  },
  {
    id: 'vhs-1995',
    name: 'Magnetowid VHS',
    year: 1995,
    price: 950,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/vhs-1995.jpg',
    description: 'Centrum domowej rozrywki. Pozwalał oglądać filmy z wypożyczalni.',
    funFact: 'Dobrej klasy magnetowid 4-głowicowy kosztował ponad 1000 zł, czyli więcej niż wynosiła średnia pensja (ok. 700 zł).'
  },
  {
    id: 'ipod-2002',
    name: 'iPod Classic (1. gen)',
    year: 2002,
    price: 2200,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/ipod-2002.jpg',
    description: '"1000 piosenek w Twojej kieszeni". Biały odtwarzacz z mechanicznym kółkiem.',
    funFact: 'W Polsce iPod był towarem ekstremalnie luksusowym. Jego cena przekraczała ówczesną średnią krajową (ok. 2100 zł).'
  },
  {
    id: 'dyskietki-1995',
    name: 'Dyskietki 3.5" (10 szt.)',
    year: 1995,
    price: 30,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/dyskietki-1995.jpg',
    description: 'Paczka nośników danych. Każda dyskietka mieściła 1.44 MB.',
    funFact: 'Dziś jedno zdjęcie ze smartfona zajmuje więcej miejsca niż cała paczka dyskietek. Służyły głównie do przenoszenia dokumentów i małych gier.'
  },
  {
    id: 'aparat-1995',
    name: 'Aparat Kodak (Kliszowy)',
    year: 1995,
    price: 80,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/aparat-1995.jpg',
    description: 'Prosty aparat kompaktowy typu "małpka".',
    funFact: 'Zdjęcia nie były widoczne od razu – trzeba było zanieść kliszę do fotografa i czekać na wywołanie, płacąc za każdą odbitkę.'
  },

  // --- WSPÓŁCZESNY HIGH-TECH (MODERN) ---
  {
    id: 'iphone15promax-2023',
    name: 'iPhone 15 Pro Max',
    year: 2023,
    price: 7199,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/iphone15promax-2023.jpg',
    description: 'Flagowy smartfon Apple z tytanową obudową.',
    funFact: 'Cena startowa 7199 zł to prawie równowartość średniej krajowej brutto w 2023 roku.'
  },
  {
    id: 'rtx4090-2023',
    name: 'Karta NVIDIA RTX 4090',
    year: 2023,
    price: 9000,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/rtx4090-2023.jpg',
    description: 'Do niedawna najpotężniejsza karta graficzna (teraz zdetronizowana przez serię 5090).',
    funFact: 'Karta ta jest tak duża, że wielu graczy musiało wymieniać obudowy komputerowe, aby ją zmieścić. Pobiera też ogromne ilości prądu.'
  },
  {
    id: 'visionpro-2024',
    name: 'Apple Vision Pro',
    year: 2024,
    price: 19000,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/visionpro-2024.jpg',
    description: 'Gogle "komputeryzacji przestrzennej" od Apple.',
    funFact: 'Urządzenie kosztuje w USA 3499 dolarów. W Polsce cena z importu sięgała nawet 20 tysięcy złotych.'
  },
  {
    id: 'lego-falcon-2023',
    name: 'LEGO Sokół Millennium (UCS)',
    year: 2023,
    price: 3999,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/lego-falcon-2023.jpg',
    description: 'Największy zestaw LEGO Star Wars. Marzenie kolekcjonerów.',
    funFact: 'Zestaw składa się z ponad 7500 elementów. Jego złożenie zajmuje wprawnemu budowniczemu kilkanaście godzin.'
  },
  {
    id: 'tesla-2023',
    name: 'Tesla Model 3 (Nowa)',
    year: 2023,
    price: 205990,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/tesla-2023.jpg',
    description: 'Najpopularniejszy samochód elektryczny na świecie po liftingu.',
    funFact: 'Tesla Model 3 zrewolucjonizowała rynek aut elektrycznych. Wersja Highland z 2023 r. usunęła m.in. dźwignie kierunkowskazów.'
  },
  {
    id: 'steamdeck-2023',
    name: 'Steam Deck OLED (512GB)',
    year: 2023,
    price: 2599,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/steamdeck-2023.jpg',
    description: 'Przenośny komputer do gier od Valve.',
    funFact: 'Steam Deck pozwolił grać w "duże" gry PC (jak Cyberpunk 2077) w autobusie czy pociągu.'
  },
  {
    id: 'airpods-2023',
    name: 'Słuchawki AirPods Max',
    year: 2023,
    price: 2699,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/airpods-2023.jpg',
    description: 'Nauszne słuchawki od Apple z wyciszaniem hałasu.',
    funFact: 'Słuchawki te stały się elementem mody (fashion statement), mimo kontrowersji związanych z ich wysoką ceną i etui przypominającym torebkę.'
  },
  {
    id: 'dji-2023',
    name: 'Dron DJI Mini 4 Pro',
    year: 2023,
    price: 5499,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/dji-2023.jpg',
    description: 'Zaawansowany dron o wadze poniżej 249g.',
    funFact: 'Dzięki wadze poniżej 250g, w wielu krajach można nim latać bez specjalistycznych licencji, co czyni go hitem wśród amatorów.'
  },
  {
    id: 'xbox360-2005',
    name: 'Konsola Xbox 360',
    year: 2005,
    price: 1699,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/xbox360-2005.jpg',
    description: 'Konsola nowej generacji od Microsoftu. Wersja Premium z dyskiem 20GB.',
    funFact: 'Xbox 360 wyprzedził PS3 o rok. Niestety, pierwsze modele cierpiały na niesławną awarię "Red Ring of Death".'
  },
  {
    id: 'razr-2004',
    name: 'Motorola Razr V3',
    year: 2004,
    price: 2200,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/razr-2004.jpg',
    description: 'Kultowy, ultracienki telefon z klapką wykonany z aluminium.',
    funFact: 'Razr V3 był symbolem stylu. Używały go gwiazdy Hollywood i biznesmeni. Wtedy "cienki" telefon robił ogromne wrażenie.'
  },
  {
    id: 'thinkpad-2003',
    name: 'Laptop IBM ThinkPad T40',
    year: 2003,
    price: 8500,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/thinkpad-2003.jpg',
    description: 'Biznesowy laptop legenda. Niezniszczalna obudowa i czerwony TrackPoint.',
    funFact: 'Laptopy w 2003 roku były sprzętem luksusowym. Za cenę ThinkPada można było kupić używany samochód w dobrym stanie.'
  },
  {
    id: 'phantom-2013',
    name: 'Dron DJI Phantom 1',
    year: 2013,
    price: 2400,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/phantom-2013.jpg',
    description: 'Pierwszy gotowy do lotu dron konsumencki, który spopularyzował latanie.',
    funFact: 'Wcześniej drony budowali tylko modelarze. Phantom 1 miał uchwyt na kamerę GoPro, ale nie miał podglądu na żywo!'
  },
  {
    id: 'applewatch-2015',
    name: 'Apple Watch (1. gen)',
    year: 2015,
    price: 1699,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/applewatch-2015.jpg',
    description: 'Pierwszy smartwatch od Apple. Wersja Sport z aluminium.',
    funFact: 'Początkowo Apple Watch był pozycjonowany jako produkt modowy, a wersja złota kosztowała nawet 10 000 dolarów!'
  },
  {
    id: 'voodoo2-1998',
    name: 'Karta 3Dfx Voodoo2',
    year: 1998,
    price: 850,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/voodoo2-1998.jpg',
    description: 'Akcelerator grafiki 3D. Marzenie każdego gracza Quake II.',
    funFact: 'Voodoo2 nie była samodzielną kartą graficzną - wymagała podłączenia do zwykłej karty 2D kablem VGA.'
  },
  {
    id: 'monitor-1995',
    name: 'Monitor CRT 17"',
    year: 1995,
    price: 1800,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/monitor-1995.jpg',
    description: 'Wielki, ciężki monitor kineskopowy. 17 cali to był wtedy luksus (standardem było 14-15).',
    funFact: 'Monitory te ważyły ponad 20 kg. Rozdzielczość 1024x768 przy 85Hz to był szczyt marzeń dla oczu.'
  },
  {
    id: 'muvo-2004',
    name: 'Odtwarzacz MP3 Creative MuVo',
    year: 2004,
    price: 350,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/muvo-2004.jpg',
    description: 'Mały odtwarzacz MP3 (128MB) wpinany bezpośrednio do USB.',
    funFact: '128MB mieściło około 30 piosenek w średniej jakości. To wystarczało na drogę do szkoły!'
  },
  {
    id: 'switch-2017',
    name: 'Nintendo Switch',
    year: 2017,
    price: 1449,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/switch-2017.jpg',
    description: 'Hybrydowa konsola, w którą zagrasz w domu i w podróży.',
    funFact: 'Switch stał się jedną z najlepiej sprzedających się konsol w historii, mimo słabszej mocy niż PS4/Xbox One.'
  },
  {
    id: 'eos300d-2003',
    name: 'Canon EOS 300D',
    year: 2003,
    price: 4999,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/eos300d-2003.jpg',
    description: 'Pierwsza lustrzanka cyfrowa dla amatorów (DSLR) w "przystępnej" cenie.',
    funFact: 'Przed EOS 300D cyfrowe lustrzanki kosztowały fortunę i były tylko dla zawodowców. Ten model rozpoczął cyfrową rewolucję.'
  },
  {
    id: 'happymeal-1995',
    name: 'Zestaw Happy Meal',
    year: 1995,
    price: 5.90,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/happymeal-1995.jpg',
    description: 'Zestaw dla dzieci w McDonald\'s z zabawką.',
    funFact: 'W latach 90. wyjście do McDonalda było świętem. Zabawki z tamtych lat są dziś cennymi przedmiotami kolekcjonerskimi.'
  },
  {
    id: 'chleb-baltonowski-1990',
    name: 'Chleb Baltonowski',
    year: 1990,
    price: 2200,
    currency: 'PLZ',
    category: 'food',
    imageUrl: '/images/chleb-baltonowski-1990.jpg',
    description: 'Podstawowy chleb w Polsce czasów transformacji.',
    funFact: 'Ceny zmieniały się wtedy z tygodnia na tydzień z powodu hiperinflacji.'
  },
  {
    id: 'maslo-2015',
    name: 'Kostka Masła',
    year: 2015,
    price: 3.50,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/maslo-2015.jpg',
    description: 'Standardowa kostka masła w okresie stabilnych cen.',
    funFact: 'W 2015 roku nikt nie spodziewał się, że za kilka lat cena masła wzrośnie dwukrotnie.'
  },
  {
    id: 'piwo-1998',
    name: 'Piwo Żywiec (0.5l)',
    year: 1998,
    price: 2.20,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/piwo-1998.jpg',
    description: 'Puszka polskiego piwa premium.',
    funFact: 'W latach 90. piwo w puszce było droższe i bardziej "eleganckie" niż to w butelce.'
  },
  {
    id: 'starbucks-2010',
    name: 'Kawa Starbucks Latte',
    year: 2010,
    price: 11.50,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/starbucks-2010.jpg',
    description: 'Duża kawa w sieciówce, która wchodziła na polski rynek.',
    funFact: 'Dla wielu 12 zł za kawę było szokiem, gdy w domu piło się "sypaną" za grosze.'
  },
  {
    id: 'pizza-2000',
    name: 'Pizza Margarita (40cm)',
    year: 2000,
    price: 18.00,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/pizza-2000.jpg',
    description: 'Duża pizza z osiedlowej pizzerii.',
    funFact: 'Pizzerie w Polsce przeżywały boom na przełomie wieków. Sos czosnkowy był obowiązkowy!'
  },
  {
    id: 'czekolada-1992',
    name: 'Czekolada Wedel',
    year: 1992,
    price: 8500,
    currency: 'PLZ',
    category: 'food',
    imageUrl: '/images/czekolada-1992.jpg',
    description: 'Tabliczka mlecznej czekolady. Słodki luksus.',
    funFact: 'Wedel był wtedy jeszcze w pełni polską firmą, zanim został przejęty przez koncerny (PepsiCo, potem Cadbury).'
  },
  {
    id: 'cukier-1990',
    name: 'Cukier (1kg)',
    year: 1990,
    price: 4500,
    currency: 'PLZ',
    category: 'food',
    imageUrl: '/images/cukier-1990.jpg',
    description: 'Kilogram cukru na kartki (lub już wolnorynkowy).',
    funFact: 'W 1990 roku kartki na żywność ostatecznie zniknęły, a ceny uwolniono.'
  },
  {
    id: 'cola-2000',
    name: 'Coca-Cola (2l)',
    year: 2000,
    price: 2.99,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/cola-2000.jpg',
    description: 'Dwu litrowa butelka na imprezę.',
    funFact: 'Cena poniżej 3 zł za 2 litry napoju markowego to dziś marzenie.'
  },
  {
    id: 'lays-2005',
    name: 'Chipsy Lays (150g)',
    year: 2005,
    price: 3.20,
    currency: 'PLN',
    category: 'food',
    imageUrl: '/images/lays-2005.jpg',
    description: 'Duża paczka chipsów solonych.',
    funFact: 'Chipsy były podstawową przekąską na domówkach i oglądaniu meczów.'
  },
  {
    id: 'polonez-1993',
    name: 'Polonez Caro 1.6',
    year: 1993,
    price: 115000000,
    currency: 'PLZ',
    category: 'automotive',
    imageUrl: '/images/polonez-1993.jpg',
    description: 'Zmodernizowany Polonez. Marzenie polskiej rodziny.',
    funFact: 'Cena w milionach robiła wrażenie. Caro był znacznie nowocześniejszy od "Borewicza", miał np. wygodniejsze fotele.'
  },
  {
    id: 'matiz-1999',
    name: 'Daewoo Matiz',
    year: 1999,
    price: 24900,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/matiz-1999.jpg',
    description: 'Mały przyjaciel rodziny. Następca Tico.',
    funFact: 'Matiz zaprojektowany przez Giugiaro miał być nowym Fiatem 500, ale Fiat odrzucił projekt. Kupiło go Daewoo i zrobiło hit.'
  },
  {
    id: 'astra-2000',
    name: 'Opel Astra II (G)',
    year: 2000,
    price: 44500,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/astra-2000.jpg',
    description: 'Solidny niemiecki kompakt produkowany w Gliwicach.',
    funFact: 'Astra II była autem policyjnym przez wiele lat. Bardzo trwała i popularna.'
  },
  {
    id: 'rower-1995',
    name: 'Rower Górski "Góral"',
    year: 1995,
    price: 450,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/rower-1995.jpg',
    description: 'Ciężki, stalowy rower górski, często z targu.',
    funFact: '"Góral" był szałem komuniinym lat 90. Często miał 18 biegów, z których działało 5.'
  },
  {
    id: 'yaris-2005',
    name: 'Toyota Yaris',
    year: 2005,
    price: 39900,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/yaris-2005.jpg',
    description: 'Niezawodne auto miejskie z cyfrowym licznikiem.',
    funFact: 'Yaris zyskał miano "niezniszczalnego". Cyfrowe zegary na środku deski były wtedy futurystyczne.'
  },
  {
    id: 'paliwo-1999',
    name: 'Litr Benzyny Pb95',
    year: 1999,
    price: 2.15,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/paliwo-1999.jpg',
    description: 'Paliwo tuż przed magiczną barierą 3 zł.',
    funFact: 'Kierowcy narzekali na drożyznę, gdy paliwo przekraczało 2 złote.'
  },
  {
    id: 'diesel-2008',
    name: 'Litr Oleju Napędowego',
    year: 2008,
    price: 4.20,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/diesel-2008.jpg',
    description: 'Diesel droższy od benzyny - szok na stacjach.',
    funFact: 'W 2008 roku cena ropy poszybowała w górę, a diesel, tradycyjnie tańszy, zrównał się z benzyną.'
  },
  {
    id: 'bilet-2001',
    name: 'Bilet ZTM Warszawa (miesięczny)',
    year: 2001,
    price: 46,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/bilet-2001.jpg',
    description: 'Miesięczny bilet imienny na wszystkie linie.',
    funFact: 'Komunikacja miejska była wtedy znacznie tańsza, ale tabor (Ikarusy) pozostawiał wiele do życzenia.'
  },
  {
    id: 'simson-1990',
    name: 'Motorower Simson S51',
    year: 1990,
    price: 4200000,
    currency: 'PLZ',
    category: 'automotive',
    imageUrl: '/images/simson-1990.jpg',
    description: 'Niemiecka jakość (DDR). Marzenie każdego chłopaka na wsi i w mieście.',
    funFact: 'Simson był o niebo lepszy od polskiej Motorynki czy Komara. Miał 4 biegi i "szdł na koło".'
  },
  {
    id: 'mustang-2020',
    name: 'Ford Mustang GT',
    year: 2020,
    price: 220000,
    currency: 'PLN',
    category: 'automotive',
    imageUrl: '/images/mustang-2020.jpg',
    description: 'Amerykańska legenda z silnikiem V8 5.0L dostępna w polskim salonie.',
    funFact: 'Mustang stał się najlepiej sprzedającym się autem sportowym w Polsce dzięki świetnemu stosunkowi ceny do mocy.'
  },
  {
    id: 'gazeta-1990',
    name: 'Gazeta Wyborcza',
    year: 1990,
    price: 500,
    currency: 'PLZ',
    category: 'other',
    imageUrl: '/images/gazeta-1990.jpg',
    description: 'Pierwsza niezależna gazeta codzienna.',
    funFact: 'Nakłady sięgały milionów egzemplarzy. Ludzie ustawiali się w kolejkach do kiosków.'
  },
  {
    id: 'mieszkanie-1995',
    name: 'Mieszkanie M3 (50m²)',
    year: 1995,
    price: 60000,
    currency: 'PLN',
    category: 'housing',
    imageUrl: '/images/mieszkanie-1995.jpg',
    description: 'Mieszkanie na rynku wtórnym w dużym mieście.',
    funFact: 'Ceny nieruchomości były wtedy bardzo niskie w relacji do dzisiejszych, ale kredyty hipoteczne były trudno dostępne i drogie (oprocentowanie >20%!).'
  },
  {
    id: 'tv-2005',
    name: 'TV Plazmowy 42"',
    year: 2005,
    price: 5999,
    currency: 'PLN',
    category: 'tech',
    imageUrl: '/images/tv-2005.jpg',
    description: 'Płaski telewizor na ścianę. Szczyt techniki i prestiżu.',
    funFact: 'Technologia plazmowa oferowała świetną czerń, ale pobierała mnóstwo prądu i wypalała się. Była jednak symbolem statusu.'
  },
  {
    id: 'pralka-1992',
    name: 'Pralka Polar PS 663 Bio',
    year: 1992,
    price: 3500000,
    currency: 'PLZ',
    category: 'housing',
    imageUrl: '/images/pralka-1992.jpg',
    description: 'Kultowa pralka automatyczna "Frania automat".',
    funFact: 'Chodziła po podłodze przy wirowaniu, ale była nie do zdarcia. Serwisant naprawiał ją w 15 minut.'
  },
  {
    id: 'jeans-1998',
    name: 'Jeansy Levi\'s 501',
    year: 1998,
    price: 249,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/jeans-1998.jpg',
    description: 'Oryginalne amerykańskie jeansy z Pewexu lub salonu.',
    funFact: 'Markowe jeansy były bardzo drogie. Kosztowały ok. 1/3 minimalnej pensji, ale nosiło się je latami.'
  },
  {
    id: 'kino-1990',
    name: 'Bilet do Kina',
    year: 1990,
    price: 8000,
    currency: 'PLZ',
    category: 'other',
    imageUrl: '/images/kino-1990.jpg',
    description: 'Bilet na hit kinowy (np. "Psy").',
    funFact: 'Kina w tamtych czasach były często niedogrzane i z drewnianymi krzesłami, ale miały swój klimat.'
  },
  {
    id: 'pampers-2010',
    name: 'Pieluchy Pampers (Jumbo Pack)',
    year: 2010,
    price: 45,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/pampers-2010.jpg',
    description: 'Duża paczka pieluch dla dziecka.',
    funFact: 'Dla młodych rodziców cena pieluch była (i jest) kluczowym wskaźnikiem kosztów życia.'
  },
  {
    id: 'wegiel-2000',
    name: 'Węgiel (1 tona)',
    year: 2000,
    price: 450,
    currency: 'PLN',
    category: 'housing',
    imageUrl: '/images/wegiel-2000.jpg',
    description: 'Tona węgla kamiennego "Orzech" na zimę.',
    funFact: 'Węgiel był podstawowym paliwem w domach jednorodzinnych. Cena 450 zł wydaje się dziś śmiesznie niska.'
  },
  {
    id: 'zeszyt-1995',
    name: 'Zeszyt 16-kartkowy',
    year: 1995,
    price: 0.40,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/zeszyt-1995.jpg',
    description: 'Zwykły zeszyt w kratkę do szkoły.',
    funFact: 'Wyprawka szkolna w latach 90. była znacznie tańsza i skromniejsza niż dziś.'
  },
  {
    id: 'fryzjer-2000',
    name: 'Strzyżenie Męskie',
    year: 2000,
    price: 10,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/fryzjer-2000.jpg',
    description: 'Wizyta u osiedlowego fryzjera.',
    funFact: 'Za "dychę" można było się ostrzyc w większości zakładów. Dziś to często 50-70 zł i więcej (barber).'
  }
];
