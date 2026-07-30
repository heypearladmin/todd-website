export type NeighborhoodFaq = {
  question: string;
  answer: string;
};

export type NeighborhoodDetails = {
  shortAnswer: string;
  overview: string;
  bestFor: string[];
  housing: string;
  lifestyle: string;
  commute: string;
  schools: string;
  prosAndCons: {
    pros: string[];
    cons: string[];
  };
  faqs: NeighborhoodFaq[];
  marketNotes: string;
};

export type Neighborhood = {
  slug: string;
  title: string;
  dek: string;
  vibe: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  details?: NeighborhoodDetails;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "gruene",
    title: "Gruene",
    dek: "Limestone bones, hall glow, and front porches that have heard every chorus. Historic, walkable, and rarely quiet on a weekend.",
    vibe: "Historic and lively",
    href: "/neighborhoods/gruene",
    imageSrc: "/images/neighborhood-gruene-historic-limestone.webp",
    imageAlt:
      "Historic Gruene main street at golden hour with limestone facades and warm bulb lighting.",
    details: {
      shortAnswer:
        "Gruene is one of the most distinctive and charming neighborhoods in the New Braunfels area — a genuine Texas Hill Country landmark with historic character, walkable streets, and a strong sense of place. It offers a lifestyle that most neighborhoods simply cannot replicate, though buyers should know that weekends bring crowds and privacy comes at a premium.",
      overview:
        "Gruene (pronounced \"Green\") sits at the northwestern edge of New Braunfels along the Guadalupe River, and it carries a kind of quiet confidence that comes from being the real thing. Founded by German immigrant Henry D. Gruene in the 1870s, the district retains much of its original character — a water tower, a general store turned restaurant, cotton gin ruins, and Gruene Hall, which has been hosting live music continuously since 1878 and holds the title of oldest dance hall in Texas. That history is not manufactured or curated for tourists. It just is.\n\nLiving in or near Gruene means waking up in a place people drive hours to visit. The Guadalupe River runs along the southern edge of the district, offering some of the best tubing in Central Texas and year-round access to one of the region's most beloved natural corridors. On a Tuesday morning, the streets are quiet, the air smells like cedar and river water, and the whole area feels like it belongs to the people who actually live here. On a Saturday in July, it belongs to everyone — which is either charming or exhausting depending on your perspective.\n\nHousing ranges from original historic bungalows in the core district to newer construction in the surrounding residential areas. The neighborhood attracts buyers who want character, a walkable main street, and proximity to nature without sacrificing modern conveniences. It is not the right fit for every buyer, but for the right buyer, there is nothing else quite like it in the region.",
      bestFor: [
        "Buyers who value historic character and architectural authenticity over new construction finishes",
        "Those who enjoy walkability, live music, and a genuine small-town main street",
        "River enthusiasts — tubing, kayaking, and swimming are steps from many properties",
        "People who appreciate a strong sense of community identity and local pride",
        "Buyers relocating from urban areas who want culture and charm without a big-city footprint",
        "Investors or second-home buyers looking for a market with proven tourism-driven demand",
      ],
      housing:
        "Housing in the Gruene area runs a wide spectrum. In the historic core, you will find original late 19th and early 20th century bungalows and cottages, some meticulously restored and others still waiting for their moment. These properties rarely come to market, and when they do, they move quickly — often above asking. Expect to pay $450,000 to $700,000 or more for a genuine historic home close to the district, depending on condition and lot size.\n\nRadiating outward from the historic center, the surrounding neighborhoods offer a mix of 1980s and 1990s ranch-style homes alongside newer construction from the 2000s and 2010s. These properties tend to sit on quarter-acre to half-acre lots and offer more square footage for the price, typically in the $350,000 to $550,000 range. Lot sizes in Gruene proper tend to be modest by Texas standards, but the mature tree canopy and established landscaping make them feel generous. Buyers accustomed to large suburban lots may find the trade-off worthwhile given the location and character. New construction is limited in the immediate area, which helps preserve the neighborhood's scale and feel.",
      lifestyle:
        "Gruene delivers a lifestyle that is genuinely hard to replicate. The Guadalupe River is not a backdrop — it is part of daily life. Residents tube, kayak, swim, and fish in it through the long Texas summers. The Gruene River Club and several local outfitters make river access easy, and on warm evenings, the sound of the river and live music from Gruene Hall carries across the neighborhood in a way that feels cinematic.\n\nThe main street along Hunter Road and Gruene Road is anchored by a small but excellent collection of restaurants and shops. Mozie's, the Gristmill River Restaurant, and Gruene Hall itself draw visitors from across the state, but locals use them too — and the Gruene Market Days, held the third weekend of each month, brings artisans, food vendors, and live music to the district year-round.\n\nDuring the week, the pace is genuinely relaxed. The tourist energy fades, and Gruene settles into something that feels more like a small Texas town than a destination. That contrast — vibrant on weekends, peaceful midweek — defines the rhythm of life here and is something most residents come to appreciate rather than merely tolerate.",
      commute:
        "Gruene sits along the northwestern edge of New Braunfels, which places it roughly 35 minutes from downtown San Antonio via Interstate 35 under normal traffic conditions. The drive to Austin runs closer to 50 minutes to an hour, depending on your destination and the time of day. I-35 is the primary corridor for both directions, and peak-hour congestion — particularly in the Austin direction — is a real consideration for daily commuters. Many Gruene-area residents work remotely or make the drive two to three times a week rather than daily, which softens the calculus considerably. The neighborhood's proximity to both cities without being fully absorbed by either is one of its defining qualities.",
      schools:
        "The Gruene area is served by Comal Independent School District, one of the more well-regarded districts in the greater San Antonio and Hill Country region. Comal ISD has seen consistent growth alongside the broader New Braunfels population boom and has maintained solid academic performance through that expansion. Elementary-age students in the Gruene area generally attend Goodwin Frazier Elementary, with students feeding into Canyon Middle School and Canyon High School for secondary grades. Canyon High has a strong reputation locally for academics, athletics, and extracurriculars. Families relocating from larger metro areas generally find Comal ISD to be a meaningful upgrade in school quality relative to comparable Texas suburban districts.",
      prosAndCons: {
        pros: [
          "Unmatched historic character and architectural authenticity in the Texas Hill Country region",
          "Direct access to the Guadalupe River for tubing, kayaking, and swimming",
          "Walkable main street with genuine restaurants, music, and community events",
          "Strong name recognition that supports property values and resale demand",
          "Quieter, more residential feel during the week despite weekend popularity",
          "Comal ISD schools with a solid academic track record",
        ],
        cons: [
          "Weekend crowds can be significant, especially in summer — parking and noise are real considerations",
          "Limited housing inventory in the historic core means competition can be intense when properties do list",
          "Price per square foot tends to run higher than comparable homes elsewhere in New Braunfels",
          "I-35 commute to Austin in particular can be frustrating during peak hours",
          "Older homes may carry deferred maintenance, septic systems, or renovation needs that add to total cost",
          "Short-term rental activity in parts of the neighborhood can affect the residential feel on busy weekends",
        ],
      },
      faqs: [
        {
          question: "Is Gruene too touristy to actually live in?",
          answer:
            "It depends on your tolerance for weekend activity and your work schedule. During the week, Gruene is genuinely quiet and residential. The crowds concentrate on weekends, particularly in summer and during events like Gruene Market Days. Most residents describe a clear midweek rhythm that feels nothing like the weekend tourist version of the neighborhood. If you work from home and keep a flexible schedule, you will find plenty of windows when Gruene feels entirely your own.",
        },
        {
          question: "Are there short-term rental restrictions in Gruene?",
          answer:
            "New Braunfels has been actively working through short-term rental regulations, and the rules have shifted over time. Some parts of the Gruene area are subject to city of New Braunfels STR rules, while others fall under county jurisdiction. Before purchasing with STR intent — or if STR activity in the neighborhood concerns you as a buyer — it is worth reviewing the current ordinance with your agent and confirming the specific zoning of any property you are considering.",
        },
        {
          question:
            "What is the difference between buying in the historic core versus the surrounding Gruene area?",
          answer:
            "The historic core properties — within walking distance of Gruene Hall, the Gristmill, and the river — carry a premium and offer genuine historic architecture. They tend to be smaller, older, and require more attention. The surrounding residential areas offer newer construction, more square footage, and lower price points, but without the same walkability or historic character. Both have real appeal; it comes down to whether you are buying the lifestyle of being in Gruene or simply near it.",
        },
        {
          question:
            "How does the Guadalupe River affect the neighborhood — flooding, insurance, that kind of thing?",
          answer:
            "Flood zone designation varies significantly by specific property in the Gruene area. Some parcels close to the river sit in mapped flood zones and require flood insurance, which adds to carrying costs and should factor into your purchase decision. Properties further from the river bank are often outside designated flood zones, but it is always worth pulling the FEMA flood map and discussing insurance implications with an independent insurance agent before making an offer.",
        },
        {
          question: "Is Gruene a good investment from a resale standpoint?",
          answer:
            "Historically, yes. The combination of genuine historic scarcity — you cannot build more Gruene — strong tourism-driven name recognition, and steady population growth in the broader New Braunfels area has supported property values well. Historic core properties in particular tend to hold value through market softening because supply is inherently constrained. That said, no neighborhood is immune to broader market cycles, and buyers should evaluate any property on its own merits rather than relying on the Gruene name alone.",
        },
      ],
      marketNotes:
        "The Gruene market operates with a scarcity dynamic that separates it from most of New Braunfels. Historic core properties rarely turn over, and when they do, well-priced listings attract multiple offers quickly. The broader surrounding area has seen the same moderating trends as the rest of Central Texas — rising rates through 2023 and 2024 took some heat out of the market — but demand in Gruene has remained more resilient than in newer subdivisions. Buyers should expect to move decisively when the right property appears. The days of extended negotiation on desirable Gruene properties are more exception than rule, even in a cooled broader market.",
    },
  },
  {
    slug: "downtown-new-braunfels",
    title: "Downtown New Braunfels",
    dek: "Plaza weekends, the river a block away, and a Main Street that has quietly leveled up. Restaurants, coffee, and slow Saturdays.",
    vibe: "Walkable and waking up",
    href: "/neighborhoods/downtown-new-braunfels",
    imageSrc: "/images/neighborhood-downtown-new-braunfels-plaza.webp",
    imageAlt:
      "Downtown New Braunfels plaza at soft hour with historic architecture and gentle foot traffic.",
    details: {
      shortAnswer:
        "Downtown New Braunfels offers a rare combination of walkable small-city living, genuine Hill Country character, and a growing food and culture scene — all within a 30-minute drive of San Antonio. For buyers who want a real neighborhood with sidewalks, history, and something to do on a Tuesday evening, it delivers in a way that newer master-planned communities simply cannot.",
      overview:
        "Downtown New Braunfels is the original heart of a city that German settlers founded in 1845, and that history is still very much alive in the architecture, the street grid, and the community culture. Main Plaza anchors the neighborhood — a genuine town square surrounded by local restaurants, boutique shops, and a year-round calendar of events that draws residents out of their homes and onto the streets in a way you rarely see in suburban Texas.\n\nThe housing stock here is genuinely mixed. You'll find late-19th and early-20th century craftsman bungalows and limestone cottages sitting a few blocks from newer townhomes and low-rise condos built to meet demand from buyers who want walkability without giving up modern finishes. It is not a sanitized historic district — it is a living neighborhood, which means some blocks are impeccably maintained and others are mid-renovation. That variety is part of the appeal, and it creates real opportunity for buyers willing to look closely.\n\nLanda Park, one of the finest municipal parks in Central Texas, sits at the neighborhood's edge with its spring-fed pool, paddleboats, miniature railroad, and direct access to the Comal River. Schlitterbahn — the iconic waterpark that put New Braunfels on the national map — is a short walk or bike ride away. The Comal River itself flows through the area, cold and clear year-round, and tube rentals launch within walking distance of many downtown streets. For a neighborhood in a city of roughly 100,000 people, the outdoor access is genuinely exceptional.\n\nThe food and coffee scene has matured significantly in recent years. Independent cafes, wine bars, farm-to-table restaurants, and weekend farmers markets have filled in around the historic German restaurants and beer gardens that have been anchors for decades. Downtown New Braunfels today feels like a small city that has figured out what it wants to be — and buyers are noticing.",
      bestFor: [
        "Buyers who prioritize walkability and want to walk to dinner, coffee, or the farmers market without getting in a car",
        "Commuters to San Antonio who want a real neighborhood rather than a subdivision, with a manageable 30-minute drive south",
        "History and architecture enthusiasts drawn to limestone cottages, craftsman bungalows, and a genuine town center",
        "Buyers looking for rental or short-term rental potential in a high-traffic tourist destination",
        "Empty nesters and downsizers ready to trade square footage for lifestyle and proximity to culture and outdoor recreation",
        "First-time buyers who want the energy of an urban environment at a price point that remains accessible relative to Austin",
      ],
      housing:
        "Downtown New Braunfels offers more housing variety than most buyers expect. The older residential streets — particularly those within a few blocks of Main Plaza and along the Comal River — feature historic limestone homes, craftsman bungalows, and early-20th century cottages, typically on modest lots with mature trees and front porches. These properties range from move-in ready with tasteful renovations to full gut-rehab candidates, and they price roughly between $350,000 and $550,000 depending on condition and proximity to the plaza.\n\nNewer construction has filled in over the past decade in the form of townhomes, small-lot single-family homes, and low-rise condos. These tend to run $300,000 to $500,000 and offer modern layouts, low maintenance, and strong rental demand given the area's tourism draw. Lot sizes in the historic core are small by Texas standards — typically 4,000 to 8,000 square feet — which suits buyers looking for a lock-and-leave lifestyle. Garage parking is not always a given on older properties, so buyers coming from suburban settings should factor that in early.",
      lifestyle:
        "Life in downtown New Braunfels has a rhythm that feels genuinely different from the master-planned communities that have grown up around the city. On weekend mornings, the farmers market draws a mix of locals and visitors to Main Plaza. Friday evenings bring live music to the beer gardens and restaurant patios along San Antonio Street and Castell Avenue. The Comal River is cold enough to tube comfortably from May through September, and several outfitters within walking distance handle everything from tube rentals to shuttle runs.\n\nLanda Park offers 51 acres of green space with a spring-fed swimming pool, disc golf, tennis, a small lake with paddleboats, and the famous miniature railroad that has been running since 1951. For a neighborhood park, it is remarkably well-developed. The broader outdoor lifestyle extends easily to Canyon Lake (about 20 minutes west) and Guadalupe River State Park for kayaking, hiking, and camping.\n\nThe food scene deserves specific mention. Restaurants like Myron's Prime Steakhouse, Huisache Grill, and a growing collection of independent coffee shops and wine bars have added real depth to a dining culture that previously leaned heavily on German tradition. The Wurstfest grounds host the famous November festival but also serve as event space throughout the year. This is a neighborhood where there is almost always something happening within walking distance.",
      commute:
        "Downtown New Braunfels sits at a genuine geographic sweet spot between Texas's two largest metro areas. San Antonio is approximately 30 minutes south via IH-35, making a downtown commute realistic for most professional roles. Austin runs closer to 50 minutes under normal conditions, though peak-hour traffic on IH-35 through San Marcos and Kyle can stretch that to 70 minutes or more — something Austin-bound commuters should test drive on a Tuesday morning before committing. The New Braunfels area does not currently have commuter rail, so driving is the primary option. Within the neighborhood itself, a car is often unnecessary for daily errands, dining, and recreation.",
      schools:
        "Downtown New Braunfels is served by Comal Independent School District, one of the consistently higher-performing districts in the greater San Antonio region. Walnut Springs Elementary and New Braunfels Middle School serve the immediate downtown area, with New Braunfels High School as the primary high school. Comal ISD has received strong marks for academic performance and extracurricular programming, and the district's growth has prompted ongoing investment in facilities. Families with school-age children should confirm current attendance boundaries directly with Comal ISD, as boundary adjustments have occurred in recent years to manage enrollment growth across the district.",
      prosAndCons: {
        pros: [
          "Genuine walkability rare in Central Texas — coffee, dinner, and the farmers market without a car",
          "Landa Park and Comal River access are exceptional amenities for an urban neighborhood",
          "Strong short-term rental demand driven by consistent tourist traffic to Schlitterbahn and the river",
          "Historic character and architectural variety that newer developments cannot replicate",
          "Active community calendar — plaza events, Wurstfest, farmers markets — creates real neighborhood energy",
          "Comal ISD is a well-regarded district with strong academic performance",
        ],
        cons: [
          "IH-35 traffic to Austin can be significant during peak hours, making that commute less predictable",
          "Older homes may carry deferred maintenance, foundation considerations, or aging systems that require careful inspection",
          "Parking is limited on some historic streets — garages are not standard on older properties",
          "Tourist activity peaks in summer and during Wurstfest, bringing crowds and noise to central streets",
          "Inventory in the most walkable blocks is thin and moves quickly, which creates competitive offer situations",
          "Short-term rental regulations are subject to ongoing local policy discussion — buyers should verify current rules before purchasing with that intent",
        ],
      },
      faqs: [
        {
          question: "Are short-term rentals allowed in downtown New Braunfels?",
          answer:
            "New Braunfels has a short-term rental ordinance that regulates STRs within city limits, including registration requirements and certain restrictions by zoning classification. The rules have evolved in recent years and continue to be a topic of local policy discussion. If STR income is a factor in your purchase decision, verify the current regulations and your specific property's zoning with the City of New Braunfels before closing.",
        },
        {
          question:
            "How competitive is the market for walkable downtown properties?",
          answer:
            "Inventory in the most desirable downtown blocks — particularly historic homes within walking distance of Main Plaza and Landa Park — tends to be limited and sells relatively quickly when priced correctly. Well-maintained properties at fair market value routinely see multiple offers. Working with a local agent who tracks downtown specifically, and being prepared to move decisively, matters more here than in outlying subdivisions.",
        },
        {
          question:
            "Is flooding a concern in the downtown area near the Comal River?",
          answer:
            "Parts of the downtown area near the Comal and Guadalupe Rivers do fall within FEMA flood zones, and New Braunfels has experienced significant flood events historically. This is not a reason to avoid the area, but it is something to investigate thoroughly. Your agent should pull the flood map for any specific property you're considering, and a thorough inspection plus flood insurance review should be standard practice for anything near the river corridors.",
        },
        {
          question:
            "What is the typical lot size and square footage for downtown homes?",
          answer:
            "Historic properties in the downtown core typically sit on smaller lots — often 4,000 to 8,000 square feet — with home sizes ranging from roughly 1,000 to 2,200 square feet for older single-family homes. Newer townhomes and condos are similarly compact by suburban standards. If you are coming from a newer subdivision expecting a large yard and a three-car garage, downtown living requires some expectation-setting, but many buyers find the tradeoff well worth it.",
        },
        {
          question:
            "How does downtown New Braunfels feel compared to the newer master-planned communities like Veramendi or Vintage Oaks?",
          answer:
            "They serve genuinely different lifestyles. Downtown has age, walkability, historic character, and built-in community activity — but smaller lots, older infrastructure, and more variability in home condition. Veramendi and Vintage Oaks offer newer construction, larger lots, amenity centers, and more predictable finishes, but require a car for everything and lack the organic neighborhood energy of the historic core. Neither is objectively better; the right choice depends on how you actually want to live day-to-day.",
        },
      ],
      marketNotes:
        "Downtown New Braunfels has held its value well through the broader Central Texas market correction of 2023-2024. The combination of limited inventory in the historic core, consistent tourism-driven demand, and the neighborhood's genuine lifestyle appeal has kept prices relatively stable in the $300,000-$600,000 range. Properties in the most walkable locations — within a half-mile of Main Plaza — tend to command a premium over comparable square footage further out. Days on market have moderated from the frenzied 2021-2022 pace, giving buyers more time for due diligence, but well-priced homes in desirable locations still move quickly. The ongoing growth of New Braunfels as a whole continues to support downtown values.",
    },
  },
  {
    slug: "canyon-lake",
    title: "Canyon Lake",
    dek: "Dawn pinks on reservoir glass, hill country quiet, and morning views that feel borrowed from a travel annual.",
    vibe: "Lakefront calm",
    href: "/neighborhoods/canyon-lake",
    imageSrc: "/images/neighborhood-canyon-lake-shoreline.webp",
    imageAlt:
      "Aerial dawn photograph of Canyon Lake with folded Hill Country ridges and soft pink water.",
    details: {
      shortAnswer:
        "Canyon Lake is a peaceful Hill Country reservoir community that offers some of the best waterfront living in Central Texas. Whether you're looking for a full-time lakefront retreat, a weekend getaway, or a quiet inland home with Hill Country views, Canyon Lake delivers a lifestyle that's hard to find this close to San Antonio and Austin.",
      overview:
        "Canyon Lake sits about 15 miles west of New Braunfels along the Guadalupe River, where an 8,240-acre reservoir anchors one of the most sought-after outdoor living communities in the Texas Hill Country. The lake was created in 1964 when the Army Corps of Engineers completed Canyon Dam, and the surrounding area has grown steadily ever since into a layered mix of full-time residents, retirees, remote workers, and vacation homeowners who all share one thing: they came here for the water and the quiet.\n\nUnlike New Braunfels or San Antonio, Canyon Lake does not have a traditional downtown or a dense commercial core. What it has instead is a network of coves, peninsulas, and ridgelines that give nearly every neighborhood its own character. Lakefront properties command elevated prices and strong demand. Inland homes on larger lots offer affordability and Hill Country serenity without the waterfront premium. Vacation rentals are common throughout the area, giving investors an active market alongside primary homebuyers.\n\nThe community draws people who want room to breathe. Neighbors wave when you pass. Deer wander through yards at dusk. Boats go out early and come back sunburned. It is the kind of place where people arrive for a weekend and start looking at listings by Sunday afternoon. For those who make the move permanent, Canyon Lake tends to hold them. The pace is slower here, and that is exactly the point.",
      bestFor: [
        "Buyers seeking waterfront or water-access living in the Texas Hill Country",
        "Retirees and remote workers who want rural peace within driving distance of two major metros",
        "Investors looking for short-term rental or vacation property with strong demand",
        "Families who prioritize outdoor lifestyle, boating, and open space over walkability",
        "Buyers priced out of lakefront markets closer to Austin who still want true waterfront living",
        "Anyone trading city congestion for elbow room, Hill Country views, and a slower pace",
      ],
      housing:
        "Canyon Lake's housing market splits cleanly between waterfront and inland, and the price gap between those two categories is significant. Lakefront estates and water-access homes typically range from $350,000 to well over $1 million, depending on lot size, dock access, water depth, and views. These properties sit on some of the most coveted real estate in Comal County, and they rarely stay on the market long when priced fairly.\n\nInland homes throughout the surrounding Hill Country give buyers a more accessible entry point, generally falling in the $250,000 to $500,000 range. Many sit on half-acre to multi-acre lots with live oak canopy, Hill Country topography, and the kind of space that is genuinely difficult to find this close to San Antonio. Construction styles range from classic limestone and cedar ranch homes to newer builds with metal roofs and modern interiors. Vacation cabins and short-term rental properties are woven throughout the community, and many buyers purchase with a rental strategy in mind from day one.",
      lifestyle:
        "Life at Canyon Lake is organized around the water and the outdoors. The reservoir offers 80 miles of shoreline with multiple public parks managed by the Army Corps of Engineers, including Canyon Lake Park, Cranes Mill Park, and Comal Park, each offering boat ramps, swimming areas, and day-use access. Boating, fishing, kayaking, and paddleboarding are everyday activities here, not weekend novelties.\n\nThe Guadalupe River below Canyon Dam draws tubers and swimmers during warmer months, and the surrounding Hill Country terrain gives hikers and mountain bikers options throughout the year. A small marina district near the dam offers boat rentals, fuel, and basic supplies. For dining and shopping, Canyon Lake residents typically head into New Braunfels or Gruene, though local options like Crane's Mill and a handful of lakeside restaurants provide solid day-to-day convenience. The pace here is genuinely relaxed. People are not rushing. That is a feature, not a limitation.",
      commute:
        "Canyon Lake sits roughly 45 minutes from downtown San Antonio via FM 306 and Highway 281, making it a realistic option for San Antonio commuters willing to trade city proximity for lake living. The drive to Austin runs approximately one hour under normal conditions, depending on which part of the city you are heading to. Remote and hybrid workers have embraced Canyon Lake enthusiastically because even a two or three day per week commute to either city is manageable. The roads through the Hill Country are scenic rather than congested, and the tradeoff of a longer drive for a waterfront or rural property with genuine space tends to feel like a fair deal for most buyers who land here.",
      schools:
        "Canyon Lake area students are served primarily by Comal Independent School District, one of the more well-regarded districts in the region. Comal ISD has consistently earned strong academic ratings from the Texas Education Agency and is known for solid athletics, arts programs, and a community-oriented culture. Depending on where in the Canyon Lake area a home is located, students may attend Rebecca Creek Elementary, Mountain Valley Middle School, or Canyon Lake High School. Buyers with children should verify school assignments by address, as attendance zones can vary within the broader Canyon Lake community. Private schooling options are available in New Braunfels, roughly 20 to 25 minutes away.",
      prosAndCons: {
        pros: [
          "80 miles of shoreline with multiple Army Corps public parks and boat ramps",
          "Genuine Hill Country scenery with views, live oaks, and open space",
          "Strong short-term rental market for investors",
          "Less traffic and congestion than New Braunfels or San Antonio suburbs",
          "Comal ISD schools with strong academic reputation",
          "Accessible from both San Antonio and Austin for hybrid commuters",
          "Wide range of price points from modest inland homes to luxury lakefront estates",
        ],
        cons: [
          "Limited walkable commercial amenities or dining options on the lake itself",
          "Most errands and restaurant options require a drive into New Braunfels",
          "Waterfront properties move quickly and competition can be intense at any price point",
          "Some areas have HOA restrictions or limitations on short-term rentals",
          "Rural roads and limited public transit mean car dependency is absolute",
          "Cell and internet service can be inconsistent in more remote coves and ridgeline areas",
        ],
      },
      faqs: [
        {
          question: "Can I operate a short-term rental at Canyon Lake?",
          answer:
            "Many Canyon Lake properties are used as short-term rentals and the market for vacation stays on the lake is active year-round. That said, rules vary depending on whether a property sits in a jurisdiction with STR regulations, or within an HOA that limits or prohibits rentals. Always verify rental restrictions before purchasing if that is part of your plan.",
        },
        {
          question:
            "What is the difference between waterfront and water-access at Canyon Lake?",
          answer:
            "Waterfront means the property sits directly on the lake with the shoreline as part of the lot. Water-access typically means a nearby community boat ramp or shared dock gives lake access without direct frontage. The price difference between the two can be substantial, and waterfront lots with good dock potential are significantly more valuable.",
        },
        {
          question: "How is the fishing at Canyon Lake?",
          answer:
            "Canyon Lake has a solid reputation for largemouth and smallmouth bass, striped bass, white bass, catfish, and crappie. The cooler, spring-fed Guadalupe River water below the dam also supports one of the few Texas trout fisheries below Canyon Dam, managed seasonally by Texas Parks and Wildlife.",
        },
        {
          question:
            "Are there public beach or swimming areas at Canyon Lake?",
          answer:
            "Yes. The Army Corps of Engineers maintains several parks around the lake with designated swimming areas, picnic facilities, and boat ramps. Comal Park on the north shore is one of the most popular spots for day-use swimming and is open to the public.",
        },
        {
          question: "How far is Canyon Lake from New Braunfels?",
          answer:
            "Canyon Lake is approximately 15 miles west of New Braunfels, about a 20 to 25 minute drive via FM 306. New Braunfels provides the closest concentration of grocery stores, restaurants, medical facilities, and shopping for most Canyon Lake residents.",
        },
      ],
      marketNotes:
        "Canyon Lake's real estate market has remained resilient through broader market shifts, driven by persistent demand from San Antonio buyers, Austin refugees, and investors chasing short-term rental income. Waterfront inventory is chronically tight, and well-priced lakefront properties with dock access or buildable waterfront lots attract multiple offers quickly. Inland homes have seen some softening in pace compared to the 2021 and 2022 peak years, giving buyers slightly more negotiating room. Prices in the $300,000 to $450,000 inland range are moving steadily, while properties above $700,000 tend to sit longer and require precise pricing. The vacation rental demand that spiked post-pandemic has leveled somewhat but remains a meaningful driver of buyer interest throughout the community.",
    },
  },
  {
    slug: "vintage-oaks",
    title: "Vintage Oaks",
    dek: "Canopy drives, stone walls, and the kind of cul de sacs where kids still bike at dusk.",
    vibe: "Family scale luxury",
    href: "/neighborhoods/vintage-oaks",
    imageSrc: "/images/neighborhood-vintage-oaks-canopy.webp",
    imageAlt:
      "Canopy drive in Vintage Oaks with mature live oaks arching over a quiet residential lane.",
    details: {
      shortAnswer:
        "Vintage Oaks is one of the most sought-after master-planned communities in the Texas Hill Country, offering large custom lots, resort-style amenities, and a strong sense of neighborhood that is genuinely rare at this price point. For buyers seeking space, privacy, and community in equal measure — without sacrificing access to San Antonio or Austin — it delivers on all fronts.",
      overview:
        "Vintage Oaks sits in the rolling hills northwest of New Braunfels, straddling the line between quiet Hill Country retreat and well-connected suburban living. Developed by Vintage Oaks at the Vineyard, the community spans several thousand acres and has grown steadily into one of the most recognized addresses in Comal County. What makes it stand apart from other master-planned communities in the region is the combination of serious land — lots range from one to ten acres — with resort-caliber amenities that genuinely get used. The canopy oaks are not incidental; mature live oaks define the character of the neighborhood, shading cul-de-sacs and framing custom home facades in a way that newer developments simply cannot replicate. Homes here are predominantly custom-built, meaning no two look alike, and architectural standards enforced by a strong HOA keep the overall aesthetic cohesive — Hill Country limestone, metal roofs, cedar accents — without feeling cookie-cutter. Gated sections within the community offer an additional layer of privacy for buyers who want it. The result is a neighborhood that feels more like a private resort than a subdivision, and the community's reputation reflects that. Buyers tend to stay, resale demand is consistent, and the Comal ISD school district is a meaningful draw for families with school-age children.",
      bestFor: [
        "Buyers seeking large custom lots (1-5+ acres) with Hill Country character and mature oak tree cover",
        "Families prioritizing Comal ISD schools with strong academic and extracurricular programs",
        "Remote workers or semi-retirees who want resort amenities at home without giving up highway access",
        "Buyers relocating from Austin or San Antonio who want more land and lower density without a long rural commute",
        "Second-home or weekend buyers looking for a permanent-feeling Hill Country retreat",
        "Move-up buyers ready to build or purchase a custom home in the $600K-$1.2M range",
      ],
      housing:
        "Vintage Oaks is almost entirely custom construction, which means the housing stock is diverse in layout and finish level but consistent in quality. Lot sizes start around one acre and extend to ten or more in some sections, giving homeowners genuine privacy and room for pools, guest casitas, workshops, or simply open sky. Architectural styles lean into Hill Country vernacular — limestone and stucco exteriors, standing-seam metal roofs, covered porches built for the Texas evening — though you will find contemporary interpretations as well. Square footage typically ranges from 2,500 to over 5,000 square feet, with four- and five-bedroom floor plans common among family buyers. Price points run from the low $500Ks for smaller lots with production-custom builds up through $1.5M and beyond for fully custom estates on premium acreage. The resale market tends to move steadily; inventory is not always plentiful, and well-priced homes in desirable sections attract serious buyers quickly. Buyers willing to purchase a lot and build can still find opportunities, though available lots have become less common as the community has matured.",
      lifestyle:
        "Life in Vintage Oaks revolves around the outdoors and the amenities the HOA has built to support it. The community clubhouse anchors a resort-style complex that includes multiple pools — including a lazy river — a well-equipped fitness center, sports courts for tennis and pickleball, and a sand volleyball court. Miles of walking and hiking trails wind through the natural Hill Country terrain, connecting neighborhoods to green space and viewpoints that remind you why people build out here in the first place. The community hosts regular events — holiday gatherings, food truck nights, fitness classes — that give the neighborhood a genuine social fabric. Outside the gates, Vintage Oaks is positioned well for Hill Country living. Gruene Historic District is a short drive, with its dance hall, river tubing, and local restaurants drawing both residents and visitors. Canyon Lake is accessible for boating and fishing. New Braunfels proper offers H-E-B, local dining, the Comal and Guadalupe rivers, and the broader amenities of a fast-growing city without the congestion of the metro. The pace of life here is unhurried, but you are never far from what you need.",
      commute:
        "Vintage Oaks sits off FM 306, which feeds directly to I-35 — the primary corridor connecting New Braunfels to both metro areas. San Antonio is approximately 40 minutes south under normal traffic conditions, making the community viable for professionals commuting into the city two or three days a week. Austin runs about 50 to 55 minutes north on I-35, though rush-hour variability on that corridor is a real factor buyers should account for. Many Vintage Oaks residents work remotely or on hybrid schedules, and the neighborhood's infrastructure — reliable internet options are available — supports that lifestyle well. The San Marcos Regional Airport is roughly 20 minutes away for private flyers.",
      schools:
        "Vintage Oaks is served by Comal Independent School District, one of the more highly regarded districts in the Texas Hill Country region. Comal ISD has posted consistent academic ratings and has grown its facilities and programs alongside the rapid residential growth of the area. Elementary students in Vintage Oaks typically attend Johnson Ranch Elementary, with Canyon Middle School and Canyon High School serving older grades. Canyon High has a strong reputation for academics, athletics, and fine arts programs. For families, Comal ISD is a meaningful part of the value proposition of buying in this community — it consistently outperforms neighboring districts on state accountability measures and offers the extracurricular depth that draws competitive families.",
      prosAndCons: {
        pros: [
          "Large lots with genuine privacy and mature Hill Country oak canopy",
          "Resort-style amenities that residents actively use — pools, trails, fitness, courts",
          "Strong HOA that maintains community standards and property values",
          "Comal ISD schools with a solid academic and extracurricular track record",
          "Custom architecture with no two homes alike, meaningful curb appeal throughout",
          "Gated sections available for buyers who prioritize additional security and privacy",
          "Strong resale demand and consistent value appreciation",
        ],
        cons: [
          "Distance from New Braunfels proper means most errands require a 15-20 minute drive",
          "HOA fees are meaningful and buyers should review CC&Rs carefully before purchase",
          "Lot inventory has tightened as the community has matured — fewer build opportunities",
          "I-35 traffic variability affects Austin commuters, particularly during peak hours",
          "Property taxes in Comal County, while competitive for the region, reflect the premium land and home values",
          "The community's size can feel sprawling — getting to know your neighbors may take intentional effort",
        ],
      },
      faqs: [
        {
          question:
            "Are there still lots available to build on in Vintage Oaks?",
          answer:
            "Available lots have become less common as the community has grown, but they do still come to market. Working with a local agent who tracks the community closely is the best way to identify lot opportunities before they are broadly listed. Some buyers also approach existing landowners directly in sections they are targeting.",
        },
        {
          question:
            "What are the HOA fees in Vintage Oaks, and what do they cover?",
          answer:
            "HOA fees vary depending on the section and lot size, but generally fall in the range of $800-$1,200 annually for standard sections, with some gated areas carrying additional assessments. Fees cover access to the full amenity complex — pools, fitness center, trails, sports courts, and community events — as well as common area maintenance and community management. Reviewing the specific HOA documents for any home or lot before purchase is always recommended.",
        },
        {
          question: "Is Vintage Oaks truly gated, or only partially?",
          answer:
            "The community has both gated and non-gated sections. Several neighborhoods within Vintage Oaks feature controlled access entry, while others are open to through traffic. Buyers who prioritize a fully gated experience should confirm the specific section's access setup with their agent before making an offer.",
        },
        {
          question:
            "How does Vintage Oaks compare to Veramendi or Creekside for families?",
          answer:
            "Vintage Oaks is the right fit for buyers who prioritize acreage, privacy, and a Hill Country setting over walkability or proximity to urban amenities. Veramendi and Creekside offer closer access to New Braunfels proper and tend to have smaller lots at lower price points. Vintage Oaks trades some convenience for significantly more land, better views, and a resort-community feel that the closer-in neighborhoods do not replicate.",
        },
        {
          question:
            "What internet and connectivity options are available?",
          answer:
            "Connectivity has improved meaningfully in Vintage Oaks as the community has grown. Fiber and high-speed cable options are available in most sections, making the neighborhood viable for remote workers and those who depend on reliable upload speeds. Buyers should verify service availability for a specific address, as coverage can vary by section within the larger community.",
        },
      ],
      marketNotes:
        "Vintage Oaks has demonstrated consistent demand through multiple market cycles, a reflection of the limited supply of large-lot luxury inventory in the Hill Country corridor. Median prices have appreciated steadily, and the community's position at the upper end of the New Braunfels market means it attracts a buyer pool that is largely insulated from rate sensitivity compared to entry-level segments. Days on market have normalized from the pandemic-era pace, and well-priced homes in desirable sections still move with relative speed. Buyers entering the market here should expect limited negotiating room on standout properties and should be prepared to act decisively. The custom nature of the housing stock also means price-per-square-foot comparisons require careful calibration — finish level, lot size, and views vary considerably between homes at similar list prices.",
    },
  },
  {
    slug: "veramendi",
    title: "Veramendi",
    dek: "A master planned community shaped by the land it sits on. Trails, water, and a fresh take on neighborhood life.",
    vibe: "New and considered",
    href: "/neighborhoods/veramendi",
    imageSrc: "/images/neighborhood-veramendi-aerial.webp",
    imageAlt:
      "Aerial photograph of Veramendi development in New Braunfels with rolling Hill Country terrain and trail network.",
    details: {
      shortAnswer:
        "Veramendi is a well-planned, attractively priced newer community in New Braunfels that offers modern construction, strong amenities, and easy access to both San Antonio and Austin. For families and first-time buyers seeking Hill Country lifestyle without the premium price tag of older established neighborhoods, it is a genuinely compelling option.",
      overview:
        "Veramendi sits on the northwest edge of New Braunfels, carved out of the rolling Hill Country terrain that has made this corridor one of the fastest-growing in Texas. The community takes its name from Juan Martin de Veramendi, a prominent figure in early Texas history and the father-in-law of Jim Bowie — a nod to the deep roots this region carries even as it grows forward.\n\nWhat sets Veramendi apart from many master-planned developments is the intentionality behind the land plan. Rather than clearing everything flat, the developers worked around existing creek corridors, natural draws, and native vegetation to create a community that actually feels like it belongs to the Hill Country. Trails wind through the development and connect to open space, making it easy to walk or bike without ever loading into a car.\n\nThe homes here are newer construction — most built within the last several years — with multiple builders represented across different sections. Buyers can find everything from production homes with good standard finishes to more customized spec builds, depending on which phase and builder they are looking at. The price range generally sits between the low $300Ks and the mid-$600Ks, which makes Veramendi one of the more accessible entry points into the New Braunfels market without sacrificing quality or location.\n\nThe community is still actively developing, which means buyers who get in now are purchasing into a neighborhood that will continue to mature and appreciate as infrastructure and amenities come fully online.",
      bestFor: [
        "Families with school-age children looking for newer construction in Comal ISD",
        "First-time buyers seeking Hill Country lifestyle at a more accessible price point",
        "San Antonio commuters who want suburban space without a grueling drive",
        "Remote workers who need a comfortable home base with outdoor access close by",
        "Move-up buyers coming from older or smaller homes who want modern layouts and finishes",
        "Buyers who value trails, parks, and community amenities built into the neighborhood design",
      ],
      housing:
        "Veramendi offers a range of home styles that lean toward contemporary and transitional design — clean lines, open floor plans, and the kind of kitchen and living spaces that reflect how people actually use homes today. Lot sizes vary across sections, with some interior lots running compact and efficient while others back up to natural areas or creek buffers and offer more breathing room.\n\nEntry-level homes start in the low-to-mid $300Ks, typically offering three bedrooms and two bathrooms in the 1,600-2,000 square foot range. Moving up the price ladder, buyers in the $400K-$500K range can access four-bedroom homes with dedicated offices, larger primary suites, and upgraded finish packages. The upper end of the community, approaching $600K and above, tends to include larger lots, custom elevation options, and more premium interior selections.\n\nMultiple builders are active in Veramendi, which gives buyers the ability to compare construction styles, warranty programs, and design center options before committing. Because the community is still in active build-out phases, some buyers also have the option to purchase from a builder directly with a degree of personalization, rather than buying fully finished inventory.",
      lifestyle:
        "Life in Veramendi is oriented around the outdoors without demanding it. The trail system that threads through the community connects residents to pocket parks and natural open space, making a morning walk or an after-dinner bike ride with kids genuinely easy. The resort-style pool serves as a natural social hub during the long Texas summers, and the playgrounds scattered through the neighborhood mean younger children have places to land close to home.\n\nThe planned mixed-use village center — still coming online as development continues — is designed to bring everyday conveniences like coffee, dining, and retail within walking or biking distance of the homes. That kind of walkable core is rare in suburban Texas developments and, when fully realized, will meaningfully change the daily texture of life here.\n\nDowntown New Braunfels is just a short drive away, which means access to the Saturday farmers market, Gruene Historic District, local restaurants along the Comal River, and the broader social fabric of one of Texas's most livable mid-sized cities. Schlitterbahn, the Comal River, and Canyon Lake are all within easy reach for weekend recreation.",
      commute:
        "Veramendi's location on the northwest side of New Braunfels puts it in a strong position for commuters in both directions. San Antonio is approximately 30 minutes south via IH-35, making it realistic for daily office commutes without the kind of soul-crushing traffic that plagues larger metros. Austin runs about 50 minutes north under normal conditions — longer during peak hours, but manageable for hybrid schedules. New Braunfels itself sits near the midpoint of the Austin-San Antonio corridor, which also means residents have flexibility if their job situation changes or they work with clients in both cities.",
      schools:
        "Veramendi is served by Comal ISD, one of the more consistently well-regarded school districts in the greater San Antonio region. The district has expanded its facilities in step with New Braunfels's growth, adding campuses and programs to keep pace with incoming families. Elementary, middle, and high school assignments for Veramendi homes generally fall within newer facilities that reflect the district's investment in the northwest growth corridor. Comal ISD also offers a range of specialty programs and extracurriculars that give families options beyond the standard track. Buyers should confirm current campus assignments directly with the district, as zoning in active-growth areas can shift as new schools open.",
      prosAndCons: {
        pros: [
          "Newer construction with modern layouts and current building standards",
          "More affordable entry point than comparable Hill Country communities",
          "Thoughtful land plan that preserves natural creek corridors and green space",
          "Strong trail and parks infrastructure built into the community from the start",
          "Comal ISD schools with newer facilities serving the northwest corridor",
          "Convenient location — close to downtown New Braunfels and manageable commutes both directions",
          "Active community with a resort pool and growing social infrastructure",
          "Multiple builders present, giving buyers comparison options and some customization potential",
        ],
        cons: [
          "Community is still in active build-out, so some sections feel incomplete and construction traffic is ongoing",
          "The mixed-use village center is planned but not yet fully realized",
          "Newer neighborhood means less established tree canopy compared to older communities",
          "IH-35 corridor growth means traffic on local connector roads is increasing",
          "HOA fees and builder premiums can add to the true cost of ownership beyond the base price",
          "Austin commute at 50 minutes is manageable but not short, especially on peak traffic days",
        ],
      },
      faqs: [
        {
          question:
            "Is Veramendi still being built, or is it mostly established?",
          answer:
            "Veramendi is still in active development with multiple phases underway. Some sections have mature streetscapes and established residents, while others are in earlier build-out stages. This means buyers can still purchase new construction directly from builders in certain sections, which comes with warranty coverage and some customization options.",
        },
        {
          question:
            "How does Veramendi compare to Vintage Oaks in terms of price and feel?",
          answer:
            "Vintage Oaks sits at a higher price point — generally starting above $500K and running well past $1M for larger custom homes — and has an older, more established feel with a pronounced Hill Country acreage aesthetic. Veramendi is younger, more suburban in density, and more accessible in price. It is a different product for a different buyer, not a lesser one.",
        },
        {
          question: "What builders are building in Veramendi?",
          answer:
            "Several production and semi-custom builders have been active in Veramendi across different phases. The mix can change as phases sell out and new ones open. Touring the community's active model homes is the best way to see who is currently building, what their base packages include, and what the upgrade paths look like.",
        },
        {
          question:
            "Are there resale homes available in Veramendi, or only new construction?",
          answer:
            "Both exist. Earlier phases have resale inventory from homeowners who purchased in prior years, which can offer buyers a move-in-ready home without the wait or builder contract process. Resale pricing reflects current market conditions rather than builder base pricing, so it is worth comparing both options carefully.",
        },
        {
          question: "What are the HOA fees like in Veramendi?",
          answer:
            "HOA fees in Veramendi cover the resort pool, trail maintenance, parks, and common area upkeep. Rates can vary slightly by section and builder community within the larger development. Buyers should request the current HOA disclosure documents during any purchase process to understand the full fee structure and what is included.",
        },
      ],
      marketNotes:
        "Veramendi has benefited from the same underlying demand that has driven New Braunfels's growth into one of the fastest-expanding cities in the country. Homes in the community have generally held value well relative to the broader Central Texas market softening seen in 2023-2024, in part because new construction inventory here is priced closer to builder cost than speculative highs. The $300K-$600K range remains one of the more active price bands in the New Braunfels market, driven by real demand from families and commuters rather than investor speculation. Buyers should expect modest negotiating room on spec inventory but limited flexibility on to-be-built contracts. Resale homes in earlier phases tend to move steadily when priced accurately against new construction alternatives.",
    },
  },
  {
    slug: "riverchase",
    title: "RiverChase",
    dek: "Limestone bluffs, slow river bends, and the kind of evenings where porch light, cicada song, and a slow Hill Country breeze all arrive at once. Quiet acreage minutes from town — upscale, easygoing, and built for the long stay.",
    vibe: "Hill Country river homes",
    href: "/neighborhoods/riverchase",
    imageSrc: "/images/insight-real-estate-trends.webp",
    imageAlt:
      "Aerial editorial photograph of a Hill Country residential neighborhood near New Braunfels with rolling oak canopy and soft late afternoon light.",
    details: {
      shortAnswer:
        "River Chase is one of the most sought-after addresses in the New Braunfels area for buyers who want acreage, custom construction, and genuine Hill Country seclusion without sacrificing convenience. With Guadalupe River access, large wooded lots, and a tight-knit HOA, it consistently delivers on the promise of the Texas Hill Country lifestyle at a premium-but-justified price point.",
      overview:
        "Tucked into the limestone bluffs above the Guadalupe River about fifteen minutes west of downtown New Braunfels, River Chase is the kind of neighborhood that makes buyers exhale when they first drive through the gate. This is not a master-planned subdivision with matching rooflines and postage-stamp yards. It is a low-density, custom-home community where lots run from one to five acres, the tree canopy is left largely intact, and white-tailed deer cross the road at dusk with zero concern for traffic.\n\nThe community spans a stretch of rugged Hill Country terrain in Comal County, with sections that border or access the Guadalupe River — one of the defining geographic and cultural features of this entire region. Homes here are custom-built, meaning you get genuine architectural variety: some are Texas limestone ranch houses, others are contemporary Hill Country designs with metal roofs and walls of glass facing the canyon. What they share is quality craftsmanship, generous square footage, and a sense that each property was designed to belong to its specific piece of land.\n\nRiver Chase has developed steadily over the past two decades into a mature, well-maintained community with a strong homeowners association that keeps the common areas, road infrastructure, and amenity access in good condition. It attracts a mix of established families, semi-retirees, remote professionals, and San Antonio or Austin commuters who want more land and more sky than the urban fringe can offer. The result is a neighborhood with a genuine sense of permanence and pride of ownership — the kind of place where neighbors know each other and take the community seriously.",
      bestFor: [
        "Buyers seeking large custom lots with privacy and mature trees in a gated or semi-gated Hill Country setting",
        "Families wanting Comal ISD schools combined with an acreage lifestyle",
        "Remote workers or semi-retirees drawn to the Guadalupe River, wildlife, and dark-sky evenings",
        "San Antonio or Austin commuters who want true Hill Country living within a practical drive",
        "Buyers upgrading from suburban subdivisions who are ready for custom construction and real land",
        "Nature-oriented households — birding, kayaking, hiking — who want that access woven into daily life",
      ],
      housing:
        "River Chase is defined by custom single-family homes on large lots, with most properties falling between one and five acres. You will not find townhomes, patio homes, or cookie-cutter production builds here. Home sizes typically range from around 2,400 square feet on the smaller end to well over 4,500 square feet for the larger estate-style properties, with three- and four-car garages common given the lot sizes and the practical realities of Hill Country living.\n\nArchitectural styles lean toward Texas traditional — think native limestone exteriors, wide covered porches, metal or composition roofs — alongside a growing number of contemporary Hill Country designs that emphasize clean lines, oversized windows, and indoor-outdoor flow. Prices in River Chase currently run from approximately $500,000 on the entry end for older or smaller homes on standard lots, up to $1.2 million and above for newer custom builds on premier lots with river views or direct Guadalupe River frontage. Lot values alone on the water can be substantial. The community has seen consistent appreciation driven by limited inventory, land scarcity, and sustained demand from the broader San Antonio and Austin metro areas. Sellers here rarely need to discount aggressively — well-presented homes move.",
      lifestyle:
        "Life in River Chase organizes itself around the land and the river. Residents have access to Guadalupe River frontage through the community's HOA-managed amenity area, making tubing, kayaking, fishing, and riverside picnicking part of the routine rather than a weekend trip. The river here is quieter and less commercialized than the stretch running through downtown New Braunfels — which is precisely the appeal.\n\nThe lots themselves create a lifestyle that is hard to replicate in a conventional subdivision. Large setbacks and mature tree cover mean you genuinely cannot see your neighbor's house from your back porch in many cases. Wildlife is a constant presence — whitetail deer, wild turkey, foxes, and a wide variety of birds are regular visitors, and the low light pollution creates genuinely remarkable night skies.\n\nFor dining, shopping, and everyday errands, downtown New Braunfels is about fifteen minutes east. The historic Gruene district — with Gruene Hall, Moody Gardens, and a cluster of good restaurants and boutiques — is even closer. Canyon Lake is a short drive west for boating and lake recreation. River Chase residents tend to use the city's amenities deliberately rather than constantly, which suits the neighborhood's unhurried tempo perfectly.",
      commute:
        "River Chase sits roughly fifteen minutes from downtown New Braunfels via FM 306, which connects cleanly to Interstate 35. From I-35, San Antonio's northern suburbs are approximately thirty to thirty-five minutes south, and downtown San Antonio is reachable in under forty minutes under normal conditions. Austin is roughly forty-five minutes to an hour north depending on traffic and your destination within the city. The community is well positioned for hybrid commuters — close enough to make regular office days manageable, far enough to feel entirely removed from the metro grind when you are home. The drive itself, through Hill Country terrain along FM 306, is genuinely pleasant rather than punishing.",
      schools:
        "River Chase is served by Comal Independent School District, one of the stronger public school systems in the greater San Antonio region. The district has earned a reputation for academic consistency, competitive extracurricular programs, and well-maintained facilities driven by the area's strong tax base and community investment in education. Students in River Chase typically feed into Canyon Lake High School or New Braunfels High School depending on their specific address, and the district's elementary and middle schools have solid ratings. Comal ISD's growth has prompted ongoing facility investment, and the district has generally kept pace with the significant population increases the area has seen over the past decade. Private school options in New Braunfels proper are also accessible within a reasonable drive.",
      prosAndCons: {
        pros: [
          "Large custom lots with genuine privacy and mature Hill Country vegetation",
          "Guadalupe River access through HOA amenity area — swimming, fishing, kayaking",
          "Low density means wildlife, dark skies, and quiet that suburban areas cannot match",
          "Strong, active HOA maintains roads, common areas, and community standards",
          "Comal ISD school district with solid academic reputation",
          "Practical commute distance to both San Antonio and Austin for hybrid workers",
          "Custom home variety means architectural character and craftsmanship rather than production sameness",
          "Mature community with stable, long-term ownership culture and genuine neighborhood identity",
        ],
        cons: [
          "Price point is firmly premium — entry-level options are limited and competition for well-priced homes is real",
          "Rural road character means no sidewalks, limited street lighting, and occasional wildlife hazards on local roads",
          "Errands require a drive — no walkable commercial within the community",
          "HOA fees and deed restrictions are meaningful and should be reviewed carefully before purchase",
          "Septic systems and well water are common at this lot size and require buyer awareness and maintenance",
          "Some sections are not fully gated, which matters to buyers with specific security expectations",
          "Limited resale inventory means waiting for the right property can take time in a slow market",
        ],
      },
      faqs: [
        {
          question:
            "Does River Chase have direct Guadalupe River access for residents?",
          answer:
            "Yes. The community HOA maintains a river access area along the Guadalupe that is available to residents and their guests. The specific amenities and access points can vary by section of the community, so it is worth confirming exactly what is included for a given property's HOA membership before purchase. Some lots also have private river frontage, which commands a significant premium.",
        },
        {
          question: "Is River Chase a fully gated community?",
          answer:
            "Partially. River Chase has gated sections, but the community overall is not uniformly gated at every entrance. If full gated access is a priority for you, the specific section and lot location matters. This is something to verify for any individual property you are considering.",
        },
        {
          question:
            "What should buyers know about utilities — water, sewer, and internet?",
          answer:
            "Many properties in River Chase rely on private wells and septic systems rather than municipal utilities, which is standard for this lot size and location in Comal County. Buyers should budget for well and septic inspections as part of due diligence and understand the ongoing maintenance responsibilities. High-speed internet availability has improved significantly in recent years, with fixed wireless and fiber options now reaching much of the community — but confirming current service availability at a specific address before closing is always worthwhile.",
        },
        {
          question: "How does the HOA work and what does it cost?",
          answer:
            "River Chase has an active homeowners association that manages common areas, road maintenance, the river access amenity, and deed restriction enforcement. Annual HOA fees vary by section and lot and should be confirmed for any specific property. The HOA is generally regarded as well-run and financially stable, which contributes to the community's consistent upkeep and property values. Deed restrictions are meaningful here — review them before purchase if you have specific plans for outbuildings, livestock, short-term rentals, or commercial use.",
        },
        {
          question:
            "Is River Chase a good fit for short-term rental investment?",
          answer:
            "Likely not. River Chase's deed restrictions and HOA rules generally limit or prohibit short-term rentals, and the community's culture is oriented toward permanent or long-term residential use. If short-term rental income is part of your purchase strategy, this is not the right neighborhood — and Comal County's evolving STR regulations add another layer of complexity worth understanding with a local attorney before committing.",
        },
      ],
      marketNotes:
        "River Chase operates in a supply-constrained segment of the New Braunfels market. Inventory has historically been thin — owners tend to stay, and the lot sizes and custom nature of the homes mean that direct comparables are genuinely rare. This dynamic has supported strong price appreciation over the past several years, and while the broader market has moderated from its 2021-2022 peak pace, well-maintained, well-priced River Chase homes continue to attract serious buyers with limited days on market. The $700,000-to-$900,000 range sees the most activity. Riverfront or river-view lots remain the most competitive tier. Buyers should be prepared to move decisively when the right property appears, as hesitation in this community tends to cost more than patience saves.",
    },
  },
];

export function findNeighborhood(slug: string): Neighborhood | null {
  return neighborhoods.find((n) => n.slug === slug) ?? null;
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}

export function getRelatedNeighborhoods(currentSlug: string, count = 2): Neighborhood[] {
  return neighborhoods.filter((n) => n.slug !== currentSlug).slice(0, count);
}
