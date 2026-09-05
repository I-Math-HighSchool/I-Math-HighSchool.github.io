// =========================================================================
// KHỐI DỮ LIỆU: 2D31 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai2D31 = [
  {
    "id": "2D314DS1",
    "question": "Bảng bên biểu diễn mẫu số liệu ghép nhóm thống kê mức lương của một công ty (đơn vị: triệu đồng).<br><img src=\"data/12/2D3/im2D3/2D31_tikz_013.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu này là $R=25$",
        "answer": false
      },
      {
        "text": "Tứ phân vị thứ nhất của mẫu số liệu là $Q_1=15$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ ba của mẫu số liệu là $Q_3=27$",
        "answer": false
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=12$",
        "answer": false
      }
    ],
    "explain": "<br>- Trong mẫu số liệu ghép nhóm ở bảng, ta có đầu mút trái của nhóm $1$ là $a_1=10$, đầu mút phải của nhóm $6$ là $a_7=40$.<br>Vậy khoảng biến thiên của mẫu số liệu ghép nhóm đó là $R=a_7-a_1=40-10=30.$<br>- Ta có bảng sau  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Số phần tử của mẫu là $n=60$. <br>  Nhóm $[15;20)$ là nhóm chứa tứ phân vị thứ nhất.   Áp dụng công thức, ta có tứ phân vị thứ nhất là $Q_1=15+\\left(\\dfrac{15-15}{18}\\right)\\cdot 5=15 ~\\text{(triệu đồng)}.$<br>- Nhóm $[25;30)$ là nhóm chứa tứ phân vị thứ 3. Áp dụng công thức, ta có tứ phân vị thứ ba là  $Q_3=25+\\left(\\dfrac{45-43}{10}\\right)\\cdot5=26 ~\\text{(triệu đồng)}.$<br>- Khoảng tứ phân vị của mẫu số liệu ghép nhóm đã cho là   $\\Delta _Q=Q_3-Q_1=26-15=11 ~\\text{(triệu đồng)}.$"
  },
  {
    "id": "2D314DS2",
    "question": "Điều tra một số hộ gia đình thu nhập ở mức trung bình sinh sống trên hai địa bàn $A$, $B$, người ta thấy diện tích nhà ở của họ đều nhỏ hơn $100$ m$^2$. Hai biểu đồ dưới biểu diễn kết quả thống kê.   <br><img src=\"data/12/2D3/im2D3/2D31_tikz_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>   <em>Hình 3.3a. Diện tích nhà ở của cư dân địa bàn $A$</em>  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_016.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"><br>  <em>Hình 3.3b. Diện tích nhà ở của cư dân địa bàn $B$</em>",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của hai mẫu số liệu này bằng nhau",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị ghép nhóm diện tích căn hộ của địa phương A là $10{,}9$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị ghép nhóm diện tích căn hộ của địa phương B là $8{,}5$.",
        "answer": false
      },
      {
        "text": "Số liệu về diện tích nhà ở của cư dân thuộc địa bàn A phân tán hơn địa bàn B",
        "answer": false
      }
    ],
    "explain": "Ta có bảng tần số tích luỹ như sau:  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_017.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- [a)]<br>- Khoảng biến thiên của hai mẫu số liệu này bằng nhau và bằng $100=50=50$.<br>- Xét bảng số liệu $A$, ta có $N=100; \\dfrac{N}{4}=25; \\dfrac{N}{2}=50; \\dfrac{3N}{4}=75$.  <br>- [$\\bullet$] Nhóm chứa $Q_1^A$ là $[60 ; 70)$. Suy ra  $Q_1^A=60+\\dfrac{25-8}{20} \\cdot 10 = 68,5 $<br>- [$\\bullet$] Nhóm chứa $Q_3^A$ là $[70;80)$. Suy ra  $Q_3^A=70+\\dfrac{75 -28}{50} \\cdot 10=79{,}4$  Vậy khoảng tứ phân vị ghép nhóm diện tích căn hộ của địa phương A là<br> $\\Delta_{Q_A} =79{,}4-68{,}5=10{,}9$.<br>- Xét bảng số liệu $B$, ta có $N=100; \\dfrac{N}{4}=25; \\dfrac{N}{2}=50; \\dfrac{3N}{4}=75$.  <br>- [$\\bullet$] Nhóm chứa $Q_1^B$ là $[60 ; 70)$. Suy ra  $Q_1^B=60+\\dfrac{25 -15}{20} \\cdot 10=65.$<br>- [$\\bullet$] Nhóm chứa $Q_3^B$ là $[80;90)$.Suy ra  $Q_3^B=80+\\dfrac{75 -65}{20} \\cdot 10= 85.$  Vậy khoảng tứ phân vị ghép nhóm diện tích căn hộ của địa phương B là là $\\Delta_{Q_B} =85-65=20$.<br>- $\\Delta_{Q_B}&gt;\\Delta_{Q_A}$ nên dựa vào khoảng tứ phân vị về diện tích căn hộ người dân hai địa phương, ta thấy địa phương B phân tán hơn."
  },
  {
    "id": "2D314DS3",
    "question": "Bảng tần số ghép nhóm dưới đây thể hiện kết quả điều tra về tuổi thọ trung bình của nam giới và nữ giới ở $50$ quốc gia.  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_018.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu về độ tuổi trung bình của nam giới là $50$",
        "answer": false
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu về độ tuổi trung bình của nam giới là $14{,}75$",
        "answer": false
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu về độ tuổi trung bình của nữ giới là $15$",
        "answer": false
      },
      {
        "text": "Dựa vào khoảng tứ phân vị thì tuổi thọ trung bình của nam giới đều hơn tuổi thọ trung bình của nữ giới",
        "answer": true
      }
    ],
    "explain": "<br>- Khoảng biến thiên của mẫu số liệu về độ tuổi trung bình của nam giới là $90-50=40$.<br>- Xét ở nam giới, ta có cỡ mẫu $n=50$.<br>  Gọi $x_1$; $x_2$; \\ldots; $x_{50}$ là mẫu số liệu gồm tuổi thọ của $50$ nam giới.<br>  Ta có: $x_1$, \\ldots, $x_4\\in[50;55)$; $x_5$, \\ldots, $x_{11}\\in[55;60)$; $x_{12}$, \\ldots, $x_{15}\\in[60;65)$; $x_{16}$, \\ldots, $x_{21}\\in[65;70)$; $x_{22}$, \\ldots, $x_{36}\\in[70;75)$; $x_{37}$, \\ldots, $x_{48}\\in[75;80)$; $x_{49}$, $x_{50}\\in[80;85)$.<br>  Tứ phân vị thứ nhất của mẫu số liệu là $x_{13}\\in[60;65)$. Do đó, tứ phân vị thứ nhất của mẫu số liệu nam giới là  $Q_1=60+\\dfrac{\\dfrac{50}{4}-(4+7)}{4}\\cdot(65-60)=\\dfrac{495}{8}.$  Tứ phân vị thứ ba của mẫu số liệu là $x_{38}\\in[75;80)$. Do đó, tứ phân vị thứ ba của mẫu số liệu nam giới là  $Q_3=75+\\dfrac{\\dfrac{3\\cdot50}{4}-(4+7+4+6+15)}{12}\\cdot(80-75)=\\dfrac{605}{8}.$  Vậy khoảng tứ phân vị của mẫu số liệu nam giới là $\\Delta_Q=Q_3-Q_1=\\dfrac{55}{4}=13{,}75$.<br>- Xét ở nữ giới, ta có cỡ mẫu $n=50$.<br>  Gọi $x_1$; $x_2$; \\ldots; $x_{50}$ là mẫu số liệu gồm tuổi thọ của $50$ nữ giới.<br>  Ta có: $x_1$, $x_2$, $x_3\\in[50;55)$; $x_4$, \\ldots, $x_7\\in[55;60)$; $x_8$, \\ldots, $x_{12}\\in[60;65)$; $x_{13}$, $x_{14}$, $x_{15}\\in[65;70)$; $x_{16}$, \\ldots, $x_{22}\\in[70;75)$; $x_{23}$, \\ldots, $x_{36}\\in[75;80)$; $x_{37}$, \\ldots, $x_{49}\\in[80;85)$; $x_{50}\\in[85;90)$.<br>  Tứ phân vị thứ nhất của mẫu số liệu là $x_{13}\\in[65;70)$. Do đó, tứ phân vị thứ nhất của mẫu số liệu nữ giới là  $Q_1=65+\\dfrac{\\dfrac{50}{4}-(3+4+5)}{3}\\cdot(70-65)=\\dfrac{395}{6}.$  Tứ phân vị thứ ba của mẫu số liệu là $x_{38}\\in[80;85)$. Do đó, tứ phân vị thứ ba của mẫu số liệu nữ giới là  $Q_3=80+\\dfrac{\\dfrac{3\\cdot50}{4}-(3+4+5+3+7+14)}{13}\\cdot(85-80)=\\dfrac{2095}{26}.$  Vậy khoảng tứ phân vị của mẫu số liệu nữ giới là $\\Delta_Q=Q_3-Q_1=\\dfrac{575}{39}\\approx14{,}74$.<br>- Do khoảng tứ phân vị của mẫu số liệu của nam giới nhỏ hơn mẫu số liệu của nữ giới nên tuổi thọ của nam giới đều hơn tuổi thọ của nữ giới."
  },
  {
    "id": "2D314DS4",
    "question": "Hằng ngày ông Minh đều đi xe buýt từ nhà đến cơ quan. Dưới đây là bản thống kê thời gian ông Minh đi xe buýt từ nhà đến cơ quan  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS15_011.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Tổng số lần ông Minh đã đi là $100$",
        "answer": true
      },
      {
        "text": "Trong $100$ lần ông Minh đã đi, hiệu số thời gian của hai lần bất kì không vượt quá $18$ phút",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q=4{,}43$ (kết quả đã làm tròn đến hàng phần trăm)",
        "answer": false
      },
      {
        "text": "Phương sai của mẫu số liệu đã cho bằng $10$",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Cỡ mẫu $n=100$.<br>- <strong>Đúng</strong>. Khoảng biến thiên $33-15=18$.<br>- <strong>Sai</strong>. Tứ phân vị thứ nhất  $  Q_1 = 15 + \\dfrac{\\dfrac{1 \\cdot 100}{4}-0}{22} \\cdot (18-15)  \\approx 18{,}41.  $   Tứ phân vị thứ ba  $  Q_3 = 21 + \\dfrac{\\dfrac{3 \\cdot 100}{4}-60}{27} \\cdot (24-21)  = 22{,}67.  $  Khoảng tứ phân vị  $  \\Delta_Q = Q_3 - Q_1 = 4{,}26.  $<br>- <strong>Sai</strong>. Giá trị trung bình  $  \\overline{x} =   \\dfrac{22 \\cdot 16{,}5 + 38 \\cdot 19{,}5 + 27 \\cdot 22{,}5 + 8 \\cdot 25{,}5 + 4 \\cdot 28{,}5 + 1 \\cdot 31{,}5}{100}  = 20{,}61.  $  Phương sai  $  S^2 =   \\dfrac{1}{100} \\cdot \\left(22 \\cdot 16{,}5^2 + 38 \\cdot 19{,}5^2 + 27 \\cdot 22{,}5^2 + 8 \\cdot 25{,}5^2 + 4 \\cdot 28{,}5^2 + 1 \\cdot 31{,}5^2\\right) - 20{,}61^2  = 10{,}73.  $"
  },
  {
    "id": "2D314DS5",
    "question": "Cho mẫu số liệu ghép nhóm như sau:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS20_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Khoảng biến thiên của mẫu số liệu trên là $40$",
        "answer": true
      },
      {
        "text": "Tứ phân vị thứ nhất của mẫu số liệu trên là $Q_1=19{,}4$",
        "answer": true
      },
      {
        "text": "Tần số tích lũy của nhóm thứ ba là $cf_3=10$",
        "answer": true
      },
      {
        "text": "Phương sai của mẫu số liệu trên là $s^2=88{,}2$",
        "answer": false
      }
    ],
    "explain": "<br>- Khoảng biến thiên của mẫu số liệu trên là $R=50-10=40$.<br>- Cỡ mẫu $n=26$. Ta có $\\dfrac{26}{4}=6{,}5$ suy ra nhóm $[15;20)$ chứa $Q_1$.<br>  Ta có $Q_1=15+\\dfrac{6{,}5-3}{4}\\cdot5\\approx19{,}4$.<br>- $cf_3=3+4+3=10$.<br>- Ta có số trung bình $\\overline{x}=\\dfrac{3\\cdot12{,}5+4\\cdot17{,}5+3\\cdot22{,}5+5\\cdot27{,}5+6\\cdot32{,}5+2\\cdot37{,}5+2\\cdot42{,}5+1\\cdot47{,}5}{26}=27{,}5.$  Phương sai của mẫu số liệu là   $s^2=\\dfrac{3\\cdot\\left(12{,}5-27{,}5\\right)^2+4\\cdot\\left(17{,}5-27{,}5\\right)^2+\\cdots+1\\cdot\\left(47{,}5-27{,}5\\right)^2}{26}\\approx90{,}38.$"
  },
  {
    "id": "2D313DS1",
    "question": "Khảo sát chiều cao của $20$ học sinh nam lớp $12$A của một trường THPT X, người ta được kết quả thống kê trong bảng sau  <br><img src=\"data/12/2D3/im2D31/loc8_TT_THPT_NguyenKh_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Gọi $x_1$; $x_2$; \\ldots; $x_{20}$ là mẫu số liệu gốc gồm chiều cao của $20$ học sinh trên được xếp theo thứ tự không giảm. Khi đó $x_3 \\in[165 ; 170)$ và $x_9 \\in[170 ; 175)$",
        "answer": false
      },
      {
        "text": "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm đã cho bằng $175$",
        "answer": true
      },
      {
        "text": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm đã cho bằng $8{,}5$",
        "answer": false
      },
      {
        "text": "Chọn ngẫu nhiên một học sinh trong nhóm khảo sát nói trên, xác suất chọn được học sinh có chiều cao từ 175 cm trở lên bằng $0{,}25$",
        "answer": true
      }
    ],
    "explain": "<br>- Cỡ mẫu $n=20$.<br>  Gọi $x_1$; $x_2$; \\ldots; $x_{20}$ là mẫu số liệu gốc gồm chiều cao của $20$ học sinh trên được xếp theo thứ tự không giảm.<br>  Ta có $x_1$; $x_2$; $x_3 \\in[160 ; 165)$; $x_4$; \\ldots; $x_8 \\in[165 ; 170)$; $x_9$; \\ldots; $x_{15} \\in[170 ; 175)$; $x_{16}$; \\ldots; $x_{19} \\in[175 ; 180)$; $x_{20} \\in[180 ; 185)$.<br>  Do đó $x_3 \\notin[165 ; 170)$ và $x_9 \\in[170 ; 175)$.<br>- Tứ phân vị thứ nhất của mẫu số liệu gốc là $\\dfrac{1}{2}\\left(x_5+x_6\\right) \\in[165 ; 170)$.<br>  Tứ phân vị thứ nhất của mẫu số liệu ghép nhóm đã cho là $Q_1=165+\\dfrac{\\dfrac{20}{4}-3}{5}\\cdot5=167$.<br>  Tứ phân vị thứ ba của mẫu số liệu gốc là $\\dfrac{1}{2}\\left(x_{15}+x_{16}\\right)$, giá trị $x_{15} \\in[170 ; 175)$, giá trị $x_{16}\\in[175 ; 180)$.<br>  Do đó tứ phân vị thứ ba của mẫu số liệu ghép nhóm đã cho là $Q_3=175$.<br>- Khoảng tứ phân vị của mẫu số liệu ghép nhóm $\\Delta Q=Q_3-Q_1=175-167=8$.<br>- Vì học sinh có chiều cao từ $175$ cm trở lên nên có $5$ học sinh.<br>  Gọi $A$ là biến cố \\lq\\lq học sinh có chiều cao từ $175$ cm trở lên\\rq\\rq.<br>  Do đó $\\mathrm{P}(A)=\\dfrac{5}{20}=\\dfrac{1}{4}=0{,}25$"
  }
];
