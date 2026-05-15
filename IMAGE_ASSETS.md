# Todd Spencer · Image Asset Plan

Every image referenced anywhere in the codebase, with the exact filename, target dimensions, image type, the section it powers, and a tuned AI generation prompt.

All images live directly under `/public/images/` (flat, no nested folders, SEO-friendly slugs).

The shared style language to repeat in every prompt: **warm editorial Hill Country atmosphere, soft golden hour or blue hour light, cinematic composition, premium travel magazine quality, realistic photography, no obvious stock-photo smiles, no AI artifacts, subtle film grain, breathable negative space**.

When generating, prefer Flux or Midjourney v6+ for the editorial photography pieces. The OG share image and posters tolerate stylistic editorial license; portraits should lean realistic.

---

## 1. Hero (2 images)

### `/images/hero-new-braunfels-river.webp`
- **Section:** Hero, desktop
- **Type:** Cinematic landscape
- **Aspect:** 16:9
- **Dimensions:** 2560 × 1440
- **Prompt:**
  > Cinematic landscape photograph of the Comal River in New Braunfels Texas at golden hour, slow tannin clear water flowing between cypress trees, limestone river bed visible underwater, warm late afternoon sun filtering through Spanish moss, soft haze on the horizon, no people, editorial travel magazine quality, shot on Hasselblad medium format, slight cinematic grain, peaceful breathable composition with sky negative space in upper third, anamorphic feel, color palette warm amber and soft river teal

### `/images/hero-new-braunfels-river-mobile.webp`
- **Section:** Hero, mobile
- **Type:** Cinematic landscape (portrait crop)
- **Aspect:** 4:5
- **Dimensions:** 1600 × 2000
- **Prompt:**
  > Vertical cinematic photograph of the Comal River in New Braunfels Texas at golden hour, looking downstream between cypress trees, warm haze and dappled sun, river dominant in lower two thirds and sky in upper third, no people, soft editorial palette, premium travel magazine quality, slight grain, peaceful and quiet mood

---

## 2. Todd Portrait

### `/images/todd-spencer-editorial-portrait.jpg`
- **Section:** Trust / Authority, Header avatar reference, About page
- **Type:** Editorial portrait
- **Aspect:** 4:5
- **Dimensions:** 1920 × 2400
- **Prompt:**
  > Editorial environmental portrait of a friendly approachable Texas Realtor in his early forties standing along the Comal riverwalk in New Braunfels at golden hour, relaxed casual wardrobe in earth tones, soft natural light, slight catch light in the eyes, cypress trees and limestone wall blurred in the background, considered magazine feature framing, no posed real-estate cheese, calm confident expression, slight three quarter angle, premium portrait photography, shot on 85mm
- **Note:** Replace with a real photo of Todd when available. The file extension stays `.jpg`.

---

## 3. Explore New Braunfels (8 images)

Section feel: a premium city magazine spread. Each tile is its own micro photo essay.

### `/images/explore-restaurants-gruene-supper.webp`
- **Section:** Explore · Restaurants
- **Type:** Lifestyle photography
- **Aspect:** 5:4
- **Dimensions:** 1600 × 1280
- **Prompt:**
  > Warm editorial photograph of a Gruene Texas restaurant patio at golden hour, limestone walls and worn wooden beams, string lights overhead just beginning to glow, set tables with linen napkins and water glasses catching the light, no people directly visible, premium hospitality magazine quality, soft amber palette

### `/images/explore-river-life-comal-float.webp`
- **Section:** Explore · River life
- **Type:** Cinematic landscape / lifestyle
- **Aspect:** 3:4
- **Dimensions:** 1280 × 1707
- **Prompt:**
  > Vertical editorial photograph of the Comal River in New Braunfels with two empty river tubes drifting on glassy clear water, gentle ripples reflecting the cypress canopy above, soft morning sun, no faces, calm peaceful summer river day, premium travel magazine quality

### `/images/explore-live-music-gruene-hall.webp`
- **Section:** Explore · Live music
- **Type:** Editorial photography
- **Aspect:** 4:5
- **Dimensions:** 1280 × 1600
- **Prompt:**
  > Editorial interior photograph of a historic Texas dance hall at dusk in the style of Gruene Hall, worn wooden plank dance floor catching warm stage light, vintage string instruments resting on simple folding chairs, no people, dust motes in the warm air, atmospheric and intimate, premium Southern lifestyle magazine quality

### `/images/explore-breweries-faust-taproom.webp`
- **Section:** Explore · Breweries
- **Type:** Lifestyle photography
- **Aspect:** 16:10
- **Dimensions:** 1920 × 1200
- **Prompt:**
  > Editorial interior of a New Braunfels craft brewery taproom at soft late afternoon hour, reclaimed wood communal tables, copper fermenters in soft focus behind the bar, hanging Edison bulbs casting warm pools of light, a few empty pint glasses with last sips of amber lager, no patrons visible, premium hospitality magazine palette, calm, slightly atmospheric

### `/images/explore-hidden-gems-secret-cove.webp`
- **Section:** Explore · Hidden gems (cinematic full-bleed)
- **Type:** Cinematic landscape
- **Aspect:** 21:9
- **Dimensions:** 2560 × 1097
- **Prompt:**
  > Ultra wide cinematic landscape photograph of a secluded swimming cove on the Guadalupe River in the Texas Hill Country, glassy turquoise water meeting a limestone outcropping, mature cypress trees on the far bank, soft morning haze, no people, atmospheric and pristine, premium National Geographic style, anamorphic feel

### `/images/explore-weekend-activities-farmers-market.webp`
- **Section:** Explore · Weekend rhythm
- **Type:** Lifestyle photography
- **Aspect:** 1:1
- **Dimensions:** 1600 × 1600
- **Prompt:**
  > Square editorial photograph of a New Braunfels Saturday farmers market table at golden morning hour, woven baskets overflowing with summer peaches and small heirloom tomatoes, soft natural sunlight raking across the table, a vintage scale and a bunch of fresh lavender at the edge, no faces visible, premium food magazine quality

### `/images/explore-neighborhood-guides-canopy-drive.webp`
- **Section:** Explore · Neighborhood guides
- **Type:** Cinematic landscape
- **Aspect:** 1:1
- **Dimensions:** 1600 × 1600
- **Prompt:**
  > Square editorial photograph of a tree canopied residential road in New Braunfels Texas, mature live oaks arching completely over the lane, dappled afternoon sunlight on the pavement, stone garden walls visible in foreground, no cars or people, slow peaceful neighborhood mood, premium travel magazine quality

### `/images/explore-family-activities-river-sunset.webp`
- **Section:** Explore · Family days
- **Type:** Lifestyle photography
- **Aspect:** 1:1
- **Dimensions:** 1600 × 1600
- **Prompt:**
  > Square editorial photograph at the edge of the Comal River at golden hour, a pair of bare feet wading on smooth limestone in shallow clear water, a folded picnic blanket on the bank, a small straw hat resting on the blanket, no faces, calm warm family day mood, premium magazine quality

---

## 4. Video Authority (3 poster stills)

Section feel: a documentary streaming platform. These are static posters, not videos.

### `/images/video-market-update-poster.webp`
- **Section:** Video Authority · Market update (primary feature, large)
- **Type:** Cinematic landscape (film poster still)
- **Aspect:** 16:10
- **Dimensions:** 2200 × 1375
- **Prompt:**
  > Editorial film poster style still of New Braunfels Texas at soft late afternoon hour, gentle aerial perspective looking down the river corridor with limestone bluffs and residential rooftops nestled among live oaks, warm horizon haze, calm authoritative composition, premium documentary feel, no text overlay, room at top and bottom thirds for title rails

### `/images/video-community-spotlight-poster.webp`
- **Section:** Video Authority · Community spotlight
- **Type:** Cinematic landscape (film poster still)
- **Aspect:** 16:9
- **Dimensions:** 1920 × 1080
- **Prompt:**
  > Editorial film poster still of the Landa Park footbridge in New Braunfels at soft morning hour, mature trees framing the path, gentle sunlight filtering through, calm welcoming mood, no people, premium documentary photography, room at the bottom for an overlay

### `/images/video-lifestyle-reel-poster.webp`
- **Section:** Video Authority · Lifestyle reel
- **Type:** Cinematic landscape (film poster still)
- **Aspect:** 16:9
- **Dimensions:** 1920 × 1080
- **Prompt:**
  > Editorial film poster still of a slow float on the Comal River at golden hour, low waterline perspective with cypress trees on either bank, soft glassy ripples in the foreground, warm amber light, no people directly visible, premium travel reel quality, cinematic stillness

---

## 5. Featured Neighborhoods (5 images)

### `/images/neighborhood-gruene-historic-limestone.webp`
- **Section:** Featured Neighborhoods · Gruene
- **Type:** Editorial photography
- **Aspect:** 5:4
- **Dimensions:** 1800 × 1440
- **Prompt:**
  > Editorial photograph of historic Gruene main street at golden hour, weathered limestone facades, painted wood signage, warm bulb lighting in old hardware store windows, no crowds, a single bicycle leaning against a post, premium small town America magazine feel

### `/images/neighborhood-downtown-new-braunfels-plaza.webp`
- **Section:** Featured Neighborhoods · Downtown New Braunfels
- **Type:** Editorial photography
- **Aspect:** 3:4
- **Dimensions:** 1440 × 1920
- **Prompt:**
  > Vertical editorial photograph of downtown New Braunfels plaza at soft hour, historic Sophienburg style architecture and the courthouse spire in soft focus, plaza foreground with mature trees and a wrought iron bench, no crowds, calm walkable downtown mood, premium travel magazine quality

### `/images/neighborhood-canyon-lake-shoreline.webp`
- **Section:** Featured Neighborhoods · Canyon Lake (cinematic full-bleed)
- **Type:** Drone shot / cinematic landscape
- **Aspect:** 21:9
- **Dimensions:** 2400 × 1029
- **Prompt:**
  > Ultra wide aerial drone photograph of Canyon Lake Texas at dawn, calm pink reservoir water glassy and reflective, folded limestone Hill Country ridges rolling into distant haze, scattered residential rooftops nestled into oak groves, soft pastel sky, premium aerial photography, anamorphic cinematic feel

### `/images/neighborhood-vintage-oaks-canopy.webp`
- **Section:** Featured Neighborhoods · Vintage Oaks
- **Type:** Editorial photography
- **Aspect:** 4:3
- **Dimensions:** 1920 × 1440
- **Prompt:**
  > Editorial photograph of a canopy drive through the Vintage Oaks community in New Braunfels Texas, mature live oaks fully arching over a wide residential lane, stone entry pillars at the edge, soft dappled afternoon sunlight on the road, no cars or people, calm family scale luxury neighborhood mood

### `/images/neighborhood-veramendi-aerial.webp`
- **Section:** Featured Neighborhoods · Veramendi
- **Type:** Drone shot
- **Aspect:** 4:3
- **Dimensions:** 1920 × 1440
- **Prompt:**
  > Aerial drone photograph of a master planned residential community in the New Braunfels area at soft afternoon hour, gentle rolling Hill Country terrain, fresh asphalt streets curving along contour lines, scattered new construction with terracotta and cedar palette, trail network winding between green belts, warm balanced editorial palette, premium real estate aerial photography

---

## 6. Market Insights (4 cards)

### `/images/insight-moving-to-new-braunfels.webp`
- **Section:** Market Insights · Moving guide
- **Type:** Cinematic landscape
- **Aspect:** 16:10
- **Dimensions:** 1920 × 1200
- **Prompt:**
  > Wide editorial photograph of the New Braunfels area at golden hour, the river bend visible curving through limestone bluffs in the foreground and a low Texas Hill Country horizon, warm welcoming light, calm relocation mood, no people, premium magazine quality

### `/images/insight-cost-of-living-guide.webp`
- **Section:** Market Insights · Cost of living
- **Type:** Editorial photography (flat lay)
- **Aspect:** 16:10
- **Dimensions:** 1920 × 1200
- **Prompt:**
  > Editorial overhead flat lay on warm cream paper, a single brass house key on a leather tag, a small white ceramic coffee cup with steam, a refined leather bound notebook with pen, a sprig of dried wildflowers, soft natural light from one corner, no clutter, premium lifestyle magazine quality

### `/images/insight-lifestyle-river-rituals.webp`
- **Section:** Market Insights · Lifestyle
- **Type:** Cinematic landscape
- **Aspect:** 16:10
- **Dimensions:** 1920 × 1200
- **Prompt:**
  > Editorial landscape photograph of soft morning light over the Comal River, light fog drifting between cypress trees, a single small wooden dock visible in the middle ground, no people, calm contemplative ritual mood, premium nature magazine quality

### `/images/insight-real-estate-trends.webp`
- **Section:** Market Insights · Real estate trends
- **Type:** Drone shot / cinematic landscape
- **Aspect:** 16:10
- **Dimensions:** 1920 × 1200
- **Prompt:**
  > Aerial editorial photograph of a New Braunfels residential corridor at soft afternoon hour, mature live oaks shading streets, mix of historic limestone homes and newer construction, gentle Hill Country contours, warm balanced palette, premium real estate editorial photography

---

## 7. Final CTA (desktop + mobile pair)

### `/images/cta-hill-country-twilight.webp`
- **Section:** Final CTA, desktop
- **Type:** Cinematic landscape
- **Aspect:** 21:9
- **Dimensions:** 2560 × 1100
- **Prompt:**
  > Ultra wide cinematic landscape photograph of the Texas Hill Country outside New Braunfels at twilight, layered silhouettes of folded hills receding to a soft horizon, last warm glow on the highest ridge, deep blue sky transitioning to amber at the horizon, no people, premium twilight magazine photography, calm aspirational mood, anamorphic cinematic feel

### `/images/cta-hill-country-twilight-mobile.webp`
- **Section:** Final CTA, mobile
- **Type:** Cinematic landscape (portrait crop)
- **Aspect:** 9:16
- **Dimensions:** 1080 × 1920
- **Prompt:**
  > Vertical cinematic photograph of the Texas Hill Country at twilight outside New Braunfels, sky dominant in upper two thirds with deep blue fading to warm amber horizon, layered hill silhouettes in lower third, premium twilight magazine quality

---

## 8. Open Graph share

### `/images/og-todd-spencer-new-braunfels.jpg`
- **Section:** Social share preview (Open Graph / Twitter)
- **Type:** Editorial landscape (type safe)
- **Aspect:** 1200 × 630 exact (OG standard)
- **Dimensions:** 1200 × 630
- **Prompt:**
  > Editorial photograph of the Comal River at golden hour in New Braunfels, cypress trees on the right third, river light catching across the surface, calm welcoming travel magazine mood, plenty of unobstructed negative space in the left half for type overlays added later by social platforms, premium quality
- **Note:** Keep the file as `.jpg` for maximum platform compatibility.

---

## 9. Texture

### `/images/texture-paper-warm.webp`
- **Section:** Background texture under Trust and other warm sections
- **Type:** Background texture
- **Aspect:** Any landscape
- **Dimensions:** 1920 × 1080 or larger
- **Prompt:**
  > Scan style photograph of warm cream artisanal paper with subtle fiber texture and a gentle vignette, no visible patterns or marks, soft natural light, premium editorial print stock feel, suitable as a low opacity background texture

---

## Production summary

**Total images:** 26

| Type | Count |
|------|-------|
| Cinematic landscape | 8 |
| Editorial photography | 7 |
| Lifestyle photography | 5 |
| Drone shot | 3 |
| Portrait | 1 |
| Background texture | 1 |
| Social mockup / poster | 1 |

**File format rules:**
- Photographs and posters → `.webp` at quality 80–85.
- Todd's portrait and the OG share image → `.jpg` at quality 85.
- Texture → `.webp` at quality 85.

**File size targets:**
- Hero / CTA / full-bleed cinematic → under 700 KB.
- Section cards → under 400 KB.
- Texture → under 200 KB (renders at low opacity).

**Naming rules:**
- Lowercase, hyphens, no spaces, no underscores.
- Pattern: `[section]-[subject]-[descriptor].[ext]`.
- Live directly under `/public/images/` (flat). No nested folders.

**When the real photos arrive:**
Just drop each file at the path listed above. The site picks them up on the next reload. No code change needed.
