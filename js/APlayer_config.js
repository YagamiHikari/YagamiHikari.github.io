const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: 'せつなくて (悲伤)(5 Voice_Acoustic ver.)',
            artist: 'Da-iCE',
            lrc: 'https://warmblog.oss-cn-beijing.aliyuncs.com/Da-iCE%20-%20%E3%81%9B%E3%81%A4%E3%81%AA%E3%81%8F%E3%81%A6%20%28%E6%82%B2%E4%BC%A4%29%20%285%20Voice_Acoustic%20ver.%29.lrc',
            cover: '/music/lrc/Da-iCE - せつなくて (悲伤) (5 Voice_Acoustic ver.).jpg',
            url: 'https://warmblog.oss-cn-beijing.aliyuncs.com/Da-iCE%20-%20%E3%81%9B%E3%81%A4%E3%81%AA%E3%81%8F%E3%81%A6%20%28%E6%82%B2%E4%BC%A4%29%20%285%20Voice_Acoustic%20ver.%29.mp3'
        },
        {
            name: '夏草や、去りし日々の影法師',
            artist: 'FELT',
            lrc: '/music/lrc/FELT - 夏草や、去りし日々の影法師.lrc',
            cover: '/music/lrc/FELT - 夏草や、去りし日々の影法師.jpg',
            url: 'https://warmblog.oss-cn-beijing.aliyuncs.com/FELT%20-%20%E5%A4%8F%E8%8D%89%E3%82%84%E3%80%81%E5%8E%BB%E3%82%8A%E3%81%97%E6%97%A5%E3%80%85%E3%81%AE%E5%BD%B1%E6%B3%95%E5%B8%AB.mp3'
        },
        {
            name: '好きでした。 (曾经喜欢过。)',
            artist: '横山克',
            lrc: '/music/lrc/横山克 (よこやま まさる) - 好きでした。 (曾经喜欢过。).lrc',
            cover: '/music/lrc/横山克 (よこやま まさる) - 好きでした。 (曾经喜欢过。).jpg',
            url: '/music/lrc/横山克 (よこやま まさる) - 好きでした。 (曾经喜欢过。).mp3'
        },
        {
            name: 'ヒカリ断ツ雨',
            artist: '斉藤壮馬',
            lrc: '/music/lrc/斉藤壮馬 (さいとう そうま) - ヒカリ断ツ雨.lrc',
            cover: '/music/lrc/斉藤壮馬 (さいとう そうま) - ヒカリ断ツ雨.jpg',
            url: '/music/lrc/斉藤壮馬 (さいとう そうま) - ヒカリ断ツ雨.mp3'
        },
        {
            name: '手つかずの感情 (未曾经历的感情)',
            artist: '中山真斗',
            lrc: '/music/lrc/中山真斗 (なかやま まさと) - 手つかずの感情 (未曾经历的感情).lrc',
            cover: '/music/lrc/中山真斗 (なかやま まさと) - 手つかずの感情 (未曾经历的感情).jpg',
            url: '/music/lrc/中山真斗 (なかやま まさと) - 手つかずの感情 (未曾经历的感情).mp3'
        },
        {
            name: 'Because Of You',
            artist: 'Ne-Yo',
            lrc: '/music/lrc/Ne-Yo - Because Of You.lrc',
            cover: '/music/lrc/Ne-Yo - Because Of You.jpg',
            url: '/music/lrc/Ne-Yo - Because Of You.mp3'
        }
    ]
});