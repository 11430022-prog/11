function startAnalysis() {
    // 第一部分：輸入姓名
    let name = prompt("第一題：請輸入你的姓名");

    if (name === null) {
        alert("你已取消操作！");
        return;
    }

    name = name.trim();

    if (name === "") {
        alert("姓名不可空白，請重新開始！");
        return;
    }

    // 第二部分：輸入年齡
    let ageInput = prompt("第二題：請輸入你的年齡");

    if (ageInput === null) {
        alert("你已取消操作！");
        return;
    }

    if (
        ageInput.trim() === "" ||
        !Number.isInteger(Number(ageInput)) ||
        Number(ageInput) < 0
    ) {
        alert("年齡必須是大於或等於 0 的整數！");
        return;
    }

    let age = Number(ageInput);

    // 第三部分：判斷年齡層
    let ageGroup = "";
    let ageAdvice = "";

    if (age < 13) {
        ageGroup = "兒童";
        ageAdvice = "保持好奇心，多閱讀、多學習，也要記得適度休息！";
    } else if (age < 20) {
        ageGroup = "青少年";
        ageAdvice = "勇敢探索自己的興趣，培養良好的學習習慣！";
    } else if (age < 40) {
        ageGroup = "青年";
        ageAdvice = "可以多嘗試不同的事物，累積經驗並設定目標！";
    } else if (age < 60) {
        ageGroup = "中年";
        ageAdvice = "持續學習新知識，也別忘記照顧自己的生活品質！";
    } else {
        ageGroup = "長者";
        ageAdvice = "保持活力、培養興趣，享受生活中的每一天！";
    }

    // 第四部分：選擇喜歡的科目
    let subject = prompt(
        "第三題：你最喜歡哪一個科目？\n" +
        "1. 數學\n" +
        "2. 英文\n" +
        "3. 電腦\n" +
        "4. 美術\n" +
        "5. 體育\n" +
        "請輸入 1 到 5"
    );

    if (subject === null) {
        alert("你已取消操作！");
        return;
    }

    let subjectName = "";
    let subjectMessage = "";

    if (subject.trim() === "1") {
        subjectName = "數學";
        subjectMessage = "你可能喜歡邏輯思考、計算與解決問題！";
    } else if (subject.trim() === "2") {
        subjectName = "英文";
        subjectMessage = "學習語言能幫助你認識不同文化與世界！";
    } else if (subject.trim() === "3") {
        subjectName = "電腦";
        subjectMessage = "你可以嘗試學習程式設計，創造自己的作品！";
    } else if (subject.trim() === "4") {
        subjectName = "美術";
        subjectMessage = "發揮你的創意，用不同方式表達自己的想法！";
    } else if (subject.trim() === "5") {
        subjectName = "體育";
        subjectMessage = "保持運動習慣，有助於培養體能與團隊精神！";
    } else {
        alert("科目選項錯誤，請重新開始！");
        return;
    }

    // 第五部分：選擇目前的心情
    let mood = prompt(
        "第四題：你現在的心情如何？\n" +
        "1. 開心\n" +
        "2. 普通\n" +
        "3. 有點累\n" +
        "4. 難過\n" +
        "請輸入 1 到 4"
    );

    if (mood === null) {
        alert("你已取消操作！");
        return;
    }

    let moodName = "";
    let moodMessage = "";

    if (mood.trim() === "1") {
        moodName = "開心";
        moodMessage = "太棒了！希望你繼續保持好心情，分享快樂！";
    } else if (mood.trim() === "2") {
        moodName = "普通";
        moodMessage = "平凡的一天也很珍貴，可以安排一件期待的小事！";
    } else if (mood.trim() === "3") {
        moodName = "有點累";
        moodMessage = "辛苦了！記得適度休息，讓自己恢復精神。";
    } else if (mood.trim() === "4") {
        moodName = "難過";
        moodMessage = "沒關係，可以給自己一點時間，也可以找信任的人聊聊。";
    } else {
        alert("心情選項錯誤，請重新開始！");
        return;
    }

    // 第六部分：計算年齡與 100 歲的差距
    let yearsLeft = 100 - age;
    let lifeMessage = "";

    if (age < 100) {
        lifeMessage = "距離 100 歲還有 " + yearsLeft + " 年。";
    } else {
        lifeMessage = "你已經達到或超過 100 歲，祝福你健康平安！";
    }

    // 第七部分：組合分析結果
    let resultHTML =
        '<div class="card border-info-subtle">' +
            '<div class="card-header bg-info-subtle text-info-emphasis">' +
                '<h2 class="h5 mb-0 fw-bold">🎉 你的個人分析結果</h2>' +
            '</div>' +
            '<div class="card-body">' +
                '<h3 class="h6 text-primary fw-bold">基本資料</h3>' +
                '<p><strong>姓名：</strong>' + escapeHTML(name) + '</p>' +
                '<p><strong>年齡：</strong>' + age + ' 歲</p>' +
                '<p><strong>年齡層：</strong>' + ageGroup + '</p>' +
                '<p><strong>生活建議：</strong>' + ageAdvice + '</p>' +
                '<hr>' +
                '<h3 class="h6 text-primary fw-bold">興趣分析</h3>' +
                '<p><strong>喜歡的科目：</strong>' + subjectName + '</p>' +
                '<p><strong>科目分析：</strong>' + subjectMessage + '</p>' +
                '<hr>' +
                '<h3 class="h6 text-primary fw-bold">心情分析</h3>' +
                '<p><strong>目前心情：</strong>' + moodName + '</p>' +
                '<p><strong>心情鼓勵：</strong>' + moodMessage + '</p>' +
                '<hr>' +
                '<h3 class="h6 text-primary fw-bold">生活小提醒</h3>' +
                '<p><strong>小小提醒：</strong>' + lifeMessage + '</p>' +
                '<p class="mb-0">謝謝你使用本互動系統，' +
                    escapeHTML(name) + '，祝你有美好的一天！</p>' +
            '</div>' +
        '</div>';

    // 第八部分：將結果顯示在網頁上
    const resultElement = document.getElementById("result");
    resultElement.className = "mb-0";
    resultElement.innerHTML = resultHTML;

    // 第九部分：顯示完成訊息
    alert("分析完成！請查看網頁中的分析結果。");
}

// 避免使用者輸入的姓名被當成 HTML 標籤
function escapeHTML(text) {
    return text.replace(/[&<>"']/g, function (char) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[char];
    });
}
