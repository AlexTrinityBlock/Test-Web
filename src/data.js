export const profile = {
  name: 'Alex Trinity',
  role: '資安與雲端工程師',
  currentOrg: '國家資通安全研究院',
  summary:
    '專注於雲端平台、資安維運與自動化部署，擁有跨 AWS、GCP 的架構設計和 CI/CD 實務經驗。',
  location: '臺灣',
};

export const highlights = [
  '設計雲端與混合雲架構，強化資安與可用性',
  '打造自動化部署流程，善用 Jenkins 與 Ansible Semaphore',
  '擅長容器編排與 Proxy 調校，支援高可用服務',
];

export const skills = [
  {
    category: '程式語言',
    items: ['Python', 'JavaScript', 'Bash'],
  },
  {
    category: '前端技術',
    items: ['React', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    category: '後端框架',
    items: ['Django', 'Flask', 'Express.js'],
  },
  {
    category: '資料庫',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: '負載平衡 / Proxy',
    items: ['Nginx', 'HAProxy'],
  },
  {
    category: '雲端',
    items: ['AWS', 'GCP'],
  },
  {
    category: '容器化',
    items: ['Docker', 'Docker Compose', 'Docker Swarm', 'Kubernetes'],
  },
  {
    category: 'CI / CD',
    items: ['Jenkins', 'Ansible Semaphore'],
  },
];

export const learning = [
  {
    category: '雲端',
    items: ['Azure'],
  },
  {
    category: '容器化',
    items: ['Kubernetes (進階實作)'],
  },
];

export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/9eb1b65f-0853-40fd-82be-16d6ceb5bb38',
    category: 'AWS',
    year: '2024',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/9f6929d4-c0fa-4e68-9c16-94a002209f49',
    category: 'AWS',
    year: '2023',
  },
  {
    name: 'Google Associate Cloud Engineer',
    issuer: 'Google Cloud',
    url: 'https://google.accredible.com/f8971850-e43b-49c2-8183-2cb883bb4299',
    category: 'GCP',
    year: '2023',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    url: 'https://www.credly.com/badges/fcbae132-9ad2-4995-ae14-6feeaa914d28/public_url',
    category: 'DevOps / Container',
    year: '2023',
  },
];

export const experiences = [
  {
    title: '資安研究工程師',
    organization: '國家資通安全研究院',
    period: '2023 - 至今',
    description:
      '協助政府與產業建立資安防護策略，導入容器化與雲端治理流程，規劃跨區域高可用系統架構。',
  },
];

export const education = [
  {
    title: '資訊工程碩士',
    organization: '國立嘉義大學',
    period: '2021 - 2023',
    description:
      '研究主題聚焦於分散式系統與數位貨幣安全性，完成 IEEE 期刊論文並於國際會議發表。',
  },
];

export const projects = [
  {
    title: 'Demo 數位貨幣系統',
    description:
      '以 Docker Swarm 部署 CBDC Demo，整合 API Gateway、容器化服務與監控，示範央行數位貨幣的交易流程。',
    url: 'https://alextrinityblock.github.io/blog/public/',
  },
];

export const research = {
  title: 'IEEE 授權論文：基於區塊鏈的數位貨幣系統安全性',
  description:
    '探討央行數位貨幣在分散式帳本環境的安全挑戰，提出架構風險模型與強化手法。',
  url: 'https://ieeexplore.ieee.org/abstract/document/10210155',
};

export const blogs = [
  {
    title: 'Alex Trinity 技術部落格',
    platform: 'GitHub Pages',
    url: 'https://alextrinityblock.github.io/blog/public/',
    description: '統整雲端、資安、容器與自動化筆記，持續更新最新的實務心得。',
  },
  {
    title: 'AWS Access Analyzer 檢查資源安全與未使用帳號',
    platform: 'Medium',
    url: 'https://medium.com/@q123717111/aws-access-analyzer-%E6%AA%A2%E6%9F%A5%E8%B3%87%E6%BA%90%E5%AE%89%E5%85%A8%E8%88%87%E6%9C%AA%E4%BD%BF%E7%94%A8%E5%B8%B3%E8%99%9F-eedb6563c166',
    description: '介紹如何運用 AWS Access Analyzer 檢視權限配置並落實帳號治理。',
  },
  {
    title: 'Flutter 多頁面電子書 App 實作',
    platform: 'Medium',
    url: 'https://medium.com/@q123717111/3-1-flutter-%E5%A4%9A%E9%A0%81%E9%9D%A2%E9%9B%BB%E5%AD%90%E6%9B%B8-app-4f03130df364',
    description: '分享使用 Flutter 建立多頁面電子書應用的流程與元件設計。',
  },
  {
    title: '在 GCP Cloud Run 上部署 LLM 工作負載',
    platform: 'Medium',
    url: 'https://medium.com/@q123717111/%E5%9C%A8-gcp-cloudrun-%E4%B8%8A%E4%BD%88%E7%BD%B2llm%E5%B7%A5%E4%BD%9C%E8%B2%A0%E8%BC%89-da26acb01d7b',
    description: '示範將大型語言模型部署到 Cloud Run，並考量成本與資源調度。',
  },
  {
    title: 'Firebase Authentication 實戰筆記',
    platform: 'Medium',
    url: 'https://medium.com/@q123717111/firebase-%E9%97%9C%E6%96%BC-firebase-authentication-de814c391aac',
    description: '整理 Firebase Auth 在身份驗證上的常見設計與實務建議。',
  },
];

export const callToAction = [
  {
    label: '技術部落格',
    href: 'https://alextrinityblock.github.io/blog/public/',
    variant: 'primary',
  },
  {
    label: 'IEEE 論文',
    href: 'https://ieeexplore.ieee.org/abstract/document/10210155',
    variant: 'ghost',
  },
];