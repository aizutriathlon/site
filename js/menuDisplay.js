const menu = document.getElementById('menu');
var api_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=2oT4txEz0oAiIw3yy7lfaKuFIgOutjqk4pYD4FEbBf3R8hbIWQLFsS1XlqwaHgiLNH2Od31tKO82wjXoHyITA2of4chyF3qvm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLBqdvIdu8wrJGHQWbGzf_NHsa8yYYSeY1QJfFKQ9yMRhh_kHnVb1Zai077FyY9fg4W_r3RwQKfPQdkJzIJfF6mUqEC71IJzx9z9Jw9Md8uu&lib=MjnnyC6hxlDoaUCtOXmUaFfw1VHRAzxWd';
const weekdays = ["日", "月", "火", "水", "木", "金", "土"];


fetch(api_url)
    .then(response => response.json())
    .then(data => {
        displayMenu(data);
    })
    .catch(error => console.error('Error:', error));


async function displayMenu(data) {
    document.getElementById('loading').style.display = 'none';
    var originalDay = new Date();
    var checkDate;
    var editDate=0;
    var random = Math.floor(Math.random() * 200) + 1
    for (let i = 0; i < weekdays.length; i++) {
        var checkUseRandom = false;
        var checkSameData = false;
        if (i >= 1 && data[i].date == data[i - 1].date && checkDate != data[i].date) {
            i--;//二部練を想定(３部練は想定していない)
            checkDate = data[i].date;
            checkSameData = true;
        }
        var day = new Date(originalDay);
        day.setDate(originalDay.getDate() + i - editDate);
        var $h2 = document.createElement('h2');
        $h2.textContent = ((day.getMonth() + 1) + "月" + day.getDate() + "日 (" + weekdays[day.getDay()] + ") ");

        if (checkDate == data[i].date) {
            $h2.textContent += "[※2種目目] "
            i++;//こうしないとメニューの日程がズレる
        }


        if (data[i]) {
            var $p = document.createElement('p');
            var $p_menu = document.createElement('p');
            if (data[i].event == "イベント" || data[i].event == "大会") {
                $p.textContent = ("本日は" + data[i].event + " (" + data[i].detail + ") です。")
                // console.log($p.textContent)
            }
            else if (data[i].event == "休み" || data[i].event == "ミーティング") {
                $p.textContent = ("本日は" + data[i].event + "です。")
                var $a = document.createElement('a');
                $a.textContent = "退屈だと思うので、興味深い動画のリンクを載せておきます";
                $a.href = "https://www.youtube.com/playlist?list=PLLEDAKvCgwwBUQ732dShwbdceOB64OyIi"; // リンク先の URL を設定
                if(random==25 & checkUseRandom==false){
                    var $br = document.createElement('br');
                    $p.appendChild($br);
                    $p.appendChild($a);
                    checkUseRandom=true;
                }

            }
            else {
                var place;
                var error_check_count = 0
                if (data[i].event == "バイク") place = "サークル棟";
                else place = data[i].place;
                $p_menu.innerHTML += ("集合場所: " + place + " <br>集合時間: " + data[i].time + "<br><br><strong>練習内容</strong><br>")

                if (data[i].event == "バイク") {
                    if (data[i].detail == "未定") {
                        var textData = "内容準備中"
                    }
                    else if ((data[i].addMessage) != '') var textData = data[i].addMessage
                    else {
                        var textData = ("本日は" + data[i].place + "に行きます。<br>天候不良時はサークル等でローラー練をします。")
                    }

                }
                else if (data[i].event == "ラン" || data[i].event == "スイム") {
                    if (data[i].event == "スイム") {
                        if (data[i].detail == "未定") var textData = "内容準備中"
                        else if ((data[i].addMessage).length >= 5) var textData = data[i].addMessage
                        else var textData = await fetchData('practiceData/' + data[i].event + '/' + data[i].detail + '.txt');
                    }
                    else if (data[i].event == "ラン") {
                        if (data[i].detail == "未定") var textData = "内容準備中"
                        else if ((data[i].addMessage).length >= 5) var textData = data[i].addMessage;
                        else if ((data[i].place).includes("短")) {
                            var textData = await fetchData('practiceData/' + data[i].event + '/mini/' + data[i].detail + '.txt');
                        }
                        else {
                            var textData = await fetchData('practiceData/' + data[i].event + '/university/' + data[i].detail + '.txt');
                        }
                    }
                }
                $p_menu.innerHTML += ('<pre>' + textData + '</pre>');
            }

            $h2.textContent += data[i].event
            menu.appendChild($h2);
            menu.appendChild($p);
            menu.appendChild($p_menu);

        }
        if(checkSameData){
            editDate++;
        }
    }
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('準備中です。');
        }
        return await response.text();
    } catch (error) {
        console.error("エラー発生: ", error);
        return '準備中です。';
    }
}