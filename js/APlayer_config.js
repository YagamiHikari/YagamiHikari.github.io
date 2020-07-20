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
            lrc: '/music/lrc/Da-iCE - せつなくて (悲伤) (5 Voice_Acoustic ver.).lrc',
            cover: '/music/lrc/Da-iCE - せつなくて (悲伤) (5 Voice_Acoustic ver.).jpg',
            url: 'https://warmblog.oss-cn-beijing.aliyuncs.com/Da-iCE%20-%20%E3%81%9B%E3%81%A4%E3%81%AA%E3%81%8F%E3%81%A6%20%28%E6%82%B2%E4%BC%A4%29%20%285%20Voice_Acoustic%20ver.%29.mp3'
        },
        {
            name: '夏草や、去りし日々の影法師',
            artist: 'FELT',
            lrc: '/music/lrc/FELT - 夏草や、去りし日々の影法師.lrc',
            cover: '/music/lrc/FELT - 夏草や、去りし日々の影法師.jpg',
            url: '/music/lrc/FELT - 夏草や、去りし日々の影法師.mp3'
        },
        {
            name: '好きでした。 (曾经喜欢过。)',
            artist: '横山克',
            lrc: '/music/lrc/横山克 (よこやま まさる) - 好きでした。 (曾经喜欢过。).lrc',
            cover: '横山克 (よこやま まさる) - 好きでした。 (曾经喜欢过。).jpg',
            url: '横山克 (よこやま まさる) - 好きでした。 (曾经喜欢过。).mp3'
        },
        {
            name: 'ヒカリ断ツ雨',
            artist: '斉藤壮馬',
            lrc: '/music/lrc/斉藤壮馬 (さいとう そうま) - ヒカリ断ツ雨.lrc',
            cover: '斉藤壮馬 (さいとう そうま) - ヒカリ断ツ雨.jpg',
            url: '斉藤壮馬 (さいとう そうま) - ヒカリ断ツ雨.mp3'
        },
        {
            name: 'どれだけ希望を持ったのか (怀有多少希望)',
            artist: '中山真斗',
            lrc: '/music/lrc/中山真斗 (なかやま まさと) - どれだけ希望を持ったのか (怀有多少希望).lrc',
            cover: '中山真斗 (なかやま まさと) - どれだけ希望を持ったのか (怀有多少希望).jpg',
            url: '中山真斗 (なかやま まさと) - どれだけ希望を持ったのか (怀有多少希望).mp3'
        }
    ]
});