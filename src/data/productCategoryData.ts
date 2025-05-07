
import baseOilImg from "/images/product/base-oil.jpg";
import deiselEngineOilImg from "/images/product/deisel-engine-oil.jpg";
import engineOilImg from "/images/product/engine-oil.jpg";
import gearOilImg from "/images/product/gear-oil.jpg";
import graceImg from "/images/product/grace.jpg";
import hydrocarbonImg from "/images/product/hydrocarbon.jpg";
import hydroulicOilImg from "/images/product/hydroulic-oil.jpg";
import industrialOilImg from "/images/product/industrial-oil.jpg";

export type Category = {
  name: string;
  slug: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: "DeiselEngineOil",
    slug: "deisel-engine-oil",
    image: deiselEngineOilImg,
  },
  { name: "EngineOil", slug: "engine-oil", image: engineOilImg },
  { name: "HydroulicOil", slug: "hydroulic-oil", image: hydroulicOilImg },
  { name: "GearOil", slug: "gear-oil", image: gearOilImg },
  { name: "IndustrialOil", slug: "industrial-oil", image: industrialOilImg },
  { name: "BaseOil", slug: "base-oil", image: baseOilImg },
  { name: "Grace", slug: "grace", image: graceImg },
  { name: "Hydrocarbon", slug: "hdrocarbon", image: hydrocarbonImg },
];
