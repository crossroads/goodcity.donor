`import Ember from "ember"`
`import SharedTranslationsZhTw from "shared-goodcity/locales/zh-tw/translations"`

I18nTranslationsZhTw =
  Ember.$.extend true, SharedTranslationsZhTw,
    "socket_offline_error": "正在嘗試連線…"

    "menu":
      "support_gc": "Support GoodCity!"
      "faq": "常見問題"
      "feedback": "回饋與支援"
      "rate": "Rate on iTunes"

    "application":
      "app_menu" : "目錄"
      "my_offers" : "我的捐獻"

    "support":
      "amount": "Amount"
      "proceed": "Proceed"
      "thanks": "Thank you for your donation."
      "error": "There is an error with payment service. Please try again later."

    "tour":
      "step1.title" : "1. 圖片上傳及說明"
      "quality_items" : "物資狀況"
      "we_receive" : "我們收到的物資"
      "step2.title" : "2. 即時審查"
      "chat" : "假如我們有任何疑問"
      "questions": "我們可以再詳談"
      "step3.title" : "3. 運輸安排"
      "accepted_items" : "已接受的物資："
      "quick_easy" : "簡易又快捷"
      "step4.title" : "4. 幫助到有需要的人"
      "make_goodcity" : "這個城市怎樣會變得更美好？"
      "faq" : "常見問題"

    "register":
      "hk_only" : "電話號碼 # （只限香港）"
      "given_name" : "名字"
      "family_name" : "姓氏"
      "districts" : "地區"
      "register" : "登記"
      "login" : "登入"
      "fill_all_fields": "請填妥所有欄目"
      "use_of_personal_info": "我們如何使用你的個人資料"
      "phone_number": "電話號碼"
      "john": "John"
      "doe": "Doe"
      "agree_toc": "By using GoodCity.HK you are agreeing to be bound by these"
      "terms": "terms of use"

    "offers":
      "index":
        "new_donation" : "新的捐獻"
        "my_offers" : "我的捐獻"
        "total_items" : "物品總數： {{itemCount}}"
        "see_more" : "更多..."
        "unread_messages" : "未讀信息： {{unreadMessagesCount}}"
        "complete_offer" : "完成此項捐獻"
        "in_review" : "正在審查"
        "awaiting_review" : "等候審查"
        "arrange_transport" : "請安排運輸"
        "closed" : "已完成"
        "received" : "已收到"
        "receiving": "正在接收"
        "van_booked" : "已預約貨車"
        "van_confirmed": "已確認貨車安排"
        "picked_up": "已經提取"
        "drop_off" : "親身送到十字路會"
        "alternate" : "已預約十字路會收集站"
        "awaiting_driver" : "正在等候司機的資料"
        "driver_name" : "司機姓名"
        "phone" : "電話"
        "vehicle" : "車輛"
        "approved" :"已接受的物品"
        "rejected" :"不接受的物品"
        "donations": "捐獻"
        "inactive": "暫停：請重新提交"
        "add_item": "Add Item"
        "new_offer": "New Offer"
        "new_offer_message": "You have an offer still in progress. Are you starting a new offer which will be transported separately or should we add this item to your existing offer?"

    "offer":
      "camera": "照相機"
      "delete": "刪除"
      "messages": "信息"
      "details" : "捐獻細節"
      "no_items" : "此類別還沒有任何捐獻。快作出您第一次的捐獻吧！",
      "confirm":
        "heading" : "確認"
        "notice": "由於儲存空間有限，社區的需要亦經常改變，<br> 我們可能無法接收部分物資，非常抱歉！ <br>"
        "review": "我們專業的義工團隊 <br> 會馬上審查您捐獻的物資"
        "thank": "非常感謝！"
        "next" : "確認！下一步"
      "submit":
        "heading": "物資出售"
        "message": "有時候，要幫助窮困人士， <br> 最好的方法就是出售捐出的物品。 <br> 您是否同意出售物品？ <br> "
      "notifications":
        "title": "Notifications"
        "alert_updates": "Would you like to be alerted when we have questions or status updates for your offer?"
        "no": "No Thanks"
        "notify": "Notify Me"

      "index":
        "item_count" : "捐出物品 ({{itemCount}}) 件"
        "add_item" : "加入物品"
        "add_items" : "捐出另一件物品"
        "confirm" : "完成，下一步"
        "review" : "審查狀況"
        "cancel" : "取消捐獻"
        "description" : "說明"
        "condition" : "物資狀況"

      "offer_details" :
        "heading" : "捐獻細節"
        "submitted_status": "我們正在審查您捐出的物品"
        "in_review_status": "您捐出的物品正由 {{firstName}}審查"
        "is_collection": "收集站"
        "is_drop_off": "接收地點"
        "is_gogovan_order": "已預約貨車"
        "driver_completed": "司機已確認預約"
        "is_gogovan_confirm": "已確認貨車安排"
        "reviewed_message": "審查已完成！"
        "please": "請"
        "transport": "安排運輸"
        "offer_messages": "一般信息"
        "accepted": "已接納"
        "not_needed": "不需要"
        "closed_offer_message": "此項捐獻已結束。不再需要此類物資，請見諒。"
        "offer_received": "已收到捐獻"
        "offer_start_receiving": "{{firstName}} {{lastName}} began receiving items"
        "crossroads_booking_alert" : "我們會盡快處理新增的物品。我們的收集團隊通常只會接收已被審查及接受的物資。<br><br>如我們接受了大型物件，我們可能會取消及重新安排運輸。"
        "ggv_booking_alert": "我們會盡快處理新的物品，請不要送出未被接受的物資。<br><br>如果你需要更改運輸安排以容納更多的物品，請按運送詳情。"

      "transport_details" :
        "heading": "運送詳情"
        "no_items": "此項捐獻 <br> 並沒有需要運送的物資"
        "arrange_transport": "安排運輸"
        "wait_for_transport": "審查完成後， <br> 隨即可以安排運送物資"
        "accepted_items_count": "目前已接納的物資數目為 ({{acceptedCount}})"
        "goods_received" : "收到物資的日期"
        "thank": "非常感謝"
        "receiving": "Your offer is currently being received."

      "display_joyride" :
        "camera": "點選 <i class='fa fa-camera'></i> 加入更多項目"
        "delete": "點選 <i class='fa fa-trash'></i> 取消捐獻"
        "all_done_next": "加入最後一項物品後，請繼續下一步"
        "first_item": "點選任何物品以檢閱或修改資料"

      "cancel":
        "title": "取消捐獻"
        "confirm_ggv_cancel": "GoGoVan確認預約取消後，您可以取消是次捐獻"
        "cancel_offer": "取消捐獻"

    "item":
      "item_details" : "物資細節"
      "donor_description": "描述： {{donorDescription}}"
      "condition": "狀況： {{condition}}"
      "cancel" : "刪除項目"
      "edit" : "修改項目"
      "submitted_status": "此項物品正在等候審查"
      "in_review_status": "此項物品的審查已經完成"
      "accepted_status": "此項物品已被接納"
      "rejected_status": "此項物品不被接納"
      "cancel_last_item_confirm": "取消最後一項物品即會取消此項捐獻，您是否確定？"

      "messages":
        "info_text1": "審查物品時，如果有任何問題，我們會在下面的對話框向您查詢"
        "info_text2": "如您希望加添任何對捐獻物品的描述，請在此留言"

    "faqs":
      "title": "常見問題"
      "description" : "「妥當配物資，快捷助我城」為好人好市之目標。"
      "questions":
        "question1": "好人好市接收甚麼類型的物資？"
        "question2": "審查員根據甚麼標準接收物資？"
        "question3": "有哪幾種貨運方法？"
        "question4": "我可以邀請別人使用好人好市應用程式嗎？"
        "question5": "甚麼人受惠於這些物資呢？"
        "question6": "身在在海外也可以捐出物資嗎？"
        "question7": "為何選址香港？"

      "answers":
        "answer1":
          "good_condition": "我們重視物資的狀況是否良好，以示對慈善團體及受惠人士的尊重。"

          "useful": "使用好人好市，只需幾分鐘的審查，您就能知道您捐出的物資是否能夠幫助別人。常見的物資有傢俱、家庭用品、電腦、電器等。"

        "answer2":
          "review": "我們的審查員會考慮當時的供求情況，並考慮不同物資可能帶來的限制，例如是否符合品質要求、大小限制、安全標準，運輸會否有困難，是否符合當地電壓、兼容、設計的要求等。"

          "messaging": "審查員會透過好人好市應用程式裏的通訊功能，查詢有關捐贈物資的資料。這樣，您就不用填寫複雜冗長的表格。大部分的情況中，只要有相片及簡短的描述就足夠了。"

          "supervisors": "審查員亦能夠即時知會專業的管理員，他們大多擁有五年或以上在香港處理捐贈物資的經驗。他們處理過很多罕見的物資捐獻，例如是商業用披薩烤箱、十萬件全新西裝、大量假花裝飾等。面對這些古怪又實用的物資，他們非常清楚該如何處理。"

        "answer3":
          "gogovan": "<b>租用貨車，快捷妥當：</b> 通過我們的應用程式，您能夠預約貨車，這是運送物資的最快方法。您直接付款給司機。"

          "drop_off": "<b>親自運送：</b> 通過我們的應用程式，您能夠預約時間，將物資親自送到我們位於屯門的辦公室。"

        "answer4": "社工及慈善機構員工能使用好人好市的特別版網站和手機程式，目前只有受邀機構和人士可以使用特別版程式，但我們希望最終能夠開放給香港所有的註冊社工及慈善機構使用。"

        "answer5":
          "title": "我們幫助不同社群的需要："
          "community": "社區/文化團體"
          "drug": "濫藥更新人士"
          "education": "教育機構"
          "elderly": "長者"
          "environmental": "環保團體"
          "families": "有需要的家庭"
          "medical_n_hospitals": "醫護診所及醫院"
          "orphanages": "孤兒院"
          "special_needs": "特殊需要人士"
          "risk": "高危人士"
          "rehabilitation": "復康服務"
          "service_orgs": "服務機構"
          "social_enterprise": "社會企業"
          "sports": "殘疾人士體育計劃"
          "suicide_prevention": "防止自殺服務"
          "domestic_workers": "家傭"
          "new_arrivals": "新移民"
          "women": "婦女"
          "vocational_training": "職業培訓計劃"
          "animals_welfare": "動物福利"

        "answer6": "不可以。但如果您以公司身份從海外捐出大量物資，您就能夠使用我們的另一服務："
        "global_hand" : "環球援手"

        "answer7":
          "hk": "香港的地理位置非常獨特，非常適合處理慈善物資捐獻，是全世界最有效率的地方，因為：人口密度高，相對富裕，智能電話極普及，慈善工作井然有序，公民意識亦逐漸成型。"

          "crossroads": "十字路會自1995年開始於香港處理各界捐贈的物資，至今發展出各種網上服務（如business.un.org）。這讓我們成為一個獨特的機構，擔當着十字路口的角色，聯繫捐贈物資的供求。"

    # The following are for the I18n example template and can be removed soon.
    "i18nexample.items.heading": "物品"
    "i18nexample.item.title.one": "一件物品"
    "i18nexample.item.title.other": "物品數量為 {{count}} 件"
    "i18nexample.item.new.title": "新物品"
    "i18nexample.i18n.pluralisation": "Pluralisation"

`export default I18nTranslationsZhTw`
