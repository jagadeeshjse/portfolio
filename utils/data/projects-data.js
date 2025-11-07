export const projectsData = [
    {
        id: 1,
        name: 'E-bonding Solution for USPS-STAMPS (VERIZON)',
        description: "Developed a microservices-based e-bonding solution using NestJS and TypeScript, enabling a seamless transition of USPS ordering and billing system from the legacy vendor Calero to the new TEMS provider, WidePoint. Implemented an Apigee API Gateway to manage secure and efficient communication between internal systems (STAMPS, XO) and the new vendor, handling 185,000+ monthly statusing requests. Enhanced system reliability and code quality by integrating Fortify and SonarQube security scans into the CI/CD pipeline, and successfully resolved critical production issues post-launch.",
        tools: ['NestJS', 'Express', 'Oracle DB', 'Postman', 'SoapUI', 'Apigee', 'Fortify', 'SonarQube'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Order Automation for PSOBS (VERIZON)',
        description: "Engineered an end-to-end solution to automate order processing from the CONEXUS platform, handling complex order types and multi-fragment submissions. Designed and implemented robust error-handling logic, including UOTM retry mechanisms, to automatically reprocess failed orders and significantly improve order completion rates. Developed UOTM burst message handling capabilities to efficiently manage large volumes of concurrent order submissions, preventing system overloads. Led load testing initiatives, identifying and resolving performance bottlenecks to enhance system stability and ensure scalability under high-stress conditions.",
        tools: ['Node.js', 'Express', 'Oracle DB', 'Postman', 'SoapUI', 'UOTM'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Truckonnect-EV Fleet Management (Mercedes-Benz)',
        description: "Truckonnect is a comprehensive application designed specifically for electric vehicles (EVs) to enhance fleet management efficiency. The application provides real-time insights into EV battery health, monitors energy consumption, locates charging stations, and enables fleet managers to receive alerts for proactive maintenance.",
        tools: ['Node.js', 'Express', 'MongoDB', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'DMS / E-commerce Support for IKEA',
        description: "Worked on DMS (Discount Management System) — an admin tool used to create and push coupons/discounts to downstream systems — and supported IKEA's e-commerce functionality. Responsibilities included implementing front-end features, integrating discount workflows, and ensuring reliable propagation of promotions to end-user channels.",
        tools: ['HTML5', 'CSS3', 'JSON', 'JavaScript', 'React', 'Redux', 'Node.js'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },