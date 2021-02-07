import shortid from 'shortid'

export  const data =[
    {
        Question :  'お歳はいくつですか？',
        subComent : '（2年までの誤差は正解）',
        selecter : [
                        {
                            text:'２年の誤差の範囲内で年齢を答えることができた',
                            point:1
                        },
                        {
                            text:'答えられない、または３年以上の誤差がある年齢を答えた',
                            point:0
                        }
                   ],
        

    },
    
    {
        Question :  '今日は何年の何月何日ですか？何曜日ですか？',
        subComent : '(年月日、曜日が正解でそれぞれ1点ずつ加点　正解したらそれぞれにチェックをつけてください)',
        selecter :　[
                        {
                            text:'何年',
                            point:1,
                            state:false,
                            id : shortid.generate()
                        },
                        {
                            text:'何月',
                            point:1,
                            state:false,
                            id : shortid.generate()
                        },
                        {
                            text:'何日',
                            point:1,
                            state:false,
                            id : shortid.generate()
                        },
                        {
                            text:'何曜日',
                            point:1,
                            state:false,
                            id : shortid.generate()
                        }
                    ],
        id : shortid.generate()
    },
    
    {
        Question :  '私たちが今いるところは、どこですか？',
        subComent : '（自発的にできれば2点、5秒おいて家ですか？病院ですか？施設ですか？の中から正しい選択をすれば1点）',
        selecter : [
                        {
                            text:'自発的にできた',
                            point:2
                        },
                        {
                            text:'問いかけの後に正解の場所を答えることができた',
                            point:1
                        },
                        {
                            text:'誤った場所を答える。または答えることができない',
                            point:0
                        }
                    ],
        id : shortid.generate()

    },
    
    {
        Question :  'これから言う3つの言葉を言ってみてください。またあとで聞きますのでよく覚えておいてください。',
        subComent : '質問者は1または２から選んで質問し答えられたものにチェックをつけてください  1： a) 桜 b） 猫　c） 電車　 2： a）梅　b） 犬　c）自動車',
        selecter : [
        {
            text:'a) 桜 または　梅',
            point:1,
            state:false,
            id : shortid.generate()
        },
        {
            text:'b） 猫　または　犬',
            point:1,
            state:false,
            id : shortid.generate()
        },
        {
            text:'c） 電車　または　車',
            point:1,
            state:false,
            id : shortid.generate()
        }
    ],
        id : shortid.generate()

    },
    
    {
        Question :  '100から7を順番に引いてください。',
        subComent : '（100-7は？それからまた7を引くと？と質問する。最初の答えが不正解の場合、打ち切る）',
        selecter : [
                        {
                            text:'93　と答えた後に　86 と答えられた',
                            point:2
                            
                        },
                        {
                            text:' 93　のみ答えられた',
                            point:1
                        },
                        {
                            text:' 93 と答えられなかった',
                            point:0
                        }
                    ],
        id : shortid.generate()

    },
    
    {
        Question :  '私がこれから言う数字を逆から言ってください。',
        subComent : '6・8・2　と　3・5・2・9 をそれぞれ１つずつ逆順に言ってもらう。答えることができた場合はチェックをつける。3桁逆唱に失敗したら、打ち切る。',
        selecter :　[
            {
                text:'2・8・6　を言うことができた',
                point:1,
                state:false,
                id : shortid.generate()
            },
            {
                text:'9・2・5・3　を言うことができた',
                point:1,
                state:false,
                id : shortid.generate()
            },
            
        ],
        id : shortid.generate()

    },
    
    {
        Question :  '先ほど覚えてもらった言葉をもう一度言ってみてください。と質問し該当するものにチェックしてください　各２点'　,
        subComent : '全て自発的に答えられた場合は次の質問は飛ばしてください ',
        selecter : [
            {
                text:'a) 桜 または　梅　を自発的に答えられた',
                 point:2,
                 state:false,
                id : shortid.generate()
            },
            {
                text:'b） 猫　または　犬　を自発的に答えられた',
                 point:2,
                 state:false,
                id : shortid.generate()
            },
            {
                text:'c） 電車　または　車　を自発的に答えられた',
                point:2,
                state:false,
                id : shortid.generate()
            }
        ],
        id : shortid.generate()

    },
    {
        Question :  '前回の質問でわからなかった、もしくは答えられなかったものを対象に以下のヒントを与えて。再度回答を促してください',
        subComent : ' ヒント　a）植物　b）動物　c）乗り物 ＊前回の質問時に全て自発的に答えられた場合は次の質問へをクリック',
        selecter : [
            {
                text:'a) 桜 または　梅　をヒントを用いて答えられた',
                point:1,
                state:false,
                id : shortid.generate()
            },
            {
                text:'b） 猫　または　犬　をヒントを用いて答えられた',
                point:1,
                state:false,
                id : shortid.generate()
            },
            {
                text:'c） 電車　または　車　をヒントを用いて答えられた',
                point:1,
                state:false,
                id : shortid.generate()
            }
        ],
        id : shortid.generate()

    },

    
    {
        Question :  'これから5つの品物を見せます。それを隠しますので、なにがあったか言ってください。と質問し正解数に適したボタンをクリックしてください',
        subComent : '（時計、鍵、タバコ、ペン、硬貨　など必ず相互に無関係なもの）',
        selecter : [
                        {
                            text:'正解数 ０',
                            point:0
                        },
                        {
                            text:'正解数　１',
                            point:1
                        },
                        {
                            text:'正解数　２',
                            point:2
                        },
                        {
                            text:'正解数　３',
                            point:3
                        },
                        {
                            text:'正解数　４',
                            point:4
                        },
                        {
                            text:'正解数　５',
                            point:5
                        }
                    ],
        id : shortid.generate()
        
    },
    
    {
        Question :  '知っている野菜の名前をできるだけ多く言ってください。',
        subComent : '画面の空欄右をクリックして答えた数をカウントしてください。途中で詰まり、約10秒間待っも出ない場合や１０個以上上がった場合、そこで終了ボタンを押してください,スマホの方は0~10までの答えられた数を入力して下さい！',
        id : shortid.generate()
        
    },
    
]