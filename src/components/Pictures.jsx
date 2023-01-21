import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Picture from "./Picture";

const pictures = [
  {
    id: 1,
    img: img1,
    likes: 12,
    size: "row-span-4 col-span-2",
  },
  {
    id: 2,
    img: img2,
    likes: 14,
    size: "col-span-4 row-span-2",
  },
  {
    id: 3,
    img: img3,
    likes: 6,
    size: "col-span-2 row-span-2",
  },
  {
    id: 4,
    img: img4,
    likes: 23,
    size: "col-span-4 row-span-2",
  },
  {
    id: 5,
    img: img5,
    likes: 14,
    size: "row-span-4 col-span-2",
  },
];

export default function Pictures() {
  return (
    <div>
      <h2 className="font-semibold">Pictures</h2>
      <div className="grid grid-cols-6 grid-rows-6 grid-flow-dense gap-2">
        {pictures.map((picture) => {
          return (
            <Picture
              img={picture.img}
              likes={picture.likes}
              size={picture.size}
              key={picture.id}
            />
          );
        })}
      </div>
    </div>
  );
}
