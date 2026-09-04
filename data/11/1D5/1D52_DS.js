// =========================================================================
// KHỐI DỮ LIỆU: 1D52 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D52 = [
  {
    "id": "1D523DS1",
    "question": "Đo thời gian chạy cự li $1000$ m (đơn vị: giây) của các bạn học sinh trong lớp $11A$ thu được mẫu  số liệu ghép nhóm sau:  <br><img src=\"data/11/1D5/im1D52/dlts_11_DLTS19_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Giá trị $Q_2-Q_1=\\dfrac{m}{n}$ với $\\dfrac{m}{n}$ là phân số tối giản, khi đó $m+n=71$",
        "answer": true
      },
      {
        "text": "Nhóm chứa mốt của mẫu số liệu là $[129;131)$",
        "answer": true
      },
      {
        "text": "Số trung bình của mẫu số liệu trên là $\\dfrac{911}{7}$",
        "answer": false
      },
      {
        "text": "Nhóm chứa tứ phân vị thứ nhất của mẫu số liệu là $[127;129)$",
        "answer": true
      }
    ],
    "explain": "<br>- $n=3+8+14+10+5=40$, $\\dfrac{n}{2}=\\dfrac{40}{2}=20\\Rightarrow Q_2$ thuộc $[129;131)$. <br>   $Q_2=129+\\dfrac{20-(3+8)}{14}\\cdot (131-129)=\\dfrac{912}{7}$.<br>   $\\dfrac{n}{4}=\\dfrac{40}{4}=10\\Rightarrow Q_1$ thuộc $[127;129)$.<br>   $Q_1=127+\\dfrac{10-3}{8}\\cdot (129-127)=\\dfrac{515}{4}$.<br>  $Q_2-Q_1=\\dfrac{912}{7}-\\dfrac{515}{4}=\\dfrac{43}{28}\\Rightarrow m=43$, $n=28$, $m+n=43+28=71$.<br>- $\\dfrac{n}{2}=\\dfrac{40}{2}=20\\Rightarrow Q_2$ thuộc $[129;131)$.<br>- Bảng giá trị đại diện  <br><img src=\"data/11/1D5/im1D52/dlts_11_DLTS19_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  $\\overline{x}=\\dfrac{3\\cdot 126+8\\cdot 128+14\\cdot 130+10\\cdot 132+5\\cdot 134}{3+8+14+10+5}=\\dfrac{1303}{10}$.<br>- $\\dfrac{n}{4}=\\dfrac{40}{4}=10\\Rightarrow Q_1$ thuộc $[127;129)$."
  },
  {
    "id": "1D523DS2",
    "question": "Số năm giảng dạy của một số giáo viên trường THPT A được ghi lại ở bảng sau  <br><img src=\"data/11/1D5/im1D52/dlts_11_DLTS35_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Mẫu số liệu ở bảng trên có $100$ số liệu",
        "answer": true
      },
      {
        "text": "Số trung bình của mẫu ghép nhóm là $14$",
        "answer": false
      },
      {
        "text": "Nhóm chứa mốt của mẫu số liệu trên là nhóm $[5;10)$",
        "answer": false
      },
      {
        "text": "Trung vị $Q_2$ của mẫu số liệu ghép nhóm là $\\dfrac{430}{33}$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D5/im1D52/dlts_11_DLTS35_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- <strong>Đúng</strong>. Mẫu số liệu ở bảng trên có $n=5+25+33+29+8=100$ số liệu.<br>- <strong>Sai</strong>. Số trung bình của mẫu ghép nhóm là  $\\overline{\\rm x}=\\dfrac{2{,}5\\cdot 5+7{,}5 \\cdot 25+ 12{,}5 \\cdot 33 + 17{,}5 \\cdot 29 + 22{,}5 \\cdot 8}{100}=13.$<br>- <strong>Sai</strong>. Nhóm chứa mốt của mẫu số liệu trên là nhóm có tần số lớn nhất $[10; 15)$.<br>- <strong>Đúng</strong>.<br>  Gọi $x_1$; $x_2$; $x_3$;$\\ldots$; $x_{100}$ là mẫu số liệu được xếp theo thứ tự không giảm ($n=100$).<br>  Ta có $x_1$, $\\ldots$, $x_5 \\in [0 ; 5)$; $x_6$, $\\ldots$, $x_{30} \\in [5; 10)$; $x_{31}$, $\\ldots$, $x_{63} \\in [10; 15)$; $x_{64}$, $\\ldots$, $x_{92} \\in [15; 20)$; $x_{93}$, $\\ldots$, $x_{100} \\in [20; 25)$.<br>  Tứ phân vị thứ hai của dãy số liệu $x_1$; $x_2$; $x_3$;...; $x_{100}$ là $\\dfrac{1}{2} \\cdot \\left( x_{50} +x_{51} \\right)$.<br>  Do $x_{50}$, $x_{51}$ thuộc nhóm $[10;15)$ nên trung vị của mẫu số liệu ghép nhóm là  $Q_2=10+ \\dfrac{\\dfrac{100}{2}-\\left( 5+25 \\right)}{33} \\cdot \\left( 15-10 \\right) =\\dfrac{430}{33}.$"
  },
  {
    "id": "1D523DS3",
    "question": "Một bảng xếp hạng đã tính điểm chuẩn hoá cho chỉ số nghiên cứu của một số trường đại học ở Việt Nam và thu được kết quả sau:  <br><img src=\"data/11/1D5/im1D52/loc3_1_TL_TN_DS_THPT__007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Số liệu đã cho cho có $35$ mẫu số liệu",
        "answer": true
      },
      {
        "text": "Số trung bình của mẫu số liệu đã cho là $28$",
        "answer": false
      },
      {
        "text": "Số trung vị của mẫu số liệu là $M_{e}=12$",
        "answer": false
      },
      {
        "text": "Ngưỡng điểm để đưa ra danh sách $25\\%$ trường đại học có chỉ số nghiên cứu tốt nhất Việt Nam là trên $35{,}42$",
        "answer": true
      }
    ],
    "explain": "<br>- Số các số liệu đã cho có mẫu số liệu là $n=4+19+6+2+3+1=35$.<br>- Số trung bình cộng của mẫu số liệu đã cho là<br>  \\[\\overline{x}=\\dfrac{4\\cdot 15+19\\cdot 25+6\\cdot 35+2\\cdot 45+3\\cdot 55+1\\cdot 65}{35}\\approx30{,}43.\\]<br>- Vị trí của số trung vị là $\\dfrac{35+1}{2}=18$.<br>  Do đó, giá trị trung vị của mẫu số liệu nằm trong khoảng $[20;30)$.<br>- Gọi $x_1$, $x_2$, $\\ldots$, $x_{35}$ là điểm chuẩn hóa cho chỉ số nghiên cứu của các trường đại học và giả sử dãy này đã sắp xếp theo thứ tự tăng dần. Khi đó, trung vị của mẫu số liệu là $M_e=x_{18}$ và tứ phân vị thứ ba $Q_3$ của mẫu số liệu là trung vị của nửa số liệu bên phải $M_e$, đó là dãy gồm 17 số liệu $x_{19}$, $x_{20}$, $\\ldots$, $x_{35}$, do đó $Q_3=x_{27}$.<br>  Do $x_{27}$ thuộc nhóm $[30;40$ ) nên nhóm này chứa $Q_3$.<br>  Do đó, $p=3$; $a_3=30$; $m_3=6$; $m_1+m_2=4+19=23$; $a_4-a_3=40-30=10$ và ta có   \\[Q_3=30+\\dfrac{\\dfrac{3{,}35}{4}-23}{6} \\cdot 10 \\approx 35{,}42.\\]   $25\\%$ trường đại học có chỉ số nghiên cứu tốt nhất là $25\\%$ giá trị nằm bên phải $Q_3$.<br>  Vậy điểm ngưỡng để đưa ra danh sách $25\\%$ trường đại học có chỉ số nghiên cứu tốt nhất Việt Nam là những trường có điểm chuẩn hóa lớn hơn hoặc bằng $35{,}42$."
  }
];
