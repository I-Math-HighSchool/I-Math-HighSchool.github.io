// =========================================================================
// KHỐI DỮ LIỆU: 2D62 - Đúng/Sai (bổ sung từ nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai2D62 = [
  {
    "id": "2D622DS1",
    "question": "Một lớp có $70\\%$ học sinh là nữ. Tỉ lệ học sinh nữ đạt danh hiệu học sinh giỏi là $35\\%$, tỉ lệ học sinh nam đạt danh hiệu học sinh giỏi là $60\\%$. Chọn ngẫu nhiên một học sinh của lớp đó. Gọi $A$ là biến cố “ Học sinh được chọn là nữ” và $B$ là biến cố “ Học sinh được chọn đạt danh hiệu học sinh giỏi”.",
    "subQuestions": [
      {
        "text": "Xác suất của biến cố $\\overline{A}$ là $0{,}7$",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $B$ là $0{,}425$",
        "answer": true
      },
      {
        "text": "$A$ và $B$ là hai biến cố độc lập",
        "answer": false
      },
      {
        "text": "Xác suất của biến cố $A$ với điều kiện $B$ bằng $\\dfrac{5}{7}$",
        "answer": false
      }
    ],
    "explain": "<br>- Vì $\\mathrm{P}(A)=0{,}7$ nên $\\mathrm{P}(\\overline{A})=0{,}3$.<br>- Ta có $\\mathrm{P}(B|A)=0{,}35$ và $\\mathrm{P}(B|\\overline{A})=0{,}6$.<br>  Khi đó $\\mathrm{P}(B)=\\mathrm{P}(A)\\cdot \\mathrm{P}(B|A)+\\mathrm{P}(\\overline{A})\\cdot \\mathrm{P}(B|\\overline{A})=0{,7}\\cdot 0{,}35+0{,}3\\cdot 0,6=0{,}425$.<br>- Để $A$ và $B$ độc lập thì $\\mathrm{P}(B|A)=\\mathrm{P}(B)$.<br>  Vì $\\mathrm{P}(B|A) \\ne \\mathrm{P}(B)$ nên $A$ và $B$ không độc lập.<br>- $\\mathrm{P}(A|B)=\\dfrac{\\mathrm{P}(B|A)\\cdot \\mathrm{P}(A)}{\\mathrm{P}(B)}=\\dfrac{0{,}35 \\cdot 0{,}7}{0{,}425}=\\dfrac{49}{85}$."
  },
  {
    "id": "2D622DS2",
    "question": "Một hộp có $12$ quả bóng màu xanh, $7$ quả bóng màu đỏ; các quả bóng có kích thước và khối lượng như nhau. Lấy ngẫu nhiên lần lượt hai quả bóng trong hộp, lấy không hoàn lại. Xét các biến cố:  <br>- $A$: “ Lần thứ hai lấy được quả màu đỏ”.<br>- $B$: “ Lần thứ nhất lấy được quả màu xanh”.",
    "subQuestions": [
      {
        "text": "${P}(B)=\\dfrac{7}{9}$",
        "answer": false
      },
      {
        "text": "${P}\\left(A\\cap B\\right)=\\dfrac{28}{57}$",
        "answer": false
      },
      {
        "text": "${P}\\left(A\\mid B\\right)=\\dfrac{7}{18}$",
        "answer": true
      },
      {
        "text": "${P}\\left(\\overline{A}\\right)=\\dfrac{12}{19}$",
        "answer": true
      }
    ],
    "explain": "<br>- Có ${P}(B)=\\dfrac{12}{19}$.<br>- Có ${P}\\left(A\\cap B\\right)=\\dfrac{12}{19}\\cdot\\dfrac{7}{18}=\\dfrac{14}{57}$.<br>- ${P}\\left(A\\mid B\\right)=\\dfrac{{P}\\left(A\\cap B\\right)}{{P}(B)}=\\dfrac{7}{18}$.<br>- ${P}\\left(\\overline{A}\\right)={P}(B)\\cdot{P}\\left(\\overline{A}\\mid B\\right)+{P}\\left(\\overline{B}\\right)\\cdot{P}\\left(\\overline{A}\\mid \\overline{B}\\right)=\\dfrac{12}{19}\\cdot\\dfrac{11}{18}+\\dfrac{7}{19}+\\dfrac{12}{18}=\\dfrac{12}{19}$."
  },
  {
    "id": "2D624DS3",
    "question": "Trong một xưởng máy, số linh kiện do cơ sở I sản xuất chiếm $61 \\%$, số linh kiện do cơ sở II sản xuất chiếm $39 \\%$. Tỉ lệ linh kiện đạt tiêu chuẩn của cơ sở I, cơ sở II lần lượt là $93\\%$, $82\\%$. Kiểm tra ngẫu nhiên một linh kiện ở xưởng máy. Xét các biến cố<br>  $A_1 \\colon$ “ Linh kiện được kiểm tra do cơ sở I sản xuất”;<br>  $A_2 \\colon$ “ Linh kiện được kiểm tra do cơ sở II sản xuất”;<br>  $B \\colon$ “ Linh kiện được kiểm tra đạt tiêu chuẩn”.",
    "subQuestions": [
      {
        "text": "Xác suất $\\mathrm{P}\\left(A_1\\right)=0{,}61$",
        "answer": true
      },
      {
        "text": "Xác suất có điều kiện $\\mathrm{P}\\left(B \\mid A_2\\right)=0{,}82$",
        "answer": true
      },
      {
        "text": "Xác suất $\\mathrm{P}(B)=0{,}8871$",
        "answer": true
      },
      {
        "text": "Xác suất có điều kiện $\\mathrm{P}\\left(A_1 \\mid B\\right)=0{,}55$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có $\\mathrm{P}\\left(A_1\\right)=0{,}61$.<br>- Ta có $\\mathrm{P}\\left(B \\mid A_2\\right)=0{,}82$.<br>- Ta có $\\mathrm{P}\\left(A_1\\right)=0{,}61$; $\\mathrm{P}\\left(A_2\\right)=0{,}39$; $\\mathrm{P}\\left(B \\mid A_1\\right)=0{,}93$; $\\mathrm{P}\\left(B \\mid A_2\\right)=0{,}82$.<br>  Theo công thức xác suất toàn phần, ta có<br>  $\\mathrm{P}(B)=\\mathrm{P}\\left(A_1\\right) \\cdot \\mathrm{P}\\left(B \\mid A_1\\right)+\\mathrm{P}\\left(A_2\\right) \\cdot \\mathrm{P}\\left(B \\mid A_2\\right)=0{,}61 \\cdot 0{,}93+0{,}39 \\cdot 0{,}82=0{,}8871$.<br>- Theo công thức Bayes, ta có $\\mathrm{P}\\left(A_1 \\mid B\\right)=\\dfrac{\\mathrm{P}\\left(A_1\\right) \\cdot \\mathrm{P}\\left(B \\mid A_1\\right)}{\\mathrm{P}(B)}=\\dfrac{0{,}61 \\cdot 0{,}93}{0{,}8871} \\approx 0{,}64$."
  },
  {
    "id": "2D622DS4",
    "question": "Khảo sát những người xem bộ phim hoạt hình vừa được phát hành cho thấy $70\\%$ người xem là trẻ em và $30\\%$ là người lớn. Trong số các trẻ em đến xem phim có $50\\%$ yêu thích bộ phim và khẳng định sẽ đi xem tiếp phần 2; $30\\%$ yêu thích bộ phim nhưng sẽ không xem tiếp phần 2; còn lại không thích bộ phim và không xem tiếp phần 2. Trong số những người lớn đi xem phim có $20\\%$ yêu thích bộ phim và khẳng định sẽ đi xem tiếp phần 2; $10\\%$ yêu thích bộ phim nhưng sẽ không xem tiếp phần 2; $70\\%$ còn lại không thích bộ phim và không xem tiếp phần 2. Chọn ngẫu nhiên $1$ người đã xem phim.",
    "subQuestions": [
      {
        "text": "Biết người được chọn là trẻ em, xác suất để người đó yêu thích bộ phim là $0{,}56$",
        "answer": false
      },
      {
        "text": "Xác suất để người đó không xem tiếp phần 2 là $0{,}59$",
        "answer": true
      },
      {
        "text": "Biết người đó sẽ xem tiếp phần 2 của bộ phim, xác suất để người đó là trẻ em lớn hơn $0{,}85$",
        "answer": true
      },
      {
        "text": "Biết người đó yêu thích bộ phim, xác suất để người đó không xem tiếp phần 2 là $0{,}37$ (kết quả làm tròn đến hàng phần trăm)",
        "answer": true
      }
    ],
    "explain": "Ta gọi các biến cố sau  <br>- $A\\colon$ “ Chọn được một trẻ em”~$\\Rightarrow \\overline{A}\\colon$ “ Chọn được một người lớn”.<br>- $B_1\\colon$ “ Người đó thích bộ phim và sẽ xem tiếp phần $2$”.<br>- $B_2\\colon$ “ Người đó thích bộ phim và sẽ không xem tiếp phần $2$”.<br>- $B_3\\colon$ “ Người đó không thích bộ phim và sẽ không xem tiếp phần $2$”.  Ta có các xác suất $\\mathrm{P}(A)=0{,}7$; $\\mathrm{P}\\left(\\overline{A}\\right)=0{,}3$; $\\mathrm{P}\\left(B_1\\mid A\\right)=0{,}5$; $\\mathrm{P}\\left(B_2\\mid A\\right)=0{,}3$; $\\mathrm{P}\\left(B_3\\mid A\\right)=0{,}2$; $\\mathrm{P}\\left(B_1\\mid \\overline{A}\\right)=0{,}2$; $\\mathrm{P}\\left(B_2\\mid \\overline{A}\\right)=0{,}1$; $\\mathrm{P}\\left(B_3\\mid \\overline{A}\\right)=0{,}7$. <br>  Lập sơ đồ cây biểu diễn phép thử  <br><img src=\"data/12/2D5/im2H52/dlts_12_DLTS38_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Xác suất cần tìm chính là $\\mathrm{P}\\left(B_1\\mid A\\right)+\\mathrm{P}(B_2\\mid A)=0{,}5+0{,}3=0{,}8$.<br>- Áp dụng công thức xác suất toàn phần, ta có xác suất cần tìm bằng $\\mathrm{P}(AB_2)+\\mathrm{P}(AB_3)+\\mathrm{P}\\left(\\overline{A_2}B\\right)+\\mathrm{P}\\left(\\overline{A_3}B\\right)=0{,}3\\cdot 0{,}7+0{,}2\\cdot 0{,}7+0{,}1\\cdot 0{,}3+0{,}7\\cdot 0{,}3=0{,}59.$<br>- Xác suất cần tìm là xác suất $\\mathrm{P}(A_1\\mid B)$. <br>  Áp dụng công thức xác suất Bayes, ta có  $\\mathrm{P}(A_1\\mid B) = \\dfrac{\\mathrm{P}(B_1\\mid A)\\cdot \\mathrm{P}(A)}{\\mathrm{P}(B_1)}$<br>$= \\dfrac{0{,}5\\cdot 0{,}7}{0{,}5\\cdot 0{,}7+0{,}3\\cdot 0{,}2}$<br>$= \\dfrac{35}{41}\\approx 0{,}854.$<br>- Ta có xác suất cần tìm là $\\mathrm{P}\\left((B_2\\cup B_3)\\mid (B_1\\cup B_2)\\right)$. <br>  Ta có   $\\mathrm{P}\\left((B_2\\cup B_3)\\mid (B_1\\cup B_2)\\right) = \\dfrac{\\mathrm{P}\\left((B_2\\cup B_3)\\cap (B_1\\cup B_2)\\right)}{\\mathrm{P}(B_1\\cup B_2)}$<br>$= \\dfrac{\\mathrm{P}(B_2)}{\\mathrm{P}(B_1)+\\mathrm{P}(B_2)}$<br>$= \\dfrac{0{,}7\\cdot 0{,}3+0{,}3\\cdot 0{,}1}{0{,}7\\cdot 0{,}5+0{,}3\\cdot 0{,}2+0{,}7\\cdot 0{,}3+0{,}3\\cdot 0{,}1}$<br>$= \\dfrac{24}{65}\\approx 0{,}37.$"
  }
];
