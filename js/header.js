var add_href="";
var minitora_link = "minitora/minitora.html"
if((location.pathname).includes("minitora")){
    add_href = "../"
    minitora_link = "minitora.html"
}

const head = document.getElementById("head");

const $h1 = document.createElement("h1");
const $a_h1 = document.createElement("a");
$a_h1.textContent = "会津大学トライアスロン部";
$a_h1.href = (add_href + "index.html");
$h1.appendChild($a_h1);
head.appendChild($h1);


const $div_display_PC_header = document.createElement("div");
$div_display_PC_header.classList.add("display_PC_header");
const li_List = [
    { href: add_href + "index.html", text: "ホーム" },
    { href: add_href + "about.html", text: "活動" },
    { href: minitora_link, text: "ミニトライアスロン2023" },
    { href: add_href + "member.html", text: "部員" },
    { href: add_href + "event.html", text: "年間行事" },
    { href: add_href + "blog.html", text: "活動報告" },
    { href: add_href + "practice.html", text: "練習" },
    { href: "https://drive.google.com/file/d/1J_Aptx65IzFbFtzfVBPqS1cfrkiaVoKr/view?usp=drive_link", text: "部則" },
    { href: add_href + "inquiry.html", text: "お問い合わせ" },
];
const $ul_display_PC_header = document.createElement("ul");
$ul_display_PC_header.classList.add("nav-list");
for (let i = 0; i < li_List.length; i++) {
    const $li_display_PC_header = document.createElement("li");
    $li_display_PC_header.classList.add("nav-list-item");
    const $a_display_PC_header = document.createElement("a");
    $a_display_PC_header.textContent = li_List[i].text;
    $a_display_PC_header.href = li_List[i].href;
    $li_display_PC_header.appendChild($a_display_PC_header);
    $ul_display_PC_header.appendChild($li_display_PC_header);
}
$div_display_PC_header.appendChild($ul_display_PC_header);
head.appendChild($div_display_PC_header);


const $div_hamburger = document.createElement("div");
$div_hamburger.classList.add("hamburger");
for (let i = 0; i < 3; i++) {
    const $span = document.createElement("span");
    $div_hamburger.appendChild($span);
}
head.appendChild($div_hamburger)

const $nav = document.createElement("nav");
$nav.classList.add("globalMenuSp", "disabled");
const $ul = document.createElement("ul");
for (let i = 0; i < li_List.length; i++) {
    const $li = document.createElement("li");
    const $a = document.createElement("a");
    $a.textContent = li_List[i].text;
    $a.href = li_List[i].href;
    $li.appendChild($a);
    $ul.appendChild($li);
}
$nav.appendChild($ul);
head.appendChild($nav);






/*
正しく読み込めれば以下のようになる 
<div id="head">
    <h1><a href="index.html">会津大学トライアスロン部</a></h1>
    <div class="display_PC_header">
        <ul class="nav-list">
            <li class="nav-list-item"><a href="index.html">ホーム</a></li>
            <li class="nav-list-item"><a href="about.html">活動</a></li>
            <li class="nav-list-item"><a href="minitora/minitora2023.html">ミニトライアスロン2023</a></li>
            <li class="nav-list-item"><a href="member.html">部員</a></li>
            <li class="nav-list-item"><a href="event.html">年間行事</a></li>
            <li class="nav-list-item"><a href="blog.html">活動報告</a></li>
            <li class="nav-list-item"><a href="practice.html">練習</a></li>
            <li class="nav-list-item"><a href="https://drive.google.com/file/d/1J_Aptx65IzFbFtzfVBPqS1cfrkiaVoKr/view?usp=drive_link">部則</a></li>
            <li class="nav-list-item"><a href="inquiry.html">お問い合わせ</a></li>
        </ul>
    </div>
    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav class="globalMenuSp disabled">
        <ul>
            <li><a href="index.html">ホーム</a></li>
            <li><a href="about.html">活動</a></li>
            <li><a href="minitora/minitora2023.html">ミニトライアスロン2023</a></li>
            <li><a href="member.html">部員</a></li>
            <li><a href="event.html">年間行事</a></li>
            <li><a href="blog.html">活動報告</a></li>
            <li><a href="practice.html">練習</a></li>
            <li class="nav-list-item"><a href="https://drive.google.com/file/d/1J_Aptx65IzFbFtzfVBPqS1cfrkiaVoKr/view?usp=drive_link">部則</a></li>
            <li><a href="inquiry.html">お問い合わせ</a></li>
        </ul>
    </nav>
</div>
*/