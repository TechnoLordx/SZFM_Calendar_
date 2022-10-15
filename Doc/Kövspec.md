# Kővetelmény Specifikációs Dokumentum

## Áttekintés

* Az alkalmazás egy olyan felületet biztosít, amely segít megtervezni a napjainkat.
* Az alkalmazás egy webes felület lesz, amely olyan módon van megcsinálva hogy, telefonról számítógépről egyaránt elérhető legyen.
* A webboldal főrésze egy naptár lesz amihez lehet eseményeket hozzáadni, az eseményeknek különböző címkét meg lehet majd adni, az események bekövetkése előtt egy meghatározott idővel jelezni fog az oldal a közeledő eseményről.
* Fontos része lesz a projektnek egy beépített időjárás figyelő amely segít az aznapi programok megszervezésében, illetve jelez ha az esemény rossz idő miatt elmarad.
* Bejelentkezési rendszer segítségével tárolva lesz az előrehaladás, illetve ennek segítségével más eszközről is eltudjuk érni a saját naptárunkat.

## Jelenlegi helyzet

A cégünk szeretne létrehozni egy olyan weboldal amely segítene a megbeszélések szervezésében, az alkalmazottaknak segítene észbe tartani a mindennapi tevékenységeiket. Egy könnyen kezelhető, átlátható weboldal megalkotása a cél. Bejelentkezési rendszer biztosítaná, hogy eltudja érni a felhasználó a saját naptárát, adatait géptől függetlenül, bejelentkezés után. Az alkalmazás segítene a cég, és alkalmazottak életének és munkabeli teendőinek rendezésében. A cégüknél nagy problémát jelentett a rendezetlenség és a késések a megbeszélésekről, találkozókról reméljük egy ilyen alkalmazás megoldást jelent a helyzetre.

## Követelméyeink

* A naptár kezelésével kapcsolatban:
	* A funkciók eléérései legyenek jól láthatók, elérhetők.
	* Legyen könnyen kezelhető valamint jól átlátható.
* A vizuális felülettel kapcsolatban:
	* A vizualis felület legyen tetszetős/kidolgozott, még sem túl komplikált.
	* Szeretnénk, hogy a felület is átlátható legyen(látni lehet, hogy mely funkciók hol találhatók, és nem kell kutatni utánuk).
	* Az oldal különböző elemei jól különüljenek el egymástól.
* A naptár funkcióival kapcsolatban:
	* A weboldalnak képesnek kell lennie elmenteni a haladást, azokat cselekvéseket amelyeket a felhasználó végrehajtott, és ezeket elő kell tudni hívnia készüléktől függetlenül.
		* Ez azért olyan fontos, hogy ha nincsen a saját eszköze a közelben bejelentkezés után más eszközről is megtudja nézni a fiókját.
	* Események előtt jelezzen a program az esemény ideőpontjának közelségéről.
	* Időjárási adatai napra készek legyenek.

## Vágyálom rendszer

A projekt célja az hogy létrehozzunk egy olyan rendszert, ami segíti a minden napi eltünket rendezni, illetve elősegíteni annak minőségét. A rendszert szeretnénk úgy létrehozni, hogy ez minél több ember számára elérhető legyen. Erre legalkalmasabb felületnek egy weboldalt gondolunk, hiszen az bármilyen eszközről elérhető, feltéve ha van internet kapcsolatunk. Ahhoz, hogy elérjük a Naptárt be kell majd jelentkezni, így mindenki számára egyéni beállítások lesznek elérhetők. Az alkalmazáson belűl lehetőség lesz adott témák közűl választani, amiket a napokhoz hozzá rendelhetünk, mint pl: szabadidő, kinti foglalkozás, azon belül egyéb események lesznek megadva ezzel elérve, hogy minnél pontosabb értesítést, ajánlást kapjon a felhasználó az adott napról. Az oldalhoz hozzá lesz rendelve egy időjárás elöre jelzés, ahhonan be szerezzük a szükséges információkat az adott napról. A fent említett 'értesítések, ajánlások' ezeket takarják. Továbbá a bejelentkezés után lesz elérhető a Naptár. Ezen belűl szertnénk egy olyan mezőt létrehozni, ahhol az elkövetkező események jelennek majd meg (az adott heti események), egy időjárás előre jelzést és szerkezthetőség mezőt is szeretnénk hozzáadni. Továbbá célunk, hogy az oldal reszponzív legyen mind asztali mind mobil készülékeken.

---
## Fogalomszótár
1. **Reszponzív felület** - Mobilon, Tableten, *PC*-n igazodik a képernyőhöz a felület mérete, azaz több eszközön is probléma nélkül üzemelhet.”
2. **Login system** - Bejentkezéshez elkészített rendszer, ahhol felhasználónév plusz jelszó szükséges a belépéshez.
3. **Webböngésző** - A webböngészők a webszerverekkel HTTP protokollon keresztül kommunikálnak. A HTTP segítségével a böngészők adatokat küldhetnek a webszervereknek, valamint weblapokat tölthetnek le róluk.
4. **Interent** - Az internet olyan globális számítógépes hálózat, amelyen a számítógépek az internetprotokoll (IP) segítségével kommunikálnak. Felhasználók milliárdjait kapcsolja össze és lehetővé teszi olyan elosztott rendszerek működtetését, mint például a világháló (World Wide Web, WWW).
5. **CSS** -  Egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le.
6. **JavaScript** - Programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
7. **PHP** - Egy általános szerveroldali szkriptnyelv dinamikus weblapok készítésére. Az első szkriptnyelvek egyike, amely külső fájl használata helyett HTML oldalba ágyazható. A kódot a webszerver PHP feldolgozómodulja értelmezi, ezzel dinamikus weboldalakat hozva létre.
8. **PNG** - *Portable Network Graphics* képek tárolására, veszteségmentes tömörítésére alkalmas fájlformátum.
9. **JPEG** - *Joint Photographic Experts Group* képek tárolására alkalmas fájlformátum.
10. **HTTPS** - *HyperText Transfer Protocol Safe* egy URI-séma, amely biztonságos http kapcsolatot jelöl.
11. **Kliens** - olyan számítógép vagy azon futó program, amelyik hozzáfér egy *(távoli)* szolgáltatáshoz, amelyet egy számítógép hálózathoz tartozó másik számítógép *(a szerver)* nyújt.

 


