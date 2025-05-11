import Header from "@/components/Header/Header";
import PhotoGrid, { ImageInfo } from "@/components/PhotoGrid/PhotoGrid";
import Photo1 from "@/assets/images/photos/photo-1.webp";
import Photo2 from "@/assets/images/photos/photo-2.webp";
import Photo3 from "@/assets/images/photos/photo-3.webp";
import Photo4 from "@/assets/images/photos/photo-4.webp";
import Photo5 from "@/assets/images/photos/photo-5.webp";
import Photo6 from "@/assets/images/photos/photo-6.webp";

const photoGridImages: ImageInfo[] = [
  {
    title: "Eyes of the Sun",
    width: 400,
    height: 400,
    src: Photo1
  },
  {
    title: "Aphrodite's Tears",
    width: 400,
    height: 400,
    src: Photo2
  },
  {
    title: "The Lady of the Forest",
    width: 400,
    height: 400,
    src: Photo3
  },
  {
    title: "Lonely Beauty",
    width: 400,
    height: 400,
    src: Photo4
  },
  {
    title: "A Moment in Time",
    width: 400,
    height: 400,
    src: Photo5
  },
  {
    title: "The Ballerina's Last Act",
    width: 400,
    height: 400,
    src: Photo6
  }
];

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Header />
      <PhotoGrid
        images={photoGridImages}
        colSize={3}
      />
    </div>
  );
}

