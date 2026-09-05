// =========================================================================
// KHỐI DỮ LIỆU: 1D91 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D91 = [
  {
    "id": "1D912TL1",
    "question": "Một hộp chứa $5$ quả cầu trắng và $6$ quả cầu đen cùng kích thước và khối lượng. Lấy từ hộp đó ngẫu nhiên cùng một lúc $4$ quả cầu. Tính xác suất để trong $4$ quả cầu lấy ra có ít nhất $3$ quả cầu đen. (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "0,35",
    "explain": "Tổng số quả cầu trong hộp là $5 + 6 = 11$ quả cầu.<br>  Số cách chọn ngẫu nhiên $4$ quả cầu từ $11$ quả cầu là tổ hợp chập $4$ của $11$.<br>  $n(\\Omega) = C_{11}^4 = 330$ cách.<br>  Gọi $A$ là biến cố “ trong $4$ quả cầu lấy ra có ít nhất $3$ quả cầu đen”.<br>  Biến cố $A$ xảy ra khi có $3$ quả cầu đen và $1$ quả cầu trắng, hoặc có $4$ quả cầu đen và $0$ quả cầu trắng.<br>  Trường hợp 1: Chọn $3$ quả cầu đen và $1$ quả cầu trắng.<br>  Số cách chọn $3$ quả đen từ $6$ quả đen là $C_6^3 = 20$ cách.<br>  Số cách chọn $1$ quả trắng từ $5$ quả trắng là $C_5^1 = 5$ cách.<br>  Số cách chọn cho trường hợp 1 là $C_6^3 \\cdot C_5^1 = 20 \\cdot 5 = 100$ cách.<br>  Trường hợp 2: Chọn $4$ quả cầu đen và $0$ quả cầu trắng.<br>  Số cách chọn $4$ quả đen từ $6$ quả đen là $C_6^4 = 15$ cách.<br>  Số cách chọn $0$ quả trắng từ $5$ quả trắng là $C_5^0 = 1$ cách.<br>  Số cách chọn cho trường hợp 2 là $C_6^4 \\cdot C_5^0 = 15 \\cdot 1 = 15$ cách.<br>  Số kết quả thuận lợi cho biến cố A là $n(A) = 100 + 15 = 115$ cách.<br>  Xác suất của biến cố A là<br>  $\\mathrm{P}(A) = \\dfrac{n(A)}{n(\\Omega)} = \\dfrac{115}{330} = \\dfrac{23}{66}\\approx 0{,}35$.<br>  Vậy xác suất để có ít nhất $3$ quả cầu đen là khoảng $0{,}35$."
  },
  {
    "id": "1D913TL2",
    "question": "Một chiếc máy có hai động cơ I và II chạy độc lập nhau. Xác suất để động cơ I và II chạy tốt lần lượt là $0{,}8$ và $0{,}7$. Tính xác suất để có ít nhất một động cơ chạy tốt (lấy kết quả đến hàng phần trăm).",
    "answer": "0,94",
    "explain": "Xác suất để không có động cơ nào chạy tốt là $(1-0{,}8)(1-0{,}7)=0{,}06$.<br>  Xác suất để có ít nhất một động cơ chạy tốt là $1-0{,}06=0{,}94$."
  },
  {
    "id": "1D913TL3",
    "question": "Hai bệnh nhân $X$ và $Y$ bị nhiễm một loại virút. Biết rằng xác suất bị biến chứng nặng của bệnh nhân $X$ là $0{,}73$ và của bệnh nhân $Y$ là $0{,}55$. Khả năng bị biến chứng nặng của hai bệnh nhân là độc lập. Tính xác suất của biến cố “ Có đúng một bệnh nhân không bị biến chứng nặng”\\, (làm tròn kết quả đến hàng phần trăm).",
    "answer": "0,48",
    "explain": "Gọi $X$ là biến cố “ Bệnh nhân X bị biến chứng nặng”\\;<br>  $Y$ là biến cố “ Bệnh nhân Y bị biến chứng nặng”\\.<br>  Xác suất của biến cố “ Có đúng một bệnh nhân không bị biến chứng nặng”\\, là  $\\mathrm{P}\\left(\\overline{X}Y\\right)+\\mathrm{P}\\left(X\\overline{Y}\\right)=(1-0{,}73)\\cdot 0{,}55+0{,}73\\cdot(1-0{,}55)=0{,}477.$"
  },
  {
    "id": "1D912TL4",
    "question": "Bạn An làm bài thi phần trắc nghiệm đúng sai gồm $4$ câu hỏi mỗi câu $1$ điểm, trong đó bạn làm chắc chắn đúng hai câu còn hai câu còn lại bạn chọn ngẫu nhiên đúng hoặc sai. Tính xác suất để bạn An được $3{,}5$ điểm phần trắc nghiệm đúng sai (<em>Làm tròn kết quả đến hàng phần trăm</em>).",
    "answer": "0,03",
    "explain": "Quy ước $2$ câu hỏi còn lại là X, Y.<br>  Trong mỗi câu đó có $4$ ý. Mỗi ý có $2$ khả năng Đúng hoặc Sai nên xác suất chọn đúng mỗi ý là $\\dfrac{1}{2}$ và xác suất chọn sai mỗi ý là $\\dfrac{1}{2}$.<br>  Để bạn An được $3{,}5$ điểm tức là An làm đúng hoàn toàn $1$ trong $2$ câu X, Y và sai $1$ ý trong $1$ câu còn lại.<br>  Xác suất để An đúng $1$ trong $2$ câu X, Y là $\\mathrm{C}_2^1\\cdot \\left(\\dfrac{1}{2}\\right)^4 = \\dfrac{1}{8}$.<br>  Xác suất để An sai $1$ ý trong câu còn lại là $\\mathrm{C}_4^1\\cdot\\dfrac{1}{2}\\cdot \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{4}$.<br>  Vậy xác suất để An được $3{,}5$ điểm phần trắc nghiệm là $\\dfrac{1}{8}\\cdot\\dfrac{1}{4} = \\dfrac{1}{32} \\approx 0{,}03$."
  },
  {
    "id": "1D912TL5",
    "question": "Cho hai hộp đựng bi, đựng hai loại bi là bi xanh và bi đỏ, tổng số bi của cả hai hộp là $15$ bi và hộp thứ nhất đựng nhiều bi hơn hộp thứ hai, đồng thời số bi xanh ở hộp một nhiều hơn số bi xanh ở hộp hai. Lấy ngẫu nhiên từ mỗi hộp một bi. Nếu xác suất để lấy được $2$ bi xanh là $\\dfrac{5}{28}$ thì xác suất để lấy được $2$ bi đỏ là $\\dfrac{a}{b}$ với $\\dfrac{a}{b}$ là phân số tối giản. Khi đó $D=a+b$ bằng",
    "answer": "71",
    "explain": "Gọi số bi của hộp $1$ và hộp $2$ lần lượt là $m$, $n$. Theo giả thiết ta có $m+n=15$ và $m&gt;n$.<br>  Gọi số bi xanh của hộp $1$ và hộp $2$ lần lượt là $x$, $y$ với $x&gt;y$.<br>  Theo giả thiết xác suất lấy được $2$ bi xanh là $\\dfrac{5}{28}$ nên ta có  <br>- $\\dfrac{x}{m}\\cdot\\dfrac{y}{n}=\\dfrac{5}{28}=\\dfrac{10}{56}\\Rightarrow mn=56=7\\cdot 8\\Rightarrow m=8 \\text{ và } n=7$;<br>- $xy=10=2\\cdot 5\\Rightarrow x=5 \\text{ và } y=2. $  Vậy số bi xanh của hộp $1$ và hộp $2$ lần lượt là $5$ và $2$.<br>  Xác suất để lấy được $2$ bi đỏ là  \\[\\dfrac{8-5}{8}\\cdot\\dfrac{7-2}{7}=\\dfrac{3}{8}\\cdot\\dfrac{5}{7}=\\dfrac{15}{56}.\\]  Từ đó suy ra $a=15$, $b=56$.<br>  Vậy $D=a+b=71$."
  }
];
