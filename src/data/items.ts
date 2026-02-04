
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
    id: 'netflix-2023',
    name: 'Netflix Premium (Rok)',
    year: 2023,
    price: 720,
    currency: 'PLN',
    category: 'other',
    imageUrl: '/images/netflix-2023.jpg',
    description: 'Roczny koszt najwyższego planu (4K HDR).',
    funFact: 'Miesięczny abonament (60 zł) wydaje się niski, ale rocznie zbiera się kwota, za którą w latach 90. można było przeżyć miesiąc.'
  }
];
