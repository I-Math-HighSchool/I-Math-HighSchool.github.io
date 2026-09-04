// =========================================================================
// KHỐI DỮ LIỆU: 2D31 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan2D31 = [
  {
    "id": "2D313TL1",
    "question": "Thống kê số lượt khách hàng đặt bàn qua hình thức trực tuyến mỗi ngày trong quý IV năm 2024 của một nhà hàng được thể hiện trong mẫu số liệu ghép nhóm sau:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS12_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tính khoảng tứ phân vị của mẫu số liệu ghép nhóm trên.",
    "answer": "8,5",
    "explain": "Cỡ mẫu $n=92$.<br>  Gọi $x_1$, $x_2$, $\\ldots$, $x_{92}$ là mẫu số liệu gốc gồm $92$ ngày của nhà hàng.<br>  Ta có $x_1$, $\\ldots$, $x_{14} \\in [1;6)$; $x_{15}$, $\\ldots$, $x_{44} \\in [6;11)$; $x_{45}$, $\\ldots$, $x_{69} \\in [11;16)$; $x_{70}$, $\\ldots$, $x_{87} \\in [16;21)$; $x_88$, $\\ldots$, $x_{92} \\in [21;26)$.<br>  Tứ phân vị thứ nhất của mẫu số liệu là $\\dfrac{1}{2}(x_{23}+x_{24}) \\in [6;11)$. Do đó, tứ phân vị thứ nhất là $Q_1=6+(11-6)\\dfrac{\\dfrac{92}{4}-14}{30}=\\dfrac{15}{2}$<br>  Tứ phân vị thứ ba của mẫu số liệu là $\\dfrac{1}{2}(x_{69}+x_{70}) $. Do đó, tứ phân vị thứ ba là $Q_3=16$.<br>  Vậy khoảng tứ phân vị là $\\Delta Q=Q_3-Q_1=8{,}5$."
  },
  {
    "id": "2D313TL2",
    "question": "Tìm hiểu về thu nhập trung bình mỗi tháng của mỗi nhân viên trong số 35 nhân viên ở một công ty, người ta thu được bảng số liệu sau.  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS18_014.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">   Khoảng tứ phân vị của mẫu số liệu trên bằng bao nhiêu? (làm tròn kết quả đến hàng phần trăm).<br>",
    "answer": "5,38",
    "explain": "Ta có bảng sau  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS18_015.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Ta có $\\dfrac{n}{4} = 8{,}75$. <br>  Vậy tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên thuộc nhóm $[18;21)$.<br>  Ta có $Q_1 = 18 + \\dfrac{8{,}75-5}{9}\\cdot (21-18) = \\dfrac{77}{4}.$  Ta có $\\dfrac{3n}{4} = 26{,}25$. <br>  Suy ra tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên thuộc nhóm $[24;27)$. <br>  Do đó  $Q_3 = 24 + \\dfrac{26{,}25 - 25}{6}\\cdot (27-24) = \\dfrac{197}{8}.$  Vậy khoảng tứ phân vị của mẫu số liệu ghép nhóm là $\\Delta_Q = Q_3 - Q_1 = \\dfrac{197}{8} - \\dfrac{77}{4} \\approx 5{,}38.$"
  },
  {
    "id": "2D314TL5",
    "question": "Một tài xế taxi thống kê lại độ dài quãng đường (đơn vị km) đã lái xe mỗi ngày trong một tháng ở bảng sau:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS20_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tính số trung vị $M_e$ của mẫu số liệu trên.",
    "answer": "106",
    "explain": "Độ dài nhóm là $80-60=20$.<br>  Cỡ mẫu $n=3+9+10+6+2=30$. Ta có $\\dfrac{30}{2}=15$, do đó trung vị thuộc nhóm $\\left[100;120\\right)$.<br>  Trung vị $M_e=100+\\dfrac{15-12}{10}\\cdot 20= 106$.<br>"
  }
];
