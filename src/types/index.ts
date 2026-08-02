export type Aircraft = {
  reg: string;
  name: string;
  category: string;
  price: number;
  base: string;
  code: string;
  notes: string[];
  images: [string, string];
};

export type Feature = {
  num: string;
  title: string;
  desc: string;
  aside: string;
};

export type Prerequisite = {
  title: string;
  items: string[];
};

export type HeroStat = {
  val: string;
  label: string;
  sub: string;
};
