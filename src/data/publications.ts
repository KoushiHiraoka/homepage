export const myNames = ["平岡滉司", "Koushi Hiraoka", "K. Hiraoka"];

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  month: string;
  presentation?: string;
  links?: {
    paper?: string;
    doi?: string;
    slide?: string;
  };
}

export const journals: Publication[] = [
    {
    title: "EdgeVLM as a Privacy Filter: Towards Privacy-Aware Activity Recognition from Wearable Camera Using Image Captions",
    authors: "Koushi Hiraoka, Yugo Nakamura, Yutaka Arakawa",
    venue: "IEEE Access",
    year: "2026",
    month: "January",
    links: {
      paper: "https://ieeexplore.ieee.org/document/11367700?denied=",
      doi: "10.1109/ACCESS.2026.3659343",    
    }
    },
];

export const internationalConferences: Publication[] = [
    {
    title: "Exploring Fingertip Interaction Using Surface Acoustic Wave Sensing with a VPU Ring (Demo)",
    authors: "Koushi Hiraoka, Yugo Nakamura, Yutaka Arakawa",
    venue: "Proceedings of the 27th International Conference on Distributed Computing and Networking (ICDCN)",
    year: "2026",
    month: "January",
    links: {
    }
    },
    {
    title: "SenStick-EyeMeet: Distributed Multimodal Sensing of Nonverbal Interactions to Augment LLM-Assisted Meeting Understanding (Demo)",
    authors: "Toshiki Hayashida, Koushi Hiraoka, Isshin Nakao, Yugo Nakamura, Yutaka Arakawa",
    venue: "Proceedings of the 27th International Conference on Distributed Computing and Networking (ICDCN)",
    year: "2026",
    month: "January",
    links: {
    }
    },
    {
    title: "Exploring Edge Vision-Language Model for Privacy-Aware Activity Recognition",
    authors: "Koushi Hiraoka, Yugo Nakamura, Yutaka Arakawa",
    venue: "International Symposium on Nonlinear Theory and Its Applications (NOLTA)",
    year: "2025",
    month: "November",
    links: {
    }
    },
    {
    title: "Exploring Trade-offs in Privacy-Aware Activity Recognition with Small Wearable Cameras",
    authors: "Koushi Hiraoka, Yugo Nakamura, Yutaka Arakawa",
    venue: "International Conference on Human-Computer Interaction (HCII)",
    year: "2025",
    month: "June",
    links: {
    //   paper: "https://ieeexplore.ieee.org/document/11367700?denied=",
    //   doi: "10.1109/ACCESS.2026.3659343",    
    }
    },
];

export const domesticConferences: Publication[] = [];