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
    * Interaktív menük, gombok használata.
* A vizuális felülettel kapcsolatban:
	* A vizualis felület legyen tetszetős/kidolgozott, még sem túl komplikált.
	* Szeretnénk, hogy a felület is átlátható legyen(látni lehet, hogy mely funkciók hol találhatók, és nem kell kutatni utánuk).
	* Az oldal különböző elemei jól különüljenek el egymástól.
    * A stílus megváltoztatási lehetőége.
    * Az oldal különböző részei vátoznak, alkalmazkodnak a méretarányokhoz.
* A naptár funkcióival kapcsolatban:
	* A weboldalnak képesnek kell lennie elmenteni a haladást, azokat cselekvéseket amelyeket a felhasználó végrehajtott, és ezeket elő kell tudni hívnia készüléktől függetlenül.
		* Ez azért olyan fontos, hogy ha nincsen a saját eszköze a közelben bejelentkezés után más eszközről is megtudja nézni a fiókját.
	* Események előtt jelezzen a program az esemény ideőpontjának közelségéről.
        * Értesít alkalmazáson keresztül, illetve emailen kapott levél segítségével.
	* Időjárási adatai napra készek legyenek.
        * Jól nézzen ki rendezett legyen, illetve adatai változzanak folyamatosan az időjáráshoz illően.


<img src="oldal_vazlat.png" alt="Oldal vázlata" />
<br><br>

## A rendszer céljai:
* Egy jól átlátható felület létrehozása.
* Az oldal könnyen kezelhető legyen.
* Időpont ütkozések problémájának lekezelése.
* Felmerülő ajánlások vagy esetleg figyelmeztetések mihamarabbi küldése.
* A szerkezthetőség mező eggyértelmű legyen.
* Minnél több esmény téma hozzáadása, ezáltal pontosabb ajánlások.
* A felhasználó életének megkönnyítése. 
* A felhasználók adatainak bizalmas kezelése.

## A rendszer nem céljai:
* Túl zsúfolt kezelő felelület.
* Összezavaró menürendszer. 
* Reklám megjelenítések.
* "Like/Dislike" alapú szavazási rendszer kialakítása a hozzászólások megbízhatóságának megszavazása érdekében.
* Az emberek egymáskozött az eseményeket megoszthassák.
* Spam e-mail küldése a felhasználólnak.
* A felhasználó adatainak felhasználása haramadik fél által. 

---

## Jelenlegi üzleti folyamatok
Sok naptár létezik az interneten, ahol fel tudjuk venni adott napra a teendőket, vagy csak nem szeretnénk elfelejteni valakinek a születésnapját, akár emlékeztetőt is rakhatunk.
Ezek a weblapok/appok hasznosak nagyon, de nem figyelmeztetnek a külső részletekről, mint például az időjárásról.
Ha szabadtéri eseményt terveztünk be, könnyen lehet, hogy nem tudjuk megszervezni az eső, vagy egy erős szél miatt.

---

## Igényelt üzleti folyamatok
* **Miért lesz különleges ez a naptár:** A naptár mellett lesz egy időjárást mutató ablak is.
Így az adott napról tájékoztatást kapunk, hogy megérné-e nekünk az adott eseményt akkor tartani.
Például, ha szabadtéri eseményt akarunk rendezni, akkor látjuk, hogy aznap milyen lesz az idő és ezt figyelembe véve ezt hozhatjuk meg a döntést.
* **Login:** Ha felvesz egy eseményt adott időpontra a felhasználó, akkor ezt tárolnunk kell.
Ebben egy Login System fog segíteni nekünk.
Az adatok tárolása bejelentkezéshez lesz kötve, hogy mindenhonnan elérhető legyen.
Regisztráció és bejelentkezés kötelező lesz.
Amint megtörténik a bejelentkezés, már kezdhetjük is az események létrehozását.
* **Regisztráció:** Egyedi felhasználónév, létező és megfelelő email cím, megfelelő hosszúságú és elég erős jelszó megadása.
Felhasználó tájékoztatása a nem megfelelő adatok megadásáról.
A jelszó megerősítése szükséges újra megadásával.
Belépés felhasználónév és jelszóval történik.

---

# Tesztterv
Minden programot tesztelni kell, mivel sohasem lehet tudni mikor mi nem működik úgy ahogy annak kellene.
Tökéletes kód nem létezik, ezért van szükség tesztelésre.
A kód írója persze állandóan nézi, hogy amit implementál, az úgy működik-e, ahogy ő azt tervezte, azonban ez szinte soha sem elég.
Ezért van mindig szükség legalább egy, de inkább több harmadik személyre is, akik kipróbálják a programot, mert ahány ember, annyiféle módon használnak egy alkalmazást.
Így bukkanhatunk rá olyan hibákra is, amire egyáltalán nem is számítottunk.
Azonban nem csak hibákat próbálunk keresni teszteléskor, hanem más szempontjából is akarjuk látni, hogy milyen is maga a program.
Kaphatunk ötleteket, hogy mivel egészítenék ki az eddigi munkát, vagy hogy min változtatnának rajta, mivel szerintük az jobb lenne a felhasználóknak.

A tesztelés fázisai:
* manuális teszt
* automatizált teszt
* alpha teszt
* beta teszt

A manuális teszt olyan teszt amit személyesen végzünk.

Az alpha teszt legfőképp in-house történik, hogy megnézzük működnek-e az alapfunkciók. Ilyen lehet például:

* elindul-e a program más környezetben/számítógépen
* működik-e minden gomb
* egy gomb nyomására az elvárt eredményt kapjuk-e, jelen esetben az adott napra kattintva bejön, az arra a napra tervezett események listja.

A beta teszt pedig már lehet nyilvános is, ilyenkor akárki tesztelheti, aki szeretné. Ekkor már rengeteg visszajelzést kaphatunk, lehet az bug report, vagy új ötlet, változtatás az eddigi működésben. Például:

* Gombok elhelyezése
* Reportok fogadása
* Más háttér alkalmazása

Sikeresnek mondható a teszt, ha már szinte semmiféle probléma nem található a programban, és a mások által feltett és a fejlesztő által elfogadott változtatásokat, újításokat is implementáltuk. Ezután meg is történhet a szoftver első kiadása.

## Forgatókönyv
### Egy program megszervezése

Megnyitjuk az oldalt,egy kis egyszerű html oldal tárul elénk. Ezen az oldalon egy átlagos naptár és egy idő előrejelzést látok.
Rákattintok a "Login systemre" azaz a beléptetési lehetőségre de mivel még nincs felhasználói fiókom így rögtön tovább is kattintok a regisztrációra. Sok lehetőséget látok de én nem szeretném hogy összekösse a közösségi fiókomat bármivel is így manuális regisztrálok. Miután beléptem ki is választom a megfelelő időpontot,helyszíni témát és létre is hozom. Az oldal jelez nekem hogy várhatólag esni fog mivel csakugyan olyan pontos mint a többi időjárás szolgáltató applikáció. Kiválasztok egy másik időpontot itt napos idő várható. Tovább küldöm  kollégáimnak a weboldalt hogy ők is beregisztrálhassanak és értesüljenek megfelelő időben előtte.

## Olvasmányos dokumentum

Te vagy a főnök? Fárasztó felügyelni mindenkit? Fáradt vagy? Unalmas nézni ahogy dolgoznak a munkások? Unalmas a mindennapi fogaskerék? Itt a megoldásod, szervez egy programot. De hol? Itt egy tökéletes weblap erre.<br>
Nyaggadtan a telhetetlen dolgzók hogy a napi 16 óra munka mellet nincs semmi életük és fáradtak. Vidd el őket vadászni,szórakozni amit szeretnél persze feltétlenül hétvégén még a feleség is örülni fog neki. Megnyitod a weblapot. Semmi extrát nem látsz de látsz egy beléptetési rendszert. Nincs felhasználód? Néhány kattintás és persze be is regisztráltál. Kiválasztasz egy napot de most külön megszeretnéd nézni hogy milyen idő lesz? Komolyan rá szánsz 3 kattintást? Itt kiírja hogy váhatóan alkalmas vagy nem alkalmas az időpont. Ennyire egyszerű. Most már csak annyi a dolgod hogy küldj egy kör emailt és nézd hogy mennyire örülnek ennek a dolgozók.


<img src="advertise.png" alt="Reklám" width=100% height=600/>



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
12. **Frontend:**
Frontend-nek számít minden, amit egy weboldalon látsz: funkciók, dizájnelemek, felépítés.
13. **Backend:**
A Backend a háttérben futó folyamatokkal foglalkozik, pl. szerveroldali programozással, űrlapon beküldött adatok feldolgozásával, statisztika készítéssel.