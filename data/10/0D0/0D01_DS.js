// =========================================================================
// KHỐI DỮ LIỆU: 0D01 - Đúng/Sai
// Nguồn: Lý thuyết chuẩn "Không gian mẫu và biến cố" (phép thử ngẫu nhiên,
// không gian mẫu $\Omega$, biến cố là tập con của không gian mẫu, biến cố
// chắc chắn/không thể, biến cố đối) - chương trình Toán 10, GV tự soạn
// câu ĐS/TL dựa trên lý thuyết chuẩn (theo đúng thành phần TN/ĐS/TL đã có
// sẵn của các bài khác trong chương 0D0 - chỉ có ĐS+TL, không có TN), đã
// tự kiểm tra lại toàn bộ kết quả trước khi đưa vào.
// =========================================================================
window.dungSai0D01 = [
  {
    "id": "0D011DS1",
    "question": "Gieo một con xúc xắc cân đối, đồng chất một lần. Gọi $\\Omega$ là không gian mẫu của phép thử.",
    "subQuestions": [
      {
        "text": "$\\Omega=\\{1;2;3;4;5;6\\}$",
        "answer": true
      },
      {
        "text": "Số phần tử của không gian mẫu là $6$",
        "answer": true
      },
      {
        "text": "Biến cố $A$: \"Xuất hiện mặt có số chấm là số nguyên tố\" được viết là $A=\\{2;3;5;7\\}$",
        "answer": false
      },
      {
        "text": "Biến cố $B$: \"Xuất hiện mặt có số chấm lớn hơn $6$\" là biến cố không thể",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Xúc xắc có $6$ mặt với số chấm từ $1$ đến $6$.<br>- <strong>Đúng</strong>. $|\\Omega|=6$.<br>- <strong>Sai</strong>. Các số nguyên tố có mặt trên xúc xắc (từ $1$ đến $6$) là $2,3,5$, nên $A=\\{2;3;5\\}$ (không có $7$ vì $7\\notin\\Omega$).<br>- <strong>Đúng</strong>. Không có mặt nào có số chấm lớn hơn $6$ nên $B=\\varnothing$, là biến cố không thể."
  },
  {
    "id": "0D011DS2",
    "question": "Gieo đồng thời hai đồng xu cân đối, đồng chất (kí hiệu $S$: sấp, $N$: ngửa).",
    "subQuestions": [
      {
        "text": "Không gian mẫu có $4$ phần tử: $\\Omega=\\{SS;SN;NS;NN\\}$",
        "answer": true
      },
      {
        "text": "Biến cố \"Có ít nhất một mặt sấp\" là $\\{SS;SN;NS\\}$",
        "answer": true
      },
      {
        "text": "Biến cố \"Cả hai đồng xu đều ngửa\" và biến cố \"Có ít nhất một mặt sấp\" là hai biến cố đối nhau",
        "answer": true
      },
      {
        "text": "Biến cố \"Có đúng ba mặt sấp\" là biến cố chắc chắn",
        "answer": false
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. Mỗi đồng xu có $2$ khả năng nên $\\Omega$ có $2\\times 2=4$ phần tử.<br>- <strong>Đúng</strong>. Liệt kê trực tiếp từ $\\Omega$.<br>- <strong>Đúng</strong>. Hai biến cố đối nhau khi hợp của chúng là $\\Omega$ và giao là $\\varnothing$; ở đây $\\{NN\\}$ và $\\{SS;SN;NS\\}$ thỏa mãn điều đó.<br>- <strong>Sai</strong>. Chỉ gieo $2$ đồng xu nên không thể có $3$ mặt sấp; đây là biến cố không thể ($\\varnothing$), không phải biến cố chắc chắn."
  }
];
