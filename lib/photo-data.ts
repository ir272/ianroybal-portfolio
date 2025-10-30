export type PhotoEntry = {
  id: string;
  filename: string;
  width: number;
  height: number;
  caption: string;
};

// Update this list with your own photos. Each entry renders in the gallery and
// statically generates a page at /photography/[id].
export const photoEntries: PhotoEntry[] = [];
