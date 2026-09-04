// =========================================================================
// KHỐI DỮ LIỆU: 1D11 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 5), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D11 = [
  {
    "id": "1D113TL1",
    "question": "Với mọi góc $\\alpha$, biểu thức $A=\\cos\\left( \\alpha - \\dfrac{\\pi}{2}\\right) + \\cos (\\alpha - \\pi)$ nhận giá trị bằng bao nhiêu?",
    "answer": "0",
    "explain": "Ta có $A=\\cos\\left( \\alpha- \\dfrac{\\pi}{2}\\right) + \\cos\\left( \\alpha - \\pi\\right) = \\cos\\left( \\dfrac{\\pi}{2}-\\alpha\\right) - \\cos(\\pi -\\alpha)=\\cos\\alpha - \\cos\\alpha = 0$."
  },
  {
    "id": "1D113TL2",
    "question": "Tập hợp các giá trị của tham số $m$ để phương trình $\\cos(2x) + 2 = m$ có nghiệm là $[a;b]$. Khi đó  $a + b$ bằng bao nhiêu?",
    "answer": "4",
    "explain": "Ta có $\\cos(2x) + 2 = m \\Leftrightarrow \\cos(2x) = m - 2$ có nghiệm khi và chỉ khi<br>  $-1\\le m - 2 \\le 1 \\Leftrightarrow 1 \\le m \\le 3 \\Leftrightarrow m \\in [1;3].$<br>  Vậy $a + b = 4$."
  },
  {
    "id": "1D116TL3",
    "question": "Một chiếc đu quay hình tròn được thiết kế với đường kính $80$\\,m để có thể ngắm toàn cảnh thành phố. Các kĩ sư đã tính toán bố trí cứ cách nhau $3$\\,m trên vành tròn của xích đu thì gắn $1$ ghế ngồi. Hỏi có thể gắn tối đa bao nhiêu ghế trong một cung tròn của đu quay có số đo $60^\\circ$ (không làm tròn các phép tính trung gian, làm tròn kết quả cuối cùng đến hàng đơn vị)?",
    "answer": "14",
    "explain": "Bán kính của chiếc đu quay là $R=\\dfrac{80}{2}=40$\\,m.<br>  Cung tròn $60^\\circ$ có số đo theo đơn vị radian là $\\alpha=\\dfrac{60}{180}\\cdot\\pi=\\dfrac{\\pi}{3}$.<br>  Độ dài của cung tròn có số đo $60^\\circ$ là $\\ell=R\\cdot\\alpha=\\dfrac{40\\pi}{3}$.<br>  Số cung tròn có độ dài $3$\\,m có thể tạo ra là $n=\\dfrac{\\ell}{3}=\\dfrac{40\\pi}{9}\\approx13{,}9$.<br>  Do cách $3$\\,m thì có một ghế ngồi nên có thể đặt tối đa $14$ ghế lên cung tròn đề bài yêu cầu."
  },
  {
    "id": "1D114TL4",
    "question": "Một đường tròn có bán kính $30$ m. Độ dài của cung trên đường tròn đó có số đo là $\\dfrac{2\\pi}{7}$ bằng bao nhiêu mét (Kết quả làm tròn đến hàng phần chục)?",
    "answer": "26,9",
    "explain": "Ta có:  \\[ l = 30 \\cdot \\dfrac{2\\pi}{7} = \\dfrac{60\\pi}{7} \\approx 26{,}9 \\text{ (m)}. \\]"
  },
  {
    "id": "1D116TL5",
    "question": "Một chiếc đèn trang trí hình tròn được chia thành $40$ phần bằng nhau, mỗi phần có một bóng đèn LED nhỏ. Khi bật chế độ hiệu ứng, các bóng đèn này sẽ sáng lần lượt. Nếu hiệu ứng làm sáng $5$ bóng đèn liên tiếp, thì tổng số đo góc (tính theo độ) mà $5$ bóng đèn đó chiếm trên vòng tròn là bao nhiêu?  <br><img src=\"data/11/1D1/im1D1/1D11_tikz_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "45",
    "explain": "Một vòng tròn tương ứng với góc $360^\\circ$. <br>  Vì vòng tròn được chia thành $40$ phần bằng nhau nên số đo góc của mỗi phần là  $ \\dfrac{360^\\circ}{40} = 9^\\circ $  Tổng số đo góc của $5$ bóng đèn liên tiếp (tương ứng với $5$ phần) là  $ 5 \\times 9^\\circ = 45^\\circ. $"
  },
  {
    "id": "1D114TL6",
    "question": "Tính độ dài cung trên đường tròn có bán kính bằng $10$ cm và số đo $\\dfrac{\\pi}{101}$ (rad) (<em>đơn vị cm, kết quả làm tròn đến hàng phần chục</em>).",
    "answer": "0,3",
    "explain": "Độ dài cung tròn $l = R\\alpha= 10 \\cdot \\dfrac{\\pi}{101} \\approx 0{,}3$ cm."
  },
  {
    "id": "1D116TL7",
    "question": "Đèo Hải Vân là ranh giới tự nhiên của thành phố Đà Nẵng và tỉnh Thừa Thiên Huế. Trong kiến trúc, đường hầm là hình nửa đường tròn để có thể chịu lực tốt. Trong hình bên, cổng Đèo Hải Vân được ghép bởi sáu cung vật liệu tốt chịu lực tốt hai bên tạo thành các cung $AB$, $BC$, $CD$, $EF$, $FG$, $GH$ bằng nhau và một cung vật liệu tốt chốt ở đỉnh. Cho $AH=18$ m, $BK=4{,}3$ m. Biết rằng hình chữ nhật $MNFC$ có $MN$ là chiều rộng của hai làn xe, $CM$ là chiều cao cho phép của các xe lưu thông (Xem hình minh họa). Tính chiều cao $CM$ cho phép của các xe lưu thông (<em>làm tròn đến một chữ số thập phân</em>).  <br><img src=\"data/11/1D1/im1D1/1D11_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "7,6",
    "explain": "Vì $AH=18$ m nên $OA=9$ m.<br>  Xét $\\triangle OBK$ có $\\sin \\alpha=\\dfrac{BK}{OA}=\\dfrac{4{,}3}{9}\\Rightarrow \\cos\\alpha=\\sqrt{1-\\left(\\dfrac{4{,}3}{9}\\right)^2}=\\sqrt{\\dfrac{6251}{8100}}$.<br>  Xét $\\triangle OMC$ có $MC=OC\\cdot \\sin 2\\alpha=2OC\\cdot \\sin \\alpha\\cdot \\cos \\alpha=2\\cdot9\\cdot \\dfrac{4{,}3}{9}\\cdot\\sqrt{\\dfrac{6251}{8100}} \\approx 7{,}6$ m."
  },
  {
    "id": "1D116TL8",
    "question": "Một bánh xe đạp có đường kính $50$ cm (kể cả lốp). Nếu chạy với vận tốc $12$ km/h thì trong $21$\\,s bánh xe quay được bao nhiêu vòng (làm tròn đến hàng đơn vị)?",
    "answer": "45",
    "explain": "Đường kính bánh xe là $0{,}5$\\,m nên chu vi là  \\[  C=\\pi\\cdot0{,}5=0{,}5\\pi\\ \\text{(m)}.  \\]  Vận tốc $12$ km/h $= \\dfrac{12\\,000}{3\\,600}= \\dfrac{10}{3}$ m/s.  Quãng đường đi trong $21$\\,s là  \\[  s=\\dfrac{10}{3}\\cdot21=70\\ \\text{m}.  \\]  Số vòng quay của bánh xe là  \\[  n=\\dfrac{70}{0{,}5\\pi}=\\dfrac{140}{\\pi}\\approx44{,}56.  \\]  Làm tròn đến hàng đơn vị, bánh xe quay được $45$ vòng."
  },
  {
    "id": "1D116TL9",
    "question": "Trên bức tường của một trường mẫu giáo có vẽ hình phiếu bé ngoan như hình vẽ bên dưới. Cô giáo muốn mua dây kim tuyến bao quanh phần cánh hoa (phần nét liền), biết rằng các cánh hoa là các cung tròn có bán kính bằng nhau và có tâm cách điểm $O$ một khoảng $45$ cm, các giao điểm của các cung tròn cách $O$ một khoảng $40$ cm. Em hãy giúp cô tính xem cần mua bao nhiêu mét dây kim tuyến? (làm tròn kết quả đến hàng phần trăm).  <br><img src=\"data/11/1D1/im1D1/1D11_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "answer": "5,51",
    "explain": "Bông hoa có $5$ cánh bằng nhau và mỗi góc ở tâm $O$ của mỗi cánh hoa là $\\left(\\dfrac{360}{5}\\right)^\\circ = 72^\\circ$. <br>  Suy ra $\\widehat{MOI}=36^\\circ$. Và $IM^2=OM^2+OI^2-2OM\\cdot OI\\cdot \\cos 36^\\circ=3\\,625 -3\\,600 \\cos 36^\\circ$.<br>  Hay $IM=\\sqrt{3\\,625 -3\\,600 \\cos 36^\\circ}$.<br>   Xét $\\Delta OMI$, ta có $\\dfrac{OM}{\\sin \\widehat{MIO}}=\\dfrac{IM}{\\sin 36^\\circ}$, suy ra $\\sin \\widehat{MIO}=\\dfrac{40\\cdot \\sin 36^\\circ}{IM}$.<br>  Đặt $\\widehat{MIO}=a^\\circ$, với $0&lt;a&lt;90$ và $\\sin a^\\circ=\\dfrac{40\\cdot \\sin 36^\\circ}{IM}$. Khi đó:<br>  Chiều dài của một cánh hoa là $l=\\dfrac{\\pi \\cdot IM \\cdot (360-2\\cdot a)}{180}$ (cm).<br>  Chiều dài của $5$ cánh hoa là $5l=5\\cdot \\dfrac{\\pi \\cdot IM \\cdot (360-2\\cdot a)}{180}\\approx 5{,}51$ (m).<br>"
  },
  {
    "id": "1D114TL10",
    "question": "Cho cung tròn có số đo $135^\\circ$ nằm trong đường tròn có đường kính $20$ cm. Độ dài cung tròn đã cho bằng bao nhiêu cm? (kết quả làm tròn đến hàng phần chục).",
    "answer": "23,6",
    "explain": "<br><img src=\"data/11/1D1/im1D1/1D11_tikz_021.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Bán kính đường tròn là $R = \\dfrac{20}{2} = 10$ cm.<br>  Số đo góc theo radian: $\\alpha = 135 \\cdot \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{4}$.<br>  Độ dài cung tròn: $l = R\\alpha = 10 \\cdot \\dfrac{3\\pi}{4} = \\dfrac{15\\pi}{2} \\approx 23{,}6$ cm."
  },
  {
    "id": "1D113TL11",
    "question": "Số giờ có ánh sáng của thành phố T ở vĩ độ $40^\\circ$ bắc trong ngày thứ $t$ của một năm không nhuận được cho bởi hàm số $d(t) = 3\\cdot \\cos\\left[ \\dfrac{\\pi}{182}(t-80)\\right] +12$ với $t \\in \\mathrm{Z}$ và $0&lt;t\\le 365$. Bạn An muốn đi tham quan thành phố T nhưng lại không thích ánh sáng mặt trời, vậy bạn An nên chọn đi vào ngày nào trong năm để thành phố T có ít giờ có ánh sáng mặt trời nhất?",
    "answer": "353",
    "explain": "Ta có $\\cos\\left[ \\dfrac{\\pi}{182}(t-80)\\right] \\le -1$ nên $d(t)$ nhỏ nhất khi $\\cos\\left[ \\dfrac{\\pi}{182}(t-80)\\right] = -1$.<br>  $\\cos\\ \\left[\\dfrac{\\pi}{182}(t-80)\\right] = -1$<br>$\\Leftrightarrow \\dfrac{\\pi}{182}(t-80) = \\dfrac{3\\pi}{2} + 2k\\pi$<br>$\\Leftrightarrow t - 80 = 273 + 364k$<br>$\\Leftrightarrow t = 353 + 364k$  Vì $t \\in \\mathrm{Z}$ và $0&lt;t\\le 365$ nên lấy $k =0$ ta có $t=353$."
  }
];
