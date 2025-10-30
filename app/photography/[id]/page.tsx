import { notFound } from "next/navigation";
import { PhotoPageClient } from "./photo-page-client";
import { photoEntries } from "@/lib/photo-data";

export type PhotoData = (typeof photoEntries)[number];

const photoMap = photoEntries.reduce<Record<string, PhotoData>>((acc, entry) => {
  acc[entry.id] = entry;
  return acc;
}, {});

interface PhotoPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return photoEntries.map(({ id }) => ({ id }));
}

export const dynamicParams = false;

export default function PhotoPage({ params }: PhotoPageProps) {
  const photoData = photoMap[params.id];

  if (!photoData) {
    notFound();
  }

  const photoIndex = photoEntries.findIndex((entry) => entry.id === params.id) + 1;

  return (
    <PhotoPageClient
      photoData={photoData}
      photoIndex={photoIndex}
    />
  );
}
