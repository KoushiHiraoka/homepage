export const myNames = ["平岡 滉司", "Koushi Hiraoka", "K. Hiraoka"];

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  month: string;
  presentation?: string;
  award?: string;
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
      paper: "https://doi.org/10.1145/3737611.3776956", 
    }
    },
    {
    title: "SenStick-EyeMeet: Distributed Multimodal Sensing of Nonverbal Interactions to Augment LLM-Assisted Meeting Understanding (Demo)",
    authors: "Toshiki Hayashida, Koushi Hiraoka, Isshin Nakao, Yugo Nakamura, Yutaka Arakawa",
    venue: "Proceedings of the 27th International Conference on Distributed Computing and Networking (ICDCN)",
    year: "2026",
    month: "January",
    links: {
      paper: "https://doi.org/10.1145/3737611.3776960",
    }
    },
    {
    title: "Exploring Edge Vision-Language Model for Privacy-Aware Activity Recognition",
    authors: "Koushi Hiraoka, Yugo Nakamura, Yutaka Arakawa",
    venue: "International Symposium on Nonlinear Theory and Its Applications (NOLTA)",
    year: "2025",
    month: "November",
    links: {
      paper: "https://epapers2.org/nolta2025/ESR/paper_details.php?paper_id=6089",
    }
    },
    {
    title: "Exploring Trade-offs in Privacy-Aware Activity Recognition with Small Wearable Cameras",
    authors: "Koushi Hiraoka, Yugo Nakamura, Yutaka Arakawa",
    venue: "International Conference on Human-Computer Interaction (HCII)",
    year: "2025",
    month: "May",
    links: {
      paper: "https://link.springer.com/chapter/10.1007/978-3-031-92977-9_17",
    }
    },
    {
    title: "WiLearn: Design and Implementation of a Microlearning System that Utilizes a Captive Portal of Wi-Fi",
    authors: "Koushi Hiraoka, Shuta Matsuo, Yugo Nakamura, Yutaka Arakawa",
    venue: "International Conference on Mobile Computing and Ubiquitous Networking (ICMU)",
    year: "2023",
    month: "November",
    links: {
      paper: "https://ieeexplore.ieee.org/document/10412210",
      doi: "10.23919/ICMU58504.2023.10412210", 
    }
    },
];

export const domesticConferences: Publication[] = [
    {
    title: "IMUとVPUを併用した競歩におけるロス・オブ・コンタクト判定手法の検討",
    authors: "中山 陽, 平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "モバイルコンピューティングと新社会システム (MBL) 研究会",
    year: "2025",
    month: "November",
    links: {
    }
    },
    {
    title: "VPUリングによるテクスチャ認識を活用した指腹部インタラクションの検討 (Demo)",
    authors: "平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "第33回 マルチメディア通信と分散処理ワークショップ (DPSWS)",
    year: "2025",
    month: "November",
    award: "最優秀デモンストレーション賞",
    links: {
    }
    },
    {
    title: "VPUリングによる表面弾性波を用いた手指接触面テクスチャ認識とロバスト性評価",
    authors: "平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "ユビキタスコンピューティングシステム (UBI) 研究会",
    year: "2025",
    month: "September",
    award: "学生奨励賞",
    links: {
    }
    },
    {
    title: "ウェアラブルVLMを用いたプライバシーアウェアな行動認識に関する研究",
    authors: "平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "UBI Symposium",
    year: "2025",
    month: "February",
    links: {
    }
    },
    {
    title: "ウェアラブルカメラを用いたプライバシアウェアな行動認識のためのエッジVLMの適用可能性の検討",
    authors: "平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "ユビキタスコンピューティングシステム (UBI) 研究会",
    year: "2024",
    month: "November",
    award: "学生奨励賞",
    links: {
    }
    },
    {
    title: "小型ウェアラブルカメラとエッジ検出によるプライバシーアウェアな行動認識システムの提案 (Demo)",
    authors: "平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "第32回 マルチメディア通信と分散処理ワークショップ (DPSWS)",
    year: "2024",
    month: "November",
    links: {
    }
    },
    {
    title: "小型ウェアラブルカメラを用いたプライバシーアウェアな行動認識の実現に向けた基礎調査",
    authors: "平岡 滉司, 中村 優吾, 荒川 豊",
    venue: "ユビキタスコンピューティングシステム (UBI) 研究会",
    year: "2024",
    month: "September",
    links: {
    }
    },
    {
    title: "カーシェアユーザの行動変容を促す音声介入手法の検討",
    authors: "平岡 滉司, 本松大夢, 谷澤健太, 酒井鴻，荒川豊",
    venue: "第109回モバイルコンピューティングと新社会システム(MBL)・第95回高度交通システムとスマートコミュニティ(ITS)合同研究発表会",
    year: "2023",
    month: "November",
    links: {
    }
    },
];