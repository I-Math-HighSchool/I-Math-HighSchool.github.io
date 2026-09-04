// =========================================================================
// KHỐI DỮ LIỆU: 1D21 - Trả lời ngắn (nguồn DeLuyenTap)
// Nguồn: DeLuyenTap (chuyển từ LaTeX)
// =========================================================================
window.traLoiNgan1D21 = [
  {
    "id": "1D212TL1",
    "question": "Với mỗi số nguyên dương $n$ , lấy $n + 6$ điểm cách đều nhau trên đường tròn. Nối mỗi điểm với điểm cách nó hai điểm trên đường tròn đó để tạo thành các ngôi sao như Hình 1. Gọi $u_n$ là số đo góc ở đỉnh tính theo đơn vị độ của mỗi ngôi sao thì ta được dãy số ($u_n$). Tính $u_{12}$?",
    "answer": "120",
    "explain": "Ta thấy đường tròn được chia thành $n + 6$ cung bằng nhau và mỗi cung có số đo bằng $\\left(\\dfrac{360}{n+6}\\right)$ . Do mỗi điểm được nối với điểm cách nó hai điểm trên đường tròn nên góc ở đỉnh của mỗi ngôi sao là góc nội tiếp chắn $n + 6 - 2\\cdot3 = n$ cung bằng nhau đó. Suy ra số đo góc ở đỉnh tính theo đơn vị độ của mỗi ngôi sao là $u_n = \\dfrac{1}{2}\\cdot \\dfrac{360}{n+6}\\cdot n = \\dfrac{180n}{n+6}$ $u_{12} = \\dfrac{180\\cdot12}{12+6} = 120.$"
  }
];
