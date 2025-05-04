
import baseOilImg from "../assets/images/product-category/base-oil.png";
import deiselEngineOilImg from "../assets/images/product-category/deisel-engine-oil.png";
import engineOilImg from "../assets/images/product-category/engine-oil.png";
import gearOilImg from "../assets/images/product-category/gear-oil.png";
import graceImg from "../assets/images/product-category/grace.png";
import hydrocarbonImg from "../assets/images/product-category/hydrocarbon.png";
import hydroulicOilImg from "../assets/images/product-category/hydroulic-oil.png";
import industrialOilImg from "../assets/images/product-category/industrial-oil.png";

export type Category = {
  name: string;
  slug: string;
  image: string;
};

export const categories: Category[] = [
  { name: "BaseOil", slug: "base-oil", image: baseOilImg },
  { name: "DeiselEngineOil", slug: "deisel-engine-oil", image: deiselEngineOilImg },
  { name: "EngineOil", slug: "engine-oil", image: engineOilImg },
  { name: "GearOil", slug: "gear-oil", image: gearOilImg },
  { name: "Grace", slug: "grace", image: graceImg },
  { name: "Hydrocarbon", slug: "hdrocarbon", image: hydrocarbonImg },
  { name: "HydroulicOil", slug: "hydroulic-oil", image: hydroulicOilImg },
  { name: "IndustrialOil", slug: "industrial-oil", image: industrialOilImg },
];
