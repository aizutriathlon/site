const $foot = document.getElementById("foot")
const $h1_foot = document.createElement("h1")
$h1_foot.textContent = "会津大学トライアスロン部"
$foot.appendChild($h1_foot)

const $ul_foot=document.createElement("ul")

for(let i=0;i<li_List.length;i++){
    const $li = document.createElement("li");
    const $a = document.createElement("a");
    $a.href = li_List[i].href;
    $a.text = li_List[i].text;
    $li.appendChild($a)
    $ul_foot.appendChild($li)
}
$foot.appendChild($ul_foot)

const $a_insta = document.createElement("a");
$a_insta.href="https://www.instagram.com/aizu_triathlon_m/"
const $img_insta = document.createElement("img");
$img_insta.src="https://static.cdninstagram.com/rsrc.php/v3/yG/r/De-Dwpd5CHc.png";
$img_insta.style.width="30px"
$img_insta.style.paddingBottom="1%"
$a_insta.appendChild($img_insta)
$foot.appendChild($a_insta)

const $a_twi = document.createElement("a");
$a_twi.href="https://twitter.com/aizu_triathlon"
const $img_twi = document.createElement("img");
$img_twi.src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png";
$img_twi.style.width="30px"
$img_twi.style.paddingBottom="1%"
$img_twi.style.paddingLeft="10px"
$a_twi.appendChild($img_twi)
$foot.appendChild($a_twi)

const $p_foot = document.createElement("p");
$p_foot.style.backgroundColor = "black";
$p_foot.style.color = "white";
$p_foot.style.textAlign = "center";
$p_foot.textContent = "Copyright © "+new Date().getFullYear()+" University of Aizu Triathlon Team, All Rights Reserved.";
$foot.appendChild($p_foot);

// const $div = document.createElement('div');
// $div.classList.add('container');
// $div.appendChild($a_insta);
// $div.appendChild($a_twi);
// document.body.appendChild($div);
