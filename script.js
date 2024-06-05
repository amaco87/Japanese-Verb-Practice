const verbs = [
    { base: "おぼえる", conjugations: { "Formal": "おぼえます", "Formal Negative": "おぼえません", "Formal Past": "おぼえました", "Formal Past Negative": "おぼえませんでした", "Informal": "おぼえる", "Informal Negative": "おぼえない", "Informal Past": "おぼえた", "Informal Past Negative": "おぼえなかった", "て Form": "おぼえて", "Want to": "おぼえたい" } },
    { base: "こたえる", conjugations: { "Formal": "こたえます", "Formal Negative": "こたえません", "Formal Past": "こたえました", "Formal Past Negative": "こたえませんでした", "Informal": "こたえる", "Informal Negative": "こたえない", "Informal Past": "こたえた", "Informal Past Negative": "こたえなかった", "て Form": "こたえて", "Want to": "こたえたい" } },
    { base: "しゃしんをとる", conjugations: { "Formal": "しゃしんをとります", "Formal Negative": "しゃしんをとりません", "Formal Past": "しゃしんをとりました", "Formal Past Negative": "しゃしんをとりませんでした", "Informal": "しゃしんをとる", "Informal Negative": "しゃしんをとらない", "Informal Past": "しゃしんをとった", "Informal Past Negative": "しゃしんをとらなかった", "て Form": "しゃしんをとって", "Want to": "しゃしんをとりたい" } },
    { base: "たべる", conjugations: { "Formal": "たべます", "Formal Negative": "たべません", "Formal Past": "たべました", "Formal Past Negative": "たべませんでした", "Informal": "たべる", "Informal Negative": "たべない", "Informal Past": "たべた", "Informal Past Negative": "たべなかった", "て Form": "たべて", "Want to": "たべたい" } },
    { base: "のむ", conjugations: { "Formal": "のみます", "Formal Negative": "のみません", "Formal Past": "のみました", "Formal Past Negative": "のみませんでした", "Informal": "のむ", "Informal Negative": "のまない", "Informal Past": "のんだ", "Informal Past Negative": "のまなかった", "て Form": "のんで", "Want to": "のみたい" } },
    { base: "みる", conjugations: { "Formal": "みます", "Formal Negative": "みません", "Formal Past": "みました", "Formal Past Negative": "みませんでした", "Informal": "みる", "Informal Negative": "みない", "Informal Past": "みた", "Informal Past Negative": "みなかった", "て Form": "みて", "Want to": "みたい" } },
    { base: "する", conjugations: { "Formal": "します", "Formal Negative": "しません", "Formal Past": "しました", "Formal Past Negative": "しませんでした", "Informal": "する", "Informal Negative": "しない", "Informal Past": "した", "Informal Past Negative": "しなかった", "て Form": "して", "Want to": "したい" } },
    { base: "べんきょうする", conjugations: { "Formal": "べんきょうします", "Formal Negative": "べんきょうしません", "Formal Past": "べんきょうしました", "Formal Past Negative": "べんきょうしませんでした", "Informal": "べんきょうする", "Informal Negative": "べんきょうしない", "Informal Past": "べんきょうした", "Informal Past Negative": "べんきょうしなかった", "て Form": "べんきょうして", "Want to": "べんきょうしたい" } },
    { base: "料理する", conjugations: { "Formal": "料理します", "Formal Negative": "料理しません", "Formal Past": "料理しました", "Formal Past Negative": "料理しませんでした", "Informal": "料理する", "Informal Negative": "料理しない", "Informal Past": "料理した", "Informal Past Negative": "料理しなかった", "て Form": "料理して", "Want to": "料理したい" } },
    { base: "分かる", conjugations: { "Formal": "分かります", "Formal Negative": "分かりません", "Formal Past": "分かりました", "Formal Past Negative": "分かりませんでした", "Informal": "分かる", "Informal Negative": "分からない", "Informal Past": "分かった", "Informal Past Negative": "分からなかった", "て Form": "分かって", "Want to": "分かりたい" } },
    { base: "行く", conjugations: { "Formal": "行きます", "Formal Negative": "行きません", "Formal Past": "行きました", "Formal Past Negative": "行きませんでした", "Informal": "行く", "Informal Negative": "行かない", "Informal Past": "行った", "Informal Past Negative": "行かなかった", "て Form": "行って", "Want to": "行きたい" } },
    { base: "買う", conjugations: { "Formal": "買います", "Formal Negative": "買いません", "Formal Past": "買いました", "Formal Past Negative": "買いませんでした", "Informal": "買う", "Informal Negative": "買わない", "Informal Past": "買った", "Informal Past Negative": "買わなかった", "て Form": "買って", "Want to": "買いたい" } },
    { base: "はなす", conjugations: { "Formal": "はなします", "Formal Negative": "はなしません", "Formal Past": "はなしました", "Formal Past Negative": "はなしませんでした", "Informal": "はなす", "Informal Negative": "はなさない", "Informal Past": "はなした", "Informal Past Negative": "はなさなかった", "て Form": "はなして", "Want to": "はなしたい" } },
    { base: "ねる", conjugations: { "Formal": "ねます", "Formal Negative": "ねません", "Formal Past": "ねました", "Formal Past Negative": "ねませんでした", "Informal": "ねる", "Informal Negative": "ねない", "Informal Past": "ねた", "Informal Past Negative": "ねなかった", "て Form": "ねて", "Want to": "ねたい" } },
    { base: "よむ", conjugations: { "Formal": "よみます", "Formal Negative": "よみません", "Formal Past": "よみました", "Formal Past Negative": "よみませんでした", "Informal": "よむ", "Informal Negative": "よまない", "Informal Past": "よんだ", "Informal Past Negative": "よまなかった", "て Form": "よんで", "Want to": "よみたい" } },
    { base: "しる", conjugations: { "Formal": "しります", "Formal Negative": "しりません", "Formal Past": "しりました", "Formal Past Negative": "しりませんでした", "Informal": "しる", "Informal Negative": "しらない", "Informal Past": "しった", "Informal Past Negative": "しらなかった", "て Form": "しって", "Want to": "しりたい" } },
    { base: "うんどうする", conjugations: { "Formal": "うんどうします", "Formal Negative": "うんどうしません", "Formal Past": "うんどうしました", "Formal Past Negative": "うんどうしませんでした", "Informal": "うんどうする", "Informal Negative": "うんどうしない", "Informal Past": "うんどうした", "Informal Past Negative": "うんどうしなかった", "て Form": "うんどうして", "Want to": "うんどうしたい" } },
    { base: "来る", conjugations: { "Formal": "来ます", "Formal Negative": "来ません", "Formal Past": "来ました", "Formal Past Negative": "来ませんでした", "Informal": "来る", "Informal Negative": "来ない", "Informal Past": "来た", "Informal Past Negative": "来なかった", "て Form": "来て", "Want to": "来たい" } },
    { base: "かえる", conjugations: { "Formal": "かえります", "Formal Negative": "かえりません", "Formal Past": "かえりました", "Formal Past Negative": "かえりませんでした", "Informal": "かえる", "Informal Negative": "かえらない", "Informal Past": "かえった", "Informal Past Negative": "かえらなかった", "て Form": "かえって", "Want to": "かえりたい" } },
    { base: "かく", conjugations: { "Formal": "かきます", "Formal Negative": "かきません", "Formal Past": "かきました", "Formal Past Negative": "かきませんでした", "Informal": "かく", "Informal Negative": "かかない", "Informal Past": "かいた", "Informal Past Negative": "かかなかった", "て Form": "かいて", "Want to": "かきたい" } },
    { base: "うんてんする", conjugations: { "Formal": "うんてんします", "Formal Negative": "うんてんしません", "Formal Past": "うんてんしました", "Formal Past Negative": "うんてんしませんでした", "Informal": "うんてんする", "Informal Negative": "うんてんしない", "Informal Past": "うんてんした", "Informal Past Negative": "うんてんしなかった", "て Form": "うんてんして", "Want to": "うんてんしたい" } },
    { base: "つくる", conjugations: { "Formal": "つくります", "Formal Negative": "つくりません", "Formal Past": "つくりました", "Formal Past Negative": "つくりませんでした", "Informal": "つくる", "Informal Negative": "つくらない", "Informal Past": "つくった", "Informal Past Negative": "つくらなかった", "て Form": "つくって", "Want to": "つくりたい" } },
    { base: "いる", conjugations: { "Formal": "います", "Formal Negative": "いません", "Formal Past": "いました", "Formal Past Negative": "いませんでした", "Informal": "いる", "Informal Negative": "いない", "Informal Past": "いた", "Informal Past Negative": "いなかった", "て Form": "いて", "Want to": "いたい" } },
    { base: "あう", conjugations: { "Formal": "あいます", "Formal Negative": "あいません", "Formal Past": "あいました", "Formal Past Negative": "あいませんでした", "Informal": "あう", "Informal Negative": "あわない", "Informal Past": "あった", "Informal Past Negative": "あわなかった", "て Form": "あって", "Want to": "あいたい" } },
    { base: "つかう", conjugations: { "Formal": "つかいます", "Formal Negative": "つかいません", "Formal Past": "つかいました", "Formal Past Negative": "つかいませんでした", "Informal": "つかう", "Informal Negative": "つかわない", "Informal Past": "つかった", "Informal Past Negative": "つかわなかった", "て Form": "つかって", "Want to": "つかいたい" } },
    { base: "もつ", conjugations: { "Formal": "もちます", "Formal Negative": "もちません", "Formal Past": "もちました", "Formal Past Negative": "もちませんでした", "Informal": "もつ", "Informal Negative": "もたない", "Informal Past": "もった", "Informal Past Negative": "もたなかった", "て Form": "もって", "Want to": "もちたい" } },
    { base: "まつ", conjugations: { "Formal": "まちます", "Formal Negative": "まちません", "Formal Past": "まちました", "Formal Past Negative": "まちませんでした", "Informal": "まつ", "Informal Negative": "またない", "Informal Past": "まった", "Informal Past Negative": "またなかった", "て Form": "まって", "Want to": "まちたい" } },
    { base: "きく", conjugations: { "Formal": "ききます", "Formal Negative": "ききません", "Formal Past": "ききました", "Formal Past Negative": "ききませんでした", "Informal": "きく", "Informal Negative": "きかない", "Informal Past": "きいた", "Informal Past Negative": "きかなかった", "て Form": "きいて", "Want to": "ききたい" } },
    { base: "はいる", conjugations: { "Formal": "はいります", "Formal Negative": "はいりません", "Formal Past": "はいりました", "Formal Past Negative": "はいりませんでした", "Informal": "はいる", "Informal Negative": "はいらない", "Informal Past": "はいった", "Informal Past Negative": "はいらなかった", "て Form": "はいって", "Want to": "はいりたい" } },
    { base: "おしえる", conjugations: { "Formal": "おしえます", "Formal Negative": "おしえません", "Formal Past": "おしえました", "Formal Past Negative": "おしえませんでした", "Informal": "おしえる", "Informal Negative": "おしえない", "Informal Past": "おしえた", "Informal Past Negative": "おしえなかった", "て Form": "おしえて", "Want to": "おしえたい" } },
    { base: "おもう", conjugations: { "Formal": "おもいます", "Formal Negative": "おもいません", "Formal Past": "おもいました", "Formal Past Negative": "おもいませんでした", "Informal": "おもう", "Informal Negative": "おもわない", "Informal Past": "おもった", "Informal Past Negative": "おもわなかった", "て Form": "おもって", "Want to": "おもいたい" } },
    { base: "なる", conjugations: { "Formal": "なります", "Formal Negative": "なりません", "Formal Past": "なりました", "Formal Past Negative": "なりませんでした", "Informal": "なる", "Informal Negative": "ならない", "Informal Past": "なった", "Informal Past Negative": "ならなかった", "て Form": "なって", "Want to": "なりたい" } },
    { base: "できる", conjugations: { "Formal": "できます", "Formal Negative": "できません", "Formal Past": "できました", "Formal Past Negative": "できませんでした", "Informal": "できる", "Informal Negative": "できない", "Informal Past": "できた", "Informal Past Negative": "できなかった", "て Form": "できて", "Want to": "できたい" } },
    { base: "気にいる", conjugations: { "Formal": "気にいります", "Formal Negative": "気にいりません", "Formal Past": "気に入りました", "Formal Past Negative": "気にいりませんでした", "Informal": "気にいる", "Informal Negative": "気にいらない", "Informal Past": "気に入った", "Informal Past Negative": "気にいらなかった", "て Form": "気にいって", "Want to": "気にいりたい" } },
    { base: "はしる", conjugations: { "Formal": "はしります", "Formal Negative": "はしりません", "Formal Past": "はしりました", "Formal Past Negative": "はしりませんでした", "Informal": "はしる", "Informal Negative": "はしらない", "Informal Past": "はしった", "Informal Past Negative": "はしらなかった", "て Form": "はしって", "Want to": "はしりたい" } },
    { base: "あるく", conjugations: { "Formal": "あるきます", "Formal Negative": "あるきません", "Formal Past": "あるきました", "Formal Past Negative": "あるきませんでした", "Informal": "あるく", "Informal Negative": "あるかない", "Informal Past": "あるいた", "Informal Past Negative": "あるかなかった", "て Form": "あるいて", "Want to": "あるきたい" } },
    { base: "シャワーをあびる", conjugations: { "Formal": "シャワーをあびます", "Formal Negative": "シャワーをあびません", "Formal Past": "シャワーをあびました", "Formal Past Negative": "シャワーをあびませんでした", "Informal": "シャワーをあびる", "Informal Negative": "シャワーをあびない", "Informal Past": "シャワーをあびた", "Informal Past Negative": "シャワーをあびなかった", "て Form": "シャワーをあびて", "Want to": "シャワーをあびたい" } },
    { base: "たたかう", conjugations: { "Formal": "たたかいます", "Formal Negative": "たたかいません", "Formal Past": "たたかいました", "Formal Past Negative": "たたかいませんでした", "Informal": "たたかう", "Informal Negative": "たたかわない", "Informal Past": "たたかった", "Informal Past Negative": "たたかわなかった", "て Form": "たたかって", "Want to": "たたかいたい" } },
    { base: "ぬぐ", conjugations: { "Formal": "ぬぎます", "Formal Negative": "ぬぎません", "Formal Past": "ぬぎました", "Formal Past Negative": "ぬぎませんでした", "Informal": "ぬぐ", "Informal Negative": "ぬがない", "Informal Past": "ぬいだ", "Informal Past Negative": "ぬがなかった", "て Form": "ぬいで", "Want to": "ぬぎたい" } },
    { base: "はく", conjugations: { "Formal": "はきます", "Formal Negative": "はきません", "Formal Past": "はきました", "Formal Past Negative": "はきませんでした", "Informal": "はく", "Informal Negative": "はかない", "Informal Past": "はいた", "Informal Past Negative": "はかなかった", "て Form": "はいて", "Want to": "はきたい" } },
    { base: "おねがいする", conjugations: { "Formal": "おねがいします", "Formal Negative": "おねがいしません", "Formal Past": "おねがいしました", "Formal Past Negative": "おねがいしませんでした", "Informal": "おねがいする", "Informal Negative": "おねがいしない", "Informal Past": "おねがいした", "Informal Past Negative": "おねがいしなかった", "て Form": "おねがいして", "Want to": "おねがいしたい" } },
    { base: "あそぶ", conjugations: { "Formal": "あそびます", "Formal Negative": "あそびません", "Formal Past": "あそびました", "Formal Past Negative": "あそびませんでした", "Informal": "あそぶ", "Informal Negative": "あそばない", "Informal Past": "あそんだ", "Informal Past Negative": "あそばなかった", "て Form": "あそんで", "Want to": "あそびたい" } },
    { base: "そうじする", conjugations: { "Formal": "そうじします", "Formal Negative": "そうじしません", "Formal Past": "そうじしました", "Formal Past Negative": "そうじしませんでした", "Informal": "そうじする", "Informal Negative": "そうじしない", "Informal Past": "そうじした", "Informal Past Negative": "そうじしなかった", "て Form": "そうじして", "Want to": "そうじしたい" } },
    { base: "わすれる", conjugations: { "Formal": "わすれます", "Formal Negative": "わすれません", "Formal Past": "わすれました", "Formal Past Negative": "わすれませんでした", "Informal": "わすれる", "Informal Negative": "わすれない", "Informal Past": "わすれた", "Informal Past Negative": "わすれなかった", "て Form": "わすれて", "Want to": "わすれたい" } },
    { base: "はたらく", conjugations: { "Formal": "はたらきます", "Formal Negative": "はたらきません", "Formal Past": "はたらきました", "Formal Past Negative": "はたらきませんでした", "Informal": "はたらく", "Informal Negative": "はたらかない", "Informal Past": "はたらいた", "Informal Past Negative": "はたらかなかった", "て Form": "はたらいて", "Want to": "はたらきたい" } },
    { base: "ならう", conjugations: { "Formal": "ならいます", "Formal Negative": "ならいません", "Formal Past": "ならいました", "Formal Past Negative": "ならいませんでした", "Informal": "ならう", "Informal Negative": "ならわない", "Informal Past": "ならった", "Informal Past Negative": "ならわなかった", "て Form": "ならって", "Want to": "ならいたい" } },
    { base: "はじめる", conjugations: { "Formal": "はじめます", "Formal Negative": "はじめません", "Formal Past": "はじめました", "Formal Past Negative": "はじめませんでした", "Informal": "はじめる", "Informal Negative": "はじめない", "Informal Past": "はじめた", "Informal Past Negative": "はじめなかった", "て Form": "はじめて", "Want to": "はじめたい" } },
    { base: "しんぱいする", conjugations: { "Formal": "しんぱいします", "Formal Negative": "しんぱいしません", "Formal Past": "しんぱいしました", "Formal Past Negative": "しんぱいしませんでした", "Informal": "しんぱいする", "Informal Negative": "しんぱいしない", "Informal Past": "しんぱいした", "Informal Past Negative": "しんぱいしなかった", "て Form": "しんぱいして", "Want to": "しんぱいしたい" } },
    { base: "れんしゅうする", conjugations: { "Formal": "れんしゅうします", "Formal Negative": "れんしゅうしません", "Formal Past": "れんしゅうしました", "Formal Past Negative": "れんしゅうしませんでした", "Informal": "れんしゅうする", "Informal Negative": "れんしゅうしない", "Informal Past": "れんしゅうした", "Informal Past Negative": "れんしゅうしなかった", "て Form": "れんしゅうして", "Want to": "れんしゅうしたい" } },
    { base: "あげる", conjugations: { "Formal": "あげます", "Formal Negative": "あげません", "Formal Past": "あげました", "Formal Past Negative": "あげませんでした", "Informal": "あげる", "Informal Negative": "あげない", "Informal Past": "あげた", "Informal Past Negative": "あげなかった", "て Form": "あげて", "Want to": "あげたい" } },
    { base: "くつろぐ", conjugations: { "Formal": "くつろぎます", "Formal Negative": "くつろぎません", "Formal Past": "くつろぎました", "Formal Past Negative": "くつろぎませんでした", "Informal": "くつろぐ", "Informal Negative": "くつろがない", "Informal Past": "くつろいだ", "Informal Past Negative": "くつろがなかった", "て Form": "くつろいで", "Want to": "くつろぎたい" } },
    { base: "リラックスする", conjugations: { "Formal": "リラックスします", "Formal Negative": "リラックスしません", "Formal Past": "リラックスしました", "Formal Past Negative": "リラックスしませんでした", "Informal": "リラックスする", "Informal Negative": "リラックスしない", "Informal Past": "リラックスした", "Informal Past Negative": "リラックスしなかった", "て Form": "リラックスして", "Want to": "リラックスしたい" } },
    { base: "言う", conjugations: { "Formal": "言います", "Formal Negative": "言いません", "Formal Past": "言いました", "Formal Past Negative": "言いませんでした", "Informal": "言う", "Informal Negative": "言わない", "Informal Past": "言った", "Informal Past Negative": "言わなかった", "て Form": "言って", "Want to": "言いたい" } },
    { base: "わかる", conjugations: { "Formal": "わかります", "Formal Negative": "わかりません", "Formal Past": "わかりました", "Formal Past Negative": "わかりませんでした", "Informal": "わかる", "Informal Negative": "わからない", "Informal Past": "わかった", "Informal Past Negative": "わからなかった", "て Form": "わかって", "Want to": "わかりたい" } }
  ];

 let currentVerb = {};
let currentForm = "";

function newVerb() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    currentVerb = verbs[randomIndex];
    
    const forms = Object.keys(currentVerb.conjugations);
    const randomFormIndex = Math.floor(Math.random() * forms.length);
    currentForm = forms[randomFormIndex];
    
    document.getElementById("verb-display").textContent = `Conjugate "${currentVerb.base}" to "${currentForm}" form.`;
    document.getElementById("result").textContent = "";
    document.getElementById("conjugation").value = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("conjugation").value.trim();
    const correctAnswer = currentVerb.conjugations[currentForm];
    
    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Correct!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = `Incorrect. The correct answer is "${correctAnswer}".`;
        document.getElementById("result").style.color = "red";
    }
}