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
            name: 'せつなくて (悲伤) (5 Voice_Acoustic ver.)',
            artist: 'Da-iCE',
            lrc: '/music/lrc/Da-iCE - せつなくて (悲伤) (5 Voice_Acoustic ver.).lrc',
            cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
            url: 'https://warmblog.oss-cn-beijing.aliyuncs.com/Da-iCE%20-%20%E3%81%9B%E3%81%A4%E3%81%AA%E3%81%8F%E3%81%A6%20%28%E6%82%B2%E4%BC%A4%29%20%285%20Voice_Acoustic%20ver.%29.mp3'
        },
        {
            name: '亲爱的旅人啊（Cover：木村弓）',
            artist: '周深',
            lrc: '/music/lrc/亲爱的旅人啊（Cover：木村弓）-周深.lrc',
            cover: 'https://p1.music.126.net/1YrCPOBV314i-mTtlDg8mQ==/109951164148664637.jpg?param=300x300',
            url: 'http://q0fzyzixq.bkt.clouddn.com/audio/mp3/亲爱的旅人啊（Cover：木村弓） - 周深.mp3'
        }
    ]
});