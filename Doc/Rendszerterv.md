# Ütemterv
* Követelmény specifikáció létrehozásának határideje: 2022.10.17
* Funkcionális specifikáció létrehozásának határideje: 2022.09.17
* Rendszterv létrehozásának határideje: 2022.10.24
* Tesztek megírásának határideje: 2022.11.28
* A weboldal elkészülésének határideje: 2022.11.28

## Áttekintés

* Az alkalmazás egy olyan felületet biztosít, amely segít megtervezni a napjainkat.
* Az alkalmazás egy webes felület lesz, amely olyan módon van megcsinálva hogy, telefonról számítógépről egyaránt elérhető legyen.
* A webboldal főrésze egy naptár lesz amihez lehet eseményeket hozzáadni, az eseményeknek különböző címkét meg lehet majd adni, az események bekövetkése előtt egy meghatározott idővel jelezni fog az oldal a közeledő eseményről.
* Fontos része lesz a projektnek egy beépített időjárás figyelő amely segít az aznapi programok megszervezésében, illetve jelez ha az esemény rossz idő miatt elmarad.
* Bejelentkezési rendszer segítségével tárolva lesz az előrehaladás, illetve ennek segítségével más eszközről is eltudjuk érni a saját naptárunkat.

## Jelenlegi helyzet

A cégünk szeretne létrehozni egy olyan weboldal amely segítene a megbeszélések szervezésében, az alkalmazottaknak segítene észbe tartani a mindennapi tevékenységeiket. Egy könnyen kezelhető, átlátható weboldal megalkotása a cél. Bejelentkezési rendszer biztosítaná, hogy eltudja érni a felhasználó a saját naptárát, adatait géptől függetlenül, bejelentkezés után. Az alkalmazás segítene a cég, és alkalmazottak életének és munkabeli teendőinek rendezésében. A cégüknél nagy problémát jelentett a rendezetlenség és a késések a megbeszélésekről, találkozókról reméljük egy ilyen alkalmazás megoldást jelent a helyzetre.

---

## Jelenlegi elképzelés:

* **Elképzelt kezdőoldal:**

<img src="kezdooldal.png" alt="Kezdő oldal"/>

<br>

* **Elképzelt főoldal:**

<br>

<img src="fooldal.png" alt="Naptár"/>

<br>

* **Elképzelt login oldal:**

<br>

<img src="login_oldal.png" alt="Login oldal"/>

<br>

**A fejlesztés során bővűlni fog frissebb képekkel.**

---
## Megvalósított weboldal kinézet: 

* **A fejlesztés során bővűlni fog frissebb képekkel.**
---

---
## Használati esetek

**A használati eset a rendszer és a felhasználók közötti kommunikációt írják le.**

* A felhasználók bejelentkezés után tudnak hozzá férni az oldalon található naptárhoz. 

* A Főoldalon a naptár mindenkinek egyénre szabott azza az adatbázisba felhasználonként tároljuk az adatokat.

* Lehetőség van cimkéket megadni az eseményekhez, egyszerű kattintással lehet azokat hozzá adni.

* A cimkék egy külön legördülő menuben érhetők el a felhasználónak.

* Az időjárást is meg lehet tekinteni az adott napra és ezáltal előre jelzi az oldal ha az adott napra pl.: szabadtéri eseményt szerveztünk, hogy valószinüleg ez nem fog megvalósulni. Így komunikál az oldal a felhasználókkal.

---

# Mérföldkövek
1. Funkcionális specifikáció és követelmény specifikáció létrehozása
2. Rendszerterv megalkotása
3. Kezdőoldal létrehozása (login rész)
4. Kezdőoldal megformázása, és stílus megalkotása
5. Főoldal létrehozása (naptár, időjárás, programok)
6. Főoldal megformázása, és stílus megalkotása
7. Oldalak összekötése
8. Kezdőoldal bejelentkezés és regisztráció megírása
9. Adatbázishoz kötés
11. Interaktív gombok, szövegek hozzáadása
12. Tesztelés
13. Bemutatás


# Üzleti szereplők
* A weboldalt bárki használhatja, aki rendelkezik internet hozzáféréssel. 
* Mivel bárki használhatja, így törekszünk, hogy minél egyszerűbb és könnyen kezelhető legyen a felület.


# Üzleti folyamatok
* A kezdőoldalon egy bejelentkezési felületet láthatunk, ahol beléphetünk a fiókunkba, vagy regisztrálhatunk egy új fiókot.
* Bejelentkezés után a főoldal tárul elénk, több információ is szolgálatunkra áll.
    * Első sorban egy naptár, amin ki lehet választani, hogy melyik napra szeretnénk programot szervezni.
    * Láthatunk egy időjárással kapcsolatos ablakot, ami tájékoztat minket az időjárásról, hogy a programokat ennek megfelelően szervezhessük.
* Lehetőségünk lesz kijelentkezésre, így visszavezet minket a kezdőoldalra, ha például fiókot szeretnénk váltani.


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

## A rendszer céljai:
* Egy jól átlátható felület létrehozása.
* Jól olvasható szöveg, jól elkülönített tartalom.
* Feltűnő és érdekes kinézet.
* Az oldal átméretezése során, az oldal tartalma változzon úgy hogy, jól olvasható maradjon.
* Interaktív szöveg és gombok segítsék a felhasználót.
* Az oldal készítőinek elérhetőségeit feltüntetni.
* Jól működő login system
* Időjárás jelzése
* Valamilyen szavazási rendszer
* Az oldal könnyen kezelhető legyen.
* A felhasználó életének megkönnyítése. 
* A felhasználók adatainak bizalmas kezelése.
* A Felhasználók elkülönítése rangszerint
* A felhasználók egymáskozött az eseményeket megoszthassák.
* Programok rögzítése
* Időpont ütkozések problémájának lekezelése.
* Felmerülő ajánlások vagy esetleg figyelmeztetések mihamarabbi küldése.
* A szerkezthetőség mező eggyértelmű legyen.
* Minnél több esmény téma hozzáadása, ezáltal pontosabb ajánlások.
* Kommunikálni oldalon kívül a felhasználóval

## A rendszer nem céljai:
* Túl zsúfolt kezelő felelület.
* Összezavaró menürendszer. 
* Reklám megjelenítések.
* Felesleges felhasználói rangok
* "Like/Dislike" alapú szavazási rendszer kialakítása a hozzászólások megbízhatóságának megszavazása érdekében.
* Spam e-mail küldése a felhasználólnak.
* A felhasználó adatainak felhasználásaT
* Social regisztráció lehetőség

# A projekten dolgozók listája és feladatai:

1. Bezgerédi Erik - FullStack programozó
2. Vass Bálint - FullStack programozó
3. Ilés Zoltán Levente - FullStack programozó
4. Kocsis Olivér - FullStack programozó

* Bezerédi Erik felelős a weboldal mögött futó programok megírása JavaScript nyelven, illetve HTML PHP és CSS fejlesztés is. Hibajavítás és a többiek munkájának ellenőrzése is.
* Vass Bálint felelős a weboldal mögött futó programok megírása JavaScript nyelven, illetve HTML PHP és CSS fejlesztés is. Hibajavítás és a többiek munkájának ellenőrzése is.
* Illés Zoltán felelős a weboldal mögött futó programok megírása JavaScript nyelven, illetve HTML PHP és CSS fejlesztés is. Hibajavítás és a többiek munkájának ellenőrzése is.
* Kocsis Olivér felelős a weboldal mögött futó programok megírása JavaScript nyelven, illetve HTML PHP és CSS fejlesztés is. Hibajavítás és a többiek munkájának ellenőrzése is.

## Fizikai környezet

Visual studio code-ot használtunk a PHP,CSS,HTML illetve a javascript kódok megírásához. A weboldal megjelenítéséhez külön vásásrolt domaint illetve tárhelyet használunk. Az oldal jelenlegi teszteléséhez XAMOT használunk. Ezen belül futtatunk egy localis szervert és egy localis tárhelyet mellyet később éles webszerverre cserélünk.

### File tipusok
+ Css
+ PHP
+ java script
+ HTML
+ jquarry

### Kölső szoftverek

+ Visual studo code
+ XAMP
+ Weather api
+ ....
+ ....

## Architektúrális terv

A weblap egy online szerveren fut, amit bárki bármikor elérhet megfelelő ha rendelkezik valamilyen internet szolgáltatással.

Backend:
A rendszerhez szükség van egy adatbázis szerverre mely myisam tárolási elven működik. 
Ebben az esetben MySql-t használunk. A kliens oldali programokat egy javasript alapú api
szolgálja ki, ez csatlakozik az adatbázis szerverhez is mely képes fogadni és küldeni vagy változtatni 
adatokat vagy éppen újjakat létrehozni 
Web Kliens:
A web alkalmazás microsoft.net keretrendszer használatával készül el. A javasript alapú
lekérő rendszer segítségével az adatokat küldeni és fogadni is tudja. A userek be tudnak lépni
szintén egy javascript alapú lekérdezés dönti el hogy jogosult-e a belépésre.
Ez biztosítja, hogy illetéktelen felhasználók ne módosíthassák az adatokat.

## Adatbázis terv

Az adattárolás egy mysql táblák segítségével valósul meg. A login system is ilyen tábla alapján csatlakozik. Egy users tábla tárolja a regisztrációnál tárolt adatokat mellyeket vissza is hív így ellenőrizve hogy a felhasználó jogosult-e a belépéshez. A naptár a naptár_data mysql fileból tölti be vagy törli vagyé épp adja hozzá a terveztett programot. A weather fetch egy openweather api nevű külső szolgáltatástól kéri le az adatokat mellyeket meg is jelenít.

<img src="kep1.png" alt="Adatbázis terv" style="height:200; width:300;"/>

## User

### ID:
Azonosító ami a primary kulcs is egyedi minden felhasználónak.Int alapú maximális hossza 100 karakter.
### Firstname:
Családnév mely a regisztrációnal kötelező.Varchar tipúsú maximális hossza 100 karakter.
### Surname: 
Keresztnév mely a regisztrációnal kötelező.Varchar tipúsú maximális hossza 100 karakter.
### email: 
Email cím mely a regisztrációnal kötelező.Varchar tipúsú maximális hossza 100 karakter.
### jelszó:
Jelszó mely a regisztrációnal kötelező. Ezzel lehet bejelentkezni az oldalra. Egyedi minden felhasználónál.Varchar tipúsú maximális hossza 100 karakter.
### Felhasználó név
Felhasználó egyedi azonosító bejelentkezésnél kötelező.Varchar tipúsú maximális hossza 100 karakter.
### Role:
Role mely a regisztrációnal kötelező.Varchar tipúsú maximális hossza 100 karakter.
### Gender:
Nem szerinti elkülönítés regisztrációnal van szerepe.Varchar tipúsú maximális hossza 100 karakter.

## Calendar_data

### id
Azonosító ami a primary kulcs is egyedi minden felhasználónak.Int alapú maximális hossza 100 karakter.
### title
Neve a programnak.Varchar típus maximális hossza 100 karakter.
### description
Leírás a programról.Varchar típus maximális hossza 100 karakter.
### Start_datetime
Mikor kezdődik a program.Datetime típus
### end_datetime
Meddig tart a program.Datetime típus

## Karbantartási terv
A weblap folyamatos üzemeltetése és karbantartása, mely magában foglalja az esetleges hibák elhárítását, a belső igények változása miatti módosításokat, valamint a környezeti feltételek változása miatt megfogalmazott weblap, illetve állomány módosítási igényeket. Idő elteltével új témákat kell hozzáadni a weblaphoz, hogy fent tartsuk az érdeklődési szintet.

### Karbantartás
Corrective Maintenance: A felhasználók által felfedezett és "user reportban" elküldött hibák kijavítása.
Adaptive Maintenance: A program naprakészen tartása és finomhangolása.
Perfective Maintenance: A szoftver hosszútávú használata érdekében végzett módosítások, új funkciók, a weboldal teljesítményének és működési megbízhatóságának javítása.
Preventive Maintenance: Olyan problémák elhárítása, amelyek még nem tűnnek fontosnak, de később komoly problémákat okozhatnak.


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