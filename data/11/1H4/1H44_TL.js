// =========================================================================
// KHỐI DỮ LIỆU: 1H44 - Trả lời ngắn
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.traLoiNgan1H44 = [
  {
    "id": "1H442TL1",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành.   Gọi $G$ là trọng tâm của tam giác $ABC$ và $E$ là điểm thuộc cạnh $SA$ thỏa mãn   $SE=\\dfrac{k}{n} \\cdot SA$ với $k, n \\in N^*$ và $\\dfrac{k}{n}$ là phân số tối giản.   Biết rằng $GE$ song song với mặt phẳng $(SCD)$.   Tính giá trị của biểu thức $k-n$.",
    "answer": "-1",
    "explain": "<br><img src=\"data/11/1D4/im1H44/dlts_11_DLTS6_009.png\" alt=\"hinh ve\" style=\"max-width:min(560px,90%);max-height:300px;width:auto;height:auto;display:block;margin:8px auto;\">  Gọi $F$ là giao điểm của $AG$ và $BC$ thì $F$ là trung điểm $BC$ (do $G$ là trọng tâm $\\triangle ABC$).<br>  Gọi $(P)$ là mặt phẳng qua điểm $G$, song song với mặt phẳng $(SCD)$, cắt $AD$, $BC$ tại $M$ và $N$.<br>  Vì $GE \\parallel (SCD)$ nên $GE \\subset (P)$, tức là $E$ là giao điểm của $(P)$ và $SA$.<br>  Do $\\triangle GMA \\backsim \\triangle GNF$ nên  $  \\dfrac{AM}{NF} = \\dfrac{GA}{GF} = 2 \\Rightarrow AM = 2NF \\quad (1).  $  Áp dụng định lý Thalès cho tam giác $FAB$, ta được  $  \\dfrac{NF}{FB} = \\dfrac{FG}{FA} = \\dfrac{1}{3}  \\Rightarrow NF = \\dfrac{1}{3} FB  \\Rightarrow NF = \\dfrac{1}{6} BC \\quad (2).  $  Từ $(1)$ và $(2)$, suy ra  $  AM = \\dfrac{1}{3} BC = \\dfrac{1}{3} AD  \\Rightarrow \\dfrac{DM}{DA} = \\dfrac{2}{3}.  $  Ta thấy   $(P) \\parallel (SCD)$<br>$(SAD) \\cap (P) = ME$<br>$(SAD) \\cap (SCD) = SD.$  Do đó, $ME \\parallel SD$. Suy ra  $  \\dfrac{SE}{SA} = \\dfrac{DM}{DA} = \\dfrac{2}{3}  \\Rightarrow SE = \\dfrac{2}{3} SA.  $  Do vậy $k=2$, $n=3$ và $k-n=-1$."
  },
  {
    "id": "1H442TL2",
    "question": "Một vật đang ở vị trí $O$ chịu hai lực tác dụng ngược chiều nhau là $\\overrightarrow{F_1}$ và $\\overrightarrow{F_2}$, trong đó độ lớn lực $\\overrightarrow{F_2}$ lớn gấp $\\dfrac{3}{2}$ độ lớn lực $\\overrightarrow{F_1}$. Người ta muốn lực ở trạng thái cân bằng nên cần tác dụng vào vật hai lực $\\overrightarrow{F_3}$ và $\\overrightarrow{F_4}$ có phương hợp với lực $\\overrightarrow{F_1}$ góc $45^\\circ$. độ lớn lực $\\overrightarrow{F_3}$ và $\\overrightarrow{F_4}$ bằng nhau và bằng $10N$ như hình vẽ dưới đây. Tính tổng độ lớn của hai lực $\\overrightarrow{F_1}$ và $\\overrightarrow{F_2}$. {\\it (kết quả làm tròn đến hàng phần mười)}.",
    "answer": "1,2",
    "explain": ""
  }
];
