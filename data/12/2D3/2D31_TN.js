// =========================================================================
// KHỐI DỮ LIỆU: 2D31 - Trắc nghiệm
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.tracNghiem2D31 = [
  {
    "id": "2D312TN1",
    "question": "Khảo sát thời gian tập thể dục của một số học sinh khối $11$ thu được mẫu số liệu ghép nhóm sau:    <br><img src=\"data/12/2D3/im2D3/2D31_tikz_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm khoảng biến thiên của mẫu số liệu ghép nhóm trên.",
    "options": [
      "$80$",
      "$60$",
      "$100$",
      "$12$"
    ],
    "answer": 2,
    "explain": "Xác định $ u_1=0 $ là giá trị đầu mút trái của nhóm đầu tiên và $ u_{k+1}=100 $ là giá trị đầu mút phải của nhóm cuối cùng có chứa dữ liệu. Suy ra $R=u_{k+1}-u_{1}=100-0=100$."
  },
  {
    "id": "2D312TN2",
    "question": "Mức thưởng tết (triệu đồng) cho các nhân viên của một công ty được thống kê trong bảng sau:    <br><img src=\"data/12/2D3/im2D3/2D31_tikz_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm khoảng biến thiên của mẫu số liệu ghép nhóm trên.",
    "options": [
      "$20$",
      "$25$",
      "$47$",
      "$23$"
    ],
    "answer": 1,
    "explain": "Xác định $ u_1=5 $ là giá trị đầu mút trái của nhóm đầu tiên và $ u_{k+1}=30 $ là giá trị đầu mút phải của nhóm cuối cùng có chứa dữ liệu. Suy ra $R=u_{k+1}-u_{1}=30-5=25$."
  },
  {
    "id": "2D312TN3",
    "question": "Cho bảng phân bố tần số ghép lớp sau    Chiều cao của $40$ học sinh nam ở một trường THPT<br>  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm khoảng biến thiên của mẫu số liệu ghép nhóm trên.",
    "options": [
      "$31$",
      "$15,5$",
      "$175,5$",
      "$12$"
    ],
    "answer": 1,
    "explain": "Xác định $ u_1=160 $ là giá trị đầu mút trái của nhóm đầu tiên và $ u_{k+1}=175,5 $ là giá trị đầu mút phải của nhóm cuối cùng có chứa dữ liệu. Suy ra $R=u_{k+1}-u_{1}=175,5-160=15,5$."
  },
  {
    "id": "2D312TN4",
    "question": "Thời gian truy cập Internet mỗi buổi tối của một số học sinh được cho trong bảng sau:  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_003.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm khoảng biến thiên của mẫu số liệu ghép nhóm trên.",
    "options": [
      "$26$",
      "$14$",
      "$20$",
      "$12$"
    ],
    "answer": 3,
    "explain": "Xác định $ u_1=12,5 $ là giá trị đầu mút trái của nhóm đầu tiên và $ u_{k+1}=24,5 $ là giá trị đầu mút phải của nhóm cuối cùng có chứa dữ liệu. Suy ra $R=u_{k+1}-u_{1}=24,5-12,5=12$."
  },
  {
    "id": "2D313TN5",
    "question": "Khảo sát về cân nặng của các học sinh lớp 11D3 người ta được một mẫu dữ liệu ghép nhóm như sau  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_005.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng tứ phân vị của bảng số liệu ghép nhóm trên là",
    "options": [
      "$17$",
      "$14.5$",
      "$14$",
      "$17.5$"
    ],
    "answer": 1,
    "explain": "Ta có $n=40\\Rightarrow\\dfrac{n}{4}=10$. <br>  Gọi $x_1, \\ldots, x_{40}$ là mẫu số liệu gốc về cân nặng của 40 học sinh lớp 11D3 và giả sử rằng dãy số liệu gốc này đã được sắp xếp theo thứ tự tăng dần.<br>  Tứ phân vị thứ nhất của mẫu số liệu gốc là $\\dfrac{1}{2}\\left( x_{10}+x_{11}\\right) $ nên nhóm chứa tứ phân vị thứ nhất là nhóm $\\left[40\\,;\\,50\\right)$. Do đó tứ phân vị thứ nhất của mẫu số liệu trên là  $Q_1=40+\\dfrac{10-2}{10}\\cdot10=48.$  Ta có $\\dfrac{3 n}{4}=30$.<br>  Tứ phân vị thứ ba của mẫu số liệu gốc là $\\dfrac{1}{2}\\left( x_{30}+x_{31}\\right) $ nên nhóm chứa tứ phân vị thứ ba là nhóm $[60 ; 70)$. Do đó tứ phân vị thứ ba của mẫu số liệu trên là  $Q_3=60+\\dfrac{30-28}{8} \\cdot 10=62{,}5.$  Khoảng tứ phân vị $\\Delta _Q=Q_3-Q_1=62{,}5-48=14,5$."
  },
  {
    "id": "2D313TN6",
    "question": "Trung tâm ngoại ngữ thống kê bảng điểm môn Tiếng Anh của một khóa học trong bảng bên dưới  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_007.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng tứ phân vị của mẫu số liệu ghép nhóm này là (làm tròn đến hàng phần trăm)",
    "options": [
      "$2{,}92$",
      "$2{,}93$",
      "$3{,}93$",
      "$3,92$"
    ],
    "answer": 0,
    "explain": "Ta có $n=146$. Gọi $x_{1}, x_{2}, ..., x_{146}$ là số liệu được sắp xếp theo thứ tự không giảm. <br>  Tứ phân vị thứ nhất của của dãy số liệu gốc là $x_{37}\\in [2;4)$. Do đó, tứ phân vị thứ nhất của mẫu số liệu ghép nhóm trên là   $Q_{1}=2+\\dfrac{\\dfrac{1.146}{4}-10}{30}.(4-2)=\\dfrac{113}{30}.$  Tứ phân vị thứ ba của của dãy số liệu gốc là $x_{110}\\in [6;8)$. Do đó, tứ phân vị thứ ba của mẫu số liệu ghép nhóm trên là <br>  $Q_{3}=6+\\dfrac{\\dfrac{3.146}{4}-(10+30+55)}{42}.(8-6)=\\dfrac{281}{42}$  Khoảng tứ phân vị $Q_3-Q_1=\\dfrac{307}{105}\\approx 2{,}92$."
  },
  {
    "id": "2D314TN7",
    "question": "Ở một phòng điều trị nội trú của bệnh viện, dữ liệu thống kê thời gian ngủ hằng đêm của một bệnh nhân trong suốt một tháng được tổng hợp bởi bảng dưới đây<br><img src=\"data/12/2D3/im2D3/2D31_tikz_009.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$75{,}53$",
      "$84{,}83$",
      "$80{,}83$",
      "$72{,}53$"
    ],
    "answer": 2,
    "explain": "Kích thước mẫu $n=30$. Ta có $\\dfrac{n}{4}=\\dfrac{15}{2}=7{,}5 ;\\, \\dfrac{3 n}{4}=\\dfrac{45}{2}=22{,}5$. <br>- [$\\bullet$] Nhóm chứa $Q_1$ là $[240 ; 300)$. Suy ra  $Q_1=240+\\dfrac{7{,}5 -2}{9} \\cdot 60 =\\dfrac{830}{3}.$<br>- [$\\bullet$] Nhóm chứa $Q_3$ là $[300 ; 360)$.Suy ra  $Q_3=300+\\dfrac{22{,}5 -11}{12} \\cdot 60=357{,}5$  Vậy $\\Delta_Q=357{,}5-\\dfrac{830}{3}\\approx 80{,}83$."
  },
  {
    "id": "2D312TN8",
    "question": "Thời gian hoàn thành bài kiểm tra môn Toán của các bạn trong lớp $12$C được cho trong bảng sau:  <br><img src=\"data/12/2D3/im2D3/2D31_tikz_022.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Tìm khoảng biến thiên của mẫu số liệu ghép nhóm trên.",
    "options": [
      "$24$",
      "$15$",
      "$2$",
      "$20$"
    ],
    "answer": 3,
    "explain": "Xác định $ u_1=25 $ là giá trị đầu mút trái của nhóm đầu tiên và $ u_{k+1}=45 $ là giá trị đầu mút phải của nhóm cuối cùng có chứa dữ liệu. Suy ra $R=u_{k+1}-u_{1}=45-25=20$."
  },
  {
    "id": "2D312TN9",
    "question": "Chiều cao của $40$ học sinh lớp 12A được ghi lại như sau  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS11_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên của mẫu số liệu ghép nhóm trên bằng",
    "options": [
      "$30$",
      "$5$",
      "$25$",
      "$20$"
    ],
    "answer": 0,
    "explain": "Khoảng biến thiên của mẫu số liệu ghép nhóm $177-147=30$."
  },
  {
    "id": "2D311TN10",
    "question": "Trong các mệnh đề sau mệnh đề nào sai ?",
    "options": [
      "Độ lệch chuẩn có cùng đơn vị với đơn vị của mẫu số liệu",
      "Khi hai mẫu số liệu ghép nhóm có cùng đơn vị đo và có số trung bình cộng bằng nhau (hoặc xấp xỉ nhau), mẫu số liệu nào có độ lệch chuẩn nhỏ hơn thì mức độ phân tán của các số liệu trong mẫu đó sẽ thấp hơn",
      "Phương sai của mẫu số liệu ghép nhóm xấp xỉ phương sai của mẫu số liệu gốc và được dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm đó",
      "Độ lệch chuẩn của mẫu số liệu ghép nhóm luôn bằng độ lệch chuẩn của mẫu số liệu gốc và được dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm đó"
    ],
    "answer": 3,
    "explain": "Độ lệch chuẩn của mẫu số liệu ghép nhóm là một ước lượng xấp xỉ độ lệch chuẩn của mẫu số liệu gốc và được dùng để đo mức độ phân tán của mẫu số liệu ghép nhóm đó."
  },
  {
    "id": "2D312TN11",
    "question": "Khảo sát chiều cao của một nhóm $10$ học sinh lớp 12A. Ta có được mẫu số liệu ghép nhóm như sau:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS12_004.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên của mẫu số liệu trên là",
    "options": [
      "$20$",
      "$25$",
      "$15$",
      "$30$"
    ],
    "answer": 0,
    "explain": "Khoảng biến thiên của mẫu số liệu là $R=170-150=20$."
  },
  {
    "id": "2D313TN12",
    "question": "Khi thống kê điểm kiểm tra học kì $1$ môn Toán khối $12$ ở một trường phổ thông, người ta tổng hợp kết quả bằng một mẫu số liệu ghép nhóm. Mẫu số liệu ghép nhóm đó có tứ phân vị thứ nhất, tứ phân vị thứ hai, tứ phân vị thứ ba lần lượt là $4{,}0$ ; $5{,}5$ và $7{,}0$. Khoảng tứ phân vị của mẫu số liệu ghép nhóm đó bằng bao nhiêu?",
    "options": [
      "$5{,}5$",
      "$7$",
      "$2{,}5$",
      "$3$"
    ],
    "answer": 3,
    "explain": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm là $\\Delta Q = Q_3 - Q_1=3$."
  },
  {
    "id": "2D313TN13",
    "question": "Khảo sát thời gian tập thể dục trong ngày của một số học sinh khối 10 thu được mẫu số liệu ghép nhóm.  Nhóm chứa tứ phân vị thứ nhất là<br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS13_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "options": [
      "$[20; 40)$",
      "$[0; 20)$",
      "$[40; 60)$",
      "$[60; 80)$"
    ],
    "answer": 0,
    "explain": "Ta có cỡ mẫu $n=5+9+12+10+6=42$.<br>  Xét $\\dfrac{n}{4}=\\dfrac{42}{4}=10{,}5$. Vậy nhóm chứa tứ phân vị thứ nhất là $[20;40)$."
  },
  {
    "id": "2D312TN14",
    "question": "Số đo cân nặng của một số học sinh lớp 12T được cho trong bảng sau  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS13_008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên của mẫu số liệu ghép nhóm trên là",
    "options": [
      "$30$",
      "$5$",
      "$10$",
      "$16$"
    ],
    "answer": 0,
    "explain": "Khoảng biến thiên của mẫu số liệu ghép nhóm là $R=70{,}5-40{,}5=30$."
  },
  {
    "id": "2D312TN15",
    "question": "Cho mẫu số liệu ghép nhóm thời gian sử dụng internet trong $10$ ngày (tính bằng đơn vị giờ) của $30$ em học sinh lớp $12$ trường THPT Quế Sơn như sau:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS14_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên của mẫu số liệu ghép nhóm trên bằng",
    "options": [
      "$30$",
      "$9$",
      "$20$",
      "$25$"
    ],
    "answer": 3,
    "explain": "Khoảng biến thiên bằng $30-5=25$."
  },
  {
    "id": "2D313TN16",
    "question": "Mệnh đề nào sau đây {\\bf sai} khi nói về khoảng tứ phân vị của mẫu số liệu ghép nhóm?",
    "options": [
      "Là giá trị xấp xỉ cho khoảng tứ phân vị của mẫu số liệu gốc",
      "Không bị ảnh hưởng bởi các giá trị bất thường trong mẫu số liệu",
      "Có thể nhận giá trị âm",
      "Là hiệu số giữa tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$ của mẫu số liệu ghép nhóm đó"
    ],
    "answer": 2,
    "explain": "Khoảng tứ phân vị của mẫu số liệu ghép nhóm luôn nhận giá trị dương."
  },
  {
    "id": "2D314TN17",
    "question": "Số đặc trưng nào <strong>không</strong> sử dụng thông tin của nhóm số liệu đầu tiên và nhóm số liệu cuối cùng?",
    "options": [
      "Phương sai",
      "Khoảng tứ phân vị",
      "Độ lệch chuẩn",
      "Khoảng biến thiên"
    ],
    "answer": 1,
    "explain": "Khoảng tứ phân vị được xác định bằng hiệu giữa tứ phân vị thứ ba ($Q_3$) và tứ phân vị thứ nhất ($Q_1$), tức là dựa trên $50\\%$ dữ liệu ở giữa. Do đó, khoảng tứ phân vị không sử dụng thông tin của nhóm số liệu đầu tiên và nhóm số liệu cuối cùng."
  },
  {
    "id": "2D313TN18",
    "question": "Cho mẫu số liệu ghép nhóm có từ phần tử thứ nhất là $Q_1$, từ phần tử thứ hai là $Q_2$ và từ phần tử thứ ba là $Q_3$. Khoảng tứ phân vị của mẫu số liệu đã cho là",
    "options": [
      "$Q_3 - Q_2$",
      "$Q_3 - Q_1$",
      "$Q_2 - Q_1$",
      "$Q_2 + Q_3 - Q_1$"
    ],
    "answer": 1,
    "explain": "Khoảng tứ phân vị của mẫu số liệu đã cho là $\\Delta Q=Q_3 - Q_1$."
  },
  {
    "id": "2D312TN19",
    "question": "Cho mẫu số liệu ghép nhóm có nhóm thứ nhất là $[a_1; a_2)$, nhóm cuối cùng là $\\left[a_k; a_{k+1}\\right)$. Giá trị trung bình của mẫu số liệu trên là $\\overline{x}$. Khoảng biến thiên của mẫu số liệu đã cho là",
    "options": [
      "$a_k - a_2$",
      "$a_{k+1} - a_2$",
      "$a_{k+1} - a_1$",
      "$a_{k+1} + a_1 - \\overline{x}$"
    ],
    "answer": 2,
    "explain": "Khoảng biến thiên của mẫu số liệu đã cho là $R=a_{k+1} - a_1$."
  },
  {
    "id": "2D312TN20",
    "question": "Số tiền mà sinh viên chi cho thanh toán cước điện thoại trong tháng:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS21_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên của mẫu số liệu trên là",
    "options": [
      "$R = 250$",
      "$R = 50$",
      "$R = 200$",
      "$R = 150$"
    ],
    "answer": 0,
    "explain": "Khoảng biến thiên $R = 250 - 0 = 250$."
  },
  {
    "id": "2D314TN21",
    "question": "Các bạn học sinh lớp 10A trả lời $40$ câu hỏi trong một bài kiểm tra. Kết quả được thống kê ở bảng sau:  <br><img src=\"data/12/2D3/im2D31/dlts_12_DLTS25_000.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Xác định nhóm có tần số lớn nhất.",
    "options": [
      "$[26; 31)$",
      "$[21; 26)$",
      "$[31; 36)$",
      "$[36; 41)$"
    ],
    "answer": 0,
    "explain": "Nhóm có tần số lớn nhất là $[26; 31)$."
  },
  {
    "id": "2D312TN21",
    "question": "Một vườn thú ghi lại tuổi thọ (đơn vị: năm) của $20$ con hổ và thu được kết quả như sau  <br><img src=\"data/12/2D3/im2D31/loc2_2_TL_TN_THPT_Bin_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên (đơn vị: năm) của mẫu số liệu ghép nhóm trên bảng số liệu đã cho là",
    "options": [
      "$6$",
      "$5$",
      "$3$",
      "$4$"
    ],
    "answer": 1,
    "explain": "Khoảng biến thiên của mẫu số liệu ghép nhóm trên bảng số liệu đã cho là $R=19-14=5$."
  },
  {
    "id": "2D313TN2",
    "question": "Khảo sát thời gian tập thể dục trong ngày của một số học sinh khối $10$ thu được mẫu số liệu ghép nhóm sau  <br><img src=\"data/12/2D3/im2D31/loc2_2_TL_TN_THPT_Bin_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Nhóm chứa tứ phân vị thứ nhất là",
    "options": [
      "$[40;60)$",
      "$[20;40)$",
      "$[0;20)$",
      "$[60;80)$"
    ],
    "answer": 1,
    "explain": "Nhóm chứa tứ phân vị thứ nhất là $[20;40)$."
  },
  {
    "id": "2D312TN22",
    "question": "Bảng sau thống kê cân nặng của $50$ quả xoài được lựa chọn ngẫu nhiên sau khi thu hoạch ở một nông trường  <br><img src=\"data/12/2D3/im2D31/loc3_2_TL_TN_DS_THPT__001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  Khoảng biến thiên của mẫu số liệu trên là",
    "options": [
      "$200$",
      "$350$",
      "$40$",
      "$700$"
    ],
    "answer": 0,
    "explain": "Khoảng biến thiên của mẫu số liệu trên là $450-250=200$."
  }
];
