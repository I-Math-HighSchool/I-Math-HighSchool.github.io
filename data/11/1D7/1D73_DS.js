// =========================================================================
// KHỐI DỮ LIỆU: 1D73 - Đúng/Sai (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.dungSai1D73 = [
  {
    "id": "1D732DS1",
    "question": "Cho hàm số $y=f(x)=x^3+3x^2-9x+7$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Tiếp tuyến của $(C)$ tại điểm $x_0=2$ có phương trình là $y=15x-21$",
        "answer": true
      },
      {
        "text": "Phương trình $f'(x)=0$ có $2$ nghiệm $x=1$ và $x=3$",
        "answer": true
      },
      {
        "text": "Đạo hàm $f'(x)=3x^2+6x-9$",
        "answer": true
      },
      {
        "text": "Đạo hàm cấp hai $f\"(x)=0 \\Leftrightarrow x=-1$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có   \\[f(2)=2^3+3\\cdot2^2-9\\cdot2+7=9.\\]  Ta có $f'(x)=3x^2+6x-9$.<br>  Khi đó  \\[f'(2)=3 \\cdot 4+6 \\cdot 2-9=15.\\]  Phương trình tiếp tuyến của $(C)$ tại điểm $x_0=2$ là  \\[y=15(x-2)+9=15x-30+9=15x-21.\\]<br>- Ta có   \\[f'(x)=3x^2+6x-9=0 \\Leftrightarrow x^2+2x-3=0 \\Leftrightarrow x=1 \\text{ hoặc } x=-3.\\]<br>- Ta có   \\[f'(x)=3x^2+6x-9.\\]<br>- Ta có  \\[f\"(x)=6x+6.\\]  Khi đó   \\[f\"(x)=0 \\Leftrightarrow 6x+6=0 \\Leftrightarrow x=-1.\\]"
  },
  {
    "id": "1D732DS2",
    "question": "Cho hàm số $y=f(x)=\\dfrac{x^3}{3}-2 x^2-5 x+1$ có đồ thị $(C)$.",
    "subQuestions": [
      {
        "text": "Phương trình tiếp tuyến của đồ thị $(\\mathrm{C})$ tại điểm $M(0;1)$ là $y=-5x-1$",
        "answer": false
      },
      {
        "text": "Hệ số góc của tiếp tuyến của đồ thị $(\\mathrm{C})$ tại điểm có hoành độ $x_0=1$ bằng $-8$",
        "answer": true
      },
      {
        "text": "Đạo hàm cấp hai $f^{\\prime \\prime}(-2)=0$",
        "answer": false
      },
      {
        "text": "$f'(x)=3 x^2-4 x-5$",
        "answer": false
      }
    ],
    "explain": "Ta có $f'(x)=x^2-4 x-5 \\Rightarrow f^{\\prime \\prime}(x)=2x-4$.  <br>- <strong>Sai</strong>.<br>  Hệ số góc của tiếp tuyến đồ thị tại điểm $M(0;1)$ là $f'(0)=0^2-4\\cdot 0-5=-5$.<br>  Phương trình tiếp tuyến của đồ thị $(C)$ tại điểm $M(0 ; 1)$ có dạng  $y=-5\\cdot (x-0)+1 \\Leftrightarrow y=-5x+1.$<br>- <strong>Đúng</strong>. Hệ số góc của tiếp tuyến của đồ thị $(\\mathrm{C})$ tại điểm có hoành độ $x_0=1$ bằng $f'(1)=1^2-4\\cdot1-5=-8$.<br>- <strong>Sai</strong>. $f^{\\prime \\prime}(-2)=2\\cdot \\left(-2\\right)-4=-8$.<br>- <strong>Sai</strong>. $f'(x)=x^2-4 x-5$."
  },
  {
    "id": "1D733DS3",
    "question": "Một chất điểm chuyển động theo phương trình $s(t) = t^3 - 3t^2 + 8t + 1$, trong đó $t$ tính bằng giây và $s(t)$ tính bằng mét. Xét tính đúng sai các khẳng định sau.<br><img src=\"data/11/1D7/im1D73/dlts_12_DLTS36_010.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "Vận tốc của chất điểm tại thời điểm $t = 3$ s bằng $8$ m/s",
        "answer": false
      },
      {
        "text": "Tại thời điểm mà chất điểm di chuyển được $13$ m, vận tốc khi đó bằng $8$ m/s",
        "answer": false
      },
      {
        "text": "Vận tốc nhỏ nhất của chất điểm là $5$ m/s",
        "answer": true
      },
      {
        "text": "Gia tốc tại thời điểm chất điểm đạt vận tốc nhỏ nhất bằng $2$ m/s$^2$",
        "answer": false
      }
    ],
    "explain": "<br>- Ta có vận tốc tức thời tại thời điểm $t$ là $v(t) = s'(t) = 3t^2 - 6t + 8$.  \\[  v(3) = 3 \\cdot 3^2 - 6 \\cdot 3 + 8 = 17 \\, (\\text{m/s}).  \\]<br>- Lưu ý đề không ghi $s(t)$ là quãng đường nên ta hiểu $s(t)$ là vị trí của điểm trên trục thẳng tại thời điểm $t$. <br>  Vị trí ban đầu $s(0)=1$ mét tức là vật đang cách mốc tọa độ $O$ $1$ mét theo chiều dương (chứ không phải ban đầu quãng đường đi được là 1 mét). <br>  Quãng đường đề cho không nói gì thì ta hiểu là kể từ thời điểm ban đầu $t=0$. <br>  Khảo sát hàm $s(t)$, ta được bảng biến thiên như hình bên.<br>  Từ bảng biến thiên ta thấy vật luôn chuyển động theo chiều dương.<br>  Do đó quãng đường từ thời điểm ban đầu đến thời điểm $t_0$ được $13$ mét là   $s(t_0)-s(0)=13 \\Leftrightarrow t_0^3 - 3t_0^2 + 8t_0 + 1 - 1 = 13$<br>$\\Leftrightarrow t_0^3 - 3t_0^2 + 8t_0-13=0   \\Leftrightarrow t_0 \\approx 2{,}1194 \\; (\\text{giây}) \\; \\rightarrow \\text{STO A}$  Khi $t = t_0$ (đã STO A trong máy tính), vận tốc của chất điểm là $v(t_0) = s'(t_0) \\approx 8{,}76$ (m/s).<br>- Xét $v(t) = 3t^2 - 6t + 8 = 3(x-1)^2+5 \\ge 5, \\quad t \\geq 0 $.<br>  Suy ra giá trị nhỏ nhất của $v(t)=5$ (m/s) đạt tại $t = 1$ s.<br>- Ta có $a(t) = v'(t) = 6t - 6$  Vận tốc nhỏ nhất của chất điểm đạt tại $t = 1$ s.<br>  Khi đó, gia tốc là $a(1) = 0$ m/s."
  }
];
