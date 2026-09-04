// =========================================================================
// KHỐI DỮ LIỆU: 1H43 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1H43 = [
  {
    "id": "1H432TL1",
    "question": "Cho hình chóp $S.ABC$. Gọi $M$, $N$ lần lượt là trung điểm của $SA$ và $BC$, $P$ là điểm trên cạnh $AB$ sao cho $\\dfrac{AP}{AB} = \\dfrac{1}{3}$. Gọi $Q$ là giao điểm của $SC$ với mặt phẳng $(MNP)$. Tính $\\dfrac{SQ}{SC}$ (làm tròn đến hàng phần trăm).",
    "answer": "0{,}33",
    "explain": "<br><img src=\"data/11/1D4/im1H43/dlts_11_DLTS16_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm giao điểm $Q$ của $SC$ với mặt phẳng $(MNP)$<br>  Chọn mặt phẳng phụ $(SAC)$ chứa $SC$ <br>  Trong $(ABC)$ gọi $H = AC \\cap NP$ <br>   Suy ra $(MNP) \\cap (SAC) = HM$. Khi đó $Q$ là giao điểm của $HM$ và $SC$. <br>  Gọi $L$ là trung điểm $AC$. Ta có  $\\frac{HA}{HL} = \\frac{AP}{LN} = \\frac{\\frac{1}{3}AB}{\\frac{1}{2}AB} = \\frac{2}{3}  (\\text{vì } M, N \\text{ là trung điểm của } AC \\text{ và } BC \\text{ nên } LN = \\frac{1}{2} AB).$  Suy ra $HA = \\dfrac{2}{3} HL$.  Mà $LC = AL = HL - HA = HL - \\dfrac{2}{3} HL = \\dfrac{1}{3} HL \\Rightarrow HL = \\dfrac{3}{4} HC$.<br>  Mặt khác, ta có $\\dfrac{HC}{HL} = \\dfrac{QC}{ML} = \\dfrac{4}{3} (\\text{vì } ML \\parallel SC)$.<br>  Mà $2ML = SC$ nên $\\dfrac{QC}{SC} = \\dfrac{2}{3} \\Rightarrow \\dfrac{SQ}{SC} = \\dfrac{1}{3}$."
  },
  {
    "id": "1H432TL2",
    "question": "Cho tam giác $ABC$ có $AB=10$, $AC=20$, $\\widehat{BAC}=60^\\circ$. Tính d tích tam giác $ABC$ {\\it (kết quả làm tròn đến hàng phần mười)}",
    "answer": "86,6",
    "explain": "Diện tích tam giác $ABC$ là $S_{\\triangle{ABC}}=\\dfrac{1}{2}\\cdot b\\cdot c\\cdot \\sin{A}=\\dfrac{1}{2}\\cdot AC\\cdot AB\\cdot \\sin{A}=\\dfrac{1}{2}\\cdot 20\\cdot 10\\cdot \\sin{60^\\circ}=50\\sqrt{3}=86,6$"
  },
  {
    "id": "1H432TL3",
    "question": "Một quả bóng được đá lên từ mặt đất, biết rằng chiều cao $y$ (mét) của quả bóng so với mặt đất được biểu diễn bởi một hàm số bậc hai theo thời gian $t$ (giây). Sau 3 giấy kể từ lúc được đá lên, quả bóng đạt chiều cao tối đa là $21\\,m$ và bắt đầu rơi xuống. Tìm thời điểm $t$ lớn nhất sau khi quả bóng được đá lên để quả bóng vẫn đang ở độ cao trên $10\\,m$ so với mặt đất {\\it (kết quả làm tròn đến hàng đơn vị)}",
    "answer": "5,9",
    "explain": "Gọi hàm số bậc hai theo $t$ là $y(t)=at^2+bt+c$ với $a\\ne 0$.<br>  Theo đề Khi $t=0$ thì $y=0$ nên suy ra $c=0$ nên ta có $y(t)=at^2+bt$ .<br>  Theo đề ta có $t=3$ thì $y_{max}=21$. tức là parabol có đỉnh $I(3;21)$.<br>  Vậy ta có hệ phương trình $-\\dfrac{b}{2a}=3 \\text{ và } y(3)=21\\Leftrightarrow 6a+b=0 \\text{ và } 9a+3b=21\\Leftrightarrow a=-\\dfrac{7}{3} \\text{ và } b=14$<br>  Vậy $y(t)=-\\dfrac{7}{3}t^2+14t$.<br>  Để quả bóng được đá lên mà quả bóng vẫn đang ở độ cao trên $10\\,m$ so với mặt đất thì ta có $y(t)=-\\dfrac{7}{3}t^2+14t&gt;0\\Leftrightarrow 0&lt;t&lt;6$.<br>  Vậy $t_{max}=5,9$ giây."
  },
  {
    "id": "1H432TL4",
    "question": "Một công ty đang lên kế hoạch cải tiến sản phẩm và xác định rằng tổng chi phí dành cho việc cải tiến là $K(x)=x+96+\\dfrac{36}{x-4}$ (triệu đồng), trong đó $x$ là số sản phẩm được cải tiến và $x&gt;4$. Tính tổng chi phí (đơn vị triệu đồng) dành cho việc cải tiến $x=5$ sản phẩm.",
    "answer": "137",
    "explain": "Theo đề ta có tổng chi phí dành cho việc cải tiến $x=5$ sản phẩm là $K(5)=5+96+36=137$ (triệu đồng)"
  }
];
