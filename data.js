const DATA = {
 "cities": {
  "malaga": {
   "city": "Málaga",
   "restaurants": [
    {
     "name": "José Carlos García",
     "category": "michelin-star",
     "cuisine": "Contemporary Andalusian",
     "price": "€€€",
     "splurge": true,
     "why": "Málaga's longest-running Michelin star (1 star, confirmed in the 2026 guide) — avant-garde takes on Málaga produce with harbor views at Muelle Uno; tasting menus from ~€159.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Jos%C3%A9%20Carlos%20Garc%C3%ADa%20M%C3%A1laga",
     "website": "https://www.restaurantejcg.com/",
     "closed": "Sunday and Monday (open Tue–Sat 13:00–16:00, 19:00–23:00); reserve well ahead"
    },
    {
     "name": "La Cosmo",
     "category": "bib-gourmand",
     "cuisine": "Creative Andalusian",
     "price": "€€",
     "why": "Dani Carnero's playful, market-driven bistro on Calle Císter — Bib Gourmand in the 2026 Michelin Guide; the affordable way to taste star-level cooking.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=La%20Cosmo%20C%C3%ADster%2011%20M%C3%A1laga",
     "website": "https://www.lacosmo.es/",
     "closed": "Sunday (open Mon–Sat, lunch 13:30–15:30 and dinner 20:00–23:30)"
    },
    {
     "name": "La Taberna de Mike Palmer",
     "category": "bib-gourmand",
     "cuisine": "Andalusian / Mediterranean",
     "price": "€€",
     "why": "Bib Gourmand in the 2026 Michelin Guide — Miguel Palma's rustic tavern beloved by malagueños for honest wood-fire cooking at fair prices.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=La%20Taberna%20de%20Mike%20Palmer%20M%C3%A1laga",
     "website": "https://latabernademikepalmer.com/",
     "closed": "Schedule is unusual and sources conflict: lunch is the main service; dinner reportedly only Thu–Sat. Reconfirm on their site/phone before going"
    },
    {
     "name": "La Cosmopolita",
     "category": "michelin-listed",
     "cuisine": "Traditional Andalusian, modernized",
     "price": "€€",
     "why": "Dani Carnero's original Michelin-listed casa de comidas — the ensaladilla and slow-cooked classics are pilgrimage-worthy.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=La%20Cosmopolita%20Jos%C3%A9%20Denis%20Belgrano%20M%C3%A1laga",
     "website": null,
     "closed": "Sunday (open Mon–Sat 13:30–16:00, 20:00–23:00)"
    },
    {
     "name": "El Pimpi",
     "category": "local-favorite",
     "cuisine": "Andalusian bodega / tapas",
     "price": "€€",
     "why": "Málaga's most famous bodega — barrels signed by Picasso's family and Banderas, sweet Málaga wine, and a terrace facing the Alcazaba; touristy but genuinely good.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=El%20Pimpi%20M%C3%A1laga",
     "website": "https://www.elpimpi.com/",
     "closed": "None — open daily 12:00–01:00 (Fri–Sat to 02:00)"
    },
    {
     "name": "Casa Lola",
     "category": "local-favorite",
     "cuisine": "Tapas",
     "price": "€",
     "why": "Buzzy, tiled malagueña taberna on Calle Granada — great vermouth on tap, Russian salad and prawn skewers at kind prices.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Taberna%20Casa%20Lola%20Granada%20M%C3%A1laga",
     "website": "https://grupocasalola.com/",
     "closed": "None — open daily 12:30–23:30"
    },
    {
     "name": "Uvedoble Taberna",
     "category": "local-favorite",
     "cuisine": "Modern Andalusian tapas",
     "price": "€",
     "why": "Refined mini-tapas (the ajoblanco and tuna tartare are famous) steps from the Roman Theatre on Calle Alcazabilla.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Uvedoble%20Taberna%20Alcazabilla%20M%C3%A1laga",
     "website": "https://www.uvedobletaberna.com/",
     "closed": "Sunday (open Mon–Sat 12:30–24:00)"
    },
    {
     "name": "El Tapeo de Cervantes",
     "category": "local-favorite",
     "cuisine": "Tapas / Andalusian",
     "price": "€",
     "why": "Tiny, always-packed tapas den near Plaza de la Merced with generous, inventive raciones — arrive early or wait.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=El%20Tapeo%20de%20Cervantes%20C%C3%A1rcer%20M%C3%A1laga",
     "website": "https://eltapeodecervantes.com/",
     "closed": "Monday (Tue–Sat 13:00–15:30 & 19:30–23:30; Sunday dinner only)"
    },
    {
     "name": "Antigua Casa de Guardia",
     "category": "local-favorite",
     "cuisine": "Historic wine tavern (Málaga sweet wines)",
     "price": "€",
     "why": "Málaga's oldest tavern (1840): sweet Pedro Ximénez and Pajarete poured straight from the barrel, your tab chalked on the counter.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Antigua%20Casa%20de%20Guardia%20M%C3%A1laga",
     "website": "https://antiguacasadeguardia.com/",
     "closed": "None — open daily (Mon–Thu 10:00–22:00, Fri–Sat 10:00–22:45, Sun 11:00–15:00 only)"
    },
    {
     "name": "El Cabra (Ovidio Playa)",
     "category": "local-favorite",
     "cuisine": "Chiringuito — espetos & seafood",
     "price": "€€",
     "why": "Classic beachfront chiringuito on the Pedregalejo promenade where sardine espetos are grilled over olive-wood embers in front of you.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20El%20Cabra%20Pedregalejo%20M%C3%A1laga",
     "website": "https://restauranteelcabra.es/",
     "closed": "None — open daily 12:00–23:00 non-stop"
    },
    {
     "name": "Ta-Kumi",
     "category": "michelin-listed",
     "cuisine": "Japanese (non-Spanish pick)",
     "price": "€€",
     "why": "Michelin-listed Japanese below the Alcazaba (Calle Mundo Nuevo) — Marbella-born sushi institution mixing top Andalusian fish with precise Japanese technique.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Ta-Kumi%20Mundo%20Nuevo%20M%C3%A1laga",
     "website": "https://www.restaurantetakumi.com/",
     "closed": "None — open daily 12:00–23:00"
    },
    {
     "name": "Óleo Restaurante",
     "category": "local-favorite",
     "cuisine": "Mediterranean–Asian fusion & sushi (non-Spanish pick)",
     "price": "€€",
     "why": "Sleek fusion and a serious sushi bar inside the CAC contemporary-art museum building by the Guadalmedina — a local date-night favorite.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=%C3%93leo%20Restaurante%20CAC%20M%C3%A1laga",
     "website": "https://www.oleorestaurante.es/",
     "closed": "Sunday and Monday (open Tue–Sat 13:30–16:00, 20:00–24:00)"
    }
   ],
   "sights": [
    {
     "name": "Alcazaba de Málaga",
     "why": "Superbly preserved 11th-century Moorish palace-fortress climbing the hill above the Roman Theatre — Málaga's must-see.",
     "website": "https://alcazabaygibralfaro.malaga.eu/",
     "hours_notes": "Open every day of the trip (Fri Sept 4 – Tue Sept 8): summer hours 09:00–20:00, last entry 19:15. Free entry Sunday Sept 6 from 14:00 (expect queues).",
     "price": "€3.50; combined Alcazaba + Gibralfaro €5.50 (valid 48h)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Alcazaba%20de%20M%C3%A1laga",
     "booking_note": "No prebooking needed for individuals — buy at the machines/gate or via the official site. Go early to beat heat and cruise crowds.",
     "ticket_url": "https://alcazabaygibralfaro.malaga.eu/"
    },
    {
     "name": "Castillo de Gibralfaro",
     "why": "10th-century ramparts with the single best panorama of the city, port and bullring.",
     "website": "https://alcazabaygibralfaro.malaga.eu/",
     "hours_notes": "Open daily Sept 4–8, 09:00–20:00 (summer schedule, last entry 19:15). Free Sunday from 14:00.",
     "price": "€3.50; combined ticket with Alcazaba €5.50",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Castillo%20de%20Gibralfaro%20M%C3%A1laga",
     "booking_note": "No prebooking needed. The walk up is steep and shadeless — take bus 35 up and walk down.",
     "ticket_url": "https://alcazabaygibralfaro.malaga.eu/"
    },
    {
     "name": "Museo Picasso Málaga",
     "why": "200+ works spanning Picasso's whole career in the Buenavista Palace, in the city of his birth.",
     "website": "https://www.museopicassomalaga.org/en",
     "hours_notes": "Open ALL five days including Monday Sept 7: daily 10:00–19:00 (this schedule runs through Sept 26). Free entry the last two hours on Sunday Sept 6 (from ~17:00, expect long lines).",
     "price": "€13 general, €11 reduced, under 17 free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Museo%20Picasso%20M%C3%A1laga",
     "booking_note": "Prebook a timed slot online — September weekends sell out at peak hours.",
     "ticket_url": "https://www.museopicassomalaga.org/en"
    },
    {
     "name": "Catedral de Málaga (La Manquita)",
     "why": "Renaissance cathedral with its famously unfinished second tower and a lavish choir.",
     "website": "https://malagacatedral.com/",
     "hours_notes": "Fri Sept 4 & Mon Sept 7 & Tue Sept 8: 10:00–20:00. Sat Sept 5: 10:00–18:00. Sun Sept 6: tourist visits 14:00–18:00 only (Mass in the morning). Last entry 45 min before closing.",
     "price": "€10 incl. audio guide (rooftop tour extra, ~€10)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Catedral%20de%20M%C3%A1laga",
     "booking_note": "Tickets at the door or online via malagacatedral.com. Rooftop (cubiertas) visits have been suspended at times for restoration — confirm on the official site before counting on it.",
     "ticket_url": "https://malagacatedral.com/"
    },
    {
     "name": "Teatro Romano",
     "why": "1st-century Roman theatre at the foot of the Alcazaba — free, atmospheric, and floodlit at night.",
     "website": "https://www.juntadeandalucia.es/cultura/enclaves/enclave-arqueologico-teatro-romano-de-malaga",
     "hours_notes": "CLOSED Monday Sept 7. Fri Sept 4, Sat Sept 5, Tue Sept 8: 10:00–18:00. Sun Sept 6: 10:00–16:00.",
     "price": "Free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Teatro%20Romano%20M%C3%A1laga",
     "booking_note": "No booking needed — walk in; the exterior is viewable anytime from Calle Alcazabilla.",
     "ticket_url": "https://www.juntadeandalucia.es/cultura/enclaves/enclave-arqueologico-teatro-romano-de-malaga"
    },
    {
     "name": "Centre Pompidou Málaga",
     "why": "The Paris giant's colorful glass-cube outpost on the port with a strong 20th–21st-century collection.",
     "website": "https://centrepompidou-malaga.eu/",
     "hours_notes": "CLOSED Tuesday Sept 8 (weekly closing day). Open Fri Sept 4, Sat 5, Sun 6 and Mon 7: 09:30–20:00, last entry 30 min before. FREE all day Sunday Sept 6.",
     "price": "€9 combined exhibitions (€7 permanent only); free Sundays",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Centre%20Pompidou%20M%C3%A1laga",
     "booking_note": "No prebooking needed; go Sunday for free entry or Monday when other museums are shut.",
     "ticket_url": "https://centrepompidou-malaga.eu/"
    },
    {
     "name": "Museo Carmen Thyssen",
     "why": "The best collection of 19th-century Andalusian painting, in a 16th-century palace off Calle Compañía.",
     "website": "https://www.carmenthyssenmalaga.org/",
     "hours_notes": "CLOSED Monday Sept 7. Open Fri Sept 4 – Sun Sept 6 and Tue Sept 8: 10:00–20:00. Free entry Sunday Sept 6 from 16:00.",
     "price": "~€10 general (free under 18; reduced rates available)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Museo%20Carmen%20Thyssen%20M%C3%A1laga",
     "booking_note": "Tickets at the door are fine; Sunday-afternoon free slot gets busy.",
     "ticket_url": "https://www.carmenthyssenmalaga.org/"
    },
    {
     "name": "Museo de Málaga (Palacio de la Aduana)",
     "why": "Andalusia's biggest museum — fine arts + archaeology in the grand 18th-century customs palace, and almost free.",
     "website": "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/evento/museo-de-malaga",
     "hours_notes": "CLOSED Monday Sept 7. Summer schedule (until Sept 15): Tue–Sat 09:00–21:00, Sun 09:00–15:00. So: Fri 4 & Sat 5 & Tue 8 09:00–21:00; Sun 6 only until 15:00.",
     "price": "€1.50 (free for EU citizens with ID)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Museo%20de%20M%C3%A1laga%20Aduana",
     "booking_note": "No booking needed — rarely crowded; bring passport/EU ID for free entry.",
     "ticket_url": "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/evento/museo-de-malaga"
    }
   ],
   "shops": [
    {
     "name": "Mercado Central de Atarazanas",
     "what": "Iconic 19th-century market behind a 14th-century Moorish gate: fish, fruit, jamón, spices, plus tapas bars inside. Open Mon–Sat roughly 08:00–14:30/15:00 — CLOSED Sunday Sept 6.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Mercado%20de%20Atarazanas%20M%C3%A1laga"
    },
    {
     "name": "Alfajar",
     "what": "Contemporary Málaga-made art ceramics (Picasso-inspired pieces) in a baroque palace at Calle Císter 1, by the Cathedral.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Alfajar%20cer%C3%A1mica%20C%C3%ADster%20M%C3%A1laga"
    },
    {
     "name": "Ultramarinos Zoilo",
     "what": "Family-run 1950s deli on Calle Granada 65: jamón serrano and ibérico, Manchego, chorizo and Andalusian pantry treats — great edible souvenirs.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Ultramarinos%20Zoilo%20Granada%2065%20M%C3%A1laga"
    },
    {
     "name": "La Mallorquina",
     "what": "Gourmet institution since 1943 at Plaza Félix Sáenz: Málaga sweet wines, local cheeses, turrón, olive oils and conservas.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=La%20Mallorquina%20Plaza%20F%C3%A9lix%20S%C3%A1enz%20M%C3%A1laga"
    },
    {
     "name": "Calle Marqués de Larios & Calle Granada",
     "what": "Málaga's elegant marble shopping boulevard and its old-town continuation — Spanish fashion (and side streets full of independents); most shops closed Sunday.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Calle%20Marqu%C3%A9s%20de%20Larios%20M%C3%A1laga"
    }
   ],
   "activities": [
    {
     "name": "Pedregalejo & El Palo beach morning",
     "what": "Old fishing barrios east of the center: calm coves, a lively promenade and the city's best chiringuitos — combine a swim with an espeto lunch.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Playa%20de%20Pedregalejo%20M%C3%A1laga",
     "website": null
    },
    {
     "name": "Playa de la Malagueta",
     "what": "The city beach, 10 minutes' walk from the port — fine for a quick swim and sundowner without leaving the center.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Playa%20de%20la%20Malagueta%20M%C3%A1laga",
     "website": null
    },
    {
     "name": "Hammam Al Ándalus",
     "what": "Candle-lit Arab baths and massages at Plaza de los Mártires 5, open daily 10:00–24:00 — perfect for Monday when museums close. Book 2–3 days ahead.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Hammam%20Al%20%C3%81ndalus%20M%C3%A1laga",
     "website": "https://malaga.hammamalandalus.com/en/"
    },
    {
     "name": "Caminito del Rey (day trip)",
     "what": "Vertiginous walkway pinned to the walls of the El Chorro gorge, ~1h from Málaga by car/train. General ticket €10, guided €18. Normally closed Mondays, though official 2026 notices list some exceptional Monday openings (Sept 7 appears in that list — verify when booking); tickets sell out, book days-to-weeks ahead.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Caminito%20del%20Rey%20El%20Chorro%20M%C3%A1laga",
     "website": "https://www.caminitodelrey.info/en/"
    },
    {
     "name": "Rooftop sunset at AC Hotel Málaga Palacio",
     "what": "The classic high-rise terrace by the Cathedral: pool-deck bar with 360° views over La Manquita, the port and Gibralfaro — go 30–45 min before sunset.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=AC%20Hotel%20M%C3%A1laga%20Palacio%20rooftop",
     "website": null
    },
    {
     "name": "Muelle Uno & La Farola paseo",
     "what": "Evening stroll along the reinvented port promenade — palm-lined Palmeral de las Sorpresas, the 1817 lighthouse, and the Pompidou cube lit up at night.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Muelle%20Uno%20M%C3%A1laga",
     "website": "https://www.muelleuno.com/"
    }
   ],
   "day_plans": {
    "2026-09-04": {
     "date": "2026-09-04",
     "weekday": "Friday",
     "morning": "Graze breakfast at Mercado de Atarazanas (open until ~14:30), then walk up through the Alcazaba (opens 09:00) and see the Roman Theatre below it (opens 10:00).",
     "afternoon": "Bib Gourmand lunch at La Taberna de Mike Palmer (lunch is its main service). Afterwards visit the Cathedral — open late (until 20:00) on Fridays.",
     "evening": "Old-town tapas crawl: Casa Lola on Calle Granada, then Uvedoble Taberna on Alcazabilla with the floodlit Roman Theatre, nightcap of barrel-poured Málaga wine at Antigua Casa de Guardia."
    },
    "2026-09-05": {
     "date": "2026-09-05",
     "weekday": "Saturday",
     "morning": "Museo Picasso Málaga at opening (10:00, prebooked slot), then coffee on Plaza de la Merced by Picasso's birthplace.",
     "afternoon": "Lunch at La Cosmo (open Saturdays). Then either the Carmen Thyssen Museum (until 20:00) or souvenir shopping: Alfajar ceramics, Ultramarinos Zoilo and Calle Larios.",
     "evening": "The splurge: tasting menu at Michelin-starred José Carlos García on Muelle Uno (open Sat, closed Sun–Mon — tonight is the night). Post-dinner stroll to La Farola lighthouse."
    },
    "2026-09-06": {
     "date": "2026-09-06",
     "weekday": "Sunday",
     "morning": "Beach morning in Pedregalejo/El Palo — swim and walk the promenade (note: Atarazanas market and most shops are closed today).",
     "afternoon": "Espetos of sardines at El Cabra on the beach (open daily 12:00–23:00). Back in town, play the free-entry card: Pompidou is free ALL day Sunday, Alcazaba free from 14:00, Carmen Thyssen free from 16:00, Picasso free the last two hours.",
     "evening": "Dinner and sweet wine at El Pimpi (open daily; Uvedoble, Óleo and La Cosmo are closed Sundays), then a paseo down Calle Larios with the locals."
    },
    "2026-09-07": {
     "date": "2026-09-07",
     "weekday": "Monday",
     "morning": "Monday closures: Roman Theatre, Carmen Thyssen and Museo de Málaga are shut — but Gibralfaro isn't. Bus 35 up to the castle for the best city panorama, walk down via the viewpoints. (Picasso Museum and Pompidou are also open today if you missed them.)",
     "afternoon": "Sushi lunch at Ta-Kumi below the Alcazaba (open daily), then a booked session at Hammam Al Ándalus — reserve it 2–3 days ahead.",
     "evening": "Sunset drink on the AC Málaga Palacio rooftop by the Cathedral, then Monday-friendly tapas at Uvedoble or Casa Lola (El Tapeo de Cervantes, Óleo and the starred places are closed Mondays)."
    },
    "2026-09-08": {
     "date": "2026-09-08",
     "weekday": "Tuesday",
     "morning": "Pompidou is closed Tuesdays — instead do the Museo de Málaga in the Aduana palace (open 09:00–21:00, ~free) and/or the Roman Theatre if you missed it Friday. Ambitious alternative: prebooked Caminito del Rey day trip (open Tuesdays).",
     "afternoon": "Lunch at El Tapeo de Cervantes (reopens Tuesdays), then Carmen Thyssen Museum or a last swim at La Malagueta.",
     "evening": "Farewell dinner at Óleo in the CAC building (reopens Tuesdays) — or La Cosmopolita for classic malagueño comfort — and a final lap of Muelle Uno under the lights."
    }
   }
  },
  "cordoba": {
   "city": "Córdoba",
   "restaurants": [
    {
     "name": "Noor",
     "category": "michelin-star",
     "cuisine": "Andalusí avant-garde (Paco Morales)",
     "price": "€€€",
     "why": "SPLURGE — Córdoba's 3-Michelin-star temple of 'gastroarchaeology', recreating Caliphate-era flavours; confirmed 3 stars in the 2026 Michelin Guide.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Noor%20Restaurant%20Paco%20Morales%20C%C3%B3rdoba",
     "website": "https://noorrestaurant.es/en/",
     "closed_days": "Sunday, Monday, Tuesday (open Wed-Sat only — during this trip only Fri Sept 4 and Sat Sept 5; book well ahead, ~€120+ no-show penalty)",
     "splurge": true
    },
    {
     "name": "Terra Olea",
     "category": "bib-gourmand",
     "cuisine": "Contemporary Cordoban, tasting menus (Flos / Cibarium)",
     "price": "€€",
     "why": "Bib Gourmand 2026 — creative, great-value tasting menus built on small Córdoba producers, in the Arruzafilla district.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Terra%20Olea%20Rigoberta%20Mench%C3%BA%202%20C%C3%B3rdoba",
     "website": "https://terraolearestaurante.es/",
     "closed_days": "Sunday and Monday; Tuesday-Wednesday lunch only (14:00-18:00); dinner served Thursday-Saturday"
    },
    {
     "name": "Regadera",
     "category": "bib-gourmand",
     "cuisine": "Fresh, modern Andalusian (chef Adrián Caballero)",
     "price": "€€",
     "why": "New Bib Gourmand at the 2026 Michelin gala — bright riverside dining room on Ronda de Isasa facing the Guadalquivir.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Regadera%20Ronda%20de%20Isasa%2010%20C%C3%B3rdoba",
     "website": "https://regadera.es/",
     "closed_days": "Monday and Tuesday (open Wed-Sun, incl. Sunday lunch and dinner)"
    },
    {
     "name": "El Envero",
     "category": "bib-gourmand",
     "cuisine": "Seasonal market cooking, strong wine list",
     "price": "€€",
     "why": "Bib Gourmand kept in the 2026 guide — polished seasonal plates and serious wines, loved by locals in the Teruel/Santa Rosa quarter.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=El%20Envero%20Calle%20Teruel%2021%20C%C3%B3rdoba",
     "website": "https://elenvero.com/",
     "closed_days": "Monday (open Tuesday-Sunday)"
    },
    {
     "name": "La Cuchara de San Lorenzo",
     "category": "bib-gourmand",
     "cuisine": "Traditional Cordoban, refined home cooking",
     "price": "€€",
     "why": "Bib Gourmand stalwart for rabo de toro and croquetas; reopened Sept 3 after its summer break, so it is open during this trip.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=La%20Cuchara%20de%20San%20Lorenzo%20C%C3%B3rdoba",
     "website": "https://www.lacucharadesanlorenzo.es/",
     "closed_days": "Monday (hours 14:00-16:00 and 21:00-23:00)"
    },
    {
     "name": "La Taberna de Almodóvar",
     "category": "bib-gourmand",
     "cuisine": "Cordoban taberna classics (salmorejo, flamenquín)",
     "price": "€€",
     "why": "Bib Gourmand taberna doing the local canon properly — salmorejo, flamenquín and oxtail — at honest prices near Plaza de Colón.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=La%20Taberna%20de%20Almod%C3%B3var%20Benito%20P%C3%A9rez%20Gald%C3%B3s%201%20C%C3%B3rdoba",
     "website": "https://www.latabernadealmodovar.com/",
     "closed_days": "Sunday (open Mon-Sat 12:00-23:30)"
    },
    {
     "name": "Taberna Salinas",
     "category": "local-favorite",
     "cuisine": "Historic Cordoban taberna (since 1879)",
     "price": "€",
     "why": "The benchmark old-school taberna: patio dining, naranjas picás con bacalao, salmorejo and Montilla-Moriles from the barrel at bargain prices.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Taberna%20Salinas%20Tundidores%203%20C%C3%B3rdoba",
     "website": "http://www.tabernasalinas.com/en/",
     "closed_days": "Sunday (open Mon-Sat 12:30-16:00 and 20:00-23:00; closed all August, reopens September)"
    },
    {
     "name": "Bodegas Campos",
     "category": "local-favorite",
     "cuisine": "Andalusian bodega-restaurant (since 1908)",
     "price": "€€",
     "why": "Córdoba institution in a warren of patios and barrel-lined rooms — rabo de toro and Montilla-Moriles; open every day of this trip.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Bodegas%20Campos%20Lineros%2032%20C%C3%B3rdoba",
     "website": "https://bodegascampos.com/",
     "closed_days": "None (daily 13:30-16:00 and 20:00-23:00) — reserve for dinner"
    },
    {
     "name": "Taberna San Miguel — Casa El Pisto",
     "category": "local-favorite",
     "cuisine": "Classic Cordoban tapas (since 1880)",
     "price": "€",
     "why": "Beloved bullfighting-memorabilia taberna on Plaza San Miguel; the pisto with fried egg and the flamenquín are the orders.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Taberna%20San%20Miguel%20Casa%20El%20Pisto%20C%C3%B3rdoba",
     "website": "https://www.casaelpisto.com/",
     "closed_days": "Sunday (open Mon-Sat 12:00-16:00 and 20:00-24:00)"
    },
    {
     "name": "Casa Pepe de la Judería",
     "category": "michelin-listed",
     "cuisine": "Andalusian, Cordoban classics",
     "price": "€€",
     "why": "Michelin-listed Judería classic steps from the Mezquita — roof terrace, berenjenas con miel and rabo de toro; open daily, handy on Sundays.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Casa%20Pepe%20de%20la%20Juder%C3%ADa%20Calle%20Romero%201%20C%C3%B3rdoba",
     "website": "https://restaurantecasapepedelajuderia.com/",
     "closed_days": "None (daily 13:00-16:00 and 19:30-23:30) — reservation strongly advised"
    },
    {
     "name": "Amaltea",
     "category": "local-favorite",
     "cuisine": "Eastern-Mediterranean / organic (non-Spanish pick)",
     "price": "€€",
     "why": "Riverside organic kitchen on Ronda de Isasa — hummus, moussaka, couscous and standout vegetarian options; a genuinely good change of register.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Amaltea%20Ronda%20de%20Isasa%2010%20C%C3%B3rdoba",
     "website": "https://www.amaltea.es/",
     "closed_days": "Sunday dinner (lunch from 13:00, dinner from 20:00 other days)"
    },
    {
     "name": "Tokyo — Una Idea de Lai",
     "category": "local-favorite",
     "cuisine": "Japanese / sushi (non-Spanish pick)",
     "price": "€€",
     "why": "Córdoba's best-regarded sushi since 2008 — nigiri, maki and sashimi worth the short hop out of the old town.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Tokyo%20Una%20Idea%20de%20Lai%20C%C3%B3rdoba",
     "website": "https://www.tokyocordoba.com/",
     "closed_days": "Monday (Sat-Sun lunch 13:00-16:30; confirm dinner hours by phone)"
    }
   ],
   "sights": [
    {
     "name": "Mezquita-Catedral",
     "why": "The 8th-10th-century mosque-cathedral with its forest of candy-striped arches — the single essential sight in Andalusia.",
     "website": "https://mezquita-catedraldecordoba.es/en/organiza-la-visita/entradas-y-horarios/",
     "hours_notes": "Fri 4, Sat 5, Mon 7: 10:00-19:00 (last entry 18:30). FREE quiet entry Mon-Sat 8:30-9:30 (individuals only, no groups; exit begins 9:20; suspended on extraordinary celebrations). Sun 6: 8:30-11:30 and 15:00-19:00 (mass hours restricted). Tue 8 is the Nativity of the Virgin / Córdoba's Fuensanta holiday — hours may switch to the Sunday/holiday pattern; re-check the official calendar that morning. Bell tower: half-hourly slots 9:30-18:30, €4.",
     "price": "€15 general; bell tower €4; free 8:30-9:30 Mon-Sat",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Mezquita-Catedral%20de%20C%C3%B3rdoba",
     "booking_note": "Buy timed tickets at https://tickets.mezquita-catedraldecordoba.es/en (also sold same-day in the Patio de los Naranjos). For the free 8:30 window just queue at the door before 8:30.",
     "ticket_url": "https://mezquita-catedraldecordoba.es/en/organiza-la-visita/entradas-y-horarios/"
    },
    {
     "name": "Alcázar de los Reyes Cristianos",
     "why": "Fortress-palace of the Catholic Monarchs with Roman mosaics, towers and famously beautiful terraced gardens.",
     "website": "https://alcazardelosreyescristianos.sacatuentrada.es/",
     "hours_notes": "Summer schedule until Sept 15: Tue-Sun 8:15-14:15 (one local source says 14:45 — treat 14:15 as safe; last tickets ~20 min before close). CLOSED Monday Sept 7. Open Fri 4, Sat 5, Sun 6 and holiday Tue 8 — mornings only, go at opening for cool air.",
     "price": "€6.71 online (bundle with Caliphal Baths €7.16; 5-monument pass €13.91)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Alc%C3%A1zar%20de%20los%20Reyes%20Cristianos%20C%C3%B3rdoba",
     "booking_note": "Book on the official sacatuentrada site (choose a time slot); morning slots sell out on weekends.",
     "ticket_url": "https://alcazardelosreyescristianos.sacatuentrada.es/"
    },
    {
     "name": "Judería (Jewish Quarter)",
     "why": "Whitewashed lanes, flower-hung patios and Sephardic history wrapped around the Mezquita — best at dawn or after dark.",
     "website": "https://www.turismodecordoba.org/",
     "hours_notes": "Streets always open, all five days. In September heat walk it before 11:00 or after 19:00; shops mostly 10:00-20:00 (many will close on the Tue Sept 8 local holiday).",
     "price": "Free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Juder%C3%ADa%20de%20C%C3%B3rdoba",
     "booking_note": null,
     "ticket_url": "https://www.turismodecordoba.org/"
    },
    {
     "name": "Sinagoga de Córdoba",
     "why": "One of only three surviving medieval synagogues in Spain (1315), with delicate Mudéjar stucco — a 15-minute gem.",
     "website": "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/espacios/enclave-monumental-de-la-sinagoga-de-cordoba",
     "hours_notes": "Tue-Sun 9:00-15:00, free. Normally CLOSED Monday (Sept 7) — though the Junta opens it on Mondays that are holiday-eves, so it MAY open Sept 7; unconfirmed. Tue Sept 8 is on the Junta's published list of holidays it DOES open (9:00-15:00).",
     "price": "Free (groups >6 need prior reservation)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Sinagoga%20de%20C%C3%B3rdoba%20Calle%20Jud%C3%ADos",
     "booking_note": "No booking needed for individuals; just walk in before 14:30.",
     "ticket_url": "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/espacios/enclave-monumental-de-la-sinagoga-de-cordoba"
    },
    {
     "name": "Palacio de Viana",
     "why": "Aristocratic palace of 12 linked courtyards — the definitive way to see Córdoba's patio culture outside festival season.",
     "website": "https://www.palaciodeviana.com/",
     "hours_notes": "From Sept 1: Tue-Sat 10:00-19:00, Sun 10:00-15:00, CLOSED Monday (Sept 7). Tue Sept 8 is a local holiday — opening likely but confirm on their site/phone that morning.",
     "price": "~€10-12 full visit (patios-only ticket cheaper); check site for current rates",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Palacio%20de%20Viana%20C%C3%B3rdoba",
     "booking_note": "Tickets at the door or via palaciodeviana.com; patios are open-air, so go at 10:00 or after 17:00 in this heat.",
     "ticket_url": "https://www.palaciodeviana.com/"
    },
    {
     "name": "Puente Romano & Torre de la Calahorra",
     "why": "The 2,000-year-old Roman bridge over the Guadalquivir — the classic sunset view back to the floodlit Mezquita.",
     "website": "https://www.turismodecordoba.org/",
     "hours_notes": "Bridge open 24/7 all five days, pedestrian-only. Best light just before 20:45 sunset in early September.",
     "price": "Free (Calahorra tower museum small fee if you enter)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Puente%20Romano%20C%C3%B3rdoba",
     "booking_note": null,
     "ticket_url": "https://www.turismodecordoba.org/"
    },
    {
     "name": "Medina Azahara (Madinat al-Zahra)",
     "why": "Ruined 10th-century palace-city of Caliph Abd al-Rahman III, 8 km west — UNESCO-listed high point of the Caliphate.",
     "website": "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/evento/conjunto-arqueologico-de-madinat-al-zahra",
     "hours_notes": "Through Sept 30: Tue-Sun and holidays 9:00-15:00. CLOSED Monday Sept 7. Open Fri 4, Sat 5, Sun 6, and holiday Tue 8. Go at 9:00 sharp — the site is shadeless and brutal after midday.",
     "price": "Free for EU citizens, €1.50 others; obligatory shuttle bus museum↔ruins €3 return",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Medina%20Azahara%20C%C3%B3rdoba",
     "booking_note": "Easiest without a car: the daily tourist bus from Paseo de la Victoria (book at https://www.turismodecordoba.org/bus-diario-a-medina-azahara-cordoba, ~€10 return); otherwise taxi to the museum then the €3 shuttle. NOTE: the site's own portal museosdeandalucia.es was unreachable during research — the Junta agenda page above is the verified official reference.",
     "ticket_url": "https://www.juntadeandalucia.es/cultura/agendaculturaldeandalucia/evento/conjunto-arqueologico-de-madinat-al-zahra"
    },
    {
     "name": "Calleja de las Flores",
     "why": "Córdoba's most photographed alley — geranium pots on white walls framing the Mezquita tower.",
     "website": null,
     "hours_notes": "Open always; mobbed 10:00-20:00. Come at 8:00-9:00 for empty photos (pairs perfectly with the Mezquita free-entry window).",
     "price": "Free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Calleja%20de%20las%20Flores%20C%C3%B3rdoba",
     "booking_note": null,
     "ticket_url": null
    },
    {
     "name": "Baños del Alcázar Califal",
     "why": "Excavated 10th-century royal hammam of the caliphs beside the Alcázar — atmospheric, cool and quick to visit.",
     "website": "https://banosdelalcazarcalifal.sacatuentrada.es/",
     "hours_notes": "Summer schedule to Sept 15: Tue-Sun and holidays 8:15-14:15. CLOSED Monday Sept 7. Open Fri 4, Sat 5, Sun 6, Tue 8 (mornings only).",
     "price": "~€3 (combined ticket with Alcázar €7.16 online)",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Ba%C3%B1os%20del%20Alc%C3%A1zar%20Califal%20C%C3%B3rdoba",
     "booking_note": "Same official sacatuentrada platform as the Alcázar; buy the combined ticket and do both in one morning.",
     "ticket_url": "https://banosdelalcazarcalifal.sacatuentrada.es/"
    }
   ],
   "shops": [
    {
     "name": "Meryan",
     "what": "Legendary family workshop (50+ years) for cordobán and guadamecí embossed leather — they've worked with Loewe and Dior; on the Calleja de las Flores.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Meryan%20Calleja%20de%20las%20Flores%202%20C%C3%B3rdoba"
    },
    {
     "name": "Zoco Municipal de la Artesanía",
     "what": "Courtyard craft souk on Calle Judíos: working studios for leather, caliphal silver filigree, ceramics and jewelry — buy direct from the makers.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Zoco%20Municipal%20de%20la%20Artesan%C3%ADa%20Calle%20Jud%C3%ADos%20C%C3%B3rdoba"
    },
    {
     "name": "Platería Califal",
     "what": "Fourth-generation shop-workshop making 925-silver caliphal filigree by 10th-century Andalusí methods; you can watch pieces being made.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Plater%C3%ADa%20Califal%20C%C3%B3rdoba"
    },
    {
     "name": "Cruz Conde Filigrana",
     "what": "Artisan jeweler hand-twisting silver and gold thread into classic Cordoban filigree — elegant, packable souvenirs.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Cruz%20Conde%20Filigrana%20C%C3%B3rdoba"
    },
    {
     "name": "Mercado Victoria",
     "what": "Andalusia's first gourmet food hall, in a 19th-century iron pavilion in the Victoria gardens — 20+ stalls for grazing, open daily until late (great for hot afternoons and Sundays).",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Mercado%20Victoria%20Paseo%20de%20la%20Victoria%20C%C3%B3rdoba"
    }
   ],
   "activities": [
    {
     "name": "Patios de San Basilio",
     "what": "Visit the flower-filled private patios of the Alcázar Viejo quarter that star in the May festival — open to visitors year-round with one ticket covering several patios.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Patios%20de%20San%20Basilio%20C%C3%B3rdoba",
     "website": "https://patiosdesanbasilio.com/"
    },
    {
     "name": "Hammam Al Ándalus",
     "what": "Candle-lit Arab baths near the Mezquita — hot/warm/cold pools plus massage; the perfect 15:00-18:00 escape from 35°C streets. Book a session online.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Hammam%20Al%20%C3%81ndalus%20C%C3%B3rdoba",
     "website": "https://cordoba.hammamalandalus.com/"
    },
    {
     "name": "Flamenco at Tablao El Cardenal",
     "what": "Córdoba's flagship tablao in a Judería courtyard: from September, doors 19:45 and show 20:30, Monday-Saturday, ~90 min, from ~€23-27.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Tablao%20Flamenco%20El%20Cardenal%20C%C3%B3rdoba",
     "website": "https://tablaocardenal.es/"
    },
    {
     "name": "El Alma de Córdoba — Mezquita night visit",
     "what": "After-dark sound-and-light visit inside the Mosque-Cathedral; per the official site two nightly tours at 21:30 and 23:00, €25 (reduced €18) — confirm your exact dates in the booking calendar.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Mezquita-Catedral%20de%20C%C3%B3rdoba",
     "website": "https://tickets.mezquita-catedraldecordoba.es/en"
    },
    {
     "name": "Pasión y Duende del Caballo Andaluz — Caballerizas Reales",
     "what": "90-minute Andalusian horse show in the Royal Stables built by Philip II; runs Wednesday-Saturday at 21:00 through Oct 1 — on this trip that means Fri Sept 4 or Sat Sept 5.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Caballerizas%20Reales%20de%20C%C3%B3rdoba",
     "website": "https://caballerizasreales.com/espectaculo-ecuestre/"
    }
   ],
   "day_plans": {
    "2026-09-04": {
     "date": "2026-09-04",
     "weekday": "Friday",
     "morning": "Be at the Calleja de las Flores by 8:00 for empty photos, then use the Mezquita-Catedral's free quiet entry 8:30-9:30 (or buy a 10:00 ticket for a full visit) and climb the bell tower on a 9:30/10:00 slot.",
     "afternoon": "Lunch at Taberna Salinas (opens 12:30), then hide from the 35°C peak: siesta followed by a booked 16:00-ish session at Hammam Al Ándalus.",
     "evening": "Splurge night at Noor (3 Michelin stars — it only opens Wed-Sat, so Friday or Saturday is your window); if you couldn't get a table, do the Caballerizas Reales horse show at 21:00 and tapas at El Pisto."
    },
    "2026-09-05": {
     "date": "2026-09-05",
     "weekday": "Saturday",
     "morning": "Early tourist bus from Paseo de la Victoria to Medina Azahara for the 9:00 opening (shadeless site — finish by noon); back in town by early afternoon.",
     "afternoon": "Lunch at Bodegas Campos (13:30) or the tasting menu at Terra Olea (Saturday serves both lunch and dinner); at 17:30, when it cools, tour the twelve patios of Palacio de Viana (open to 19:00 Saturdays).",
     "evening": "Pasión y Duende del Caballo Andaluz at the Caballerizas Reales, 21:00 (last weekend-run of your trip), then a late flamenquín at Taberna San Miguel — El Pisto (kitchen to midnight)."
    },
    "2026-09-06": {
     "date": "2026-09-06",
     "weekday": "Sunday",
     "morning": "Municipal monuments morning: Alcázar de los Reyes Cristianos at the 8:15 opening, gardens first while it's cool, then the adjoining Baños del Alcázar Califal on the combined ticket (both close ~14:15; note the Mezquita is mass-restricted 11:30-15:00 today).",
     "afternoon": "Sunday closes many tabernas (Salinas, El Pisto, Almodóvar) — lunch at Casa Pepe de la Judería (open daily), then graze and cool off inside Mercado Victoria.",
     "evening": "Sunset on the Puente Romano (~20:45) looking back at the floodlit Mezquita, dinner at Regadera on the riverbank (open Sunday), and optionally the 21:30 El Alma de Córdoba night visit if the calendar shows availability."
    },
    "2026-09-07": {
     "date": "2026-09-07",
     "weekday": "Monday",
     "morning": "Big Monday closures (Alcázar, Palacio de Viana, Medina Azahara, Caliphal Baths; Synagogue possibly open under its holiday-eve rule — check the door). The Mezquita IS open: re-enter free 8:30-9:30 for a quiet wander, then shop the Judería — Meryan, the Zoco Municipal workshops and Platería Califal.",
     "afternoon": "Long lunch at La Taberna de Almodóvar (open Mon-Sat 12:00-23:30), then an air-conditioned siesta; if you skipped the hammam Friday, book it now — or hit the sushi bar at Tokyo (closed-Monday warning: Tokyo is shut today, so keep it tapas).",
     "evening": "Flamenco at Tablao El Cardenal (doors 19:45, show 20:30 — Monday is a show day), late dinner at El Pisto or Amaltea."
    },
    "2026-09-08": {
     "date": "2026-09-08",
     "weekday": "Tuesday",
     "morning": "Local holiday — Virgen de la Fuensanta. The Synagogue is on the Junta's published open-holiday list (9:00-15:00); pair it with the Alcázar gardens at 8:15 (Tuesday = open, morning hours) or a make-up run to Medina Azahara (open holidays 9:00-15:00). The Mezquita may run Sunday-style holiday hours — check before relying on a midday entry.",
     "afternoon": "Many small shops close for the fiesta; Mercado Victoria and restaurants stay open. Farewell lunch at La Cuchara de San Lorenzo (reopened Sept 3; open Tuesdays) or Bodegas Campos, then last shaded strolls: Calleja de las Flores, Plaza de la Corredera.",
     "evening": "Golden-hour walk across the Puente Romano to the Calahorra side for the classic skyline, and a final dinner at Casa Pepe de la Judería's roof terrace (open daily) — or Terra Olea's Tuesday service if you prefer a tasting-menu send-off (lunch seating only on Tuesdays)."
    }
   }
  },
  "granada": {
   "city": "Granada",
   "generated": "2026-09-04",
   "restaurants": [
    {
     "name": "Bodegas Castañeda",
     "category": "local-favorite",
     "cuisine": "Andalusian tapas / vermouth bar",
     "price": "€",
     "why": "Granada's classic tavern (est. 1927) just off Calle Elvira — barrels, hanging hams, house calicasas vermouth and a free tapa with every drink.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Bodegas%20Casta%C3%B1eda%20Granada",
     "website": null,
     "closed_days": "None — open daily (roughly 11:30–16:30 and 19:30–00:30)"
    },
    {
     "name": "Bar Los Diamantes (Calle Navas)",
     "category": "local-favorite",
     "cuisine": "Fried fish & seafood tapas",
     "price": "€",
     "why": "The original Navas branch, famous since 1942 for pescaíto frito — order a caña and the free seafood tapa lands automatically; standing room only at peak.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Bar%20Los%20Diamantes%20Calle%20Navas%20Granada",
     "website": "https://losdiamantes.es/",
     "closed_days": "None — generally open daily; no reservations, go early"
    },
    {
     "name": "Taberna La Tana",
     "category": "local-favorite",
     "cuisine": "Wine bar with Andalusian tapas",
     "price": "€",
     "why": "Tiny Realejo bodega with one of the best by-the-glass Spanish wine lists in town and generous free tapas to match.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Taberna%20La%20Tana%20Granada",
     "website": "https://www.tabernalatana.com/",
     "closed_days": "Sources conflict — commonly reported closed Sun (some say Sat–Sun); phone/site check before going on the weekend"
    },
    {
     "name": "Los Manueles",
     "category": "local-favorite",
     "cuisine": "Traditional granadino (croquetas, tortilla del Sacromonte, rabo de toro)",
     "price": "€€",
     "why": "A Granada institution since 1917 near Plaza del Carmen — the place for the classic granadino repertoire done properly, and still a free tapa at the bar.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Los%20Manueles%20Granada",
     "website": "https://losmanueles.es/",
     "closed_days": "None — open daily"
    },
    {
     "name": "Bar Poe",
     "category": "local-favorite",
     "cuisine": "International tapas (Portuguese/Thai/Cape Verdean stews) free with drinks",
     "price": "€",
     "why": "Cult evening-only bar near Plaza de Gracia where every drink comes with a choice of hot world-food tapas — a beloved twist on Granada's free-tapa tradition.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Bar%20Poe%20Granada",
     "website": null,
     "closed_days": "Evenings only (from ~20:00); weekly closing day varies — confirm locally"
    },
    {
     "name": "FM (Restaurante Bar FM)",
     "category": "michelin-listed",
     "cuisine": "Seafood / Motril-coast fish",
     "price": "€€",
     "why": "In the 2026 MICHELIN Guide selection: unbeatable Motril prawns and day-boat fish sold by weight in an unfussy room north of the center — locals' worst-kept secret.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Bar%20FM%20Granada",
     "website": null,
     "closed_days": "Closed Sunday and Monday"
    },
    {
     "name": "Albidaya",
     "category": "bib-gourmand",
     "cuisine": "Contemporary Andalusian-Moroccan, weekly market menu",
     "price": "€€",
     "why": "Bib Gourmand in the 2026 MICHELIN Guide — a small food-first dining room where Andalucía meets Morocco in a weekly-changing menu at a fair price.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Albidaya%20Restaurante%20Granada",
     "website": "https://www.albidayarestaurante.com/",
     "closed_days": "Closed Sunday and Monday (open Tue–Sat)"
    },
    {
     "name": "Atelier Casa de Comidas",
     "category": "michelin-listed",
     "cuisine": "Contemporary Andalusian",
     "price": "€€",
     "why": "Chef Raúl Sierra's bright, kitchen-in-view dining room (a past Bib Gourmand, currently in the MICHELIN selection) — modern technique on Granada flavors at honest prices.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Atelier%20Casa%20de%20Comidas%20Granada",
     "website": "https://ateliercasadecomidas.com/",
     "closed_days": "Closed Sunday and Monday (Tue–Sat 13:30–16:00, 20:30–23:00)"
    },
    {
     "name": "Cala",
     "category": "michelin-listed",
     "cuisine": "Creative Spanish, tasting menus (open kitchen)",
     "price": "€€",
     "why": "MICHELIN-selected spot with an immersive open kitchen and two well-priced tasting formats (Lirio and Cala) — Granada's modern-dining sweet spot.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Cala%20Granada",
     "website": null,
     "closed_days": "Not verified — typically closed early in the week; confirm before going"
    },
    {
     "name": "Faralá",
     "category": "michelin-star",
     "cuisine": "Creative granadino tasting menus (Sacromonte tortilla, remojón, Riofrío caviar)",
     "price": "€€€",
     "why": "SPLURGE — Granada's newly minted MICHELIN Star (2026 Guide): chef Cristina Jiménez reinvents Granada's canon below the Alhambra, with flamenco wine-bar El Quejío downstairs.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Faral%C3%A1%20Granada",
     "website": "https://restaurantefarala.com/",
     "closed_days": "Listings show service Wed–Sun (lunch from 13:30); closed Mon–Tue — reserve ahead (reservas@restaurantefarala.com), post-star demand is high",
     "splurge": true
    },
    {
     "name": "Restaurante Arrayanes",
     "category": "local-favorite",
     "cuisine": "Moroccan (pastela, tagines, couscous) — halal, no alcohol",
     "price": "€€",
     "why": "The best of the Calderería Nueva Moroccan quarter: a family-run Berber kitchen doing Granada's finest pastela and tagines in a jewel-box Andalusí room.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Restaurante%20Arrayanes%20Granada",
     "website": null,
     "closed_days": "None — open daily (approx. 13:30–16:30 and 19:30–23:30); note: no alcohol served"
    },
    {
     "name": "Ruta del Azafrán",
     "category": "local-favorite",
     "cuisine": "Mediterranean with Moroccan/Sephardic touches",
     "price": "€€",
     "why": "On Paseo de los Tristes with the Alhambra floodlit above your table — a dependable, atmospheric non-tapas dinner spanning couscous to Iberian pork.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Ruta%20del%20Azafr%C3%A1n%20Paseo%20de%20los%20Tristes%20Granada",
     "website": "https://rutadelazafran.com/",
     "closed_days": "None — open daily"
    }
   ],
   "sights": [
    {
     "name": "Alhambra & Generalife",
     "why": "The finest surviving medieval Islamic palace complex in the world — Nasrid Palaces, Alcazaba, Palace of Charles V and the Generalife gardens.",
     "official_url": "https://tickets.alhambra-patronato.es/",
     "hours_notes": "Open daily Sept 4–8 (summer season, until Oct 14): day visit 08:30–20:00. Night visits to the Nasrid Palaces Tue–Sat 22:00–23:30 (so Fri 4th, Sat 5th and Tue 8th qualify). Nasrid Palaces entry ONLY at the exact 30-minute time slot printed on your ticket — miss it and you cannot enter; bring the ID/passport used at purchase.",
     "price": "General ticket €22.27 online (incl. booking fee) via the official site; Gardens-only €12.73; night Nasrid visit €12.73; under-12s free but must be booked.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Alhambra%20Granada",
     "booking_note": "The ONLY official channel is tickets.alhambra-patronato.es (max 10 tickets/person/month; online sales close 23:59 the day before). September general tickets often sell out 2–6 weeks ahead — for Sept 4–8 book the first slot you see, and re-check at midnight/early morning for released cancellations. If sold out: (1) Gardens+Alcazaba ticket plus a night Nasrid ticket covers almost everything; (2) licensed guided-tour operators and official resellers (e.g. GetYourGuide, Civitatis) hold Nasrid allocations at a markup. Free/open areas (Charles V Palace, gates) need no ticket.",
     "ticket_url": "https://tickets.alhambra-patronato.es/"
    },
    {
     "name": "Albaicín",
     "why": "UNESCO-listed Moorish hill quarter of whitewashed cármenes and cobbled lanes — Granada's soul, best explored by getting lost.",
     "official_url": "https://www.turgranada.es/en/",
     "hours_notes": "Open access at all hours, all five days. Lanes are steep; bus C31/C32 from Plaza Nueva saves the climb.",
     "price": "Free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Albaic%C3%ADn%20Granada",
     "booking_note": null,
     "ticket_url": "https://www.turgranada.es/en/"
    },
    {
     "name": "Mirador de San Nicolás",
     "why": "The postcard view: Alhambra against the Sierra Nevada — Bill Clinton called it 'the most beautiful sunset in the world'.",
     "official_url": null,
     "hours_notes": "Open 24/7 all five days. Sunset Sept 4–8 is around 20:30 — arrive 45–60 min early for a spot on the wall; busiest Fri/Sat.",
     "price": "Free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Mirador%20de%20San%20Nicol%C3%A1s%20Granada",
     "booking_note": null,
     "ticket_url": null
    },
    {
     "name": "Granada Cathedral",
     "why": "Spain's great Renaissance cathedral, begun 1523 on the site of the main mosque — Siloé's soaring white rotunda is breathtaking.",
     "official_url": "https://catedraldegranada.com/",
     "hours_notes": "Fri 4th, Sat 5th, Mon 7th, Tue 8th: 10:00–18:15. SUNDAY Sept 6: afternoons only, 15:00–18:15. Last entry ~45 min before close.",
     "price": "€6 (audioguide included); under-12s free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Catedral%20de%20Granada",
     "booking_note": "Buy at the door or online via the cathedral site; rarely sells out.",
     "ticket_url": "https://catedraldegranada.com/"
    },
    {
     "name": "Capilla Real (Royal Chapel)",
     "why": "Gothic mausoleum of Isabella and Ferdinand, the Catholic Monarchs, with Isabella's superb Flemish art collection in the sacristy.",
     "official_url": "https://capillarealgranada.com/en/",
     "hours_notes": "Mon–Sat (Sept 4, 5, 7, 8): 10:15–18:30. SUNDAY Sept 6: 11:00–18:00. Separate entrance and ticket from the Cathedral (Calle Oficios).",
     "price": "€5 (audioguide included); under-12s free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Capilla%20Real%20de%20Granada",
     "booking_note": "Walk-up tickets are normally fine; free Wednesday-afternoon slots require advance booking via the archdiocese.",
     "ticket_url": "https://capillarealgranada.com/en/"
    },
    {
     "name": "Sacromonte & Museo Cuevas del Sacromonte",
     "why": "The historic cave-dwelling gitano quarter, birthplace of the zambra — the open-air cave museum shows how families lived and where flamenco grew.",
     "official_url": "https://sacromontegranada.com/en/",
     "hours_notes": "Museum open daily Sept 4–8, 10:00–20:00 (summer hours until Oct 14), last entry one hour before close.",
     "price": "€5",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Museo%20Cuevas%20del%20Sacromonte%20Granada",
     "booking_note": "No pre-booking needed; combine with a daytime walk up Camino del Sacromonte before an evening zambra.",
     "ticket_url": "https://sacromontegranada.com/en/"
    },
    {
     "name": "Carrera del Darro",
     "why": "Arguably Spain's most romantic street — a riverside walk under the Alhambra past stone bridges, convents and the Paseo de los Tristes.",
     "official_url": null,
     "hours_notes": "Open access at all hours, all five days; prettiest in late-afternoon light and after dark when the Alhambra is floodlit.",
     "price": "Free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Carrera%20del%20Darro%20Granada",
     "booking_note": null,
     "ticket_url": null
    },
    {
     "name": "El Bañuelo (11th-century Arab baths)",
     "why": "One of Spain's oldest and best-preserved hammams, its star-pierced vaults hiding in plain sight on Carrera del Darro.",
     "official_url": "https://www.alhambra-patronato.es/en",
     "hours_notes": "Summer hours run to Sept 14, so all five days: roughly 09:30–14:30 and 17:00–20:30 daily. FREE on Sunday Sept 6. Note the midday closure when planning.",
     "price": "€5 combined 'Monumentos Andalusíes' ticket (also covers Dar al-Horra, Casa Horno de Oro, Corral del Carbón); free Sundays; included in the Alhambra's Dobla de Oro ticket",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=El%20Ba%C3%B1uelo%20Granada",
     "booking_note": "No pre-booking needed; buy the combined ticket at the door.",
     "ticket_url": "https://www.alhambra-patronato.es/en"
    },
    {
     "name": "Monasterio de San Jerónimo",
     "why": "Gloriously over-the-top Renaissance monastery church — gilded retablo, orange-tree cloister, and the tomb of the Gran Capitán — with few crowds.",
     "official_url": "https://ticketsgranadacristiana.com/en/monumentos/monastery-of-san-jeronimo-granada/",
     "hours_notes": "Daily Sept 4–8, morning 10:00–13:30 plus an afternoon session (16:00–19:30 in high season; may already run 15:00–18:30 in September — check same-day). Mind the midday closure.",
     "price": "≈€6; under-12s free",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Monasterio%20de%20San%20Jer%C3%B3nimo%20Granada",
     "booking_note": "Walk-up entry; alternatively the Baroque Monasterio de la Cartuja (cartujadegranada.com, ≈€6, daily ~10:00–18:30 with split hours Saturday) makes a swap if timings fit better.",
     "ticket_url": "https://ticketsgranadacristiana.com/en/monumentos/monastery-of-san-jeronimo-granada/"
    }
   ],
   "shops": [
    {
     "name": "Alcaicería",
     "what": "The rebuilt Moorish silk-market lanes beside the Cathedral — silk scarves, lamps, Fajalauza pottery and souvenirs; haggle-friendly, prettiest early morning.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Alcaicer%C3%ADa%20Granada"
    },
    {
     "name": "Laguna Taller de Taracea",
     "what": "The Laguna family's marquetry (taracea) workshop up at the Alhambra — watch inlay demonstrations and buy museum-grade boxes and chessboards made on site.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Laguna%20Taller%20de%20Taracea%20Granada"
    },
    {
     "name": "Casa Ferrer (guitar makers, est. 1875)",
     "what": "Granada's oldest guitar workshop on Cuesta de Gomérez, the historic 'guitar street' up to the Alhambra — handmade flamenco and classical guitars.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Casa%20Ferrer%20Cuesta%20de%20Gom%C3%A9rez%20Granada"
    },
    {
     "name": "Daniel Gil de Avalle",
     "what": "Working luthier on Plaza del Realejo — guitars, repairs and flamenco accessories; you can often peek at instruments being built.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Daniel%20Gil%20de%20Avalle%20Granada"
    },
    {
     "name": "Cerámica Fajalauza",
     "what": "The historic Albaicín pottery (working since 1517) behind the Fajalauza gate — Granada's blue-and-green pomegranate-painted earthenware direct from the kiln.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Cer%C3%A1mica%20Fajalauza%20Granada"
    },
    {
     "name": "Calderería Nueva spice & tea shops",
     "what": "'Little Morocco' — a lane of spice stalls, tea blends, lamps and sweets between Calle Elvira and the Albaicín; pick up saffron, ras el hanout and Moorish pastries.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Calle%20Calderer%C3%ADa%20Nueva%20Granada"
    }
   ],
   "activities": [
    {
     "name": "Zambra at Cuevas Los Tarantos (Sacromonte)",
     "what": "Nightly zambra flamenco in a whitewashed Sacromonte cave, running since 1972 — shows around 21:00/22:30 with a drink included; book direct online.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Cuevas%20Los%20Tarantos%20Granada",
     "website": "https://cuevaslostarantos.com/"
    },
    {
     "name": "Zambra María la Canastera",
     "what": "The most historic cave of them all — María la Canastera's family still runs the intimate zambra in her 1900s cave, walls lined with copper pans and photos.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Zambra%20Mar%C3%ADa%20la%20Canastera%20Granada",
     "website": "https://www.marialacanastera.com/"
    },
    {
     "name": "Hammam Al Ándalus",
     "what": "Candle-lit Arab baths by Plaza Nueva — 3 thermal pools, steam room and optional massage (bath circuit from ~€52; bath+15-min massage ~€59). Sessions every 2 hours 10:00–24:00; book direct 2+ days ahead, September weekends fill fast.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Hammam%20Al%20%C3%81ndalus%20Granada",
     "website": "https://granada.hammamalandalus.com/en/"
    },
    {
     "name": "Sunset at Mirador de San Miguel Alto",
     "what": "The high mirador above San Nicolás — a 15-min extra climb buys you the full panorama (Alhambra, Albaicín, vega) with locals, beers and guitars instead of tour groups. Sunset ~20:30 this week.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Mirador%20de%20San%20Miguel%20Alto%20Granada",
     "website": null
    },
    {
     "name": "Rooftop drinks at Hotel Alhambra Palace terrace",
     "what": "1910 Belle-Époque hotel terrace on the Alhambra hill — Granada's grandest sundowner, with the whole city and vega at your feet; no reservation needed for the bar.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Hotel%20Alhambra%20Palace%20Granada",
     "website": "https://www.hotelalhambrapalace.com/"
    },
    {
     "name": "Alhambra night visit — Nasrid Palaces by lamplight",
     "what": "The Nasrid Palaces after dark (Tue–Sat 22:00–23:30 this season, €12.73) — quieter, cooler and magical; a great Plan B if daytime general tickets are sold out.",
     "maps_url": "https://www.google.com/maps/search/?api=1&query=Alhambra%20Nasrid%20Palaces%20Granada",
     "website": "https://tickets.alhambra-patronato.es/"
    }
   ],
   "day_plans": {
    "2026-09-04": {
     "date": "2026-09-04",
     "weekday": "Friday",
     "morning": "Cathedral (opens 10:00) then the Capilla Real next door for the tombs of the Catholic Monarchs; browse the Alcaicería silk-market lanes between them.",
     "afternoon": "Free-tapas lunch at Bar Los Diamantes on Calle Navas, siesta, then Monasterio de San Jerónimo when it reopens (~16:00) and El Bañuelo on Carrera del Darro after 17:00.",
     "evening": "Sunset at Mirador de San Nicolás (~19:45 arrival), then dinner at FM for Motril seafood — it closes Sun–Mon, so tonight or Saturday is your window; nightcap at Bodegas Castañeda."
    },
    "2026-09-05": {
     "date": "2026-09-05",
     "weekday": "Saturday",
     "morning": "Alhambra & Generalife day — enter at 08:30 before the heat, built around your timed Nasrid Palaces slot (be at the palace gate 10 min early with ID); allow 3+ hours including the Generalife gardens.",
     "afternoon": "Walk down Cuesta de Gomérez past the guitar workshops (Casa Ferrer); late lunch in the Realejo, then recover with a drink on the Hotel Alhambra Palace terrace.",
     "evening": "Dinner at Atelier Casa de Comidas (open Tue–Sat), then taxi or walk up Camino del Sacromonte for the late zambra at Cuevas Los Tarantos."
    },
    "2026-09-06": {
     "date": "2026-09-06",
     "weekday": "Sunday",
     "morning": "Albaicín wander from Plaza Larga to Mirador de San Nicolás; El Bañuelo and the other Andalusian monuments are FREE today (open from 09:30, closed 14:30–17:00). Capilla Real opens 11:00 if you missed it.",
     "afternoon": "Splurge lunch at Faralá, Granada's new Michelin star (Sunday lunch service; reserve ahead). The Cathedral is afternoons-only today, 15:00–18:15, if you still need it. Note many tapas kitchens close tonight.",
     "evening": "Golden hour on Carrera del Darro and Paseo de los Tristes, dinner at ever-open Ruta del Azafrán under the floodlit Alhambra, vermouth at Bodegas Castañeda (open daily)."
    },
    "2026-09-07": {
     "date": "2026-09-07",
     "weekday": "Monday",
     "morning": "Sacromonte morning: walk the Camino del Sacromonte and visit the Museo Cuevas del Sacromonte (open daily 10:00–20:00) for cave-life and flamenco history.",
     "afternoon": "Lunch at Los Manueles (open daily — FM, Albidaya, Atelier and La Tana are all closed Mondays); afternoon shopping at Laguna Taracea or Cerámica Fajalauza, or swap in Monasterio de la Cartuja.",
     "evening": "Pre-booked evening session at Hammam Al Ándalus, then a Moroccan feast at Arrayanes off Calderería Nueva (no alcohol — mint tea instead)."
    },
    "2026-09-08": {
     "date": "2026-09-08",
     "weekday": "Tuesday",
     "morning": "Slow start in 'Little Morocco': mint tea and pastries in a Calderería Nueva tetería, spice shopping, and a look inside Daniel Gil de Avalle's luthier workshop in the Realejo.",
     "afternoon": "Free-tapas lunch at Taberna La Tana (reopens after the weekend/Monday closures), then the climb to Mirador de San Miguel Alto for the widest view of the trip.",
     "evening": "Farewell dinner at Bib Gourmand Albidaya (reopens Tuesdays) — or, if you couldn't get daytime Alhambra tickets, tonight's 22:00 Nasrid Palaces night visit followed by late tapas on Calle Navas."
    }
   }
  }
 },
 "transport": {
  "meta": {
   "researched_on": "2026-09-04",
   "trip_window": "2026-09-04 to 2026-09-08",
   "line_status_note": "The Malaga-Antequera high-speed section (cut Feb-Apr 2026 by the Alora landslide) is fully restored: single-track service resumed 30 Apr 2026, full double-track since 17 Jul 2026, and Renfe/iryo have since added extra frequencies. All routes below are operating normally for these dates.",
   "verification_note": "renfe.com (200), ouigo.com (200) and alsa.com (live redirect via its Queue-it waiting room) verified by direct HTTP check on 2026-09-04. iryo.eu and omio.com return HTTP 403 to automated clients (bot protection) and could not be machine-verified, but both are live and actively referenced in current search results; open them in a normal browser."
  },
  "legs": [
   {
    "route": "Málaga ↔ Córdoba",
    "options": [
     {
      "mode": "train",
      "operator": "Renfe AVE / Avant",
      "typical_duration": "50-60 min (fastest AVE ~47-50 min, Avant ~55-60 min)",
      "price_range": "EUR 20-45 (AVE flexible up to ~EUR 45; Avant fixed fare ~EUR 23)",
      "frequency": "Part of ~19 direct high-speed trains/day each way; first ~05:13, last ~23:06",
      "booking_url": "https://www.renfe.com/es/en",
      "notes": "Fastest and most frequent leg of the trip. Avant is the cheaper Renfe commuter high-speed option with fixed fares; AVE is pricier but included in more departures. Security X-ray at the gate - arrive 20-30 min early."
     },
     {
      "mode": "train",
      "operator": "iryo",
      "typical_duration": "~50-55 min",
      "price_range": "EUR 8-25 (promo fares from ~EUR 8)",
      "frequency": "Several departures/day (Madrid-Málaga services stopping at Córdoba)",
      "booking_url": "https://iryo.eu/en/home",
      "notes": "Low-cost high-speed competitor, stops at both Málaga María Zambrano and Córdoba. iryo.eu blocks automated checks (HTTP 403 bot protection) but is live in a normal browser; iryo tickets are also sold on Trainline/Omio."
     },
     {
      "mode": "train",
      "operator": "OUIGO",
      "typical_duration": "~50-55 min",
      "price_range": "EUR 7-20 (from ~EUR 7-9 booked ahead)",
      "frequency": "2-3 departures/day (Madrid-Málaga services stopping at Córdoba)",
      "booking_url": "https://www.ouigo.com/es/en",
      "notes": "Cheapest fares on the route alongside Renfe's low-cost Avlo. Only one carry-on + one cabin bag included free; larger/extra luggage costs a few euros - add it when booking, not on board."
     },
     {
      "mode": "train",
      "operator": "Renfe Avlo (budget alternative to MD regional)",
      "typical_duration": "~50-55 min",
      "price_range": "EUR 7-18",
      "frequency": "1-3 departures/day",
      "booking_url": "https://www.renfe.com/es/en",
      "notes": "No practical direct MD (Media Distancia) regional train could be confirmed on this corridor for 2026 - the budget role is filled by Avlo/OUIGO/iryo promo fares from ~EUR 7-9, which are as cheap as a regional would be and 3x faster."
     }
    ],
    "recommended": "High-speed train - book whichever of AVE/Avant/iryo/OUIGO/Avlo is cheapest at your preferred time (~19 trains/day, 50-60 min). With this frequency you can treat it almost like a shuttle, but the sub-EUR-10 promo fares sell out first."
   },
   {
    "route": "Córdoba ↔ Granada",
    "options": [
     {
      "mode": "train",
      "operator": "Renfe AVE / Avant / Alvia (via Antequera)",
      "typical_duration": "1h28-1h45 (some direct, some with a cross-platform change at Antequera-Santa Ana)",
      "price_range": "EUR 18-45 one-way (flexible AVE fares can reach EUR 60+; from ~EUR 18-21 booked ahead)",
      "frequency": "Up to 5 trains/day each way; roughly 09:00-21:40 window (first ~09:07, last ~21:36 ex-Córdoba)",
      "booking_url": "https://www.renfe.com/es/en",
      "notes": "Renfe only - iryo/OUIGO/Avlo do NOT serve Granada. Avant services stop briefly in Loja and may involve an AVE-Avant connection at Antequera on one ticket; direct AVE stops only at Antequera. Only ~5 departures/day, so lock in your time early. Recommended option: nearly twice as fast as the bus."
     },
     {
      "mode": "bus",
      "operator": "ALSA",
      "typical_duration": "2h40 direct (up to ~3h with stops)",
      "price_range": "EUR 10-18 one-way",
      "frequency": "~8 buses/day each way (roughly 08:30-20:00)",
      "booking_url": "https://www.alsa.com/en/coach/cordova-granada",
      "notes": "Cheaper fallback and useful if the 5 daily trains don't fit your schedule or sell out. Hold luggage carried free. Córdoba bus station is directly opposite the train station. alsa.com sometimes routes you through a short virtual queue (Queue-it) - the ALSA app usually skips it."
     }
    ],
    "recommended": "Train (AVE/Avant via Antequera, ~1h30, EUR 18-45) - much faster than the 2h40 bus. Book early: only ~5 trains/day and Avant sets are short trains that sell out around long weekends."
   },
   {
    "route": "Málaga ↔ Granada",
    "options": [
     {
      "mode": "bus",
      "operator": "ALSA",
      "typical_duration": "1h45 direct (1h30 express variants; 2h-2h30 with stops)",
      "price_range": "EUR 8-14 one-way (~EUR 13 typical; ~EUR 26 round trip)",
      "frequency": "20+ direct buses/day each way (up to ~40 daily services counting slower runs), roughly 07:00-22:00",
      "booking_url": "https://www.alsa.com/en/coach/malaga-granada",
      "notes": "The practical winner: about as fast door-to-door as the train once you count Granada station's location, far more frequent (20+ vs 3-4 trains), and half the price. Departs Málaga bus station (Paseo de los Tilos, next to María Zambrano train station) to Granada bus station. Buy the direct/'directo' departure. Rarely full except Friday/Sunday evenings - for Sept 4-8 book 1-2 days ahead to be safe."
     },
     {
      "mode": "train",
      "operator": "Renfe Avant (direct) / AVE+Avant via Antequera",
      "typical_duration": "Direct Avant ~1h18-1h30; AVE+Avant combinations with a change at Antequera-Santa Ana 1h30-3h depending on connection",
      "price_range": "Direct Avant from ~EUR 18-20; AVE+Avant combos EUR 35-55",
      "frequency": "~3 direct Avant/day each way (plus a few via-Antequera combinations); note some aggregators only show the connecting services",
      "booking_url": "https://www.renfe.com/es/en",
      "notes": "Direct Avant Málaga-Granada exists in 2026 (line fully restored since July 2026 after the spring Alora washout) but runs only ~3x/day - book Avant seats early, these small trains sell out. Renfe only on this corridor; no iryo/OUIGO. Take the direct Avant, not an AVE+Avant combo, which costs more and can involve long Antequera waits."
     }
    ],
    "recommended": "ALSA direct bus (1h45, EUR ~13, 20+/day) for flexibility - unless one of the ~3 daily direct Avant trains (~1h20, from ~EUR 18) matches your timing, in which case the train is more comfortable and drops you a similar distance from the centre."
   }
  ],
  "stations": [
   {
    "name": "Málaga María Zambrano (main train station)",
    "city": "Málaga",
    "type": "train",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=M%C3%A1laga%20Mar%C3%ADa%20Zambrano%20station%20M%C3%A1laga",
    "notes": "~15-20 min walk to the historic centre; left-luggage lockers (consigna) inside; bus station is right next door."
   },
   {
    "name": "Estación de Autobuses de Málaga (Paseo de los Tilos)",
    "city": "Málaga",
    "type": "bus",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n%20de%20Autobuses%20de%20M%C3%A1laga%20Paseo%20de%20los%20Tilos%20M%C3%A1laga",
    "notes": "2-min walk from María Zambrano train station - easy to compare last-minute train vs bus."
   },
   {
    "name": "Córdoba Central (train station)",
    "city": "Córdoba",
    "type": "train",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=C%C3%B3rdoba%20Central%20railway%20station%20C%C3%B3rdoba",
    "notes": "~20-25 min walk or ~EUR 8 taxi to the Mezquita/Judería; left-luggage lockers available."
   },
   {
    "name": "Estación de Autobuses de Córdoba",
    "city": "Córdoba",
    "type": "bus",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n%20de%20Autobuses%20de%20C%C3%B3rdoba",
    "notes": "Directly opposite the train station (Glorieta de las Tres Culturas) - switching between modes is trivial."
   },
   {
    "name": "Estación de Granada (Avenida de Andaluces train station)",
    "city": "Granada",
    "type": "train",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n%20de%20tren%20Granada%20Avenida%20de%20Andaluces",
    "notes": "~20-25 min walk to the cathedral area; LAC/city buses or ~EUR 8 taxi to the centre/Albaicín. No reliable lockers here - use the bus station or a city luggage shop."
   },
   {
    "name": "Estación de Autobuses de Granada (Avenida Juan Pablo II)",
    "city": "Granada",
    "type": "bus",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=Estaci%C3%B3n%20de%20Autobuses%20de%20Granada%20Avenida%20Juan%20Pablo%20II",
    "notes": "~3 km north of the centre: take bus SN1/LAC connection or a ~EUR 8-10 taxi. Has luggage lockers."
   },
   {
    "name": "Antequera-Santa Ana (transfer hub)",
    "city": "Antequera",
    "type": "train",
    "maps_url": "https://www.google.com/maps/search/?api=1&query=Antequera-Santa%20Ana%20railway%20station%20Antequera",
    "notes": "Where Málaga/Córdoba/Granada high-speed lines meet; you may change trains here on some Granada itineraries. It is ~17 km outside Antequera town."
   }
  ],
  "general_tips": [
   "Book NOW for Sept 4-8: these dates are already on sale and inside the booking window. The scarce inventory is (a) the ~3 daily direct Avant Málaga-Granada and (b) the ~5 daily Córdoba-Granada trains - Avant sets are short trains that genuinely sell out; Málaga-Córdoba has ~19 trains/day so it can be left flexible.",
   "Renfe.com quirks: use the English site (renfe.com/es/en); checkout sometimes rejects non-Spanish cards or chokes on phone/ID validation. If it fails, Trainline or Omio sell the same Renfe (and iryo) tickets for a ~EUR 1-2 fee - note omio.com and iryo.eu block bots, so both must be opened in a regular browser.",
   "alsa.com may put you in a short 'Queue-it' virtual waiting room during promo periods - it clears in seconds, or use the ALSA app / station ticket machines. ALSA buses include a free hold bag; OUIGO trains charge for luggage beyond one cabin bag + one hand bag, while Renfe/iryo have no practical weight checks (bags go through an X-ray at high-speed gates - arrive 20-30 min early).",
   "Stations to old towns: all three train stations are 15-25 min on foot from the sights, or a ~EUR 8 taxi. In Granada, the bus station is furthest out (~3 km, taxi EUR 8-10); Córdoba's bus and train stations face each other, so mode-switching there is effortless.",
   "Luggage storage: lockers exist at Málaga María Zambrano and Córdoba train stations and at Granada bus station; Granada's train station has no reliable consigna, so use a city luggage-storage shop near the cathedral if you want a bag-free half-day (e.g., between checkout and an evening train).",
   "Line status: the Feb-2026 Alora landslide that cut Málaga-Antequera is fully repaired (double track back since 17 July 2026) and operators have added extra frequencies - no residual disruption expected for these dates, but re-check renfe.com/alsa.com the morning of travel as Spanish operators post same-day alterations there."
  ]
 }
};
