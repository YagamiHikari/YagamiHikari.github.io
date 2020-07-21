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
            url: '/music/lrc/Da-iCE - せつなくて (悲伤) (5 Voice_Acoustic ver.).mp3'
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
            name: 'アゲイン (Again)',
            artist: '横山克',
            lrc: '/music/lrc/横山克 (よこやま まさる) - アゲイン (Again).lrc',
            cover: '/music/lrc/横山克 (よこやま まさる) - アゲイン (Again).jpg',
            url: '/music/lrc/横山克 (よこやま まさる) - アゲイン (Again).mp3'
        },
        {
            name: '春弦',
            artist: '塞壬唱片-MSR _ 横山克',
            lrc: '/music/lrc/塞壬唱片-MSR _ 横山克 (よこやま まさる) - 春弦.lrc',
            cover: '/music/lrc/塞壬唱片-MSR _ 横山克 (よこやま まさる) - 春弦.jpg',
            url: '/music/lrc/塞壬唱片-MSR _ 横山克 (よこやま まさる) - 春弦.mp3'
        },
        {
            name: '酒香剑舞灯影斜',
            artist: '张岩',
            lrc: '/music/lrc/张岩 - 酒香剑舞灯影斜.lrc',
            cover: '/music/lrc/张岩 - 酒香剑舞灯影斜.jpg',
            url: '/music/lrc/张岩 - 酒香剑舞灯影斜.mp3'
        },
        {
            name: '飛花落葉',
            artist: 'KENN',
            lrc: '/music/lrc/KENN (ケン) - 飛花落葉.lrc',
            cover: '/music/lrc/KENN (ケン) - 飛花落葉.jpg',
            url: '/music/lrc/KENN (ケン) - 飛花落葉.mp3'
        }
    ]
});