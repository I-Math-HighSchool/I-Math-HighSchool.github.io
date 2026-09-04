// =========================================================================
// KHỐI DỮ LIỆU: 1D64 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1D64 = [
  {
    "id": "1D646TL1",
    "question": "Giả sử một chất phóng xạ bị phân rã theo cách sao cho khối lượng $m(t)$ của chất còn lại (tính theo gam) sau $t$ ngày được cho bởi hàm số $m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{T}}$, trong đó $m_0$ là khối lượng của chất phóng xạ ban đầu (tại thời điểm $t=0$), $T$ là chu kì bán rã (tức là khoảng thời gian để một nửa số nguyên tử của chất phóng xạ bị biến thành chất khác). Cho biết chu kì bán rã của một chất phóng xạ là $1$ ngày và ban đầu có $250$ gam chất phóng xạ. Sau bao nhiêu ngày thì khối lượng còn lại của chất đó bằng $15,6$ gam? (Kết quả làm tròn đến hàng phần chục).",
    "answer": "4",
    "explain": "Ta có công thức $m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{\\frac{t}{T}}$.<br>  Theo đề bài, $m_0 = 250$ gam, $T = 1$ ngày.<br>  Ta cần tìm $t$ sao cho $m(t) = 15{,}6$ gam.<br>  Phương trình $15{,}6 = 250 \\left(\\dfrac{1}{2}\\right)^{\\tfrac{t}{1}}\\Leftrightarrow t=\\log_{0,5}\\dfrac{15{,}6}{250}\\approx 4{,}0023$.<br>  Làm tròn đến hàng phần chục, ta được $t \\approx 4$ ngày."
  },
  {
    "id": "1D646TL2",
    "question": "Năm 2024, một công ty viễn thông có $25$ triệu khách hàng sử dụng dịch vụ của họ. Công ty đặt mục tiêu mở rộng thị phần theo chiến lược sau: Trong $4$ năm đầu, số lượng khách hàng tăng $10\\%$ mỗi năm so với năm trước. Từ năm thứ $5$ trở đi, số lượng khách hàng tăng $6\\%$ mỗi năm so với năm trước đó. Theo kế hoạch này, bắt đầu từ năm nào thì số lượng khách hàng của công ty sẽ vượt quá $60$ triệu người?",
    "answer": "2037",
    "explain": "Gọi $S_n$ là số lượng khách hàng (triệu người) vào cuối năm thứ $n$, tính từ mốc năm $2024$ ($n=0$).<br>  $S_0 = 25$ (cuối năm $2024$).<br>  Trong $4$ năm đầu, tốc độ tăng là $10\\%$ nên cuối năm $2028$ $S_4=S_0\\left(1+10\\%\\right)^4=36{,}6025\\,\\text{(triệu người)}.$  Từ năm thứ $5$ trở đi (từ cuối $2028$ trở đi), tốc độ tăng là $6\\%$ mỗi năm nên cuối năm $n$ ($n \\ge 4$) $S_n= S_4\\left(1+6\\%\\right)^{n-4}.$  Ta cần tìm năm $N$ đầu tiên sao cho số lượng khách hàng cuối năm đó vượt $60$ triệu người. Tức là tìm $n$ nhỏ nhất ($n \\ge 4$) sao cho   \\[S_n&gt;60\\Leftrightarrow S_4 (1{,}06)^{n-4} &gt; 60\\Leftrightarrow n-4&gt;\\log_{1{,}06}\\dfrac{60}{S_4}\\Leftrightarrow n&gt;12{,}48.\\]  Năm tương ứng là năm $2024 + 13 = 2037$.<br>  Vậy bắt đầu từ năm 2037 thì số lượng khách hàng vượt quá $60$ triệu người."
  },
  {
    "id": "1D642TL3",
    "question": "Một nhóm nghiên cứu thực hiện dự án về khả năng ghi nhớ của sinh viên về các danh nhân trong một khóa học. Mỗi tháng sau khi khóa học kết thúc, nhóm nghiên cứu sẽ kiểm tra xem sinh viên còn nhớ được bao nhiêu phần trăm thông tin đã học. Giả sử sau $t$ tháng, tỉ lệ ghi nhớ trung bình (tính theo $\\%$) của nhóm sinh viên được mô tả theo công thức $M(t) = 75 - 20\\ln(1+t), t \\ge 0$. Sau ít nhất bao nhiêu tháng thì tỉ lệ sinh viên còn nhớ được những thông tin này giảm xuống dưới $10\\%$?",
    "answer": "25",
    "explain": "Công thức tỉ lệ ghi nhớ trung bình sau $t$ tháng là $M(t) = 75 - 20\\ln(1+t)$, với $t \\ge 0$.  Ta cần tìm số tháng $t$ ít nhất sao cho tỉ lệ ghi nhớ giảm xuống dưới $10\\%$, tức là   $M(t)&lt; 10\\Leftrightarrow 75 - 20\\ln(1+t) &lt; 10\\Leftrightarrow 1+t&gt;\\mathrm{e}^{\\tfrac{65}{20}}\\Leftrightarrow t&gt;24{,}79.$  Vì $t$ là số tháng và phải là số nguyên lớn hơn $24,79$, nên giá trị nguyên nhỏ nhất của $t$ là $25$.<br>  Vậy, sau ít nhất $25$ tháng thì tỉ lệ ghi nhớ trung bình giảm xuống dưới $10\\%$."
  },
  {
    "id": "1D646TL4",
    "question": "Dân số thành phố C năm $2024$ khoảng $9{,}2$ triệu người. Giả sử tỉ lệ tăng dân số hàng năm của thành phố C không đổi và bằng $r=1{,}4\\%$. Biết rằng, sau $t$ năm dân số thành phố C (tính từ mốc năm $2024$) ước tính theo công thức $S=A\\cdot \\mathrm{e}^{rt}$, trong đó $A$ là dân số năm lấy làm mốc. Sau ít nhất $t$ ($t\\in \\mathbb{Z}$) năm, dân số của thành phố vượt quá $11$ triệu người. Vậy $t$ bằng bao nhiêu?",
    "answer": "13",
    "explain": "Dân số thành phố vượt quá $11$ triệu người khi và chỉ khi   $A\\cdot \\mathrm{e}^{rt}&gt;11\\Leftrightarrow 9{,}2\\cdot \\mathrm{e}^{0{,}014t}&gt;11\\Leftrightarrow \\mathrm{e}^{0{,}014t}&gt;\\dfrac{11}{9{,}2}\\Leftrightarrow t&gt;\\dfrac{1}{0{,}014} \\ln\\dfrac{11}{9{,}2}\\approx 12{,}7.$  Vậy cần ít nhất $13$ năm, dân số thành phố vượt qua $11$ triệu người."
  },
  {
    "id": "1D643TL5",
    "question": "Tính tổng giá trị các nghiệm của phương trình$\\log_{2}(x^2+4)=\\log_{2}(4-x)$.",
    "answer": "-1",
    "explain": "Điều kiện xác định: $4-x&gt;0$ hay $x&lt;4$. <br>  Phương trình đã cho tương đương   $x^2+4=4-x$<br>$\\Leftrightarrow x^2+x=0$<br>$\\Leftrightarrow \\left[\\begin{aligned}  x &= 0 \\\\  x &= -1  \\end{aligned}\\right. \\quad \\text{(thỏa mãn)}.$  Vậy tổng giá trị các nghiệm của phương trình đã cho là $0+(-1)=-1$."
  },
  {
    "id": "1D642TL6",
    "question": "Một học sinh ôn thi tốt nghiệp và ghi nhớ toàn bộ nội dung một bài học vào ngày đầu tiên. Giả sử lượng kiến thức còn nhớ sau $t$ ngày (khi chưa ôn tập lại) của học sinh này được xác định bởi công thức $R(t)=100\\mathrm{e}^{-0{,}3t} (\\%)$. Hỏi sau bao nhiêu ngày thì lượng kiến thức còn nhớ là $30\\%$? <em>(làm tròn đến hàng đơn vị)</em>.",
    "answer": "4",
    "explain": "Theo đề ta có   $100\\mathrm{e}^{-0{,}3t}=30\\Leftrightarrow \\mathrm{e}^{-0{,}3t} =\\dfrac{3}{10} \\Leftrightarrow t=\\dfrac{\\ln\\dfrac{3}{10}}{-0{,}3}\\approx 4.$<br>  Vậy sau $4$ ngày thì lượng kiến thức còn nhớ là $30\\%$."
  }
];
