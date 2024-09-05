function verifyCode() {
    const correctCode = "36S5N9"; // Set your correct code here
    const userCode = document.getElementById('codeInput').value;
    const resultMessage = document.getElementById('resultMessage');
    
    if (userCode === correctCode) {
        resultMessage.textContent = "You Win! 🥂👏🍾";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Please try again.❌";
        resultMessage.style.color = "red";
    }
}