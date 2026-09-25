// ===== Copy Nomor HP =====
const copyNumber = document.getElementById('copyNumber');
if (copyNumber) {
    copyNumber.addEventListener('click', () => {
        const number = '62895391480010';
        navigator.clipboard.writeText(number).then(() => {
            const original = copyNumber.innerHTML;
            copyNumber.innerHTML = '<i class="fas fa-check"></i> Nomor tersalin!';
            setTimeout(() => (copyNumber.innerHTML = original), 1800);
        }).catch(() => {
            alert('Nomor: ' + number);
        });
    });
}

// ===== Animasi Fade-in =====
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = '0.6s ease';
    requestAnimationFrame(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    });
    console.log('%cXIXTECH-7 Auto Order', 'color:#00ffff;font-size:18px;font-weight:bold;');
    console.log('%cTelegram: t.me/AzrathielReals', 'color:#2b8dd6;font-size:14px;');
    console.log('%cDev: yogiSmp', 'color:#ff00ff;font-size:14px;');
});
