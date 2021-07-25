import axios from 'axios'

interface slackArgs {
    data: string,
    url: string
}

export default async({data, url}: slackArgs) => {

    let message: any = {
        attachments: [], 
    }
    
    if (data == "404") {
        message.attachments.push({
            pretext: '식단표가 없습니다. 식단표 `PR` 날려주세요 😢',
            color: "#2eb886",
            fields: [
                {
                    type:'mrkdwn',
                    title: '신사역 점심 Github Repository 📦',
                    value: "https://github.com/HyeonjuPark/pangyo-smilecook",
                }, 
            ],
            footer: 'Github - shinsa-lunch'
        })
    } else {
        message.attachments.push({
            pretext: '오늘의 한식뷔페 메뉴입니다.',
            color: "#2eb886",
            fields: [
                {
                    type:'mrkdwn',
                    title: '오늘의 식단 🥘',
                    value: data,
                }, 
            ],
            footer: 'Github - shinsa-lunch'
        })
    }

    await axios.post(url, message)
}
