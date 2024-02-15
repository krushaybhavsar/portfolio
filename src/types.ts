export type Coord = { x: number; y: number };

export type LandingPageSectionProps = {
  sectionID: string;
};

export type TimelineElementExperience = {
  id: number;
  jobPosition: string;
  companyName: string;
  companyLogo: string;
  location: string;
  date: string;
  description: string;
  skillsUsed: string[];
  links: {
    icon?: string;
    previewImage?: string;
    displayText?: string;
    hyperlink: string;
  }[];
};
