
import baseOilImg from "../assets/images/product/base-oil.jpg";
import deiselEngineOilImg from "../assets/images/product/deisel-engine-oil.jpg";
import engineOilImg from "../assets/images/product/engine-oil.jpg";
import gearOilImg from "../assets/images/product/gear-oil.jpg";
import graceImg from "../assets/images/product/grace.jpg";
import hydrocarbonImg from "../assets/images/product/hydrocarbon.jpg";
import hydroulicOilImg from "../assets/images/product/hydroulic-oil.jpg";
import industrialOilImg from "../assets/images/product/industrial-oil.jpg";

export type Category = {
  name: string;
  slug: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: "Deisel Engine Oil",
    slug: "deisel engine oil",
    image: deiselEngineOilImg,
  },
  { name: "Engine Oil", slug: "engine oil", image: engineOilImg },
  { name: "Hydroulic Oil", slug: "hydroulic oil", image: hydroulicOilImg },
  { name: "Gear Oil", slug: "gear oil", image: gearOilImg },
  { name: "Industrial Oil", slug: "industrial oil", image: industrialOilImg },
  { name: "Base Oil", slug: "base oil", image: baseOilImg },
  { name: "Grace", slug: "grace", image: graceImg },
  { name: "Hydrocarbon", slug: "hdrocarbon", image: hydrocarbonImg },
];
