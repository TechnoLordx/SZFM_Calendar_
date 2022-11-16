# Kővetelmény Specifikációs Dokumentum

## Áttekintés

* Az alkalmazás egy olyan felületet biztosít, amely segít megtervezni a napjainkat.
* Az alkalmazás egy webes felület lesz, amely olyan módon van megcsinálva, hogy telefonról számítógépről egyaránt elérhető legyen.
* A webboldal főrésze egy naptár lesz, amihez lehet eseményeket hozzáadni. Az eseményeknek különböző címkét meg lehet majd adni, az események bekövetkezése előtt egy meghatározott idővel jelezni fog az oldal a közeledő eseményről.
* Fontos része lesz a projektnek egy beépített időjárás figyelő, amely segít az aznapi programok megszervezésében, illetve jelez, ha az esemény rossz idő miatt elmarad.
* Bejelentkezési rendszer segítségével szűrjük le a botokat.

## Jelenlegi helyzet

A cégünk szeretne létrehozni egy olyan weboldalt, amely segítene a megbeszélések szervezésében, az alkalmazottaknak segítene észbe tartani a mindennapi tevékenységeiket. Egy könnyen kezelhető, átlátható weboldal megalkotása a cél. Bejelentkezési rendszer biztosítaná, hogy eltudja érni a felhasználó a saját naptárát, adatait géptől függetlenül, bejelentkezés után. Az alkalmazás segítene a cég, és alkalmazottak életének és munkabeli teendőinek rendezésében. A cégüknél nagy problémát jelentett a rendezetlenség és a késések a megbeszélésekről, találkozókról. Reméljük, hogy egy ilyen alkalmazás megoldást jelent a helyzetre.

## Követelméyeink

* A naptár kezelésével kapcsolatban:
	* A funkciók eléérései legyenek jól láthatóak, elérhetőek.
	* Legyen könnyen kezelhető, valamint jól átlátható.
* A vizuális felülettel kapcsolatban:
	* A vizuális felület legyen tetszetős/kidolgozott, még sem túl bonyolult.
	* Szeretnénk, hogy a felület is átlátható legyen (látni lehet, hogy mely funkciók hol találhatók, és nem kell kutatni utánuk).
	* Az oldal különböző elemei jól különüljenek el egymástól.
* A naptár funkcióival kapcsolatban:
	* A weboldalnak képesnek kell lennie elmenteni a haladást, azokat cselekvéseket amelyeket a felhasználó végrehajtott, és ezeket elő kell tudni hívnia készüléktől függetlenül.
		* Ez azért olyan fontos, hogy ha nincsen a saját eszköze a közelben bejelentkezés után más eszközről is megtudja nézni a fiókját.
	* Események előtt jelezzen a program az esemény időpontjának közelségéről.
	* Időjárási adatai napra készek legyenek.

## Vágyálom rendszer

A projekt célja, hogy létrehozzunk egy olyan rendszert, ami segíti a mindennapi életünket rendezni, illetve elősegíteni annak minőségét. A rendszert szeretnénk úgy létrehozni, hogy ez minél több ember számára elérhető legyen. Erre legalkalmasabb felületnek egy weboldalt gondolunk, hiszen az bármilyen eszközről elérhető, feltéve, hogy van internet kapcsolatunk. Ahhoz, hogy elérjük a Naptárat, be kell majd jelentkezni, így mindenki számára egyéni beállítások lesznek elérhetők. Az alkalmazáson belül lehetőség lesz adott témák közül választani, amiket a napokhoz hozzá rendelhetünk, mint például szabadidő, kinti foglalkozás, azon belül egyéb események lesznek megadva ezzel elérve, hogy minél inkább pontosabb értesítést, ajánlást kapjon a felhasználó az adott napról. Az oldalhoz hozzá lesz rendelve egy időjárás előrejelzés, ahonnan be szerezhetjük a szükséges információkat az adott napról. A fent említett 'értesítések, ajánlások' ezeket takarják. Továbbá a bejelentkezés után lesz elérhető a Naptár. Ezen belül szeretnénk egy olyan mezőt létrehozni, ahhol az elkövetkező események jelennek majd meg (az adott heti események), egy időjárás előre jelzést és szerkezthetőség mezőt is szeretnénk hozzáadni. Továbbá célunk, hogy az oldal reszponzív legyen mind asztali, mind mobil készülékeken.

---

## Jelenlegi üzleti folyamatok
Sok naptár létezik az interneten, ahol fel tudjuk venni adott napra a teendőket, vagy csak nem szeretnénk elfelejteni valakinek a születésnapját, akár emlékeztetőt is rakhatunk.
Ezek a weblapok/appok hasznosak nagyon, de nem figyelmeztetnek a külső tényezőkről, mint például az időjárásról.
Ha szabadtéri eseményt terveztünk be, könnyen lehet, hogy nem tudjuk megszervezni az eső, vagy egy erős szél miatt.

---

## Igényelt üzleti folyamatok
* **Miért lesz különleges ez a naptár:** A naptár mellett lesz egy időjárást mutató ablak is.
Így az adott napról tájékoztatást kapunk, hogy megérné-e nekünk az adott eseményt akkor tartani.
Például, ha szabadtéri eseményt akarunk rendezni, akkor látjuk, hogy aznap milyen lesz az idő és ezt figyelembe véve hozhatjuk meg a döntést.
* **Login:** Ha felvesz egy eseményt adott időpontra a felhasználó, akkor azt tárolnunk kell.
Ebben egy Login System fog segíteni nekünk.
Az adatok tárolása bejelentkezéshez lesz kötve, hogy mindenhonnan elérhető legyen.
Regisztráció és bejelentkezés kötelező lesz.
Amint megtörténik a bejelentkezés, már kezdhetjük is az események létrehozását.
* **Regisztráció:** Egyedi felhasználónév, létező és megfelelő email cím, megfelelő hosszúságú és elég erős jelszó megadása.
Felhasználó tájékoztatása a nem megfelelő adatok megadásáról.
A jelszó megerősítése szükséges újra megadásával.
Belépés felhasználónév és jelszóval történik.


---

## Szabad riport
### Hogyan kéne működnie a rendszernek?

Az oldal bármelyik internettel és webböngészővel rendelkező eszközről elérhető. Amint megnyitjuk az oldalt, egy kis egyszerű HTML oldal tárul elénk. Ezen az oldalon egy átlagos naptár és egy idő előrejelzés található,illetve egy login azaz beléptetési rendszer. Innen a "Login system-re" beléptetési lehetőségre kattintva egy teljesen új oldalra átírányiít minket az adott böngésző. Itt van lehetőségünk választani hogy regisztrálni,vagy bejelentkezni szeretnénk. A regisztráció történhet manuálisan,továbbá google és facebook-kal. Sikertelen bejelentkezés esetén kapunk egy megfelelő kis hibaüzenetet, hogy miért nem sikerült bejelentkeznünk. Sikeres bejelentkezés esetén átírányít minket a főoldalra. Bal oldalt egy naptárt alatta a közelgő programokat jelzni nekünk az oldal. Jobb oldalt esemény hozzáadaása illetve egy időjárás előrejelzés látható. A naptárban bárki bármilyen eseményt létrehozhat. Az eseményhez hozzárendelhet egy helyszíni tulajdonságot, mely segít a speciális támogató funkcióval ellátott időjárás előrejelzésünket, hogy megfelelő figyelmeztetéssel jelezze a felhasználó felé, hogy az időjárás nem alkalmas vagy nem ajánlott az adott programhoz. Két ütköző program esetén egy megfelelő hibajelzés jelenik meg. A program előtt, ha figyelmetlenek volnánk még email formájában is értesítést küld, hogy el ne felejtsük a programot.

## Irányított riport

### Kötelező beregisztrálni?
Nem, de ajánlott.

### Lehet regisztrálni manuálisan?
Igen, természetesen lehet.

### Facebookal  lehet regisztrálni?
Igen, lehet.

### Google-el  lehet regisztrálni?
Igen, lehet.

### Nyári programok szervezésére is van lehetőség?
Igen, van.

### Lehet rögzíteni programokat a naptárban?
Igen, van rá lehetőség.

### Kapcsolatba lehet lépni a fejlesztőkkel?
Igen, kapcsolatba lehet lépni velük emailen keresztül.

### Több szolgáltatást nyújt, mint egy sima szervező program?
Igen, az időjárás kisegítő funkció miatt is részben.

### Tavaszi programok szervezésére is van lehetőség?
Igen, van.

### Nagyban megkönnyíti a program szervezést?
Igen, hisz erre a célra lett kitalálva.

### Ha elfelejteném a programomat, akkor értesít valamilyen formában?
Igen, emailben.

### Megbízhatóak az időjárás előrejelzések?
Igen, pont annyira, amennyire a többi időjárás előrejelző alkalmazásban.

### Az időjárás jelzés minden várost tartalmaz?
Nem, de a lehető legtöbbet igen, hisz erre törekszünk.

### Téli programok szervezésére is van lehetőség?
Igen, van.

### Nagy rendszerigénye van?
Nem, szinte semmil mivel ez egy weboldal.

### Bármelyik eszközről elérhető? 
Igen, feltéve, hogy rendelkezik böngészővel és internettel az eszköz.

### Egyszerűen kezelhető?
Igen, kifejezetten felhasználóbarát.

### Várhatóan időben kész lesz?
Igen, teljes mértékben.



## Fogalomszótár
1. **Reszponzív felület** - Mobilon, Tableten, *PC*-n igazodik a képernyőhöz a felület mérete, azaz több eszközön is probléma nélkül üzemelhet.
2. **Login system** - Bejentkezéshez elkészített rendszer, ahol felhasználónév és jelszó szükséges a belépéshez.
3. **Webböngésző** - A webböngészők a webszerverekkel HTTP protokollon keresztül kommunikálnak. A HTTP segítségével a böngészők adatokat küldhetnek a webszervereknek, valamint weblapokat tölthetnek le róluk.
4. **Interent** - Az internet olyan globális számítógépes hálózat, amelyen a számítógépek az internetprotokoll (IP) segítségével kommunikálnak. Felhasználók milliárdjait kapcsolja össze és lehetővé teszi olyan elosztott rendszerek működtetését, mint például a világháló (World Wide Web, WWW).
5. **CSS** -  Egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le.
6. **JavaScript** - Programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
7. **PHP** - Egy általános szerveroldali szkriptnyelv dinamikus weblapok készítésére. Az első szkriptnyelvek egyike, amely külső fájl használata helyett HTML oldalba ágyazható. A kódot a webszerver PHP feldolgozómodulja értelmezi, ezzel dinamikus weboldalakat hozva létre.
8. **PNG** - *Portable Network Graphics* képek tárolására, veszteségmentes tömörítésére alkalmas fájlformátum.
9. **JPEG** - *Joint Photographic Experts Group* képek tárolására alkalmas fájlformátum.
10. **HTTPS** - *HyperText Transfer Protocol Safe* egy URI-séma, amely biztonságos http kapcsolatot jelöl.
11. **Kliens** - olyan számítógép vagy azon futó program, amelyik hozzáfér egy *(távoli)* szolgáltatáshoz, amelyet egy számítógép hálózathoz tartozó másik számítógép *(a szerver)* nyújt.
