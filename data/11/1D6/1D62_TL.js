// =========================================================================
// KHỐI DỮ LIỆU: 1D62 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1D62 = [
  {
    "id": "1D624TL1",
    "question": "[Đỗ Minh Vũ]  Năm $2020$, một hãng ôtô niêm yết giá xe X là $860$ triệu đồng và dự định trong $10$ năm tiếp theo mỗi năm giảm $2 \\%$ giá bán so với năm trước. Vào năm $2025$, một khách hàng mua xe X của hãng. Biết rằng để xe có thể hợp pháp lưu thông trên đường, ngoài số tiền bỏ ra để mua xe theo giá niêm yết của hãng, khách hàng còn phải trả thêm các khoản phí bằng khoảng $15 \\%$ giá niêm yết của xe. Nếu hãng ôtô thực hiện niêm yết giá xe đúng như dự định ban đầu thì tổng cộng khách hàng này phải bỏ ra bao nhiêu triệu đồng để sở hữu chiếc xe X hợp pháp lưu thông trên đường? (<em>Làm tròn kết quả đến hàng đơn vị</em>).",
    "answer": "894",
    "explain": "Xét công thức lãi kép $A_n=A_0\\left(1+r\\right)^n$.<br>  Ở đây, giá bán xe năm 2020 là $A_0 = 860 $ (triệu đồng).<br>  Mỗi năm giá xe giảm $2\\%$ giá bán, nghĩa là $ r = -2\\%$ và $n=5$.<br>  $\\Rightarrow A_5 = A_0(1-0,2\\%)^5 \\approx 777{,}37188$ (triệu đồng).<br>  Vậy số tiền để khách hàng phải trả để sở hữu xe X hợp pháp (cộng thêm $15\\%$ các khoản phí) là<br>  $ A = A_5 . 115\\% \\approx 894$ (triệu đồng)."
  },
  {
    "id": "1D622TL2",
    "question": "Với $a$, $b$ là các số thực dương tùy ý thỏa mãn $a\\ne 1$ và $\\log_a b=-2$, giá trị của $\\log_a \\left(\\dfrac{b}{a}\\right)$ bằng bao nhiêu?",
    "answer": "-3",
    "explain": "Ta có $\\log_a \\left(\\dfrac{b}{a}\\right)=\\log_a b-\\log_aa=-2-1=-3$."
  },
  {
    "id": "1D622TL3",
    "question": "Công thức $h = -19{,}4 \\cdot \\log \\dfrac{P}{P_0}$ là mô hình đơn giản cho phép tính độ cao $h$ so với mặt nước biển của một vị trí trong không trung (tính bằng kilômét) theo áp suất không khí $P$ tại điểm đó và áp suất $P_0$ của không khí tại mặt nước biển (cùng tính bằng Pa - đơn vị áp suất, đọc là Pascal).<br>  Áp suất không khí tại đỉnh của ngọn núi A bằng $\\dfrac{4}{5}$ lần áp suất không khí tại đỉnh của ngọn núi B.  Độ chênh lệch độ cao giữa hai ngọn núi là bao nhiêu kilômét? (Làm tròn kết quả đến hàng phần mười.)",
    "answer": "1,9",
    "explain": "Gọi $h_A$ và $P_A$ là độ cao và áp suất không khí tại đỉnh núi $A$.<br>  Gọi $h_B$ và $P_B$ là độ cao và áp suất không khí tại đỉnh núi $B$.<br>  Theo công thức đã cho:<br>  $h_A = -19{,}4 \\cdot \\log \\dfrac{P_A}{P_0}$ <br>  $h_B = -19{,}4 \\cdot \\log \\dfrac{P_B}{P_0}$ <br>  Độ chênh lệch độ cao giữa hai ngọn núi là $\\Delta h = |h_A - h_B|$.<br>  $h_A - h_B = \\left(-19{,}4 \\cdot \\log \\dfrac{P_A}{P_0}\\right) - \\left(-19{,}4 \\cdot \\log \\dfrac{P_B}{P_0}\\right)$ <br>  $h_A - h_B = -19{,}4 \\left( \\log \\dfrac{P_A}{P_0} - \\log \\dfrac{P_B}{P_0} \\right)$ <br>  $h_A - h_B = -19{,}4 \\cdot \\log \\dfrac{P_A}{P_B}$. <br>  Theo đề bài, áp suất không khí tại đỉnh ngọn núi A bằng $\\dfrac{4}{5}$ lần áp suất không khí tại đỉnh ngọn núi B, tức là $P_A = \\dfrac{4}{5} P_B$.<br>  Suy ra $\\dfrac{P_A}{P_B} = \\dfrac{4}{5}$. <br>  Do đó, $h_A - h_B = -19{,}4 \\cdot \\log \\dfrac{4}{5}$.<br>  $h_A - h_B = -19{,}4 \\cdot \\log \\dfrac{4}{5} \\approx 1{,}9$ km.<br>  Độ chênh lệch độ cao là $|h_A - h_B| \\approx 1{,}9$ km.<br>"
  }
];
