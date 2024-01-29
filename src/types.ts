export interface CarouselItemTeamProps {
  imgPath: string;
  position: string;
  name: string;
  description: string;
  link: string;
}

export interface CarouselItemWorkProps {
  imgPath: string;
  techStacks: {
    iconPath: string;
    techName: string;
  }[];
  title: string;
  description: string;
  link: string;
}
