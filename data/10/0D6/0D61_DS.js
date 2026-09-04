// =========================================================================
// KHỐI DỮ LIỆU: 0D61 - Đúng sai
// Nguồn: SachBaiHoc_T10/Data-T10/DS10-CD3.3-HS-B2.tex và
// TK10-CD1.5-Thong-ke.tex (bài tập giáo khoa gốc, giữ nguyên nội dung).
// =========================================================================
window.dungSai0D61 = [
  {
    "id": "0D613DS1",
    "question": "Biết $\\mathrm{e}$ là một số vô tỉ và $2{,}7182&lt;\\mathrm{e}&lt;2{,}7183$. Lấy $\\mathrm{e} \\approx 2{,}71828$.  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số đúng là $2{,}71828$. Số gần đúng là $\\mathrm{e}$",
        "answer": false
      },
      {
        "text": "Sai số tuyệt đối của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ là $\\Delta_a \\leq 0{,}00008$",
        "answer": true
      },
      {
        "text": "Sai số tương đối của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ là $\\delta \\leq 0{,}0029 \\%$",
        "answer": true
      },
      {
        "text": "Số quy tròn của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ với độ chính xác $d$ tìm được ở trên là $2{,}7183$",
        "answer": true
      }
    ],
    "explain": "<br>- $\\mathrm{e}$ là số đúng; $2{,}71828$ là số gần đúng. Suy ra mệnh đề sai.<br>- Ta có: $2{,}7182&lt;\\mathrm{e}&lt;2{,}7183$ và có số gần đúng là $2{,}71828 $.<br>  Sai số tuyệt đối là $\\Delta_a=|\\mathrm{e}-2{,}71828| \\leq 0{,}00008=d$. Suy ra mệnh đề đúng.<br>- Do đó sai số tương đối là $\\delta \\leq \\dfrac{d}{a}=\\dfrac{0{,}00008}{2{,}71828}\\approx 0{,}0029 \\%$. Suy ra mệnh đề đúng.<br>- Số quy tròn của phép xấp xỉ $\\mathrm{e} \\approx 2{,}71828$ với độ chính xác $d=0{,}00008$ là $2{,}7183.$  Suy ra mệnh đề đúng."
  },
  {
    "id": "0D613DS2",
    "question": "Một hình lập phương có cạnh là $\\bar{a}=2{,}4 \\mathrm{~m}\\pm 1 \\mathrm{~cm}$.  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "$a=2{,}4 \\mathrm{m} \\text{ và } d=1 \\mathrm{~cm}$",
        "answer": true
      },
      {
        "text": "Sai số tương đối $\\delta_a$ của số gần đúng $a$ là $\\delta_a&lt;0{,}42 \\%$",
        "answer": true
      },
      {
        "text": "Số quy tròn của số $a$ với độ chính xác là $d$ là $2{,}4 \\mathrm{~m}$",
        "answer": true
      },
      {
        "text": "Gọi $\\bar{S}$ là diện tích toàn phần của hình lập phương. Giá trị $\\bar{S}$ nằm trong đoạn $[34{,}2726 ; 34{,}8486]$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có $\\bar{a}=2{,}4\\,(\\mathrm{m}) \\pm 1 (\\mathrm{cm})$ nên $a=2{,}4(\\mathrm{~m})$ và $d=1(\\mathrm{cm})$. Suy ra mệnh đề đúng.<br>- Đổi đơn vị $d=1\\,(\\mathrm{cm})=0{,}01 (\\mathrm{m})$.  Sai số tuyệt đối $\\delta_a$ của số gần đúng này là $\\delta_a&lt;\\dfrac{d}{|a|}=\\dfrac{0{,}01}{2{,}4}\\approx 0{,}42 \\%$.<br>  Suy ra mệnh đề đúng.<br>- Số quy tròn của số $a$ với độ chính xác là $d$ là $2{,}4(\\mathrm{m})$. Suy ra mệnh đề đúng.<br>- Ta có $\\bar{a}=2{,}4 \\mathrm{~m}\\pm 1 \\mathrm{~cm}\\Rightarrow 2{,}39 \\mathrm{~m}\\leq \\bar{a}\\leq 2{,}41 \\mathrm{~m}$.  Khi đó diện tích toàn phần của hình lập phương là $S=6\\cdot (\\bar{a})^2$ nên $34{,}2726 \\leq \\bar{S}\\leq 34{,}8486$.  Suy ra mệnh đề đúng."
  },
  {
    "id": "0D612DS3",
    "question": "Hình chữ nhật có độ dài các các cạnh $x=2 \\mathrm{m} \\pm 1 \\mathrm{~cm}, y=6 \\mathrm{m} \\pm 2 \\mathrm{~cm}$.  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Giá trị $x$ nằm trong đoạn $[1 ; 3]$ và giá trị của $y$ nằm trong đoạn $[4 ; 8]$",
        "answer": true
      },
      {
        "text": "Giá trị diện tích hình chữ nhật nằm trong đoạn $[11{,}9002 ; 12{,}1002]$",
        "answer": true
      },
      {
        "text": "Sai số tuyệt đối của diện tích là $\\Delta S \\leq 0{,}1$",
        "answer": false
      },
      {
        "text": "Sai số tương đối của diện tích là $\\dfrac{\\Delta S}{|S|}\\leq 8{,}3 \\%$",
        "answer": false
      }
    ],
    "explain": "<br>- $x=2 \\mathrm{m} \\pm 1 \\mathrm{~cm}\\Rightarrow 2-0{,}01(m) \\leq x \\leq 2+0{,}01(m) \\Rightarrow 1{,}99 \\leq x \\leq 2{,}01$.<br>  $y=6 \\mathrm{m} \\pm 2 \\mathrm{~cm}\\Rightarrow 6-0{,}02 (\\mathrm{m}) \\leq y \\leq 6+0{,}02(m) \\Rightarrow 5{,}98 \\leq y \\leq 6{,}02$.<br>- Vì $\\left [1{,}99 ; 2{,}001\\right ] \\subset[1 ; 3]$ và $\\left [5{,}98 ; 6{,}02\\right ] \\subset\\left [4 ; 8\\right ]$. Suy ra mệnh đề đúng.  Diện tích hình chữ nhật là  $  S_0=x_0 \\cdot y_0=2\\cdot 6=12 \\mathrm{~m}^2.  $  Cận trên của diện tích  $  (2+0{,}01)(6+0{,}02)=12{,}1002.  $   Cận dưới của diện tích  $  (2-0{,}01)(6-0{,}02)=11{,}9002.  $  $\\Rightarrow 11{,}9002 \\leq S \\leq 12{,}1002$. Suy ra mệnh đề đúng.<br>- Sai số tuyệt đối của diện tích là  $\\Delta S=\\left|S-S_0\\right| \\leq 0{,}1002$. Suy ra mệnh đề sai.<br>- Sai số tương đối của diện tích là  $\\dfrac{\\Delta S}{|S|}\\leq \\dfrac{0{,}1002}{12}\\approx 8{,}35 \\%$. Suy ra mệnh đề sai."
  },
  {
    "id": "0D613DS4",
    "question": "Quy tròn số $\\bar{a}=\\dfrac{1}{3}=0{,}33333 \\ldots$ đến hàng phần trăm.  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số gần đúng là $a=0{,}33$",
        "answer": true
      },
      {
        "text": "Độ chính xác $d=0{,}1$",
        "answer": false
      },
      {
        "text": "Sai số tuyệt đối là $\\Delta_a&lt;0{,}005$",
        "answer": true
      },
      {
        "text": "Sai số tương đối là $\\delta_a \\leq 0{,}1 \\%$",
        "answer": true
      }
    ],
    "explain": "<br>- Quy tròn số $\\bar{a}=\\dfrac{1}{3}=0{,}33333 \\ldots$ đến hàng phần trăm, ta được số gần đúng là $a=0{,}33$. Suy ra mệnh đề đúng.<br>- Do $a&lt;\\bar{a}&lt;0{,}335 \\Rightarrow|\\bar{a}-a|&lt;0{,}005$ nên độ chính xác $d=0{,}005$. Suy ra mệnh đề sai.<br>- Ta có $\\Delta_a=|\\bar{a}-a|&lt;0{,}005$ nên sai số tuyệt đối $\\Delta_a&lt;0{,}005$. Suy ra mệnh đề đúng.<br>- Sai số tương đối $\\delta_a \\leq \\dfrac{0{,}005}{1{,}33}\\approx 0{,}4 \\%$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D613DS5",
    "question": "Cho số gần đúng $a=4536$ với độ chính xác $d=100$.  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số gần đúng của $a$ với độ chính xác $d$ là $ 5000 $",
        "answer": false
      },
      {
        "text": "Số quy tròn của $a$ với độ chính xác $d$ là $5000 $",
        "answer": true
      },
      {
        "text": "Sai số tuyệt đối là $\\Delta_a$ của số quy tròn của số $a$ với độ chính xác $d$ là $\\Delta_a&lt;564$",
        "answer": true
      },
      {
        "text": "Sai số tương đối là $\\delta_a$ của số quy tròn của số $a$ với độ chính xác $d$ là $\\delta_a&lt;0{,}11 \\%$",
        "answer": false
      }
    ],
    "explain": "<br>- Hàng của chữ số khác $0$ đầu tiên của $d=100$ là hàng trăm nên quy tròn $a$ đến hàng trăm ta được số gần đúng của số $a=4536$ là $4500$. Suy ra mệnh đề sai.<br>- Hàng của chữ số khác $0$ đầu tiên của $d=100$ là hàng trăm nên quy tròn $a$ đến hàng nghìn ta được số quy tròn của số $a=4536$ là $5000$. Suy ra mệnh đề đúng.<br>- Vì $4536-100&lt;\\bar{a}&lt;4536+100 \\Leftrightarrow 4436&lt;\\bar{a}&lt;4636$  Nên $4436-5000&lt;\\bar{a}-5000&lt;4636-5000 \\Leftrightarrow \\Delta_e&lt;564$. Suy ra mệnh đề đúng.<br>- Sai số tương đối là $\\delta_a$ của số quy tròn của số $a$ với độ chính xác $d$ là  $\\delta_a&lt;\\dfrac{564}{5000}\\approx 11{,}28 \\%$. Suy ra mệnh đề sai."
  },
  {
    "id": "0D611DS6",
    "question": "Đường kính của một đồng hồ cát là $8{,}52 \\mathrm{~m}$. Cho giá trị gần đúng của $\\pi=3{,}141592654$. Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Giá trị gần đúng của $\\pi$ chính xác đến hàng phần nghìn là $3{,}142$",
        "answer": true
      },
      {
        "text": "Chu vi đồng hổ cát là $26{,}8 \\mathrm{~m}$",
        "answer": false
      },
      {
        "text": "Bán kính của đồng hồ cát chính xác đến hàng phần mười là $4{,}3$",
        "answer": true
      },
      {
        "text": "Dùng giá trị gần đúng của $\\pi=3{,}141592654$ chính xác đến hàng phần trăm để tính chu vi của đồng hồ. Kết quả chính xác đến hàng phần chục là $26{,}8 \\mathrm{~m}$",
        "answer": true
      }
    ],
    "explain": "<br>- Làm tròn số gần đúng $\\pi$ đến hàng phần nghìn ta được $3{,}142$. Suy ra mệnh đề đúng.<br>- Chu vi đồng hồ cát là $2 \\pi r=8{,}52\\cdot 3{,}141592654=26{,}76636941 \\mathrm{~m}$. Suy ra mệnh đề sai.<br>- Bán kính của đồng hồ cát là $r=\\dfrac{8\\cdot 52}{2}=4{,}26 \\mathrm{~m}$. Làm tròn đến hàng phần mười ta được $r=4{,}3 m$. Suy ra mệnh đề đúng.<br>- Dùng giá trị gần đúng của $\\pi=3{,}141592654$ chính xác đến hàng phần trăm là $\\pi=3{,}14$.  Chu vi đồng hồ cát là $C=\\pi d=3{,}14\\cdot 8{,}52=26{,}7528 \\mathrm{~m}$. Giá trị gần đúng của chu vi chính xác đến hàng phần chục là $26{,}8 \\mathrm{~m}$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D612DS7",
    "question": "Có $3$ học sinh An , Ba, Na lần lượt đo chiều cao của mình. Bạn An đo được là $168 \\mathrm{~cm}\\pm 0{,}5 \\mathrm{~cm}$. Bạn Ba đo được là $181 \\mathrm{~cm}\\pm 2 \\mathrm{~cm}$. Bạn Na đo được là $148 \\mathrm{~cm}\\pm 1 \\mathrm{~cm}$. Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Phép đo của bạn An có sai số tương đối là $\\dfrac{0{,}5}{168}$",
        "answer": true
      },
      {
        "text": "Phép đo của bạn Ba có sai số tương đối là $\\dfrac{-2}{181}$",
        "answer": false
      },
      {
        "text": "Phép đo của bạn Na có sai số tương đối tính chính xác đến hàng phần chục ngàn là $0{,}0068 $",
        "answer": true
      },
      {
        "text": "Trong ba phép đo trên, bạn An có phép đo chính xác nhất",
        "answer": true
      }
    ],
    "explain": "<br>- Phép đo của bạn An có sai số tương đối là $\\delta_1 \\leq \\dfrac{0{,}5}{168}$. Suy ra mệnh đề đúng.<br>- Phép đo của bạn Ba có sai số tương đối là $\\delta_2 \\leq \\dfrac{2}{181}$. Suy ra mệnh đề sai .<br>- Phép đo của bạn Na có sai số tương đối là $\\delta_3 \\leq \\dfrac{1}{148}=0{,}0067567568$. Làm tròn đến hàng phần chục ngàn ta được $0{,}0068$. Suy ra mệnh đề đúng.<br>- Ta có $\\delta_1 \\leq \\dfrac{0,5}{168}\\approx 0{,}00298 ; \\delta_2 \\leq \\dfrac{2}{181}=0{,}01105 ; \\delta_3 \\leq \\dfrac{1}{148}=0{,}0067567568$.  Từ đó ta thấy phép đo của bạn An chính xác nhất. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D612DS1",
    "question": "Kết quả đo chiểu dài của một thửa đất là $75{,}4 \\mathrm{~m}\\pm 0{,}5 \\mathrm{~m}$ và đo chiều dài của một cây cầu là $466{,}2 \\mathrm{~m} \\pm 0{,}5 \\mathrm{~m}$. Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Đối với phép đo thửa đất, sai số tương đối không vượt quá $0{,}663 \\%$",
        "answer": true
      },
      {
        "text": "Đối với phép đo thửa đất, có sai số tương đối: $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{75{,}4}=\\dfrac{5}{754}$",
        "answer": true
      },
      {
        "text": "Đối với phép đo chiều dài cây cầu, có sai số tương đối lớn hơn $\\dfrac{5}{4662}\\approx 0{,}107 \\%$",
        "answer": false
      },
      {
        "text": "Phép đo cây cầu có độ chính xác cao hơn phép đo chiều dài của một thửa đất",
        "answer": true
      }
    ],
    "explain": "<br>- Đối với phép đo thửa đất, tỉ số $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{75{,}4}=\\dfrac{5}{754}$ (tức là sai số tương đối không vượt quá $\\dfrac{5}{754}\\approx 0{,}663 \\%$ ). Suy ra mệnh đề đúng.<br>- Đối với phép đo thửa đất, có sai số tương đối $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{75{,}4}=\\dfrac{5}{754}$. Suy ra mệnh đề đúng.<br>- Đối với phép đo chiều dài cây cầu, tỉ số $\\dfrac{d}{|a|}=\\dfrac{0{,}5}{466{,}2}=\\dfrac{5}{4662}$ (nghĩa là sai số tương đối không vượt quá $\\left.\\dfrac{5}{4662}\\approx 0{,}107 \\%\\right)$. Suy ra mệnh đề sai.<br>- Ta có $\\dfrac{5}{754}&gt;\\dfrac{5}{4662}$ nên phép đo cây cầu có độ chính xác cao hơn. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D612DS2",
    "question": "Một công ty sử dụng dây chuyền $A$ để đóng vào bao với khối lượng mong muốn là $5 \\mathrm{~kg}$. Trên bao bì ghi thông tin khối lượng là $5 \\pm 0{,}2 \\mathrm{~kg}$. Gọi $\\bar{a}$ là khối lượng thực của một bao gạo do đây chuyền $A$ đóng gói. Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số đúng là $a=0{,}2$",
        "answer": false
      },
      {
        "text": "Số gần đúng là $\\bar{a}=5{,}2$",
        "answer": false
      },
      {
        "text": "Độ chính xác là $d=0{,}2$",
        "answer": true
      },
      {
        "text": "Giá trị của $\\bar{a}$ nằm trong đoạn $[4{,}8 ; 5{,}2]$",
        "answer": true
      }
    ],
    "explain": "<br>- Theo định nghĩa số đúng là $a=5$. Suy ra mệnh đề sai.<br>- Số gần đúng là $\\bar{a}=5{,}2$. Suy ra mệnh đề sai. Vì Trong trường hợp này, thông tin trên bao bì ghi khối lượng là $5 \\pm 0{,}2 \\mathrm{~kg}$, điều này có nghĩa là khối lượng của sản phẩm có thể dao động từ $4{,}8 \\mathrm{~kg}$ đến $5{,}2 \\mathrm{~kg}$. Số gần đúng $\\bar{a}$ trong trường hợp này thường được hiểu là giá trị trung bình hoặc giá trị dự kiến của sản phẩm, không phải là giá trị cao nhất hoặc thấp nhất có thể.<br>   Do đó, việc cho rằng $\\bar{a} = 5{,}2$ là sai bởi vì $5{,}2 \\mathrm{~kg}$ không phải là giá trị trung bình, mà là giá trị cao nhất có thể trong khoảng cho phép. Giá trị $\\bar{a}$ hợp lý nhất trong trường hợp này phải là $5 \\mathrm{~kg}$, vì nó chính là giá trị mà người sản xuất dự định làm giá trị trung tâm của khoảng dao động cho phép.<br>- Độ chính xác là $d=0{,}2$. Suy ra mệnh đề đúng.<br>- Giá trị của $\\bar{a}$ nằm trong đoạn $[4{,}8 ; 5{,}2]$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D611DS1",
    "question": "Cho ba giá trị gần đúng của $\\dfrac{3}{7}$ là $0{,}429$; $0{,}4$ và $0{,}42$.   Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Công thức đánh giá sai số tuyệt đối là $\\Delta=|\\bar{a}-a|$",
        "answer": true
      },
      {
        "text": "Xét số gần đúng $0{,}429$ ta có $\\Delta_1=\\left|\\dfrac{3}{7}-0{,}429\\right|&lt;0{,}0005$",
        "answer": true
      },
      {
        "text": "Xét số gần đúng $0{,}4$ ta có $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}4\\right|&lt;0{,}03$",
        "answer": true
      },
      {
        "text": "Xét số gần đúng $0{,}42$ ta có $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}42\\right|&lt;0{,}009$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta sử dụng công thức đánh giá sai số tuyệt đối là $\\Delta=|\\bar{a}-a|$. Suy ra mệnh đề đúng.<br>- Xét số gần đúng $0{,}429$ ta có: $\\Delta_1=\\left|\\dfrac{3}{7}-0{,}429\\right|&lt;0{,}0005$. Suy ra mệnh đề đúng.<br>- Xét số gần đúng $0{,}4$ ta có: $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}4\\right|&lt;0{,}03$. Suy ra mệnh đề đúng.<br>- Xét số gần đúng $0{,}42$ ta có: $\\Delta_2=\\left|\\dfrac{3}{7}-0{,}42\\right|&lt;0{,}009$. Suy ra mệnh đề đúng."
  }
];
