# Riikka Rahikkala – verkkosivusto

Psykologin ja kognitiivisen psykoterapeutin (Riikka Rahikkala, Oulu) esittelysivusto.
Staattinen HTML/CSS, ei build-vaihetta. Julkaistaan GitHub Pagesissa `main`-haarasta:
https://ramirahikkala.github.io/riikka-rahikkala/

Sivuston sisältöä muokkaa yleensä Riikka itse, eikä hän ole ohjelmoija. Puhu hänelle selkeää suomea
ilman teknistä jargonia ja kerro lopuksi lyhyesti, mitä muutit ja missä.

## Rakenne

- `index.html` (Koti), `riikka/`, `palvelut/`, `hinnasto/`, `yhteystiedot/`, `saavutettavuus/` (kukin `index.html`)
- `style.css` on yhteinen ulkoasu, `script.js` kokoaa sähköpostilinkin selaimessa
- `sitemap.xml`, `robots.txt`, `404.html`
- HTML-tiedostot ovat lähdekoodi. Muokkaa niitä suoraan.

Yläpalkki (valikko) ja alapalkki toistuvat jokaisella sivulla. Jos muutat niitä, muuta **kaikki** sivut.
Etusivulla linkit ovat `palvelut/`, alasivuilla `../palvelut/`. Älä riko polkuja.

## Mitä saa muuttaa

- **Tekstit, hinnat ja yhteystiedot** saa muuttaa Riikan pyynnöstä.
- **Ulkoasun** (värit, asettelu, fontit) muutokset vain, jos Riikka pyytää. Pidä ne pieninä ja selkeinä.
- Uusi sivu: kopioi olemassa oleva sivu pohjaksi, lisää linkki valikkoon kaikille sivuille ja lisää osoite `sitemap.xml`:ään.

## Sisältösäännöt

- Kirjoita suomea, rauhallisella ja asiallisella sävyllä. Sinuttelu tai "minä"-muoto kuten nyt: Riikka puhuu itse.
- **Älä keksi** hintoja, Kela-korvauksia, omavastuita, päivämääriä, koulutuksia, pätevyyksiä tai lupauksia hoitotuloksista.
  Jos tieto puuttuu, kysy Riikalta tai jätä `[hakasulkeissa oleva paikanvaraus]`, jotta puute on näkyvissä.
- Ei lääketieteellisiä väitteitä tai takuita ("parantaa", "varmasti"). Kuvaa palvelua, älä lupaa tulosta.
- **Ei asiakastietoja:** ei nimiä, kokemustarinoita, kuvia asiakkaista eikä muuta tunnistettavaa tietoa.
- Kela- ja hintatiedot muuttuvat. Muista pyytää Riikkaa tarkistamaan ne ennen julkaisua.
- Nykyiset paikanvaraukset (`[hakasulkeissa]`) ovat hinnasto- ja palvelusivuilla sekä yhteystiedoissa. Poista hakasulkeet vain, kun oikea tieto on annettu.

## Saavutettavuus (pidettävä kunnossa)

Tavoite on WCAG 2.2 AA (ks. `saavutettavuus/`). Muutoksissa:
- Säilytä otsikkotasot (yksi `h1` sivulla, sitten `h2`, `h3`) ja sivun alueet (`header`, `nav`, `main`, `footer`).
- Kuville aina kuvaava `alt`-teksti. Koristekuvalle `alt=""` tai `aria-hidden="true"`.
- Linkkitekstin pitää kertoa määränpää ("Lue lisää: Psykoterapia", ei pelkkä "Klikkaa tästä").
- Teksti/tausta-kontrastin vähintään 4,5:1. Käytä `style.css`:n väri-muuttujia (`--ink`, `--green`, `--clay` ym.).
- Painikkeet ja linkit vähintään noin 44 px korkeita. Älä poista näppäimistökohdistuksen näkyvyyttä.
- Älä estä zoomausta (ei `maximum-scale` viewportissa). Käytä `rem`-yksiköitä.
- Päivitä `saavutettavuus/`-sivun päivämäärä ja tiedossa olevat puutteet, jos teet olennaisen muutoksen.

## Tekniset muistettavat

- Pidä sivusto kevyenä: ei ulkoisia kirjastoja, fontteja, seurantaa, evästeitä eikä ulkoisia skriptejä.
  (Tietosuoja: ei analytiikkaa tai upotuksia ilman erillistä päätöstä.)
- Jokaisella sivulla pitää olla oma `<title>`, `meta description` ja `canonical`-linkki. Päivitä ne, jos sivun sisältö muuttuu.
- Puhelinnumero on `tel:+358451076881`, ja sähköposti pidetään `data-mail`-muodossa (`script.js` kokoaa osoitteen),
  jotta se ei näy sellaisenaan HTML:ssä.
- Tarkista muutoksen jälkeen, että kaikki sisäiset linkit osoittavat olemassa oleviin tiedostoihin.

## Julkaisu

- Muutos julkaistaan, kun se on `main`-haarassa. Pages päivittyy yleensä minuutissa tai parissa.
- `main`-haaraa ei ole vielä suojattu. Ole siis huolellinen: katso muutos ennen kuin työnnät sen.
- Commit-viesti suomeksi ja lyhyesti: mitä muuttui.
- Salaisuuksia ei tallenneta repoon. Jos jokin näyttää salasanalta tai avaimelta, älä commitoi sitä.
