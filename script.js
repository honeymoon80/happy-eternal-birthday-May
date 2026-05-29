// ===== CÓDIGO MÍNIMO PARA PROBAR EL REGALO =====
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('giftBox');
    const giftLabel = document.getElementById('giftClickLabel');
    const giftProgressBar = document.getElementById('giftProgressBar');
    const giftScreen = document.getElementById('giftScreen');
    const mainApp = document.getElementById('mainApp');
    
    let clics = 0;
    const CLICS_NECESARIOS = 20;
    
    function abrirRegalo() {
        if (giftScreen) giftScreen.classList.add('closing');
        setTimeout(() => {
            if (giftScreen) giftScreen.style.display = 'none';
            if (mainApp) mainApp.classList.remove('hidden');
            alert('🎉 REGALO ABIERTO! 🎉');
        }, 600);
    }
    
    function hacerClic() {
        clics++;
        if (giftLabel) giftLabel.innerText = clics + ' / ' + CLICS_NECESARIOS + ' clics 💗';
        if (giftProgressBar) giftProgressBar.style.width = (clics / CLICS_NECESARIOS * 100) + '%';
        
        if (clics >= CLICS_NECESARIOS) {
            abrirRegalo();
        }
    }
    
    if (giftBox) {
        giftBox.onclick = hacerClic;
        alert('✅ Regalo listo! Haz clic en el pastel');
    } else {
        alert('❌ ERROR: No encontré el pastel. Revisa el HTML.');
    }
});
