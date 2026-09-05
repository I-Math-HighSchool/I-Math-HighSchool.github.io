// =========================================================================
// KHỐI DỮ LIỆU: 0D32 - Trả lời ngắn
// Nguồn: Đề thi thử KSCL thật từ các trường/cụm trường THPT trên cả nước
// (thư mục 3-KV-gui/26_TongHopDuAn/data/SP_dot_1_New, năm học 25-26), giữ
// nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan0D32 = [
  {
    "id": "0D323TL1",
    "question": "Gia đình ông Thanh nuôi tôm với diện tích ao nuôi là $100$\\,m$^2$. Vụ tôm vừa qua ông nuôi với mật độ là $1$\\,kg/m$^2$ tôm giống và sản lượng tôm khi thu hoạch được $2$ tấn tôm. Với kinh nghiệm nuôi tôm nhiều năm, ông cho biết cứ thả giảm đi $200$\\,g/m$^2$ tôm giống thì sản lượng tôm thu hoạch tăng thêm $0{,}4$ tấn tôm. Vậy vụ tới ông phải thả bao nhiêu kg tôm giống để sản lượng tôm cho thu hoạch là lớn nhất? (Giả sử không có dịch bệnh, hao hụt khi nuôi tôm giống).",
    "answer": "70",
    "explain": "Vụ trước thả $1$\\,kg/m$^2$ trên diện tích $100$\\,m$^2$ nên tổng lượng tôm giống là $100$\\,kg, sản lượng thu hoạch là $2\\,000$\\,kg.<br> Khi giảm $200$\\,g/m$^2$ tức là $0{,}2$\\,kg/m$^2$ thì trên toàn bộ diện tích $100$\\,m$^2$ sẽ giảm đi $20$\\,kg, lúc đó sản lượng tăng lên $2\\,400$\\,kg.<br> Gọi $x$ (kg) là lượng tôm giống giảm so với ban đầu. Khi đó lượng tôm giống thả là $(100-x)$ kg.<br> Giả sử năng suất thu hoạch trên mỗi kg tôm giống có dạng tuyến tính $20+ax$ (kg).<br> Khi $x=20$ thì sản lượng đạt $2\\,400$ kg, tức là \\[(100-20)(20+20a)=2\\,400\\Rightarrow 20+20a=30\\Rightarrow a=0{,}5. \\] Sau đây là bảng tóm tắt các yếu tố đã biết, các đại lượng và yêu cầu trong bài toán \\renewcommand{\\arraystretch}{1.2} <br><img src=\"data/10/0D3/im0D32/loc8_TT_QV1_TT1_LVT_B_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\"> Xét hàm sản lượng \\[y=f(x)=(100-x)(20+0{,}5x)= -0{,}5x^2+30x+2\\,000. \\] Đây là hàm số bậc hai với hệ số $a=-0{,}5&lt;0$ nên đồ thị là parabol có bề lõm quay xuống dưới. Vì vậy hàm số $f(x)$ đạt tại \\[x=\\dfrac{-b}{2a}=\\dfrac{-30}{2(-0{,}5)}=30. \\] Vậy lượng tôm giống cần thả là $100-30=70$ (kg).<br> Vậy ông Thanh cần thả $70$\\,kg tôm giống."
  },
  {
    "id": "0D321TL2",
    "question": "Giả sử lợi nhuận (tính bằng nghìn đồng) của một quán cà phê nhỏ trong ngày thứ $x$ của một tháng được cho bởi công thức $h(x)=-2x^2+40x+700$, trong đó $x$ là số ngày tính từ ngày đầu tiên của tháng. Do vào đầu tháng, quán bắt đầu có chương trình ưu đãi nên lượng khách tăng nhanh, sau đó lợi nhuận đạt đỉnh rồi giảm dần về cuối tháng. Giả sử tháng đó có $30$ ngày. Hỏi trong bao nhiêu ngày của tháng, lợi nhuận của quán cà phê tăng so với ngày liền trước?",
    "answer": "10",
    "explain": "Hàm lợi nhuận là một hàm bậc hai $h(x)=-2x^2+40x+700$.<br>  Lợi nhuận sẽ đạt giá trị lớn nhất tại đỉnh của parabol.<br>  Giá trị lớn nhất của hàm số đạt được tại $x=10$.<br>  Vì hệ số $a=-2&lt;0$ nên hàm số đồng biến (lợi nhuận tăng) trên khoảng $(-\\infty;10)$ và nghịch biến (lợi nhuận giảm) trên khoảng $(10;+\\infty)$.<br>  Do $x$ là số ngày của tháng (với $1\\leq x\\leq 30$) nên lợi nhuận tăng trong đoạn $[1;10]$.<br>  Vậy lợi nhuận của quán cà phê tăng trong $10$ ngày đầu tiên của tháng và đạt giá trị lớn nhất tại ngày thứ $10$."
  }
];
