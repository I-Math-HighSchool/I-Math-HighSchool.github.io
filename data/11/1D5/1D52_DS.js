// =========================================================================
// KHỐI DỮ LIỆU: 1D52 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
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
  }
];
