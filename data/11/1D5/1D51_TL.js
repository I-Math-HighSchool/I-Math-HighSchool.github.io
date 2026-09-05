// =========================================================================
// KHỐI DỮ LIỆU: 1D51 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1D51 = [
  {
    "id": "1D513TL1",
    "question": "Cho mẫu số liệu ghép nhóm về thống kê thời gian hoàn thành (phút) một bài kiểm tra trực tuyến của $100$ học sinh, ta có bảng số liệu sau:  <br><img src=\"data/11/1D5/im1D51/dlts_11_DLTS10_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Thời gian trung bình để $100$ học sinh hoàn thành bài kiểm tra (kết quả làm tròn lấy 1 chữ số thập phân) (kết  quả làm tròn đến hàng phần mười).",
    "answer": "38,9",
    "explain": "Ta có bảng sau  <br><img src=\"data/11/1D5/im1D51/dlts_11_DLTS10_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Thời gian trung bình để $00$ học sinh hoàn thành bài kiểm tra là  $\\bar{x}=\\dfrac{34\\cdot4+36\\cdot13+38\\cdot38+40\\cdot27+42\\cdot14+44\\cdot4}{100}=38,92$"
  },
  {
    "id": "1D513TL2",
    "question": "Số khách hàng nam mua bảo hiểm ở từng độ tuổi được thống kê như sau:  <br><img src=\"data/11/1D5/im1D51/dlts_11_DLTS19_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Hãy sử dụng dữ liệu ở trên để tư vấn cho đại lí bảo hiểm xác định khách hàng nam ở tuổi nào hay mua bảo hiểm nhất. (kết quả làm tròn đến số nguyên).",
    "answer": "46",
    "explain": "Nhóm chứa mốt của mẫu số liệu trên là nhóm $[40; 50)$.<br>  Do đó $u_m=40$, $n_{m-1}=6$, $n_m=10$, $n_{m+1}=7$, $u_{m+1}-u_m=50-40=10$.<br>  Mốt của mẫu số liệu ghép nhóm là  $M_0 = u_m+\\dfrac{n_m-n_{m-1}}{\\left(n_m-n_{m-1}\\right)+\\left(n_m-n_{m+1}\\right)}\\cdot\\left(u_{m+1}-u_m\\right)$<br>$= 40+\\dfrac{10-6}{(10-6)+(10-7)} \\cdot 10$<br>$\\approx 45{,}71.$  Dựa vào kết quả trên ta có thể tư vấn cho đại lí bảo hiểm xác định khách hàng nam ở tuổi $46$ hay mua bảo hiểm nhất."
  },
  {
    "id": "1D513TL3",
    "question": "Quãng đường (km) các cầu thủ (không tính thủ môn) chạy trong một trận bóng đá tại giải ngoại hạng Anh được cho trong bảng thống kê sau:  <br><img src=\"data/11/1D5/im1D51/dlts_11_DLTS20_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tính quãng đường trung bình một cầu thủ chạy trong trận đấu này. (Kết quả làm tròn đến hàng phần trăm).",
    "answer": "7,48",
    "explain": "Giá trị đại diện của các nhóm:<br>  Nhóm $[2;4)$ là $\\dfrac{2+4}{2} = 3$ km.<br>  Nhóm $[4;6)$ là $\\dfrac{4+6}{2} = 5$ km.<br>  Nhóm $[6;8)$ là $\\dfrac{6+8}{2} = 7$ km.<br>  Nhóm $[8;10)$ là $\\dfrac{8+10}{2} = 9$ km.<br>  Nhóm $[10;12)$ là $\\dfrac{10+12}{2} = 11$ km.<br>  Tổng số cầu thủ là $N = 2 + 5 + 6 + 9 + 3 = 25$.<br>  Quãng đường trung bình $(\\bar{x})$ được tính bằng công thức trung bình cộng có trọng số:<br>  $\\bar{x} = \\dfrac{2 \\cdot 3 + 5 \\cdot 5 + 6 \\cdot 7 + 9 \\cdot 9 + 3 \\cdot 11}{25}= \\dfrac{187}{25}= 7{,}48$ km.<br>  Vậy quãng đường trung bình một cầu thủ chạy trong trận đấu này là $7{,}48$ km."
  },
  {
    "id": "1D513TL4",
    "question": "Năm 2023, nhiệt độ trong ngày tại thành phố P được xác định theo hàm số $t(d)=-0,0018d^2+0,657d+50,95$, trong đó, $t$ là nhiệt độ tính theo độ $F$ vào ngày thứ $d$ trong năm tính từ ngày 1--1--2023, $d\\ge 1$. trong năm này, tính số ngày tại thành phố P có nhiệt độ không âm {\\it (kết quả làm tròn đến hàng đơn vị)}",
    "answer": "66",
    "explain": "Nhiệt độ không âm khi<br> $t(d)=-0,0018d^2+0,657d+50,95\\ge 0\\Leftrightarrow -65,71725475\\le d \\le 430,7172547$.<br>  Vì $d\\ge 1$ nên $1\\le d \\le 430,7172547$.<br>  Vậy trong năm này (tức là năm 2024) số ngày có nhiệt độ không âm là $431-365=66$ ngày."
  }
];
