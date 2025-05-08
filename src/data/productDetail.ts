import deisel10w40Img from "../assets/images/product-detail/deisel-engine-oil,10w-40.jpg";
import deisel15w40Img from "../assets/images/product-detail/deisel-engine-oil,15w-40.jpg";
import deisel20w50Img from "../assets/images/product-detail/deisel-engine-oil,20w-50.jpg";
import deiselcd50Img from "../assets/images/product-detail/deisel-engine-oil,cd-50.jpg";
import engine5w30Img from "../assets/images/product-detail/engine-oil,5w-30.jpg";
import engine10w40Img from "../assets/images/product-detail/engine-oil,10w-40.jpg";
import engine20w50Img from "../assets/images/product-detail/engine-oil,20w-50.jpg";
import gear01Img from "../assets/images/product-detail/gear-oil,01.jpg";
import hydroulic01Img from "../assets/images/product-detail/hydroulic-oil,01.jpg";
import industrial01Img from "../assets/images/product-detail/industrial-oil,01.jpg";

export type ProductDetail = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export const productDetail: ProductDetail[] = [
  {
    id: "deisel10w40",
    name: "Deisel 10w-40",
    image: deisel10w40Img,
    category: "deisel engine oil",
  },
  {
    id: "deisel15w40",
    name: "Deisel 15w-40",
    image: deisel15w40Img,
    category: "deisel engine oil",
  },
  {
    id: "deisel20w50",
    name: "Deisel 20w-50",
    image: deisel20w50Img,
    category: "deisel engine oil",
  },
  {
    id: "deiselcd50",
    name: "Deisel cd-50",
    image: deiselcd50Img,
    category: "deisel engine oil",
  },
  {
    id: "engine5w30",
    name: "Engine 5w-30",
    image: engine5w30Img,
    category: "engine oil",
  },
  {
    id: "engine10w40",
    name: "Engine 10w-40",
    image: engine10w40Img,
    category: "engine oil",
  },
  {
    id: "engine20w50",
    name: "Engine 20w-50",
    image: engine20w50Img,
    category: "engine oil",
  },
  { id: "gear01", name: "Gear", image: gear01Img, category: "gear oil" },
  {
    id: "hydroulic01",
    name: "Hydroulic",
    image: hydroulic01Img,
    category: "hydroulic oil",
  },
  {
    id: "industrial01",
    name: "Industrial",
    image: industrial01Img,
    category: "industrial oil",
  },
];

