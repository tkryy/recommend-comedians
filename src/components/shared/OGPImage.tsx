// components/OGPImage.tsx

import { useEffect, useState } from "react";
import Image from "next/image";

interface OGPImageProps {
  url: string;
}

const OGPImage: React.FC<OGPImageProps> = ({ url }) => {
  const [ogpImage, setOGPImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchOGPImage = async () => {
      try {
        const response = await fetch(
          `https://jsonlink.io/api/extract?url=${url}`
        );
        const data = await response.json();
        console.log(data.images);
        if (data.images && data.images.length > 0) {
          setOGPImage(data.images[0] as string);
        }
      } catch (error) {
        console.error("Error fetching OGP data:", error);
      }
    };

    fetchOGPImage();
  }, [url]);

  return (
    <div className="relative w-full h-0 aspect-w-16 aspect-h-9">
      {ogpImage && (
        <Image
          src={ogpImage}
          alt="OGP Image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default OGPImage;
