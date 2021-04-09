import { prioritiesData } from './prioritiesData'

export const navObjects = [
    {
        title: "Meet Reiko",
        path: "/meet-reiko",
    },
    {
        title: "Priorities",
        path: "/priorities",
        sub: [
            {
                title: prioritiesData[0].priority,
                link: `https://reikoforpcc.com/priorities#${prioritiesData[0].shortPriority}`
            },
            {
                title: prioritiesData[1].priority,
                link: `https://reikoforpcc.com/priorities#${prioritiesData[1].shortPriority}`
            },
            {
                title: prioritiesData[2].priority,
                link: `https://reikoforpcc.com/priorities#${prioritiesData[2].shortPriority}`
            },
            {
                title: prioritiesData[3].priority,
                link: `https://reikoforpcc.com/priorities#${prioritiesData[3].shortPriority}`
            },
        ]
    },
    {
        title: "Endorsements",
        path: "/endorsements",
    },
    {
        title: "Get Involved",
        path: "/get-involved",
        sub: [
            {
                title:"Contact",
                path: "/get-involved",
            },
            {
                title: "Facebook",
                link: "https://www.facebook.com/Williams4PCC"
            },
        ]
    }
]