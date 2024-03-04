# Portfoliosivu

Täytä omat tiedot tähän

## Nimi
Antonio Skondras

## Opiskelijanumero
763787

## Linkki netissä pyörivään sivustoon
https://portfolio-five-xi-82.vercel.app/

## Mitkä asiat teit

Teitkö jotain puutteellisesti? Mitä jätit tekemättä?

Sain tehtyä faviconin ja koko sivuston rakenteen. Sain myös tehtyä sivustolle breakpointteja (media-query). Sain lisättyä kaikille elementeille tyylit. Testasin myös sivuston responsiivisuutta eri leveyksillä (width>=320px) ja kaikki vaikutti toimivan.
Tein projektille HTML ja CSS validoinnit, ainoana ongelmana oli hr elementin käyttö h1 elementin sisällä. Jätin korjauksen välistä, koska ilman sitä en saa haluamani viivoja otsikoiden alle.
Ainoa kohta, jota en kerennyt hiomaan kunnolla oli About me -osio. Siinä layoutin tyylittely jäi pikkasen vajaaks.
En saanut luotua vielä tyylejä mobiiliversion nav barille (menu-ikoni ei avaa vielä valikkoa, jonka avulla käytättäjä voisi navigoida).

## Mikä tehtävässä oli haastavaa? Muuttuiko sivusto matkan varrella alkuperäisestä suunnitelmastasi?
Sivuston tyylittely oli todella haastavaa ja siihen meni todella paljon aikaa. Eteenkin komponenttien asettelu paikoilleen oli vaikeaa ja meni monesti pieleen. About me -osio koki muutoksia.

## Paljonko käytit tunteja kierrokseen?
Käytin noin 28 tuntia aikaa projektin tekemiseen.

Arvio tunnin tarkkuudella riittää.

# JS PART 2

## Mitä toimminallisuuksia toteutit ja kuinka paljon keräsit pisteitä?

Keräsin yhteensä 20 pistettä.

### Mobiilinavigaatio 6p
Toiminnallisuus näkyy tiedostoissa: mobileMenu.js, mobileMenu.css ja index.html:ssä.
Toiminnallisuutta voi testata kuhan näytön leveys on maksimissaan 730 pikseliä, jolloin menu-näppäin on näkyvissä navbarin oikealla puolella. Mobiilinavigaation toteutus täyttää tehtävänannon mukaiset vaatimukset.


### Aukeava modaali 7p
Toiminnallisuus näkyy tiedostoissa:
modal.js, modal.css ja index.html:ssä.
Toiminnallisuutta voi testata painamalla näppäintä "Open CV". Klikkauksen jälkeen avautuu modaalinen näkymä, jossa näkyy kuva CV:stä ja näytön oikeaan ylänurkkaan tulee close-näppäin, josta pääsee pois näkymästä.

### Light mode 7p
Toiminnallisuus näkyy tiedostoissa:
lightMode.js, lightMode.css ja index.html:ssä. Jouduin muokkaamaan paljon aiempaa työtä, jotta ominaisuuden toteutus onnistuisi. Rakenteen siivoamista ja joidenkin tyylittelyiden korjaamista.
Lisäksi lightModelle keksitty kokonaan uusi värimaailma.
Navbarista löytyy kytkimen tapainen näppäin, josta voi testata light mode -toiminnallisuutta.

## Mikä oli helppoa?
Mobiilinavigaation toteuttaminen oli varsin suoraviivaista ja olin suunnitellut mobiilinavigaation designin jo aiemmalla kierroksella.
## Mikä oli haastavaa?
Aukeavan modaalin tekeminen oli haastavaa, sillä en ole koskaa aiemmin tehnyt sellaista ominaisuutta ja kuvan näyttäminen järkevästi ei ollut helppo homma. Lisäksi light moden toteutus oli haastavaa, koska se vaati muutoksia aiempaan toteutukseen (html ja css)
ja paljon uutta cssää sekä suunnittelua (piti varmistaa, että näyttää hyvältä ja että contrast ratio on tarpeeksi iso eri värien välillä).
## Mikä oli kivaa?
Tykkäsin mobiilinavigaation implementoinnista, koska koen, että siitä on paljon hyötyä sivustolle ja koko sivun ulkonäölle. Lisäksi light moden ja aukeavan modaalin implementointi oli hauskaa, sillä ne herättää sivuston henkiin.  