// =========================================================================
// KHỐI DỮ LIỆU: 0D62 - Đúng/Sai
// Nguồn: SachBaiHoc_T10/Data-T10/TK10-CD1.2-Bieu-Do.tex, mục "Bảng số liệu"
// (kiểm tra tính hợp lý của số liệu thống kê qua các ví dụ thực tế: bảng
// nhiệt độ, bảng số lớp/học sinh, bảng số sản phẩm bán ra, bảng số sản
// phẩm của tổ sản xuất) - chuyển thể sang định dạng TN/ĐS của ngân hàng,
// đã tự kiểm tra lại toàn bộ số liệu và phép tính trước khi đưa vào.
// =========================================================================
window.dungSai0D62 = [
  {
    "id": "0D621DS1",
    "question": "Một trường THPT thống kê số lớp và số học sinh theo khối: Khối $10$ có $9$ lớp, $396$ học sinh; Khối $11$ có $8$ lớp, $370$ học sinh; Khối $12$ có $8$ lớp, $345$ học sinh. Biết sĩ số mỗi lớp trong trường không vượt quá $45$ học sinh.",
    "subQuestions": [
      {
        "text": "Sĩ số trung bình mỗi lớp của khối $10$ là $44$ học sinh",
        "answer": true
      },
      {
        "text": "Sĩ số trung bình mỗi lớp của khối $11$ là $46,25$ học sinh",
        "answer": true
      },
      {
        "text": "Số liệu thống kê của khối $11$ là hợp lý vì $46,25$ chỉ lớn hơn $45$ một chút",
        "answer": false
      },
      {
        "text": "Số liệu thống kê của khối $12$ là hợp lý vì sĩ số trung bình $43,125$ học sinh nhỏ hơn $45$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>. $396:9=44$.<br>- <strong>Đúng</strong>. $370:8=46,25$.<br>- <strong>Sai</strong>. Vì sĩ số mỗi lớp không được vượt quá $45$, mà $46,25>45$, nên số liệu của khối $11$ không hợp lý (bị thống kê sai), dù chỉ lệch một chút.<br>- <strong>Đúng</strong>. $345:8=43,125<45$ nên số liệu khối $12$ hợp lý."
  }
];
