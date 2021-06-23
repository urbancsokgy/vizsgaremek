# vizsgaremek
 User story - Adminisztrátori szerepkör
---
---
## _**1. Főoldal**_
---
**1. agilis felhasználói történet:**
> _A főoldal egy összegző képernyő a webshop ismertetőjével, navigációs lehetőségekkel és néhány kiemelt termék ismertetésével. Tartalmazza a belépési és navigációs lehetőségeket.

**Elfogadási kritérium:**  

Egy mobiloptimalizált, látványos felületen, látványos képpel hangsúlyozza a webshop profilját és könnyű eligazodást biztosít felhasználói és adminisztrátori szinten is.
---
## _**2. Kerékpár adatbázis**_
---
**1. agilis felhasználói történet:**
>Egy helyről indulva áttekinthetők a webshop termékei, a termékek adatai. Lehetőséget ad a CRUD műveletek elvégzéséhez szükséges oldalak elérésére

**Elfogadási kritérium:**  

Az oldalra navigálva megjelenik az összes termék adata egy helyen, szűrhető, rendezhető formában.  
Ezek az adatok a termék legfontosabb jellemzői, az ár,  a raktárkészlet, valamint egy leírás mező ahol változó mennyiségű kiegészítő információ helyezhető el. A leírást egy, vagy több kép egészíti ki.
> Opcióként a nézet (kártyák mérete) változtathazó
---
---

**2. agilis felhasználói történet:**

> _Új termék adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával egy új kerékpár adatait lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön a termék adatlapja.
- Az oldalon lehetőség van arra, hogy az összes terméket listázó oldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A termék adatai szerkeszthetők._

**Elfogadási kritérium:**  
- A kerékpár kártyáján kattintva a választott bicikli adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és az adatlapján is.
- Az oldalon lehetőség van arra, hogy az összes kerékpárt listázó oldalra navigáljon vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A termék törölhető._

**Elfogadási kritérium:**  
- A termék kiválasztásával törölhető a rekord.
- A törlést követően frissül a listaoldal, ahol a már törölt kerékpár nem látható.

---

**5. agilis felhasználói történet:**

> _A biciklik kategóriák szerint listázhatók._

**Elfogadási kritérium:**  
A kategória kiválasztásával frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Bármilyen kulcsszóra lehet keresni egy választott kategórián belül._

**Elfogadási kritérium:**  
A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**7. agilis felhasználói történet:**

> _Különbözőképpen sorrendbe rendezhetőek a termékek egyes kategóriái._

**Elfogadási kritérium:**  
- Termékjellemző adatok alapján növekvő és csökkenő sorrendben lehet rendezni a kerékpárokat.
---
---
## _**3. Felhasználói adatbázis**_
---
**1. agilis felhasználói történet:**
>Egy helyről indulva áttekinthetők a felhasználók adatai. Lehetőséget ad a CRUD műveletek elvégzéséhez szükséges oldalak elérésére

**Elfogadási kritérium:**  

Az oldalra navigálva megjelenik az összes felhasználó adata egy helyen, szűrhető, rendezhető formában.  
Ezek az adatok a felhasználó legfontosabb jellemzői, a regisztrációs, kapcsolattartási, számlázási adatok, valamint a felhasználó szerepköre.
> Opcióként a nézet (kártyák mérete) változtathazó, részletes, vagy összegző formában.
---
---

**2. agilis felhasználói történet:**

> _Új felhasználó adatai vehetők fel (nem feltéstlenül szükséges, esetleg regisztrációs probléma esetén)._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával egy új felhasználó adatait lehet felvinni, a módosítás megjelenik a listázó oldalon, létrejön a felhasználó adatlapja.
- Az oldalon lehetőség van arra, hogy az összes felhasználó listázó oldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _A felhasználó adatai szerkeszthetők (pl, egy telefonos egyeztetés esetén a számlázási cím módosítása)._

**Elfogadási kritérium:**  
- A felhasználó kártyáján kattintva a választott felhasználó adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon és az adatlapján is.
- Az oldalon lehetőség van arra, hogy az összes felhasználót listázó oldalra navigáljon vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _A felhasználó törölhető._

**Elfogadási kritérium:**  
- A felhasználó kiválasztásával törölhető a rekord.
- A törlést követően frissül a listaoldal, ahol a már törölt felhasználó nem látható.

---

**5. agilis felhasználói történet:**

> _A felhasználók megadott szempont szerint listázhatók._

**Elfogadási kritérium:**  
A szempont kiválasztásával frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Bármilyen kulcsszóra lehet keresni._

**Elfogadási kritérium:**  
A kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**7. agilis felhasználói történet:**

> _Különbözőképpen sorrendbe rendezhetőek a felhasználók._

**Elfogadási kritérium:**  
- Szűrési adatok alapján növekvő és csökkenő sorrendben lehet rendezni a felhasználókat.
---
---
## _**4. Rendelési adatbázis**_
---
**1. agilis felhasználói történet:**
>Egy helyről indulva áttekinthetők a rendelések adatai. Lehetőséget ad a CRUD műveletek elvégzéséhez szükséges oldalak elérésére

**Elfogadási kritérium:**  

Az oldalra navigálva megjelenik az összes rendelés() adata egy helyen, szűrhető, rendezhető formában.  
Ezek az adatok a felhasználó és a megrendelt termék adatait is tartalmazzák. Az adatokból számla készíthető.
> Opcióként a nézet (kártyák mérete) változtathazó, részletes, vagy összegző formában.
---
---

**2. agilis felhasználói történet:**

>Számla készíthető a felhasználó és a termék adatainak összefésülésével

**Elfogadási kritérium:**  
- A megrendelés egyedi oldaláról elkészíthető a számla és bekerül a megrendelt termékek adatbázisba (véglegesített számlák)
---

**3. agilis felhasználói történet:**

> _A megrendelés adatai szerkeszthetők (pl, egy telefonos egyeztetés esetén a számlázási cím módosítása)._

**Elfogadási kritérium:**  
- A megrendelés adatainak módosítása minden érintett adatbázisban frissül.

---

**4. agilis felhasználói történet:**

> _A megrendelés törölhető._

**Elfogadási kritérium:**  
- A rendelés kiválasztásával törölhető a rekord.
- A törlést követően frissül a listaoldal, ahol a már törölt megrendelés nem látható.
---

**5. agilis felhasználói történet:**

> _A rendelések megadott szempont szerint listázhatók._

**Elfogadási kritérium:**  
A szempont kiválasztásával frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Bármilyen kulcsszóra lehet keresni._

**Elfogadási kritérium:**  
A kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**7. agilis felhasználói történet:**

> _Különbözőképpen sorrendbe rendezhetőek a rendelések._

**Elfogadási kritérium:**  
- Szűrési adatok alapján növekvő és csökkenő sorrendben lehet rendezni a megrendeléseket.
---
---
## _**5. Számlák adatbázisa**_
---
**1. agilis felhasználói történet:**
>Egy helyről indulva áttekinthetők a számlák adatai. Lehetőséget ad a CRUD műveletek elvégzéséhez szükséges oldalak elérésére (A számlákkal kapcsolatos jogszabályi ismeretek hiánya miatt a részletezés jelen esetben hiányos)

**Elfogadási kritérium:**  

Az oldalra navigálva megjelenik az összes számla adata egy helyen, szűrhető, rendezhető formában.  Ha lehetőség van rá a szüksége műveletek elvégzésére lehetőséget ad.

---
---
---
## _***Kiegészítő megjegyzések!!!***_
---

Kereskedelmi, webshop készítési és üzemeltetési ismeretek hiányában a jelenlegi "vázlat" módosításokat igényel például a rendelési-számlázási folyamat mélyebb megismerése után.

> Written with [StackEdit](https://stackedit.io/).
