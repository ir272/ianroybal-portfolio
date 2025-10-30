import { notFound } from "next/navigation";
import { PhotoPageClient } from "./photo-page-client";

const photoMap = {} as const;

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
