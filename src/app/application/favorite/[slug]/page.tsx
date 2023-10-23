"use client";
import { useComediansStore } from "@/lib/zustand/Stores";
import { convertComedianCompanyToString } from "@/models/Comedian";

export default function Page({ params }: { params: { slug: string } }) {

  const comedians = useComediansStore((state) => state.comedians);
  const comedian = comedians.find((comedian) => comedian.id === params.slug);

  return (
    <div>
      <p>{comedian?.name}</p>
      <p>{convertComedianCompanyToString(comedian!)}</p>
    </div>
  );
}
