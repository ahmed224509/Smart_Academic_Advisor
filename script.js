// دالة حساب المعدل وتقديم النصيحة
document.getElementById("calcGpaBtn").addEventListener("click", function(event) {
    event.preventDefault(); // منع تحديث الصفحة لضمان بقاء النتيجة
    
    // طلب المعدل من الطالب
    let gpa = parseFloat(prompt("أدخل معدلك من 4:"));
    
    // التأكد من صحة الرقم (أن يكون رقماً وليس نصاً، وبين 0 و 4)
    if (isNaN(gpa) || gpa < 0 || gpa > 4) {
        alert("الرجاء إدخال رقم صحيح بين 0 و 4");
        return;
    }
    
    let advice = "";
    
    // تحديد النصيحة بناءً على المعدل
    if (gpa >= 3.5) {
        advice = "🌟 ممتاز! استمر في تفوقك.";
    } else if (gpa >= 2.0) {
        advice = "👍 جيد، يمكنك تحسين معدلك أكثر.";
    } else {
        advice = "🚨 تنبيه: أنت في حالة تعثر، راجع مرشدك.";
    }
    
    // عرض النتيجة في الصفحة باستخدام التنسيق الصحيح
    document.getElementById("resultBox").innerHTML = `معدلك هو: ${gpa} <br> النصيحة: ${advice}`;
});
