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
                path: `/priorities#${prioritiesData[0].shortPriority}`
            },
            {
                title: prioritiesData[1].priority,
                path: `/priorities#${prioritiesData[1].shortPriority}`
            },
            {
                title: prioritiesData[2].priority,
                path: `/priorities#${prioritiesData[2].shortPriority}`
            },
            {
                title: prioritiesData[3].priority,
                path: `/priorities#${prioritiesData[3].shortPriority}`
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
                title: "Donate",
                link: "https://secure.actblue.com/donate/friends-of-reiko-1"
            },
            {
                title:"Volunteer",
                path: "#events",
            },
            {
                title: 'Join our Events',
                path: '/#events'
            },
            {
                title: "Like our Facebook",
                link: "https://www.facebook.com/Williams4PCC"
            },
        ]
    }
]