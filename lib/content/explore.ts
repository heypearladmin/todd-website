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
    title: "Breweries and taprooms",
    dek: "Local hops, river patios, and Tuesday night trivia. A short list, honestly ranked, fully drinkable.",
    href: "/blog/breweries",
    imageSrc: "/images/explore-breweries-faust-taproom.webp",
    imageAlt:
      "New Braunfels craft brewery taproom interior with reclaimed wood, copper kettles, and warm hanging bulbs.",
  },
  {
    category: "hidden-gems",
    title: "Hidden gems",
    dek: "The swimming hole behind the limestone bend. The bakery with a line of regulars and zero signage.",
    href: "/blog/hidden-gems",
    imageSrc: "/images/explore-hidden-gems-secret-cove.webp",
    imageAlt:
      "Secluded swimming cove on the Guadalupe with limestone outcropping and quiet, glassy water.",
  },
  {
    category: "weekend-activities",
    title: "Weekend rhythm",
    dek: "Farmers markets, vintage strolls, river floats, and the early supper that keeps Sunday calm.",
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
    title: "Family days",
    dek: "Schlitterbahn after the crowds, Landa Park hideouts, and the parks where kids hand back their phones.",
    href: "/blog/family",
    imageSrc: "/images/explore-family-activities-river-sunset.webp",
    imageAlt:
      "Family wading in the Comal River at sunset with bare feet on smooth limestone and warm light.",
  },
];
