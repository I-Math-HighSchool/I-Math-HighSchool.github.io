// =========================================================================
// KHỐI DỮ LIỆU: 0D63 - Đúng sai
// Nguồn: SachBaiHoc_T10/Data-T10/DS10-CD3.3-HS-B2.tex và
// TK10-CD1.5-Thong-ke.tex (bài tập giáo khoa gốc, giữ nguyên nội dung).
// =========================================================================
window.dungSai0D63 = [
  {
    "id": "0D635DS1",
    "question": "Hai phương pháp học Toán khác nhau được áp dụng cho lớp 10A, 10B. Sau một học kì, điểm khảo sát của hai lớp như sau   <br><div style=\"display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;margin:8px auto;\"><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_000.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_001.png\" alt=\"hinh ve\" style=\"max-width:min(260px,44%);max-height:240px;width:auto;height:auto;\"></div>  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Điểm trung bình của hai lớp là bằng nhau",
        "answer": false
      },
      {
        "text": "Số trung vị của hai bảng số liệu bằng nhau",
        "answer": true
      },
      {
        "text": "Mốt của hai bảng số liệu bằng nhau",
        "answer": true
      },
      {
        "text": "Phương pháp lớp $\\mathrm{A}$ hiệu quả hơn lớp $\\mathrm{B}$",
        "answer": false
      }
    ],
    "explain": "<br>- Số trung bình là $\\bar{x}_A=5{,}92, \\bar{x}_B=6{,}28$ mệnh đề sai.<br>- Đối với lớp A: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{lllllllllllllllllllllllll}  2 & 2 & 3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 5 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 8 & 9 & 9 & 9 .  \\end{array}  $  Số trung vị của mẫu số liệu là $M_e=6$.  Đối với lớp B: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{llllllllllllllllllllllllll}  3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 6 & 6 & 6 & 6 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 9 & 9 & 10  \\end{array}  $  Số trung vị của mẫu số liệu là $M_e=6$. Nên mệnh đề đúng.<br>- Đối với lớp A: điểm 7 xuất hiện 6 lần là nhiều nhất nên mốt của mẫu số liệu là $M_o=7$.<br>   Đối với lớp B: điểm 7 xuất hiện 6 lần là nhiều nhất nên mốt của mẫu số liệu là $M_o=7$. Nên mệnh đề đúng.<br>- Đối với lớp A: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{lllllllllllllllllllllllll}  2 & 2 & 3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 5 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 8 & 9 & 9 & 9 .  \\end{array}  $   Tứ phân vị $Q_1=4{,}5 ; Q_2=6 ; Q_3=7{,}5$.  Đối với lớp B: Sắp xếp số liệu theo thứ tự không giảm  $  \\begin{array}{llllllllllllllllllllllllll}  3 & 3 & 4 & 4 & 5 & 5 & 5 & 5 & 6 & 6 & 6 & 6 & 6 & 6 & 7 & 7 & 7 & 7 & 7 & 7 & 7 & 8 & 8 & 9 & 9 & 10  \\end{array}  $   Tứ phân vị $Q_1=5 ; Q_2=6 ; Q_3=7$."
  },
  {
    "id": "0D634DS2",
    "question": "Mẫu số liệu về chiều cao của học sinh trong một lớp 10 được sắp xếp như sau   $  161 ; 162 ; 163 ; 164 ; 165 ; 166 ; 167 ; 168 ; 169 ; 170 ; 171(\\mathrm{~mm})  $  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số trung bình của mẫu số liệu là $\\bar{x}=166$",
        "answer": true
      },
      {
        "text": "Số trung vị của mẫu số liệu là $M_e=167$",
        "answer": false
      },
      {
        "text": "Tứ phân vị thứ ba của mẫu số liệu là $Q_3=169$",
        "answer": true
      },
      {
        "text": "Số trung bình và số trung vị bằng nhau",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{161+162+163+164+165+166+167+168+169+170+171}{11}=166.$   Suy ra mệnh đề đúng.<br>- Số các số liệu là $N=11$ (lẻ).<br>   Các số liệu đã sắp xếp theo thứ tự không giảm nên số trung vị là số đứng thứ $6$. Vậy số trung vị là $M_e=166$. Suy ra mệnh đề sai.<br>- Tứ phân vị thứ ba là trung vị của mẫu $167 ; 168 ; 169 ; 170 ; 171$.<br>  Do đó $Q_3=169$. Suy ra mệnh đề đúng.<br>- Ta có số trung bình của mẫu số liệu là $\\bar{x}=166$.<br>   Số trung vị của mẫu số liệu là $M_e=166$ nên số trung bình và số trung vị bằng nhau. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D634DS3",
    "question": "Cho các số liệu thống kê về mẫu sản lượng chè thu được trong 1 năm ($\\mathrm{kg}/$ sào) của $20$ hộ gia đình như sau   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_002.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Mốt của mẫu số liệu là $M_0=115$",
        "answer": true
      },
      {
        "text": "Số trung bình của mẫu số liệu là $\\bar{x}=114{,}15$",
        "answer": true
      },
      {
        "text": "Số trung vị của mẫu số liệu là $M=114$",
        "answer": false
      },
      {
        "text": "Tứ phân vị của mẫu số liệu là $Q_1=112{,}5$, $Q_2=114{,}5$, $Q_3=115{,}5$",
        "answer": false
      }
    ],
    "explain": "<br>- Do giá trị $115$ có tần số lớn nhất là $5$ nên ta có: $M_0=115$. Suy ra mệnh đề đúng.<br>- Ta có số trung bình của mẫu số liệu là   $\\bar{x}=\\dfrac{111 \\cdot 1+112 \\cdot 3+113 \\cdot 4+114 \\cdot 2+115\\cdot 4+116 \\cdot 5+117\\cdot 1}{20}=114{,}15$.  Suy ra mệnh đề đúng.<br>- Ta có mẫu số liệu gồm $20$ giá trị nên trung vị là $M_e=\\dfrac{114+115}{2}=114{,}5$. Suy ra mệnh đề sai.<br>- Ta có $N=20$ là số chẵn, nên giá trị tứ phân vị thứ hai là $Q_2=114{,}5$.<br>   tứ phân vị thứ nhất là $Q_1=\\dfrac{113+113}{2}=113$.<br>  Tứ phân vị thứ ba là $Q_3=\\dfrac{115+116}{2}=115{,}5$.  Suy ra mệnh đề sai."
  },
  {
    "id": "0D635DS4",
    "question": "Bác Nam và Bác Linh ghi lại số cuộc điện thoại mà mỗi người gọi mỗi ngày trong $10$ ngày được lựa chọn ngẫu nhiên từ tháng 01/2024 ở bảng sau   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_003.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Mốt của mẫu số liệu của Bác Nam là $M_0=1$",
        "answer": true
      },
      {
        "text": "Số trung bình của số cuộc điện thoại mà Bác Linh gọi là $3{,}9$",
        "answer": true
      },
      {
        "text": "Xét theo số trung bình Bác Nam gọi điện thoại thường xuyên hơn",
        "answer": false
      },
      {
        "text": "Nên dùng trung vị để so sánh số cuộc gọi của Bác Nam và Bác Linh",
        "answer": true
      }
    ],
    "explain": "<br>- Trong số $10$ ngày có ngày thứ hai bác Nam gọi nhiều nhất nên mốt của mẫu số liệu của Bác Nam là $M_0=2$. Suy ra mệnh đề sai.<br>- Ta có số trung bình của số cuộc điện thoại mà Bác Linh gọi là $\\bar{x}=\\dfrac{1 \\cdot 3+2 \\cdot 3+3 \\cdot 2+4+20}{10}=3{,}9.$   Suy ra mệnh đề đúng.<br>- Ta có số trung bình của số cuộc điện thoại mà Bác Nam gọi là $\\bar{x}=\\dfrac{1 \\cdot 3+2+3+4 \\cdot 2+5+6+7}{10}=3{,}4.$   Do đó xét theo số trung bình Bác Linh gọi điện thoại thường xuyên hơn. Suy ra mệnh đề sai.<br>- Tứ phân vị   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_004.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng trên nên dùng trung vị để so sánh số cuộc gọi của Bác Nam và Bác Linh Suy ra mệnh đề đúng."
  },
  {
    "id": "0D634DS5",
    "question": "Cho bảng số liệu điểm kiểm tra môn Toán của $20$ học sinh.  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_005.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Mốt của mẫu số liệu là $5 $",
        "answer": false
      },
      {
        "text": "Điểm kiểm tra trung bình của nhóm học sinh là $5 $",
        "answer": false
      },
      {
        "text": "Số trung vị của mẫu số liệu là $7$",
        "answer": false
      },
      {
        "text": "Tứ phân vị thứ nhất của mẫu số liệu trên là $6 $",
        "answer": true
      }
    ],
    "explain": "<br>- Mốt của mẫu số liệu là $8$. Suy ra mệnh đề sai.<br>- Điểm kiểm tra trung bình của nhóm học sinh là $\\bar{x}=\\dfrac{4\\cdot 1+5\\cdot 2+\\ldots+10\\cdot 1}{20}=7{,}3$.<br>  Suy ra mệnh đề sai.<br>- Số trung vị của mẫu số liệu là $M_e=\\dfrac{x_{10}+x_{11}}{2}=\\dfrac{7+8}{2}=7{,}5$. Suy ra mệnh đề sai.<br>- Tứ phân vị thứ nhất của mẫu số liệu trên là  $Q_1=\\dfrac{x_5+x_0}{2}=\\dfrac{6+6}{2}=6$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D635DS6",
    "question": "Sản lượng lúa (tạ) của $40$ thửa ruộng thí nghiệm có cùng diện tích được trình bày trong bảng phân bố tần số sau đây:  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_006.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các câu sau",
    "subQuestions": [
      {
        "text": "Với $m=13, n=8$ thì mốt của mẫu số liệu trên là $23$ tạ",
        "answer": true
      },
      {
        "text": "Với $m=13, n=8$ thì sản lượng trung bình của $40$ thửa ruộng trên làm tròn đến hàng phần trăm là $ 19{,}92$ tạ",
        "answer": false
      },
      {
        "text": "Với $m=13, n=8$ thì số trung vị của mẫu số liệu trên là $21$",
        "answer": false
      },
      {
        "text": "Biết sản lượng trung bình của $40$ thửa ruộng là $22{,}1$ tạ khi đó $n=11$",
        "answer": true
      }
    ],
    "explain": "Với $m=13, n=8$ ta có bảng sản lượng của $40$ thửa ruộng như sau  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_007.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Dựa vào bảng phân bố tần số của mẫu số liệu trên ta thấy sản lượng có tần số lớn nhất là $23$ tạ. Suy ra mệnh đề đúng.<br>- Sản lượng trung bình của $40$ thửa ruộng trên là  $\\bar{x}=\\dfrac{5 \\cdot 20+21 \\cdot 8+22 \\cdot 8+23 \\cdot 13+24 \\cdot 6}{40}=19{,}93.$  Suy ra mệnh đề sai.<br>- Do số thửa ruộng là $40$ là số chẵn nên số trung vị là trung bình cộng của hai số hạng đứng chính giữa là số hạng thứ $20$ và $21$ khi đó $M_e=\\dfrac{22+22}{2}=22$. Suy ra mệnh đề sai.<br>- Ta có $5+8+n+m+6=40 \\Leftrightarrow n+m=21$.  Sản lượng trung bình của $40$ thửa ruộng là $22{,}1$ nên  $  \\dfrac{1}{40}(5\\cdot 20+8\\cdot 21+n \\cdot 22+m \\cdot 23+6\\cdot 24)=22{,}1 \\Leftrightarrow 22 n+23 m=472 .  $  Giải hệ phương trình $n+m=21 \\text{ và } 22 n+23 m=472\\Leftrightarrow n=11 \\text{ và } m=10.$<br>  Suy ra mệnh đề đúng."
  },
  {
    "id": "0D634DS7",
    "question": "Khối lượng cơ thể lúc trưởng thành của $11$ con chim được ghi lại ở bảng sau (đơn vị: gam).  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_008.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các câu sau (các kết quả làm tròn đến hàng đơn vị)",
    "subQuestions": [
      {
        "text": "Mốt của mẫu số liệu trên là $165$ gam",
        "answer": true
      },
      {
        "text": "Tứ phân vị dưới của mẫu số liệu trên là $160$",
        "answer": false
      },
      {
        "text": "Khối lượng trung bình của 11 con chim đó là $161$",
        "answer": true
      },
      {
        "text": "Mẫu số liệu tập trung mật độ cao bên phải $Q_2$ và mật độ thấp bên trái $Q_2$.",
        "answer": true
      }
    ],
    "explain": "<br>- Ta thấy khối lượng cơ thể lúc trưởng thảnh của con chim có giá trị 165 gam là xuất hiện nhiều nhất. Như vậy mốt của mẫu số liệu trên là $165$. Suy ra mệnh đề đúng.<br>- Sắp xếp mẫu số liệu trên theo thứ tự không giảm ta được  $  \\begin{array}{llllllllllllll}  150 & 150 & 155 & 155 & 160 & 165 & 165 & 165 & 165 & 170 & 170  \\end{array} .  $  Ta thấy dãy số liệu trên có $11$ giá trị nên trung vị là số hạng đứng thứ $6$ với $ M_e=Q_2=165$.<br>  Nửa số liệu bên trái $Q_2$ gồm $150 \\quad 150 \\quad 155 \\quad 155 \\quad 160$. Trung vị của nửa số liệu bên trải là tứ phân vị dưới $Q_1=155$. Suy ra mệnh đề sai .<br>- Khối lượng trung bình của 11 con chim đó là  $\\bar{x}=\\dfrac{165+150+155+165+170+165+150+155+170+165+160}{11}\\approx 161.$   Suy ra mệnh đề đúng.<br>- Các tứ phân vị trong mẫu số liệu trên là $Q_1=155 ; Q_2=165 ; Q_3=165$. Ta thấy khoảng cách tứ $Q_1$ đến $Q_3$ là $10 $, trong khi đó khoảng cách từ $Q_2$ đến $Q_3$ là $0 $. Điều này cho thấy mẫu số liệu tập trung mật độ cao bên phải $Q_2$, và mật độ thấp bên trái $Q_2$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D634DS8",
    "question": "Chỉ số IQ của một nhóm học sinh có kết quả như sau $\\begin{array}{llllllllllll}60 & 72 & 63 & 83 & 68 & 90 & 74 & 86 & 74 & 80 & 82\\end{array}$   Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Mốt của mẫu số liệu là $M_0=90$",
        "answer": false
      },
      {
        "text": "Số trung bình cộng của mẫu số liệu (làm tròn kết quả đến một chữ số thập phân) là $75{,}6 $",
        "answer": true
      },
      {
        "text": "Số trung vị của mẫu số liệu là $74$",
        "answer": true
      },
      {
        "text": "Tổng của tứ phân vị thứ nhất và thứ $3$ là $151$",
        "answer": true
      }
    ],
    "explain": "<br>- Mốt của mẫu số liệu là $M_0=74$. Suy ra mệnh đề sai.<br>- Số trung bình cộng của bảng đã cho là  $  \\dfrac{60+63+68+72+74+74+80+82+83+86+90}{11} \\approx 75{,}6  $   Suy ra mệnh đề đúng.<br>- Dựa vào kết quả của mẫu số liệu đã Sắp xếp theo thứ tự không giảm  Dãy trên có $11$ giá trị nên ta lấy giá trị ở chính giữa là $74$. Suy ra mệnh đề đúng.<br>- Tổng của tứ phân vị thứ nhất và thứ ba là $Q+Q_3=68+83=151$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D635DS9",
    "question": "Một cửa hàng bún đậu vừa khai trương, thống kê lượng khách tới quán trong $7$ ngày đầu và thu được mẫu số liệu sau   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_017.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số trung bình làm tròn đến hàng phần trăm của mẫu số liệu là $407{,}14$",
        "answer": true
      },
      {
        "text": "Số trung vị của mẫu số liệu là $263$",
        "answer": false
      },
      {
        "text": "Ngày $1$ là mốt của mẫu số liệu này",
        "answer": false
      },
      {
        "text": "Nếu ngày $6 $ có $400$ lượt khách thì mốt của mẫu số liệu là ngày $3$",
        "answer": false
      }
    ],
    "explain": "<br>- Số trung bình là $\\bar{x}=\\dfrac{575+454+400+325+351+333+412}{7}\\approx 407{,}142857$ nên mệnh đề đúng.<br>- Sắp xếp số liệu theo thứ tự không giảm $325$ $333$ $351$ $400$ $412$ $454$ $575$.<br>  Trung vị của mẫu số liệu là $M_e=400$ nên mệnh đề sai.<br>- Ngày $1$ không là mốt nên mệnh đề sai.<br>- Nếu ngày $6$ có $400$ lượt khách thì mốt là $400$ mà không phải là ngày 3 nên mệnh đề sai."
  },
  {
    "id": "0D635DS10",
    "question": "Bảng sau đây cho biết số chỗ ngồi của một số sân vận động được sử dụng trong giải Bóng đá Vô địch Quốc gia Việt Nam năm 2022 (số liệu gần đúng).  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_020.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các câu sau",
    "subQuestions": [
      {
        "text": "Mốt của mẫu số liệu trên là $20120$",
        "answer": true
      },
      {
        "text": "Trung vị của mẫu số liệu trên là $23407$",
        "answer": false
      },
      {
        "text": "Số chỗ ngồi đã được sử dụng trung bình của $5$ sân đó là $24502$",
        "answer": true
      },
      {
        "text": "Nếu bỏ đi số liệu chỗ ngồi của Sân vân động Quốc gia Mỹ Đình thì mốt không thay đối số trung bình và trung vị sẽ thay đổi",
        "answer": true
      }
    ],
    "explain": "<br>- Ta thấy có hai sân có số chỗ ngồi $20120$ xuất hiện nhiều nhất. Như vậy mốt của mẫu số liệu trên là $20120$. Suy ra mệnh đề đúng.<br>- Sắp xếp số liệu theo thứ tự không giảm   $20120 \\quad 20120 \\quad 2131623407 \\quad 37546.$  Trung vị của mẫu số liệu trên là $21316$. Suy ra mệnh đề sai.<br>- Số trung bình là $\\dfrac{20120+21316+23407+20120+37546}{5}\\approx 24502$. Suy ra mệnh đề đúng.<br>- Nếu bỏ số liệu chỗ ngồi của Sân vận động Quốc gia Mỹ Đình thì ta có Số trung bình là $\\dfrac{20120+21316+23407+20120}{4}=21241$.<br>  Sắp xếp số liệu theo thứ tự không giảm $2012020120 \\quad 21316 \\quad 23407$.<br>  Mốt là $20120$.<br>  Trung vị $20718$.<br>  Vậy nếu bỏ số liệu chỗ ngồi của Sân vận động Quốc gia Mỹ Đình thì mốt giữ nguyên, số trung bình và trung vị sẽ thay đổi. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D635DS11",
    "question": "Bảng sau đây cho biết số chỗ ngồi của một số sân vận động được sử dụng trong giải bóng đá vô địch Quốc gia năm 2018 (số liệu gần đúng).  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_021.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số trung bình của mẫu số liệu là $24501{,}3$",
        "answer": false
      },
      {
        "text": "Mốt của mẫu số liệu là $20120 $",
        "answer": true
      },
      {
        "text": "Trung vị của mẫu số liệu là $21315$",
        "answer": true
      },
      {
        "text": "Nếu bỏ đi số liệu chỗ ngồi của Sân vận động Mỹ Đình thì mốt của mẫu số liệu không thay đổi",
        "answer": true
      }
    ],
    "explain": "<br>- Số trung bình của mẫu số liệu là $\\bar{x}=\\dfrac{20120+21315+23405+20120+37546}{5}=24501{,}2$ nên mệnh đề sai.<br>- Giá trị $20120$ có tần số xuất hiện nhiều nhất do đó mốt của mẫu số liệu là $M_0=20120$ nên mệnh đề đúng.<br>- Sắp xếp số liệu theo thứ tự không giảm $20120$\\qquad $20120$\\qquad $21315$\\qquad $23405$ \\qquad $37546$.<br>  Trung vị của mẫu số liệu là $M_e=21315$ nên mệnh đề đúng.<br>- Nếu bỏ đi số liệu chỗ ngồi của Sân vận động Mỹ Đình. Khi đó Sắp xếp số liệu theo thứ tự không giảm   $20120$\\qquad $20120$ \\qquad $21315$ \\qquad $23405 $  Mốt của mẫu số liệu là $M_0=20120$ nên mệnh đề đúng."
  },
  {
    "id": "0D634DS12",
    "question": "Cho bảng số liệu thống kê chiều cao của một nhóm học sinh như sau  <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd16_022.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">   Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Có $16$ học sinh được thống kê chiều cao",
        "answer": true
      },
      {
        "text": "Chiều cao trung bình của nhóm học sinh là $160 $",
        "answer": false
      },
      {
        "text": "Số trung vị của mẫu số liệu là $160 $",
        "answer": false
      },
      {
        "text": "Tứ phân vị thứ nhất của mẫu số liệu trên là $154$",
        "answer": true
      }
    ],
    "explain": "<br>- Có $16$ học sinh được thống kê chiều cao. Suy ra mệnh đề đúng.<br>- Chiều cao trung bình của nhóm học sinh là  $\\bar{x}=\\dfrac{150+153\\cdot 2+154\\cdot 2+\\ldots+167}{16}=159{,}3125$. Suy ra mệnh đề sai.<br>- Số trung vị của mẫu số liệu là $M_e=\\dfrac{x_8+x_9}{2}=\\dfrac{160+162}{2}=161$. Suy ra mệnh đề sai.<br>- Tứ phân vị thứ nhất của mẫu số liệu trên là  $Q_1=\\dfrac{x_4+x_3}{2}=\\dfrac{154+154}{2}=154$. Suy ra mệnh đề đúng."
  },
  {
    "id": "0D634DS1",
    "question": "Cho bảng phân bố tần số khối lượng $30$ quả trứng gà của một rổ trứng gà   <br><img src=\"data/10/0D6/im0D63/dlts_sbh_tk10cd15_000.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định tính đúng sai của các mệnh đề sau",
    "subQuestions": [
      {
        "text": "Số quá trứng gà có khối lượng $40 \\mathrm{~g}$ trong rổ trứng là $6 $",
        "answer": true
      },
      {
        "text": "Tổng số trứng trong rổ có khối lượng nhỏ hơn $35 \\mathrm{~g}$ là $18 $",
        "answer": false
      },
      {
        "text": "Khối lượng trung bình cộng của rổ trứng gà là $36{,}5$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ nhất của bảng số liệu là $30$",
        "answer": true
      }
    ],
    "explain": "<br>- Số quả trứng gả có khổi lượng $40 \\mathrm{~g}$ trong rổ trứng là $6 $. Suy ra mệnh đề đúng.<br>- Tổng số trứng trong rổ có khối lượng nhỏ hơn $35 \\mathrm{~g}$ là $8$. Suy ra mệnh đề sai.<br>- Số trung bình cộng của bảng đã cho là  $\\dfrac{25\\cdot 3+30\\cdot 5+35\\cdot 10+40\\cdot 6+45\\cdot 4+50\\cdot 2}{30} =36{,}5$.<br>  Suy ra mệnh đề đúng.<br>- Bảng số liệu có $30$ giá trị nên tứ phân vị thứ nhất $Q_1$ đứng ở vị trí thứ $8 $. Vây $Q_1=30$.<br>  Suy ra mệnh đề đúng."
  }
];
