// =========================================================================
// KHỐI DỮ LIỆU: 1D63 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1D63 = [
  {
    "id": "1D635TL1",
    "question": "Vào đầu mỗi tháng, ông An đều gửi vào ngân hàng số tiền cố định $30$ triệu đồng theo hình thức lãi kép với lãi suất $0{,}6\\%$/tháng. Tính số tiền ông An có được sau tháng thứ hai (làm tròn đến hàng phần mười).",
    "answer": "60,5",
    "explain": "Số tiền ông An có được  <br>- Sau tháng thứ nhất là   $T_1 = 30 + 30 \\cdot \\dfrac{0,6}{100} = 30 \\left( 1 + \\dfrac{0{,}6}{100} \\right) = 30{,}18 \\text{ (triệu đồng)}.$<br>- Sau tháng thứ hai   $T_2 = (30{,}18 + 30) + 0{,}6 \\cdot (30{,}18 + 30) = 60{,}5 \\text{ (triệu đồng)}.$"
  },
  {
    "id": "1D635TL2",
    "question": "Chị An gửi vào một ngân hàng số tiền $50$ triệu đồng với lãi suất $7{,}2\\%$/năm. Biết rằng chị An không rút tiền ra khỏi ngân hàng thì cứ sau mỗi năm, số tiền lãi được nhập vào vốn ban đầu (người ta gọi đó là lãi kép). Sau $8$ năm gửi tiền, chị An rút được cả lãi lẫn gốc là bao nhiêu triệu đồng. (Kết quả làm tròn đến hàng phần chục).",
    "answer": "87{,}5",
    "explain": "Áp dụng công thức lãi kép: $P_n = P_0 (1+r)^n$, trong đó:<br>  $P_0$ là số tiền gửi ban đầu.<br>  $r$ là lãi suất hàng năm.<br>  $n$ là số năm gửi.<br>  $P_n$ là tổng số tiền (cả gốc lẫn lãi) sau $n$ năm.<br>  Với $P_0 = 50$ triệu đồng, $r = 7{,}2\\% = 0{,}072$, và $n = 8$ năm.<br>  Số tiền chị An rút được sau $8$ năm là:  $P_8 = 50 (1 + 0{,}072)^8 = 50 (1{,}072)^8\\approx 87{,}5282\\ldots$ (triệu đồng).<br>  Làm tròn đến hàng phần chục (một chữ số thập phân), ta được $P_8 \\approx 87{,}5$ triệu đồng.<br>  Vậy sau $8$ năm, chị An rút được khoảng $87{,}5$ triệu đồng."
  },
  {
    "id": "1D632TL3",
    "question": "Cường độ của một trận động đất (độ Richter) được tính bởi công thức $R=\\log \\dfrac{A}{A_{0}}$, với $A$ là biên độ rung chấn tối đa và $A_{0}$ là một biên độ chuẩn (hằng số). Đầu năm 2024, một trận động đất xảy ra ở Bắc Sulawesi, Indonesia có cường độ $6\\text{,}7$ độ Richter. Trong cùng khoảng thời gian đó, một trận động đất khác ở Ishikawa, Nhật Bản có biên độ rung chấn tối đa mạnh hơn gấp $3$ lần trận động đất tại Indonesia. Hỏi trận động đất ở Nhật Bản có cường độ là bao nhiêu độ Richter (làm tròn kết quả đến hàng phần mười)?",
    "answer": "7\\text{,}2",
    "explain": "Gọi cường độ của trận động đất ở Indonesia và Nhật Bản lần lượt là $R_{I}$ và $R_{N}$.<br>  Gọi biên độ rung chấn tối đa ở Indonesia và Nhật Bản lần lượt là $A_{I}$ và $A_{N}$.<br>  Theo đề bài ta có $R_{I}=6\\text{,}7$ và $A_{N}=3A_{I}$.  $R_{N}=\\log \\dfrac{A_{N}}{A_{0}}$<br>$\\Leftrightarrow R_{N}=\\log \\dfrac{3A_{I}}{A_{0}}$<br>$\\Leftrightarrow R_{N}=\\log 3 +\\log \\dfrac{A_{N}}{A_{0}}$<br>$\\Leftrightarrow R_{N}=\\log 3 +R_{I}$<br>$\\Leftrightarrow R_{N} =\\log 3 +6\\text{,}7$<br>$\\Leftrightarrow R_{N} \\approx 7\\text{,}2.$  Vậy trận động đất ở Nhật Bản có cường độ là $7\\text{,}2$ độ Richter."
  },
  {
    "id": "1D632TL4",
    "question": "Tập giá trị của hàm số $y=\\log_2 x$ trên đoạn $[2;8]$ có dạng $[a;b]$. Tính $a+b$.",
    "answer": "4",
    "explain": "Ta có $2\\le x\\le 8\\Rightarrow \\log_2 2\\le \\log_2 x\\le \\log_2 8\\Leftrightarrow 1\\le y\\le 3$.<br>  Suy ra $a=1$, $b=3$. Vậy $a+b=4$."
  },
  {
    "id": "1D635TL5",
    "question": "Trong một phòng thí nghiệm, người ta nuôi một loại vi khuẩn. Lúc đầu có $250$ vi khuẩn. Sau một giờ, số vi khuẩn là $750$ con. Giả sử số vi khuẩn tăng lên theo công thức tăng trưởng mũ, số vi khuẩn sau $x$ giờ là $f(x)=C\\mathrm{e}^{kx}$. Hỏi số vi khuẩn có được sau $3$ giờ?",
    "answer": "6750",
    "explain": "Lúc đầu có $250$ vi khuẩn nên ta có \\[f(0)=250 \\Leftrightarrow C \\mathrm{e}^{k \\cdot 0}=250 \\Leftrightarrow C=250.\\]  Sau một giờ, số vi khuẩn là $750$ con nên \\[f(1)=750 \\Leftrightarrow 250\\mathrm{e}^{k \\cdot 1}=750 \\Leftrightarrow e^k=3 \\Leftrightarrow k=\\ln 3.\\]  Số vi khuẩn sau $3$ giờ là \\[f(3)=C\\mathrm{e}^{3k}=250\\mathrm{e}^{3\\cdot \\ln 3}=6750.\\]"
  },
  {
    "id": "1D635TL6",
    "question": "Sự tăng trưởng dân số được ước lượng tính theo công thức tăng trưởng mũ như sau $A=P\\cdot \\mathrm{e}^{rt}$ trong đó $P$ là dân số năm lấy làm mốc, $A$ là dân số sau $t$ năm, $r$ là tỉ lệ tăng dân số hằng năm. Biết rằng vào năm $2024$, dân số toàn thành phố Đà Nẵng khoảng $1{,}27$ triệu người và tỉ lệ tăng dân số là $2{,}47\\%$. Nếu tỉ lệ tăng dân số này giữ nguyên thì dân số của thành phố Đà Nẵng vào năm $2030$ khoảng bao nhiêu triệu người (làm tròn đến hàng phần trăm)?",
    "answer": "1,47",
    "explain": "Dân số của thành phố Đà Nẵng vào năm 2030 là   $A=P\\cdot\\mathrm{e}^{rt}=1{,}27\\cdot\\mathrm{e}^{6\\cdot 2{,}47\\%} \\approx 1{,}47~(\\text{triệu người}).$"
  }
];
