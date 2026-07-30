export type ExploreCategory =
  | "restaurants"
  | "river-life"
  | "live-music"
  | "breweries"
  | "hidden-gems"
  | "weekend-activities"
  | "neighborhood-guides"
  | "family-activities";

export type ExploreTile = {
  category: ExploreCategory;
  title: string;
  dek: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const exploreTiles: ExploreTile[] = [
  {
    category: "restaurants",
    title: "New Braunfels Dining Guide: Todd Spencer's Local Picks",
    dek: "The restaurants locals actually go back to — from Gruene Hall's back porch to the Comal riverfront, craft beer joints, barbecue worth the line, and the hidden breakfast spots that don't show up first on Yelp.",
    href: "/blog/restaurants",
    imageSrc: "/images/explore-restaurants-gruene-supper.webp",
    imageAlt:
      "Warmly lit Gruene area restaurant patio at golden hour with limestone walls and string lights.",
  },
  {
    category: "river-life",
    title: "River Life in New Braunfels: The Local Guide to the Comal and Guadalupe",
    dek: "Two spring-fed rivers, year-round water, and a culture built around floating. Everything locals know about tubing the Comal, kayaking the Guadalupe, where to put in, when to go, and the unwritten rules that make it all work.",
    href: "/blog/river-life",
    imageSrc: "/images/explore-river-life-comal-float.webp",
    imageAlt:
      "Crystal clear Comal River with tubers floating gently between cypress trees in soft morning light.",
  },
  {
    category: "live-music",
    title: "Live Music in New Braunfels: Gruene Hall, Dance Halls, and Where Locals Actually Go",
    dek: "Gruene Hall is the oldest dance hall in Texas — and the beginning, not the end, of the live music story here. The smaller rooms, the outdoor stages, the Friday night songwriter sets that nobody posts about. A local's guide to the music scene.",
    href: "/blog/live-music",
    imageSrc: "/images/explore-live-music-gruene-hall.webp",
    imageAlt:
      "Interior of Gruene Hall at dusk with warm stage light spilling onto a worn wooden dance floor.",
  },
  {
    category: "breweries",
    title: "New Braunfels Breweries and Taprooms: The Local Drinking Guide",
    dek: "New Braunfels punches above its weight for a city this size — craft breweries, a historic hotel bar, river patios, and a German biergarten tradition that never really left. Where locals actually drink.",
    href: "/blog/breweries",
    imageSrc: "/images/explore-breweries-faust-taproom.webp",
    imageAlt:
      "New Braunfels craft brewery taproom interior with reclaimed wood, copper kettles, and warm hanging bulbs.",
  },
  {
    category: "hidden-gems",
    title: "New Braunfels Hidden Gems: What Locals Know That Visitors Miss",
    dek: "The swimming hole that doesn't show up on maps. The bakery with a line of regulars and zero signage. The park at 7 a.m. The spots locals protect by not telling everyone — until now.",
    href: "/blog/hidden-gems",
    imageSrc: "/images/explore-hidden-gems-secret-cove.webp",
    imageAlt:
      "Secluded swimming cove on the Guadalupe with limestone outcropping and quiet, glassy water.",
  },
  {
    category: "weekend-activities",
    title: "New Braunfels Weekend Guide: What Locals Actually Do Saturday and Sunday",
    dek: "Farmers markets, antique strolls, river floats, live music, and the Sunday supper that ends it right. A local's blueprint for the perfect New Braunfels weekend — no tourist itinerary required.",
    href: "/blog/weekends",
    imageSrc: "/images/explore-weekend-activities-farmers-market.webp",
    imageAlt:
      "Saturday farmers market in New Braunfels with woven baskets of peaches and tomatoes in golden morning light.",
  },
  {
    category: "neighborhood-guides",
    title: "Neighborhood guides",
    dek: "Canopy roads, school paths, walk to water pockets, and the slow streets that locals love.",
    href: "/neighborhoods",
    imageSrc: "/images/explore-neighborhood-guides-canopy-drive.webp",
    imageAlt:
      "Tree canopied residential drive in New Braunfels with mature live oaks arching over the lane.",
  },
  {
    category: "family-activities",
    title: "New Braunfels with Kids: The Family Activity Guide Locals Use",
    dek: "Schlitterbahn, Landa Park, the Comal River, natural playgrounds, and the spots where kids actually unplug. A real guide for families — not just a list of things that exist, but what's worth your Saturday.",
    href: "/blog/family",
    imageSrc: "/images/explore-family-activities-river-sunset.webp",
    imageAlt:
      "Family wading in the Comal River at sunset with bare feet on smooth limestone and warm light.",
  },
];
