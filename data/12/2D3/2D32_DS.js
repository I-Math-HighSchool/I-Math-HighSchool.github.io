// =========================================================================
// KHỐI DỮ LIỆU: §2. Phương sai, độ lệch chuẩn của mẫu số liệu ghép nhóm - Đúng sai
// Nguồn: TaiLieuThamKhao/BANK-25-26/Lop12/L12-TK-C3.3.tex (chuyển từ LaTeX)
// Hình vẽ (bảng biến thiên, đồ thị...) đã được biên dịch sẵn bằng LaTeX/TikZ
// thành ảnh PNG tĩnh (không phụ thuộc TikzJax).
// =========================================================================
window.dungSai2D32 = [
  {
    "id": "2D323DS1",
    "question": "Một trang trại phân $1 \\, 000$ quả trứng thành $5$ loại, tuỳ theo khối lượng (đã được làm tròn) của chúng được thống kê bởi bảng dưới đây:  <br><img src=\"data/12/2D3/im2D3/2D32_tikz_019.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu là $30$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu là $6{,} 48$",
        "answer": true
      },
      {
        "text": "Khối lượng trung bình của 100 quả trứng là 45 gam",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu là $\\dfrac{6\\sqrt{17}}{5}$",
        "answer": true
      }
    ],
    "explain": "<br>- [a)]<br>- Khoảng biến thiên là $60-30=30$.<br>- Nhóm chứa $Q_1$ là nhóm $[42; 48)$.<br>  Suy ra $Q_1= 42 + \\dfrac{250- 235}{500} \\cdot 16=42{,} 48$.<br>  $\\dfrac{3N}{4}= 750$.<br>  Nhóm chứa $Q_3$ là nhóm $[48; 54)$.<br>  Khi đó $Q_3 =48 +\\dfrac{750- 735 }{250} \\cdot 16 = 48{,} 96$.<br>  Suy ra khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1= 6{,} 48$.<br>- Ta có bảng sau:  <br><img src=\"data/12/2D3/im2D3/2D32_tikz_020.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khối lượng trung bình $\\overline{x}= \\dfrac{33 \\cdot 45 + 39 \\cdot 190 + 45 \\cdot 500 + 51 \\cdot 250 + 57 \\cdot 15}{1\\, 000}= 45\\text{ gam}.$<br>- Phương sai: $\\dfrac{33^2 \\cdot 45 + 39^2 \\cdot 190 + 45^2 \\cdot 500 + 51^2 \\cdot 250 + 57^2 \\cdot 15}{1\\, 000} - 45^2=24{,}48$  Độ lệch chuẩn $s= \\sqrt{\\dfrac{33^2 \\cdot 45 + 39^2 \\cdot 190 + 45^2 \\cdot 500 + 51^2 \\cdot 250 + 57^2 \\cdot 15}{1\\, 000} - 45^2} =\\dfrac{6\\sqrt{17}}{5} \\text{ gam}.$"
  },
  {
    "id": "2D323DS2",
    "question": "Thời gian chạy tập luyện cự li $100$\\,m của hai vận động viên $A$ và $B$ được cho trong bảng sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS10_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét tính đúng sai của các khẳng định sau",
    "subQuestions": [
      {
        "text": "Tổng số lần chạy của $B$ là $25$",
        "answer": true
      },
      {
        "text": "Thời gian chạy trung bình của $A$ lớn hơn thời gian chạy trung bình của $B$",
        "answer": false
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu đã cho của vận động viên $A$ bé hơn $0{,}43$",
        "answer": true
      },
      {
        "text": "Dựa vào độ lệch chuẩn thì vận động viên $A$ có thành tích luyện tập ít ổn định hơn so với vận động viên $B$",
        "answer": false
      }
    ],
    "explain": "Ta lập lại bảng số liệu như sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS10_012.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>.<br>  Tổng số lần chạy của $B$ là $3+6+8+5+3=25$..<br>- <strong>Sai</strong>.<br>  Thời gian chạy trung bình của $A$ là  \\[  \\overline{x}_A=\\dfrac{10{,}1\\cdot 2+10{,}3\\cdot 10+10{,}5\\cdot 6+10{,}7\\cdot 4+10{,}9\\cdot 3}{25}  = \\dfrac{2617}{250}=10{,}468.  \\]  Thời gian chạy trung bình của $B$ là  \\[  \\overline{x}_B=\\dfrac{10{,}1\\cdot 2+10{,}3\\cdot 10+10{,}5\\cdot 6+10{,}7\\cdot 4+10{,}9\\cdot 3}{25}  = \\dfrac{2623}{250}=10{,}492.  \\]  Ta thấy $\\overrightarrow{x}_A&lt;\\overline{x}_B$ nên thời gian chạy trung bình của $B$ lớn hơn thời gian chạy trung bình của $A$.<br>- <strong>Đúng</strong>.<br>  Ta có $Q_1\\in [10{,}2;10{,}4]$ nên $Q_1=10{,}2+\\dfrac{\\tfrac{25}{4}-2}{10}\\cdot (10{,}4-10{,}2)=10{,}285$.<br>  Ta có $Q_3\\in [10{,}6;10{,}8]$ nên $Q_1=10{,}2+\\dfrac{\\tfrac{25\\cdot 3}{4}-(2+10+6)}{4}\\cdot (10{,}8-10{,}6)=10{,}6375$.<br>  Khoảng tứ phân vị $\\Delta Q=Q_3-Q_1=10{,}6375-10{,}285=0{,}3525&lt;0{,}43$.<br>- <strong>Sai</strong>.<br>  Phương sai của thành tích luyện tập của vận động viên $A$ là  \\[  s_A^2=\\dfrac{10{,}1^2\\cdot 2+10{,}3^2\\cdot 10+10{,}5^2\\cdot 6+10{,}7^2\\cdot 4+10{,}9^2\\cdot 3}{42} - 10{,}468^2  = \\dfrac{834}{15625}.  \\]  Độ lệch chuẩn của thành tích luyện tập của vận động viên $A$ là $s_A=\\sqrt{\\dfrac{834}{15625}}\\approx 0{,}231$.<br>  Phương sai của thành tích luyện tập của vận động viên $B$ là  \\[  s_B^2=\\dfrac{10{,}1^3\\cdot 2+10{,}3^2\\cdot 6+10{,}5^2\\cdot 8+10{,}7^2\\cdot 5+10{,}9^2\\cdot 3}{42} - 10{,}492^2  = \\dfrac{874}{15625}.  \\]  Độ lệch chuẩn của thành tích luyện tập của vận động viên $B$ là $s_B=\\sqrt{\\dfrac{874}{15625}}\\approx 0{,}237$.<br>  Vì $s_A&lt;s_B$ nên ựa vào độ lệch chuẩn thì vận động viên $A$ có thành tích luyện tập ổn định hơn so với vận động viên $B$."
  },
  {
    "id": "2D323DS3",
    "question": "Kết quả kiểm tra cân nặng của $25$ học sinh nam lớp 12A được cho bởi dưới đây  Các mệnh đề sau đúng hay sai? (Kết quả làm tròn đến hàng phần trăm)<br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS12_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu ghép nhóm đã cho là $80$",
        "answer": false
      },
      {
        "text": "Số trung bình của mẫu số liệu ghép nhóm đã cho là $\\bar{x}=66{,}16$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu ghép nhóm đã cho là $s^2=20{,}64$",
        "answer": false
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu ghép nhóm đã cho là $S=4{,}45$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS12_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Khoảng biến thiên $R=80-60=20$.<br>- Số trung bình của mẫu số liệu ghép nhóm là  $\\bar{x}=\\dfrac{62\\cdot9+66\\cdot11+70\\cdot1+74\\cdot3+78\\cdot1}{25}=66{,}16.$<br>- Phương sai của mẫu số liệu ghép nhóm đã cho là   $s^2 =\\dfrac{9.(62 - 66{,}16)^2 + 11.(66 - 66{,}16)^2 + 1.(70 - 66{,}16)^2 + 3.(74 - 66{,}16)^2 + 1.(78 - 66{,}16)^2}{25}$<br>$=19{,}77.$<br>- Độ lệch chuẩn của mẫu số liệu ghép nhóm là $s=\\sqrt{s^2}=4{,}45$."
  },
  {
    "id": "2D323DS4",
    "question": "Bảng sau thống kê chiều cao của $32$ em học sinh lớp $12A$.  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS14_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu trên là $25$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ ba của mẫu số liệu trên thuộc nhóm $[165;170)$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ nhất của mẫu số liệu trên (làm tròn đến hàng đơn vị) là $157$",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu trên (làm tròn đến $2$ chữ số thập phân) là $5{,}19$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Khoảng biến thiên bằng $175-150=25$.<br>- <strong>Đúng</strong>. Gọi $x_1, \\ldots, x_{32}$ là chiều cao của $32$ em học sinh lớp $12A$ và giả sử dãy số liệu gốc này đã được sắp xếp theo thứ tự tăng dần. Tứ phân vị thứ ba $Q_3=\\dfrac{x_{24}+x_{25}}{2}$ nên thuộc nhóm $[165; 170)$.<br>- <strong>Đúng</strong>. Tứ phân vị thứ nhất $Q_1=\\dfrac{x_8+x_9}{2} \\in [155; 160)$. Khi đó  $Q_1=155+\\dfrac{8-5}{7}\\cdot5=\\dfrac{110}{17}\\approx 157.$<br>- <strong>Sai</strong>. Số trung bình của mẫu số liệu là  $\\overline{x}=\\dfrac{152{,}5\\cdot5+157{,}5\\cdot7+162{,}5\\cdot8+167{,}5\\cdot10+172{,}5\\cdot2}{32}=\\dfrac{5185}{32}.$  Khi đó độ lệch chuẩn là  $s=\\sqrt{\\dfrac{1}{32}\\left(152{,}5^2\\cdot5+157{,}5^2\\cdot7+162{,}5^2\\cdot8+167{,}5^2\\cdot10+172{,}5^2\\cdot2\\right)-\\left(\\dfrac{5185}{32}\\right)^2}\\approx5{,}91.$"
  },
  {
    "id": "2D323DS5",
    "question": "Số giờ sử dụng smartphone trong $1$ ngày nghỉ của học sinh lớp 12A7 được thống kê trong bảng sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS18_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu trên bằng $6$",
        "answer": true
      },
      {
        "text": "Giá trị trung bình của mẫu số liệu trên bằng $\\dfrac{226}{45}$",
        "answer": false
      },
      {
        "text": "Số trung vị của mẫu số liệu trên bằng $\\dfrac{19}{8}$",
        "answer": true
      },
      {
        "text": "Độ lệch chuẩn của mẫu số liệu trên bằng $\\dfrac{2\\sqrt{730}}{45}$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Khoảng biến thiên của mẫu số liệu trên bằng $6-0 = 6$.<br>- <strong>Sai</strong>. Số học sinh lớp 12A7 là $n=3+15+12+9+5+1=45$. <br>  Ta có bảng sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS18_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Giá trị trung bình của mẫu số liệu trên bằng   $\\overline{x} = \\dfrac{0{,}5\\cdot 3 + 1{,}5\\cdot 15 +2{,}5\\cdot 12 + 3{,}5\\cdot 9 +4{,}5\\cdot 5 + 5{,}5\\cdot 1}{45} = \\dfrac{227}{90}.$<br>- <strong>Đúng</strong>. Ta có bảng tần số tích luỹ như sau  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS18_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\dfrac{n}{2}=22{,}5$. Suy ra nhóm chứa trung vị là $[2;3)$. <br>  Do đó $Q_2 = 2 + \\dfrac{22{,}5-18}{12}\\cdot (3-2) = \\dfrac{19}{8}$.<br>- <strong>Sai</strong>. Phương sai của mẫu số liệu trên là  $s^2 = \\dfrac{1}{45}\\left(3\\cdot 0{,}5^2 + 15\\cdot 1{,}5^2 + 12\\cdot 2{,}5^2 + 9\\cdot 3{,}5^2 +5\\cdot 4{,}5^2 +1\\cdot 5{,}5^2\\right)-\\left(\\dfrac{227}{90}\\right)^2 = \\dfrac{2924}{2025}.$  Độ lệch chuẩn của mẫu số liệu là $s = \\sqrt{\\dfrac{2924}{2025}} = \\dfrac{2\\sqrt{731}}{45}$."
  },
  {
    "id": "2D322DS6",
    "question": "Thầy Tuấn thống kê lại điểm trung bình cuối năm của các học sinh lớp $11A$ và $11B$ ở bảng sau:   <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS19_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của điểm số học sinh lớp $11A$ là $5$",
        "answer": false
      },
      {
        "text": "Nếu so sánh theo khoảng biến thiên thì điểm trung bình của các học sinh lớp $11B$ ít phân tán hơn điểm trung bình của các học sinh lớp $11A$",
        "answer": true
      },
      {
        "text": "Xét mẫu số liệu của lớp $11A$ ta có độ lệch chuẩn của mẫu số liệu ghép nhóm là $\\sqrt{0{,}51}$",
        "answer": false
      },
      {
        "text": "Nếu so sánh theo độ lệch chuẩn thì học sinh lớp $11A$ có điểm trung bình ít phân tán hơn học sinh lớp $11B$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Điểm số học sinh lớp $11A$ có thể thấp hơn $5$ nên khoảng biến thiên của điểm số học sinh lớp $11A$ có thể lớn hơn $5$.<br>- <strong>Đúng</strong>.<br>  Khoảng biến thiên của điểm trung bình của các học sinh lớp $11A$ là $R_1=10-5=5$.<br>  Khoảng biến thiên của điểm trung bình của các học sinh lớp $11B$ là $R_2=10-6=4$.<br>  Vì $R_1&gt;R_2$ nên nếu so sánh theo khoảng biến thiên thì điểm trung bình của các học sinh lớp $11B$ ít phân tán hơn điểm trung bình của các học sinh lớp $11A$.<br>- <strong>Sai</strong>.<br>  Chọn giá trị đại diện cho các nhóm số liệu, ta có  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS19_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xét mẫu số liệu của lớp $11A$ ta có số trung bình của mẫu số liệu ghép nhóm là  \\[\\overline{x}_1= \\dfrac{5{,}5 \\cdot 1 + 6{,}5 \\cdot 0 + 7{,}5 \\cdot 11 + 8{,}5 \\cdot 22 + 9{,}5 \\cdot 6}{1+0+11+22+6} = 8{,}3.\\]  Phương sai của mẫu số liệu ghép nhóm là  \\[\\dfrac{1\\cdot(5{,}5-8{,}3)^2+0\\cdot(6{,}5-8{,}3)^2+11\\cdot(7{,}5-8{,}3)^2+22\\cdot(8{,}5-8{,}3)^2+6\\cdot(9{,}5-8{,}3)^2}{1+0+11+22+6}=0{,}61.\\]  Độ lệnh chuẩn của mẫu số liệu ghép nhóm là $s_1=\\sqrt{0{,}61}$.<br>- <strong>Đúng</strong>.<br>  Xét mẫu số liệu của lớp $11B$ ta có số trung bình của mẫu số liệu ghép nhóm là  \\[  \\overline{x}_2 = \\dfrac{6{,}5 \\cdot 6 + 7{,}5 \\cdot 8 + 8{,}5 \\cdot 14 + 9{,}5 \\cdot 12}{6 + 8 + 14 + 12} = 8{,}3.  \\]   Phương sai của mẫu số liệu ghép nhóm là  \\[  \\dfrac{6\\cdot(6{,}5-8{,}3)^2 + 8\\cdot(7{,}5-8{,}3)^2 + 14\\cdot(8{,}5-8{,}3)^2 + 12\\cdot(9{,}5-8{,}3)^2}{6+8+14+12}= 1{,}06.  \\]   Độ lệch chuẩn của mẫu số liệu ghép nhóm là $s_2 = \\sqrt{1{,}06}$.<br>  Vì $s_1&lt;s_2$ nên nếu so sánh theo độ lệch chuẩn thì học sinh lớp $11A$ có điểm trung bình ít phân tán hơn học sinh lớp $11B$."
  },
  {
    "id": "2D323DS7",
    "question": "Thời gian hoàn thành bài kiểm tra môn Toán của các học sinh lớp $12$A và $12$B được ghi lại ở bảng sau:  <br><img src=\"data/12/2D3/im2D32/dlts_12_DLTS21_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên cho thời gian hoàn thành bài kiểm tra môn Toán của học sinh mỗi lớp là $20$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm về thời gian hoàn thành bài kiểm tra môn Toán của học sinh lớp $12$A là $7{,}78$ (kết quả làm tròn đến hàng phần trăm)",
        "answer": false
      },
      {
        "text": "Phương sai của mẫu số liệu ghép nhóm về thời gian hoàn thành bài kiểm tra môn Toán của học sinh lớp $12$B là $19{,}22$ (kết quả làm tròn đến hàng phần trăm)",
        "answer": true
      },
      {
        "text": "Nếu so sánh theo độ lệch chuẩn của mẫu số liệu ghép nhóm thì học sinh lớp $12$A có tốc độ hoàn thành bài kiểm tra môn Toán đồng đều hơn lớp $12$B",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Khoảng biến thiên thời gian hoàn thành bài kiểm tra môn Toán của học sinh mỗi lớp là $45-25=20$.<br>- <strong>Sai</strong>.<br>  Xét mẫu số liệu ghép nhóm của lớp $12$A:  Cỡ mẫu là $n=7 + 16 + 15 + 4 = 42$.  <br>- Tứ phân vị thứ nhất $Q_1$: Ta có $\\dfrac{1}{4} \\cdot 42 = 10{,}5$ nên nhóm chứa $Q_1$ là $[30;35)$.<br>  Do đó $Q_{1}=30+\\dfrac{\\dfrac{42}{4}-7}{16}\\cdot (35-30)\\approx 31{,}09$.<br>- Tứ phân vị thứ ba $Q_3$: Ta có $\\dfrac{3}{4} \\cdot 42 = 31{,}5$ nên nhóm chứa $Q_3$ là $[35;40)$.<br>  Do đó $Q_{3}=35+\\dfrac{\\dfrac{3\\cdot 42}{4}-23}{15}\\cdot (40-35)\\approx 37{,}83$.  Vậy khoảng tứ phân vị là $Q_3-Q_1=37{,}83-31{,}09=6{,}74$.<br>- <strong>Đúng</strong><br>  Giá trị trung bình của mẫu số liệu ghép nhóm của lớp $12$B là<br>  $\\overline{x} = \\dfrac{5 \\cdot 27{,}5 + 14 \\cdot 32{,}5 + 17 \\cdot 37{,}5 + 6 \\cdot 42{,}5}{42} = 35{,}36$<br>  Phương sai của mẫu số liệu ghép nhóm của lớp $12$B là<br>  $\\sigma^2 = \\dfrac{5\\cdot (27{,}5 - 35{,}36)^2+14\\cdot (32{,}5 - 35{,}36)^2+17\\cdot (37{,}5 - 35{,}36)^2+6\\cdot (42{,}5 - 35{,}36)^2}{42} \\approx 19{,}22$<br>- <strong>Đúng</strong>.<br>  Giá trị trung bình của mẫu số liệu ghép nhóm của lớp $12$A là<br>  $\\overline{x} = \\dfrac{7 \\cdot 27{,}5 + 16 \\cdot 32{,}5 + 15 \\cdot 37{,}5 + 4 \\cdot 42{,}5}{42} \\approx 34{,}4$<br>  Phương sai của mẫu số liệu ghép nhóm của lớp $12$A là<br>  $\\sigma^2 = \\dfrac{7\\cdot (27{,}5- 34{,}4)^2+16\\cdot (32{,}5 - 34{,}4)^2+15\\cdot (37{,}5 - 34{,}4)^2+4\\cdot (42{,}5 - 34{,}4)^2}{42} \\approx 18{,}99$<br>  Độ lệch chuẩn của lớp $12$A là $\\sigma =\\sqrt{\\sigma^2}=\\sqrt{18{,}99}\\approx 4{,}36$ .<br>  Độ lệch chuẩn của lớp $12$B là $\\sigma =\\sqrt{\\sigma^2}=\\sqrt{19{,}22}\\approx 4{,}38$ .<br>  Độ lệch chuẩn của lớp $12$A nhỏ hơn lớp $12$B.  Vậy học sinh lớp $12$A có tốc độ hoàn thành bài kiểm tra môn Toán đồng đều hơn lớp $12$B."
  }
];
