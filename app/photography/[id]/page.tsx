import { notFound } from "next/navigation";
import { PhotoPageClient } from "./photo-page-client";

const photoMap = {
  pic1: { filename: "pic1.png", width: 1530, height: 1018, caption: "Downtown Vancouver." },
  pic2: { filename: "pic2.png", width: 1526, height: 1014, caption: "Downtown Vancouver, Tiffany store." },
  pic3: { filename: "pic3.png", width: 2074, height: 1020, caption: "Downtown Vancouver." },
  pic4: { filename: "pic4.png", width: 1416, height: 1016, caption: "Vancouver skytrain." },
  pic5: { filename: "pic5.png", width: 1534, height: 1018, caption: "Toronto Museum." },
  pic6: { filename: "pic6.png", width: 1532, height: 1018, caption: "Yonge-Dundas Square in Toronto." },
  pic7: { filename: "pic7.png", width: 1242, height: 1016, caption: "Burnaby, BC, Canada." },
  pic8: { filename: "pic8.png", width: 1530, height: 1022, caption: "Langley, BC, Canada." },
  pic9: { filename: "pic9.png", width: 1526, height: 1014, caption: "Seawall, Vancouver." },
  pic10: { filename: "pic10.png", width: 706, height: 1018, caption: "Downtown Vancouver." },
  pic11: { filename: "pic11.png", width: 672, height: 1014, caption: "Downtown Vancouver." },
} as const;

type PhotoMap = typeof photoMap;
export type PhotoData = PhotoMap[keyof PhotoMap];

interface PhotoPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return Object.keys(photoMap).map((id) => ({ id }));
}

export const dynamicParams = false;

export default function PhotoPage({ params }: PhotoPageProps) {
  const photoData = photoMap[params.id as keyof PhotoMap];

  if (!photoData) {
    notFound();
  }

  const photoIndex = Object.keys(photoMap).indexOf(params.id) + 1;

  return (
    <PhotoPageClient
      photoData={photoData}
      photoIndex={photoIndex}
    />
  );
}
