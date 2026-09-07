// =========================================================================
// KHỐI DỮ LIỆU: 0D62 - Trắc nghiệm
// Nguồn: SachBaiHoc_T10/Data-T10/TK10-CD1.2-Bieu-Do.tex, mục "Bảng số liệu"
// (kiểm tra tính hợp lý của số liệu thống kê qua các ví dụ thực tế: bảng
// nhiệt độ, bảng số lớp/học sinh, bảng số sản phẩm bán ra, bảng số sản
// phẩm của tổ sản xuất) - chuyển thể sang định dạng TN/ĐS của ngân hàng,
// đã tự kiểm tra lại toàn bộ số liệu và phép tính trước khi đưa vào.
// =========================================================================
window.tracNghiem0D62 = [
  {
    "id": "0D621TN1",
    "question": "Bảng sau ghi lại nhiệt độ không khí trung bình (đơn vị: $^\\circ C$) các tháng trong năm 2020 tại một trạm quan trắc ở thành phố Vinh:<br>Tháng 1–12: $20,9;\\,20,7;\\,23,7;\\,23;\\,29,5;\\,32,2;\\,4,5;\\,29,6;\\,28,9;\\,23,8;\\,23,1;\\,18,4$.<br>Biết tháng 7 là mùa hè nên nhiệt độ trung bình phải cao. Số liệu của tháng nào đã bị ghi nhầm?",
    "options": [
      "Tháng $7$",
      "Tháng $1$",
      "Tháng $9$",
      "Tháng $12$"
    ],
    "answer": 0,
    "explain": "Các tháng khác đều có nhiệt độ trong khoảng $18^\\circ C$ đến $32^\\circ C$, riêng tháng $7$ (mùa hè, lẽ ra phải nóng nhất) lại ghi $4,5^\\circ C$ – thấp bất thường so với quy luật khí hậu. Vậy số liệu tháng $7$ bị ghi nhầm."
  },
  {
    "id": "0D621TN2",
    "question": "Một trường THPT thống kê số lớp và số học sinh theo khối: Khối $10$ có $9$ lớp, $396$ học sinh; Khối $11$ có $8$ lớp, $370$ học sinh; Khối $12$ có $8$ lớp, $345$ học sinh. Biết sĩ số mỗi lớp không vượt quá $45$ học sinh. Khối nào bị thống kê sai?",
    "options": [
      "Khối $11$",
      "Khối $10$",
      "Khối $12$",
      "Không có khối nào sai"
    ],
    "answer": 0,
    "explain": "Sĩ số trung bình mỗi lớp: Khối $10$: $396:9=44$; Khối $11$: $370:8=46,25$; Khối $12$: $345:8=43,125$.<br>Vì sĩ số mỗi lớp không vượt quá $45$ nên khối $11$ (trung bình $46,25>45$) có số liệu không hợp lý, tức là bị thống kê sai."
  },
  {
    "id": "0D621TN3",
    "question": "Với bảng số liệu ở câu trên (Khối $12$ có $8$ lớp, $345$ học sinh), sĩ số trung bình mỗi lớp của khối $12$ là",
    "options": [
      "$43,125$",
      "$44$",
      "$46,25$",
      "$45$"
    ],
    "answer": 0,
    "explain": "Sĩ số trung bình mỗi lớp của khối $12$ là $345:8=43,125$ (học sinh)."
  },
  {
    "id": "0D621TN4",
    "question": "Số sản phẩm bán ra trong $6$ tháng đầu năm của một cửa hàng là $145;175;211;256;340;371$ (mỗi tháng đều tăng khoảng $20\\%$ so với tháng trước). Tỉ lệ phần trăm tăng thêm của số sản phẩm bán ra từ tháng $4$ sang tháng $5$ (làm tròn đến $1$ chữ số thập phân) là",
    "options": [
      "$32,8\\%$",
      "$20,6\\%$",
      "$21,3\\%$",
      "$9,1\\%$"
    ],
    "answer": 0,
    "explain": "Tỉ lệ tăng từ tháng $4$ ($256$) sang tháng $5$ ($340$) là $\\dfrac{340-256}{256}\\approx 32,8\\%$."
  },
  {
    "id": "0D621TN5",
    "question": "Vẫn với bảng số sản phẩm bán ra $6$ tháng ở câu trên, số liệu của tháng nào không hợp lý so với xu hướng tăng đều khoảng $20\\%$ mỗi tháng:",
    "options": [
      "Tháng $5$",
      "Tháng $2$",
      "Tháng $3$",
      "Tháng $6$"
    ],
    "answer": 0,
    "explain": "Tỉ lệ tăng từ tháng $1\\to 2$ là $20,7\\%$, từ $2\\to 3$ là $20,6\\%$, từ $3\\to 4$ là $21,3\\%$ – đều xấp xỉ $20\\%$. Nhưng tỉ lệ tăng từ $4\\to 5$ lên tới $32,8\\%$ và từ $5\\to 6$ chỉ còn $9,1\\%$ – cả hai đều lệch xa $20\\%$. Điều này cho thấy chính số liệu của <strong>tháng $5$</strong> ($340$) không chính xác."
  },
  {
    "id": "0D621TN6",
    "question": "Một đội $20$ thợ thủ công được chia đều vào $5$ tổ. Số người của mỗi tổ là",
    "options": [
      "$4$ người",
      "$5$ người",
      "$6$ người",
      "$3$ người"
    ],
    "answer": 0,
    "explain": "Số người mỗi tổ là $20:5=4$ (người)."
  },
  {
    "id": "0D621TN7",
    "question": "Ở đội thợ trên (mỗi tổ $4$ người), trong một ngày mỗi người thợ làm được $4$ hoặc $5$ sản phẩm. Số sản phẩm mà một tổ làm được trong ngày phải nằm trong khoảng nào?",
    "options": [
      "Từ $16$ đến $20$ sản phẩm",
      "Từ $15$ đến $20$ sản phẩm",
      "Từ $16$ đến $21$ sản phẩm",
      "Từ $17$ đến $21$ sản phẩm"
    ],
    "answer": 0,
    "explain": "Mỗi tổ có $4$ người, mỗi người làm $4$ hoặc $5$ sản phẩm nên số sản phẩm của tổ nằm trong đoạn $[4\\times 4;\\,4\\times 5]=[16;20]$."
  },
  {
    "id": "0D621TN8",
    "question": "Đội trưởng thống kê số sản phẩm $5$ tổ làm được trong ngày lần lượt là $17;19;19;21;20$. Biết mỗi tổ có $4$ người và mỗi người làm $4$ hoặc $5$ sản phẩm/ngày. Tổ nào có số liệu liệu không hợp lý?",
    "options": [
      "Tổ $4$",
      "Tổ $1$",
      "Tổ $2$",
      "Tổ $5$"
    ],
    "answer": 0,
    "explain": "Số sản phẩm hợp lý của một tổ chỉ có thể sừ $16$ đến $20$. Tổ $4$ ghi $21$ sản phẩm, vưượt quá giới hạn $20$, nên số liệu của tổ $4$ không hợp lý."
  },
  {
    "id": "0D621TN9",
    "question": "Để kiểm tra tính hợp lý của một số liệu thống kê, cách làm phù hợp nhất là",
    "options": [
      "Đối chiếu số liệu đó với các số liệu liên quan hoặc kiến thức thực tế đã biết",
      "Luôn tin tưởng tuyệt đối vào số liệu vì đó là số liệu đã công bố",
      "Chỉ cần tính trung bình cộng của tất cả số liệu trong bảng",
      "Bỏ số liệu đó đi nếu thấy giá trị lớn hơn các số liệu còn lại"
    ],
    "answer": 0,
    "explain": "Muốn phát hiện số liệu thống kê không chính xác, ta cần dựa vào các thông tin, quy luật hoặc kiến thức thực tế đã biết (ví dụ: quy luật thời tiết, giới hạn sĩ số, tỉ lệ tăng trưởng…) và đối chiếu với số liệu đã cho, chứ không chỉ dựa vào độ lớn hay tin tưởng tuyệt đối vào số liệu."
  },
  {
    "id": "0D621TN10",
    "question": "Theo bảng thống kê số lớp và học sinh (Khối $10$: $9$ lớp, $396$ học sinh), sĩ số trung bình mỗi lớp của khối $10$ là",
    "options": [
      "$44$",
      "$43,125$",
      "$46,25$",
      "$45$"
    ],
    "answer": 0,
    "explain": "Sĩ số trung bình mỗi lớp của khối $10$ là $396:9=44$ (học sinh)."
  }
];
