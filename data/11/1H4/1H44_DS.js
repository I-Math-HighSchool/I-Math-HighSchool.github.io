// =========================================================================
// KHỐI DỮ LIỆU: 1H44 - Đúng sai
// Nguồn: Đề thi Giữa Kì/Cuối Kì thật từ các trường THPT (thư mục LocID/BANK-25-26,
// đợt 3), giữ nguyên nội dung gốc, chỉ định dạng lại cho khớp cấu trúc dữ liệu.
// =========================================================================
window.dungSai1H44 = [
  {
    "id": "1H442DS1",
    "question": "Cho hình chóp $S. ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$, $N$ lần lượt là trung điểm của $SA$, $AD$, (hình vẽ).<br><img src=\"data/11/1D4/im1H44/dlts_11_DLTS12_002.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">",
    "subQuestions": [
      {
        "text": "$M$ thuộc mặt phẳng $(SAD)$",
        "answer": true
      },
      {
        "text": "$ON\\parallel AB$",
        "answer": true
      },
      {
        "text": "$OM\\parallel SC\\Rightarrow OM\\parallel (SAC)$",
        "answer": false
      },
      {
        "text": "$(OMN)\\parallel (SCD)$",
        "answer": true
      }
    ],
    "explain": "<br>- <strong>Đúng</strong>.<br>  Ta có $M\\in SA$, $SA\\subset (SAD)$. Do đó $M\\in (SAD)$.<br>- <strong>Đúng</strong>.<br>  Ta có $ON$ là đường trung bình của tam giác $ADB$ suy ra $ON\\parallel AB$.<br>- <strong>Sai</strong>.<br>  Ta có $OM$ là đường trung bình của tam giác $SAC$ suy ra $OM\\parallel SC$, nhưng $OM\\subset (SAC)$.<br>- <strong>Đúng</strong>.<br>  Ta có   <br>- $ON\\parallel CD$ vì $ON$ là đường trung bình của tam giác $ADC$\\hfill(1).<br>- $OM\\parallel SC$ vì $OM$ là đường trung bình của tam giác $SAC$\\hfill(2).<br>- $OM$ cắt $ON$ tại $O$ và cùng thuộc mp$(OMN)$\\hfill(3).<br>- $CD$ cắt $SC$ tại $C$ và cùng thuộc mp$(SCD)$\\hfill(4).  Từ (1), (2), (3) và (4) suy ra $(OMN)\\parallel (SCD)$."
  },
  {
    "id": "1H442DS2",
    "question": "Cho hình chóp $S. ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$, $N$ lần lượt là trung điểm của $SA$ và $SD$.",
    "subQuestions": [
      {
        "text": "$MN\\parallel(SBC)$",
        "answer": true
      },
      {
        "text": "$(OMN) \\parallel(SBC)$",
        "answer": true
      },
      {
        "text": "Gọi $E$ là trung điểm của đoạn thẳng $CD$. Khi đó $E$ là giao điểm của $CD$ với mặt phẳng $(OMN)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(OMN)$ cắt các mặt của hình chóp $S. ABCD$ tạo thành một hình bình hành",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H44/dlts_11_DLTS17_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $MN$ là đường trung bình $\\triangle SAD$ suy ra $MN\\parallel AD$.<br>  Mà $AD\\parallel BC$ suy ra $MN\\parallel BC$, $BC\\subset (SBC)$ do đó $MN\\parallel (SBC)$.<br>- Ta có $ON$ là đường trung bình $\\triangle SBD$ suy ra $ON\\parallel SB$.<br>  Mà $SB\\subset (SBC)$ do đó $ON\\parallel (SBC)$.<br>  Vì $MN\\parallel (SBC) \\text{ và } ON\\parallel (SBC)$ nên $(OMN) \\parallel(SBC)$.<br>- Ta có $OE\\parallel AD$ (đường trung bình $\\triangle ADC$) suy ra $OE\\parallel MN$. Do đó $E\\in (OMN)$. Suy ra $E=CD\\cap (OMN)$.<br>- Trong $(ABCD)$ gọi $OE\\cap AB=F$.<br>  Vì $OE\\parallel AD\\parallel BC$ nên $F$ là trung điểm $AB$.<br>  Ta có $(OMN)\\cap (SAD)=MN \\text{ và } (OMN)\\cap (SDC)=NE \\text{ và } (OMN)\\cap (ABCD)=EF \\text{ và } (OMN)\\cap (SAB)=FM. $<br>  Suy ra $(OMN)$ cắt các mặt hình chóp $S.ABCD$ tạo thành tứ giác $MNEF$ .<br>  Vì $EF\\parallel MN$ nên $MNEF$ là hình thang."
  },
  {
    "id": "1H442DS3",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $O$ là giao điểm của $AC$ và $BD$. $M$, $N$, $P$ lần lượt là trung điểm của $SB$, $SD$, $SC$. Khi đó:",
    "subQuestions": [
      {
        "text": "Tỉ số đồng dạng của tam giác $OMP$ và tam giác $SDA$ là $\\dfrac{1}{3}$",
        "answer": false
      },
      {
        "text": "Đường thẳng $MN$ song song với đường thẳng $BC$",
        "answer": true
      },
      {
        "text": "Đường thẳng $OP$ song song với mặt phẳng $(SAD)$",
        "answer": true
      },
      {
        "text": "Mặt phẳng $(MOP)$ song song với mặt phẳng $(SAD)$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H44/dlts_11_DLTS19_006.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $OM$, $OP$, $MP$ lần lượt là đường trung bình của các tam giác $BSD$, $CSA$, $SBC$<br>   $\\Rightarrow \\dfrac{OM}{SD}=\\dfrac{OP}{SA}=\\dfrac{MP}{BC}$, mà $BC=AD$ ($ABCD$ là hình bình hành)<br>   $\\Rightarrow \\dfrac{OM}{SD}=\\dfrac{OP}{SA}=\\dfrac{MP}{AD}=\\dfrac{1}{2}\\Rightarrow \\triangle OMP\\sim \\triangle SDA$ theo tỉ số đồng dạng $\\dfrac{1}{2}$.<br>- $MN$ là đường trung bình của tam giác $SBD\\Rightarrow MN\\parallel BC$.<br>- $OP\\parallel SA$, mà $SA\\subset (SAD)\\Rightarrow OP\\parallel (SAD)$.<br>- $OP\\parallel SA$, mà $SA\\subset (SAD)\\Rightarrow OP\\parallel (SAD)$.<br>   $OM\\parallel SD$, mà $SD\\subset (SAD)\\Rightarrow OM\\parallel (SAD)$.<br>   $OP$, $OM\\subset (OMP)\\Rightarrow (OMP)\\parallel (SAD)$."
  },
  {
    "id": "1H442DS4",
    "question": "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$, $N$ lần lượt là trung điểm của $SA$ và $SD$. Khi đó",
    "subQuestions": [
      {
        "text": "$MN\\parallel(SBC)$",
        "answer": true
      },
      {
        "text": "$(OMN)\\parallel(SBC)$",
        "answer": true
      },
      {
        "text": "Gọi $E$ là trung điểm đoạn $AB$ và $F$ là một điểm thuộc đoạn $ON$. Khi đó $EF$ cắt với mặt phẳng $(SBC)$",
        "answer": false
      },
      {
        "text": "Gọi $G$ là một điểm trên mặt phẳng $(ABCD)$ cách đều $AB$ và $CD$. Khi đó $GN$ cắt $(SAB)$",
        "answer": false
      }
    ],
    "explain": "<br><img src=\"data/11/1D4/im1H44/dlts_11_DLTS9_001.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Từ giả thiết suy ra $MN\\parallel AD\\parallel BC$, mà $BC\\subset(SBC)$ và $MN\\not\\subset(SBC)$, nên $MN\\parallel(SBC)$.\\hfill(1)<br>  Vậy, mệnh đề “ $MN\\parallel(SBC)$”\\, đúng.<br>- Lại có $OM$ là đường trung bình của tam giác $SAC$, nên $OM\\parallel SC\\Rightarrow OM\\parallel(SBC)$.\\hfill(2)<br>  Từ (1) và (2), suy ra $(OMN)\\parallel(SBC)$.\\hfill(3)<br>  Vậy, mệnh đề “ $(OMN)\\parallel(SBC)$”\\, là đúng.<br>- Lại có $OE$ là đường trung bình của tam giác $ABD$, nên $OE\\parallel AD\\parallel MN\\Rightarrow OE\\parallel MN\\Rightarrow E\\in(OMN)$, suy ra $EF\\subset(OMN)$.\\hfill(4)<br>  Từ (3) và (4), ta có $EF\\parallel(SBC)$. <br>  Vậy, mệnh đề “ Gọi $E$ là trung điểm đoạn $AB$ và $F$ là một điểm thuộc đoạn $ON$. Khi đó $EF$ cắt với mặt phẳng $(SBC)$”\\, là sai.<br>- Vì $G$ thuộc mặt phẳng $(ABCD)$ và cách đều $AB$, $CD$ nên $G$ thuộc đường trung bình của hình bình hành $ABCD$ (ứng với hai cạnh $AB$, $CD$).<br>  Gọi $I$ là trung điểm của $AD$, suy ra $O$, $I$, $G$ thẳng hàng. Ta có $OI\\parallel AB$ (do $OI$ là đường trung bình của tam giác $ABD$), suy ra $OI\\parallel(SAB)$.\\hfill(5)<br>  Tương tự, ta có $ON\\parallel SB$, suy ra $ON\\parallel(SAB)$.\\hfill(6)<br>  Từ (5) và (6) suy ra $(ONI)\\parallel(SAB)$ mà $NG\\subset(ONI)$ nên $NG\\parallel(SAB)$.<br>  Vậy, mệnh đề “ Gọi $G$ là một điểm trên mặt phẳng $(ABCD)$ cách đều $AB$ và $CD$. Khi đó $GN$ cắt $(SAB)$”\\, sai."
  },
  {
    "id": "1H442DS5",
    "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$, $N$ lần lượt là trung điểm của $SA$, $AB$.",
    "subQuestions": [
      {
        "text": "$(MBC)\\cap(SAD)=Sx\\parallel BC\\parallel AD$",
        "answer": false
      },
      {
        "text": "$CD\\parallel MN$",
        "answer": false
      },
      {
        "text": "$OM\\parallel (SCD)$",
        "answer": true
      },
      {
        "text": "$(OMN)\\parallel (SBC)$",
        "answer": true
      }
    ],
    "explain": "<br><img src=\"data/11/1H4/im1H44/loc3_1_TL_TN_DS_THPT__008.png\" alt=\"hinh ve\" style=\"max-width:min(420px,85%);max-height:240px;width:auto;height:auto;display:block;margin:8px auto;\">  <br>- Ta có $M\\in (MBC)\\cap (SAD) \\text{ và } (MBC)\\supset BC\\parallel AD\\subset (SAD)\\Rightarrow(MBC)\\cap(SAD)=Mx\\parallel BC\\parallel AD$.<br>- Ta có $N$, $C$, $D\\in(ABCD)$, $M\\notin (ABCD)$, suy ra $MN$ và $CD$ chéo nhau.<br>- Ta có $MO\\parallel SC\\subset (SCD)$, suy ra $OM\\parallel (SCD)$.<br>- Ta có $(OMN)\\supset MN\\parallel SB\\subset (SBC) \\text{ và } (OMN)\\supset OM\\parallel SC\\subset (SBC)\\Rightarrow (OMN)\\parallel(SBC)$."
  }
];
