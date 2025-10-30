export type PhotoEntry = {
  id: string;
  filename: string;
  width: number;
  height: number;
  caption: string;
};

// Update this list with your own photos. Each entry renders in the gallery and
// statically generates a page at /photography/[id].
export const photoEntries: PhotoEntry[] = [
  {
    id: "ut",
    filename: "ut.png",
    width: 1200,
    height: 1200,
    caption: "University of Texas campus skyline at sunset.",
  },
  {
    id: "texas",
    filename: "texas.png",
    width: 500,
    height: 500,
    caption: "Texas-themed mural with bold colors.",
  },
  {
    id: "lbt",
    filename: "lbt.png",
    width: 225,
    height: 225,
    caption: "Longhorn Band practice field portrait.",
  },
  {
    id: "toffee",
    filename: "toffee.png",
    width: 400,
    height: 400,
    caption: "Toffee the dog posing for the camera.",
  },
];
