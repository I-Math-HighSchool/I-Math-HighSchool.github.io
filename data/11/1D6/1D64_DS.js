// =========================================================================
// KHỐI DỮ LIỆU: 1D64 - Đúng sai
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1D64 = [
  {
    "id": "1D646DS1",
    "question": "Thực hiện một mẻ nuôi cấy vi khuẩn với $1\\,200$ vi khuẩn ban đầu, nhà sinh học phát hiện số lượng vi khuẩn tăng thêm $25\\%$ sau mỗi hai ngày. Công thức $P(t)=P_0\\cdot a^t$ $(a&gt;0)$ cho phép tính số lượng vi khuẩn của mẻ nuôi cấy sau $t$ ngày kể từ thời điểm ban đầu.",
    "subQuestions": [
      {
        "text": "Số lượng vi khuẩn sau hai ngày là $1\\,200$",
        "answer": false
      },
      {
        "text": "Giá trị của $a$ bằng $1{,}12$ <em>(kết quả làm tròn đến hàng phần trăm)</em>",
        "answer": true
      },
      {
        "text": "Sau $7$ ngày thì số lượng vi khuẩn bằng $2\\,600$ <em>(kết quả làm tròn đến hàng trăm)</em>",
        "answer": true
      },
      {
        "text": "Sau $10$ ngày, số lượng vi khuẩn có được bằng $3{,}0$ lần số lượng vi khuẩn ban đầu <em>(kết quả làm tròn đến hàng phần mười)</em>",
        "answer": false
      }
    ],
    "explain": "<br>- Số lượng vi khuẩn sau hai ngày là $P(2)=1\\,200\\cdot(1+25\\%)=1\\,500$.<br>- $P(2)=1\\,200\\cdot a^2=1\\,500\\Rightarrow a^2=1{,}25\\Rightarrow a\\approx 1{,}12$.<br>- Sau $7$ ngày thì số lượng vi khuẩn bằng $P(7)=1\\,200\\cdot 1{,}12^7\\approx 2\\,600$.<br>- Số lượng vi khuẩn sau $10$ ngày là $P(10)=1\\,200\\cdot 1{,}12^{10}\\approx 3\\,727$.<br> $\\dfrac{P(10)}{P(0)}=\\dfrac{3\\,727}{1200}\\approx 3{,}1$."
  },
  {
    "id": "1D643DS2",
    "question": "Cho hàm số $f(x) = \\log_3(3 - x)$.",
    "subQuestions": [
      {
        "text": "Điều kiện xác định của hàm số là $x&lt;3$",
        "answer": true
      },
      {
        "text": "Tập nghiệm của bất phương trình $f(x) \\geq 1$ là $(-\\infty; 0]$",
        "answer": true
      },
      {
        "text": "Phương trình $f(x) = 2$ có nghiệm $x = -6$",
        "answer": true
      },
      {
        "text": "Đường thẳng đi qua góc tọa độ $O$ cắt đồ thị hàm số $f(x)$ tại hai điểm phân biệt $A$, $B$ sao cho $O$ là trung điểm của $AB$. Khi đó độ dài đoạn thẳng $AB \\approx 6,5$ (làm tròn đến hàng phần chục)",
        "answer": false
      }
    ],
    "explain": "<br>- Điều kiện xác định của hàm số là $3 - x &gt; 0 \\Leftrightarrow x &lt; 3$.<br>- Ta có   $f(x)\\geq 1$<br>$\\Leftrightarrow \\log_3(3 - x) \\geq 1$<br>$\\Leftrightarrow 3 - x \\geq 3^1 = 3$<br>$\\Leftrightarrow x \\leq 0.$  Vậy tập nghiệm là $(-\\infty; 0]$.<br>- Ta có  $f(x)=2$<br>$\\Leftrightarrow \\log_3(3 - x) = 2$<br>$\\Leftrightarrow 3 - x = 3^2$<br>$\\Leftrightarrow x = -6 \\quad \\text{thỏa mãn}.$  Vậy phương trình có nghiệm $x = -6$.<br>- Với hàm số $f(x) = \\log_3(x - 3)$, tập xác định là $x &gt; 3$. Đồ thị hàm số chỉ nằm bên phải đường thẳng $x = 3$.<br>  Giả sử đường thẳng $y = kx$ đi qua gốc tọa độ cắt đồ thị hàm số $f(x) = \\log_3(x - 3)$ tại điểm $A(x_A, y_A)$.<br>  Để $A$ thuộc đồ thị, cần $x_A &gt; 3$.<br>  Nếu $O$ là trung điểm của đoạn $AB$, thì điểm $B$ có tọa độ $(-x_A, -y_A)$. <br>  Để $B$ thuộc đồ thị, cần $-x_A &gt; 3$, suy ra $x_A &lt; -3$ (vô lý).<br>  Vậy không tồn tại hai giao điểm $A$ và $B$ trên đồ thị hàm số $f(x) = \\log_3(x - 3)$ thỏa mãn các điều kiện của bài toán."
  },
  {
    "id": "1D644DS3",
    "question": "Cho bất phương trình $\\log _{0{,}3}(2x+1) \\leq \\log _{0{,}3}(3x)$",
    "subQuestions": [
      {
        "text": "Tập xác định của bất phương trình là $\\mathscr{D}=\\left(-\\dfrac{1}{2};+\\infty\\right)$",
        "answer": false
      },
      {
        "text": "Bất phương trình tương đương với bất phương trình $2x+1\\leq 3x$",
        "answer": false
      },
      {
        "text": "Tập nghiệm của bất phương trình là $S=(0; 1]$",
        "answer": true
      },
      {
        "text": "$x=\\dfrac{1}{2}$ thuộc miền nghiệm của bất phương trình đã cho",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Điều kiện xác định của bất phương trình là $2x+1&gt;0 \\text{ và } 3x&gt;0\\Leftrightarrow x&gt;-\\dfrac{1}{2} \\text{ và } x&gt;0\\Rightarrow x&gt;0$.<br>  Vậy điều kiện xác định của bất phương trình là $\\mathscr{D}=\\left(0;+\\infty\\right)$.<br>- <strong>Sai</strong>.<br>  Với $x&gt;0$ và $a=0{,}3&lt;1$ bất phương trình trở thành $2x+1\\geq 3x$.<br>- <strong>Đúng</strong>.<br>  Với $x&gt;0$ và $a=0{,}3&lt;1$ bất phương trình trở thành $2x+1\\geq 3x\\Leftrightarrow x\\leq 1$.<br>  Kết hợp với điều kiện, ta được tập nghiệm của bất phương trình là $S=(0; 1]$.<br>- <strong>Đúng</strong>.<br>  Vì $\\dfrac{1}{2}\\in (0; 1]$ nên $x=\\dfrac{1}{2}$ thuộc miền nghiệm của bất phương trình đã cho."
  },
  {
    "id": "1D644DS4",
    "question": "Cho hàm số $y=\\left(\\dfrac{1}{3}\\right)^x$, phương trình $2^x=3$ và bất phương trình $\\log_{\\tfrac{1}{3}}(x+9)&lt;-2$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số $y=\\left(\\dfrac{1}{3}\\right)^x$ là $\\mathbb{R}$",
        "answer": true
      },
      {
        "text": "Hàm số $y=\\left(\\dfrac{1}{3}\\right)^x$ đồng biến trên tập xác định của nó",
        "answer": false
      },
      {
        "text": "Phương trình $2^x=3$ có nghiệm là $x=\\log_3 2$",
        "answer": false
      },
      {
        "text": "Tập nghiệm của bất phương trình $\\log_{\\tfrac{1}{3}}(x+9)&lt;-2$ là $(0;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Tập xác định của hàm số $y=\\left(\\dfrac{1}{3}\\right)^x$ là $\\mathbb{R}$.<br>- <strong>Sai</strong>. Hàm số $y=\\left(\\dfrac{1}{3}\\right)^x$ có cơ số là $0&lt;\\dfrac{1}{3}&lt;1$ nên hàm số nghịch biến trên tập xác định của nó.<br>- <strong>Sai</strong>. Phương trình $2^x=3$ có nghiệm là $x=\\log_2 3$.<br>- <strong>Sai</strong>. Ta có $\\log_{\\tfrac{1}{3}}(x+9)&lt;-2\\Leftrightarrow x+9&gt;0 \\text{ và } x+9&gt; \\left(\\dfrac{1}{3}\\right)^{-2}\\Leftrightarrow x&gt;0$.<br>  Tập nghiệm của bất phương trình $\\log_{\\tfrac{1}{3}}(x+9)&lt;-2$ là $(0;+\\infty)$."
  },
  {
    "id": "1D643DS5",
    "question": "Cho hàm số $y=\\log_3(x-2)$",
    "subQuestions": [
      {
        "text": "Phương trình $y=-1$ có nghiệm $x=\\dfrac{7}{3}$",
        "answer": false
      },
      {
        "text": "Hàm số đồng biến trên khoảng $(5;+\\infty)$",
        "answer": true
      },
      {
        "text": "Đồ thị hàm số đi qua điểm $A(5; 3)$",
        "answer": false
      },
      {
        "text": "Hàm số có tập xác định $\\mathscr{D}=(2;+\\infty)$",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có   \\[\\log_3(x-2)=-1 \\Leftrightarrow x-2=\\dfrac{1}{3} \\Leftrightarrow x=\\dfrac{7}{3}.\\]<br>- Vì hàm số $y=\\log_3(x-2)$ có cơ số $a=3&gt;1$ nên hàm số đồng biến trên khoảng $(2;+\\infty)$.<br>- Với $x=5$ thì $y=\\log_3(5-2)=\\log_3(3)=1$.<br>- Biểu thức $\\log_3(x-2)$ có nghĩa khi $x-2&gt;0$ hay $x&gt;2$.<br>  Vậy tập xác định của hàm số $y=\\log_3(x-2)$ là $\\mathscr{D}=(2;+\\infty)$."
  },
  {
    "id": "1D642DS6",
    "question": "Cho hàm số $f(x)=2^x$.",
    "subQuestions": [
      {
        "text": "Tập xác định của hàm số $f(x)$ là $\\mathscr{D}=(0;+\\infty)$",
        "answer": false
      },
      {
        "text": "Đồ thị hàm số $f(x)$ đi qua điểm $(0;1)$",
        "answer": true
      },
      {
        "text": "Hàm số $f(x)$ nghịch biến trên tập xác định của nó",
        "answer": false
      },
      {
        "text": "Bất phương trình $f'(x)\\le\\ln 2$ có tập nghiệm là $(-\\infty;0]$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Sai</strong>.<br>  Vì hàm số $f(x)$ có tập xác định là $\\mathscr{D}=(-\\infty;+\\infty)$.<br>- <strong>Đúng</strong>. <br>  Thay $x=0$ vào hàm số $f(x)=2^x$, ta được $f(0)=1$. Vậy đồ thị hàm số $f(x)$ đi qua điểm $(0;1)$.<br>- <strong>Sai</strong>. <br>  Vì $a=2&gt;1$ nên hàm số đồng biến trên tập xác định của nó.<br>- <strong>Đúng</strong>. <br>  Ta có $f'(x) = 2^x\\cdot \\ln{2}$. <br>  Do đó $2^x\\cdot \\ln{2}\\le\\ln {2}\\Leftrightarrow 2^x \\le 1 \\Leftrightarrow x \\le 0$."
  },
  {
    "id": "1D646DS2",
    "question": "Mức cường độ âm $L$ (dB) được tính bởi công thức $L=10 \\log \\dfrac{I}{10^{-12}}$, trong đó $I$ (W/m$^2$) là cường độ âm. Để đảm bảo sức khỏe cho công nhân, mức cường độ âm trong một nhà máy phải giữ sao cho không vượt quá $85$ dB.",
    "subQuestions": [
      {
        "text": "$L=10 \\log I+120$",
        "answer": true
      },
      {
        "text": "Nếu cường độ âm $I=1\\,000$ (W/m$^2$) thì mức cường độ âm không vượt quá $125$ dB",
        "answer": false
      },
      {
        "text": "Để mức cường độ âm không vượt quá $130$ dB thì cần cường độ âm $I \\le 10$ (W/m$^2$)",
        "answer": true
      },
      {
        "text": "Cường độ âm của nhà máy đó không vượt quá $10^{-3,5}$ (W/m$^2$) thì đảm bảo sức khỏe cho công nhân",
        "answer": true
      }
    ],
    "explain": "<br>- Ta có  $L = 10 \\log \\dfrac{I}{10^{-12}}$<br>$= 10 \\left( \\log I-\\log 10^{-12} \\right)$<br>$= 10 \\left( \\log I+12 \\right)$<br>$= 10 \\log I+120.$<br>- Thay $I=1\\,000=10^3$ (W/m$^2$) vào công thức  $L = 10 \\log 10^3+120$<br>$= 10 \\cdot 3+120=150 \\text{ (dB)}.$<br>- Điều kiện để mức cường độ âm không vượt quá $130$ dB là $L \\le 130$ dB.  $10 \\log I+120 \\le 130$<br>$\\Leftrightarrow 10 \\log I \\le 10$<br>$\\Leftrightarrow \\log I \\le 1$<br>$\\Leftrightarrow I \\le 10 \\text{ (W/m}^2).$<br>- Để đảm bảo sức khỏe, mức cường độ âm phải không vượt quá $85$ dB, tức là $L \\le 85$ dB.  $10 \\log I+120 \\le 85$<br>$\\Leftrightarrow 10 \\log I \\le -35$<br>$\\Leftrightarrow \\log I \\le -3{,}5$<br>$\\Leftrightarrow I \\le 10^{-3,5} \\text{ (W/m}^2).$"
  },
  {
    "id": "1D644DS2",
    "question": "Cho bất phương trình $\\log_{0,3}\\left(2x+1\\right)\\le \\log_{0,3}\\left(3x\\right)$",
    "subQuestions": [
      {
        "text": "Điều kiện xác định của bất phương trình là $x&gt;-\\dfrac{1}{2}$",
        "answer": false
      },
      {
        "text": "Bất phương trình tương đương với $2x+1\\le 3x$",
        "answer": false
      },
      {
        "text": "Tập nghiệm của bất phương trình là $S=\\left(0; 1\\right]$",
        "answer": true
      },
      {
        "text": "$x=\\dfrac{1}{2}$ thuộc tập nghiệm của bất phương trình đã cho",
        "answer": true
      }
    ],
    "explain": "<br>- Điều kiện xác định là $2x+1&gt;0 \\text{ và } 3x&gt;0\\Leftrightarrow x&gt;-\\dfrac{1}{2} \\text{ và } x&gt;0\\Leftrightarrow x&gt;0$.<br>- Với điều kiện $x&gt;0$, bất phương trình $\\log_{0,3}\\left(2x+1\\right)\\le \\log_{0,3}\\left(3x\\right)$ tương đương với $2x+1\\ge 3x$.<br>- Ta có $2x+1\\ge 3x\\Leftrightarrow x\\le 1$. <br>  Kết hợp với điều kiện $x&gt;0\\Rightarrow 0&lt;x\\le 1$ là nghiệm bất phương trình. <br>  Vậy tập nghiệm của bất phương trình là $S=\\left(0; 1\\right]$.<br>- Vì $x=\\dfrac{1}{2}$ thỏa mãn $0&lt;x\\le 1$ nên thuộc tập nghiệm của bất phương trình đã cho."
  }
];
