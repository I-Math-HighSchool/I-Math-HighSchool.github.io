window.traLoiNgan2D11 = [
  {
    "id": "2D112TL2",
    "question": "Sau khi phát hiện dịch bệnh, các chuyên gia y tế ước tính số người nhiễm bệnh kể từ ngày xuất hiện bệnh nhân đầu tiên đến ngày thứ $t$ là $f(t)=48t^2-t^3$, $t=0$, $1$, $2$, $3$, $\\ldots$, $25$. Nếu coi $f(t)$ là hàm số xác định trên đoạn $[0;25]$ thì đạo hàm $f'(t)$ được xem là tốc độ truyền bệnh (người/ngày) tại thời điểm $t$. Thời gian mà tốc độ truyền bệnh giảm xác định bởi khoảng $(a;b)$. Tìm $a+2b$.",
    "answer": "66",
    "explain": "Tốc độ truyền bệnh $f'(t)=96t-3t^2$.<br>  Xét hàm số $g(t)=-3t^2+96t$ trên đoạn $[0;25]$.<br>  Ta có $g'(t)=-6t+96=0\\Leftrightarrow t=16$.<br>  Bảng biến thiên của hàm $g(t)$  <br><img src=\"data/12/2D1/im2D11/loc2_2_TL_TN_DS_THPT__008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Dựa vào bảng biến thiên, hàm số $g(t)$ nghịch biến trên khoảng $(16;25)$.<br> Hay tốc độ truyền bệnh giảm xác định bởi khoảng $(16;25)$.<br> Suy ra $a=16$ và $b=25$, vậy $a+2b=66$."
  },
  {
    "id": "2D117TL2",
    "question": "Người ta thấy rằng trong $36$ tháng tính từ đầu năm 2020, giá thành $P$ của một loại sản phẩm vào tháng thứ $t$ thay đổi theo công thức $P(t)=80t^3-4\\,200t^2+60\\,000t+200\\,000$ (đồng) với $0\\le t\\le 36$. Biết giá thành đạt cực đại vào thời điểm $t_1$ và giá thành đạt cực tiểu vào thời điểm $t_2$. Tìm $2t_1-t_2$.",
    "answer": "-5",
    "explain": "Xét $P'(t)=240t^2-8\\,400t+60\\,000$ trên đoạn $[0;36]$.<br>  Cho $P'(t)=0\\Leftrightarrow x=10 \\text{ hoặc } x=25.$<br>  Bảng biến thiên của hàm số $P(t)$  <br><img src=\"data/12/2D1/im2D11/loc2_2_TL_TN_DS_THPT__009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Dựa vào bảng biến thiên, hàm số $P(t)$ đạt cực đại tại điểm $t_1=10$ và cực tiểu tại điểm $t_2=25$.<br>  Vậy $2t_1-t_2=-5$."
  }
];
